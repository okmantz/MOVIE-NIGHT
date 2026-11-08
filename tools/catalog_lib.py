#!/usr/bin/env python3
"""Shared helpers for the v7 catalog rebuild (movies + shows).

* js-file loaders/writers (compact one-object-per-line output: ~50% smaller
  than the old pretty-printed files, so the app loads much faster)
* genre taxonomy normalisation
* theme lexicon: turns a film/series description into (a) searchable theme
  keywords and (b) taste-vector adjustments, replacing the old
  "genre baseline + random jitter" estimate that made every film in a genre
  look almost identical to the recommender
* origin detection (American / UK-Ireland-Commonwealth / other / unknown)
* family-friendly flag and mainstream "appeal" scoring helpers
"""
import hashlib
import json
import math
import re

AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming",
        "dark", "romantic", "epic", "cozy", "weird"]

# ----------------------------------------------------------------- js io

def load_js_array(path, name):
    s = open(path, encoding="utf8").read()
    start = s.index("const %s = [" % name) + len("const %s = " % name)
    end = s.index("\n];", start) + 2
    return json.loads(s[start:end])


def dump_js_array(items):
    return "[\n" + ",\n".join(
        json.dumps(x, ensure_ascii=False, separators=(",", ":")) for x in items) + "\n]"


def norm_key(t):
    t = (t or "").lower().replace("&", "and")
    return re.sub(r"[^a-z0-9]+", "", t)


def slugify(title):
    s = title.lower().replace("&", " and ")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "untitled"


# ------------------------------------------------------------- taxonomy

GENRE_MAP = {
    "Modern Drama": "Drama", "Historical Drama": "Drama", "Family Drama": "Drama",
    "Biography": "Drama", "Historical": "Drama", "Sports": "Drama", "Sport": "Drama",
    "Political": "Drama", "Legal": "Drama", "Independent": None, "Live Action": None,
    "Animated": "Animation", "Psychological Thriller": "Thriller", "Suspense": "Thriller",
    "Spy": "Thriller", "Horror Thriller": "Horror", "Slasher": "Horror",
    "Found Footage": "Horror", "Neo-Noir": "Crime", "Noir": "Crime",
    "Disaster": "Action", "Martial Arts": "Action", "Science Fiction": "Sci-Fi",
    "Supernatural": "Fantasy", "Satire": "Comedy", "Teen": "Comedy",
    "Music": "Musical", "Performance": "Musical", "Dance": "Musical",
    "Erotic": "__DROP__", "Short": "__DROP__", "Silent": "__DROP__",
}
PRIMARY_ORDER = ["Superhero", "Animation", "Horror", "Sci-Fi", "Fantasy", "Rom-Com",
                 "Romance", "Musical", "Western", "War", "Action", "Thriller", "Crime",
                 "Mystery", "Comedy", "Adventure", "Family", "Documentary", "Drama"]
KNOWN_GENRES = set(PRIMARY_ORDER)
GENRE_BASELINES = {
    "Action": [9, 4, 2, 2, 2, 5, 1, 7, 1, 2], "Comedy": [4, 4, 0, 9, 5, 2, 3, 3, 6, 4],
    "Drama": [2, 6, 1, 2, 6, 5, 3, 4, 4, 2], "Horror": [5, 4, 10, 1, 1, 8, 0, 3, 0, 5],
    "Thriller": [7, 6, 5, 0, 2, 7, 1, 4, 1, 3], "Sci-Fi": [6, 8, 2, 2, 3, 5, 1, 8, 1, 6],
    "Romance": [2, 4, 0, 3, 7, 2, 10, 3, 6, 1], "Crime": [6, 6, 3, 1, 2, 8, 1, 4, 1, 3],
    "Adventure": [7, 4, 1, 2, 5, 3, 2, 8, 3, 3], "Animation": [4, 4, 1, 6, 8, 1, 2, 5, 7, 5],
    "Fantasy": [5, 5, 2, 3, 6, 4, 3, 9, 4, 6], "Family": [3, 3, 0, 6, 9, 0, 1, 4, 8, 3],
    "Mystery": [5, 8, 4, 0, 2, 6, 1, 3, 2, 4], "Musical": [4, 3, 0, 6, 7, 1, 5, 5, 6, 4],
    "War": [6, 5, 4, 0, 3, 8, 0, 7, 0, 1], "Western": [6, 4, 2, 1, 3, 6, 1, 6, 2, 2],
    "Documentary": [2, 7, 1, 2, 5, 4, 1, 4, 3, 3], "Superhero": [9, 4, 1, 4, 3, 4, 2, 9, 2, 3],
    "Rom-Com": [3, 3, 0, 9, 7, 1, 9, 2, 7, 2], "Reality": [4, 4, 0, 6, 4, 3, 1, 3, 5, 4],
}


