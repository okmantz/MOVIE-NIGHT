# -*- coding: utf-8 -*-
"""Build js/shows.js — the Movie Night TV dataset (v6).

Pipeline (all facts from Wikipedia, nothing invented):
  1. Candidates: hand-curated CORE list (tools/shows_core.py) + titles
     harvested from streaming "original programming" list pages and
     TV genre/decade category trees on English Wikipedia.
  2. Enrichment: one batched API pass (lead extract, page image,
     categories, article length) + one batched wikitext pass that parses
     the infobox for creator / network / seasons / episodes / air dates.
  3. Filters: real article substance (length + extract), a mapped genre,
     a known start year, and the standing exclusion of Indian
     productions (category / infobox-country evidence).
  4. Posters: every candidate poster URL is verified live (HTTP 200/206
     + image content type) before it is written into the dataset.
  5. Vectors: hand-set for core icons; genre-baseline estimates with a
     deterministic per-title jitter for the rest (documented in README).

Run:  python3 tools/build_shows.py
Out:  js/shows.js  (+ a build report on stdout)
"""
import concurrent.futures
import hashlib
import json
import os
import re
import sys
import threading
import time

import requests

sys.path.insert(0, 'tools')
from shows_core import CORE  # noqa: E402

API = 'https://en.wikipedia.org/w/api.php'
UA = {'User-Agent': 'MovieNightBuild/6.0 (personal project; contact via github.com/okmantz)'}
_TL = threading.local()
CACHE_DIR = '.build'
os.makedirs(CACHE_DIR, exist_ok=True)


def _session():
    if not hasattr(_TL, 's'):
        _TL.s = requests.Session()
        _TL.s.headers.update(UA)
    return _TL.s


def cache_load(name):
    p = os.path.join(CACHE_DIR, name)
    if os.path.exists(p):
        try:
            with open(p) as fh:
                return json.load(fh)
        except Exception:
            return None
    return None


def cache_save(name, obj):
    with open(os.path.join(CACHE_DIR, name), 'w') as fh:
        json.dump(obj, fh)

AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]

TOTAL_CAP = 780           # hard ceiling for the shipped dataset
MIN_ARTICLE_LEN = 2600    # catalog notability bar (bytes of wikitext)
MIN_EXTRACT = 140         # catalog description bar (chars)


def api(params, tries=4):
    params = dict(params, format='json', formatversion='2')
    for i in range(tries):
        try:
            r = _session().get(API, params=params, timeout=(8, 25))
            if r.status_code == 200:
                return r.json()
            time.sleep(1 * (i + 1))
        except Exception:
            time.sleep(1 * (i + 1))
    return {}


def batches(seq, n):
    for i in range(0, len(seq), n):
        yield seq[i:i + n]


# ---------------- harvest ----------------

LIST_PAGES = [
    "List of Netflix original programming",
    "List of HBO original programming",
    "List of Max original programming",
    "List of Amazon Prime Video original programming",
    "List of Apple TV+ original programming",
    "List of Hulu original programming",
    "List of Disney+ original programming",
    "List of Paramount+ original programming",
    "List of Peacock original programming",
    "List of programs broadcast by AMC",
    "List of programs broadcast by FX",
    "List of programs broadcast by Showtime",
    "List of programs broadcast by Starz",
    "List of programs broadcast by Syfy",
    "List of programs broadcast by USA Network",
]

CATEGORY_ROOTS = [
    "Netflix original programming",
    "American drama television series",
    "American comedy television series",
    "American science fiction television series",
    "American horror television series",
    "American crime television series",
    "American animated television series",
    "American documentary television series",
    "American thriller television series",
    "American fantasy television series",
    "American mystery television series",
    "American action television series",
    "American adventure television series",
    "American romance television series",
    "British drama television series",
    "British comedy television series",
    "British crime television series",
    "2020s American television series",
    "2010s American television series",
    "2000s American television series",
    "1990s American television series",
    "1980s American television series",
    "2020s South Korean television series",
    "2010s South Korean television series",
    "American television miniseries",
    "Superhero television series",
    "American web television series",
    "Documentary television series",
    "British documentary television series",
]


CAT_CALLS = [0]
CAT_CALL_CAP = 700


