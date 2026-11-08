#!/usr/bin/env python3
"""Merge enriched catalog-tier additions into js/movies.js.

Catalog-tier entries (tier: "catalog") carry:
  - director / runtime parsed from the film's Wikipedia infobox (runtime is
    null when the infobox has none — never invented),
  - a factual one-line description built from year + nationality + genre +
    director as verified from Wikipedia,
  - an ESTIMATED taste vector: the genre-baseline profile for its genres
    with a small deterministic per-film variation. These vectors are
    approximations for browsing/quiz play, not hand-tuned ratings.
Core entries (tier: "core") are the original hand-written catalog.

Usage: python3 tools/build_entries.py
"""
import hashlib
import json
import os
import re

BUILD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".build")
APP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]

BASELINES = {
    "Action":    [9, 4, 2, 2, 2, 5, 1, 7, 1, 2],
    "Comedy":    [4, 4, 0, 9, 5, 2, 3, 3, 6, 4],
    "Drama":     [2, 6, 1, 2, 6, 5, 3, 4, 4, 2],
    "Horror":    [5, 4, 10, 1, 1, 8, 0, 3, 0, 5],
    "Thriller":  [7, 6, 5, 0, 2, 7, 1, 4, 1, 3],
    "Sci-Fi":    [6, 8, 2, 2, 3, 5, 1, 8, 1, 6],
    "Romance":   [2, 4, 0, 3, 7, 2, 10, 3, 6, 1],
    "Crime":     [6, 6, 3, 1, 2, 8, 1, 4, 1, 3],
    "Adventure": [7, 4, 1, 2, 5, 3, 2, 8, 3, 3],
    "Animation": [4, 4, 1, 6, 8, 1, 2, 5, 7, 5],
    "Fantasy":   [5, 5, 2, 3, 6, 4, 3, 9, 4, 6],
    "Family":    [3, 3, 0, 6, 9, 0, 1, 4, 8, 3],
    "Mystery":   [5, 8, 4, 0, 2, 6, 1, 3, 2, 4],
    "Musical":   [4, 3, 0, 6, 7, 1, 5, 5, 6, 4],
    "War":       [6, 5, 4, 0, 3, 8, 0, 7, 0, 1],
    "Western":   [6, 4, 2, 1, 3, 6, 1, 6, 2, 2],
}
GENRE_PRIORITY = ["Animation", "Family", "Horror", "Sci-Fi", "Fantasy", "Western",
                  "War", "Musical", "Mystery", "Romance", "Action", "Thriller",
                  "Crime", "Comedy", "Adventure", "Drama"]
GENRE_PHRASE = {"Sci-Fi": "science fiction"}


def slugify(title):
    s = title.lower().replace("&", " and ")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "untitled"


def make_vector(genres, seed_key):
    weights = []
    for i, g in enumerate(genres):
        weights.append(1.0 if i == 0 else 0.55)
    vec = []
    h = hashlib.md5(seed_key.encode()).digest()
    for ai, axis in enumerate(AXES):
        tot, wsum = 0.0, 0.0
        for g, w in zip(genres, weights):
            base = BASELINES.get(g)
            if base:
                tot += base[ai] * w
                wsum += w
        v = tot / wsum if wsum else 3
        jitter = (h[ai % len(h)] % 5) - 2          # -2..+2 deterministic
        if h[(ai + 5) % len(h)] % 3 == 0:
            jitter = int(jitter * 0.5)
        vec.append(max(0, min(10, int(round(v + jitter)))))
    return dict(zip(AXES, vec))


def make_description(e):
    year, nat = e["year"], e.get("nationality", "")
    genre = GENRE_PHRASE.get(e["genres"][0], e["genres"][0].lower())
    base = f"A {year} {nat + ' ' if nat else ''}{genre} film"
    if e["director"] and e["director"] != "Unknown":
        base += f" directed by {e['director']}"
    desc = base + "."
    if len(desc) < 34:
        desc = base + " — a catalog entry in the Movie Night library."
    return desc


def make_keywords(e):
    kw = [f"{e['year'] // 10 * 10}s"]
    for g in e["genres"][:2]:
        kw.append(GENRE_PHRASE.get(g, g.lower()))
    if e.get("nationality"):
        kw.append(e["nationality"].lower())
    kw.append("catalog")
    seen, out = set(), []
    for k in kw:
        if k not in seen:
            seen.add(k)
            out.append(k)
    return out


