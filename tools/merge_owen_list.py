#!/usr/bin/env python3
"""Merge step (run AFTER build_v4.py): guarantee Owen's personal
"Best Movies of All Time" list is fully present in the app.

- Adds the confirmed gaps as CORE-tier, hand-written entries with
  posters resolved + verified through the same Wikipedia pipeline.
- Re-adds any list title that the v4 build dropped (Indian rule, trims,
  or poster pruning) from the v3 dataset, unchanged.
- Every resolved list title is protected: a final mini-prune of other
  no-poster catalog filler restores poster coverage to >= 90.3%
  without touching protected films, core tier, or the Top 20.
- Emits the final js/movies.js and refreshes .build/v4/stats.json.

Usage: python3 tools/merge_owen_list.py
"""
import json
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L
from enrich_catalog import display_title, norm_title

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]


def vec(**kw):
    return {a: kw.get(a, 0) for a in AXES}


# Hand-written core entries for the confirmed gaps.
NEW_CORE = [
    dict(title="V for Vendetta", year=2005, director="James McTeigue",
         genres=["Action", "Sci-Fi", "Thriller", "Drama"], runtime=132, rating="R",
         description="In a fascist future London, a masked anarchist known only as V recruits a young woman into his plot to ignite a revolution on the fifth of November.",
         vector=vec(adrenaline=7, brainy=8, scary=3, funny=1, heartwarming=3, dark=8, romantic=2, epic=6, cozy=1, weird=5),
         keywords=["dystopia", "mask", "revolution", "graphic novel"],
         articles=["V for Vendetta (film)"]),
    dict(title="The Illusionist", year=2006, director="Neil Burger",
         genres=["Drama", "Mystery", "Romance", "Thriller"], runtime=110, rating="PG-13",
         description="A stage magician in turn-of-the-century Vienna uses his illusions to win back his childhood love and outwit a ruthless crown prince.",
         vector=vec(adrenaline=3, brainy=7, scary=1, funny=1, heartwarming=5, dark=5, romantic=8, epic=4, cozy=4, weird=5),
         keywords=["magic", "vienna", "love", "twist"],
         articles=["The Illusionist (2006 film)"]),
    dict(title="Joker", year=2019, director="Todd Phillips",
         genres=["Crime", "Drama", "Thriller", "Psychological Thriller"], runtime=122, rating="R",
         description="Arthur Fleck, a struggling party clown in a fractured Gotham, unravels under cruelty and neglect until his breakdown ignites the city — and a legend.",
         vector=vec(adrenaline=5, brainy=7, scary=4, funny=2, heartwarming=1, dark=10, romantic=0, epic=5, cozy=0, weird=6),
         keywords=["gotham", "origin", "madness", "character study"],
         articles=["Joker (2019 film)"]),
    dict(title="I Am Legend", year=2007, director="Francis Lawrence",
         genres=["Sci-Fi", "Horror", "Thriller", "Drama", "Horror Thriller"], runtime=101, rating="PG-13",
         description="Years after a virus wipes out humanity, virologist Robert Neville scavenges an empty New York with his dog, hunting for a cure — and hiding from what hunts him at night.",
         vector=vec(adrenaline=7, brainy=6, scary=7, funny=1, heartwarming=4, dark=7, romantic=0, epic=6, cozy=1, weird=3),
         keywords=["post-apocalyptic", "alone", "virus", "dog"],
         articles=["I Am Legend (film)"]),
    dict(title="Terrifier", year=2016, director="Damien Leone",
         genres=["Horror"], runtime=86, rating="NR",
         description="On Halloween night, a silent maniac in a clown costume stalks two friends through a rundown building in a relentless low-budget gorefest.",
         vector=vec(adrenaline=6, brainy=2, scary=9, funny=2, heartwarming=0, dark=9, romantic=0, epic=1, cozy=0, weird=6),
         keywords=["art the clown", "halloween", "slasher", "gore"],
         articles=["Terrifier (film)", "Terrifier"]),
    dict(title="The Karate Kid", year=1984, director="John G. Avildsen",
         genres=["Action", "Drama", "Family", "Family Drama"], runtime=126, rating="PG",
         description="New kid Daniel LaRusso, bullied by karate students, learns the art — and life — from handyman Mr. Miyagi: wax on, wax off, then the tournament.",
         vector=vec(adrenaline=6, brainy=4, scary=0, funny=4, heartwarming=8, dark=2, romantic=4, epic=4, cozy=7, weird=1),
         keywords=["miyagi", "tournament", "underdog", "80s classic"],
         articles=["The Karate Kid"]),
    dict(title="Sinbad: Legend of the Seven Seas", year=2003, director="Patrick Gilmore, Tim Johnson",
         genres=["Animation", "Adventure", "Fantasy", "Family", "Animated"], runtime=86, rating="PG",
         description="Framed for stealing the Book of Peace, sailor Sinbad must sail to the edge of the world to steal it back from Eris, goddess of chaos.",
         vector=vec(adrenaline=7, brainy=3, scary=2, funny=6, heartwarming=5, dark=2, romantic=4, epic=7, cozy=4, weird=4),
         keywords=["dreamworks", "sea adventure", "goddess", "heist"],
         articles=["Sinbad: Legend of the Seven Seas"]),
    dict(title="TMNT", year=2007, director="Kevin Munroe",
         genres=["Animation", "Action", "Adventure", "Family", "Animated", "Superhero"], runtime=87, rating="PG",
         description="The Ninja Turtles have drifted apart, but ancient monsters loose in New York force Leonardo, Raphael, Michelangelo and Donatello back together.",
         vector=vec(adrenaline=8, brainy=3, scary=2, funny=6, heartwarming=6, dark=3, romantic=1, epic=6, cozy=4, weird=4),
         keywords=["ninja turtles", "brothers", "monsters", "cgi"],
         articles=["TMNT (film)"]),
    dict(title="Batman: The Killing Joke", year=2016, director="Sam Liu",
         genres=["Animation", "Action", "Crime", "Superhero", "Animated"], runtime=76, rating="R",
         description="Batman hunts the escaped Joker, whose origin unfolds in flashback — one bad day is all it takes to drive a man insane, in this adaptation of the Alan Moore classic.",
         vector=vec(adrenaline=6, brainy=6, scary=5, funny=2, heartwarming=1, dark=9, romantic=0, epic=4, cozy=0, weird=6),
         keywords=["joker origin", "alan moore", "batgirl", "dark"],
         articles=["Batman: The Killing Joke (film)"]),
    dict(title="Robin Hood", year=1973, director="Wolfgang Reitherman",
         genres=["Animation", "Family", "Adventure", "Comedy", "Animated"], runtime=83, rating="G",
         description="Disney's animal Robin Hood — a charming fox — robs from the rich, gives to the poor, and outwits Prince John and the Sheriff of Nottingham.",
         vector=vec(adrenaline=5, brainy=3, scary=1, funny=7, heartwarming=7, dark=1, romantic=5, epic=4, cozy=8, weird=4),
         keywords=["disney", "fox", "classic", "songs"],
         articles=["Robin Hood (1973 film)"]),
    dict(title="Turbo", year=2013, director="David Soren",
         genres=["Animation", "Family", "Comedy", "Animated"], runtime=96, rating="PG",
         description="A garden snail who dreams of speed gains super-speed powers and sets his sights on racing in the Indianapolis 500.",
         vector=vec(adrenaline=7, brainy=2, scary=0, funny=7, heartwarming=7, dark=0, romantic=1, epic=5, cozy=6, weird=5),
         keywords=["dreamworks", "snail", "racing", "underdog"],
         articles=["Turbo (2013 film)"]),
    dict(title="Storks", year=2016, director="Nicholas Stoller, Doug Sweetland",
         genres=["Animation", "Family", "Comedy", "Animated"], runtime=87, rating="PG",
         description="Storks deliver packages now, not babies — until one accidental baby forces a delivery run with the factory's only human employee.",
         vector=vec(adrenaline=6, brainy=3, scary=0, funny=8, heartwarming=8, dark=0, romantic=2, epic=4, cozy=7, weird=6),
         keywords=["babies", "delivery", "wolves", "funny"],
         articles=["Storks (film)"]),
    dict(title="Die Welle", year=2008, director="Dennis Gansel",
         genres=["Drama", "Thriller"], runtime=107, rating="",
         description="A German teacher's classroom experiment — give students a taste of autocracy for one week — spirals into a real movement neither he nor they can control. (English title: The Wave.)",
         vector=vec(adrenaline=5, brainy=8, scary=4, funny=1, heartwarming=2, dark=8, romantic=1, epic=3, cozy=1, weird=3),
         keywords=["the wave", "experiment", "classroom", "german", "based on true events"],
         articles=["The Wave (2008 film)", "Die Welle"]),
    dict(title="The Village", year=2004, director="M. Night Shyamalan",
         genres=["Thriller", "Mystery", "Drama", "Psychological Thriller"], runtime=108, rating="PG-13",
         description="An isolated 19th-century village lives in fear of the creatures in the surrounding woods — until a blind girl must cross the forest to save the man she loves.",
         vector=vec(adrenaline=4, brainy=7, scary=6, funny=0, heartwarming=5, dark=6, romantic=6, epic=3, cozy=3, weird=6),
         keywords=["shyamalan", "isolated", "twist", "woods"],
         articles=["The Village (2004 film)"]),
    dict(title="I Am Number Four", year=2011, director="D.J. Caruso",
         genres=["Sci-Fi", "Action", "Adventure"], runtime=109, rating="PG-13",
         description="A teenage alien hiding on Earth as 'John Smith' is hunted by the Mogadorians who destroyed his planet — he's number four, and the first three are dead.",
         vector=vec(adrenaline=8, brainy=4, scary=3, funny=3, heartwarming=4, dark=4, romantic=5, epic=6, cozy=2, weird=4),
         keywords=["alien", "teen", "powers", "hunted"],
         articles=["I Am Number Four (film)"]),
    dict(title="Little Boy", year=2015, director="Alejandro Monteverde",
         genres=["Drama", "Family", "Family Drama"], runtime=106, rating="PG-13",
         description="In 1940s California, a small eight-year-old boy, mocked for his size, refuses to give up faith that his father will come home from the war.",
         vector=vec(adrenaline=3, brainy=4, scary=1, funny=4, heartwarming=10, dark=3, romantic=1, epic=4, cozy=7, weird=2),
         keywords=["faith", "father", "wwii", "hopeful"],
         articles=["Little Boy (film)"]),
    dict(title="Presto", year=2008, director="Doug Sweetland",
         genres=["Animation", "Comedy", "Family", "Animated"], runtime=5, rating="G",
         description="Pixar short: a magician's hungry rabbit, denied his carrot, hijacks the hat act and turns the show into slapstick revenge.",
         vector=vec(adrenaline=5, brainy=3, scary=0, funny=9, heartwarming=5, dark=0, romantic=0, epic=1, cozy=7, weird=6),
         keywords=["pixar short", "rabbit", "magician", "slapstick"],
         articles=["Presto (film)"]),
    dict(title="Hercules", year=1997, director="Ron Clements, John Musker",
         genres=["Animation", "Family", "Fantasy", "Comedy", "Animated", "Musical"], runtime=93, rating="G",
         description="Disney's Hercules, a stolen godling raised mortal, trains with the satyr Phil to become a true hero and reclaim his place on Mount Olympus — with gospel Muses narrating.",
         vector=vec(adrenaline=7, brainy=3, scary=2, funny=7, heartwarming=7, dark=2, romantic=5, epic=7, cozy=5, weird=4),
         keywords=["disney", "greek myth", "hades", "muses"],
         articles=["Hercules (1997 film)"]),
    dict(title="Planet of the Apes", year=1968, director="Franklin J. Schaffner",
         genres=["Sci-Fi", "Adventure"], runtime=112, rating="G",
         description="Astronauts crash on a planet ruled by intelligent apes who hunt and enslave mute humans — Charlton Heston stars in the sci-fi classic with the legendary final twist.",
         vector=vec(adrenaline=6, brainy=8, scary=4, funny=1, heartwarming=2, dark=6, romantic=1, epic=8, cozy=1, weird=7),
         keywords=["classic", "twist ending", "apes", "charlton heston"],
         articles=["Planet of the Apes (1968 film)"]),
    dict(title="X-Men Origins: Wolverine", year=2009, director="Gavin Hood",
         genres=["Action", "Sci-Fi", "Superhero"], runtime=107, rating="PG-13",
         description="Logan's past catches up with him: the Weapon X program, his brother Sabretooth, and the experiment that bonded adamantium to his bones.",
         vector=vec(adrenaline=9, brainy=4, scary=2, funny=3, heartwarming=3, dark=6, romantic=3, epic=7, cozy=1, weird=3),
         keywords=["wolverine", "origin", "weapon x", "x-men"],
         articles=["X-Men Origins: Wolverine"]),
]

