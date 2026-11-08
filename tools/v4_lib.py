#!/usr/bin/env python3
"""Shared helpers for the Movie Night v4 build: Wikipedia fetching with
resumable caches, infobox parsing (director / runtime / poster image),
poster URL resolution + live verification, and extract cleaning."""
import json
import os
import re
import threading
import time

import requests

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
os.makedirs(V4, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
REST = "https://en.wikipedia.org/api/rest_v1/page/summary/"
HEADERS = {"User-Agent": "MovieNightApp/4.0 (catalog build; educational project)"}
LOCK = threading.Lock()


def norm(t):
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", " ", (t or "").lower())).strip()


def load_json(path, default):
    try:
        return json.load(open(path))
    except Exception:
        return default


def save_json(path, obj):
    with open(path, "w") as fh:
        json.dump(obj, fh)


def session():
    # Fresh session per fetch (v3 lesson: long-lived sessions degrade).
    return requests.Session()


def api_get(params, tries=4):
    for att in range(tries):
        try:
            r = session().get(API, params=params, headers=HEADERS, timeout=(5, 45))
            if r.status_code == 429:
                time.sleep(2 * (att + 1))
                continue
            r.raise_for_status()
            return r.json()
        except Exception:
            if att == tries - 1:
                return {}
            time.sleep(1.5 * (att + 1))
    return {}


# ---------------- wikitext / infobox ----------------

def clean_name(raw):
    s = raw
    s = re.sub(r"<ref[^>]*>.*?</ref>", " ", s, flags=re.S)
    s = re.sub(r"<ref[^>]*/>", " ", s)
    s = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"\2", s)
    s = re.sub(r"\[\[([^\]]+)\]\]", r"\1", s)
    for _ in range(4):
        s2 = re.sub(r"\{\{[^{}]*\}\}", " ", s)
        if s2 == s:
            break
        s = s2
    s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
    s = s.replace("'''", " ").replace("''", " ")
    parts = re.split(r"<br\s*/?>|\*|,|\band\b|&", s)
    names = []
    for p in parts:
        p = re.sub(r"\s+", " ", p).strip(" .;:")
        p = re.sub(r"\(.*?\)", "", p).strip()
        if 2 <= len(p) <= 42 and re.search(r"[A-Za-z]", p) and not re.search(
                r"director|producer|written|film|studio", p, re.I):
            names.append(p)
    return ", ".join(names[:2]) if names else ""


def parse_infobox_full(text):
    """-> (director, runtime, image_filename)"""
    if "nfobox film" not in (text or ""):
        return "", None, ""
    region = text[text.find("nfobox film"):][:8000]
    director, runtime, image = "", None, ""
    m = re.search(r"\n\|\s*directors?\s*=\s*([^\n]+)", region)
    if m:
        director = clean_name(m.group(1))
    m = re.search(r"\n\|\s*(?:running_time|runtime)\s*=\s*([^\n]+)", region)
    if m:
        raw = re.sub(r"<ref[^>]*>.*?</ref>", " ", m.group(1), flags=re.S)
        mm = re.search(r"(\d{1,3})\s*(?:minutes|mins|min\.|min)\b", raw)
        if mm:
            runtime = int(mm.group(1))
        else:
            hm = re.search(r"(\d)\s*h(?:ours?)?\s*(?:and\s*)?(\d{1,2})", raw)
            if hm:
                runtime = int(hm.group(1)) * 60 + int(hm.group(2))
        if runtime is not None and not (40 <= runtime <= 400):
            runtime = None
    m = re.search(r"\n\|\s*image\s*=\s*([^\n]+)", region)
    if m:
        raw = re.sub(r"<ref[^>]*>.*?</ref>", " ", m.group(1), flags=re.S)
        raw = re.sub(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]", r"\1", raw).strip()
        raw = re.sub(r"^(File:|Image:)", "", raw).strip()
        raw = raw.split("|")[0].strip()
        if raw and re.search(r"\.(jpe?g|png|webp|svg)$", raw, re.I) and \
                not re.search(r"no[_ ]?(image|poster)|placeholder|question book", raw, re.I):
            image = raw
    return director, runtime, image


_wiki4 = None


