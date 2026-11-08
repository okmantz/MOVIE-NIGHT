#!/usr/bin/env python3
"""Final patch pass on the merged dataset:
  1. Retry poster resolution for the Owen-list core additions whose
     first attempt failed verification (transient Wikimedia throttling
     during the merge run).
  2. Upgrade Joker (2019) — which a genre pool had already added as a
     catalog entry — to the hand-written CORE entry the brief requires
     for Owen-list gaps (hand description/vector/genres, poster kept).

Operates on the emitted dataset and re-emits js/movies.js in the same
format as merge_owen_list.py; refreshes .build/v4/stats.json.

Usage: python3 tools/patch_owen_posters.py
"""
import json
import os
import subprocess
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]

RETRY = {
    "I Am Legend": ["I Am Legend (film)"],
    "The Illusionist": ["The Illusionist (2006 film)"],
    "Sinbad: Legend of the Seven Seas": ["Sinbad: Legend of the Seven Seas"],
    "Little Boy": ["Little Boy (film)"],
    "Presto": ["Presto (film)"],
}


def main():
    dump = subprocess.run(
        ["node", "-e",
         "const {MOVIES, TOP20} = require('./js/movies.js');"
         "console.log(JSON.stringify({movies: MOVIES, top20: TOP20}))"],
        cwd=ROOT, capture_output=True, text=True, check=True).stdout
    data = json.loads(dump)
    movies, top20 = data["movies"], data["top20"]
    by_title = {}
    for m in movies:
        by_title.setdefault(m["title"], []).append(m)

    # Strip Wikimedia's utm tracking params from every stored poster URL
    # (same image, canonical URL).
    stripped = 0
    for m in movies:
        if m["poster"] and "?" in m["poster"]:
            m["poster"] = m["poster"].split("?")[0]
            stripped += 1
    print(f"poster URLs cleaned of tracking params: {stripped}", flush=True)

    arts = [a for v in RETRY.values() for a in v]
    summaries = L.fetch_summaries(arts)
    wikitext = L.fetch_wikitext(arts)
    import requests as _rq
    fixed = []
    for title, candidates in RETRY.items():
        for m in by_title.get(title, []):
            if m["poster"]:
                continue
            for art in candidates:
                info = summaries.get(art)
                url = ""
                if info and not info.get("dead") and info.get("poster"):
                    url = info["poster"].split("?")[0]
                if not url:
                    wt = wikitext.get(art)
                    if wt and wt[2]:
                        resolved = L.resolve_file_urls([wt[2]])
                        url = (resolved.get(wt[2]) or "").split("?")[0]
                if not url:
                    continue
                # Direct HEAD check with retries — the shared verdict
                # cache holds transient False verdicts from a throttled
                # build window, and upload.wikimedia.org answers 429
                # intermittently under load.
                import time as _time
                ok = False
                for _att in range(4):
                    try:
                        r = _rq.head(url, timeout=15, allow_redirects=True,
                                     headers={"User-Agent": "MovieNightBuild/1.0"})
                        ok = r.status_code == 200 and r.headers.get(
                            "Content-Type", "").startswith("image")
                        if ok or r.status_code not in (429, 403, 503):
                            break
                    except Exception:
                        ok = False
                    _time.sleep(1.5 * (_att + 1))
                if ok:
                    m["poster"] = url
                    fixed.append(title)
                    break
    print(f"posters fixed: {fixed}", flush=True)

    for m in by_title.get("Joker", []):
        if m["year"] == 2019 and m["tier"] != "core":
            m["tier"] = "core"
            m["director"] = "Todd Phillips"
            m["runtime"] = 122
            m["rating"] = "R"
            m["genres"] = ["Crime", "Drama", "Thriller", "Psychological Thriller"]
            m["description"] = ("Arthur Fleck, a struggling party clown in a "
                                "fractured Gotham, unravels under cruelty and "
                                "neglect until his breakdown ignites the city "
                                "— and a legend.")
            m["vector"] = {"adrenaline": 5, "brainy": 7, "scary": 4, "funny": 2,
                           "heartwarming": 1, "dark": 10, "romantic": 0,
                           "epic": 5, "cozy": 0, "weird": 6}
            m["keywords"] = ["gotham", "origin", "madness", "character study"]
            print("Joker (2019) upgraded to hand-written core entry", flush=True)

    ORDER = ["id", "title", "year", "director", "genres", "runtime", "rating",
             "description", "vector", "keywords", "poster", "tier"]
    movies = [{k: m[k] for k in ORDER if k in m} for m in movies]
    header = (
        "/* Movie Night — dataset (v4). Each movie carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   Entries with tier \"core\" are hand-written. Entries with tier \"catalog\" were\n"
        "   sourced from Wikipedia year/genre categories: director and runtime come from\n"
        "   the film's infobox (runtime is null when unknown — never invented), the\n"
        "   description is adapted from the film's Wikipedia lead (CC BY-SA), and the\n"
        "   taste vector is an ESTIMATE derived from genre-baseline profiles.\n"
        "   Genre tags in the refined taxonomy (Psychological Thriller, Rom-Com,\n"
        "   Superhero, Neo-Noir, Documentary, Historical Drama, Family Drama,\n"
        "   Modern Drama, Horror Thriller, Animated) come from Wikipedia category\n"
        "   evidence or the derived-label rules documented in the README.\n"
        "   Poster URLs come from the Wikipedia API (verified live at build time);\n"
        "   an empty poster means the UI draws an elegant generated cover instead. */\n"
    )

    def dumpj(o):
        return json.dumps(o, indent=1, ensure_ascii=False)

    out = header
    out += "const MOVIE_AXES = " + json.dumps(AXES) + ";\n"
    out += "const MOVIES = [\n" + ",\n".join(dumpj(m) for m in movies) + "\n];\n"
    out += "const TOP20 = [\n" + ",\n".join(dumpj(t) for t in top20) + "\n];\n"
    out += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(f"{ROOT}/js/movies.js", "w") as fh:
        fh.write(out)

    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    posters = sum(1 for m in movies if m["poster"])
    stats = json.load(open(f"{V4}/stats.json"))
    stats.update({
        "final_total": len(movies),
        "poster_pct": round(100 * posters / len(movies), 1),
        "genre_counts": dict(counts.most_common()),
        "modern_pct": round(100 * sum(1 for m in movies if m["year"] >= 2000) / len(movies), 1),
        "movies_js_bytes": len(out.encode("utf-8")),
    })
    L.save_json(f"{V4}/stats.json", stats)
    print(f"final: {len(movies)} films, posters {posters} ({stats['poster_pct']}%)",
          flush=True)


if __name__ == "__main__":
    main()
