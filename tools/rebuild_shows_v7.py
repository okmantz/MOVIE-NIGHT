#!/usr/bin/env python3
"""Rebuild js/shows.js (v7).  Run with --src = the ORIGINAL v6 shows.js.

  python3 tools/rebuild_shows_v7.py --src /path/to/v6_shows.js --out js/shows.js

Inputs: v6 shows.js (Wikipedia-derived descriptions/posters/vectors) +
tools/shows_v7_curated.txt (hand-curated American-audience series with
repaired years/networks).  Rules:
  * curated rows without a description must match an existing v6 show,
    otherwise they are dropped (so placeholder rows never ship);
  * v6 'catalog' shows survive only if they pass the blocklist, have a
    usable start year, and are not detected as foreign productions.
"""
import argparse, json, re, sys, os
sys.path.insert(0, os.path.dirname(__file__))
import catalog_lib as L

BLOCK = {n.lower() for n in """Bill Hader|Bill Nye|Charles Manson|David Letterman|Demi Lovato|Madonna|
Melania Trump|Prince Harry|Snoop Dogg|Seth MacFarlane|Eli Roth|James Cameron|Martin Scorsese|
John Wayne Gacy|Richard Ramirez|Lyle and Erik Menendez|Gilgo Beach serial killings|Comedy Central|
Clash of Clans|Thanksgiving (United States)|2026 FIFA World Cup|Miami Vice (film)|Crazy Rich Asians|
Crouching Tiger, Hidden Dragon|Final Fantasy: The Spirits Within|Netflix Animation Studios|
Orlando Bloom|JoJo Siwa|Nick Cannon|George Takei|Jenni Rivera|Gaga: Five Foot Two|
Homecoming: A Film by Beyoncé|Bo Burnham: Inside|Sticks & Stones|Read or Die|100 Greatest""".replace("\n", "").split("|")}
FOREIGN_RX = re.compile(r"\b(tokusatsu|anime|manga|telenovela|k-drama|j-drama|bollywood|"
                        r"Hindi|Tamil|Telugu|Malayalam|Kannada|Bengali|Turkish|Pakistani|"
                        r"Philippine|Thai|Indonesian|Korean|Japanese|Chinese|Mexican|Brazilian|"
                        r"Spanish|German|French|Italian|Swedish|Norwegian|Danish|Finnish|Dutch)\b", re.I)
KEEP_FOREIGN = {"Money Heist", "Squid Game", "Dark", "Lupin", "Alice in Borderland",
                "Attack on Titan", "One Piece", "Narcos", "Narcos: Mexico", "Kaos", "Tehran",
                "Pachinko", "Top Boy", "Gangs of London"}


TITLE_FIX = {"12 Monkeys Series": "12 Monkeys", "Goliath Series": "Goliath",
             "Goosebumps Series": "Goosebumps", "Mr. & Mrs. Smith Series": "Mr. & Mrs. Smith",
             "Dark Shadows Original": "Dark Shadows", "Knight Rider Original": "Knight Rider",
             "MacGyver Original": "MacGyver", "Quantum Leap Original": "Quantum Leap",
             "Hanna Series": "Hanna", "Magnum, P.I.": "Magnum, P.I.",
             "Star Trek: The Original Series": "Star Trek"}


def parse_curated(path):
    rows = []
    for ln in open(path, encoding="utf8"):
        ln = ln.rstrip("\n")
        if not ln.strip() or ln.startswith("#"):
            continue
        p = ln.split("|")
        if len(p) < 5:
            continue
        p += [""] * (6 - len(p))
        t, sy, ey, net, gen, desc = [x.strip() for x in p[:6]]
        try:
            sy = int(sy)
        except ValueError:
            continue
        rows.append(dict(title=t, start=sy, end=int(ey) if ey else None, net=net or None,
                         genres=[g.strip() for g in gen.split(",") if g.strip()], desc=desc))
    return rows


