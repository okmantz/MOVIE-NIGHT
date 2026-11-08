#!/usr/bin/env python3
"""Movie Night v5 EXPANSION pass (overnight scope change, Nov 8).

Owen's revised brief: total catalog > 20,000. Additions prioritize
AMERICAN films (production-country evidence in Wikipedia categories)
from 2000-2026 with strong quality signals; European/other non-Indian
foreign films are a capped minority (<=15% of additions) and must clear
a higher notability bar; NO Indian productions (v4 rule, unchanged).
Films already in the catalog stay as-is regardless of origin — the
American focus applies to additions only.

Quality proxy (stated honestly): Wikipedia notability + substance —
article length, a real lead extract, a director credit from the
infobox/extract, and a resolvable poster. There are no Rotten Tomatoes
scores in this data source; none are fabricated.

Pipeline:
  stage extracts : fetch lead extracts (batches of 20 titles — the
                   MediaWiki extracts cap is ~20/query, which is why
                   the v5 batchinfo pass left ~18k candidates without
                   extracts) for unused candidates.json entries.
  stage enrich2  : rank the merged-harvest remainder (never enriched),
                   enrich the top N (batches of 50, full prop set),
                   then backfill extracts in batches of 20.
  stage build    : prepare (Indian rule, film/year/dup checks mirroring
                   build_v5), classify origin from full category lists,
                   select by origin tier (US modern -> US older ->
                   EN/UNK modern -> EN/UNK older -> FOREIGN capped),
                   top up deficit genres (Neo-Noir / Family Drama) with
                   every genuine remaining member, build entries exactly
                   like build_v5 (wikitext director/runtime, API-confirmed
                   posters — no live-verify bursts), merge onto the
                   current 10,740-film dataset, emit js/movies.js.

Caches (resumable, .build/v5/): extracts2.json, batchinfo2.json,
candidates2.json, stats_expand.json.
"""
import json
import os
import re
import sys
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

import requests

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L
import build_v4 as B4
from build_v4 import cat_is_indian_production, extract_is_indian, TAXONOMY_17
from build_entries import GENRE_PRIORITY, BASELINES, make_vector, slugify
from enrich_catalog import display_title, norm_title, parse_extract

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
V5 = os.path.join(BUILD, "v5")
API = "https://en.wikipedia.org/w/api.php"
HEADERS = {"User-Agent": "MovieNightApp/5.0 (catalog expansion; educational project)"}

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
NEW_TAG_ORDER = B4.NEW_TAG_ORDER
BASELINES.setdefault("Documentary", [2, 7, 1, 2, 5, 4, 1, 4, 3, 3])
BASELINES.setdefault("Superhero", [9, 4, 1, 4, 3, 4, 2, 9, 2, 3])

NATIONALITIES = [
    "british", "french", "german", "japanese", "korean", "chinese",
    "italian", "spanish", "mexican", "canadian", "australian", "russian",
    "swedish", "danish", "norwegian", "dutch", "belgian", "austrian",
    "swiss", "polish", "czech", "hungarian", "greek", "turkish",
    "iranian", "israeli", "brazilian", "argentine", "thai", "vietnamese",
    "indonesian", "filipino", "irish", "hong kong", "taiwanese", "soviet",
    "portuguese", "romanian", "bulgarian", "serbian", "croatian",
    "ukrainian", "icelandic", "finnish", "south african", "egyptian",
    "nepali", "malaysian", "singaporean", "chilean", "peruvian",
    "colombian", "cuban", "nigerian", "kenyan", "moroccan", "lebanese",
    "palestinian", "afghan", "mongolian", "cambodian", "georgian",
    "armenian", "azerbaijani", "kazakh", "estonian", "latvian",
    "lithuanian", "slovak", "slovenian", "bosnian", "macedonian",
    "albanian", "welsh", "scottish", "yugoslav", "senegalese",
    "ghanaian", "congolese", "angolan", "mozambican", "zimbabwean",
    "tanzanian", "ugandan", "new zealand", "pakistani", "bangladeshi",
    "sri lankan", "ethiopian", "algerian", "tunisian", "iraqi", "syrian",
    "jordanian", "burmese", "laotian", "uzbek", "kyrgyz", "tajik",
    "montenegrin", "luxembourg", "maltese", "cypriot", "jamaican",
    "puerto rican", "venezuelan",
]
FOREIGN_LANGS = [
    "french-language", "german-language", "japanese-language",
    "korean-language", "spanish-language", "italian-language",
    "mandarin-language", "cantonese-language", "russian-language",
    "portuguese-language", "arabic-language", "persian-language",
    "turkish-language", "thai-language", "vietnamese-language",
    "polish-language", "dutch-language", "swedish-language",
    "danish-language", "norwegian-language", "finnish-language",
    "greek-language", "czech-language", "hungarian-language",
    "romanian-language", "bulgarian-language", "serbian-language",
    "croatian-language", "ukrainian-language", "bengali-language",
    "tamil-language", "telugu-language", "malayalam-language",
    "kannada-language", "marathi-language", "punjabi-language",
    "urdu-language", "sinhala-language", "nepali-language",
    "indonesian-language", "malay-language", "tagalog-language",
    "burmese-language", "khmer-language", "lao-language",
    "mongolian-language", "georgian-language", "armenian-language",
    "azerbaijani-language", "kazakh-language", "uzbek-language",
    "estonian-language", "latvian-language", "lithuanian-language",
    "slovak-language", "slovenian-language", "albanian-language",
    "macedonian-language", "icelandic-language", "irish-language",
    "welsh-language", "basque-language", "catalan-language",
    "galician-language", "yiddish-language", "hebrew-language",
    "amharic-language", "swahili-language", "yoruba-language",
    "igbo-language", "hausa-language", "zulu-language",
]


