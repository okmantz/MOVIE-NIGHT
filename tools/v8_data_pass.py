#!/usr/bin/env python3
"""v8 data pass: (A) resolve missing posters for movies+shows via Wikipedia
infobox images, (B) harvest 130+ K-dramas with posters+descriptions.
Outputs /tmp/v8_posters.json and /tmp/v8_kdrama.json. Read-only vs the repo."""
import json, re, sys, time, hashlib
import urllib.request, urllib.parse

API = "https://en.wikipedia.org/w/api.php"
UA = {"User-Agent": "MovieNightBuilder/8.0 (personal project)"}

def api(params):
    params = dict(params); params["format"] = "json"
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def batches(seq, n):
    for i in range(0, len(seq), n):
        yield seq[i:i + n]

IMG_RE = re.compile(r"\|\s*(?:image|image_name|cover|poster)\s*=\s*([^\n|]+)", re.I)

def fetch_pages(titles):
    """titles: list of candidate article titles -> {title: page dict}"""
    out = {}
    for chunk in batches(titles, 40):
        try:
            d = api({"action": "query", "prop": "revisions|pageimages",
                     "rvprop": "content", "rvsection": 0, "redirects": 1,
                     "piprop": "original", "titles": "|".join(chunk)})
        except Exception as e:
            print("  api err:", e); continue
        q = d.get("query", {})
        norm = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        pages = {p["title"]: p for p in q.get("pages", {}).values() if "missing" not in p}
        for t in chunk:
            tt = norm.get(t, t); tt = redir.get(tt, tt)
            if tt in pages: out[t] = pages[tt]
        time.sleep(0.15)
    return out

def file_urls(files):
    out = {}
    files = [f for f in dict.fromkeys(files) if f]
    for chunk in batches(files, 40):
        try:
            d = api({"action": "query", "prop": "imageinfo", "iiprop": "url",
                     "titles": "|".join("File:" + f for f in chunk)})
        except Exception as e:
            print("  ii err:", e); continue
        for p in d.get("query", {}).get("pages", {}).values():
            ii = (p.get("imageinfo") or [{}])[0]
            if ii.get("url"):
                out[p["title"].replace("File:", "", 1)] = ii["url"]
        time.sleep(0.15)
    return out

def infobox_image(page):
    rev = (page.get("revisions") or [{}])[0]
    text = rev.get("*", "") or rev.get("slots", {}).get("main", {}).get("*", "")
    if "infobox" not in text.lower():
        return None, text
    m = IMG_RE.search(text)
    if m:
        f = m.group(1).strip().strip("[]").replace("File:", "").split("|")[0].strip()
        if f and "." in f:
            return f, text
    return None, text

def resolve_posters(items, kind):
    """items: [{id,title,year}] -> {id: url}"""
    cand = {}
    for it in items:
        t, y = it["title"], it.get("year")
        if kind == "movie":
            cand[it["id"]] = [t, t + " (film)"] + ([t + " (%d film)" % y] if y else [])
        else:
            cand[it["id"]] = [t, t + " (TV series)"]
    all_titles = [c for v in cand.values() for c in v]
    pages = fetch_pages(all_titles)
    want_file, fallback = {}, {}
    for iid, tries in cand.items():
        for t in tries:
            p = pages.get(t)
            if not p: continue
            f, _ = infobox_image(p)
            if f: want_file[iid] = f; break
            if p.get("original") and iid not in fallback:
                fallback[iid] = p["original"]["source"]
    urls = file_urls(list(want_file.values()))
    res = {}
    for iid, f in want_file.items():
        if f in urls: res[iid] = urls[f]
    for iid, u in fallback.items():
        res.setdefault(iid, u)
    return res