def category_members(cat_title, depth, seen_cats, out, depth_limit=2):
    """Collect page titles under a category (recursive over subcats)."""
    if cat_title in seen_cats or depth > depth_limit:
        return
    if CAT_CALLS[0] >= CAT_CALL_CAP:
        return
    CAT_CALLS[0] += 1
    if CAT_CALLS[0] % 50 == 0:
        print(f'    …category calls {CAT_CALLS[0]}, pool {len(out)}')
    seen_cats.add(cat_title)
    cont = {}
    while True:
        p = {'action': 'query', 'list': 'categorymembers',
             'cmtitle': 'Category:' + cat_title, 'cmlimit': '500',
             'cmtype': 'page|subcat'}
        p.update(cont)
        d = api(p)
        for m in d.get('query', {}).get('categorymembers', []):
            if m['ns'] == 0:
                out.add(m['title'])
            elif m['ns'] == 14:
                category_members(m['title'].replace('Category:', ''),
                                 depth + 1, seen_cats, out, depth_limit)
        cont = d.get('continue') or {}
        if not cont:
            break


def list_page_links(page):
    out = set()
    cont = {}
    while True:
        p = {'action': 'query', 'prop': 'links', 'titles': page,
             'pllimit': '500', 'plnamespace': '0'}
        p.update(cont)
        d = api(p)
        pages = d.get('query', {}).get('pages', [])
        if not pages or pages[0].get('missing'):
            return out
        for lnk in pages[0].get('links', []):
            out.add(lnk['title'])
        cont = d.get('continue') or {}
        if not cont:
            break
    return out


def harvest():
    cached = cache_load('shows_pool.json')
    if cached:
        print(f'  harvest from cache: {len(cached)} titles')
        return set(cached)
    titles = set()
    for page in LIST_PAGES:
        got = list_page_links(page)
        print(f'  list {page}: {len(got)} links')
        titles |= got
    seen_cats = set()
    for root in CATEGORY_ROOTS:
        before = len(titles)
        category_members(root, 0, seen_cats, titles, depth_limit=1)
        print(f'  cat {root}: +{len(titles) - before} (total {len(titles)})')
    bad = re.compile(r'^(List of|Category:|Wikipedia:|Template:)')
    titles = {t for t in titles
              if not bad.match(t) and '(disambiguation)' not in t}
    cache_save('shows_pool.json', sorted(titles))
    return titles


# ---------------- enrichment ----------------

def _enrich_chunk(chunk):
    d = api({'action': 'query', 'prop': 'extracts|pageimages|categories|info',
             'titles': '|'.join(chunk), 'exintro': '1', 'explaintext': '1',
             'piprop': 'original', 'pithumbsize': '500', 'redirects': '1',
             'cllimit': '500', 'exlimit': 'max'})
    if not d.get('query', {}).get('pages') and len(chunk) > 1:
        # One poison title must not kill the whole chunk: bisect.
        out = {}
        mid = len(chunk) // 2
        out.update(_enrich_chunk(chunk[:mid]))
        out.update(_enrich_chunk(chunk[mid:]))
        return out
    out = {}
    norm = {n['from']: n['to'] for n in d.get('query', {}).get('normalized', [])}
    redir = {n['from']: n['to'] for n in d.get('query', {}).get('redirects', [])}
    for pg in d.get('query', {}).get('pages', []):
        if pg.get('missing'):
            continue
        cats = [c['title'].replace('Category:', '')
                for c in pg.get('categories', [])]
        out[pg['title']] = {
            'extract': (pg.get('extract') or '').strip(),
            'poster': (pg.get('original') or {}).get('source', ''),
            'thumb': (pg.get('thumbnail') or {}).get('source', ''),
            'cats': cats,
            'length': pg.get('length', 0),
        }
    # Categories truncate at cllimit across the whole 20-title response;
    # follow clcontinue until every page's categories are complete,
    # otherwise genre mapping silently starves.
    cont = d.get('continue') or {}
    hops = 0
    while cont.get('clcontinue') and hops < 6:
        hops += 1
        d2 = api({'action': 'query', 'prop': 'categories',
                  'titles': '|'.join(chunk), 'cllimit': '500',
                  'clcontinue': cont['clcontinue']})
        for pg in d2.get('query', {}).get('pages', []):
            if pg['title'] in out:
                extra = [c['title'].replace('Category:', '')
                         for c in pg.get('categories', [])]
                for c in extra:
                    if c not in out[pg['title']]['cats']:
                        out[pg['title']]['cats'].append(c)
        cont = d2.get('continue') or {}
    for src, dst in list(norm.items()) + list(redir.items()):
        if dst in out and src not in out:
            out[src] = out[dst]
    return out


