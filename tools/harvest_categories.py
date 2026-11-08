#!/usr/bin/env python3
"""Harvest real film titles from Wikipedia year/genre categories.

Usage: python3 tools/harvest_categories.py OUT.json

Walks per-year genre categories (Category:2023 horror films, ...) plus a few
decade categories for scarce genres, and records for every article title the
years and app genres implied by the categories it appears in. No guessing:
a film only gets a genre tag if a real category puts it there.
"""
import json
import sys
import time
from concurrent.futures import ThreadPoolExecutor

import requests

API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/3.0 (catalog harvest; educational project)"}

# (category name template, [app genres]) — {y} = year, {d} = decade start
PATTERNS = [
    ("{y} action films", ["Action"]),
    ("{y} action thriller films", ["Action", "Thriller"]),
    ("{y} action-adventure films", ["Action", "Adventure"]),
    ("{y} comedy films", ["Comedy"]),
    ("{y} comedy-drama films", ["Comedy", "Drama"]),
    ("{y} comedy horror films", ["Comedy", "Horror"]),
    ("{y} comedy thriller films", ["Comedy", "Thriller"]),
    ("{y} romantic comedy films", ["Romance", "Comedy"]),
    ("{y} romantic comedy-drama films", ["Romance", "Comedy", "Drama"]),
    ("{y} romantic drama films", ["Romance", "Drama"]),
    ("{y} romance films", ["Romance"]),
    ("{y} drama films", ["Drama"]),
    ("{y} biographical films", ["Drama"]),
    ("{y} historical drama films", ["Drama"]),
    ("{y} horror films", ["Horror"]),
    ("{y} slasher films", ["Horror"]),
    ("{y} supernatural horror films", ["Horror"]),
    ("{y} thriller films", ["Thriller"]),
    ("{y} psychological thriller films", ["Thriller"]),
    ("{y} crime films", ["Crime"]),
    ("{y} crime drama films", ["Crime", "Drama"]),
    ("{y} crime thriller films", ["Crime", "Thriller"]),
    ("{y} crime comedy films", ["Crime", "Comedy"]),
    ("{y} mystery films", ["Mystery"]),
    ("{y} mystery thriller films", ["Mystery", "Thriller"]),
    ("{y} science fiction films", ["Sci-Fi"]),
    ("{y} science fiction action films", ["Sci-Fi", "Action"]),
    ("{y} science fiction horror films", ["Sci-Fi", "Horror"]),
    ("{y} science fiction comedy films", ["Sci-Fi", "Comedy"]),
    ("{y} animated films", ["Animation"]),
    ("{y} anime films", ["Animation"]),
    ("{y} family films", ["Family"]),
    ("{y} children's films", ["Family"]),
    ("{y} children's animated films", ["Family", "Animation"]),
    ("{y} children's fantasy films", ["Family", "Fantasy"]),
    ("{y} Christmas films", ["Family"]),
    ("{y} fantasy films", ["Fantasy"]),
    ("{y} fantasy adventure films", ["Fantasy", "Adventure"]),
    ("{y} fantasy comedy films", ["Fantasy", "Comedy"]),
    ("{y} adventure films", ["Adventure"]),
    ("{y} musical films", ["Musical"]),
    ("{y} musical comedy films", ["Musical", "Comedy"]),
    ("{y} musical drama films", ["Musical", "Drama"]),
    ("{y} war films", ["War"]),
    ("{y} war drama films", ["War", "Drama"]),
    ("{y} Western (genre) films", ["Western"]),
]

DECADE_PATTERNS = [
    ("{d}s Western (genre) films", ["Western"]),
    ("{d}s musical films", ["Musical"]),
    ("{d}s war films", ["War"]),
    ("{d}s mystery films", ["Mystery"]),
    ("{d}s romance films", ["Romance"]),
    ("{d}s family films", ["Family"]),
]

YEARS = list(range(2000, 2027))
DECADES = [1990, 2000, 2010, 2020]

SKIP_PREFIXES = ("List of", "Category:", "Template:", "Wikipedia:")
SKIP_CONTAINS = ("film festival", "(disambiguation)", "in film", "films of ")


