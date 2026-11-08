#!/usr/bin/env python3
"""V5 poster recovery.

The build's live-verify burst tripped upload.wikimedia.org rate limits
(HTTP 429), so thousands of good poster URLs were discarded as 'bad'.
This pass re-resolves poster candidates and confirms them through the
MediaWiki API instead of the CDN: imageinfo must return the file with an
image/* MIME type and a non-trivial size. That is existence + type
verification via the API host (which is not throttled); the URLs
themselves are the canonical upload.wikimedia.org locations.

Phase 1: candidates from the v5 caches (batch pageimages + wikitext
         infobox filenames) for every posterless movie.
Phase 2: candidates from the full merged harvest pool (display-title
         match) + direct article-title guesses via pageimages, plus
         wikitext infobox names for pool articles.
Phase 3: (only with --trim) drop the least-notable posterless v5
         additions (never core tier, never restorations, never letting
         a genre fall below its floor) until coverage >= target.

Writes .build/v5/movies_patched.json + .build/v5/poster_fix_report.json.
Usage: python3 tools/v5_poster_fix.py [--trim] [--target 0.905]
"""
import json
import os
import re
import sys
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

import requests

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L
from enrich_catalog import display_title, norm_title

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
V5 = os.path.join(BUILD, "v5")
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/5.0 (poster recovery; educational project)"}
MIN_SIZE = 3000

TRIM = "--trim" in sys.argv
TARGET = 0.905
for i, a in enumerate(sys.argv):
    if a == "--target":
        TARGET = float(sys.argv[i + 1])


def api(params, tries=4):
    for att in range(tries):
        try:
            r = requests.Session().get(API, params=params, headers=HEADERS,
                                       timeout=(5, 40))
            if r.status_code == 429:
                time.sleep(3 * (att + 1))
                continue
            r.raise_for_status()
            return r.json()
        except Exception:
            if att == tries - 1:
                return {}
            time.sleep(2 * (att + 1))
    return {}


