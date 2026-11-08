#!/usr/bin/env python3
"""Movie Night v5 data build.

Pipeline:
  1. Restore the Westerns/Musicals v4 trimmed away (a misread — Owen said
     stop ADDING more, not remove them), minus titles the v4 Indian rule
     removed. Descriptions upgraded from extracts; poster pass applied.
  2. Add ~7,000 Wikipedia-notable films from the merged harvest pool
     (v3 + v4 + v5 deep harvest), enriched via the batch API
     (tools/v5_enrich.py). Quality proxy, stated plainly: Wikipedia
     article length + a verified poster + a real lead extract; era
     preference 2000-2026 first. Indian-production rule (v4) applied to
     every addition. Genre floors (400) filled first by genuine category
     membership; bulk additions after.
  3. Poster pass: infobox-image resolution for posterless additions and
     restored films (v4 method), all URLs verified live.
  4. Emit js/movies.js (v5) + .build/v5/stats.json.

Usage: python3 tools/build_v5.py
"""
import json
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L
import build_v4 as B4
from build_v4 import cat_is_indian_production, extract_is_indian, TAXONOMY_17

CAT_RULES = [
    ("Psychological Thriller", re.compile(r"psychological thriller", re.I)),
    ("Rom-Com", re.compile(r"romantic comedy", re.I)),
    ("Historical Drama", re.compile(r"historical (drama|epic)|period drama", re.I)),
    ("Superhero", re.compile(r"superhero", re.I)),
    ("Documentary", re.compile(r"documentary film", re.I)),
    ("Neo-Noir", re.compile(r"neo-noir", re.I)),
    ("Horror Thriller", re.compile(r"horror thriller", re.I)),
    ("Family Drama", re.compile(r"family drama", re.I)),
]
FLOOR_GENRES = TAXONOMY_17 + [
    "Drama", "Comedy", "Action", "Fantasy", "Family", "Horror", "Animation",
    "Adventure", "War", "Western", "Musical",
]
from build_entries import GENRE_PRIORITY, slugify
from enrich_catalog import display_title, norm_title, parse_extract

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
V5 = os.path.join(BUILD, "v5")

# extended baselines (build_v4 import already merged the taxonomy ones)
from build_entries import BASELINES, make_vector
BASELINES.setdefault("Documentary", [2, 7, 1, 2, 5, 4, 1, 4, 3, 3])
BASELINES.setdefault("Superhero", [9, 4, 1, 4, 3, 4, 2, 9, 2, 3])

NEW_TAG_ORDER = B4.NEW_TAG_ORDER
FLOOR = 400
ADD_TARGET = 7000          # bulk additions goal (restorations excluded)
MIN_LEN_MAIN = 2800        # article-length quality proxy for bulk adds
MIN_LEN_FLOOR = 1800       # scarcer genres get a lower (still real) bar


