#!/usr/bin/env python3
"""Movie Night v4 data build.

Pipeline (all steps cached/resumable under .build/v4/):
  1. Remove Indian-production films (see is_indian for the rule).
  2. Trim Westerns (<=120) and Musicals (<=150) to core + best-data titles.
  3. Retag the refined genre taxonomy from Wikipedia category evidence
     (article categories, v3 harvest cats, v4 harvest, neo-noir list)
     plus clearly-scoped heuristics for derived labels.
  4. Add acclaimed/catalog titles for thin genres (Documentary, Superhero,
     Neo-Noir, and top-ups), enriched from Wikipedia; additions must have
     a verified poster and a real extract description.
  5. Upgrade catalog descriptions from Wikipedia lead extracts.
  6. Poster pass: resolve infobox images for posterless films, verify live.
  7. Prune no-poster catalog filler until poster coverage >= 90.5%,
     protecting core tier, the Top 20, and every genre's floor.
  8. Emit js/movies.js (v4) + .build/v4/stats.json.

Usage: python3 tools/build_v4.py
"""
import json
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L
from build_entries import BASELINES, GENRE_PRIORITY, slugify
from enrich_catalog import display_title, norm_title, parse_extract

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")

BASELINES.update({
    "Documentary": [2, 7, 1, 2, 5, 4, 1, 4, 3, 3],
    "Superhero": [9, 4, 1, 4, 3, 4, 2, 9, 2, 3],
    "Psychological Thriller": [6, 8, 6, 0, 1, 8, 1, 3, 1, 4],
    "Rom-Com": [3, 3, 0, 9, 7, 1, 9, 2, 7, 2],
    "Neo-Noir": [6, 7, 3, 1, 1, 9, 2, 4, 1, 4],
    "Historical Drama": [3, 6, 1, 1, 4, 5, 3, 8, 2, 1],
    "Family Drama": [2, 4, 0, 2, 9, 3, 3, 3, 8, 1],
    "Horror Thriller": [7, 5, 9, 0, 1, 8, 0, 3, 0, 4],
    "Modern Drama": BASELINES["Drama"],
    "Animated": BASELINES["Animation"],
})
AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]

from build_entries import make_vector  # uses BASELINES above

NEW_TAG_ORDER = ["Psychological Thriller", "Horror Thriller", "Rom-Com",
                 "Superhero", "Neo-Noir", "Documentary", "Historical Drama",
                 "Family Drama", "Modern Drama", "Animated"]
TAXONOMY_17 = ["Thriller", "Psychological Thriller", "Rom-Com", "Sci-Fi",
               "Mystery", "Animated", "Superhero", "Documentary", "Romance",
               "Action", "Historical Drama", "Family Drama", "Crime",
               "Neo-Noir", "Modern Drama", "Horror", "Horror Thriller"]
GENRE_FLOOR = 205  # pruning never drops a genre below this

LANG_RE = re.compile(r"(Hindi|Tamil|Telugu|Malayalam|Kannada|Bengali|Marathi|"
                     r"Punjabi|Bhojpuri|Assamese|Odia|Gujarati|Konkani|Tulu)"
                     r"-language|Bollywood", re.I)
INDIAN_CAT_RE = re.compile(r"\bIndian\b|Hindi|Tamil|Telugu|Malayalam|Kannada|"
                           r"Bengali|Marathi|Punjabi|Bhojpuri|Assamese|Odia|"
                           r"Gujarati|Konkani|Tulu", re.I)


def cat_is_indian_production(cat):
    """True when a Wikipedia category asserts Indian production/language
    (e.g. 'Indian action thriller films', 'Hindi-language films'), as
    opposed to theme/setting cats ('Films set in India', 'Indian Army
    in films')."""
    if cat.startswith("Films"):
        return False
    if " in films" in cat or "set in" in cat or "shot in" in cat:
        return False
    if "remake" in cat.lower():
        return False
    return bool(INDIAN_CAT_RE.search(cat)) and "film" in cat.lower()


def extract_is_indian(extract):
    if not extract:
        return False
    head = extract[:500]
    _, nationality, _, _ = parse_extract(extract)
    if nationality == "Indian":
        return True
    return bool(LANG_RE.search(head))


# ---------------- category fetch for arbitrary articles ----------------

