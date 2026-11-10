#!/usr/bin/env python3
"""Movie Night v12 — catalog expansion + ratings/streaming metadata from TMDB.

What it does
  1. --movies N / --shows N   Add N new high-quality titles (2000-2026, every genre,
     every major platform) found through TMDB's /discover endpoints. Every added title
     must have a poster AND a real description, so cover coverage for new titles is 100%.
     Output goes to js/movies-ext.js and js/shows-ext.js (lazy-loaded by the app, so the
     7+ MB base catalog is untouched and startup stays fast). Re-running is idempotent.
  2. --meta                   For the EXISTING catalog (and the new titles): look each title
     up on TMDB and write {tm, r, ii, pl} (+ a poster / description when ours is missing)
     to js/movies-meta.js and js/shows-meta.js. This is what puts a real rating, an IMDb id
     and "where to stream" on every card, and what backfills missing covers.
  3. --report                 Print coverage numbers (posters, descriptions, genres, years).

Needs a free TMDB key:  https://www.themoviedb.org/settings/api  ->  export TMDB_API_KEY=...
(or TMDB_READ_TOKEN for the v4 bearer token). Standard library only.

Quality ladder (never goes below the last rung; if the target cannot be met the script
says so instead of padding with weak titles):
  movies  avg >= 6.4/votes >= 500  ->  6.3/300  ->  6.2/200  ->  6.0/150
  shows   avg >= 7.0/votes >= 200  ->  6.8/120  ->  6.6/80
  non-English originals need 3x the votes (the catalog is for a US audience).

Usage
  python3 tools/v12_tmdb_import.py --movies 8000 --shows 3500 --meta
  python3 tools/v12_tmdb_import.py --report
"""
import argparse, json, math, os, re, sys, threading, time, urllib.parse, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor
from collections import defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import catalog_lib as L  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.environ.get("MOVIENIGHT_JS") or os.path.join(ROOT, "js")
YEARS = list(range(2000, 2027))
MOVIE_LADDER = [(6.4, 500), (6.3, 300), (6.2, 200), (6.0, 150)]
SHOW_LADDER = [(7.0, 200), (6.8, 120), (6.6, 80)]
# TMDB genre name -> catalog genre (None = ignore, "__DROP__" = reject the title)
TMDB_GENRE = {
    "Action": "Action", "Adventure": "Adventure", "Animation": "Animation", "Comedy": "Comedy",
    "Crime": "Crime", "Documentary": "Documentary", "Drama": "Drama", "Family": "Family",
    "Fantasy": "Fantasy", "History": "Drama", "Horror": "Horror", "Music": "Musical",
    "Mystery": "Mystery", "Romance": "Romance", "Science Fiction": "Sci-Fi", "Thriller": "Thriller",
    "TV Movie": "__DROP__", "War": "War", "Western": "Western",
    "Action & Adventure": "Action", "Kids": "Family", "Sci-Fi & Fantasy": "Sci-Fi", "War & Politics": "War",
    "Reality": "Reality", "News": "__DROP__", "Talk": "__DROP__", "Soap": "__DROP__",
}
PROVIDERS = {  # TMDB provider name -> short label used by the app's platform filter
    "Netflix": "Netflix", "Amazon Prime Video": "Prime Video", "Prime Video": "Prime Video", "Max": "Max", "HBO Max": "Max",
    "Disney Plus": "Disney+", "Disney+": "Disney+", "Hulu": "Hulu", "Apple TV Plus": "Apple TV+", "Apple TV+": "Apple TV+", "Apple TV": "Apple TV+",
    "Peacock": "Peacock", "Peacock Premium": "Peacock", "Paramount Plus": "Paramount+", "Paramount+": "Paramount+",
    "Tubi TV": "Tubi", "Pluto TV": "Pluto TV", "Amazon Prime Video with Ads": "Prime Video", "Netflix Standard with Ads": "Netflix",
}