def main():
    data = json.load(open(f"{BUILD}/existing_full.json"))
    movies, top20 = data["MOVIES"], data["TOP20"]
    for m in movies:
        m.setdefault("tier", "core")
    # stable key order matching the house style
    ORDER = ["id", "title", "year", "director", "genres", "runtime", "rating",
             "description", "vector", "keywords", "poster", "tier"]
    movies = [{k: m[k] for k in ORDER if k in m} for m in movies]

    enriched = json.load(open(f"{BUILD}/enriched.json"))
    used_ids = {m["id"] for m in movies}
    seen_keys = {(re.sub(r"[^a-z0-9 ]", " ", m["title"].lower()).strip(), m["year"])
                 for m in movies}
    added, skipped_dup = [], 0
    for e in enriched:
        genres = sorted(e["genres"], key=lambda g: GENRE_PRIORITY.index(g)
                        if g in GENRE_PRIORITY else 99)[:4]
        if not genres:
            continue
        e = dict(e, genres=genres)
        key = (re.sub(r"[^a-z0-9 ]", " ", e["title"].lower()).strip(), e["year"])
        if key in seen_keys:
            skipped_dup += 1
            continue
        seen_keys.add(key)
        slug = slugify(e["title"])
        mid = slug
        if mid in used_ids:
            mid = f"{slug}-{e['year']}"
        n = 2
        while mid in used_ids:
            mid = f"{slug}-{e['year']}-{n}"
            n += 1
        used_ids.add(mid)
        entry = {
            "id": mid,
            "title": e["title"],
            "year": e["year"],
            "director": e["director"],
            "genres": genres,
            "runtime": e.get("runtime"),
            "rating": "",
            "description": make_description(e),
            "vector": make_vector(genres, mid),
            "keywords": make_keywords(e),
            "poster": e.get("poster", ""),
            "tier": "catalog",
        }
        added.append(entry)
    print(f"added {len(added)} catalog entries (skipped {skipped_dup} dupes)")

    added.sort(key=lambda m: (-m["year"], m["title"].lower()))
    all_movies = movies + added

    header = (
        "/* Movie Night — dataset (v3). Each movie carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   Entries with tier \"core\" are hand-written. Entries with tier \"catalog\" were\n"
        "   sourced from Wikipedia year/genre categories: director and runtime come from\n"
        "   the film's infobox (runtime is null when unknown — never invented), the\n"
        "   one-line description is a factual year/nationality/genre/director note, and\n"
        "   the taste vector is an ESTIMATE derived from genre-baseline profiles.\n"
        "   Poster URLs come from the Wikipedia API (verified live at build time);\n"
        "   an empty poster means the UI draws an elegant generated cover instead. */\n"
    )
    def dump(obj):
        return json.dumps(obj, indent=1, ensure_ascii=False)
    out = header
    out += "const MOVIE_AXES = " + json.dumps(AXES) + ";\n"
    out += "const MOVIES = [\n" + ",\n".join(dump(m) for m in all_movies) + "\n];\n"
    out += "const TOP20 = [\n" + ",\n".join(dump(t) for t in top20) + "\n];\n"
    out += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(f"{APP}/js/movies.js", "w") as fh:
        fh.write(out)

    counts = {}
    for m in all_movies:
        for g in m["genres"]:
            counts[g] = counts.get(g, 0) + 1
    eras_new = {"2020-2026": 0, "2010-2019": 0, "2000-2009": 0, "pre-2000": 0}
    for m in added:
        y = m["year"]
        eras_new["2020-2026" if y >= 2020 else "2010-2019" if y >= 2010
                 else "2000-2009" if y >= 2000 else "pre-2000"] += 1
    posters = sum(1 for m in all_movies if m["poster"])
    new_posters = sum(1 for m in added if m["poster"])
    print(f"TOTAL movies: {len(all_movies)}")
    print("per-genre:", dict(sorted(counts.items(), key=lambda kv: -kv[1])))
    print("additions by era:", eras_new)
    n20 = eras_new["2020-2026"]
    print(f"additions 2020-2026: {n20} ({100 * n20 / max(1, len(added)):.1f}% of additions)")
    print(f"poster coverage: total {posters}/{len(all_movies)} "
          f"({100 * posters / len(all_movies):.1f}%), new {new_posters}/{len(added)}")


if __name__ == "__main__":
    main()