def enrich(titles):
    """Batched + parallel: lead extract, page image, categories, length.
    Results are cached to .build/ so a rerun never redoes finished work."""
    info = cache_load('shows_enrich.json') or {}
    todo = [t for t in sorted(titles) if t not in info]
    print(f'  enrich: {len(info)} cached, {len(todo)} to fetch')
    chunks = list(batches(todo, 20))
    done = [0]
    lock = threading.Lock()

    def work(chunk):
        got = _enrich_chunk(chunk)
        with lock:
            info.update(got)
            done[0] += 1
            if done[0] % 25 == 0:
                cache_save('shows_enrich.json', info)
                print(f'  enriched {len(info)}')
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
        list(ex.map(work, chunks))
    cache_save('shows_enrich.json', info)
    print(f'  enriched total {len(info)}')
    return info


def clean_wiki(v):
    if not v:
        return ''
    # Preserve machine-readable dates BEFORE generic template stripping:
    # {{Start date|2019|10|20}} -> 2019, {{nowrap|6}} -> 6. Without this,
    # modern infoboxes lose their years/season counts entirely.
    v = re.sub(r'\{\{\s*(?:Start date|End date|start date|end date)\s*\|\s*(\d{4})[^}]*\}\}', r'\1', v)
    v = re.sub(r'\{\{\s*nowrap\s*\|([^}]*)\}\}', r'\1', v)
    v = re.sub(r'<!--.*?-->', ' ', v, flags=re.S)
    v = re.sub(r'<ref[^>/]*/>', ' ', v)
    v = re.sub(r'<ref[^>]*>.*?</ref>', ' ', v, flags=re.S)
    v = re.sub(r'\{\{[^{}]*\}\}', ' ', v)
    v = re.sub(r'\{\{.*?\}\}', ' ', v, flags=re.S)
    v = re.sub(r'\[\[(?:[^\]|]*\|)?([^\]]*)\]\]', r'\1', v)
    v = re.sub(r'<[^>]+>', ' ', v)
    v = v.replace("'''", '').replace("''", '')
    return re.sub(r'\s+', ' ', v).strip(' ,;')


def parse_infobox(wikitext):
    if not wikitext:
        return {}
    m = re.search(r'\{\{\s*[Ii]nfobox[^}]*', wikitext)
    start = None
    for pat in (r'\{\{\s*Infobox television', r'\{\{\s*Infobox TV',
                r'\{\{\s*Infobox program'):
        mm = re.search(pat, wikitext)
        if mm:
            start = mm.start()
            break
    if start is None:
        return {}
    # Take the full infobox by brace-depth matching (a naive "\n}}"
    # cut truncates infoboxes whose field values contain templates).
    block = wikitext[start:start + 24000]
    depth, cut = 0, len(block)
    for i in range(len(block) - 1):
        two = block[i:i + 2]
        if two == '{{':
            depth += 1
        elif two == '}}':
            depth -= 1
            if depth == 0:
                cut = i + 2
                break
    block = block[:cut]
    fields = {}
    for line in block.split('\n'):
        mm = re.match(r'\s*\|\s*([a-z_0-9]+)\s*=\s*(.*)$', line)
        if mm:
            key, val = mm.group(1), mm.group(2)
            if key not in fields or not fields[key]:
                fields[key] = val
            else:
                fields[key] += ' ' + val
    return {k: clean_wiki(v) for k, v in fields.items()}