class Api:
    def __init__(self, base, key, token, image_base, qps=30):
        self.base, self.key, self.token, self.image_base = base.rstrip("/"), key, token, image_base.rstrip("/")
        self.min_gap, self.lock, self.last = 1.0 / qps, threading.Lock(), 0.0
        self.calls = 0

    def get(self, path, **params):
        if self.key:
            params["api_key"] = self.key
        url = "%s%s?%s" % (self.base, path, urllib.parse.urlencode(params))
        for attempt in range(6):
            with self.lock:
                wait = self.last + self.min_gap - time.time()
                if wait > 0:
                    time.sleep(wait)
                self.last = time.time()
                self.calls += 1
            req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "movie-night-importer/12"})
            if self.token:
                req.add_header("Authorization", "Bearer " + self.token)
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    return json.loads(r.read().decode("utf8"))
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    return None
                if e.code in (429, 500, 502, 503, 504):
                    time.sleep(min(30, 1.5 * 2 ** attempt))
                    continue
                if e.code in (401, 403):
                    sys.exit("TMDB rejected the key (HTTP %d). Check TMDB_API_KEY / TMDB_READ_TOKEN." % e.code)
                raise
            except (urllib.error.URLError, TimeoutError, ConnectionError):
                time.sleep(min(30, 1.5 * 2 ** attempt))
        return None


def read_ext(name, var):
    p = os.path.join(JS, name)
    if not os.path.exists(p):
        return []
    s = open(p, encoding="utf8").read()
    m = re.search(r"window\.%s\s*=\s*window\.%s\s*\|\|\s*(\[.*\]);?\s*$" % (var, var), s, re.S)
    return json.loads(m.group(1)) if m else []


def write_ext(name, var, label, items):
    body = "[\n" + ",\n".join(json.dumps(x, ensure_ascii=False, separators=(",", ":")) for x in items) + "\n]" if items else "[]"
    with open(os.path.join(JS, name), "w", encoding="utf8") as f:
        f.write("/* Movie Night catalog extension (%s). Generated by tools/v12_tmdb_import.py — do not edit by hand.\n"
                "   Loaded lazily after first paint so startup stays fast. Data: TMDB (not endorsed or certified by TMDB). */\n"
                "window.%s = window.%s || %s;\n" % (label, var, var, body))


def read_meta(name, var):
    p = os.path.join(JS, name)
    if not os.path.exists(p):
        return {}
    s = open(p, encoding="utf8").read()
    m = re.search(r"window\.%s\s*=\s*window\.%s\s*\|\|\s*(\{.*\});?\s*$" % (var, var), s, re.S)
    return json.loads(m.group(1)) if m else {}


def write_meta(name, var, label, meta):
    body = "{\n" + ",\n".join(json.dumps(k) + ":" + json.dumps(v, ensure_ascii=False, separators=(",", ":")) for k, v in sorted(meta.items())) + "\n}" if meta else "{}"
    with open(os.path.join(JS, name), "w", encoding="utf8") as f:
        f.write("/* Movie Night ratings/streaming metadata (%s): { id: { tm, r, ii, pl, poster?, description? } }.\n"
                "   Generated by tools/v12_tmdb_import.py. Data: TMDB + JustWatch (not endorsed or certified by TMDB). */\n"
                "window.%s = window.%s || %s;\n" % (label, var, var, body))


def tv_year_key(title, year):
    return L.norm_key(title) + "|" + str(year or "")


# --------------------------------------------------------------- helpers
def genres_of(tmdb_genres, keywords_text, is_tv):
    out = []
    for g in tmdb_genres or []:
        c = TMDB_GENRE.get(g.get("name"), g.get("name"))
        if c == "__DROP__":
            return None
        if c and c not in out:
            out.append(c)
    if re.search(r"superhero|marvel cinematic|dc extended|comic book", keywords_text, re.I) and "Superhero" not in out:
        out.insert(0, "Superhero")
    n = L.normalize_genres(out, limit=3)
    return n or None


def providers_of(det, region="US"):
    r = ((det.get("watch/providers") or {}).get("results") or {}).get(region) or {}
    out = []
    for kind in ("flatrate", "free", "ads"):
        for p in r.get(kind, []) or []:
            label = PROVIDERS.get(p.get("provider_name"))
            if label and label not in out:
                out.append(label)
    return out


def us_cert_movie(det):
    for c in (det.get("release_dates") or {}).get("results", []):
        if c.get("iso_3166_1") == "US":
            for r in c.get("release_dates", []):
                if r.get("certification"):
                    return r["certification"]
    return ""


def us_cert_tv(det):
    for c in (det.get("content_ratings") or {}).get("results", []):
        if c.get("iso_3166_1") == "US" and c.get("rating"):
            return c["rating"]
    return ""


def appeal(votes, avg, year):
    a = 30 + 22 * (math.log10(max(votes, 10)) - 2.7) + (avg - 6.5) * 5 + (6 if year >= 2010 else 3)
    return int(max(30, min(97, round(a))))