# The full resolved list from Owen's doc (concrete films). The test in
# tests/engine.test.js carries the same list.
OWEN_LIST = [
    ("Inception", 2010), ("Tenet", 2020), ("Batman Begins", 2005),
    ("The Dark Knight", 2008), ("The Dark Knight Rises", 2012),
    ("The Lord of the Rings: The Fellowship of the Ring", 2001),
    ("The Lord of the Rings: The Two Towers", 2002),
    ("The Lord of the Rings: The Return of the King", 2003),
    ("The Matrix", 1999), ("John Wick", 2014), ("John Wick: Chapter 2", 2017),
    ("John Wick: Chapter 3 - Parabellum", 2019), ("John Wick: Chapter 4", 2023),
    ("V for Vendetta", 2005), ("Extraction", 2020),
    ("Pirates of the Caribbean: The Curse of the Black Pearl", 2003),
    ("Pirates of the Caribbean: Dead Man's Chest", 2006),
    ("Pirates of the Caribbean: At World's End", 2007),
    ("Talk to Me", 2022), ("Insidious", 2010), ("Hereditary", 2018),
    ("The Conjuring", 2013), ("The Taking of Deborah Logan", 2014),
    ("Interstellar", 2014), ("Memento", 2000), ("The Illusionist", 2006),
    ("Joker", 2019), ("Iron Man", 2008), ("Spider-Man", 2002),
    ("Spider-Man 2", 2004), ("Spider-Man 3", 2007),
    ("The Wolf of Wall Street", 2013), ("Shutter Island", 2010),
    ("Prisoners", 2013), ("Rise of the Planet of the Apes", 2011),
    ("Planet of the Apes", 1968), ("The Wolverine", 2013), ("Logan", 2017),
    ("X-Men Origins: Wolverine", 2009), ("I Am Legend", 2007),
    ("Arrival", 2016), ("Annihilation", 2018), ("Terrifier", 2016),
    ("The Hangover", 2009), ("Hercules", 1997),
    ("Spider-Man: Into the Spider-Verse", 2018), ("WALL-E", 2008),
    ("The Lion King", 1994), ("The Incredibles", 2004),
    ("The Lego Movie", 2014), ("Beauty and the Beast", 1991),
    ("Shrek", 2001), ("Ice Age", 2002), ("The Karate Kid", 1984),
    ("How to Train Your Dragon", 2010), ("Ratatouille", 2007),
    ("The Prince of Egypt", 1998), ("Monsters, Inc.", 2001),
    ("Megamind", 2010), ("Sinbad: Legend of the Seven Seas", 2003),
    ("Aladdin", 1992), ("Tarzan", 1999),
    ("Cloudy with a Chance of Meatballs", 2009), ("Tangled", 2010),
    ("The Princess and the Frog", 2009), ("TMNT", 2007),
    ("Batman: The Killing Joke", 2016), ("The Lego Batman Movie", 2017),
    ("Brother Bear", 2003), ("Brave", 2012), ("Peter Pan", 1953),
    ("Kung Fu Panda", 2008), ("Robin Hood", 1973), ("Turbo", 2013),
    ("The Road to El Dorado", 2000), ("Joseph: King of Dreams", 2000),
    ("Madagascar", 2005), ("Storks", 2016), ("Dunkirk", 2017),
    ("The Prestige", 2006), ("The Silence of the Lambs", 1991),
    ("Back to the Future", 1985), ("The Princess Bride", 1987),
    ("Die Welle", 2008), ("The Village", 2004), ("Scary Movie", 2000),
    ("Final Destination", 2000), ("I Am Number Four", 2011),
    ("The Hobbit: An Unexpected Journey", 2012), ("Deadpool", 2016),
    ("The Hunger Games", 2012), ("The Maze Runner", 2014), ("Cars", 2006),
    ("Happy Death Day", 2017), ("Little Boy", 2015), ("I, Robot", 2004),
    ("Epic", 2013), ("Presto", 2008), ("Cinderella", 1950),
    ("The Purge", 2013),
]