def _infobox_chunk(chunk):
    d = api({'action': 'query', 'prop': 'revisions',
             'titles': '|'.join(chunk), 'rvprop': 'content',
             'rvslots': 'main', 'redirects': '1'})
    if not d.get('query', {}).get('pages') and len(chunk) > 1:
        out = {}
        mid = len(chunk) // 2
        out.update(_infobox_chunk(chunk[:mid]))
        out.update(_infobox_chunk(chunk[mid:]))
        return out
    out = {}
    for pg in d.get('query', {}).get('pages', []):
        if pg.get('missing'):
            continue
        revs = pg.get('revisions') or []
        wt = revs[0].get('slots', {}).get('main', {}).get('content', '') if revs else ''
        out[pg['title']] = parse_infobox(wt)
    norm = {n['from']: n['to'] for n in d.get('query', {}).get('normalized', [])}
    redir = {n['from']: n['to'] for n in d.get('query', {}).get('redirects', [])}
    for src, dst in list(norm.items()) + list(redir.items()):
        if dst in out and src not in out:
            out[src] = out[dst]
    return out


def infoboxes(titles):
    out = cache_load('shows_boxes.json') or {}
    todo = [t for t in sorted(titles) if t not in out]
    print(f'  infoboxes: {len(out)} cached, {len(todo)} to fetch')
    chunks = list(batches(todo, 50))
    done = [0]
    lock = threading.Lock()

    def work(chunk):
        got = _infobox_chunk(chunk)
        with lock:
            out.update(got)
            done[0] += 1
            if done[0] % 25 == 0:
                cache_save('shows_boxes.json', out)
                print(f'  infoboxes {len(out)}')
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
        list(ex.map(work, chunks))
    cache_save('shows_boxes.json', out)
    print(f'  infoboxes total {len(out)}')
    return out


def first_int(v):
    if not v:
        return None
    m = re.search(r'\d+', v.replace(',', ''))
    return int(m.group()) if m else None


def years_from(v):
    if not v:
        return []
    return [int(y) for y in re.findall(r'(19\d\d|20\d\d)', v)]


def short_field(v, limit=60):
    if not v:
        return None
    v = v.split('<br')[0]
    parts = [p.strip() for p in re.split(r',(?![^()]*\))', v) if p.strip()]
    if not parts:
        return None
    out = parts[0]
    return out[:limit] if len(out) <= limit else None


# ---------------- genres / vectors ----------------

GENRE_RULES = [
    ('psychological thriller', ['Psychological Thriller', 'Thriller']),
    ('romantic comedy', ['Rom-Com', 'Comedy', 'Romance']),
    ('science fiction', ['Sci-Fi']),
    ('sci-fi', ['Sci-Fi']),
    ('horror', ['Horror']),
    ('superhero', ['Superhero', 'Action']),
    ('documentary', ['Documentary']),
    ('docuseries', ['Documentary', 'Docuseries']),
    ('animated', ['Animation']),
    ('animation', ['Animation']),
    ('anime', ['Animation', 'Animated']),
    ('fantasy', ['Fantasy']),
    ('western', ['Western']),
    ('mystery', ['Mystery']),
    ('crime', ['Crime']),
    ('thriller', ['Thriller']),
    ('romance', ['Romance']),
    ('romantic', ['Romance']),
    ('adventure', ['Adventure']),
    ('action', ['Action']),
    ('comedy', ['Comedy']),
    ('sitcom', ['Comedy']),
    ('soap opera', ['Drama']),
    ('children', ['Family']),
    ('family', ['Family']),
    ('reality', ['Reality']),
    ('war', ['War']),
    ('drama', ['Drama']),
]
GENRE_ORDER = ['Horror', 'Sci-Fi', 'Animation', 'Documentary', 'Superhero',
               'Fantasy', 'Crime', 'Comedy', 'Thriller', 'Mystery', 'Action',
               'Adventure', 'Romance', 'Rom-Com', 'Western', 'War',
               'Historical Drama', 'Psychological Thriller', 'Family',
               'Reality', 'Drama', 'Animated', 'Docuseries', 'Family Drama',
               'Horror Thriller']


def genres_from_text(texts):
    found = []
    blob = ' || '.join(texts).lower()
    for needle, gs in GENRE_RULES:
        # word-boundary match: bare substring matching tags "War" from
        # "Award"-containing category names, "Family" from names, etc.
        if re.search(r'\b' + re.escape(needle) + r'\b', blob):
            for g in gs:
                if g not in found:
                    found.append(g)
    return sorted(found, key=lambda g: GENRE_ORDER.index(g)
                  if g in GENRE_ORDER else 99)


