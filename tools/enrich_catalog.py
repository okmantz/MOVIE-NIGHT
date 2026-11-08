#!/usr/bin/env python3
"""Select + enrich catalog-tier additions for Movie Night.

Pipeline:
  1. Load harvest.json (Wikipedia year/genre categories) + existing.json.
  2. Dedupe against the existing catalog (normalized title + year).
  3. Greedy-select titles until every main genre clears its target with a
     buffer for enrichment dropouts; all niche-genre titles (Musical, War,
     Western, Mystery) are selected up to per-genre caps.
  4. Enrich each pick from Wikipedia only:
       - batched wikitext (50/request) -> infobox director + running time
       - REST summary -> poster (verified 200 image), extract for
         nationality / director fallback / year sanity
  Results cache to /tmp/mnbuild/enrich_cache.json (resumable). Output is
  /tmp/mnbuild/enriched.json — entries that survived verification.

Usage: python3 tools/enrich_catalog.py
"""
import json
import re
import threading
import time
from concurrent.futures import ThreadPoolExecutor

import requests

BUILD = __import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)), "..", ".build")
API = "https://en.wikipedia.org/w/api.php"
REST = "https://en.wikipedia.org/api/rest_v1/page/summary/"
HEADERS = {"User-Agent": "MovieNightApp/3.0 (catalog enrichment; educational project)"}

MAIN = ["Action", "Comedy", "Drama", "Horror", "Thriller", "Sci-Fi", "Romance",
        "Crime", "Adventure", "Animation", "Fantasy", "Family"]
NICHE = ["Musical", "War", "Western", "Mystery"]
TARGET = 620          # per main genre, existing + selected (buffer over 500)
NICHE_CAP = {"Musical": 800, "War": 100000, "Western": 100000, "Mystery": 100000}
MAX_SELECTED = 6500

GENRE_PRIORITY = ["Animation", "Family", "Horror", "Sci-Fi", "Fantasy", "Western",
                  "War", "Musical", "Mystery", "Romance", "Action", "Thriller",
                  "Crime", "Comedy", "Adventure", "Drama"]

NATIONALITIES = ["American", "British", "Indian", "South Korean", "Japanese", "French",
                 "German", "Canadian", "Australian", "Spanish", "Italian", "Chinese",
                 "Hong Kong", "Taiwanese", "Thai", "Indonesian", "Filipino", "Vietnamese",
                 "Mexican", "Brazilian", "Argentine", "Russian", "Ukrainian", "Polish",
                 "Dutch", "Belgian", "Swedish", "Norwegian", "Danish", "Finnish", "Irish",
                 "New Zealand", "South African", "Nigerian", "Egyptian", "Turkish",
                 "Iranian", "Israeli", "Greek", "Portuguese", "Austrian", "Swiss", "Czech",
                 "Hungarian", "Romanian", "Bulgarian", "Serbian", "Croatian", "Malaysian",
                 "Singaporean", "Pakistani", "Bangladeshi", "Icelandic", "Chilean",
                 "Colombian", "Peruvian", "Cuban", "Kenyan", "Ghanaian", "Moroccan",
                 "Lebanese", "Georgian", "Armenian", "Mongolian", "Cambodian", "Scottish",
                 "Welsh", "Sri Lankan", "Nepalese", "Azerbaijani", "Ethiopian", "Senegalese"]


