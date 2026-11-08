#!/usr/bin/env python3
"""Movie Night v7 — audit, prune and extend the movie catalog.

What this does
  1. Loads js/movies.js (v5/v6 dataset).
  2. Scores EVERY film for mainstream appeal (0-100) for an average American
     viewer: hand-curated core tier, star power (how often the billed cast
     appear across the corpus), real popularity where a public dataset has it,
     award/studio/franchise cues in the description, era (2000-2026 first),
     origin (American first, UK/Commonwealth next, other foreign only when
     famous), and penalties for obscure documentaries, TV/direct-to-video
     filler, erotica and shorts.
  3. Drops everything under the appeal cut-off (default 26) except the core tier.
  4. Adds American films from the public "wikipedia-movie-data" list that the
     catalog was missing (Wikipedia lead text, CC BY-SA, like the rest).
  5. Rebuilds every catalog-tier taste vector from genre baseline + theme
     lexicon (instead of baseline + random jitter), regenerates searchable
     theme keywords, normalises the genre taxonomy, flags family-friendly
     titles, fills MPAA ratings where a public dataset states them.
  6. Writes js/movies.js in compact form (one JSON object per line).

Popularity signals are used ONLY to compute the internal `ap` score; no vote
counts or IMDb text are shipped.

Inputs (download once; all are public GitHub raw files):
  prust.json         https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
  movies.csv         https://raw.githubusercontent.com/danielgrijalva/movie-stats/master/movies.csv
  movie_metadata.csv https://raw.githubusercontent.com/sundeepblue/movie_rating_prediction/master/movie_metadata.csv

Usage: python3 tools/rebuild_movies_v7.py --data DIR [--min-appeal 26] [--report] [--out js/movies.js]
"""
import argparse
import collections
import csv
import json
import math
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import catalog_lib as L  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def parse_starring(desc):
    m = re.search(r"\b(?:starring|stars|featuring)\s+(.{5,260}?)(?:\.\s|\.$|$| in the| as | and was| and is| about|;)", desc)
    if not m:
        return []
    s = re.sub(r"\(.*?\)", "", m.group(1))
    out = []
    for p in re.split(r",\s*(?:and\s+)?|\s+and\s+", s):
        p = p.strip(" .")
        if re.match(r"^[A-Z][A-Za-z'’.\-]+(?:\s+[A-Z][A-Za-z'’.\-]+){1,3}$", p):
            out.append(p)
    return out[:6]


def parse_director(extract):
    m = re.search(r"[Dd]irected by ([A-Z][A-Za-zÀ-Žà-ž.'\- ]+?)(?:,| and starring| starring|;|\.| and | who |$)", extract)
    if m:
        c = m.group(1).strip()
        if 2 <= len(c) <= 40:
            return c
    return "Unknown"


def load_signals(data_dir):
    sig = {}
    p1 = os.path.join(data_dir, "movies.csv")
    if os.path.exists(p1):
        with open(p1, encoding="utf8", errors="replace") as f:
            for r in csv.DictReader(f):
                try:
                    sig[(L.norm_key(r["name"]), int(r["year"]))] = {
                        "votes": float(r["votes"] or 0), "country": r["country"],
                        "rating": r["rating"], "star": r["star"]}
                except (ValueError, KeyError):
                    pass
    p2 = os.path.join(data_dir, "movie_metadata.csv")
    if os.path.exists(p2):
        with open(p2, encoding="utf8", errors="replace") as f:
            for r in csv.DictReader(f):
                try:
                    k = (L.norm_key(r["movie_title"].replace("\xa0", "")), int(float(r["title_year"])))
                    v = float(r["num_voted_users"] or 0)
                except (ValueError, KeyError):
                    continue
                cur = sig.get(k)
                if cur is None or cur["votes"] < v:
                    sig[k] = {"votes": v, "country": {"USA": "United States", "UK": "United Kingdom"}.get(r["country"], r["country"]),
                              "rating": r["content_rating"], "star": r["actor_1_name"],
                              "actors": [r["actor_1_name"], r["actor_2_name"], r["actor_3_name"]]}
    return sig