BASELINES = {
    'Drama': (3, 8, 0, 2, 5, 6, 3, 4, 2, 1), 'Comedy': (1, 5, 0, 10, 6, 1, 3, 1, 7, 4),
    'Sci-Fi': (5, 9, 1, 2, 3, 5, 1, 8, 1, 6), 'Horror': (4, 5, 10, 1, 1, 9, 0, 3, 0, 5),
    'Thriller': (7, 7, 2, 1, 1, 7, 1, 4, 0, 3), 'Crime': (6, 7, 2, 1, 2, 8, 0, 3, 0, 2),
    'Mystery': (4, 9, 2, 1, 2, 6, 1, 3, 1, 4), 'Romance': (1, 5, 0, 4, 7, 2, 10, 3, 6, 1),
    'Fantasy': (6, 6, 1, 3, 5, 5, 3, 9, 2, 5), 'Animation': (4, 6, 0, 8, 7, 2, 2, 6, 5, 6),
    'Documentary': (2, 9, 0, 1, 4, 3, 0, 7, 4, 2), 'Action': (10, 4, 0, 2, 2, 5, 0, 5, 0, 2),
    'Adventure': (7, 5, 0, 4, 5, 3, 1, 8, 3, 3), 'Superhero': (9, 5, 0, 3, 4, 5, 1, 6, 1, 3),
    'Western': (6, 5, 1, 1, 2, 7, 0, 6, 1, 1), 'War': (7, 7, 2, 0, 2, 8, 0, 8, 0, 0),
    'Reality': (4, 4, 0, 6, 4, 3, 1, 3, 5, 4), 'Family': (2, 4, 0, 7, 9, 0, 3, 3, 9, 2),
    'Rom-Com': (1, 4, 0, 10, 7, 0, 10, 1, 8, 2),
    'Psychological Thriller': (5, 9, 4, 0, 0, 9, 0, 3, 0, 5),
    'Historical Drama': (3, 8, 0, 1, 4, 5, 3, 8, 2, 0),
    'Horror Thriller': (6, 6, 9, 0, 0, 9, 0, 3, 0, 4),
    'Family Drama': (2, 6, 0, 3, 9, 3, 4, 3, 6, 0),
    'Animated': (5, 7, 1, 5, 5, 4, 1, 7, 3, 6),
    'Docuseries': (3, 8, 1, 1, 3, 5, 0, 5, 2, 3),
}


def baseline_vector(genres, title):
    base = list(BASELINES.get(genres[0], BASELINES['Drama']))
    if len(genres) > 1 and genres[1] in BASELINES:
        b2 = BASELINES[genres[1]]
        base = [(a * 2 + b) / 3.0 for a, b in zip(base, b2)]
    h = hashlib.md5(title.encode()).digest()
    out = {}
    for i, axis in enumerate(AXES):
        jitter = (h[i % len(h)] % 3) - 1          # -1, 0, +1
        out[axis] = max(0, min(10, round(base[i] + jitter)))
    return out


def resolve_image_files(names):
    """Infobox `image` filenames -> upload.wikimedia.org URLs via the
    imageinfo API. (pageimages excludes non-free poster art, so — as the
    film pipeline learned in v4 — posters must come from the infobox.)"""
    names = sorted({n for n in names if n and len(n) < 140 and
                    re.search(r'\.(png|jpe?g|svg|webp)$', n, re.I)})
    out = {}

    def work(chunk):
        d = api({'action': 'query', 'prop': 'imageinfo',
                 'titles': '|'.join('File:' + n for n in chunk),
                 'iiprop': 'url'})
        got = {}
        for pg in d.get('query', {}).get('pages', []):
            ii = (pg.get('imageinfo') or [{}])[0]
            if ii.get('url'):
                got[pg['title'].replace('File:', '')] = ii['url']
        return got
    chunks = list(batches(names, 50))
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
        for got in ex.map(work, chunks):
            out.update(got)
    print(f'  resolved {len(out)}/{len(names)} infobox image files')
    return out


def verify_posters(urls):
    def check(u):
        try:
            r = requests.get(u, headers=dict(UA, Range='bytes=0-4095'),
                             timeout=15, stream=True)
            ok = r.status_code in (200, 206) and 'image' in r.headers.get('Content-Type', '')
            r.close()
            return u, ok
        except Exception:
            return u, False
    good = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
        for u, ok in ex.map(check, urls):
            good[u] = ok
    return good


