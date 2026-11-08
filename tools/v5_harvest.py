#!/usr/bin/env python3
"""V5 deep harvest: pre-2000 per-year genre categories, 1930s-1980s decade
categories, and genre-tree recursion (pages from every subcategory) for the
refined taxonomy roots and scarce broad genres.

Output: .build/v5/harvest5.json
  {article: {"years": [...], "genres": [...], "cats": [...], "tags": [...]}}
Resumable: completed category names are tracked in
.build/v5/harvest5_done.json and skipped on rerun.

Usage: python3 tools/v5_harvest.py
"""
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor

import requests

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
V5 = os.path.join(ROOT, ".build", "v5")
os.makedirs(V5, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/5.0 (catalog harvest; educational project)"}

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from harvest_categories import PATTERNS, DECADE_PATTERNS  # noqa: E402

SKIP_PREFIXES = ("List of", "Category:", "Template:", "Wikipedia:", "File:")
SKIP_CONTAINS = ("(disambiguation)", "in film", "films of ", "film festival")

YEAR_RE = re.compile(r"\b(19\d{2}|20\d{2})\b")


def api_get(params, tries=3):
    for att in range(tries):
        try:
            r = requests.Session().get(API, params=params, headers=HEADERS,
                                       timeout=(5, 25))
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


def fetch_members(cat, cmtype):
    titles, cont = [], None
    seen_conts = set()
    for _ in range(60):  # hard cap on continuation pages
        params = {"action": "query", "list": "categorymembers",
                  "cmtitle": "Category:" + cat, "cmtype": cmtype,
                  "cmlimit": "500", "format": "json"}
        if cmtype == "page":
            params["cmnamespace"] = 0
        if cont:
            if cont in seen_conts:
                break  # API repeated a token: stop rather than loop forever
            seen_conts.add(cont)
            params["cmcontinue"] = cont
        data = api_get(params)
        for m in data.get("query", {}).get("categorymembers", []):
            t = m["title"]
            titles.append(t.replace("Category:", "", 1) if cmtype == "subcat" else t)
        cont = data.get("continue", {}).get("cmcontinue")
        if not cont:
            break
    return titles


def keep(title):
    if title.startswith(SKIP_PREFIXES):
        return False
    return not any(s in title for s in SKIP_CONTAINS)


def load_json(path, default):
    try:
        return json.load(open(path))
    except Exception:
        return default


films = load_json(f"{V5}/harvest5.json", {})
done = set(load_json(f"{V5}/harvest5_done.json", []))
import threading
LOCK = threading.Lock()


def record(article, years, genres, cats, tags):
    with LOCK:
        e = films.setdefault(article, {"years": [], "genres": [], "cats": [], "tags": []})
        for y in years:
            if y and y not in e["years"]:
                e["years"].append(y)
        for g in genres:
            if g not in e["genres"]:
                e["genres"].append(g)
        for c in cats:
            if c not in e["cats"]:
                e["cats"].append(c)
        for t in tags:
            if t not in e["tags"]:
                e["tags"].append(t)


def save():
    with LOCK:
        json.dump(films, open(f"{V5}/harvest5.json", "w"))
        json.dump(sorted(done), open(f"{V5}/harvest5_done.json", "w"))


def run_cat_job(job):
    """job: (cat, year_or_None, genres, tags) — fetch pages once."""
    cat, year, genres, tags = job
    if cat in done:
        return 0
    titles = fetch_members(cat, "page")
    n = 0
    for t in titles:
        if not keep(t):
            continue
        yrs = [year] if year else []
        if not yrs:
            ym = YEAR_RE.search(cat)
            if ym:
                yrs = [int(ym.group(1))]
        record(t, yrs, genres, [cat], tags)
        n += 1
    with LOCK:
        done.add(cat)
    return n


def main():
    jobs = []
    # (a) pre-2000 per-year genre categories
    for y in range(1927, 2000):
        for tmpl, genres in PATTERNS:
            jobs.append((tmpl.format(y=y), y, genres, []))
    # (b) 1930s-1980s decade categories
    for d in range(1930, 1990, 10):
        for tmpl, genres in DECADE_PATTERNS:
            jobs.append((tmpl.format(d=d), None, genres, []))
    print(f"dated jobs: {len(jobs)}", flush=True)
    with ThreadPoolExecutor(max_workers=8) as ex:
        for i, n in enumerate(ex.map(run_cat_job, jobs)):
            if (i + 1) % 400 == 0:
                save()
                print(f"  dated {i + 1}/{len(jobs)} cats, {len(films)} articles",
                      flush=True)
    save()
    print(f"after dated jobs: {len(films)} articles", flush=True)

    # (c) genre-tree recursion: collect subcat trees, then fetch pages
    ROOTS = [
        ("Psychological thriller films", ["Psychological Thriller"], ["Thriller"], 3, 400),
        ("Romantic comedy films", ["Rom-Com"], ["Romance", "Comedy"], 3, 400),
        ("Neo-noir films", ["Neo-Noir"], ["Crime", "Thriller"], 3, 300),
        ("Historical drama films", ["Historical Drama"], ["Drama"], 3, 500),
        ("Horror thriller films", ["Horror Thriller"], ["Horror", "Thriller"], 3, 300),
        ("Family drama films", ["Family Drama"], ["Drama", "Family"], 3, 250),
        ("Western (genre) films", [], ["Western"], 4, 900),
        ("Musical films", [], ["Musical"], 3, 600),
        ("Science fiction films", [], ["Sci-Fi"], 2, 500),
        ("Animated films", [], ["Animation"], 2, 400),
        ("Superhero films", ["Superhero"], ["Superhero", "Action"], 3, 500),
        ("Documentary films", ["Documentary"], ["Documentary"], 2, 700),
        ("Mystery films", [], ["Mystery"], 3, 300),
        ("Crime films", [], ["Crime"], 2, 300),
        ("War films", [], ["War"], 3, 400),
        ("Fantasy films", [], ["Fantasy"], 2, 300),
        ("Adventure films", [], ["Adventure"], 2, 300),
        ("Romance films", [], ["Romance"], 3, 300),
    ]
    def run_root(root_spec):
        root, tags, genres, max_depth, max_cats = root_spec
        seen, queue = set(), [(root, 0)]
        cats = []
        while queue and len(seen) < max_cats:
            cat, depth = queue.pop(0)
            if cat in seen:
                continue
            seen.add(cat)
            cats.append(cat)
            if len(cats) % 100 == 0:
                print(f"  bfs {root}: {len(cats)} cats, queue {len(queue)}",
                      flush=True)
            if depth < max_depth:
                for sub in fetch_members(cat, "subcat"):
                    if sub not in seen:
                        queue.append((sub, depth + 1))
        root_jobs = [(c, None, genres, tags) for c in cats]
        before = len(films)
        with ThreadPoolExecutor(max_workers=4) as ex:
            list(ex.map(run_cat_job, root_jobs))
        save()
        print(f"root {root}: {len(cats)} cats, articles {before} -> {len(films)}",
              flush=True)

    with ThreadPoolExecutor(max_workers=4) as ex:
        list(ex.map(run_root, ROOTS))
    print(f"TOTAL harvest5 articles: {len(films)}", flush=True)


if __name__ == "__main__":
    main()