RATING_OK = {"G", "PG", "PG-13", "R", "NC-17"}


SHORT_RX = re.compile(r"\b(?:short film|short drama|short comedy|short horror|short documentary|"
                      r"short animated|animated short|fan film|web series|webseries|"
                      r"anthology film|compilation film|student film|experimental film)\b", re.I)


def appeal_score(m, ctx):
    """-> (appeal 0-100, evidence). `evidence` is the part of the score that
    comes from real notability signals (core tier, popularity data, star power,
    awards, studio/franchise cues). Context (era, origin, poster) alone can
    never carry a film into the catalog: a silent American indie with a
    poster would otherwise score 26 on context alone."""
    desc = m["description"]
    if m["tier"] != "core" and SHORT_RX.search(desc[:220]):
        return 0, 0
    ev = 0.0
    if m["tier"] == "core":
        ev += 30
    if ctx["votes"]:
        ev += max(0.0, min(1.0, (math.log10(ctx["votes"]) - 3.6) / (5.9 - 3.6))) * 38
    ev += min(ctx["star"], 3.8) * 5.5
    if L.AWARD_RX.search(desc):
        ev += 7
    studio = {x.lower() for x in L.STUDIO_RX.findall(desc)}
    ev += min(8, 4 * len(studio))
    a = ev
    y = m["year"]
    a += 10 if y >= 2010 else 8 if y >= 2000 else 3 if y >= 1990 else 0 if y >= 1980 else -8
    a += {"US": 12, "UKI": 5, "UNK": 3, "OTHER": -20}[ctx["origin"]]
    if m["poster"]:
        a += 4
    if len(desc) >= 150:
        a += 3
    if m["genres"] and m["genres"][0] == "Documentary" and m["tier"] != "core":
        a -= 10
    if L.TVFILM_RX.search(desc[:200]):
        a -= 8
    if L.JUNK_RX.search(desc[:260]):
        a -= 25
    return int(max(0, min(100, round(a)))), int(round(ev))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--min-appeal", type=int, default=26)
    ap.add_argument("--min-appeal-new", type=int, default=34,
                    help="cut-off for films added from the external list")
    ap.add_argument("--min-evidence", type=int, default=6,
                    help="minimum real-notability evidence (stars/votes/awards/studio)")
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--src", default=os.path.join(ROOT, "js", "movies.js"),
                    help="the PREVIOUS (v5/v6) js/movies.js — never re-run on the v7 output")
    ap.add_argument("--out", default=os.path.join(ROOT, "js", "movies.js"))
    args = ap.parse_args()

    movies = L.load_js_array(args.src, "MOVIES")
    top20 = L.load_js_array(args.src, "TOP20")
    prust = json.load(open(os.path.join(args.data, "prust.json"), encoding="utf8"))
    sig = load_signals(args.data)
    pmap = {(L.norm_key(p["title"]), p["year"]): p for p in prust}
    print("loaded", len(movies), "movies;", len(prust), "list films;", len(sig), "signal rows")

    # ---- cast + fame table (star-power proxy)
    cast_of = {}
    for m in movies:
        k = (L.norm_key(m["title"]), m["year"])
        if k in pmap and pmap[k]["cast"]:
            cast_of[m["id"]] = pmap[k]["cast"][:6]
        elif k in sig and sig[k].get("actors"):
            cast_of[m["id"]] = [a for a in sig[k]["actors"] if a]
        else:
            cast_of[m["id"]] = parse_starring(m["description"])
    fame = collections.Counter()
    for p in prust:
        if p["year"] >= 1985:
            for a in p["cast"][:5]:
                fame[a] += 1
    for m in movies:
        if (L.norm_key(m["title"]), m["year"]) in pmap or m["year"] < 1985:
            continue
        for a in cast_of[m["id"]][:5]:
            fame[a] += 1
    for v in sig.values():
        for a in v.get("actors", []) or ([v["star"]] if v.get("star") else []):
            if a:
                fame[a] += 2

    def starscore(names):
        xs = sorted((math.log(1 + fame.get(a, 0)) for a in names[:4]), reverse=True)[:3]
        return sum(xs) / 3.0 if xs else 0.0

    # ---- score existing
    kept, dropped = [], []
    stats = collections.Counter()
    for m in movies:
        k = (L.norm_key(m["title"]), m["year"])
        s = sig.get(k)
        genres = L.normalize_genres(m["genres"])
        if genres is None:
            stats["dropped:erotic/short genre"] += 1
            if m["tier"] != "core":
                continue
            genres = ["Drama"]
        if not genres:
            genres = ["Drama"]
        ctx = {
            "votes": s["votes"] if s else 0,
            "star": starscore(cast_of[m["id"]]),
            "origin": L.detect_origin(m["description"], k in pmap, s["country"] if s else None),
        }
        m2 = dict(m, genres=genres)
        sc, ev = appeal_score(m2, ctx)
        m2["_ap"], m2["_origin"], m2["_sig"] = sc, ctx["origin"], s
        if m["tier"] == "core" or (sc >= args.min_appeal and ev >= args.min_evidence
                                   and (m["runtime"] is None or m["runtime"] >= 60)):
            kept.append(m2)
        else:
            dropped.append(m2)

    # ---- external American-films list: additions
    have = {(L.norm_key(m["title"]), m["year"]) for m in movies}
    have_titles = collections.Counter(L.norm_key(m["title"]) for m in movies)
    new = []
    for p in prust:
        y = p["year"]
        k = (L.norm_key(p["title"]), y)
        if y < 1980 or k in have or not p.get("href") or not p.get("extract") or len(p["extract"]) < 60:
            continue
        if len(p["cast"]) < 2:
            continue
        genres = L.normalize_genres(p["genres"])
        if not genres:
            if p["genres"] and L.normalize_genres(p["genres"]) is None:
                continue
            genres = ["Drama"]
        desc = L.clip_sentences(p["extract"], 300)
        s = sig.get(k)
        m2 = {"id": "", "title": p["title"], "year": y, "director": parse_director(p["extract"]),
              "genres": genres, "runtime": None, "rating": "", "description": desc,
              "poster": p.get("thumbnail") or "", "tier": "catalog"}
        if s and s["rating"] in RATING_OK:
            m2["rating"] = s["rating"]
        cast_of[("new", k)] = p["cast"][:6]
        origin = L.detect_origin(desc, True, s["country"] if s else None)
        if origin == "OTHER":      # the "American films" list still carries some Bollywood etc.
            continue
        ctx = {"votes": s["votes"] if s else 0, "star": starscore(p["cast"]),
               "origin": origin}
        sc, ev = appeal_score(m2, ctx)
        if sc >= args.min_appeal_new and ev >= args.min_evidence:
            m2["_ap"], m2["_origin"], m2["_sig"] = sc, origin, s
            new.append(m2)

    print("existing kept %d / dropped %d; external additions %d" % (len(kept), len(dropped), len(new)))
    if args.report:
        def bucket(lst, name):
            c = collections.Counter()
            for m in lst:
                c[(m["year"] // 10 * 10, m["_origin"])] += 1
            print(name, sorted(c.items())[-40:])
        bucket(kept, "KEPT")
        import random
        random.seed(3)
        for label, lst in (("KEPT-lowest", sorted(kept, key=lambda m: m["_ap"])[:0] or []),):
            pass
        near = [m for m in kept if m["tier"] == "catalog" and m["_ap"] < args.min_appeal + 6]
        print("\n--- kept near cut-off (sample)")
        for m in random.sample(near, min(14, len(near))):
            print(" ", m["_ap"], m["year"], m["title"], "|", m["_origin"], "|", m["description"][:60])
        near = [m for m in dropped if m["_ap"] >= args.min_appeal - 8]
        print("\n--- dropped near cut-off (sample)")
        for m in random.sample(near, min(14, len(near))):
            print(" ", m["_ap"], m["year"], m["title"], "|", m["_origin"], "|", m["description"][:60])
        near = [m for m in new if m["_ap"] < args.min_appeal_new + 6]
        print("\n--- additions near cut-off (sample)")
        for m in random.sample(near, min(10, len(near))):
            print(" ", m["_ap"], m["year"], m["title"], "|", m["description"][:60])
        hi = sorted(new, key=lambda m: -m["_ap"])[:10]
        print("\n--- top additions")
        for m in hi:
            print(" ", m["_ap"], m["year"], m["title"])
        print("\n--- sample of dropped lowest")
        for m in random.sample(dropped, 12):
            print(" ", m["_ap"], m["year"], m["title"], "|", m["_origin"], "|", m["description"][:55])
        dist = collections.Counter((m["_ap"] // 10) * 10 for m in kept + new)
        print("appeal histogram (kept+new):", sorted(dist.items()))
        return

    # ---- finalise entries
    used = {m["id"] for m in kept}
    out = []
    for m in kept + new:
        text = m["title"] + ". " + m["description"]
        rating = m.get("rating") or ""
        s = m.get("_sig")
        if not rating and s and s.get("rating") in RATING_OK:
            rating = s["rating"]
        if not m["id"]:
            base = L.slugify(m["title"])
            mid = base if base not in used else "%s-%d" % (base, m["year"])
            n = 2
            while mid in used:
                mid = "%s-%d-%d" % (base, m["year"], n)
                n += 1
            used.add(mid)
            m["id"] = mid
        e = {
            "id": m["id"], "title": m["title"], "year": m["year"],
            "director": m["director"] or "Unknown", "genres": m["genres"],
            "runtime": m["runtime"], "rating": rating,
            "description": m["description"],
            "vector": m["vector"] if m["tier"] == "core" else L.make_vector(m["genres"], m["id"], text, rating),
            "keywords": m["keywords"] if m["tier"] == "core" else L.make_keywords(m["genres"], m["year"], text),
            "poster": m["poster"], "tier": m["tier"], "ap": m["_ap"],
        }
        if L.family_friendly(m["genres"], rating, m["description"]):
            e["kf"] = 1
        out.append(e)
    out.sort(key=lambda e: (-e["ap"], e["title"].lower()))

    ids = {e["id"] for e in out}
    top20 = [t for t in top20 if t["id"] in ids]
    header = (
        "/* Movie Night — dataset (v7). Each film carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   tier \"core\": hand-written vectors. tier \"catalog\": Wikipedia-sourced entries\n"
        "   (CC BY-SA lead text) whose vectors are ESTIMATED from genre baselines plus a theme\n"
        "   lexicon over the description. `ap` (0-100) is an internal mainstream-appeal score\n"
        "   for an average American viewer (star power, awards/studio cues, era, origin; real\n"
        "   popularity data used only to compute it, never shipped). `kf`:1 = family-friendly.\n"
        "   v7 audit: foreign / pre-1980 / obscure titles below the appeal cut-off were removed\n"
        "   and ~2,000 mainstream American films the catalog was missing were added. */\n"
    )
    js = header + "const MOVIE_AXES = " + json.dumps(L.AXES) + ";\nconst MOVIES = " + L.dump_js_array(out) + ";\n"
    js += "const TOP20 = " + L.dump_js_array(top20) + ";\n"
    js += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(args.out, "w", encoding="utf8") as fh:
        fh.write(js)
    c = collections.Counter(m["year"] // 10 * 10 for m in out)
    print("WROTE", len(out), "movies;", "by decade", sorted(c.items()))
    print("with poster %d, family-friendly %d, rated %d" % (
        sum(1 for e in out if e["poster"]), sum(1 for e in out if e.get("kf")), sum(1 for e in out if e["rating"])))
    print("bytes", os.path.getsize(args.out))


if __name__ == "__main__":
    main()