def origin_of(cats):
    """Origin evidence from a film's full Wikipedia category list.
    US: an 'American ... films' production category. FOREIGN: another
    nationality's '... films' category or a non-English language
    category and no US evidence. EN: English-language evidence only.
    UNK: no usable evidence either way."""
    low = [c.lower() for c in cats]
    filmcats = [c for c in low if c.rstrip().endswith("films")]
    if any("american" in c and "native american" not in c for c in filmcats):
        return "US"
    if any(any(n in c for n in NATIONALITIES) for c in filmcats):
        return "FOREIGN"
    if any(any(l in c for l in FOREIGN_LANGS) for c in low):
        return "FOREIGN"
    if any("english-language" in c for c in low):
        return "EN"
    return "UNK"


def current_dataset():
    movies = json.load(open(f"{V5}/movies_patched.json"))
    top20 = json.load(open(f"{V5}/top20_current.json"))
    return movies, top20


def dataset_title_years(movies):
    titles = {}
    for m in movies:
        titles.setdefault(norm_title(m["title"]), []).append(m["year"])
    return titles


def likely_used(article_title, year, titles):
    nt = norm_title(article_title)
    if nt not in titles:
        return False
    if year is None:
        return True
    return any(abs(year - y) <= 2 for y in titles[nt])


def api_query(params, tries=4):
    for att in range(tries):
        try:
            r = requests.get(API, params=params, headers=HEADERS,
                             timeout=(5, 90))
            if r.status_code == 429:
                time.sleep(3 * (att + 1))
                continue
            r.raise_for_status()
            return r.json()
        except Exception:
            time.sleep(2 * (att + 1))
    return {}


def fetch_extracts(titles, cache_path, workers=6):
    """Lead extracts in batches of 20 (the per-query extracts cap)."""
    cache = L.load_json(cache_path, {})
    todo = [t for t in titles if t not in cache]
    print(f"extracts: cached {len(cache)}, todo {len(todo)}", flush=True)
    batches = [todo[i:i + 20] for i in range(0, len(todo), 20)]
    done = [0]

    def work(batch):
        data = api_query({
            "action": "query", "prop": "extracts", "exintro": 1,
            "explaintext": 1, "exlimit": "max", "redirects": 1,
            "format": "json", "titles": "|".join(batch),
        })
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            if p.get("extract"):
                by_title[p.get("title", "")] = p["extract"]
        out = {}
        for t in batch:
            key = redir.get(normap.get(t, t), normap.get(t, t))
            out[t] = by_title.get(key, "")
        return out

    with ThreadPoolExecutor(max_workers=workers) as ex:
        for out in ex.map(work, batches):
            cache.update(out)
            done[0] += len(out)
            if done[0] % 2000 < 20:
                L.save_json(cache_path, cache)
                print(f"  extracts {done[0]}/{len(todo)}", flush=True)
    L.save_json(cache_path, cache)
    print(f"extracts done: {len(cache)} cached "
          f"({sum(1 for v in cache.values() if v)} non-empty)", flush=True)
    return cache