def main():
    sys.path.insert(0, "/tmp")
    import subprocess
    node = subprocess.run(["node", "-e", """
const M=require('/home/hatch/workspace/movie-night-v7/js/movies.js');
const S=require('/home/hatch/workspace/movie-night-v7/js/shows.js');
const miss_m = M.MOVIES.filter(m=>!m.poster).map(m=>({id:m.id,title:m.title,year:m.year}));
const miss_s = S.SHOWS.filter(s=>!s.poster).map(s=>({id:s.id,title:s.title,year:s.startYear}));
console.log(JSON.stringify({miss_m, miss_s, have_s: S.SHOWS.map(s=>s.title.toLowerCase())}));
"""], capture_output=True, text=True)
    data = json.loads(node.stdout)
    print("missing posters: movies", len(data["miss_m"]), "shows", len(data["miss_s"]))
    got_m = resolve_posters(data["miss_m"], "movie")
    print("movies resolved:", len(got_m))
    got_s = resolve_posters(data["miss_s"], "show")
    print("shows resolved:", len(got_s))
    posters = {"movies": got_m, "shows": got_s}
    json.dump(posters, open("/tmp/v8_posters.json", "w"))

    # ---- K-dramas ----
    have = set(data["have_s"])
    titles = []
    for year in range(2010, 2027):
        cat = "Category:%d South Korean television series" % year
        try:
            d = api({"action": "query", "list": "categorymembers", "cmtitle": cat,
                     "cmtype": "page", "cmlimit": 500})
            for m in d.get("query", {}).get("categorymembers", []):
                titles.append((m["title"], year))
        except Exception as e:
            print("cat err", year, e)
        time.sleep(0.1)
    seen, cand = set(), []
    for t, y in titles:
        k = t.lower()
        if k in have or k in seen: continue
        if any(w in k for w in ["list of", "category:", "template:"]): continue
        seen.add(k); cand.append((t, y))
    cand.sort(key=lambda x: hashlib.md5(x[0].encode()).hexdigest())
    cand = cand[:150]
    print("k-drama candidates:", len(cand))
    pages = fetch_pages([t for t, _ in cand])
    # extracts for descriptions
    descs = {}
    for chunk in batches([t for t, _ in cand], 40):
        try:
            d = api({"action": "query", "prop": "extracts", "exintro": 1,
                     "explaintext": 1, "exsentences": 3, "redirects": 1,
                     "titles": "|".join(chunk)})
            for p in d.get("query", {}).get("pages", {}).values():
                if p.get("extract"): descs[p["title"]] = p["extract"].strip()
        except Exception as e:
            print("extract err", e)
        time.sleep(0.15)
    files = {}
    meta = {}
    for t, y in cand:
        p = pages.get(t)
        if not p: continue
        f, text = infobox_image(p)
        if f: files[t] = f
        def grab(pat):
            m = re.search(pat, text, re.I)
            return m.group(1).strip() if m else None
        net = grab(r"\|\s*network\s*=\s*([^\n|]+)")
        ns = grab(r"\|\s*num_seasons\s*=\s*(\d+)")
        ne = grab(r"\|\s*num_episodes\s*=\s*(\d+)")
        last = grab(r"\|\s*last_aired\s*=\s*[^0-9]*((?:19|20)\d\d)")
        first = grab(r"\|\s*first_aired\s*=\s*[^0-9]*((?:19|20)\d\d)")
        meta[t] = {"network": net, "seasons": int(ns) if ns else None,
                   "episodes": int(ne) if ne else None,
                   "endYear": int(last) if last else None,
                   "startYear": int(first) if first else y}
    urls = file_urls(list(files.values()))
    entries = []
    for t, y in cand:
        desc = descs.get(t, "")
        if len(desc) < 40: continue
        m = meta.get(t, {})
        low = desc.lower()
        genres = ["Drama"]
        if any(w in low for w in ["romantic", "romance", "love story"]): genres.append("Romance")
        if "thriller" in low: genres.append("Thriller")
        if "comedy" in low or "sitcom" in low: genres.append("Comedy")
        if "crime" in low or "detective" in low: genres.append("Crime")
        if "historical" in low or "joseon" in low: genres.append("Historical Drama")
        if "fantasy" in low: genres.append("Fantasy")
        base = {"adrenaline": 3, "brainy": 4, "scary": 1, "funny": 4, "heartwarming": 7,
                "dark": 4, "romantic": 8, "epic": 4, "cozy": 6, "weird": 2}
        if "Thriller" in genres: base.update({"adrenaline": 7, "dark": 7, "scary": 3, "romantic": 4, "cozy": 2})
        if "Comedy" in genres: base.update({"funny": 8, "romantic": 6, "cozy": 7})
        if "Crime" in genres: base.update({"adrenaline": 6, "dark": 6, "brainy": 6})
        slug = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
        poster = urls.get(files.get(t, ""), "")
        entries.append({
            "id": "tv-" + slug, "title": t,
            "startYear": m.get("startYear") or y, "endYear": m.get("endYear"),
            "creator": None, "genres": genres,
            "seasons": m.get("seasons"), "episodes": m.get("episodes"),
            "status": "Ended" if m.get("endYear") else None,
            "network": m.get("network"), "rating": None,
            "description": desc[:600], "tier": "catalog", "vector": base,
            "keywords": ["k-drama", "korean"] + [g.lower() for g in genres],
            "poster": poster, "ap": 70})
    json.dump(entries, open("/tmp/v8_kdrama.json", "w"))
    print("k-drama entries built:", len(entries),
          "| with posters:", sum(1 for e in entries if e["poster"]))
    print("DONE")

if __name__ == "__main__":
    main()