def find(movies, title, year):
    key = norm_title(title)
    for m in movies:
        if norm_title(m["title"]) == key and abs(m["year"] - year) <= 1:
            return m
    return None


def main():
    # current (post-build) dataset, read back from the emitted JS via node dump
    cur = json.load(open(f"{V4}/final_pre_merge.json"))
    v3 = json.load(open(f"{BUILD}/movies_v3.json"))
    top20 = json.load(open(f"{BUILD}/top20.json"))
    top20_ids = {t["id"] for t in top20}
    movies = cur
    used_ids = {m["id"] for m in movies}
    stats = json.load(open(f"{V4}/stats.json")) if os.path.exists(f"{V4}/stats.json") else {}

    # 1. re-add list titles the build dropped (from v3, unchanged)
    readded = []
    for title, year in OWEN_LIST:
        if find(movies, title, year):
            continue
        m3 = find(v3, title, year)
        if m3 and m3["id"] not in used_ids:
            movies.append(m3)
            used_ids.add(m3["id"])
            readded.append(m3["title"])
    print(f"re-added from v3: {len(readded)} {readded}", flush=True)

    # 2. add the hand-written core gaps (with verified posters)
    summaries = L.fetch_summaries(
        [a for e in NEW_CORE for a in e["articles"]])
    L.fetch_wikitext([a for e in NEW_CORE for a in e["articles"]])
    added = []
    for e in NEW_CORE:
        if find(movies, e["title"], e["year"]):
            continue
        poster = ""
        for art in e["articles"]:
            info = summaries.get(art)
            if not info or info.get("dead"):
                continue
            poster = L.poster_for_article(art, info.get("poster", ""))
            if poster:
                break
        from build_entries import slugify
        mid = slugify(e["title"])
        if mid in used_ids:
            mid = f"{mid}-{e['year']}"
        used_ids.add(mid)
        movies.append({
            "id": mid, "title": e["title"], "year": e["year"],
            "director": e["director"], "genres": e["genres"],
            "runtime": e["runtime"], "rating": e["rating"],
            "description": e["description"], "vector": e["vector"],
            "keywords": e["keywords"], "poster": poster, "tier": "core",
        })
        added.append((e["title"], bool(poster)))
    print(f"core gaps added: {len(added)} "
          f"(posters: {sum(1 for _, p in added if p)}/{len(added)})", flush=True)
    for t, p in added:
        if not p:
            print(f"  NO POSTER (protected anyway): {t}", flush=True)

    # 3. protection set + coverage repair
    protected_ids = set(top20_ids)
    for title, year in OWEN_LIST:
        m = find(movies, title, year)
        if m:
            protected_ids.add(m["id"])
    missing = [(t, y) for t, y in OWEN_LIST if not find(movies, t, y)]
    print(f"Owen list resolved: {len(OWEN_LIST) - len(missing)}/{len(OWEN_LIST)}; "
          f"missing: {missing}", flush=True)

    def coverage():
        return sum(1 for m in movies if m["poster"]) / max(1, len(movies))

    print(f"coverage before repair: {coverage():.4f}", flush=True)
    if coverage() < 0.903:
        counts = Counter()
        for m in movies:
            for g in m["genres"]:
                counts[g] += 1
        total_posters = sum(1 for m in movies if m["poster"])
        total = len(movies)
        cands = [m for m in movies if m["tier"] == "catalog" and not m["poster"]
                 and m["id"] not in protected_ids]
        cands.sort(key=lambda m: (
            0 if m["director"] and m["director"] != "Unknown" else 1,
            0 if m["runtime"] else 1,
            min(counts[g] for g in m["genres"]),
            -m["year"],
        ), reverse=True)
        drop = set()
        for m in cands:
            if total_posters / max(1, total) >= 0.903:
                break
            if any(counts[g] <= 205 for g in m["genres"]):
                continue
            drop.add(m["id"])
            for g in m["genres"]:
                counts[g] -= 1
            total -= 1
        movies = [m for m in movies if m["id"] not in drop]
        print(f"coverage repair pruned {len(drop)}; coverage {coverage():.4f}",
              flush=True)

    # 4. emit final movies.js + stats
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

    def dump(o):
        return json.dumps(o, indent=1, ensure_ascii=False)

    out = header
    out += "const MOVIE_AXES = " + json.dumps(AXES) + ";\n"
    out += "const MOVIES = [\n" + ",\n".join(dump(m) for m in movies) + "\n];\n"
    out += "const TOP20 = [\n" + ",\n".join(dump(t) for t in top20) + "\n];\n"
    out += "if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }\n"
    with open(f"{ROOT}/js/movies.js", "w") as fh:
        fh.write(out)

    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    stats.update({
        "final_total": len(movies),
        "poster_pct": round(100 * coverage(), 1),
        "genre_counts": dict(counts.most_common()),
        "modern_pct": round(100 * sum(1 for m in movies if m["year"] >= 2000) / len(movies), 1),
        "movies_js_bytes": len(out.encode("utf-8")),
        "owen_list_added_core": len(added),
        "owen_list_readded": len(readded),
        "owen_list_missing": missing,
    })
    L.save_json(f"{V4}/stats.json", stats)
    print(json.dumps({k: stats[k] for k in
                      ("final_total", "poster_pct", "modern_pct", "movies_js_bytes")},
                     indent=1), flush=True)


if __name__ == "__main__":
    main()
