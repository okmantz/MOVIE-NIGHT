#!/usr/bin/env python3
"""V4 stage 2: harvest sources for the new genre taxonomy.

Sources (all Wikipedia, no guessing — a film earns a tag only if a real
category or curated list puts it there):
  - Superhero: recurse Category:Superhero films + Category:American
    superhero films trees, plus "{year} superhero films" 1990-2026.
  - Documentary: "{year} documentary films" 1990-2026 plus
    Category:Best Documentary Feature Academy Award winners.
  - Neo-noir: parse the curated "List of neo-noir films" article.

Output: .build/v4/harvest4.json
  {article: {"tags": [...], "cats": [...]}}   (films keyed by article title)
  plus "_neonoir_list": [[title, year], ...]
Usage: python3 tools/v4_harvest.py
"""
import json
import os
import re
import time
from concurrent.futures import ThreadPoolExecutor

import requests

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
V4 = os.path.join(ROOT, ".build", "v4")
os.makedirs(V4, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/4.0 (taxonomy harvest; educational project)"}

SKIP_PREFIXES = ("List of", "Category:", "Template:", "Wikipedia:")
SKIP_CONTAINS = ("(disambiguation)", "in film", "films of ")


def api_get(params, tries=4):
    for att in range(tries):
        try:
            r = requests.Session().get(API, params=params, headers=HEADERS,
                                       timeout=(5, 45))
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


def fetch_category(cat, cmtype="page"):
    titles, cont = [], None
    while True:
        params = {"action": "query", "list": "categorymembers",
                  "cmtitle": "Category:" + cat, "cmtype": cmtype,
                  "cmlimit": "500", "format": "json"}
        if cmtype == "page":
            params["cmnamespace"] = 0
        if cont:
            params["cmcontinue"] = cont
        data = api_get(params)
        for m in data.get("query", {}).get("categorymembers", []):
            titles.append(m["title"].replace("Category:", "", 1)
                          if cmtype == "subcat" else m["title"])
        cont = data.get("continue", {}).get("cmcontinue")
        if not cont:
            return titles


def recurse(root, max_cats=600):
    """All film pages under a category tree (level-parallel BFS)."""
    seen_cats, level, films = set(), [root], {}
    while level and len(seen_cats) < max_cats:
        batch = [c for c in level if c not in seen_cats][: max_cats - len(seen_cats)]
        if not batch:
            break
        seen_cats.update(batch)

        def run(cat):
            return cat, fetch_category(cat, "page"), fetch_category(cat, "subcat")

        next_level = []
        with ThreadPoolExecutor(max_workers=8) as ex:
            for cat, pages, subs in ex.map(run, batch):
                for t in pages:
                    if t.startswith(SKIP_PREFIXES) or any(s in t for s in SKIP_CONTAINS):
                        continue
                    films.setdefault(t, []).append(cat)
                for sub in subs:
                    if sub not in seen_cats:
                        next_level.append(sub)
        level = sorted(set(next_level))
        print(f"  recurse {root}: {len(seen_cats)} cats, {len(films)} films", flush=True)
    return films


def year_cats(template, years, tag, out):
    jobs = [(template.format(y=y), y) for y in years]

    def run(job):
        cat, y = job
        return cat, y, fetch_category(cat, "page")

    with ThreadPoolExecutor(max_workers=5) as ex:
        for cat, y, titles in ex.map(run, jobs):
            for t in titles:
                if t.startswith(SKIP_PREFIXES) or any(s in t for s in SKIP_CONTAINS):
                    continue
                e = out.setdefault(t, {"tags": set(), "cats": []})
                e["tags"].add(tag)
                e["cats"].append(cat)


def main():
    out = {}

    print("superhero tree recurse...", flush=True)
    tree = {}
    for root in ("Superhero films", "American superhero films"):
        for t, cats in recurse(root).items():
            tree.setdefault(t, []).extend(cats)
    for t, cats in tree.items():
        e = out.setdefault(t, {"tags": set(), "cats": []})
        e["tags"].add("Superhero")
        e["cats"].extend(cats)
    print(f"  superhero tree films: {len(tree)}", flush=True)

    print("superhero year cats...", flush=True)
    year_cats("{y} superhero films", range(1990, 2027), "Superhero", out)
    print(f"  superhero total now: "
          f"{sum(1 for v in out.values() if 'Superhero' in v['tags'])}", flush=True)

    print("documentary year cats...", flush=True)
    year_cats("{y} documentary films", range(1990, 2027), "Documentary", out)
    oscar = fetch_category("Best Documentary Feature Academy Award winners", "page")
    for t in oscar:
        if t.startswith(SKIP_PREFIXES):
            continue
        e = out.setdefault(t, {"tags": set(), "cats": []})
        e["tags"].add("Documentary")
        e["tags"].add("OscarDoc")
        e["cats"].append("Best Documentary Feature Academy Award winners")
    print(f"  documentary total: "
          f"{sum(1 for v in out.values() if 'Documentary' in v['tags'])} "
          f"(oscar winners: {len(oscar)})", flush=True)

    print("neo-noir list parse...", flush=True)
    data = api_get({"action": "query", "prop": "revisions", "rvprop": "content",
                    "rvsection": "0", "format": "json",
                    "titles": "List of neo-noir films"})
    text = ""
    for p in data.get("query", {}).get("pages", {}).values():
        revs = p.get("revisions") or []
        if revs:
            text = revs[0].get("*", "")
    pairs = set()
    # list items/tables link films as [[Title]] or [[Title (film)|Title]] etc.
    for m in re.finditer(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]\s*\(?((?:19|20)\d{2})?", text):
        title, yr = m.group(1), m.group(2)
        if title.startswith(("List of", "Category:", "Template:")):
            continue
        pairs.add((title, int(yr) if yr else None))
    # table rows often carry the year in a following cell
    for m in re.finditer(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\][^|\n]{0,80}?\|\s*((?:19|20)\d{2})\b", text):
        pairs.add((m.group(1), int(m.group(2))))
    neonoir = sorted(pairs, key=lambda p: (p[1] or 0, p[0]))
    print(f"  neo-noir list pairs: {len(neonoir)}", flush=True)

    serial = {t: {"tags": sorted(v["tags"]), "cats": v["cats"]}
              for t, v in out.items()}
    serial["_neonoir_list"] = [list(p) for p in neonoir]
    with open(f"{V4}/harvest4.json", "w") as fh:
        json.dump(serial, fh)
    print(f"harvest4 articles: {len(serial) - 1}")


if __name__ == "__main__":
    main()