def fetch_category(cat):
    """Return list of article titles in a category (pages only, ns=0)."""
    titles = []
    cont = None
    s = requests.Session()
    while True:
        params = {
            "action": "query", "list": "categorymembers",
            "cmtitle": "Category:" + cat, "cmtype": "page", "cmnamespace": 0,
            "cmlimit": "500", "format": "json",
        }
        if cont:
            params["cmcontinue"] = cont
        for attempt in range(4):
            try:
                r = s.get(API, params=params, headers=HEADERS, timeout=40)
                if r.status_code == 429:
                    time.sleep(2 * (attempt + 1))
                    continue
                r.raise_for_status()
                data = r.json()
                break
            except Exception:
                if attempt == 3:
                    return titles, "error"
                time.sleep(1.5 * (attempt + 1))
        members = data.get("query", {}).get("categorymembers", [])
        for m in members:
            titles.append(m["title"])
        cont = data.get("continue", {}).get("cmcontinue")
        if not cont:
            break
    return titles, "ok"


ROOT_RECURSE = [
    ("Musical films", ["Musical"]),
    ("War films", ["War"]),
    ("Western (genre) films", ["Western"]),
]

YEAR_RE = __import__("re").compile(r"\b(19\d{2}|20\d{2})\b")
DECADE_RE = __import__("re").compile(r"\b((?:19|20)\d0)s\b")


def fetch_subcats(cat):
    subs, cont = [], None
    s = requests.Session()
    while True:
        params = {
            "action": "query", "list": "categorymembers",
            "cmtitle": "Category:" + cat, "cmtype": "subcat",
            "cmlimit": "500", "format": "json",
        }
        if cont:
            params["cmcontinue"] = cont
        try:
            r = s.get(API, params=params, headers=HEADERS, timeout=40)
            r.raise_for_status()
            data = r.json()
        except Exception:
            return subs
        for m in data.get("query", {}).get("categorymembers", []):
            subs.append(m["title"].replace("Category:", "", 1))
        cont = data.get("continue", {}).get("cmcontinue")
        if not cont:
            return subs


def recurse_root(root, genres, max_cats=500):
    """Walk subcategories of a genre root; collect pages from any subcat whose
    name carries a year (use it) or a decade (year left for enrichment)."""
    seen, queue, jobs = set(), [(root, 0)], []
    while queue and len(seen) < max_cats:
        cat, depth = queue.pop(0)
        if cat in seen:
            continue
        seen.add(cat)
        ym = YEAR_RE.search(cat)
        if ym and cat != root:
            jobs.append((cat, int(ym.group(1)), genres))
            continue  # year cats are leaves for our purposes
        if DECADE_RE.search(cat) and cat != root:
            jobs.append((cat, None, genres))
        if depth < 3:
            for sub in fetch_subcats(cat):
                queue.append((sub, depth + 1))
    return jobs


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else "harvest.json"
    jobs = []  # (category, year_or_None, genres)
    for y in YEARS:
        for tmpl, genres in PATTERNS:
            jobs.append((tmpl.format(y=y), y, genres))
    for d in DECADES:
        for tmpl, genres in DECADE_PATTERNS:
            jobs.append((tmpl.format(d=d), None, genres))
    if __import__("os").environ.get("MN_RECURSE"):
        for root, genres in ROOT_RECURSE:
            extra = recurse_root(root, genres)
            print(f"root recurse {root}: {len(extra)} dated subcategories", flush=True)
            jobs.extend(extra)

    films = {}   # title -> {"years": set, "genres": set, "cats": [...]}
    cat_stats = {}
    lock_titles = set()

    def run(job):
        cat, year, genres = job
        titles, status = fetch_category(cat)
        return cat, year, genres, titles, status

    with ThreadPoolExecutor(max_workers=4) as ex:
        for cat, year, genres, titles, status in ex.map(run, jobs):
            kept = 0
            for t in titles:
                if t.startswith(SKIP_PREFIXES) or any(s in t for s in SKIP_CONTAINS):
                    continue
                kept += 1
                f = films.setdefault(t, {"years": set(), "genres": set(), "cats": []})
                if year:
                    f["years"].add(year)
                f["genres"].update(genres)
                f["cats"].append(cat)
            cat_stats[cat] = {"status": status, "members": len(titles), "kept": kept}
            lock_titles.add(cat)

    out = {
        "films": {
            t: {"years": sorted(f["years"]), "genres": sorted(f["genres"]), "cats": f["cats"]}
            for t, f in films.items()
        },
        "cat_stats": cat_stats,
    }
    with open(out_path, "w") as fh:
        json.dump(out, fh)
    nonempty = {c: s for c, s in cat_stats.items() if s["kept"]}
    print(f"categories tried: {len(cat_stats)}, non-empty: {len(nonempty)}")
    print(f"unique film titles harvested: {len(films)}")


if __name__ == "__main__":
    main()