def normalize_genres(genres, limit=3):
    out = []
    for g in genres or []:
        g2 = GENRE_MAP.get(g, g)
        if g2 == "__DROP__":
            return None
        if g2 and g2 in KNOWN_GENRES | {"Reality", "Docuseries"} and g2 not in out:
            out.append(g2)
    if "Romance" in out and "Comedy" in out and "Rom-Com" not in out:
        out.insert(0, "Rom-Com")
    # keep source order but make the primary the most specific genre
    if len(out) > 1:
        order = {g: i for i, g in enumerate(PRIMARY_ORDER)}
        primary = min(out, key=lambda g: order.get(g, 99))
        out.remove(primary)
        out.insert(0, primary)
    return out[:limit]


# -------------------------------------------------------- theme lexicon
# (label, regex, {axis: delta}).  Deltas are small on purpose: they nudge the
# genre baseline toward what the film is actually about.
THEMES = [
    ("heist", r"\bheist|robbery|robbers\b|con artist|con man|scam|steal", {"adrenaline": 1, "brainy": 2, "funny": 1}),
    ("chase", r"\bchase|on the run|fugitive|manhunt|race against", {"adrenaline": 2}),
    ("revenge", r"\brevenge|vengeance|avenge", {"dark": 2, "adrenaline": 1}),
    ("assassin", r"assassin|hitman|hit man|contract killer|bounty hunter", {"adrenaline": 2, "dark": 1}),
    ("spy", r"\bspy\b|espionage|secret agent|\bcia\b|\bmi6\b|undercover", {"adrenaline": 1, "brainy": 2}),
    ("war", r"world war|vietnam war|civil war|soldier|battlefield|military", {"epic": 2, "dark": 1}),
    ("police", r"\bpolice|detective|cop\b|cops\b|\bfbi\b|investigat", {"brainy": 1, "dark": 1}),
    ("serial killer", r"serial killer|slasher|masked killer|psychopath|stalker", {"scary": 2, "dark": 2}),
    ("haunted", r"haunt|ghost|poltergeist|demon|possess|exorcis|occult|curse[ds]?\b", {"scary": 3, "dark": 1, "weird": 1}),
    ("monster", r"monster|creature|beast|werewolf|vampire|zombie|undead", {"scary": 2, "adrenaline": 1}),
    ("alien", r"\balien|extraterrestrial|\bufo\b|invasion", {"epic": 1, "weird": 1, "brainy": 1}),
    ("space", r"\bspace\b|astronaut|spaceship|galaxy|planet|starship", {"epic": 2, "brainy": 1}),
    ("time travel", r"time travel|time loop|time machine|parallel (?:universe|world)|multiverse", {"brainy": 2, "weird": 2}),
    ("dystopia", r"dystopi|post-apocalyp|apocalyp|survivors|pandemic|outbreak", {"dark": 2, "epic": 1}),
    ("superhero", r"superhero|super-hero|marvel|dc comics|vigilante|mutant", {"epic": 1, "adrenaline": 1}),
    ("robots & ai", r"\brobots?\b|artificial intelligence|android|cyborg|\bai\b", {"brainy": 2, "weird": 1}),
    ("fantasy quest", r"wizard|magic|dragon|kingdom|sorcer|witch|quest|medieval|fairy", {"epic": 2, "cozy": 0}),
    ("mystery", r"mystery|whodunit|murder mystery|disappearance|missing|conspiracy", {"brainy": 2, "dark": 1}),
    ("psychological", r"psycholog|paranoi|obsess|delusion|mind games|manipulat", {"brainy": 2, "dark": 1, "weird": 1}),
    ("courtroom", r"courtroom|lawyer|attorney|trial\b|legal", {"brainy": 2}),
    ("biopic", r"biograph|based on the (?:true )?life|true story|real-life|real life", {"brainy": 1, "heartwarming": 1}),
    ("true crime", r"true crime|based on a true|real events|actual events", {"dark": 1, "brainy": 1}),
    ("politics", r"politic|president|senator|campaign|white house|government", {"brainy": 2}),
    ("sports", r"\bsports?\b|football|basketball|baseball|boxing|boxer|coach|championship|hockey|soccer|wrestl", {"adrenaline": 1, "heartwarming": 2}),
    ("underdog", r"underdog|against all odds|inspir|overcom", {"heartwarming": 2}),
    ("music", r"\bband\b|singer|musician|rock|hip hop|rapper|concert|musical", {"heartwarming": 1}),
    ("high school", r"high school|teenage|teenager|prom|college|campus|freshman|cheerlead|sorority|fraternity", {"funny": 1, "romantic": 1, "cozy": 1}),
    ("coming of age", r"coming-of-age|coming of age|adolescen|growing up", {"heartwarming": 2, "romantic": 1}),
    ("wedding", r"\bwedding|bride|groom|engaged|engagement|bridesmaid", {"romantic": 2, "funny": 1, "cozy": 1}),
    ("love story", r"love story|falls in love|fall in love|romance|romantic|lovers?\b|soulmate|relationship", {"romantic": 3, "heartwarming": 1}),
    ("christmas", r"christmas|holiday season|santa|thanksgiving|hallmark|new year", {"cozy": 3, "heartwarming": 2, "dark": -2}),
    ("family", r"\bfamily\b|father|mother|daughter|\bson\b|siblings|parents|grandfather|grandmother", {"heartwarming": 1, "cozy": 1}),
    ("friendship", r"friendship|best friends?|buddy|buddies|road trip|reunion", {"funny": 1, "heartwarming": 1}),
    ("animals", r"\bdogs?\b|\bcats?\b|puppy|horse|animal|pet\b|pets\b", {"heartwarming": 2, "cozy": 2}),
    ("small town", r"small town|village|farm|ranch|countryside|lake house|bakery|inn\b", {"cozy": 2, "heartwarming": 1}),
    ("slapstick", r"slapstick|bumbling|hilarious|zany|goofy|raunchy|spoof|parody|farce|mishaps|misadventures", {"funny": 3}),
    ("satire", r"satir|mockumentary|dark comedy|black comedy|absurd", {"funny": 1, "brainy": 1, "weird": 2}),
    ("surreal", r"surreal|bizarre|dream|hallucin|strange|quirky|offbeat|eccentric|cult", {"weird": 3}),
    ("crime", r"\bgang|mob\b|mafia|drug|cartel|criminal|prison|inmate|gangster|smuggl", {"dark": 2, "adrenaline": 1}),
    ("addiction", r"addict|overdose|alcoholi|rehab", {"dark": 2, "heartwarming": -1}),
    ("grief", r"grief|death of|funeral|terminal|cancer|illness|dying|loss of", {"dark": 1, "heartwarming": 1}),
    ("survival", r"survival|survive|stranded|wilderness|shipwreck|trapped|isolated", {"adrenaline": 2, "dark": 1}),
    ("disaster", r"earthquake|tsunami|volcano|hurricane|tornado|asteroid|disaster", {"adrenaline": 2, "epic": 2}),
    ("western", r"\bwestern\b|cowboy|outlaw|frontier|sheriff|gunslinger", {"epic": 1, "dark": 1}),
    ("pirates & sea", r"pirate|\bsea\b|ocean|submarine|navy|sailor|shark", {"adrenaline": 1, "epic": 1}),
    ("martial arts", r"martial art|kung fu|karate|ninja|samurai", {"adrenaline": 2}),
    ("racing", r"racing|race car|street racing|nascar|formula", {"adrenaline": 3}),
    ("documentary", r"documentary|docuseries|interviews", {"brainy": 2}),
    ("animated adventure", r"animated|pixar|dreamworks|illumination|talking", {"heartwarming": 1, "cozy": 1}),
    ("horror comedy", r"horror comedy|comedy horror|horror-comedy", {"funny": 2, "scary": -1}),
    ("erotic", r"erotic|sexual|sex\b|nudity|softcore|explicit", {"romantic": 1, "dark": 1}),
]
THEME_RE = [(l, re.compile(p, re.I), d) for l, p, d in THEMES]