def year_from_desc(d):
    m = re.search(r"premiered[^.]*?\b(19[5-9]\d|20[0-2]\d)\b", d or "") or \
        re.search(r"\b(?:from|since|in) (19[5-9]\d|20[0-2]\d)\b", (d or "")[:200])
    return int(m.group(1)) if m else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="ORIGINAL v6 shows.js (never this script's output)")
    ap.add_argument("--curated", default=os.path.join(os.path.dirname(__file__), "shows_v7_curated.txt"))
    ap.add_argument("--out", default="js/shows.js")
    a = ap.parse_args()

    old = L.load_js_array(a.src, "SHOWS")
    top = L.load_js_array(a.src, "TOP_SERIES")
    by_key = {}
    for s in sorted(old, key=lambda x: x["tier"] == "core"):  # core wins key collisions
        by_key[L.norm_key(s["title"])] = s
    out, seen = [], set()

    def finish(base, title, sy, ey, net, genres, desc, tier, appeal, creator=None):
        if len(desc) < 70:  # hand-written one-liners get context so cards never look empty
            yrs = "%d–%s" % (sy, ey) if ey and ey != sy else ("%d" % sy if ey else "%d–present" % sy)
            desc = desc.rstrip(".") + (" — %s (%s)." % ("on " + net, yrs) if net else " (%s)." % yrs)
        kids = "Kids" in genres
        adult = "Adult" in genres
        g = L.normalize_genres([x for x in genres if x not in ("Kids", "Adult")]) or ["Drama"]
        rating = base.get("rating") if base else None
        if not rating:
            rating = "TV-Y7" if kids else ("TV-MA" if adult else None)
        sid = base["id"] if base else "tv-" + L.slugify(title) + ("-%d" % sy if sy else "")
        e = {"id": sid, "title": title, "startYear": sy, "endYear": ey,
             "creator": (base or {}).get("creator") or creator, "genres": g,
             "seasons": (base or {}).get("seasons"), "episodes": (base or {}).get("episodes"),
             "status": "Ended" if ey else "Running", "network": net, "rating": rating,
             "description": desc, "tier": tier}
        if base and tier == "core":
            e["vector"], e["keywords"] = base["vector"], base["keywords"]
        else:
            e["vector"] = L.make_vector(g, sid, desc, rating or "")
            e["keywords"] = L.make_keywords(g, sy, desc, extra=("kids",) if kids else ())
        e["poster"] = (base or {}).get("poster") or ""
        e["ap"] = appeal
        if kids or L.family_friendly(g, rating or "", desc):
            if not adult and (kids or rating in (None, "TV-G", "TV-PG", "TV-Y", "TV-Y7")):
                e["kf"] = 1
        return e

    # 1) curated rows
    for r in parse_curated(a.curated):
        r["title"] = TITLE_FIX.get(r["title"], r["title"])
        k = L.norm_key(r["title"])
        if k in seen or r["title"].lower() in BLOCK:
            continue
        base = by_key.get(k)
        desc = r["desc"] or (base or {}).get("description") or ""
        if not desc:
            continue  # placeholder row with nothing behind it
        tier = base["tier"] if base else "catalog"
        appeal = 88 if tier == "core" else (66 if base else 58)
        seen.add(k)
        out.append(finish(base, r["title"], r["start"], r["end"], r["net"], r["genres"], desc, tier, appeal))

    # 2) surviving v6 shows
    dropped = 0
    for s in old:
        k = L.norm_key(s["title"])
        if k in seen:
            continue
        if s["title"].lower() in BLOCK or s["title"] in KEEP_FOREIGN and False:
            dropped += 1; continue
        if s["tier"] != "core":
            sy = s.get("startYear") or year_from_desc(s["description"])
            if not sy or sy < 1980:
                dropped += 1; continue
            if L.detect_origin(s["description"]) in ("OTHER", "UKI") or \
               (FOREIGN_RX.search(s["description"][:200]) and s["title"] not in KEEP_FOREIGN
                and not re.search(r"\bAmerican\b", s["description"][:200])):
                dropped += 1; continue
            if not s.get("poster") and len(s["description"]) < 120:
                dropped += 1; continue
            if not any(g in L.KNOWN_GENRES or g == "Reality" for g in s["genres"]):
                dropped += 1; continue
            base = dict(s); base["startYear"] = sy
            seen.add(k)
            out.append(finish(s, s["title"], sy, s.get("endYear"), s.get("network"),
                              s["genres"], s["description"], "catalog", 42))
        else:
            seen.add(k)
            out.append(finish(s, s["title"], s["startYear"], s["endYear"], s["network"],
                              s["genres"], s["description"], "core", 88))

    ids = {}
    for e in out:  # unique ids
        if e["id"] in ids:
            e["id"] += "-%d" % (e["startYear"] or 0)
        ids[e["id"]] = 1
    out.sort(key=lambda e: (-e["ap"], e["title"]))
    top = [t for t in top if t["id"] in ids]
    hdr = ("/* Movie Night — TV dataset (v7). ~%d American-audience series on the same ten taste axes as the\n"
           "   movie catalog. 'core' = hand-picked with hand-set vectors; 'catalog' vectors are estimates from\n"
           "   genre baselines + description themes. Descriptions adapted from Wikipedia lead text (CC BY-SA).\n"
           "   Years/networks are the ORIGINAL run (curated in tools/shows_v7_curated.txt). 'ap' = internal\n"
           "   appeal score used for ranking; 'kf' = family friendly. Empty poster => generated cover.\n"
           "   Rebuild: python3 tools/rebuild_shows_v7.py --src <v6 shows.js> */\n") % len(out)
    with open(a.out, "w", encoding="utf8") as f:
        f.write(hdr)
        f.write('const SHOW_AXES = %s;\n' % json.dumps(L.AXES))
        f.write("const SHOWS = " + L.dump_js_array(out) + ";\n")
        f.write("const TOP_SERIES = " + L.dump_js_array(top) + ";\n")
        f.write("if (typeof module !== 'undefined' && module.exports) { module.exports = { SHOWS, TOP_SERIES, SHOW_AXES }; }\n")
    print("shows:", len(out), "core:", sum(e["tier"] == "core" for e in out), "dropped:", dropped,
          "top:", len(top), "kf:", sum(1 for e in out if e.get("kf")))


if __name__ == "__main__":
    main()