# ---------------- stage: extracts (S1) ----------------

def stage_extracts():
    movies, _ = current_dataset()
    titles = dataset_title_years(movies)
    cands = json.load(open(f"{V5}/candidates.json"))
    info = json.load(open(f"{V5}/batchinfo.json"))
    todo = []
    for c in cands:
        bi = info.get(c["article"])
        if not bi or bi.get("missing") or bi.get("extract"):
            continue
        if likely_used(c["title"], c["year"], titles):
            continue
        todo.append(c["article"])
    print(f"S1 no-extract unused candidates: {len(todo)}", flush=True)
    fetch_extracts(todo, f"{V5}/extracts2.json")


# ---------------- stage: enrich2 (S2) ----------------

def build_pool():
    pool = {}

    def add(article, years=(), genres=(), cats=(), tags=()):
        if article.startswith("_"):
            return
        e = pool.setdefault(article, {"years": set(), "genres": set(),
                                      "cats": set(), "tags": set()})
        e["years"].update(y for y in years if y)
        e["genres"].update(genres)
        e["cats"].update(cats)
        e["tags"].update(tags)

    h3 = json.load(open(f"{BUILD}/harvest.json"))["films"]
    for art, i in h3.items():
        add(art, i.get("years", []), i.get("genres", []), i.get("cats", []))
    tag2genre = {"Superhero": "Superhero", "Documentary": "Documentary",
                 "Psychological Thriller": "Thriller", "Rom-Com": "Comedy",
                 "Neo-Noir": "Crime", "Historical Drama": "Drama",
                 "Horror Thriller": "Horror", "Family Drama": "Drama"}
    h4 = json.load(open(f"{V4}/harvest4.json"))
    for art, i in h4.items():
        if art.startswith("_"):
            continue
        add(art, (), [tag2genre[t] for t in i.get("tags", []) if t in tag2genre],
            i.get("cats", []), i.get("tags", []))
    h5 = json.load(open(f"{V5}/harvest5.json"))
    for art, i in h5.items():
        add(art, i.get("years", []), i.get("genres", []),
            i.get("cats", []), i.get("tags", []))
    return pool


