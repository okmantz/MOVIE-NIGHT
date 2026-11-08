#!/usr/bin/env python3
"""Append high-quality series to js/shows.js from TVmaze (free public API, no key).

  python3 tools/v11_add_shows.py --count 1000            # fetch + merge into js/shows.js
  python3 tools/v11_add_shows.py --count 1000 --dry-run  # report only
  python3 tools/v11_add_shows.py --base http://localhost:8000   # test against a mock

Run this on a machine with normal internet access (the build sandbox could not reach
TVmaze).  The fetch is resumable: pages are cached in tools/.tvmaze_cache/.
Quality gates: scripted/animation/documentary/reality shows only if rating >= 7.0 (7.4 for
others), >= 2 seasons or a strong rating, a real summary (>= 80 chars), a poster, English
language, US/UK/CA/AU origin, not already in the catalog.  TVmaze 'weight' (popularity)
is used as the appeal prior, mapped to the same 0-100 `ap` scale as existing entries.
"""
import argparse, json, os, re, sys, time, html
import urllib.request
sys.path.insert(0, os.path.dirname(__file__))
import catalog_lib as L

CACHE = os.path.join(os.path.dirname(__file__), ".tvmaze_cache")
SHOWS_JS = os.path.join(os.path.dirname(__file__), "..", "js", "shows.js")
GENRE_MAP = {"Science-Fiction": "Sci-Fi", "Supernatural": "Fantasy", "Children": "Family",
             "Adult": "Drama", "Medical": "Drama", "Legal": "Drama", "Food": "Reality",
             "Travel": "Documentary", "Nature": "Documentary", "Sports": "Drama",
             "Music": "Musical", "History": "Historical Drama", "DIY": "Reality",
             "Espionage": "Espionage", "Anime": "Anime", "Western": "Western", "War": "War"}
OK_COUNTRIES = {"US", "GB", "CA", "AU", "IE", "NZ"}
RATING_BY_GENRE = [("Horror", "TV-MA"), ("Crime", "TV-14"), ("Family", "TV-PG"), ("Animation", "TV-PG")]


def get(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "movie-night-catalog-builder"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode("utf8"))
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(2 + i * 3)
        except Exception:
            time.sleep(2 + i * 3)
    return None


def page(base, n):
    os.makedirs(CACHE, exist_ok=True)
    fp = os.path.join(CACHE, "p%04d.json" % n)
    if os.path.exists(fp):
        return json.load(open(fp))
    data = get("%s/shows?page=%d" % (base, n))
    if data is None:
        return None
    json.dump(data, open(fp, "w"))
    time.sleep(0.6)   # stay under 20 req / 10 s
    return data


def strip(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def accept(s):
    if not s.get("image") or not (s["image"].get("original") or s["image"].get("medium")):
        return False
    if (s.get("language") or "") != "English":
        return False
    c = ((s.get("network") or s.get("webChannel") or {}).get("country") or {}).get("code")
    if c and c not in OK_COUNTRIES:
        return False
    if len(strip(s.get("summary"))) < 80 or not s.get("premiered"):
        return False
    r = (s.get("rating") or {}).get("average")
    g = set(s.get("genres") or [])
    if r is None:
        return False
    if g & {"Reality", "Talk-Show", "Game-Show"} and not (g & {"Documentary"}):
        return False   # reality / talk / game shows are noise for a taste quiz
    if s.get("type") in ("Variety", "News", "Talk Show", "Panel Show", "Sports", "Award Show"):
        return False
    need = 7.0 if g & {"Animation", "Documentary", "Comedy"} else 7.4
    return r >= need


def ap_of(s):
    w = s.get("weight") or 0          # TVmaze popularity 0-100
    r = (s.get("rating") or {}).get("average") or 6
    return int(max(30, min(84, round(0.55 * w + (r - 5) * 8 + 8))))


def build(s, seasons):
    title = s["name"].strip()
    genres = L.normalize_genres([GENRE_MAP.get(g, g) for g in (s.get("genres") or [])]) or ["Drama"]
    desc = L.clip_sentences(strip(s["summary"]), 380)
    net = (s.get("network") or s.get("webChannel") or {}).get("name")
    sy = int(s["premiered"][:4])
    ey = int(s["ended"][:4]) if s.get("ended") else None
    rating = next((rt for g, rt in RATING_BY_GENRE if g in genres), "TV-14")
    seed = "tv" + title
    entry = {
        "id": "tv-" + L.slugify(title) + ("-%d" % sy if False else ""),
        "title": title, "startYear": sy, "endYear": ey, "creator": None, "genres": genres,
        "seasons": seasons, "episodes": None,
        "status": "Ended" if s.get("status") == "Ended" else "Running",
        "network": net, "rating": rating, "description": desc, "tier": "catalog",
        "vector": L.make_vector(genres, seed, desc, rating),
        "keywords": L.make_keywords(genres, sy, desc),
        "poster": (s["image"].get("original") or s["image"]["medium"]).replace("http://", "https://"),
        "ap": ap_of(s),
    }
    if L.family_friendly(genres, rating, desc):
        entry["kf"] = True
    return entry


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=1000)
    ap.add_argument("--base", default="https://api.tvmaze.com")
    ap.add_argument("--max-pages", type=int, default=400)
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    shows = L.load_js_array(SHOWS_JS, "SHOWS")
    have = {L.norm_key(x["title"]) for x in shows}
    ids = {x["id"] for x in shows}
    cands = []
    for n in range(a.max_pages):
        data = page(a.base, n)
        if not data:
            break
        for s in data:
            if L.norm_key(s["name"]) in have or not accept(s):
                continue
            cands.append(s)
        print("page", n, "candidates", len(cands), file=sys.stderr)
    cands.sort(key=lambda s: -ap_of(s))
    out = []
    for s in cands:
        if len(out) >= a.count:
            break
        k = L.norm_key(s["name"])
        if k in have:
            continue
        seasons = None
        sl = get("%s/shows/%d/seasons" % (a.base, s["id"])) if not a.dry_run else None
        if sl:
            seasons = max(1, min(80, len([x for x in sl if x.get("number")])))
            if seasons < 2 and (s.get("rating") or {}).get("average", 0) < 8.0 and s.get("type") != "Miniseries":
                continue
        e = build(s, seasons)
        if e["id"] in ids:
            e["id"] += "-%d" % e["startYear"]
        if e["id"] in ids:
            continue
        ids.add(e["id"]); have.add(k); out.append(e)
        time.sleep(0.5)
    print("accepted", len(out), "of requested", a.count, file=sys.stderr)
    if a.dry_run:
        for e in out[:25]:
            print(e["title"], e["startYear"], e["ap"])
        return
    shows = shows + out
    src = open(SHOWS_JS, encoding="utf8").read()
    st = src.index("const SHOWS = [") + len("const SHOWS = ")
    en = src.index("\n];", st) + 3
    open(SHOWS_JS, "w", encoding="utf8").write(src[:st] + L.dump_js_array(shows) + src[en - 1:])
    print("shows.js now has", len(shows), file=sys.stderr)


if __name__ == "__main__":
    main()