def kw_list(det):
    k = det.get("keywords") or {}
    names = [x["name"] for x in (k.get("keywords") or k.get("results") or [])]
    return names


def desc_of(overview):
    return L.clip_sentences(overview or "", 340)


def slug_unique(base, taken):
    s, i = base, 2
    while s in taken:
        s = "%s-%d" % (base, i)
        i += 1
    taken.add(s)
    return s


def build_movie(det, taken_ids, image_base):
    year = int((det.get("release_date") or "0000")[:4] or 0)
    kws = kw_list(det)
    g = genres_of(det.get("genres"), " ".join(kws), False)
    desc = desc_of(det.get("overview"))
    if not g or not det.get("poster_path") or len(desc) < 40 or year < 2000:
        return None
    if (det.get("runtime") or 0) and det["runtime"] < 60:
        return None
    cred = det.get("credits") or {}
    director = next((c["name"] for c in cred.get("crew", []) if c.get("job") == "Director"), "Unknown")
    cast = [c["name"] for c in cred.get("cast", [])[:4]]
    cert = us_cert_movie(det)
    text = desc + " " + " ".join(kws)
    vec = L.make_vector(g, "tm%s" % det["id"], text, cert)
    votes, avg = det.get("vote_count", 0), det.get("vote_average", 0)
    title = det.get("title") or det.get("original_title")
    rec = {
        "id": slug_unique(L.slugify(title), taken_ids), "title": title, "year": year, "director": director, "genres": g,
        "runtime": det.get("runtime") or 0, "rating": cert, "description": desc, "vector": vec,
        "keywords": L.make_keywords(g, year, text, kws[:3]), "poster": image_base + det["poster_path"], "tier": "catalog",
        "ap": appeal(votes, avg, year), "cast": cast, "tm": det["id"], "r": round(avg, 1),
    }
    if det.get("imdb_id"):
        rec["ii"] = det["imdb_id"]
    if L.family_friendly(g, cert, desc):
        rec["kf"] = 1
    pl = providers_of(det)
    if pl:
        rec["pl"] = pl
    return rec


def build_show(det, taken_ids, image_base):
    first = (det.get("first_air_date") or "0000")[:4]
    year = int(first or 0)
    kws = kw_list(det)
    g = genres_of(det.get("genres"), " ".join(kws), True)
    desc = desc_of(det.get("overview"))
    if not g or not det.get("poster_path") or len(desc) < 40 or year < 2000:
        return None
    last = (det.get("last_air_date") or "")[:4]
    ended = det.get("status") in ("Ended", "Canceled")
    cert = us_cert_tv(det)
    text = desc + " " + " ".join(kws)
    votes, avg = det.get("vote_count", 0), det.get("vote_average", 0)
    title = det.get("name") or det.get("original_name")
    nets = det.get("networks") or []
    rec = {
        "id": slug_unique("tv-" + L.slugify(title), taken_ids), "title": title, "startYear": year,
        "endYear": int(last) if ended and last else None,
        "creator": (det.get("created_by") or [{}])[0].get("name") if det.get("created_by") else None,
        "genres": g, "seasons": det.get("number_of_seasons") or None, "episodes": det.get("number_of_episodes") or None,
        "status": "Ended" if ended else "Returning", "network": nets[0]["name"] if nets else None, "rating": cert,
        "description": desc, "tier": "catalog", "vector": L.make_vector(g, "tv%s" % det["id"], text, cert),
        "keywords": L.make_keywords(g, year, text, kws[:3]), "poster": image_base + det["poster_path"],
        "ap": appeal(votes, avg, year), "cast": [c["name"] for c in (det.get("credits") or {}).get("cast", [])[:4]],
        "tm": det["id"], "r": round(avg, 1),
    }
    ext = det.get("external_ids") or {}
    if ext.get("imdb_id"):
        rec["ii"] = ext["imdb_id"]
    if L.family_friendly(g, cert, desc):
        rec["kf"] = 1
    pl = providers_of(det)
    if pl:
        rec["pl"] = pl
    return rec


