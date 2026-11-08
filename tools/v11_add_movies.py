#!/usr/bin/env python3
"""Movie Night v11 — add evidence-backed films the catalog was missing.

Why this exists
  The v7 audit only added films from 1980 on and could only see IMDb-derived
  popularity for 1986-2016. Famous films (Taxi Driver, Dr. Strangelove, Network,
  Annie Hall, Evil Dead II, Rise of the Guardians ...) fell through the gap.
  This pass re-scores the public "wikipedia-movie-data" list with MORE signals
  (IMDb votes, TMDb votes, MovieTweetings rating counts) and adds every film
  that clears a real-evidence bar.

Quality bar (a film is added if it passes either rule)
  A. real viewer evidence: appeal >= --min-appeal (26) AND estimated vote count
     >= --min-votes (1500) AND, when a rating is known, rating >= --min-rating (5.6)
  B. the v7 bar for new additions: appeal >= 34 AND evidence >= 6, and either some
     viewer data (>= 800 estimated votes) or an award / festival cue in the lead text
  plus: confirmed Wikipedia poster/cover art, a real lead extract, >= 2 billed
  cast, not a short / silent / erotic / TV movie / non-US-or-UK-or-unknown origin.
  `--loose` drops rule A's vote requirement (appeal >= --loose-appeal, default 30)
  to pad the catalog toward --count; those extra films are mostly 1930s-40s B
  pictures with no viewer data at all, which is why it is OFF by default.

`ap` is computed with the SAME formula as the v7 audit (rebuild_movies_v7.appeal_score)
so new and existing entries sit on one scale. Votes are never shipped.

Data (all public GitHub raw files; `--download` fetches them into --data):
  prust.json            prust/wikipedia-movie-data  movies.json   (Wikipedia, CC BY-SA)
  movies.csv            danielgrijalva/movie-stats
  movie_metadata.csv    sundeepblue/movie_rating_prediction
  tmdb_5000_movies.csv  Anjulcodewiz/Movie-recommendation-system
  tmdb-movies.csv       saeedfalana/Investigate_a_Dataset_tmdb-movies
  mt_movies.dat / mt_ratings.dat   sidooms/MovieTweetings (latest)

Usage:
  python3 tools/v11_add_movies.py --data .build/v11 --download --report
  python3 tools/v11_add_movies.py --data .build/v11            # writes js/movies.js
  python3 tools/v11_add_movies.py --data .build/v11 --verify-posters   # optional HEAD check

Run it on the CURRENT js/movies.js; it is idempotent (films already present are skipped).
"""
import argparse
import collections
import csv
import json
import math
import os
import re
import sys
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import catalog_lib as L  # noqa: E402
import rebuild_movies_v7 as R  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
RAW = "https://raw.githubusercontent.com/"
FILES = {
    "prust.json": "prust/wikipedia-movie-data/master/movies.json",
    "movies.csv": "danielgrijalva/movie-stats/master/movies.csv",
    "movie_metadata.csv": "sundeepblue/movie_rating_prediction/master/movie_metadata.csv",
    "tmdb_5000_movies.csv": "Anjulcodewiz/Movie-recommendation-system/master/tmdb_5000_movies.csv",
    "tmdb-movies.csv": "saeedfalana/Investigate_a_Dataset_tmdb-movies/master/tmdb-movies.csv",
    "mt_movies.dat": "sidooms/MovieTweetings/master/latest/movies.dat",
    "mt_ratings.dat": "sidooms/MovieTweetings/master/latest/ratings.dat",
}
RATING_OK = {"G", "PG", "PG-13", "R", "NC-17"}
MIN_MT = 8   # minimum MovieTweetings ratings before the count counts as viewer evidence
BAD_GENRES = {"Short", "Silent", "Erotic"}


def download(data_dir):
    os.makedirs(data_dir, exist_ok=True)
    for name, path in FILES.items():
        dest = os.path.join(data_dir, name)
        if os.path.exists(dest) and os.path.getsize(dest) > 1000:
            continue
        print("downloading", name)
        req = urllib.request.Request(RAW + path, headers={"User-Agent": "MovieNightApp/11 (catalog build)"})
        with urllib.request.urlopen(req, timeout=300) as r, open(dest, "wb") as f:
            f.write(r.read())