def confirm_files(filenames):
    """{filename: canonical_url} for files the API confirms exist as
    images of at least MIN_SIZE bytes."""
    out = {}
    names = sorted(set(f for f in filenames if f))
    for i in range(0, len(names), 50):
        batch = names[i:i + 50]
        data = api({"action": "query", "prop": "imageinfo",
                    "iiprop": "url|size|mime", "format": "json",
                    "titles": "|".join("File:" + f for f in batch)})
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            ii = p.get("imageinfo") or []
            if ii and ii[0].get("mime", "").startswith("image") \
                    and ii[0].get("size", 0) >= MIN_SIZE:
                by_title[p.get("title", "")] = ii[0]["url"].split("?")[0]
        for f in batch:
            u = by_title.get(normap.get("File:" + f, "File:" + f), "")
            if u:
                out[f] = u
        if (i // 50) % 20 == 0:
            print(f"  confirm_files {i + len(batch)}/{len(names)}", flush=True)
    return out


def pageimages_for(articles):
    """{article: lead-image URL} via the batch API (piprop=original)."""
    out = {}
    arts = sorted(set(a for a in articles if a))
    for i in range(0, len(arts), 50):
        batch = arts[i:i + 50]
        data = api({"action": "query", "prop": "pageimages",
                    "piprop": "original", "redirects": 1, "format": "json",
                    "titles": "|".join(batch)})
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            og = p.get("original") or {}
            if og.get("source"):
                by_title[p.get("title", "")] = og["source"].split("?")[0]
        for a in batch:
            key = redir.get(normap.get(a, a), normap.get(a, a))
            if key in by_title:
                out[a] = by_title[key]
        if (i // 50) % 20 == 0:
            print(f"  pageimages {i + len(batch)}/{len(arts)}", flush=True)
    return out


def url_filename(url):
    return url.rsplit("/", 1)[-1]


def main():
    src = f"{V5}/movies_patched.json" if os.path.exists(f"{V5}/movies_patched.json") \
        else f"{V5}/movies_current.json"
    movies = json.load(open(src))
    info = json.load(open(f"{V5}/batchinfo.json"))
    cands = json.load(open(f"{V5}/candidates.json"))
    film_article = json.load(open(f"{V4}/film_article.json"))
    wiki = L.wikitext_cache()
    report = {"start_posterless": sum(1 for m in movies if not m["poster"])}

    cand_by_key = {}
    cand_by_title = {}
    for c in cands:
        cand_by_key[(norm_title(c["title"]), c["year"])] = c["article"]
        cand_by_title.setdefault(norm_title(c["title"]), []).append(c["article"])

    def articles_for(m):
        arts = []
        if film_article.get(m["id"]):
            arts.append(film_article[m["id"]])
        a = cand_by_key.get((norm_title(m["title"]), m["year"]))
        if a:
            arts.append(a)
        arts += cand_by_title.get(norm_title(m["title"]), [])
        return list(dict.fromkeys(arts))

    posterless = [m for m in movies if not m["poster"]]
    # ---------- Phase 1: cached candidates ----------
    file_wanted = {}   # movie id -> [filenames]
    url_wanted = {}    # movie id -> [urls]
    for m in posterless:
        fns, urls = [], []
        for art in articles_for(m):
            if info.get(art, {}).get("img"):
                urls.append(info[art]["img"].split("?")[0])
            w = wiki.get(art)
            if w and w[2]:
                fns.append(w[2])
        file_wanted[m["id"]] = fns
        url_wanted[m["id"]] = urls
    all_files = [f for v in file_wanted.values() for f in v]
    confirmed = confirm_files(all_files)
    # confirm batch-image URLs by checking their basename as a File:
    base_map = {}
    for v in url_wanted.values():
        for u in v:
            base_map[url_filename(u)] = u
    conf_base = confirm_files(list(base_map.keys()))
    gained = 0
    for m in posterless:
        for f in file_wanted[m["id"]]:
            if f in confirmed:
                m["poster"] = confirmed[f]
                gained += 1
                break
        if m["poster"]:
            continue
        for u in url_wanted[m["id"]]:
            fn = url_filename(u)
            if fn in conf_base:
                m["poster"] = conf_base[fn]
                gained += 1
                break
    report["phase1_gained"] = gained
    print(f"phase1 gained {gained}; posterless now "
          f"{sum(1 for m in movies if not m['poster'])}", flush=True)

    # ---------- Phase 2: pool + title guesses ----------
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    _argv = sys.argv
    sys.argv = [_argv[0]]  # v5_enrich parses argv[1] as LIMIT at import time
    try:
        from v5_enrich import build_pool
    finally:
        sys.argv = _argv
    pool = build_pool()
    pool_by_title = {}
    for art in pool:
        pool_by_title.setdefault(norm_title(display_title(art)), []).append(art)
    still = [m for m in movies if not m["poster"]]
    guess_articles = {}
    for m in still:
        arts = pool_by_title.get(norm_title(m["title"]), [])
        y = m["year"]
        arts = [a for a in arts
                if re.search(rf"\b{y}\b", a) or "(film)" in a] or arts
        guesses = [m["title"], f"{m['title']} (film)",
                   f"{m['title']} ({y} film)"]
        guess_articles[m["id"]] = list(dict.fromkeys(arts + guesses))
    all_arts = sorted({a for v in guess_articles.values() for a in v})
    print(f"phase2: {len(still)} posterless, {len(all_arts)} articles to probe",
          flush=True)
    lead = pageimages_for(all_arts)
    # wikitext for pool articles not yet cached (infobox names)
    new_arts = [a for a in all_arts if a not in wiki]
    if new_arts:
        L.fetch_wikitext(new_arts)
        wiki = L.wikitext_cache()
    fn2 = {}
    url2 = {}
    for m in still:
        fns, urls = [], []
        for art in guess_articles[m["id"]]:
            if art in lead:
                urls.append(lead[art])
            w = wiki.get(art)
            if w and w[2]:
                fns.append(w[2])
        fn2[m["id"]] = fns
        url2[m["id"]] = urls
    confirmed2 = confirm_files([f for v in fn2.values() for f in v] +
                               [url_filename(u) for v in url2.values() for u in v])
    gained2 = 0
    for m in still:
        for f in fn2[m["id"]]:
            if f in confirmed2:
                m["poster"] = confirmed2[f]
                gained2 += 1
                break
        if m["poster"]:
            continue
        for u in url2[m["id"]]:
            if url_filename(u) in confirmed2:
                m["poster"] = confirmed2[url_filename(u)]
                gained2 += 1
                break
    report["phase2_gained"] = gained2
    print(f"phase2 gained {gained2}; posterless now "
          f"{sum(1 for m in movies if not m['poster'])}", flush=True)

    # strip utm/query params from every stored poster URL
    for m in movies:
        if m["poster"]:
            m["poster"] = m["poster"].split("?")[0]

    have = sum(1 for m in movies if m["poster"])
    report["coverage_after_recovery"] = round(100 * have / len(movies), 1)
    print(f"coverage after recovery: {report['coverage_after_recovery']}% "
          f"({have}/{len(movies)})", flush=True)

    # ---------- Phase 3: trim (optional) ----------
    report["trimmed"] = 0
    if TRIM and have / len(movies) < TARGET:
        v3 = json.load(open(f"{BUILD}/movies_v3.json"))
        v4 = json.load(open(f"{V5}/movies_v4.json"))
        keep_ids = {m["id"] for m in v3} | {m["id"] for m in v4}
        counts = Counter()
        for m in movies:
            for g in m["genres"]:
                counts[g] += 1
        FLOORS = {g: 400 for g in counts}
        droppable = []
        for m in movies:
            if m["poster"] or m["id"] in keep_ids or m["tier"] == "core":
                continue
            ln = 0
            for art in articles_for(m):
                ln = max(ln, info.get(art, {}).get("len", 0))
            droppable.append((ln, m))
        droppable.sort(key=lambda x: x[0])
        drop = []
        for ln, m in droppable:
            have_now = sum(1 for x in movies if x["poster"]) - 0
            total_now = len(movies) - len(drop)
            if have_now / total_now >= TARGET:
                break
            if any(counts[g] <= FLOORS[g] for g in m["genres"]):
                continue
            drop.append(m["id"])
            for g in m["genres"]:
                counts[g] -= 1
        drop_ids = set(drop)
        movies = [m for m in movies if m["id"] not in drop_ids]
        report["trimmed"] = len(drop_ids)
        have = sum(1 for m in movies if m["poster"])
        print(f"trimmed {len(drop_ids)} posterless additions; total "
              f"{len(movies)}, coverage {100 * have / len(movies):.1f}%",
              flush=True)

    report["final_total"] = len(movies)
    report["final_posters"] = sum(1 for m in movies if m["poster"])
    report["final_coverage"] = round(100 * report["final_posters"] /
                                     len(movies), 1)
    json.dump(movies, open(f"{V5}/movies_patched.json", "w"))
    json.dump(report, open(f"{V5}/poster_fix_report.json", "w"), indent=1)
    print(json.dumps(report, indent=1), flush=True)


if __name__ == "__main__":
    main()