def theme_hits(text):
    return [(l, d) for l, rx, d in THEME_RE if rx.search(text)]


def make_vector(genres, seed, text="", rating=""):
    """Genre baseline blended by billing order + theme adjustments + a +/-1
    deterministic tie-break so look-alikes still differ slightly."""
    weights = [1.0 if i == 0 else 0.55 for i in range(len(genres))]
    base = []
    for ai in range(len(AXES)):
        tot = wsum = 0.0
        for g, w in zip(genres, weights):
            b = GENRE_BASELINES.get(g)
            if b:
                tot += b[ai] * w
                wsum += w
        base.append(tot / wsum if wsum else 3.0)
    adj = {a: 0.0 for a in AXES}
    hits = theme_hits(text)
    for _label, deltas in hits[:6]:
        for a, d in deltas.items():
            adj[a] += d * 0.8
    if rating in ("R", "NC-17", "TV-MA"):
        adj["dark"] += 1
        adj["cozy"] -= 1
    elif rating in ("G", "PG", "TV-G", "TV-Y", "TV-PG"):
        adj["dark"] -= 1
        adj["cozy"] += 1
        adj["scary"] -= 1
    h = hashlib.md5(seed.encode()).digest()
    vec = {}
    for ai, a in enumerate(AXES):
        a_adj = max(-4.0, min(4.0, adj[a]))
        jitter = (h[ai % len(h)] % 3) - 1
        vec[a] = int(max(0, min(10, round(base[ai] + a_adj + jitter * 0.6))))
    return vec