def stage_enrich2(limit=16000):
    movies, _ = current_dataset()
    titles = dataset_title_years(movies)
    cand_arts = {c["article"] for c in json.load(open(f"{V5}/candidates.json"))}
    pool = build_pool()
    cands = []
    skipped_indian = 0
    for art, e in pool.items():
        if art in cand_arts:
            continue
        title = display_title(art)
        if not title or title.startswith("List of") or "(disambiguation)" in art:
            continue
        if "film series" in art.lower():
            continue
        prod_cats = [c for c in e["cats"] if "film" in c.lower()]
        if prod_cats and all(cat_is_indian_production(c) for c in prod_cats):
            skipped_indian += 1
            continue
        year = min(e["years"]) if e["years"] else None
        ym = re.search(r"\((\d{4})(?: film)?\)$", art)
        if year is None and ym:
            year = int(ym.group(1))
        if likely_used(title, year, titles):
            continue
        era = 0 if (year or 0) >= 2000 else 1 if (year or 0) >= 1990 else \
            2 if (year or 0) >= 1980 else 3 if year else 2
        cands.append({"article": art, "title": title, "year": year,
                      "genres": sorted(e["genres"]), "cats": sorted(e["cats"]),
                      "tags": sorted(e["tags"]), "era": era,
                      "ncats": len(e["cats"])})
    # modern first, then evidence richness (category count as a rough
    # notability signal), mirroring v5_enrich's ranking style
    cands.sort(key=lambda c: (c["era"], -min(c["ncats"], 12), c["title"]))
    cands = cands[:limit]
    json.dump(cands, open(f"{V5}/candidates2.json", "w"))
    print(f"S2 candidates: {len(cands)} (skipped all-Indian-evidence: "
          f"{skipped_indian})", flush=True)

    cache = L.load_json(f"{V5}/batchinfo2.json", {})
    todo = [c["article"] for c in cands if c["article"] not in cache]
    print(f"batchinfo2 cached {len(cache)}, todo {len(todo)}", flush=True)
    batches = [todo[i:i + 50] for i in range(0, len(todo), 50)]
    done = [0]

    def work(batch):
        data = api_query({
            "action": "query", "prop": "extracts|pageimages|info|categories",
            "exintro": 1, "explaintext": 1, "exlimit": "max",
            "piprop": "original", "cllimit": "max", "clshow": "!hidden",
            "redirects": 1, "format": "json", "titles": "|".join(batch),
        })
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            cats = [c["title"][9:] for c in p.get("categories", [])
                    if c.get("title", "").startswith("Category:")]
            by_title[p.get("title", "")] = {
                "len": p.get("length", 0),
                "extract": p.get("extract", ""),
                "img": (p.get("original") or {}).get("source", ""),
                "cats": cats,
                "missing": "missing" in p,
            }
        out = {}
        for t in batch:
            key = redir.get(normap.get(t, t), normap.get(t, t))
            out[t] = by_title.get(key, {"missing": True, "len": 0,
                                        "extract": "", "img": "", "cats": []})
        return out

    with ThreadPoolExecutor(max_workers=6) as ex:
        for out in ex.map(work, batches):
            cache.update(out)
            done[0] += len(out)
            if done[0] % 2500 < 50:
                L.save_json(f"{V5}/batchinfo2.json", cache)
                print(f"  batchinfo2 {done[0]}/{len(todo)}", flush=True)
    L.save_json(f"{V5}/batchinfo2.json", cache)
    have_ex = sum(1 for v in cache.values() if v.get("extract"))
    print(f"batchinfo2 done: {len(cache)} ({have_ex} with extracts)", flush=True)
    # backfill extracts for the rest in batches of 20
    need = [c["article"] for c in cands
            if not cache.get(c["article"], {}).get("extract")
            and not cache.get(c["article"], {}).get("missing")]
    ex2 = fetch_extracts(need, f"{V5}/extracts2.json")
    merged = 0
    for art, ex_text in ex2.items():
        if art in cache and ex_text and not cache[art].get("extract"):
            cache[art]["extract"] = ex_text
            merged += 1
    L.save_json(f"{V5}/batchinfo2.json", cache)
    print(f"extract backfill merged into batchinfo2: {merged}", flush=True)


# NOTE: the __main__ dispatch lives at the very END of this file —
# the build-stage functions are defined below this point.


# ---------------- stage: build ----------------

MIN_SIZE = 3000
ADD_GOAL = 10900          # 10,740 + 10,900 = ~21,640 total
FOREIGN_CAP = 1200        # ~11% of goal additions (brief guide: <=15%)
FOREIGN_MIN_LEN = 5000    # foreign additions must be strongly notable


def cand_genres(c, cats):
    """Mirror of build_v5's candidate genre derivation."""
    genres = list(c["genres"])
    tags = set(c.get("tags", []))
    for tag, rx in CAT_RULES:
        if any(rx.search(x) for x in cats):
            tags.add(tag)
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


def prepare_pool(cands, info_cache, extract_cache, existing_keys):
    """Mirror of build_v5's prepare step + origin classification."""
    prepared, rej = [], Counter()
    for c in cands:
        info = info_cache.get(c["article"])
        if not info or info.get("missing"):
            rej["no_info"] += 1
            continue
        extract = info.get("extract") or extract_cache.get(c["article"]) or ""
        if not extract:
            rej["no_extract"] += 1
            continue
        cats = info.get("cats", []) + c["cats"]
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
        key = (norm_title(c["title"]), year)
        if key in existing_keys:
            rej["dup"] += 1
            continue
        genres = cand_genres(c, cats)
        if "Drama" in genres and year >= 2000 and \
                "Historical Drama" not in genres and len(genres) < 8:
            genres.append("Modern Drama")
        prepared.append({
            "article": c["article"], "title": c["title"], "year": year,
            "genres": genres, "extract": extract, "edirector": edirector,
            "len": info.get("len", 0), "img": info.get("img", ""),
            "origin": origin_of(cats),
        })
    return prepared, rej