# --------------------------------------------------------------- discovery
def discover(api, kind, ladder, per_cell_pages, genre_ids, known, want, verbose):
    """Collect candidate TMDB ids (id -> (quality, year, genre)) from year x genre cells."""
    is_tv = kind == "tv"
    cands = {}
    for avg_min, votes_min in ladder:
        if len(cands) >= want * 1.25:
            break
        if verbose:
            print("  [%s] ladder rung avg>=%.1f votes>=%d (have %d candidates)" % (kind, avg_min, votes_min, len(cands)), flush=True)
        for year in YEARS:
            for gid in [None] + genre_ids:
                for page in range(1, per_cell_pages + 1):
                    p = {"sort_by": "vote_count.desc", "vote_average.gte": avg_min, "vote_count.gte": votes_min, "page": page,
                         "include_adult": "false", "language": "en-US",
                         "without_genres": "10770,10763,10767,10766"}   # TV movies, news, talk, soap
                    if is_tv:
                        p["first_air_date_year"] = year
                    else:
                        p["primary_release_year"] = year
                        p["with_runtime.gte"] = 60
                    if gid:
                        p["with_genres"] = gid
                    d = api.get("/discover/" + kind, **p)
                    if not d or not d.get("results"):
                        break
                    for r in d["results"]:
                        if r["id"] in cands or not r.get("poster_path") or not (r.get("overview") or "").strip():
                            continue
                        title = r.get("name") if is_tv else r.get("title")
                        ds = (r.get("first_air_date") if is_tv else r.get("release_date")) or "0"
                        y = int(ds[:4] or 0)
                        if not title or y < 2000 or tv_year_key(title, y) in known:
                            continue
                        lang_ok = r.get("original_language") == "en" or r.get("vote_count", 0) >= votes_min * 3
                        if not lang_ok:
                            continue
                        q = r["vote_average"] * math.log10(max(r["vote_count"], 10))
                        cands[r["id"]] = (q, y, r.get("genre_ids") or [])
                    if page >= d.get("total_pages", 1):
                        break
    return cands