def fetch_categories_into(cache, articles):
    todo = [a for a in articles if a not in cache]
    for i in range(0, len(todo), 50):
        batch = todo[i:i + 50]
        cont = None
        got = {t: [] for t in batch}
        for _ in range(5):
            params = {"action": "query", "prop": "categories", "cllimit": "max",
                      "redirects": 1, "format": "json", "titles": "|".join(batch)}
            if cont:
                params["clcontinue"] = cont
            data = L.api_get(params)
            q = data.get("query", {})
            normap = {n["from"]: n["to"] for n in q.get("normalized", [])}
            redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
            by_req = {}
            for t in batch:
                by_req.setdefault(redir.get(normap.get(t, t), normap.get(t, t)), []).append(t)
            for p in q.get("pages", {}).values():
                for t in by_req.get(p.get("title"), []):
                    for c in p.get("categories", []):
                        name = c["title"].replace("Category:", "", 1)
                        if name not in got[t]:
                            got[t].append(name)
            cont = data.get("continue", {}).get("clcontinue")
            if not cont:
                break
        cache.update(got)
        if (i // 50) % 10 == 0:
            print(f"  cats {min(i + 50, len(todo))}/{len(todo)}", flush=True)
    L.save_json(f"{V4}/article_cats.json", cache)
    return cache


# ---------------- main ----------------

def main():
    movies = json.load(open(f"{BUILD}/movies_v3.json"))
    top20 = json.load(open(f"{BUILD}/top20.json"))
    top20_ids = {t["id"] for t in top20}
    film_article = json.load(open(f"{V4}/film_article.json"))
    article_cats = json.load(open(f"{V4}/article_cats.json"))
    harvest3 = json.load(open(f"{BUILD}/harvest.json"))["films"]
    harvest4 = json.load(open(f"{V4}/harvest4.json"))
    neonoir_list = json.load(open(f"{V4}/neonoir_list.json"))
    enriched = json.load(open(f"{BUILD}/enriched.json"))
    emap = {norm_title(e["title"]) + "|" + str(e["year"]): e for e in enriched}
    summaries = L.summary_cache()

    stats = {"start_total": len(movies)}

    def cats_of(m):
        a = film_article.get(m["id"])
        return article_cats.get(a, []) if a else []

    def harvest3_cats_of(m):
        a = film_article.get(m["id"])
        info = harvest3.get(a) if a else None
        return info["cats"] if info else []

    # ---------- 1. Indian removal ----------
    def is_indian(m):
        if m["id"] in top20_ids:
            return False
        if m["tier"] == "catalog":
            e = emap.get(norm_title(m["title"]) + "|" + str(m["year"]))
            if e and e.get("nationality") == "Indian":
                return "nationality"
            a = film_article.get(m["id"])
            info = summaries.get(a) if a else None
            if info and extract_is_indian(info.get("extract", "")):
                return "extract"
        # Category evidence: require corroboration — >=2 production cats
        # including at least one nationality cat ("Indian ... films").
        # A single stray language cat is a known Wikipedia quirk (Four
        # Lions is filed under Punjabi-language, Chungking Express under
        # Hindi-language; both are non-Indian productions and stay).
        hits = [c for c in cats_of(m) if cat_is_indian_production(c)]
        indian_hits = [c for c in hits if "Indian" in c]
        if len(hits) >= 2 and indian_hits:
            return "categories"
        return False

    removed_indian, kept = [], []
    for m in movies:
        (removed_indian.append(m) if is_indian(m) else kept.append(m))
    # manual core list (verified Indian productions in the hand-built tier)
    manual_core = {"all-we-imagine-as-light"}
    removed_manual = [m for m in kept if m["id"] in manual_core]
    kept = [m for m in kept if m["id"] not in manual_core]
    removed_indian += removed_manual
    movies = kept
    stats["removed_indian"] = len(removed_indian)
    stats["removed_indian_core"] = sum(1 for m in removed_indian if m["tier"] == "core")
    L.save_json(f"{V4}/removed_indian.json",
                [{"title": m["title"], "year": m["year"], "tier": m["tier"]}
                 for m in removed_indian])
    print(f"removed Indian productions: {len(removed_indian)} "
          f"(core: {stats['removed_indian_core']})", flush=True)

    # ---------- 2. Western / Musical trim ----------
    def data_rank(m):
        return (1 if m["poster"] else 0,
                1 if m["director"] and m["director"] != "Unknown" else 0,
                1 if m["runtime"] else 0, m["year"])

    for genre, cap in (("Western", 120), ("Musical", 150)):
        films = [m for m in movies if genre in m["genres"]]
        if len(films) <= cap:
            stats[f"trim_{genre.lower()}"] = 0
            continue
        core = [m for m in films if m["tier"] == "core" or m["id"] in top20_ids]
        cat = sorted([m for m in films if m not in core], key=data_rank, reverse=True)
        keep_ids = {m["id"] for m in core} | {m["id"] for m in cat[:max(0, cap - len(core))]}
        before = len(movies)
        movies = [m for m in movies
                  if genre not in m["genres"] or m["id"] in keep_ids]
        stats[f"trim_{genre.lower()}"] = before - len(movies)
        print(f"trimmed {genre}: kept {len([m for m in movies if genre in m['genres']])} "
              f"of {len(films)}", flush=True)

    # ---------- 3. Retag ----------
    superhero_articles_strong = set()
    FRANCHISE_RE = re.compile(r"marvel|dc comics|batman|superman|spider-man|"
                              r"x-men|avengers|justice league|fantastic four|"
                              r"iron man|captain america|thor \(|hulk|wonder woman|"
                              r"aquaman|the flash|green lantern|deadpool|wolverine|"
                              r"guardians of the galaxy|ant-man|black panther|"
                              r"doctor strange|shazam|teen titans|hellboy|spawn|"
                              r"ninja turtles|power rangers", re.I)
    for art, info in harvest4.items():
        if art.startswith("_"):
            continue
        if "Superhero" not in info.get("tags", []):
            continue
        cats = info.get("cats", [])
        if any("superhero" in c.lower() for c in cats) or \
                any(FRANCHISE_RE.search(c) for c in cats):
            superhero_articles_strong.add(art)
    superhero_titles = {}
    for art in superhero_articles_strong:
        superhero_titles.setdefault(norm_title(display_title(art)), set()).add(art)

    neonoir_by_key = {}
    for article, yr, disp in neonoir_list:
        neonoir_by_key[(norm_title(disp), yr)] = article
        neonoir_by_key.setdefault((norm_title(display_title(article)), yr), article)

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

    def tags_for(m):
        tags = set()
        all_cats = cats_of(m) + harvest3_cats_of(m)
        for tag, rx in CAT_RULES:
            if any(rx.search(c) for c in all_cats):
                tags.add(tag)
        a = film_article.get(m["id"])
        if a and a in superhero_articles_strong:
            tags.add("Superhero")
        if a and "Documentary" in (harvest4.get(a, {}).get("tags") or []):
            tags.add("Documentary")
        if (norm_title(m["title"]), m["year"]) in neonoir_by_key or \
                (norm_title(m["title"]), m["year"] - 1) in neonoir_by_key or \
                (norm_title(m["title"]), m["year"] + 1) in neonoir_by_key:
            tags.add("Neo-Noir")
        # derived labels
        g = set(m["genres"])
        if "Animation" in g:
            tags.add("Animated")
        if "Horror" in g and "Thriller" in g:
            tags.add("Horror Thriller")
        if "Family" in g and "Drama" in g:
            tags.add("Family Drama")
        # core-tier heuristics (no category evidence needed, conservative)
        if m["tier"] == "core":
            v = m["vector"]
            if ("Thriller" in g or "Mystery" in g) and v.get("brainy", 0) >= 7 \
                    and v.get("dark", 0) >= 5:
                tags.add("Psychological Thriller")
            if ("Comedy" in g and v.get("romantic", 0) >= 7) or \
                    ("Romance" in g and v.get("funny", 0) >= 7):
                tags.add("Rom-Com")
            if norm_title(m["title"]) in superhero_titles:
                tags.add("Superhero")
        return tags

    for m in movies:
        tags = tags_for(m)
        if "Drama" in m["genres"] and m["year"] >= 2000 and \
                "Historical Drama" not in tags:
            tags.add("Modern Drama")
        extra = [t for t in NEW_TAG_ORDER if t in tags and t not in m["genres"]]
        m["genres"] = (m["genres"] + extra)[:8]

    counts = Counter()
    for m in movies:
        for g in m["genres"]:
            counts[g] += 1
    print("counts after retag:", {g: counts[g] for g in TAXONOMY_17}, flush=True)

    # ---------- 4. Additions ----------
    existing_articles = set(film_article.values())
    existing_keys = {(norm_title(m["title"]), m["year"]) for m in movies}
    used_ids = {m["id"] for m in movies}

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

    CURATED_DOCS = {norm_title(t) for t in [
        "An Inconvenient Truth", "March of the Penguins", "Fahrenheit 9/11",
        "Bowling for Columbine", "Super Size Me", "Man on Wire",
        "The Act of Killing", "Amy", "Senna", "Searching for Sugar Man",
        "Blackfish", "Free Solo", "Won't You Be My Neighbor?",
        "They Shall Not Grow Old", "Apollo 11", "Summer of Soul",
        "Fire of Love", "Navalny", "20 Days in Mariupol", "Icarus",
        "My Octopus Teacher", "13th", "RBG", "Three Identical Strangers",
        "Honeyland", "Collective", "Flee", "American Factory", "Crip Camp",
        "Dick Johnson Is Dead", "I Am Not Your Negro", "Citizenfour",
        "The Look of Silence", "Exit Through the Gift Shop", "Inside Job",
        "The Cove", "Hoop Dreams", "Roger & Me", "The Thin Blue Line",
        "Paris Is Burning", "Crumb", "Grizzly Man", "Touching the Void",
        "Capturing the Friedmans", "Spellbound", "The Fog of War",
        "Enron: The Smartest Guys in the Room", "Taxi to the Dark Side",
        "Food, Inc.", "The King of Kong", "Jesus Camp", "Anvil! The Story of Anvil",
        "Cave of Forgotten Dreams", "The Imposter", "Stories We Tell",
        "The Square", "Virunga", "Going Clear", "Kurt Cobain: Montage of Heck",
        "Jim & Andy: The Great Beyond", "Miss Americana", "Becoming",
        "Amazing Grace", "Woodstock", "Gimme Shelter", "Monterey Pop",
        "Dont Look Back", "Grey Gardens", "Harlan County, USA",
        "Hearts and Minds", "Sans Soleil", "Night and Fog",
        "The Sorrow and the Pity", "Primary", "All the Beauty and the Bloodshed",
        "Still: A Michael J. Fox Movie", "The Social Dilemma", "Time",
        "Leviathan", "Pina", "Born into Brothels", "Winged Migration",
        "Control Room", "Standard Operating Procedure", "It Might Get Loud",
        "Winter on Fire: Ukraine's Fight for Freedom", "The Beatles: Eight Days a Week",
        "Shine a Light", " OJ: Made in America", "O.J.: Made in America",
        "Won't You Be My Neighbor", "The Last Dance",
    ]}

    def candidate_year(article, info_cats):
        for c in info_cats or []:
            mm = re.search(r"\b(19\d{2}|20\d{2})\b", c)
            if mm:
                return int(mm.group(1))
        mm = re.search(r"\((\d{4}) film\)", article)
        return int(mm.group(1)) if mm else None

    def enrich_batch(cands):
        """cands: list of dicts {article, year_hint, genres, tags}.
        Returns list of new movie entries (poster required)."""
        arts = [c["article"] for c in cands]
        L.fetch_wikitext(arts)
        cache = L.fetch_summaries(arts)
        fetch_categories_into(article_cats, arts)
        wiki = L.wikitext_cache()
        out = []
        for c in cands:
            art = c["article"]
            info = cache.get(art)
            if not info or info.get("dead"):
                continue
            extract = info.get("extract", "")
            ey, _, edirector, is_film = parse_extract(extract)
            if not is_film:
                continue
            acats = article_cats.get(art, [])
            if any(cat_is_indian_production(x) for x in acats) or \
                    extract_is_indian(extract):
                continue
            year = c["year_hint"] or ey
            if year is None or not (1920 <= year <= 2026):
                continue
            if ey is not None and abs(ey - year) > 2:
                continue
            dw, rt, _img = wiki.get(art, ("", None, ""))
            director = dw or edirector or "Unknown"
            poster = L.poster_for_article(art, info.get("poster", ""))
            if not poster:
                continue
            title = display_title(art)
            key = (norm_title(title), year)
            if key in existing_keys:
                continue
            genres = list(c["genres"])
            for t in c.get("tags", []):
                if t not in genres:
                    genres.append(t)
            if "Drama" in genres and year >= 2000 and \
                    "Historical Drama" not in genres and len(genres) < 8:
                genres.append("Modern Drama")
            if "Animation" in genres and "Animated" not in genres and len(genres) < 8:
                genres.append("Animated")
            if "Horror" in genres and "Thriller" in genres and \
                    "Horror Thriller" not in genres and len(genres) < 8:
                genres.append("Horror Thriller")
            if "Family" in genres and "Drama" in genres and \
                    "Family Drama" not in genres and len(genres) < 8:
                genres.append("Family Drama")
            mid = slug_for(title, year)
            desc = L.clean_extract_description(
                extract, f"A {year} film directed by {director}."
                if director != "Unknown" else f"A {year} film.")
            kw = [f"{year // 10 * 10}s"] + \
                [g.lower() for g in genres[:2]] + ["catalog"]
            out.append({
                "id": mid, "title": title, "year": year, "director": director,
                "genres": genres[:8], "runtime": rt, "rating": "",
                "description": desc, "vector": make_vector(genres[:4], mid),
                "keywords": list(dict.fromkeys(kw)), "poster": poster,
                "tier": "catalog",
            })
            existing_keys.add(key)
            existing_articles.add(art)
            film_article[mid] = art
        return out

    additions = []

    def run_pool(name, cands, genre, target):
        have = sum(1 for m in movies + additions if genre in m["genres"])
        if have >= target:
            print(f"pool {name}: already at {have} >= {target}", flush=True)
            return
        got = 0
        for i in range(0, len(cands), 60):
            if have + got >= target:
                break
            new = enrich_batch(cands[i:i + 60])
            additions.extend(new)
            got += sum(1 for m in new if genre in m["genres"])
        print(f"pool {name}: +{got} (genre {genre} now "
              f"{sum(1 for m in movies + additions if genre in m['genres'])})",
              flush=True)

    # 4a. Documentary
    doc_cands = []
    for art, info in harvest4.items():
        if art.startswith("_") or art in existing_articles:
            continue
        if "Documentary" not in info.get("tags", []):
            continue
        title = display_title(art)
        yr = candidate_year(art, info.get("cats"))
        prio = 0 if "OscarDoc" in info["tags"] else \
            1 if norm_title(title) in CURATED_DOCS else 2
        doc_cands.append({"article": art, "year_hint": yr,
                          "genres": ["Documentary"], "tags": [],
                          "_prio": prio, "_yr": yr or 0})
    doc_cands.sort(key=lambda c: (c["_prio"], -c["_yr"]))
    run_pool("documentary", doc_cands, "Documentary", 235)

    # 4b. Superhero
    sh_cands = []
    for art in sorted(superhero_articles_strong):
        if art in existing_articles:
            continue
        yr = candidate_year(art, harvest4.get(art, {}).get("cats"))
        sh_cands.append({"article": art, "year_hint": yr,
                         "genres": ["Superhero", "Action"], "tags": [],
                         "_yr": yr or 0})
    sh_cands.sort(key=lambda c: -c["_yr"])
    run_pool("superhero", sh_cands, "Superhero", 215)

    # 4c. Neo-noir list additions
    nn_cands = []
    for article, yr, disp in neonoir_list:
        if article in existing_articles:
            continue
        if (norm_title(disp), yr) in existing_keys:
            continue
        nn_cands.append({"article": article, "year_hint": yr,
                         "genres": ["Neo-Noir", "Crime", "Thriller"],
                         "tags": [], "_yr": yr or 0})
    nn_cands.sort(key=lambda c: -c["_yr"])
    run_pool("neo-noir", nn_cands, "Neo-Noir", 230)

    # 4d. Top-ups from the v3 harvest pool
    def pool_from_harvest3(pred, genres_for, tag):
        cands = []
        for art, info in harvest3.items():
            if art in existing_articles:
                continue
            if not pred(info):
                continue
            years = info.get("years") or []
            yr = max(years) if years else None
            base = sorted(info["genres"],
                          key=lambda g: GENRE_PRIORITY.index(g)
                          if g in GENRE_PRIORITY else 99)[:3]
            cands.append({"article": art, "year_hint": yr,
                          "genres": genres_for(base), "tags": [tag],
                          "_yr": yr or 0})
        cands.sort(key=lambda c: -c["_yr"])
        return cands

    run_pool("psych-thriller",
             pool_from_harvest3(
                 lambda i: any("psychological thriller" in c for c in i["cats"]),
                 lambda b: b, "Psychological Thriller"),
             "Psychological Thriller", 215)
    run_pool("rom-com",
             pool_from_harvest3(
                 lambda i: any("romantic comedy" in c for c in i["cats"]),
                 lambda b: b, "Rom-Com"),
             "Rom-Com", 215)
    run_pool("historical-drama",
             pool_from_harvest3(
                 lambda i: any("historical drama" in c for c in i["cats"]),
                 lambda b: b, "Historical Drama"),
             "Historical Drama", 215)
    run_pool("family-drama",
             pool_from_harvest3(
                 lambda i: "Family" in i["genres"] and "Drama" in i["genres"],
                 lambda b: b, "Family Drama"),
             "Family Drama", 210)

    movies = movies + additions
    stats["additions"] = len(additions)
    print(f"additions total: {len(additions)}; catalog now {len(movies)}", flush=True)

    # ---------- 5. Description upgrade (catalog tier) ----------
    upgraded = 0
    for m in movies:
        if m["tier"] != "catalog":
            continue
        a = film_article.get(m["id"])
        info = summaries.get(a) if a else None
        if not info or not info.get("extract"):
            continue
        new_desc = L.clean_extract_description(info["extract"], m["description"])
        if new_desc != m["description"]:
            m["description"] = new_desc
            upgraded += 1
    stats["descriptions_upgraded"] = upgraded
    print(f"descriptions upgraded: {upgraded}", flush=True)

    # ---------- 6. Poster pass ----------
    posterless = [m for m in movies if not m["poster"] and film_article.get(m["id"])]
    arts = sorted({film_article[m["id"]] for m in posterless})
    print(f"poster pass over {len(posterless)} films / {len(arts)} articles",
          flush=True)
    L.fetch_wikitext(arts)
    wiki = L.wikitext_cache()
    fnames = [wiki[a][2] for a in arts if wiki.get(a) and wiki[a][2]]
    urls = L.resolve_file_urls(fnames)
    verdicts = L.verify_urls(list(urls.values()))
    gained = 0
    url_by_article = {}
    for a in arts:
        img = wiki.get(a, ("", None, ""))[2]
        u = urls.get(img, "") if img else ""
        if u and verdicts.get(u):
            url_by_article[a] = u
    for m in posterless:
        u = url_by_article.get(film_article[m["id"]], "")
        if u:
            m["poster"] = u
            gained += 1
    stats["posters_gained"] = gained
    cov = sum(1 for m in movies if m["poster"]) / len(movies)
    print(f"posters gained: {gained}; coverage now {cov:.3f}", flush=True)

    # ---------- 7. Prune to >= 90.5% ----------
    def coverage():
        return sum(1 for m in movies if m["poster"]) / max(1, len(movies))

    def genre_counts():
        c = Counter()
        for m in movies:
            for g in m["genres"]:
                c[g] += 1
        return c

    # Single pass, most-obscure first: unknown director, no runtime,
    # surplus-genre membership, older — while keeping every genre at or
    # above GENRE_FLOOR and stopping as soon as coverage clears 90.5%.
    counts = genre_counts()
    total_posters = sum(1 for m in movies if m["poster"])
    total = len(movies)
    cands = [m for m in movies
             if m["tier"] == "catalog" and not m["poster"]
             and m["id"] not in top20_ids]
    cands.sort(key=lambda m: (
        0 if m["director"] and m["director"] != "Unknown" else 1,
        0 if m["runtime"] else 1,
        min(counts[g] for g in m["genres"]),
        -m["year"],
    ), reverse=True)
    drop_ids = set()
    for m in cands:
        if total_posters / max(1, total) >= 0.905:
            break
        if any(counts[g] <= GENRE_FLOOR for g in m["genres"]):
            continue  # critical to a genre floor
        drop_ids.add(m["id"])
        for g in m["genres"]:
            counts[g] -= 1
        total -= 1
    if drop_ids:
        movies = [m for m in movies if m["id"] not in drop_ids]
    pruned = len(drop_ids)
    stats["pruned_no_poster"] = pruned
    print(f"pruned {pruned}; final coverage {coverage():.3f}", flush=True)

    # ---------- 8. Emit ----------
    counts = genre_counts()
    stats["final_total"] = len(movies)
    stats["poster_pct"] = round(100 * coverage(), 1)
    stats["genre_counts"] = dict(counts.most_common())
    stats["modern_pct"] = round(
        100 * sum(1 for m in movies if m["year"] >= 2000) / len(movies), 1)
    stats["movies_js_bytes"] = 0

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
    L.save_json(f"{V4}/stats.json", stats)
    print(json.dumps(stats, indent=1), flush=True)


if __name__ == "__main__":
    main()