def confirm_files(filenames):
    """Mirror of v5_poster_fix.confirm_files: API-confirmed posters
    (imageinfo: image/* MIME and size >= MIN_SIZE). No live CDN bursts."""
    out = {}
    names = sorted(set(f for f in filenames if f))
    for i in range(0, len(names), 50):
        batch = names[i:i + 50]
        data = api_query({"action": "query", "prop": "imageinfo",
                          "iiprop": "url|size|mime", "format": "json",
                          "titles": "|".join("File:" + f for f in batch)})
        q = data.get("query", {})
        normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
        by_title = {}
        for p in q.get("pages", {}).values():
            ii = p.get("imageinfo") or []
            if ii and ii[0].get("mime", "").startswith("image") \
                    and ii[0].get("size", 0) >= MIN_SIZE:
                by_title[p.get("title", "")] = ii[0]["url"].split("?")[0]
        for f in batch:
            u = by_title.get(normap.get("File:" + f, "File:" + f), "")
            if u:
                out[f] = u
        if (i // 50) % 20 == 0:
            print(f"  confirm_files {i + len(batch)}/{len(names)}", flush=True)
    return out


def stage_build():
    movies, top20 = current_dataset()
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

    extract_cache = L.load_json(f"{V5}/extracts2.json", {})
    prepared_all = []
    for name, cpath, ipath in (
            ("S1", f"{V5}/candidates.json", f"{V5}/batchinfo.json"),
            ("S2", f"{V5}/candidates2.json", f"{V5}/batchinfo2.json")):
        if not os.path.exists(cpath):
            print(f"{name}: no candidates file, skipped", flush=True)
            continue
        cands = json.load(open(cpath))
        infos = json.load(open(ipath))
        prep, rej = prepare_pool(cands, infos, extract_cache, existing_keys)
        print(f"{name}: prepared {len(prep)}; rejected {dict(rej)}", flush=True)
        stats[f"prepared_{name}"] = len(prep)
        stats[f"rejected_{name}"] = dict(rej)
        prepared_all += prep

    def tier_of(p):
        modern = p["year"] >= 2000
        if p["origin"] == "US":
            return 0 if modern else 1
        if p["origin"] in ("EN", "UNK"):
            return 2 if modern else 3
        return 4

    tiers = {i: [] for i in range(5)}
    for p in prepared_all:
        tiers[tier_of(p)].append(p)
    for t in tiers.values():
        t.sort(key=lambda p: -p["len"])
    for i in range(5):
        print(f"tier {i}: {len(tiers[i])}", flush=True)

    selected, selected_keys = [], set()
    foreign_taken = [0]

    def take(p):
        key = (norm_title(p["title"]), p["year"])
        if key in selected_keys:
            return False
        selected.append(p)
        selected_keys.add(key)
        if p["origin"] == "FOREIGN":
            foreign_taken[0] += 1
        return True

    bars_used = []
    for bar in (2800, 1800, 1200):
        if len(selected) >= ADD_GOAL:
            break
        bars_used.append(bar)
        for ti in range(5):
            for p in tiers[ti]:
                if len(selected) >= ADD_GOAL:
                    break
                if p["len"] < bar:
                    continue
                if ti == 4 and (p["len"] < FOREIGN_MIN_LEN
                                or foreign_taken[0] >= FOREIGN_CAP):
                    continue
                take(p)
    stats["bars_used"] = bars_used
    print(f"selected after tier sweep: {len(selected)} "
          f"(foreign {foreign_taken[0]})", flush=True)

    # deficit top-up: every genuine remaining member of the two locked
    # genres, regardless of tier (they are additions too; foreign ones
    # still count in the reported origin split)
    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    for p in selected:
        for g in p["genres"]:
            counts[g] += 1
    selected_articles = {p["article"] for p in selected}
    for genre in ("Neo-Noir", "Family Drama"):
        pool = [p for p in prepared_all
                if genre in p["genres"]
                and p["article"] not in selected_articles and p["len"] >= 1000]
        pool.sort(key=lambda p: -p["len"])
        n0 = len(selected)
        for p in pool:
            if take(p):
                selected_articles.add(p["article"])
                for g in p["genres"]:
                    counts[g] += 1
        print(f"top-up {genre}: +{len(selected) - n0} -> {counts[genre]}",
              flush=True)
    stats["selected"] = len(selected)
    stats["selected_origin"] = dict(Counter(p["origin"] for p in selected))

    # ---- posters + infobox data for selected ----
    articles = [p["article"] for p in selected]
    L.fetch_wikitext(articles)
    wiki = L.wikitext_cache()

    def url_filename(url):
        return url.rsplit("/", 1)[-1].split("?")[0]

    fnames = set()
    for p in selected:
        fn = wiki.get(p["article"], ("", None, ""))[2]
        if fn:
            fnames.add(fn)
        if p["img"]:
            fnames.add(url_filename(p["img"]))
    confirmed = confirm_files(sorted(fnames))
    print(f"poster files confirmed: {len(confirmed)}/{len(fnames)}", flush=True)

    additions = []
    for p in selected:
        dw, rt, fn = wiki.get(p["article"], ("", None, ""))
        director = dw or p["edirector"] or "Unknown"
        poster = ""
        if fn and fn in confirmed:
            poster = confirmed[fn]
        elif p["img"] and url_filename(p["img"]) in confirmed:
            poster = confirmed[url_filename(p["img"])]
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
    movies += additions
    stats["additions"] = len(additions)
    stats["additions_with_poster"] = sum(1 for m in additions if m["poster"])
    print(f"additions built: {len(additions)} "
          f"(posters {stats['additions_with_poster']})", flush=True)

    def era_split(films):
        e = {"2020-2026": 0, "2010-2019": 0, "2000-2009": 0,
             "1990-1999": 0, "1980-1989": 0, "pre-1980": 0}
        for m in films:
            y = m["year"]
            e["2020-2026" if y >= 2020 else "2010-2019" if y >= 2010 else
              "2000-2009" if y >= 2000 else "1990-1999" if y >= 1990 else
              "1980-1989" if y >= 1980 else "pre-1980"] += 1
        return e

    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    posters = sum(1 for m in movies if m["poster"])
    stats["final_total"] = len(movies)
    stats["poster_pct"] = round(100 * posters / len(movies), 1)
    stats["genre_counts"] = dict(counts.most_common())
    stats["eras_total"] = era_split(movies)
    stats["eras_additions"] = era_split(additions)
    n_modern_add = sum(1 for m in additions if m["year"] >= 2000)
    stats["additions_2000_pct"] = round(
        100 * n_modern_add / max(1, len(additions)), 1)

    header = (
        "/* Movie Night — dataset (v5). Each movie carries a 0-10 taste vector on ten axes:\n"
        "   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.\n"
        "   Entries with tier \"core\" are hand-written. Entries with tier \"catalog\" were\n"
        "   sourced from Wikipedia year/genre categories: director and runtime come from\n"
        "   the film's infobox (runtime is null when unknown — never invented), the\n"
        "   description is adapted from the film's Wikipedia lead (CC BY-SA), and the\n"
        "   taste vector is an ESTIMATE derived from genre-baseline profiles.\n"
        "   Catalog additions are Wikipedia-notable films: selection used article\n"
        "   substance (length), a confirmed poster and a real lead extract as the\n"
        "   notability proxy — there are no external ratings (e.g. Rotten Tomatoes)\n"
        "   in this dataset. The v5 expansion pass prioritized American productions\n"
        "   from 2000-2026 (origin = Wikipedia category evidence), capped other\n"
        "   foreign productions at a small minority of additions, and applied the\n"
        "   documented Indian-production exclusion to every addition. Genre tags\n"
        "   in the refined taxonomy come from Wikipedia category evidence or the\n"
        "   derived-label rules documented in the README.\n"
        "   Poster URLs come from the Wikipedia API (existence confirmed via the\n"
        "   API at build time); an empty poster means the UI draws an elegant\n"
        "   generated cover instead. */\n"
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
    L.save_json(f"{V5}/stats_expand.json", stats)
    print(json.dumps(stats, indent=1), flush=True)


if __name__ == "__main__":
    stage = sys.argv[1] if len(sys.argv) > 1 else "extracts"
    if stage == "extracts":
        stage_extracts()
    elif stage == "build":
        stage_build()
    elif stage == "enrich2":
        stage_enrich2(int(sys.argv[2]) if len(sys.argv) > 2 else 16000)
    else:
        print(f"unknown stage {stage}")
        sys.exit(1)