def select(cands, target):
    """Spread picks evenly over years, round-robin over primary genre inside each year."""
    by_year = defaultdict(list)
    for tid, (q, y, g) in cands.items():
        by_year[y].append((q, tid, g[0] if g else 0))
    years = sorted(by_year)
    quota = {y: target // len(years) for y in years} if years else {}
    chosen = []
    for y in years:
        pool = sorted(by_year[y], reverse=True)
        buckets = defaultdict(list)
        for q, tid, g in pool:
            buckets[g].append((q, tid))
        order = sorted(buckets, key=lambda g: -buckets[g][0][0])
        picked = []
        while len(picked) < quota[y] and any(buckets.values()):
            for g in order:
                if buckets[g] and len(picked) < quota[y]:
                    picked.append(buckets[g].pop(0)[1])
        chosen += picked
    left = sorted(((q, tid) for tid, (q, y, g) in cands.items() if tid not in set(chosen)), reverse=True)
    chosen += [tid for q, tid in left[: max(0, target - len(chosen))]]
    return chosen[:target]


def fetch_details(api, kind, ids, workers):
    extra = "credits,keywords,watch/providers,external_ids" + (",content_ratings" if kind == "tv" else ",release_dates")
    out = {}

    def one(i):
        return i, api.get("/%s/%d" % (kind, i), append_to_response=extra, language="en-US")
    done = 0
    with ThreadPoolExecutor(max_workers=workers) as ex:
        for i, d in ex.map(one, ids):
            done += 1
            if d:
                out[i] = d
            if done % 500 == 0:
                print("  details %d/%d" % (done, len(ids)), flush=True)
    return out


def genre_ids(api, kind):
    d = api.get("/genre/%s/list" % kind, language="en-US") or {}
    return [g["id"] for g in d.get("genres", []) if TMDB_GENRE.get(g["name"], g["name"]) != "__DROP__"]


def add_titles(api, args, kind, n):
    is_tv = kind == "tv"
    base_name, var, label = ("shows", "SHOWS_EXT", "shows") if is_tv else ("movies", "MOVIES_EXT", "movies")
    base = L.load_js_array(os.path.join(JS, base_name + ".js"), "SHOWS" if is_tv else "MOVIES")
    ext = read_ext(base_name + "-ext.js", var)
    existing = base + ext
    known = set()
    for m in existing:
        y = m.get("startYear") if is_tv else m.get("year")
        known.add(tv_year_key(m["title"], y))
        if not is_tv:
            known.add(tv_year_key(m["title"], (y or 0) + 1)); known.add(tv_year_key(m["title"], (y or 0) - 1))
    known_tm = {m["tm"] for m in ext if m.get("tm")}
    taken = {m["id"] for m in existing}
    ladder = SHOW_LADDER if is_tv else MOVIE_LADDER
    total_goal = n
    n = max(0, n - len(ext))   # N means "the extension should hold N titles": re-runs only top up
    print("[%s] %d base titles, %d already in the extension. Goal %d new -> adding %d" % (kind, len(base), len(ext), total_goal, n), flush=True)
    if not n:
        return len(ext)
    cands = discover(api, kind, ladder, args.pages, genre_ids(api, kind), known, n, True)
    for t in known_tm:
        cands.pop(t, None)
    pool, added, skipped, rounds = dict(cands), [], 0, 0
    while len(added) < n and pool and rounds < 5:
        rounds += 1
        need = n - len(added)
        chosen = select(pool, int(need * 1.2) + 5)   # headroom for records rejected at build time
        for t in chosen:
            pool.pop(t, None)
        print("[%s] round %d: %d candidates left -> fetching %d details…" % (kind, rounds, len(pool) + len(chosen), len(chosen)), flush=True)
        det = fetch_details(api, kind, chosen, args.workers)
        for tid in chosen:
            d = det.get(tid)
            rec = (build_show if is_tv else build_movie)(d, taken, api.image_base + "/w500") if d else None
            if rec:
                added.append(rec)
            else:
                skipped += 1
    if len(added) > n:   # trim the headroom, dropping the lowest-quality extras
        qual = {a["tm"]: cands[a["tm"]][0] for a in added if a["tm"] in cands}
        drop = {a["tm"] for a in sorted(added, key=lambda a: qual.get(a["tm"], 0))[: len(added) - n]}
        for a in added:
            if a["tm"] in drop:
                taken.discard(a["id"])
        added = [a for a in added if a["tm"] not in drop]
    print("[%s] built %d records (%d rejected: no poster/description/genre)" % (kind, len(added), skipped), flush=True)
    if len(added) < n:
        print("[%s] NOTE: target was %d, only %d titles cleared the quality ladder — not padding with weaker titles." % (kind, n, len(added)))
    write_ext(base_name + "-ext.js", var, label, ext + added)
    return len(added)


# --------------------------------------------------------------- meta for existing catalog
def best_match(results, title, year, is_tv):
    key = L.norm_key(title)
    best, bs = None, 0
    for r in results[:8]:
        t = r.get("name") if is_tv else r.get("title")
        y = int(((r.get("first_air_date") if is_tv else r.get("release_date")) or "0")[:4] or 0)
        s = (3 if L.norm_key(t) == key or L.norm_key(r.get("original_name" if is_tv else "original_title") or "") == key else 0)
        s += 2 if y == year else (1 if abs(y - (year or 0)) == 1 else 0)
        s += min(1, r.get("vote_count", 0) / 500.0)
        if s > bs:
            best, bs = r, s
    return best if bs >= 4 else None


def build_meta(api, args, kind):
    is_tv = kind == "tv"
    base_name, var, label = ("shows", "SHOWS_META", "shows") if is_tv else ("movies", "MOVIES_META", "movies")
    base = L.load_js_array(os.path.join(JS, base_name + ".js"), "SHOWS" if is_tv else "MOVIES")
    meta = read_meta(base_name + "-meta.js", var)
    todo = [m for m in base if m["id"] not in meta or (not meta[m["id"]].get("r") and not meta[m["id"]].get("_nf"))]
    print("[%s] metadata for %d titles (%d already done)" % (kind, len(todo), len(base) - len(todo)), flush=True)
    extra = "watch/providers,external_ids"
    lock = threading.Lock()
    counter = [0]

    def one(m):
        y = m.get("startYear") if is_tv else m.get("year")
        s = api.get("/search/" + kind, query=m["title"], language="en-US", **({"first_air_date_year": y} if is_tv else {"year": y}))
        hit = best_match((s or {}).get("results", []), m["title"], y, is_tv) if s else None
        if not hit and not is_tv:   # year can be off by one in older data
            s = api.get("/search/movie", query=m["title"], language="en-US")
            hit = best_match((s or {}).get("results", []), m["title"], y, False) if s else None
        if not hit:
            return m, None
        return m, api.get("/%s/%d" % (kind, hit["id"]), append_to_response=extra, language="en-US")

    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        for m, d in ex.map(one, todo):
            counter[0] += 1
            if not d:
                meta[m["id"]] = {"_nf": 1}
            else:
                x = {"tm": d["id"], "r": round(d.get("vote_average") or 0, 1)}
                imdb = d.get("imdb_id") or (d.get("external_ids") or {}).get("imdb_id")
                if imdb:
                    x["ii"] = imdb
                pl = providers_of(d)
                if pl:
                    x["pl"] = pl
                poster = m.get("poster") or ""
                if (not poster or re.search(r"\.svg(\?|$)|logo", poster, re.I)) and d.get("poster_path"):
                    x["poster"] = api.image_base + "/w500" + d["poster_path"]
                if len((m.get("description") or "").strip()) < 40 and len(d.get("overview") or "") >= 40:
                    x["description"] = desc_of(d["overview"])
                if not x["r"]:
                    x.pop("r")
                meta[m["id"]] = x
            if counter[0] % 1000 == 0:
                print("  meta %d/%d" % (counter[0], len(todo)), flush=True)
                write_meta(base_name + "-meta.js", var, label, {k: v for k, v in meta.items() if not v.get("_nf")})
    clean = {k: v for k, v in meta.items() if not v.get("_nf")}
    write_meta(base_name + "-meta.js", var, label, clean)
    print("[%s] metadata for %d/%d titles (%d not found on TMDB)" % (kind, len(clean), len(base), len(meta) - len(clean)))


# --------------------------------------------------------------- report
def report():
    rc = 0
    for name, var, base_var, mvar in (("movies", "MOVIES_EXT", "MOVIES", "MOVIES_META"), ("shows", "SHOWS_EXT", "SHOWS", "SHOWS_META")):
        base = L.load_js_array(os.path.join(JS, name + ".js"), base_var)
        ext = read_ext(name + "-ext.js", var)
        meta = read_meta(name + "-meta.js", mvar)
        allx = base + ext
        def has_poster(m):
            p = (meta.get(m["id"]) or {}).get("poster") or m.get("poster") or ""
            return bool(p) and not re.search(r"\.svg(\?|$)|logo", p, re.I)
        def has_desc(m):
            return len(((meta.get(m["id"]) or {}).get("description") or m.get("description") or "").strip()) >= 40
        n = len(allx)
        pp, dd = sum(map(has_poster, allx)), sum(map(has_desc, allx))
        rated = sum(1 for m in allx if (meta.get(m["id"]) or {}).get("r") or m.get("r"))
        plat = sum(1 for m in allx if (meta.get(m["id"]) or {}).get("pl") or m.get("pl"))
        print("%s: %d total (%d base + %d new) | posters %.2f%% | descriptions %.2f%% | rated %.1f%% | streaming info %.1f%%" %
              (name, n, len(base), len(ext), 100.0 * pp / n, 100.0 * dd / n, 100.0 * rated / n, 100.0 * plat / n))
        if pp / n < 0.999:
            print("   -> below 99.9%% posters: run with --meta to backfill (%d missing)" % (n - pp)); rc = 1
    return rc


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--movies", type=int, default=0)
    ap.add_argument("--shows", type=int, default=0)
    ap.add_argument("--meta", action="store_true", help="ratings, IMDb ids, streaming + poster/description backfill for existing titles")
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--api-base", default="https://api.themoviedb.org/3")
    ap.add_argument("--image-base", default="https://image.tmdb.org/t/p")
    ap.add_argument("--workers", type=int, default=8)
    ap.add_argument("--pages", type=int, default=5, help="discover pages per year x genre cell (20 results per page)")
    ap.add_argument("--qps", type=float, default=30)
    args = ap.parse_args()
    if args.report and not (args.movies or args.shows or args.meta):
        sys.exit(report())
    key, token = os.environ.get("TMDB_API_KEY", ""), os.environ.get("TMDB_READ_TOKEN", "")
    if not key and not token:
        sys.exit("Set TMDB_API_KEY (free: https://www.themoviedb.org/settings/api) and run again.")
    api = Api(args.api_base, key, token, args.image_base, args.qps)
    if args.movies:
        add_titles(api, args, "movie", args.movies)
    if args.shows:
        add_titles(api, args, "tv", args.shows)
    if args.meta:
        build_meta(api, args, "movie"); build_meta(api, args, "tv")
    print("done (%d API calls)" % api.calls)
    sys.exit(report())


if __name__ == "__main__":
    main()