def make_keywords(genres, year, text, extra=()):
    kws = []
    for l, _d in theme_hits(text)[:4]:
        kws.append(l)
    for g in genres[:2]:
        kws.append(g.lower())
    if year:
        kws.append("%ds" % (year // 10 * 10))
    for e in extra:
        if e and e not in kws:
            kws.append(e)
    seen, out = set(), []
    for k in kws:
        if k not in seen:
            seen.add(k)
            out.append(k)
    return out[:7]


# --------------------------------------------------------------- origin
AMERICAN_RX = re.compile(r"\bAmerican\b|\bU\.S\.|\bUnited States\b|\bHollywood\b")
UKI = {"British", "English", "Canadian", "Australian", "Irish", "New Zealand",
       "Scottish", "Welsh", "Northern Irish", "Anglo"}
SAFE_ADJ = {"Christmas", "Halloween", "Western", "Gothic", "Southern", "Christian",
            "Jewish", "Muslim", "Catholic", "Holiday", "Romantic", "Animated", "Black",
            "Independent", "Live", "Silent", "Short", "Made", "Direct", "Superhero",
            "Teen", "Family", "Epic", "Dark", "Psychological", "Supernatural", "Science",
            "Sports", "Musical", "Documentary", "Crime", "Action", "Horror", "Comedy",
            "Drama", "Romance", "Fantasy", "Mystery", "Thriller", "Adventure", "War",
            "Biographical", "Historical", "Political", "Satirical", "Erotic", "Neo",
            "Found", "Coming", "Slasher", "Disaster", "Spy", "Heist", "Buddy", "Road",
            "Martial", "Stop", "Computer", "Cgi", "Traditional", "Experimental",
            "Concert", "Stand", "Anthology", "Mockumentary", "Docudrama", "Docufiction",
            "Urban", "Rural", "Sci", "Dystopian", "Post", "Cyberpunk", "Steampunk",
            "Space", "Alien", "Zombie", "Vampire", "Monster", "Ghost", "Haunted"}
DEMONYM_RX = re.compile(r"(?:ian|ese|ish|ani|ali|ic|ch|an|ni|ai|ik|ar|ri|ay|ng)$")
NON_US_NAMED = {
    "Spanish", "French", "German", "Italian", "Japanese", "Korean", "South Korean",
    "Chinese", "Hong Kong", "Mexican", "Brazilian", "Argentine", "Argentinian",
    "Russian", "Soviet", "Swedish", "Danish", "Norwegian", "Finnish", "Dutch", "Belgian",
    "Polish", "Czech", "Turkish", "Iranian", "Indian", "Filipino", "Philippine", "Thai",
    "Indonesian", "Greek", "Egyptian", "Nigerian", "Israeli", "Taiwanese", "Hungarian",
    "Romanian", "Austrian", "Swiss", "Portuguese", "Chilean", "Colombian", "Peruvian",
    "Pakistani", "Bangladeshi", "Vietnamese", "Yugoslav", "Serbian", "Croatian",
    "Ukrainian", "Bulgarian", "South African", "Cuban", "Venezuelan", "Lebanese",
    "Palestinian", "Icelandic", "Estonian", "Latvian", "Lithuanian", "Malaysian",
    "Singaporean", "Sri Lankan", "Kazakh", "Georgian", "Armenian", "Moroccan",
    "Tunisian", "Algerian", "Senegalese", "Ghanaian", "Kenyan", "Ethiopian", "Haitian",
    "Uruguayan", "Bolivian", "Ecuadorian", "Dominican", "Slovak", "Slovenian", "Bosnian",
    "Albanian", "Macedonian", "Mongolian", "Nepali", "Nepalese", "Afghan", "Iraqi",
    "Saudi", "Emirati", "Qatari", "Jordanian", "Syrian", "Cambodian", "Laotian",
    "Burmese", "Maltese", "Maldivian", "Bengali", "Tamil", "Telugu", "Malayalam",
    "Kannada", "Punjabi", "Marathi", "Hindi", "Urdu", "Persian", "Arab", "Arabic",
    "Kurdish", "Uzbek", "Tibetan", "Belarusian", "Moldovan", "Luxembourgish", "Cypriot",
    "Basque", "Catalan", "Galician", "Flemish", "Congolese", "Ugandan", "Tanzanian",
    "Zimbabwean", "Cameroonian", "Jamaican", "Guatemalan", "Honduran", "Paraguayan",
    "Puerto Rican", "Fijian", "Azerbaijani", "Mauritian", "Cape Verdean", "Rwandan",
}
SIGNAL_COUNTRY_US = {"united states", "usa", "us"}
SIGNAL_COUNTRY_UKI = {"united kingdom", "uk", "canada", "australia", "ireland",
                      "new zealand"}


def detect_origin(desc, in_us_list=False, signal_country=None):
    """-> 'US' | 'UKI' | 'OTHER' | 'UNK'"""
    head = (desc or "")[:230]
    if signal_country:
        sc = signal_country.strip().lower()
        if sc in SIGNAL_COUNTRY_US:
            return "US"
        if sc in SIGNAL_COUNTRY_UKI and not AMERICAN_RX.search(head):
            return "UKI"
        if sc:
            return "OTHER" if not AMERICAN_RX.search(head) else "US"
    if AMERICAN_RX.search(head) or in_us_list:
        return "US"
    m = re.search(r"\b(?:is|was) an? (?:\d{4} )?((?:[A-Z][A-Za-z\-]+)(?: [A-Z][A-Za-z\-]+)?)", head)
    if m:
        words = m.group(1).split(" ")
        for cand in (m.group(1), words[0]):
            cand = cand.split("-")[0] if cand.split("-")[0] in NON_US_NAMED | UKI else cand
            if cand in UKI:
                return "UKI"
            if cand in NON_US_NAMED:
                return "OTHER"
        first = words[0].split("-")[0]
        if first not in SAFE_ADJ and first not in UKI and DEMONYM_RX.search(first) \
                and first not in ("Animated", "Epic"):
            if re.search(r"\b(film|movie|series|television|drama|comedy|thriller|horror)\b", head[:120], re.I) \
                    and first[0].isupper() and len(first) > 4 and first.endswith(("ian", "ese", "ish", "ani", "ali")):
                return "OTHER"
    for nat in UKI:
        if re.search(r"\b" + nat + r"\b", head):
            return "UKI"
    for nat in NON_US_NAMED:
        if re.search(r"\b" + nat + r"\b", head):
            return "OTHER"
    return "UNK"


# -------------------------------------------------------- family-friendly
ADULT_RX = re.compile(
    r"murder|killer|kill(?:s|ed|ing)?\b|sex|drug|gore|violent|brutal|serial|terror|"
    r"rape|abus|assassin|gang|prison|torture|erotic|nudity|adult animated|r-rated|"
    r"slasher|cannibal|demon|possess|massacre|war crime|suicide|addict", re.I)


def family_friendly(genres, rating, desc):
    g = set(genres)
    if rating in ("R", "NC-17", "TV-MA", "PG-13", "TV-14"):
        return False
    if g & {"Horror", "Thriller", "Crime", "War", "Documentary", "Western", "Reality"}:
        return False
    if ADULT_RX.search(desc or ""):
        return False
    if rating in ("G", "PG", "TV-G", "TV-Y", "TV-Y7", "TV-PG"):
        return True
    return bool(g & {"Family", "Animation"})


# ----------------------------------------------------------- appeal bits
AWARD_RX = re.compile(r"academy award|oscar|golden globe|bafta|palme d'or|sundance|golden lion|"
                      r"emmy|grammy|peabody|tony award|critically acclaimed|acclaim", re.I)
STUDIO_RX = re.compile(r"highest-grossing|box office|blockbuster|franchise|sequel|prequel|"
                       r"remake|reboot|based on the (?:novel|comic|book|video game|play|"
                       r"true|bestselling)|marvel|dc comics|pixar|walt disney|disney|dreamworks|"
                       r"illumination|warner bros|universal pictures|paramount|columbia pictures|"
                       r"sony pictures|20th century|lionsgate|focus features|\ba24\b|netflix|"
                       r"amazon|apple tv|\bhbo\b|miramax|new line|metro-goldwyn|\bmgm\b|"
                       r"star wars|batman|spider-man|star trek|james bond|harry potter|"
                       r"lord of the rings|fast & furious|jurassic|toy story|mission: impossible", re.I)
JUNK_RX = re.compile(r"erotic|softcore|sexploitation|pornograph|adult film|sex comedy|"
                     r"nudity|mockbuster|the asylum|direct-to-video|straight-to-video|"
                     r"b movie|b-movie|grindhouse|shot-on-video|public-access|"
                     r"religious film|christian film|faith-based", re.I)
TVFILM_RX = re.compile(r"television film|made-for-television|made-for-tv|tv movie|"
                       r"television movie|hallmark|lifetime", re.I)


def clip_sentences(text, limit=300):
    text = re.sub(r"\s+", " ", text or "").strip()
    text = re.sub(r"\s*\((?:[^()]*?(?:pronounced|IPA|born|transl\.|lit\.)[^()]*?)\)", "", text)
    if len(text) <= limit:
        return text
    cut = text[:limit]
    idx = max(cut.rfind(". "), cut.rfind("! "), cut.rfind("? "))
    if idx > 80:
        return cut[:idx + 1]
    return cut.rsplit(" ", 1)[0].rstrip(",;:") + "…"