# ------------------------------------------------------------------ signals
def to_f(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def load_signals(d):
    sig = {}

    def put(k, **kw):
        s = sig.setdefault(k, {})
        for a, b in kw.items():
            if b in (None, "", 0):
                continue
            if a in ("votes", "tvotes", "mtn"):
                s[a] = max(s.get(a, 0), b)
            else:
                s.setdefault(a, b)

    def rows(name, **kw):
        p = os.path.join(d, name)
        if not os.path.exists(p):
            print("  (missing %s — continuing without it)" % name)
            return []
        with open(p, encoding="utf8", errors="replace") as f:
            return list(csv.DictReader(f, **kw))

    for r in rows("movies.csv"):
        try:
            put((L.norm_key(r["name"]), int(r["year"])), votes=to_f(r["votes"]), score=to_f(r["score"]),
                director=r["director"], runtime=to_f(r["runtime"]), mpaa=r["rating"], country=r["country"])
        except (ValueError, KeyError):
            pass
    for r in rows("movie_metadata.csv"):
        try:
            put((L.norm_key(r["movie_title"].replace("\xa0", "")), int(float(r["title_year"]))),
                votes=to_f(r["num_voted_users"]), score=to_f(r["imdb_score"]), director=r["director_name"],
                runtime=to_f(r["duration"]), mpaa=r["content_rating"],
                country={"USA": "United States", "UK": "United Kingdom"}.get(r["country"], r["country"]))
        except (ValueError, KeyError):
            pass
    for r in rows("tmdb-movies.csv"):
        try:
            put((L.norm_key(r["original_title"]), int(r["release_year"])), tvotes=to_f(r["vote_count"]),
                tscore=to_f(r["vote_average"]), director=(r["director"] or "").split("|")[0],
                runtime=to_f(r["runtime"]))
        except (ValueError, KeyError):
            pass
    for r in rows("tmdb_5000_movies.csv"):
        try:
            put((L.norm_key(r["title"]), int(r["release_date"][:4])), tvotes=to_f(r["vote_count"]),
                tscore=to_f(r["vote_average"]), runtime=to_f(r["runtime"]))
        except (ValueError, KeyError):
            pass
    # MovieTweetings: rating count + mean per film
    mp, rp = os.path.join(d, "mt_movies.dat"), os.path.join(d, "mt_ratings.dat")
    if os.path.exists(mp) and os.path.exists(rp):
        names = {}
        for line in open(mp, encoding="utf8", errors="replace"):
            p = line.rstrip("\n").split("::")
            m = re.match(r"(.*) \((\d{4})\)\s*$", p[1]) if len(p) > 1 else None
            if m:
                names[p[0]] = (L.norm_key(m.group(1)), int(m.group(2)))
        cnt, tot = collections.Counter(), collections.Counter()
        for line in open(rp, encoding="utf8", errors="replace"):
            p = line.split("::")
            if len(p) >= 3:
                cnt[p[1]] += 1
                tot[p[1]] += int(p[2])
        for mid, k in names.items():
            if cnt[mid]:
                put(k, mtn=cnt[mid], mtscore=tot[mid] / cnt[mid])
    return sig


def fit_loglog(sig, a_key, b_key, min_a=2000, min_b=3):
    """least-squares log10(a) = c0 + c1*log10(b) over films that have both."""
    xs, ys = [], []
    for s in sig.values():
        if s.get(a_key, 0) > min_a and s.get(b_key, 0) >= min_b:
            xs.append(math.log10(s[b_key]))
            ys.append(math.log10(s[a_key]))
    n = len(xs)
    if n < 50:
        return None
    mx, my = sum(xs) / n, sum(ys) / n
    sxx = sum((x - mx) ** 2 for x in xs)
    if not sxx:
        return None
    c1 = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sxx
    return my - c1 * mx, c1


def make_votes_equiv(sig):
    ft = fit_loglog(sig, "votes", "tvotes", 2000, 20) or (2.8, 0.8)
    fm = fit_loglog(sig, "votes", "mtn", 2000, 3) or (3.7, 0.66)

    def votes_equiv(s):
        if not s:
            return 0
        v = s.get("votes", 0)
        if s.get("tvotes", 0) >= 5:
            v = max(v, 10 ** (ft[0] + ft[1] * math.log10(s["tvotes"])))
        if s.get("mtn", 0) >= MIN_MT:      # a handful of tweets is noise, not evidence
            v = max(v, 10 ** (fm[0] + fm[1] * math.log10(s["mtn"])))
        return v
    return votes_equiv


def rating_of(s):
    if not s:
        return None
    vals = []
    if s.get("score"):
        vals.append(s["score"])
    if s.get("tscore") and s.get("tvotes", 0) >= 20:
        vals.append(s["tscore"])
    if s.get("mtscore") and s.get("mtn", 0) >= 5:
        vals.append(s["mtscore"])
    return sum(vals) / len(vals) if vals else None


# ----------------------------------------------------------------- selection
def good_poster(url, strong=False):
    """en.wikipedia hosts the non-free poster / cover files. Commons images are
    usually public-domain posters for classics but can also be a photo or a
    frame, so they are only accepted for films with strong viewer evidence
    (the article's lead image for a well-known film is its poster)."""
    if not url or re.search(r"\.svg(?:\?|$)|logo", url, re.I):
        return False
    if "/wikipedia/en/" in url or re.search(r"poster|one-?sheet|cover|lobby", url, re.I):
        return True
    return strong and "/wikipedia/commons/" in url


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--download", action="store_true")
    ap.add_argument("--src", default=os.path.join(ROOT, "js", "movies.js"))
    ap.add_argument("--out", default=os.path.join(ROOT, "js", "movies.js"))
    ap.add_argument("--min-appeal", type=int, default=26)
    ap.add_argument("--min-votes", type=int, default=1500)
    ap.add_argument("--min-rating", type=float, default=5.6)
    ap.add_argument("--min-appeal-new", type=int, default=34, help="rule B (the v7 bar for new additions)")
    ap.add_argument("--min-evidence", type=int, default=6)
    ap.add_argument("--loose", action="store_true", help="pad toward --count with no-vote films (not recommended)")
    ap.add_argument("--loose-appeal", type=int, default=30)
    ap.add_argument("--count", type=int, default=4000, help="hard cap on additions")
    ap.add_argument("--report", action="store_true", help="print a preview, write nothing")
    ap.add_argument("--verify-posters", action="store_true", help="HEAD-check each new poster and drop dead ones")
    args = ap.parse_args()

    if args.download:
        download(args.data)
    cur = L.load_js_array(args.src, "MOVIES")
    top20 = L.load_js_array(args.src, "TOP20")
    prust = json.load(open(os.path.join(args.data, "prust.json"), encoding="utf8"))
    sig = load_signals(args.data)
    votes_equiv = make_votes_equiv(sig)
    print("catalog %d films | list %d | signal rows %d" % (len(cur), len(prust), len(sig)))

    have = {(L.norm_key(m["title"]), m["year"]) for m in cur}
    have_years = collections.defaultdict(set)
    for m in cur:
        have_years[L.norm_key(m["title"])].add(m["year"])
    used_ids = {m["id"] for m in cur}

    def is_dup(p):
        k = L.norm_key(p["title"])
        return (k, p["year"]) in have or any(abs(y - p["year"]) <= 1 for y in have_years.get(k, ()))

    def lookup(p):
        k = L.norm_key(p["title"])
        for dy in (0, 1, -1):
            s = sig.get((k, p["year"] + dy))
            if s:
                return s
        return None

    fame = collections.Counter()
    for p in prust:
        if p["year"] >= 1930:
            for a in p["cast"][:5]:
                fame[a] += 1

    def starscore(names):
        xs = sorted((math.log(1 + fame.get(a, 0)) for a in names[:4]), reverse=True)[:3]
        return sum(xs) / 3.0 if xs else 0.0

    scored = []
    skipped = collections.Counter()
    for p in prust:
        if is_dup(p):
            skipped["already in catalog"] += 1
            continue
        ex = p.get("extract") or ""
        if not p.get("href") or len(ex) < 100:
            skipped["no extract"] += 1
            continue
        s = lookup(p)
        strong = votes_equiv(s) >= 3000
        if not good_poster(p.get("thumbnail"), strong):
            skipped["no real poster"] += 1
            continue
        if len(p.get("cast") or []) < (1 if strong else 2):
            skipped["thin cast"] += 1
            continue
        if set(p["genres"]) & BAD_GENRES:
            skipped["short/silent/erotic"] += 1
            continue
        genres = L.normalize_genres(p["genres"])
        if genres is None:
            skipped["dropped genre"] += 1
            continue
        genres = genres or ["Drama"]
        desc = L.clip_sentences(ex, 300)
        if L.TVFILM_RX.search(desc[:200]) or R.SHORT_RX.search(desc[:220]):
            skipped["tv movie / short"] += 1
            continue
        origin = L.detect_origin(desc, True, (s or {}).get("country"))
        if origin == "OTHER":
            skipped["non-US origin"] += 1
            continue
        rt = (s or {}).get("runtime")
        if rt and rt < 60:
            skipped["runtime < 60"] += 1
            continue
        m2 = {"title": p["title"], "year": p["year"], "description": desc, "poster": p["thumbnail"],
              "tier": "catalog", "genres": genres}
        ve = votes_equiv(s)
        ctx = {"votes": ve, "star": starscore(p["cast"]), "origin": origin}
        sc, ev = R.appeal_score(m2, ctx)
        rating = rating_of(s)
        scored.append({"p": p, "s": s, "genres": genres, "desc": desc, "origin": origin,
                       "ap": sc, "ev": ev, "votes": ve, "rating": rating})

    def passes(c):
        if c["ev"] < args.min_evidence:
            return False
        if c["rating"] is not None and c["rating"] < args.min_rating:
            return False
        rule_a = c["ap"] >= args.min_appeal and c["votes"] >= args.min_votes
        notable = c["votes"] >= 800 or bool(L.AWARD_RX.search(c["desc"]))
        rule_b = c["ap"] >= args.min_appeal_new and notable
        rule_c = args.loose and c["ap"] >= args.loose_appeal
        return rule_a or rule_b or rule_c

    chosen = [c for c in scored if passes(c)]
    chosen.sort(key=lambda c: (-c["ap"], -c["ev"], c["p"]["title"].lower()))
    seen_t = {}
    deduped = []
    for c in chosen:
        k = L.norm_key(c["p"]["title"])
        if any(abs(y - c["p"]["year"]) <= 1 for y in seen_t.get(k, ())):
            continue
        seen_t.setdefault(k, []).append(c["p"]["year"])
        deduped.append(c)
    chosen = deduped[:args.count]
    print("scored %d candidates -> %d additions" % (len(scored), len(chosen)))
    for k, v in skipped.most_common():
        print("   skipped %-22s %d" % (k, v))

    if args.verify_posters:
        import concurrent.futures

        def alive(c):
            try:
                rq = urllib.request.Request(c["p"]["thumbnail"], method="HEAD",
                                            headers={"User-Agent": "MovieNightApp/11 (poster check)"})
                with urllib.request.urlopen(rq, timeout=15) as r:
                    return r.status == 200
            except Exception:
                return False
        with concurrent.futures.ThreadPoolExecutor(8) as ex_:
            ok = list(ex_.map(alive, chosen))
        dead = [c for c, o in zip(chosen, ok) if not o]
        chosen = [c for c, o in zip(chosen, ok) if o]
        print("poster check: dropped %d dead links, kept %d" % (len(dead), len(chosen)))

    if args.report:
        dec = collections.Counter(c["p"]["year"] // 10 * 10 for c in chosen)
        print("by decade:", sorted(dec.items()))
        print("with real vote evidence: %d / %d" % (sum(1 for c in chosen if c["votes"] > 0), len(chosen)))
        print("appeal histogram:", sorted(collections.Counter(c["ap"] // 10 * 10 for c in chosen).items()))
        import random
        random.seed(7)
        for c in chosen[:10]:
            print("  top   %3d %d %s" % (c["ap"], c["p"]["year"], c["p"]["title"]))
        for c in random.sample(chosen, min(14, len(chosen))):
            print("  rand  %3d %d %s | votes~%d" % (c["ap"], c["p"]["year"], c["p"]["title"], c["votes"]))
        for c in chosen[-8:]:
            print("  tail  %3d %d %s | votes~%d" % (c["ap"], c["p"]["year"], c["p"]["title"], c["votes"]))
        return

    # ---- build entries
    added = []
    for c in chosen:
        p, s = c["p"], c["s"] or {}
        director = R.parse_director(p["extract"])
        if director == "Unknown" and s.get("director"):
            director = s["director"].strip() or "Unknown"
        rt = s.get("runtime")
        runtime = int(round(rt)) if rt and 60 <= rt <= 300 else None
        mpaa = (s.get("mpaa") or "").strip()
        rating = mpaa if mpaa in RATING_OK else ""
        base = L.slugify(p["title"])
        mid = base if base not in used_ids else "%s-%d" % (base, p["year"])
        n = 2
        while mid in used_ids:
            mid = "%s-%d-%d" % (base, p["year"], n)
            n += 1
        used_ids.add(mid)
        text = p["title"] + ". " + c["desc"]
        e = {
            "id": mid, "title": p["title"], "year": p["year"], "director": director,
            "genres": c["genres"], "runtime": runtime, "rating": rating, "description": c["desc"],
            "vector": L.make_vector(c["genres"], mid, text, rating),
            "keywords": L.make_keywords(c["genres"], p["year"], text),
            "poster": p["thumbnail"], "tier": "catalog", "ap": c["ap"],
            "cast": [a for a in p["cast"] if a][:5],
        }
        if L.family_friendly(c["genres"], rating, c["desc"]):
            e["kf"] = 1
        added.append(e)

    out = cur + added
    out.sort(key=lambda e: (-e["ap"], e["title"].lower()))
    ids = {e["id"] for e in out}
    top20 = [t for t in top20 if t["id"] in ids]
    header = (
        "/* Movie Night — dataset (v11). Each film carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   tier \"core\": hand-written vectors. tier \"catalog\": Wikipedia-sourced entries\n"
        "   (CC BY-SA lead text) whose vectors are ESTIMATED from genre baselines plus a theme\n"
        "   lexicon over the description. `ap` (0-100) is an internal mainstream-appeal score\n"
        "   for an average American viewer (star power, awards/studio cues, era, origin; real\n"
        "   popularity data used only to compute it, never shipped). `kf`:1 = family-friendly.\n"
        "   v7 audit: foreign / pre-1980 / obscure titles below the appeal cut-off were removed\n"
        "   and ~2,000 mainstream American films the catalog was missing were added.\n"
        "   v11: %d evidence-backed films (IMDb/TMDb/MovieTweetings viewer data, confirmed\n"
        "   Wikipedia poster art) were added, including 1930-1979 classics. Rebuild with\n"
        "   tools/v11_add_movies.py. */\n" % len(added)
    )
    js = header + "const MOVIE_AXES = " + json.dumps(L.AXES) + ";\nconst MOVIES = " + L.dump_js_array(out) + ";\n"
    js += "const TOP20 = " + L.dump_js_array(top20) + ";\n"
    js += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(args.out, "w", encoding="utf8") as fh:
        fh.write(js)
    dec = collections.Counter(e["year"] // 10 * 10 for e in out)
    print("WROTE %d movies (+%d) -> %s (%d bytes)" % (len(out), len(added), args.out, os.path.getsize(args.out)))
    print("by decade", sorted(dec.items()))


if __name__ == "__main__":
    main()