# ---------------- build ----------------

TOP_SERIES = [
    ("tv-breaking-bad", "The ceiling for TV drama — a good man rotting in real time, engineered like a trap."),
    ("tv-the-sopranos", "The show that invented prestige TV; therapy, family and the mob in one long American sigh."),
    ("tv-the-wire", "A novel for television about a city and every institution failing it. The critics' consensus pick."),
    ("tv-dark", "Netflix's German time-travel labyrinth — the most carefully plotted series ever made."),
    ("tv-better-call-saul", "A prequel that outran its parent: funnier, sadder and more precise than almost anything since."),
    ("tv-chernobyl", "Five episodes, no fat — dread, lies and the cost of truth, told perfectly."),
    ("tv-true-detective", "Season one is a standalone occult-noir masterpiece; the anthology keeps swinging."),
    ("tv-fargo", "The Coens' snowbound morality plays, retold fresh every season and nearly always superb."),
    ("tv-the-office", "The most rewatchable comedy ever made — cringe on the surface, all heart underneath."),
    ("tv-fleabag", "Two perfect seasons: filthy, funny and quietly devastating in twelve half-hours."),
    ("tv-succession", "Shakespeare in boardrooms — the sharpest dialogue of the streaming era."),
    ("tv-arcane", "Animation as high art: a sisters-and-cities tragedy that looks like nothing else."),
    ("tv-avatar-the-last-airbender", "A kids' show with the structure and soul of a great epic novel."),
    ("tv-shogun", "Feudal Japan rendered at blockbuster scale with a novelist's patience."),
    ("tv-the-last-of-us", "The video-game adaptation that reset the bar — survival horror with a breaking heart."),
    ("tv-severance", "The workplace dystopia of the moment; every episode ends on a hook you can't shake."),
    ("tv-mad-men", "Sixty-nine episodes of beautiful, bruising character study in a changing America."),
    ("tv-planet-earth-ii", "Nature documentary at its absolute peak — the iguana vs. snakes sequence alone earns its place."),
    ("tv-ted-lasso", "Kindness as a competitive strategy; the feel-good show that actually earns it."),
    ("tv-stranger-things", "The streaming era's defining blockbuster series — Spielberg heart, King dread."),
]


def slugify(t):
    t = t.lower().replace("'", '').replace('’', '')
    t = re.sub(r'[^a-z0-9]+', '-', t).strip('-')
    return t


def display_title(wiki):
    t = re.sub(r'\s*\([^)]*(TV series|television series|web series|miniseries)[^)]*\)\s*$', '', wiki)
    t = re.sub(r'\s*\(film\)\s*$', '', t)
    return t.strip()


def trim_desc(x, limit=400):
    x = re.sub(r'\s+', ' ', x).strip()
    if len(x) <= limit:
        return x
    cut = x[:limit]
    dot = cut.rfind('. ')
    return cut[:dot + 1] if dot > 120 else cut.rsplit(' ', 1)[0] + '…'


def creator_field(v):
    if not v:
        return None
    parts = [p.strip() for p in re.split(r',(?![^()]*\))', v) if p.strip()]
    if not parts:
        return None
    out = ', '.join(parts[:2])
    return out if len(out) <= 70 else None


def is_indian(cats, fields):
    blob = ' '.join(cats).lower()
    if 'indian television' in blob or 'television series in india' in blob \
            or 'indian web series' in blob or 'indian television series' in blob:
        return True
    country = (fields.get('country') or '').strip().lower()
    return country.startswith('india')