def wikitext_cache():
    global _wiki4
    if _wiki4 is None:
        _wiki4 = load_json(f"{V4}/wikitext4.json", {})
    return _wiki4


def fetch_wikitext(articles):
    """Batch-fetch section-0 wikitext for articles not yet cached.
    Cache value: [director, runtime, image]."""
    cache = wikitext_cache()
    todo = [a for a in articles if a not in cache]
    for i in range(0, len(todo), 50):
        batch = todo[i:i + 50]
        data = {}
        for att in range(3):
            try:
                r = session().post(API, data={
                    "action": "query", "prop": "revisions", "rvprop": "content",
                    "rvsection": "0", "format": "json", "redirects": 1,
                    "titles": "|".join(batch),
                }, headers=HEADERS, timeout=60)
                if r.status_code == 429:
                    time.sleep(3 * (att + 1))
                    continue
                r.raise_for_status()
                data = r.json()
                break
            except Exception:
                time.sleep(2 * (att + 1))
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            revs = p.get("revisions") or []
            content = revs[0].get("*", "") if revs else ""
            by_title[p.get("title", "")] = parse_infobox_full(content)
        for t in batch:
            key = redir.get(normap.get(t, t), normap.get(t, t))
            cache[t] = list(by_title.get(key, ("", None, "")))
        if (i // 50) % 10 == 0:
            print(f"  wikitext4 {min(i + 50, len(todo))}/{len(todo)}", flush=True)
    save_json(f"{V4}/wikitext4.json", cache)
    return cache


# ---------------- poster resolution + verification ----------------

def resolve_file_urls(filenames):
    """{filename: upload.wikimedia URL} via imageinfo, batched."""
    out = {}
    names = sorted(set(f for f in filenames if f))
    for i in range(0, len(names), 50):
        batch = names[i:i + 50]
        data = api_get({
            "action": "query", "prop": "imageinfo", "iiprop": "url",
            "format": "json", "titles": "|".join("File:" + f for f in batch),
        })
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            ii = p.get("imageinfo") or []
            if ii:
                by_title[p.get("title", "")] = ii[0].get("url", "")
        for f in batch:
            url = by_title.get(normap.get("File:" + f, "File:" + f), "")
            if url:
                out[f] = url
    return out


_verify = None


def verify_cache():
    global _verify
    if _verify is None:
        _verify = load_json(f"{V4}/poster_verify.json", {})
    return _verify


def verify_urls(urls):
    """HEAD-check URLs (GET fallback on 403/405); cache verdicts.
    Returns {url: bool}."""
    from concurrent.futures import ThreadPoolExecutor
    cache = verify_cache()
    todo = [u for u in sorted(set(urls)) if u and u not in cache]
    done = [0]

    def work(url):
        ok = False
        for att in range(2):
            try:
                c = session().head(url, headers=HEADERS, timeout=(5, 12),
                                   allow_redirects=True)
                ok = c.status_code == 200 and \
                    c.headers.get("Content-Type", "").startswith("image")
                if not ok and c.status_code in (403, 405):
                    c = session().get(url, headers=HEADERS, timeout=(5, 12),
                                      stream=True)
                    ok = c.status_code == 200 and \
                        c.headers.get("Content-Type", "").startswith("image")
                    c.close()
                break
            except Exception:
                time.sleep(1.0 * (att + 1))
        with LOCK:
            cache[url] = ok
            done[0] += 1
            if done[0] % 400 == 0:
                save_json(f"{V4}/poster_verify.json", cache)
                print(f"  verify {done[0]}/{len(todo)}", flush=True)
        return ok

    if todo:
        with ThreadPoolExecutor(max_workers=10) as ex:
            list(ex.map(work, todo))
        with LOCK:
            save_json(f"{V4}/poster_verify.json", cache)
    return {u: cache.get(u, False) for u in urls}


def poster_for_article(article, summary_poster=""):
    """Best verified poster for an article: REST-summary poster first
    (already verified upstream in v3), else infobox image resolved +
    verified here. Returns '' when nothing verifies."""
    if summary_poster:
        return summary_poster
    cache = wikitext_cache()
    info = cache.get(article)
    if not info or not info[2]:
        return ""
    urls = resolve_file_urls([info[2]])
    url = urls.get(info[2], "")
    if not url:
        return ""
    return url if verify_urls([url]).get(url) else ""


# ---------------- REST summary ----------------

def fetch_summary(article):
    slug = requests.utils.quote(article.replace(" ", "_"), safe="")
    data = None
    for attempt in range(3):
        try:
            r = session().get(REST + slug, headers=HEADERS, timeout=(5, 15))
            if r.status_code == 404:
                return {"dead": True}
            if r.status_code == 429:
                time.sleep(3 * (attempt + 1))
                continue
            r.raise_for_status()
            data = r.json()
            break
        except Exception:
            if attempt == 2:
                return {"dead": True, "error": True}
            time.sleep(1.5 * (attempt + 1))
    if data is None:
        return {"dead": True, "error": True}
    if data.get("type") == "disambiguation":
        return {"dead": True}
    extract = data.get("extract", "") or ""
    poster = ""
    url = (data.get("originalimage") or {}).get("source") or \
        (data.get("thumbnail") or {}).get("source")
    if url:
        url = url.split("?")[0]
        poster = url if _verify_one(url) else ""
    return {"extract": extract[:1600], "poster": poster}


def _verify_one(url):
    """Inline single-URL image check (no shared state — safe to call from
    worker threads, unlike the pooled verify_urls)."""
    try:
        c = session().head(url, headers=HEADERS, timeout=(5, 12),
                           allow_redirects=True)
        ok = c.status_code == 200 and \
            c.headers.get("Content-Type", "").startswith("image")
        if not ok and c.status_code in (403, 405):
            c = session().get(url, headers=HEADERS, timeout=(5, 12), stream=True)
            ok = c.status_code == 200 and \
                c.headers.get("Content-Type", "").startswith("image")
            c.close()
        return ok
    except Exception:
        return False


def summary_cache():
    return load_json(f"{BUILD}/enrich_cache.json", {})


def fetch_summaries(articles):
    """Resumable summary fetch into .build/enrich_cache.json."""
    from concurrent.futures import ThreadPoolExecutor
    cache = summary_cache()
    todo = [a for a in articles if a not in cache]
    print(f"summaries: {len(cache)} cached, {len(todo)} to fetch", flush=True)
    done = [0]

    def work(article):
        res = fetch_summary(article)
        with LOCK:
            cache[article] = res
            done[0] += 1
            if done[0] % 100 == 0:
                save_json(f"{BUILD}/enrich_cache.json", cache)
                print(f"  summaries {done[0]}/{len(todo)}", flush=True)
        return res

    if todo:
        with ThreadPoolExecutor(max_workers=10) as ex:
            list(ex.map(work, todo))
        save_json(f"{BUILD}/enrich_cache.json", cache)
    return cache


# ---------------- extract cleaning (descriptions) ----------------

IPA_HINT = re.compile(r"[əɪʊɛɔːˈˌ]|pronounced|listen\)", re.I)


def clean_extract_description(extract, fallback):
    """Turn a Wikipedia lead extract into a clean 1-2 sentence description.
    Falls back when the extract is unusable."""
    if not extract:
        return fallback
    s = re.sub(r"\s+", " ", extract).strip()
    # drop parentheticals containing pronunciation/IPA clutter
    def drop_ipa(m):
        return "" if IPA_HINT.search(m.group(0)) else m.group(0)
    s = re.sub(r"\([^()]{0,120}\)", drop_ipa, s)
    s = re.sub(r"\s+", " ", s).replace(" ,", ",").replace(" .", ".").strip()
    sentences = re.split(r"(?<=[.!?])\s+", s)
    out = ""
    for sent in sentences:
        if len(sent) < 12:
            continue
        cand = (out + " " + sent).strip() if out else sent
        if len(cand) > 240 and out:
            break
        out = cand
        if len(out) >= 130:
            break
    if len(out) < 40 or "may refer to" in out.lower():
        return fallback
    if len(out) > 260:
        cut = out[:260]
        dot = cut.rfind(". ")
        out = cut[:dot + 1] if dot > 120 else cut.rsplit(" ", 1)[0] + "…"
    return out