def main():
    movies = json.load(open(f"{V5}/movies_v4.json"))
    top20 = json.load(open(f"{V5}/top20.json"))
    top20_ids = {t["id"] for t in top20}
    v3 = json.load(open(f"{BUILD}/movies_v3.json"))
    removed_indian = json.load(open(f"{V4}/removed_indian.json"))
    film_article = json.load(open(f"{V4}/film_article.json"))
    article_cats = json.load(open(f"{V4}/article_cats.json"))
    harvest3 = json.load(open(f"{BUILD}/harvest.json"))["films"]
    summaries = L.summary_cache()
    stats = {"start_total": len(movies)}
    used_ids = {m["id"] for m in movies}
    existing_keys = {(norm_title(m["title"]), m["year"]) for m in movies}

    def slug_for(title, year):
        base = slugify(title)
        mid = base
        if mid in used_ids:
            mid = f"{base}-{year}"
        n = 2
        while mid in used_ids:
            mid = f"{base}-{year}-{n}"
            n += 1
        used_ids.add(mid)
        return mid

    # ---------- 1. Restore Westerns / Musicals ----------
    rem_keys = {(norm_title(r["title"]), r["year"]) for r in removed_indian}

    def retag(m, cats):
        tags = set()
        for tag, rx in CAT_RULES:
            if any(rx.search(c) for c in cats):
                tags.add(tag)
        g = set(m["genres"])
        if "Animation" in g:
            tags.add("Animated")
        if "Horror" in g and "Thriller" in g:
            tags.add("Horror Thriller")
        if "Family" in g and "Drama" in g:
            tags.add("Family Drama")
        if "Drama" in g and m["year"] >= 2000 and "Historical Drama" not in tags:
            tags.add("Modern Drama")
        extra = [t for t in NEW_TAG_ORDER if t in tags and t not in m["genres"]]
        m["genres"] = (m["genres"] + extra)[:8]
        return m

    restored = []
    for m in v3:
        if m["id"] in used_ids:
            continue
        if not ({"Western", "Musical"} & set(m["genres"])):
            continue
        if (norm_title(m["title"]), m["year"]) in rem_keys:
            continue
        m = dict(m)
        art = film_article.get(m["id"])
        cats = article_cats.get(art, []) if art else []
        hc = harvest3.get(art, {}).get("cats", []) if art else []
        m = retag(m, cats + hc)
        # description upgrade from cached REST extract when available
        info = summaries.get(art) if art else None
        if info and info.get("extract"):
            m["description"] = L.clean_extract_description(
                info["extract"], m["description"])
        if not m["poster"] and info and info.get("poster"):
            m["poster"] = info["poster"]
        restored.append(m)
        used_ids.add(m["id"])
        existing_keys.add((norm_title(m["title"]), m["year"]))
    movies += restored
    stats["restored"] = len(restored)
    stats["restored_western"] = sum(1 for m in restored if "Western" in m["genres"])
    stats["restored_musical"] = sum(1 for m in restored if "Musical" in m["genres"])
    print(f"restored {len(restored)} (Western {stats['restored_western']}, "
          f"Musical {stats['restored_musical']}); total {len(movies)}", flush=True)

    # ---------- 2. Additions ----------
    cands = json.load(open(f"{V5}/candidates.json"))
    info_cache = json.load(open(f"{V5}/batchinfo.json"))
    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    ALL_GENRES = sorted(set(FLOOR_GENRES))

    def cand_genres(c, cats):
        """App genres + taxonomy tags from harvest evidence + real cats."""
        genres = list(c["genres"])
        tags = set(c["tags"])
        for tag, rx in CAT_RULES:
            if any(rx.search(x) for x in cats):
                tags.add(tag)
        # harvest5/harvest4 tags are already taxonomy names
        for t in tags:
            if t in TAXONOMY_17 and t not in genres:
                genres.append(t)
        base = sorted(set(genres),
                      key=lambda g: GENRE_PRIORITY.index(g)
                      if g in GENRE_PRIORITY else 50)[:4]
        ordered = base + [g for g in genres if g not in base]
        g = set(ordered)
        if "Animation" in g and "Animated" not in ordered:
            ordered.append("Animated")
        if "Horror" in g and "Thriller" in g and "Horror Thriller" not in ordered:
            ordered.append("Horror Thriller")
        if "Family" in g and "Drama" in g and "Family Drama" not in ordered:
            ordered.append("Family Drama")
        return ordered[:8]

    def era_rank(y):
        return 0 if y >= 2020 else 1 if y >= 2010 else 2 if y >= 2000 else \
            3 if y >= 1990 else 4 if y >= 1980 else 5

    prepared = []
    rej = Counter()
    for c in cands:
        info = info_cache.get(c["article"])
        if not info or info.get("missing") or not info.get("extract"):
            rej["no_info"] += 1
            continue
        extract = info["extract"]
        cats = info.get("cats", []) + c["cats"]
        # Indian-production rule (v4): corroborated category evidence,
        # enriched nationality, or lead-extract language markers.
        hits = [x for x in cats if cat_is_indian_production(x)]
        if len(hits) >= 2 and any("Indian" in x for x in hits):
            rej["indian_cats"] += 1
            continue
        if extract_is_indian(extract):
            rej["indian_extract"] += 1
            continue
        ey, nationality, edirector, is_film = parse_extract(extract)
        if nationality == "Indian":
            rej["indian_nationality"] += 1
            continue
        if not is_film or "film series" in extract[:300].lower():
            rej["not_film"] += 1
            continue
        year = c["year"] or ey
        if year is None or not (1900 <= year <= 2026):
            rej["no_year"] += 1
            continue
        if ey is not None and abs(ey - year) > 2:
            rej["year_mismatch"] += 1
            continue
        title = c["title"]
        key = (norm_title(title), year)
        if key in existing_keys:
            rej["dup"] += 1
            continue
        genres = cand_genres(c, cats)
        if "Drama" in genres and year >= 2000 and \
                "Historical Drama" not in genres and len(genres) < 8:
            genres.append("Modern Drama")
        prepared.append({
            "article": c["article"], "title": title, "year": year,
            "genres": genres, "extract": extract, "edirector": edirector,
            "len": info.get("len", 0), "img": info.get("img", ""),
            "era": era_rank(year),
        })
    print(f"prepared candidates: {len(prepared)}; rejected: {dict(rej)}", flush=True)

    def quality(p):
        return (p["len"], 1 if p["img"] else 0)

    selected = []
    selected_articles = set()

    def take(p):
        selected.append(p)
        selected_articles.add(p["article"])
        existing_keys.add((norm_title(p["title"]), p["year"]))
        for g in p["genres"]:
            counts[g] += 1

    # 2a. genre floors first — genuine membership only
    for genre in ALL_GENRES:
        if counts[genre] >= FLOOR:
            continue
        pool = [p for p in prepared
                if genre in p["genres"] and p["article"] not in selected_articles
                and p["len"] >= MIN_LEN_FLOOR]
        pool.sort(key=lambda p: (0 if p["img"] else 1, p["era"], -p["len"]))
        for p in pool:
            if counts[genre] >= FLOOR:
                break
            take(p)
        print(f"floor {genre}: {counts[genre]}", flush=True)

    # 2b. bulk: era first (2000-2026), then article length, poster first
    rest = [p for p in prepared
            if p["article"] not in selected_articles and p["len"] >= MIN_LEN_MAIN]
    rest.sort(key=lambda p: (p["era"], 0 if p["img"] else 1, -p["len"]))
    for p in rest:
        if len(selected) >= ADD_TARGET:
            break
        take(p)
    # 2c. if still short of the addition target, relax the length bar in
    # the same era/poster order rather than inventing quality
    if len(selected) < ADD_TARGET:
        rest2 = [p for p in prepared
                 if p["article"] not in selected_articles and p["len"] >= 1500]
        rest2.sort(key=lambda p: (p["era"], 0 if p["img"] else 1, -p["len"]))
        for p in rest2:
            if len(selected) >= ADD_TARGET:
                break
            take(p)
    stats["additions_prepared"] = len(prepared)
    stats["additions_selected"] = len(selected)
    print(f"selected additions: {len(selected)}", flush=True)

    # ---------- 3. Enrich selected + restored posterless ----------
    sel_articles = [p["article"] for p in selected]
    L.fetch_wikitext(sel_articles)
    wiki = L.wikitext_cache()
    rest_articles = sorted({film_article[m["id"]] for m in restored
                            if not m["poster"] and film_article.get(m["id"])})
    L.fetch_wikitext(rest_articles)
    wiki = L.wikitext_cache()

    # verify batch-API poster candidates + infobox fallbacks
    url_pool = set()
    for p in selected:
        if p["img"]:
            url_pool.add(p["img"])
        img = wiki.get(p["article"], ("", None, ""))[2]
        if img:
            url_pool.add("FILE:" + img)
    file_urls = L.resolve_file_urls([u[5:] for u in url_pool if u.startswith("FILE:")])
    plain = [u for u in url_pool if not u.startswith("FILE:")]
    all_urls = plain + list(file_urls.values())
    verdicts = L.verify_urls(all_urls)
    stats["poster_urls_checked"] = len(all_urls)

    def best_poster(article, img):
        if img and verdicts.get(img):
            return img
        fn = wiki.get(article, ("", None, ""))[2]
        if fn:
            u = file_urls.get(fn, "")
            if u and verdicts.get(u):
                return u
        return ""

    additions = []
    for p in selected:
        dw, rt, _ = wiki.get(p["article"], ("", None, ""))
        director = dw or p["edirector"] or "Unknown"
        poster = best_poster(p["article"], p["img"])
        mid = slug_for(p["title"], p["year"])
        desc = L.clean_extract_description(
            p["extract"],
            f"A {p['year']} film directed by {director}."
            if director != "Unknown" else f"A {p['year']} film.")
        kw = [f"{p['year'] // 10 * 10}s"] + \
            [g.lower() for g in p["genres"][:2]] + ["catalog"]
        additions.append({
            "id": mid, "title": p["title"], "year": p["year"],
            "director": director, "genres": p["genres"], "runtime": rt,
            "rating": "", "description": desc,
            "vector": make_vector(p["genres"][:4], mid),
            "keywords": list(dict.fromkeys(kw)), "poster": poster,
            "tier": "catalog",
        })
        film_article[mid] = p["article"]
    movies += additions
    stats["additions"] = len(additions)
    stats["additions_with_poster"] = sum(1 for m in additions if m["poster"])
    print(f"additions built: {len(additions)} "
          f"(posters {stats['additions_with_poster']})", flush=True)

    # poster pass for restored films still posterless
    fnames = []
    art_of = {}
    for m in restored:
        if m["poster"]:
            continue
        art = film_article.get(m["id"])
        if not art:
            continue
        img = wiki.get(art, ("", None, ""))[2]
        if img:
            fnames.append(img)
            art_of[m["id"]] = img
    if fnames:
        furls = L.resolve_file_urls(fnames)
        verd = L.verify_urls(list(furls.values()))
        gained = 0
        by_id = {m["id"]: m for m in restored}
        for mid, fn in art_of.items():
            u = furls.get(fn, "")
            if u and verd.get(u):
                by_id[mid]["poster"] = u
                gained += 1
        stats["restored_posters_gained"] = gained
        print(f"restored posters gained: {gained}", flush=True)

    # ---------- 4. Emit ----------
    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1

    def era_split(films):
        e = {"2020-2026": 0, "2010-2019": 0, "2000-2009": 0,
             "1990-1999": 0, "1980-1989": 0, "pre-1980": 0}
        for m in films:
            y = m["year"]
            e["2020-2026" if y >= 2020 else "2010-2019" if y >= 2010 else
              "2000-2009" if y >= 2000 else "1990-1999" if y >= 1990 else
              "1980-1989" if y >= 1980 else "pre-1980"] += 1
        return e

    posters = sum(1 for m in movies if m["poster"])
    stats["final_total"] = len(movies)
    stats["poster_pct"] = round(100 * posters / len(movies), 1)
    stats["genre_counts"] = dict(counts.most_common())
    stats["eras_total"] = era_split(movies)
    stats["eras_additions"] = era_split(additions)
    n_modern_add = sum(1 for m in additions if m["year"] >= 2000)
    stats["additions_2000_pct"] = round(100 * n_modern_add / max(1, len(additions)), 1)

    header = (
        "/* Movie Night — dataset (v5). Each movie carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   Entries with tier \"core\" are hand-written. Entries with tier \"catalog\" were\n"
        "   sourced from Wikipedia year/genre categories: director and runtime come from\n"
        "   the film's infobox (runtime is null when unknown — never invented), the\n"
        "   description is adapted from the film's Wikipedia lead (CC BY-SA), and the\n"
        "   taste vector is an ESTIMATE derived from genre-baseline profiles.\n"
        "   Catalog additions are Wikipedia-notable films: selection used article\n"
        "   substance (length), a verified poster and a real lead extract as the\n"
        "   notability proxy, preferring 2000-2026 releases. Genre tags in the\n"
        "   refined taxonomy come from Wikipedia category evidence or the\n"
        "   derived-label rules documented in the README.\n"
        "   Poster URLs come from the Wikipedia API (verified live at build time);\n"
        "   an empty poster means the UI draws an elegant generated cover instead. */\n"
    )
    AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
            "dark", "romantic", "epic", "cozy", "weird"]
    ORDER = ["id", "title", "year", "director", "genres", "runtime", "rating",
             "description", "vector", "keywords", "poster", "tier"]
    movies = [{k: m[k] for k in ORDER if k in m} for m in movies]

    def dump(o):
        return json.dumps(o, indent=1, ensure_ascii=False)

    out = header
    out += "const MOVIE_AXES = " + json.dumps(AXES) + ";\n"
    out += "const MOVIES = [\n" + ",\n".join(dump(m) for m in movies) + "\n];\n"
    out += "const TOP20 = [\n" + ",\n".join(dump(t) for t in top20) + "\n];\n"
    out += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(f"{ROOT}/js/movies.js", "w") as fh:
        fh.write(out)
    stats["movies_js_bytes"] = len(out.encode("utf-8"))
    L.save_json(f"{V5}/stats.json", stats)
    print(json.dumps(stats, indent=1), flush=True)


if __name__ == "__main__":
    main()