def make_record(wiki, core, enr, fields):
    title = display_title(wiki)
    fa = years_from(fields.get('first_aired', ''))
    la_raw = fields.get('last_aired', '')
    la = years_from(la_raw)
    start = fa[0] if fa else None
    if start is None:
        m = re.search(r'\((\d{4})', wiki)
        start = int(m.group(1)) if m else None
    if start is None and enr and core:
        # Core only: a lead-extract year is a last-resort fallback for
        # hand-verified series. For catalog entries an extract year is
        # NOT evidence (an author bio's birth year passed as a "series"
        # in an early run) — catalog years come from the infobox/title.
        m = re.search(r'\b(19\d\d|20\d\d)\b', enr['extract'][:160])
        start = int(m.group(1)) if m else None
    end = None
    status = None
    if la:
        end, status = max(la), 'Ended'
    elif start:
        status = 'Running' if ('present' in la_raw.lower() or not la_raw) else None
    if end and start and end < start:
        end = start
    genres = list(core[1]) if core else genres_from_text(
        (enr['cats'] if enr else []) + [fields.get('genre', '')])
    if not genres:
        return None
    network = short_field(fields.get('network') or fields.get('original_network'))
    rec = {
        'id': 'tv-' + slugify(title),
        'title': title,
        'startYear': start,
        'endYear': end,
        'creator': creator_field(fields.get('creator') or fields.get('showrunner')),
        'genres': genres,
        'seasons': first_int(fields.get('num_seasons')),
        'episodes': first_int(fields.get('num_episodes')),
        'status': status,
        'network': network,
        'rating': core[4] if core else None,
        'description': trim_desc(enr['extract']) if enr else '',
        'vector': ({a: core[3][i] for i, a in enumerate(AXES)} if core and core[3]
                   else baseline_vector(genres, title)),
        'keywords': list(core[2]) if core else
                    [g.lower() for g in genres[:2]] +
                    ([network.lower()] if network else []) + ['series'],
        'poster': '',
        'tier': 'core' if core else 'catalog',
        '_img': fields.get('image', ''),
        '_poster_try': (enr or {}).get('poster', ''),
        '_thumb': (enr or {}).get('thumb', ''),
        '_length': (enr or {}).get('length', 0),
    }
    return rec