def norm_title(t):
    t = t.lower()
    t = re.sub(r"[^a-z0-9 ]", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    t = re.sub(r"^(the|a|an) ", "", t)
    return t


def display_title(article):
    t = re.sub(r"\s*\([^)]*\bfilm\)\s*$", "", article).strip()
    t = re.sub(r"\s*\(film\)\s*$", "", t).strip()
    return t


def era_rank(year):
    if year is None:
        return 3
    if year >= 2020:
        return 0
    if year >= 2010:
        return 1
    if year >= 2000:
        return 2
    return 3


# ---------------- selection ----------------

def select(harvest_films, existing):
    existing_keys = set()
    existing_titles = set()
    counts = {}
    for m in existing:
        existing_keys.add((norm_title(m["title"]), m["year"]))
        existing_titles.add(norm_title(m["title"]))
        for g in m["genres"]:
            counts[g] = counts.get(g, 0) + 1

    pool = {}
    for article, info in harvest_films.items():
        title = display_title(article)
        if not title or title == article and "(disambiguation)" in article:
            continue
        years = info["years"]
        year = min(years) if years else None
        genres = [g for g in info["genres"] if g in MAIN or g in NICHE]
        if not genres:
            continue
        key = (norm_title(title), year)
        if year is not None and key in existing_keys:
            continue
        if year is not None and any((key[0], y) in existing_keys for y in (year - 1, year + 1)):
            continue
        if year is None and key[0] in existing_titles:
            continue
        # merge duplicate article variants of the same film
        mkey = key if year is not None else (key[0], None)
        if mkey in pool:
            pool[mkey]["genres"] = sorted(set(pool[mkey]["genres"]) | set(genres))
            pool[mkey]["articles"].append(article)
        else:
            pool[mkey] = {"title": title, "year": year, "genres": genres,
                          "articles": [article]}
    print(f"candidate pool after dedupe: {len(pool)}")

    selected = []
    sel_counts = dict(counts)

    def covers_deficit(f):
        return [g for g in f["genres"] if g in MAIN and sel_counts.get(g, 0) < TARGET]

    # Phase A: niche genres — take (nearly) all, era-priority order
    niche_pool = [f for f in pool.values() if any(g in NICHE for g in f["genres"])]
    niche_pool.sort(key=lambda f: (era_rank(f["year"]), f["title"]))
    niche_taken = {g: 0 for g in NICHE}
    for f in niche_pool:
        my_niche = [g for g in f["genres"] if g in NICHE]
        if all(niche_taken[g] >= NICHE_CAP[g] for g in my_niche) and not covers_deficit(f):
            continue
        selected.append(f)
        for g in my_niche:
            niche_taken[g] += 1
        for g in f["genres"]:
            sel_counts[g] = sel_counts.get(g, 0) + 1
    print(f"phase A (niche) selected: {len(selected)}; counts now:",
          {g: sel_counts.get(g, 0) for g in MAIN + NICHE})

    # Phase B: scarcity-weighted greedy fill of main-genre deficits.
    # Scarce genres (Adventure, Family, Animation...) weigh far more than
    # abundant ones, so their films are picked before the slot budget is
    # burned on surplus Drama/Comedy titles.
    pool_genre_sizes = {}
    for f in pool.values():
        for g in f["genres"]:
            pool_genre_sizes[g] = pool_genre_sizes.get(g, 0) + 1

    def scarcity(f):
        return sum(1.0 / max(1, pool_genre_sizes.get(g, 1))
                   for g in f["genres"] if g in MAIN)

    chosen_ids = {id(f) for f in selected}
    rest = [f for f in pool.values() if id(f) not in chosen_ids]
    rest.sort(key=lambda f: (era_rank(f["year"]), -scarcity(f), f["title"]))
    for f in rest:
        if len(selected) >= MAX_SELECTED:
            break
        if all(sel_counts.get(g, 0) >= TARGET for g in MAIN):
            break
        if any(g in MAIN and sel_counts.get(g, 0) < TARGET for g in f["genres"]):
            selected.append(f)
            for g in f["genres"]:
                sel_counts[g] = sel_counts.get(g, 0) + 1
    print(f"phase B selected: total {len(selected)}; counts:",
          {g: sel_counts.get(g, 0) for g in MAIN + NICHE})
    return selected


# ---------------- wikitext (director / runtime) ----------------

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


def parse_infobox(text):
    if "nfobox film" not in text:
        return "", None
    region = text[text.find("nfobox film"):][:7000]
    director, runtime = "", None
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
    return director, runtime


def fetch_wikitext(titles):
    """titles: list of article titles -> {title: (director, runtime)}"""
    out = {}
    s = requests.Session()
    for i in range(0, len(titles), 50):
        batch = titles[i:i + 50]
        for attempt in range(4):
            try:
                r = s.post(API, data={
                    "action": "query", "prop": "revisions", "rvprop": "content",
                    "rvsection": "0", "format": "json", "titles": "|".join(batch),
                }, headers=HEADERS, timeout=60)
                if r.status_code == 429:
                    time.sleep(3 * (attempt + 1))
                    continue
                r.raise_for_status()
                data = r.json()
                break
            except Exception:
                if attempt == 3:
                    data = {}
                time.sleep(2 * (attempt + 1))
        pages = data.get("query", {}).get("pages", {})
        norm = {n.get("from"): n.get("to") for n in data.get("query", {}).get("normalized", [])}
        by_title = {}
        for p in pages.values():
            revs = p.get("revisions") or []
            content = revs[0].get("*", "") if revs else ""
            by_title[p.get("title", "")] = parse_infobox(content)
        for t in batch:
            out[t] = by_title.get(norm.get(t, t), ("", None))
        if (i // 50) % 20 == 0:
            print(f"  wikitext {min(i + 50, len(titles))}/{len(titles)}", flush=True)
    return out


# ---------------- REST summary (poster / extract) ----------------

_cache_lock = threading.Lock()


def session():
    # Fresh session per fetch: long-lived keep-alive sessions through the
    # local proxy degrade into timeout/retry crawls after a few hundred
    # requests (observed in build runs 1-5); fresh sessions stay fast.
    return requests.Session()


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
        try:
            c = session().head(url, headers=HEADERS, timeout=(5, 10),
                               allow_redirects=True)
            ok = c.status_code == 200 and \
                c.headers.get("Content-Type", "").startswith("image")
            if not ok and c.status_code in (403, 405):
                c = session().get(url, headers=HEADERS, timeout=(5, 10), stream=True)
                ok = c.status_code == 200 and \
                    c.headers.get("Content-Type", "").startswith("image")
                c.close()
            poster = url if ok else ""
        except Exception:
            poster = ""
    return {"extract": extract[:1200], "poster": poster}


def first_sentence(extract):
    m = re.split(r"(?<=[.!?])\s+", extract.strip(), maxsplit=1)
    return m[0] if m else extract


def parse_extract(extract):
    s1 = first_sentence(extract)
    year = None
    ym = re.search(r"\b(19\d{2}|20\d{2})\b", s1)
    if ym:
        year = int(ym.group(1))
    nationality = ""
    low = s1.lower()
    film_pos = low.find("film")
    head = s1[:film_pos] if film_pos > 0 else s1
    best = None
    for nat in NATIONALITIES:
        idx = head.find(nat)
        if idx >= 0 and (best is None or idx < best[0]):
            best = (idx, nat)
    if best:
        nationality = best[1]
    director = ""
    dm = re.search(r"[Dd]irected by ([A-Z][A-Za-zÀ-Žà-ž.'\- ]+?)(?:,|;|\.| and | who |$)", s1 + " " + extract[extract.find(s1) + len(s1):][:300])
    if dm:
        cand = dm.group(1).strip()
        if 2 <= len(cand) <= 42:
            director = cand
    is_film = "film" in low[:400]
    return year, nationality, director, is_film


def main():
    harvest = json.load(open(f"{BUILD}/harvest.json"))["films"]
    existing = json.load(open(f"{BUILD}/existing.json"))
    selected = select(harvest, existing)
    with open(f"{BUILD}/selected.json", "w") as fh:
        json.dump(selected, fh)
    print(f"selected total: {len(selected)}", flush=True)

    era_counts = {}
    for f in selected:
        era_counts[era_rank(f["year"])] = era_counts.get(era_rank(f["year"]), 0) + 1
    print("selected by era rank (0=2020s,1=2010s,2=2000s,3=older/unknown):", era_counts, flush=True)

    # wikitext pass (director / runtime), batched — resumable
    articles = sorted({a for f in selected for a in f["articles"]})
    wiki_path = f"{BUILD}/wikitext.json"
    wiki = {}
    if __import__("os").path.exists(wiki_path):
        raw = json.load(open(wiki_path))
        wiki = {k: tuple(v) for k, v in raw.items()}
    missing = [a for a in articles if a not in wiki]
    print(f"wikitext: {len(wiki)} cached, {len(missing)} to fetch", flush=True)
    if missing:
        wiki.update(fetch_wikitext(missing))
        with open(wiki_path, "w") as fh:
            json.dump(wiki, fh)

    # summary pass with resumable cache
    cache_path = f"{BUILD}/enrich_cache.json"
    try:
        cache = json.load(open(cache_path))
    except Exception:
        cache = {}
    todo = [a for a in articles if a not in cache]
    print(f"summary pass: {len(todo)} to fetch, {len(cache)} cached", flush=True)
    done = [0]

    def work(article):
        res = fetch_summary(article)
        with _cache_lock:
            cache[article] = res
            done[0] += 1
            if done[0] % 50 == 0:
                json.dump(cache, open(cache_path, "w"))
                print(f"  summaries {done[0]}/{len(todo)}", flush=True)
        return res

    with ThreadPoolExecutor(max_workers=10) as ex:
        list(ex.map(work, todo))
    json.dump(cache, open(cache_path, "w"))

    # assemble enriched entries
    enriched, dropped = [], 0
    for f in selected:
        best = None
        for a in f["articles"]:
            info = cache.get(a)
            if info and not info.get("dead"):
                best = (a, info)
                break
        if not best:
            dropped += 1
            continue
        article, info = best
        extract = info.get("extract", "")
        ey, nationality, edirector, is_film = parse_extract(extract)
        director_w, runtime = ("", None)
        for a in f["articles"]:
            dw, rt = wiki.get(a, ("", None))
            if dw or rt:
                director_w, runtime = dw, rt
                break
        year = f["year"] or ey
        if year is None or not is_film:
            dropped += 1
            continue
        enriched.append({
            "article": article,
            "title": f["title"],
            "year": year,
            "genres": f["genres"],
            "director": director_w or edirector or "Unknown",
            "runtime": runtime,
            "nationality": nationality,
            "poster": info.get("poster", ""),
        })
    with open(f"{BUILD}/enriched.json", "w") as fh:
        json.dump(enriched, fh)
    print(f"enriched: {len(enriched)}, dropped: {dropped}")
    eras = {"2020-2026": 0, "2010-2019": 0, "2000-2009": 0, "pre-2000": 0}
    for e in enriched:
        y = e["year"]
        if y >= 2020:
            eras["2020-2026"] += 1
        elif y >= 2010:
            eras["2010-2019"] += 1
        elif y >= 2000:
            eras["2000-2009"] += 1
        else:
            eras["pre-2000"] += 1
    print("enriched by era:", eras)
    with_poster = sum(1 for e in enriched if e["poster"])
    print(f"poster coverage of enriched: {with_poster}/{len(enriched)}")


if __name__ == "__main__":
    main()
