#!/usr/bin/env python3
"""V5 candidate pool + batch enrichment.

Pool: merge .build/harvest.json (v3), .build/v4/harvest4.json and
.build/v5/harvest5.json into one article table {years, genres, cats, tags},
drop articles already in the dataset, rank (deficit-genre help first, then
era 2000-2026 first, then evidence richness), and enrich the top N with ONE
batched MediaWiki call per 50 titles:
  prop=extracts|pageimages|info|categories
  -> article length (notability proxy), lead extract (description +
     nationality/director parsing), lead-image URL (poster candidate),
     categories (Indian-production corroboration + taxonomy evidence).
Cache: .build/v5/batchinfo.json (resumable).

Usage: python3 tools/v5_enrich.py [limit]
"""
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor

import requests

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
V5 = os.path.join(BUILD, "v5")
os.makedirs(V5, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/5.0 (catalog enrichment; educational project)"}

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L  # noqa: E402
from build_v4 import cat_is_indian_production  # noqa: E402
from enrich_catalog import display_title, norm_title  # noqa: E402

LIMIT = int(sys.argv[1]) if len(sys.argv) > 1 else 30000

DEFICIT = ["Romance", "Psychological Thriller", "Documentary", "Neo-Noir",
           "Horror Thriller", "Superhero", "Rom-Com", "Historical Drama",
           "Family Drama", "Western"]
TAG2GENRE = {"Superhero": "Superhero", "Documentary": "Documentary",
             "Psychological Thriller": "Thriller", "Rom-Com": "Comedy",
             "Neo-Noir": "Crime", "Historical Drama": "Drama",
             "Horror Thriller": "Horror", "Family Drama": "Drama"}


def build_pool():
    pool = {}

    def add(article, years=(), genres=(), cats=(), tags=()):
        if article.startswith("_"):
            return
        e = pool.setdefault(article, {"years": set(), "genres": set(),
                                      "cats": set(), "tags": set()})
        e["years"].update(y for y in years if y)
        e["genres"].update(genres)
        e["cats"].update(cats)
        e["tags"].update(tags)

    h3 = json.load(open(f"{BUILD}/harvest.json"))["films"]
    for art, info in h3.items():
        add(art, info.get("years", []), info.get("genres", []), info.get("cats", []))
    h4 = json.load(open(f"{V4}/harvest4.json"))
    for art, info in h4.items():
        if art.startswith("_"):
            continue
        add(art, (), [TAG2GENRE[t] for t in info.get("tags", []) if t in TAG2GENRE],
            info.get("cats", []), info.get("tags", []))
    h5_path = f"{V5}/harvest5.json"
    if os.path.exists(h5_path):
        h5 = json.load(open(h5_path))
        for art, info in h5.items():
            add(art, info.get("years", []), info.get("genres", []),
                info.get("cats", []), info.get("tags", []))
    return pool


def main():
    movies = json.load(open(f"{V5}/movies_v4.json"))
    film_article = json.load(open(f"{V4}/film_article.json"))
    in_dataset_articles = set(film_article.values())
    dataset_titles = {norm_title(m["title"]) for m in movies}
    pool = build_pool()
    print(f"pool articles: {len(pool)}", flush=True)

    def candidate_year(e):
        if e["years"]:
            return min(e["years"])
        m = re.search(r"\((\d{4}) film\)", "")
        return None

    cands = []
    skipped_indian_cats = 0
    for art, e in pool.items():
        if art in in_dataset_articles:
            continue
        title = display_title(art)
        if not title or title.startswith("List of") or "(disambiguation)" in art:
            continue
        if "film series" in art.lower():
            continue
        # Pre-filter: if ALL category evidence is Indian-production, the
        # film can only be an Indian production — skip before spending
        # enrichment on it. (Mixed evidence goes through: the formal
        # corroboration rule runs again at build time.)
        prod_cats = [c for c in e["cats"] if "film" in c.lower()]
        if prod_cats and all(cat_is_indian_production(c) for c in prod_cats):
            skipped_indian_cats += 1
            continue
        year = min(e["years"]) if e["years"] else None
        ym = re.search(r"\((\d{4})(?: film)?\)$", art)
        if year is None and ym:
            year = int(ym.group(1))
        helps = [g for g in DEFICIT
                 if g in e["genres"] or g in e["tags"]]
        era = 0 if (year or 0) >= 2000 else 1 if (year or 0) >= 1990 else \
            2 if (year or 0) >= 1980 else 3 if year else 2
        cands.append({"article": art, "title": title, "year": year,
                      "genres": sorted(e["genres"]), "cats": sorted(e["cats"]),
                      "tags": sorted(e["tags"]), "helps": helps, "era": era,
                      "ncats": len(e["cats"])})
    cands.sort(key=lambda c: (0 if c["helps"] else 1, c["era"],
                              -min(c["ncats"], 12), c["title"]))
    print(f"candidates after filters: {len(cands)} "
          f"(skipped all-Indian-evidence: {skipped_indian_cats})", flush=True)
    cands = cands[:LIMIT]
    json.dump(cands, open(f"{V5}/candidates.json", "w"))
    print(f"enriching top {len(cands)}", flush=True)

    cache = L.load_json(f"{V5}/batchinfo.json", {})
    todo = [c["article"] for c in cands if c["article"] not in cache]
    print(f"batchinfo cached {len(cache)}, todo {len(todo)}", flush=True)
    import threading
    lock = threading.Lock()
    done = [0]

    def fetch_batch(batch):
        data = {}
        for att in range(4):
            try:
                r = requests.Session().get(API, params={
                    "action": "query", "prop": "extracts|pageimages|info|categories",
                    "exintro": 1, "explaintext": 1, "exlimit": "max",
                    "piprop": "original", "cllimit": "max", "clshow": "!hidden",
                    "redirects": 1, "format": "json",
                    "titles": "|".join(batch),
                }, headers=HEADERS, timeout=(5, 90))
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
            cats = [c["title"].replace("Category:", "", 1)
                    for c in p.get("categories", [])]
            img = (p.get("original") or {}).get("source", "")
            by_title[p.get("title", "")] = {
                "len": p.get("length", 0),
                "extract": (p.get("extract", "") or "")[:1600],
                "img": img.split("?")[0] if img else "",
                "cats": cats,
                "missing": "missing" in p,
            }
        out = {}
        for t in batch:
            key = redir.get(normap.get(t, t), normap.get(t, t))
            out[t] = by_title.get(key, {"len": 0, "extract": "", "img": "",
                                        "cats": [], "missing": True})
        with lock:
            cache.update(out)
            done[0] += len(batch)
            if done[0] % 1000 < 50:
                L.save_json(f"{V5}/batchinfo.json", cache)
                print(f"  enriched {done[0]}/{len(todo)}", flush=True)
        return len(batch)

    batches = [todo[i:i + 50] for i in range(0, len(todo), 50)]
    with ThreadPoolExecutor(max_workers=4) as ex:
        list(ex.map(fetch_batch, batches))
    L.save_json(f"{V5}/batchinfo.json", cache)
    got = sum(1 for a in cache if cache[a].get("extract"))
    print(f"batchinfo total {len(cache)}, with extract {got}", flush=True)


if __name__ == "__main__":
    main()