def main():
    core_map = {c[0]: c for c in CORE}
    print(f'core titles: {len(core_map)}')
    print('harvesting…')
    harvested = harvest()
    print(f'harvested candidates: {len(harvested)}')
    all_titles = set(core_map) | harvested
    print(f'total to enrich: {len(all_titles)}')
    enr = enrich(all_titles)
    # Repair passes: parallel chunks occasionally fail wholesale under
    # load; refetch only what is still missing until it stops shrinking.
    for attempt in range(3):
        missing = [t for t in all_titles if t not in enr]
        if not missing:
            break
        print(f'  enrich repair {attempt + 1}: {len(missing)} missing')
        enr.update(enrich(set(missing)))
    boxes = infoboxes([t for t in all_titles if t in enr])
    for attempt in range(3):
        missing = [t for t in all_titles if t in enr and t not in boxes]
        if not missing:
            break
        print(f'  infobox repair {attempt + 1}: {len(missing)} missing')
        boxes.update(infoboxes(set(missing)))

    records, missing_core, dropped = [], [], {'indian': 0, 'thin': 0, 'nogenre': 0, 'noyear': 0, 'nobox': 0}
    for wiki in sorted(all_titles):
        core = core_map.get(wiki)
        e = enr.get(wiki)
        if e is None:
            if core:
                missing_core.append(wiki)
            continue
        f = boxes.get(wiki, {})
        if is_indian(e['cats'], f):
            dropped['indian'] += 1
            continue
        rec = make_record(wiki, core, e, f)
        if rec is None:
            dropped['nogenre'] += 1
            continue
        if not core:
            if not f:
                # No television infobox -> not evidenced as a series
                # (author pages, franchises and films slip into list
                # pages; this is the guard that keeps them out).
                dropped['nobox'] += 1
                continue
            if e['length'] < MIN_ARTICLE_LEN or len(rec['description']) < MIN_EXTRACT:
                dropped['thin'] += 1
                continue
            if not rec['startYear']:
                dropped['noyear'] += 1
                continue
        records.append(rec)

    core_recs = [r for r in records if r['tier'] == 'core']
    catalog = [r for r in records if r['tier'] == 'catalog']
    print(f'core kept: {len(core_recs)} / {len(core_map)}  missing: {missing_core}')
    print(f'catalog candidates after filters: {len(catalog)}  dropped: {dropped}')

    # poster resolution + verification: core first, then catalog by
    # article length. Primary source is the infobox image file (poster
    # or title card); pageimages original/thumbnail are fallbacks.
    catalog.sort(key=lambda r: -r['_length'])
    verify_order = core_recs + catalog[:TOTAL_CAP]  # buffer above the cap
    resolved = resolve_image_files([r['_img'] for r in verify_order])
    for r in verify_order:
        r['_img_url'] = resolved.get(r['_img'], '')
    urls = []
    for r in verify_order:
        for u in (r['_img_url'], r['_poster_try'], r['_thumb']):
            if u and u not in urls:
                urls.append(u)
    print(f'verifying {len(urls)} poster urls…')
    good = verify_posters(urls)
    for r in verify_order:
        for u in (r['_img_url'], r['_poster_try'], r['_thumb']):
            if u and good.get(u):
                r['poster'] = u
                break

    catalog.sort(key=lambda r: (-(1 if r['poster'] else 0), -r['_length']))
    slots = max(0, TOTAL_CAP - len(core_recs))
    # Era preference (per the brief: the bulk should be 2000-2026). Core
    # icons are exempt; catalog pre-2000 entries are capped at ~22% of
    # catalog slots, then backfilled in quality order if the modern
    # pool runs dry. This is a selection preference, not data shaping.
    pre_cap = int(slots * 0.22)
    keep_catalog, pre_used = [], 0
    for r in catalog:
        if len(keep_catalog) >= slots:
            break
        if r['startYear'] and r['startYear'] < 2000:
            if pre_used >= pre_cap:
                continue
            pre_used += 1
        keep_catalog.append(r)
    if len(keep_catalog) < slots:
        have = {id(r) for r in keep_catalog}
        for r in catalog:
            if len(keep_catalog) >= slots:
                break
            if id(r) not in have:
                keep_catalog.append(r)
    final = core_recs + keep_catalog

    # unique ids (append year on collision)
    seen = {}
    for r in final:
        if r['id'] in seen:
            r['id'] = r['id'] + '-' + str(r['startYear'] or 'x')
        seen[r['id']] = r
    final.sort(key=lambda r: r['title'].lower())

    for r in final:
        for k in ('_poster_try', '_thumb', '_length', '_img', '_img_url'):
            r.pop(k, None)

    have = {r['id'] for r in final}
    top = [{'id': i, 'note': n} for i, n in TOP_SERIES if i in have]
    print(f'TOP_SERIES resolved: {len(top)}/{len(TOP_SERIES)}')

    header = """/* Movie Night — TV dataset (v6). Each series carries a 0-10 taste
   vector on the same ten axes as the movie catalog, so the quiz engine
   works on shows unchanged. Entries with tier "core" are hand-picked
   (genres/keywords curated; vectors hand-set for the biggest titles).
   Catalog entries were sourced from Wikipedia streaming/genre category
   trees: creator, network, seasons, episodes and air dates come from
   the article infobox (null when the article does not state them —
   never invented), the description is adapted from the article's
   Wikipedia lead (CC BY-SA), and the taste vector is an ESTIMATE
   derived from genre-baseline profiles. Poster URLs were verified
   live at build time; an empty poster means the UI draws an elegant
   generated cover instead. "network" is the ORIGINAL network or
   service that first aired the series — where it streams today
   changes constantly and is not tracked. Additions applied the
   documented Indian-production exclusion. */
const SHOW_AXES = ["adrenaline","brainy","scary","funny","heartwarming","dark","romantic","epic","cozy","weird"];
const SHOWS = """
    with open('js/shows.js', 'w') as fh:
        fh.write(header)
        fh.write(json.dumps(final, indent=1, ensure_ascii=False))
        fh.write(';\nconst TOP_SERIES = ')
        fh.write(json.dumps(top, indent=1, ensure_ascii=False))
        fh.write(';\nif (typeof module !== \'undefined\' && module.exports) '
                 '{ module.exports = { SHOWS, TOP_SERIES, SHOW_AXES }; }\n')

    withp = sum(1 for r in final if r['poster'])
    from collections import Counter
    gc, era = Counter(), Counter()
    for r in final:
        for g in r['genres']:
            gc[g] += 1
        era['2000-2026' if r['startYear'] and r['startYear'] >= 2000 else 'pre-2000'] += 1
    print(f'FINAL: {len(final)} shows | posters {withp} ({withp / len(final) * 100:.1f}%)')
    print('genres:', gc.most_common())
    print('era:', dict(era))
    print(f'core in final: {sum(1 for r in final if r["tier"] == "core")}')


if __name__ == '__main__':
    main()
