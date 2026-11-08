#!/usr/bin/env python3
"""V4 stage 1: map every movie to its Wikipedia article and fetch the
article's category list (used for Indian-production detection, new-genre
retagging, and poster/description work).

- Catalog-tier articles come from .build/enriched.json (recorded in v3).
- Core-tier articles are resolved by trying title variants against the API
  and accepting a page only when its intro extract's year matches the
  film's year (within 1) — a wrong-article match is worse than none.

Caches (resumable):
  .build/v4/film_article.json   {movie_id: article}
  .build/v4/article_cats.json   {article: [category names]}
  .build/v4/core_resolve.json   scratch state for resolution rounds

Usage: python3 tools/v4_articles.py
"""
import json
import os
import re
import threading
import time
from concurrent.futures import ThreadPoolExecutor

import requests

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
os.makedirs(V4, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/4.0 (article mapping; educational project)"}
LOCK = threading.Lock()


def norm(t):
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", " ", t.lower())).strip()


def session():
    return requests.Session()


def api_get(params, tries=4):
    for att in range(tries):
        try:
            r = session().get(API, params=params, headers=HEADERS, timeout=(5, 40))
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


def extract_year(extract):
    m = re.search(r"\b(19\d{2}|20\d{2})\b", (extract or "")[:400])
    return int(m.group(1)) if m else None


def looks_like_disambiguation(extract):
    head = (extract or "")[:300].lower()
    return "may refer to" in head or "can refer to" in head


# ---------------- core article resolution ----------------

def resolve_round(films, cand_fn, resolved, scratch):
    """films: list of core movies still unresolved. cand_fn(m) -> candidate
    article title for this round. Returns number newly resolved."""
    todo = [m for m in films if m["id"] not in resolved]
    if not todo:
        return 0
    cand = {m["id"]: cand_fn(m) for m in todo}
    titles = sorted(set(cand.values()))
    found = {}
    for i in range(0, len(titles), 50):
        batch = titles[i:i + 50]
        data = api_get({
            "action": "query", "prop": "extracts", "exintro": 1,
            "explaintext": 1, "redirects": 1, "format": "json",
            "titles": "|".join(batch),
        })
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        pages = {p.get("title"): p for p in q.get("pages", {}).values()}
        for t in batch:
            t2 = normap.get(t, t)
            t2 = redir.get(t2, t2)
            p = pages.get(t2)
            if not p or "missing" in p:
                continue
            ex = p.get("extract", "")
            if looks_like_disambiguation(ex):
                continue
            found[t] = (t2, extract_year(ex))
    newly = 0
    for m in todo:
        hit = found.get(cand[m["id"]])
        if not hit:
            continue
        article, yr = hit
        if yr is not None and abs(yr - m["year"]) > 1:
            scratch.setdefault("year_conflict", {})[m["id"]] = [article, yr]
            continue
        resolved[m["id"]] = article
        newly += 1
    return newly


def resolve_core(core, film_article, scratch):
    films = [m for m in core if m["id"] not in film_article]
    print(f"core resolution: {len(films)} to resolve", flush=True)
    rounds = [
        ("exact title", lambda m: m["title"]),
        ("title (film)", lambda m: f"{m['title']} (film)"),
        ("title (year film)", lambda m: f"{m['title']} ({m['year']} film)"),
        ("title (year-1 film)", lambda m: f"{m['title']} ({m['year'] - 1} film)"),
        ("title (year+1 film)", lambda m: f"{m['title']} ({m['year'] + 1} film)"),
    ]
    resolved = {}
    for name, fn in rounds:
        n = resolve_round(films, fn, resolved, scratch)
        print(f"  round {name}: +{n} (total {len(resolved)})", flush=True)
        if len(resolved) >= len(films):
            break
    film_article.update(resolved)
    unresolved = [m["title"] for m in films if m["id"] not in resolved]
    print(f"core unresolved: {len(unresolved)} e.g. {unresolved[:10]}", flush=True)
    return film_article


# ---------------- category fetch ----------------

def fetch_categories(articles, cache):
    todo = [a for a in articles if a not in cache]
    print(f"categories: {len(cache)} cached, {len(todo)} to fetch", flush=True)
    done = [0]

    def work(batch):
        titles = batch
        cats = {t: [] for t in titles}
        cont = None
        cur = titles
        for _ in range(6):
            params = {
                "action": "query", "prop": "categories", "cllimit": "max",
                "redirects": 1, "format": "json", "titles": "|".join(cur),
            }
            if cont:
                params["clcontinue"] = cont
            data = api_get(params)
            q = data.get("query", {})
            normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
            redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
            by_req = {}
            for t in titles:
                by_req.setdefault(redir.get(normap.get(t, t), normap.get(t, t)), []).append(t)
            for p in q.get("pages", {}).values():
                for t in by_req.get(p.get("title"), []):
                    for c in p.get("categories", []):
                        name = c["title"].replace("Category:", "", 1)
                        if name not in cats[t]:
                            cats[t].append(name)
            cont = data.get("continue", {}).get("clcontinue")
            if not cont:
                break
            cur = titles  # continuation applies to the same title set
        with LOCK:
            for t, cs in cats.items():
                cache[t] = cs
            done[0] += len(titles)
            if done[0] % 500 < len(titles):
                json.dump(cache, open(f"{V4}/article_cats.json", "w"))
                print(f"  categories {done[0]}/{len(todo)}", flush=True)
        return cats

    batches = [todo[i:i + 50] for i in range(0, len(todo), 50)]
    with ThreadPoolExecutor(max_workers=8) as ex:
        list(ex.map(work, batches))
    json.dump(cache, open(f"{V4}/article_cats.json", "w"))
    print(f"categories done: {len(cache)} articles", flush=True)


def main():
    movies = json.load(open(f"{BUILD}/movies_v3.json"))
    enriched = json.load(open(f"{BUILD}/enriched.json"))
    emap = {norm(e["title"]) + "|" + str(e["year"]): e for e in enriched}

    fa_path = f"{V4}/film_article.json"
    film_article = json.load(open(fa_path)) if os.path.exists(fa_path) else {}
    for m in movies:
        if m["id"] in film_article:
            continue
        if m["tier"] == "catalog":
            e = emap.get(norm(m["title"]) + "|" + str(m["year"]))
            if e:
                film_article[m["id"]] = e["article"]
    print(f"catalog articles mapped: {len(film_article)}", flush=True)

    scratch_path = f"{V4}/core_resolve.json"
    scratch = json.load(open(scratch_path)) if os.path.exists(scratch_path) else {}
    core = [m for m in movies if m["tier"] == "core"]
    film_article = resolve_core(core, film_article, scratch)
    json.dump(film_article, open(fa_path, "w"))
    json.dump(scratch, open(scratch_path, "w"))

    cats_path = f"{V4}/article_cats.json"
    cache = json.load(open(cats_path)) if os.path.exists(cats_path) else {}
    articles = sorted(set(film_article.values()))
    fetch_categories(articles, cache)
    print(f"film->article coverage: {len(film_article)}/{len(movies)}")


if __name__ == "__main__":
    main()
