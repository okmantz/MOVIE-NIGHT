# 🎬 Movie Night

**Find tonight's movie without the 45-minute scroll.**

Movie Night is a mobile-first web app (an installable PWA) built around one idea borrowed from movie vector maps: *every film has a position in taste-space*. Each of the 5,500+ films in the library carries a **taste vector** — scores for thrills, scares, laughs, heart, darkness, romance, scale, coziness, smarts and weirdness. A quick this-or-that quiz builds *your* vector, and the app recommends the films whose vectors point the same way.

No build step, no accounts, no server, no API keys. Plain HTML/CSS/JS — open it and it works.

## What's new in v3

- **The 500-per-genre pass: catalog 1,347 → 5,551 films.** All twelve main genres now clear 500 titles (multi-genre tags counted, as the app's genre chips count them):

  | Genre | Titles | Genre | Titles |
  |---|---|---|---|
  | Drama | 1,981 | Sci-Fi | 634 |
  | Thriller | 1,193 | Animation | 630 |
  | Comedy | 1,112 | Horror | 610 |
  | Fantasy | 843 | Crime | 585 |
  | Action | 784 | Romance | 580 |
  | Mystery | 878 | Family | 580 |
  | Musical | 873 | Adventure | 555 |
  | War | 838 | Western | **243** |

  Three niche genres (Mystery, Musical, War) also cleared 500. **Western is the one honest miss, at 243:** Wikipedia's 2000–2026 year/genre categories — this pass's sourcing window — contain only ~255 real Western titles in total. Reaching 500 would have meant inventing films or tagging non-Westerns as Westerns; instead the count is locked at its real maximum in the test suite.
- **How the 4,204 new entries were sourced (no memory-only data):** titles were harvested from Wikipedia's year/genre categories (1,133 non-empty of 1,266 tried; 46,013 candidate films), deduped against the existing catalog, and selected with a greedy fill weighted toward scarce genres. Director and runtime come from each film's Wikipedia infobox (director found for 88%, runtime for 80% of new articles). Where an infobox has no runtime, the entry's `runtime` is `null` — never invented — and the UI simply omits it. A random 10-title sample was re-verified against live Wikipedia summaries (10/10 title+year sane).
- **Two tiers, labeled in the data.** Every entry carries a `tier` field. `core` entries (the original 1,347) have hand-written descriptions and hand-scored vectors. `catalog` entries (the 4,204 new ones) have a **factual one-line description** — year, nationality, genre, director, e.g. *“A 2023 South Korean horror film directed by …”* — rather than a plot summary, and their **taste vectors are estimates** derived from genre-baseline profiles with a small per-film variation. Catalog-tier entries are for discovery depth; their vectors are approximations, not hand-tuned ratings.
- **Era split of the new additions:** 1,914 from 2020–2026 (45.5%), 1,466 from the 2010s (34.9%), 814 from the 2000s (19.4%), 10 earlier. The 2020s come first wherever a genre's pool allows; scarce genres (Adventure, Family, Western…) simply don't have 500 real titles in 2020–2026 alone. The full library is now ~94% from 2000 onward.
- **Poster coverage is 3,028 of 5,551 (54.5%).** The core tier still sits at ~97%; catalog-tier films resolve a verified poster 41% of the time (1,722 of 4,204) because many deep-catalog Wikipedia articles carry no lead image at all. Everything without a poster uses the generated-cover fallback. Every stored URL was verified (HTTP 200 + image content-type) at build time.
- **Scaling:** `js/movies.js` is now ~3.2 MB. The grid still renders in chunks of 60 with lazy-loaded posters, search is debounced (150 ms), and the service-worker cache was bumped to `movie-night-v3` so installed phones pick up the new data. The test suite (19 checks) now asserts ≥500 for every main genre — and locks Western at its achieved 243.

## What was new in v2

- Catalog grew 263 → 1,347 films, ~74% from 2000–2026; real verified posters for 1,306 of 1,347 (97.0%).
- **Top 20 rebuilt to spec:** *Inception* at #1; Owen's essentials (*The Matrix, Talk to Me, The Dark Knight, The Return of the King, The Wolf of Wall Street, Into the Spider-Verse, The Hangover, Interstellar*) in the mix; remaining slots filled with the highest-rated films ever on Rotten Tomatoes. Note: Rotten Tomatoes publishes no single canonical ordered “best ever” list, so those slots are an editorial selection of the titles that consistently sit at the very top of RT's all-time ratings and critics' consensus.
- **Polish:** a daily-rotating “Tonight's pick” hero, sticky search + genre chips with counts, sorting (A–Z, newest/oldest, shortest/longest), chunked grid rendering (60 at a time with “Show more”), animated quiz transitions with pick feedback, backdrop-blur detail sheets, visible focus states and `prefers-reduced-motion` support.

## Features

- **Browse** — the full library (5,500+ films) in a searchable, genre-filterable grid that renders in chunks so it stays fast. Tap any film for details: story summary, director, runtime, rating, its taste-vector bars, keywords, and **“More like this”** (the six nearest films by vector similarity). Favorite and watchlist buttons on every film.
- **Mood Match Quiz (solo)** — pick 10, 15 or 20 rounds of two-movies-side-by-side. Early rounds are broad contrasts; later rounds are close calls near your emerging taste, so every tap teaches the app something. “Both sound good” and “Neither” count too. You finish with **3–5 ranked recommendations**, each with a match % and a plain-English *why*.
- **Couples Mode** 💞 — the signature mode. Two profiles alternate picks on one phone, with a “pass the phone” moment between turns so nobody sees the other's answers. The app averages both taste vectors, adds a bonus for whatever you *both* love, and recommends films with a **match % for each partner**.
- **Top 20 of All Time** — *Inception* at #1, Owen's essentials, and the rest of the slots drawn from the highest-rated films ever on Rotten Tomatoes — each with a one-line case.
- **Shuffle** — one tap deals 5 random films (optionally within one genre). Re-shuffle freely.
- **Profiles** — multiple local profiles with emoji avatars and colors. Each keeps its own favorites, watchlist, quiz history and a **taste profile** (its top mood axes, learned from every quiz taken). Everything is stored in `localStorage` on the device — nothing leaves the phone.
- **Installable & offline** — add it to your home screen like a native app; a service worker caches the app shell so it opens offline.

## Deploy on GitHub Pages (2 minutes)

1. Create a new repository on GitHub (e.g. `movie-night`) — or use an existing one.
2. Upload all of this project's files to the repo root (the folder structure must stay as-is: `index.html` at the top, plus `css/`, `js/`, `icons/`).
3. In the repo, go to **Settings → Pages**.
4. Under *Build and deployment*, choose **Deploy from a branch**, pick your main branch and the `/ (root)` folder, and save.
5. Wait ~a minute; GitHub shows your live URL (like `https://yourname.github.io/movie-night/`).
6. Open that URL on your phone → browser menu → **Add to Home Screen / Install app**. Done — it now behaves like an app.

> Every path in the app is relative, so it works from a project subpath (`/movie-night/`) as well as from a domain root.

## How the recommender works

Each movie's vector is ten numbers (0–10): `adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird`.

- **Solo quiz:** your preference vector is the sum of the vectors of the films you picked, minus 35% of the ones you passed on (± smaller weights for “both/neither”). Recommendations are the highest **cosine similarity** between your vector and every film *not* shown in the quiz.
- **Pair selection:** rounds are generated live (`js/engine.js → nextPair`). The first third maximizes vector distance between the two films (broad mapping); the last third picks two films both close to your current vector (hard, informative choices).
- **Couples:** each partner builds their own preference vector from their own turns. The combined vector is the average of the two normalized vectors **plus a synergy bonus** (+0.75/+1.5) on any axis both partners scored highly — shared loves count extra, one-sided tastes still count, just less. Each recommendation shows its individual match % per partner.
- **More like this:** plain cosine similarity between two films' vectors.

All logic lives in `js/engine.js`, deliberately separated from the UI (`js/app.js`) and covered by tests.

## Add or edit movies

Movies live in `js/movies.js` as a plain array. Schema:

```js
{
  id: "unique-slug",
  title: "The Title",
  year: 1999,
  director: "Director Name",
  genres: ["Sci-Fi", "Action"],        // first genre drives the fallback cover colors
  runtime: 136,                         // minutes
  rating: "R",                          // MPAA-style rating string
  description: "One or two original sentences about the film.",
  vector: { adrenaline: 8, brainy: 9, scary: 2, funny: 3, heartwarming: 4,
            dark: 5, romantic: 1, epic: 8, cozy: 1, weird: 7 },
  keywords: ["simulation", "cyberpunk"],
  poster: "https://… or empty string",
  tier: "core"                          // "core" = hand-written; "catalog" = Wikipedia-sourced (see v3 notes)
}
```

Catalog-tier entries may carry `runtime: null` (unknown — not shown in the UI) and `rating: ""` (not shown). Don't invent either value for a film you can't verify.

**Posters:** most `poster` values are real poster image URLs from Wikipedia, fetched and verified (HTTP 200) at build time. To get one for a new film:

```bash
pip install requests
python3 tools/fetch_posters.py "The Matrix"
```

Leave `poster: ""` if nothing resolves — the UI automatically draws an elegant generated cover (genre-colored gradient + title typography), and it also falls back to that cover if an image URL ever fails to load. **Never paste in a poster URL you haven't verified** — a broken or wrong image is worse than the generated cover.

**Using TMDB posters instead (optional, later):** TMDB's image CDN gives consistently sized posters. Create a free TMDB account, get an API key, look up each film's `poster_path`, and set `poster` to `https://image.tmdb.org/t/p/w500<poster_path>`. Keep the empty-string fallback behavior — the UI already handles it.

## Run the tests

```bash
node tests/engine.test.js
```

No dependencies — plain Node. The suite checks the dataset (count, schema, vector ranges, Top 20 integrity) and the engine (pair generation, recommendation counts and exclusions, couples combination and match percentages, shuffle, similarity ranking).

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static server works. Opening `index.html` directly also mostly works, but a server is needed for the service worker / install prompt.)

## Project layout

```
index.html            App shell (all views)
css/styles.css        Dark cinematic theme
js/movies.js          The dataset: MOVIES, TOP20, MOVIE_AXES
js/engine.js          Quiz + recommendation logic (no DOM, unit-tested)
js/app.js             UI, routing, profiles, localStorage
manifest.webmanifest  PWA manifest
sw.js                 Service worker (offline shell)
icons/icon.svg        App icon
tools/fetch_posters.py  Verified poster lookup via Wikipedia
tools/harvest_categories.py  Bulk title harvest from Wikipedia year/genre categories
tools/enrich_catalog.py  Selection + infobox/summary enrichment for catalog-tier entries
tools/build_entries.py   Merges enriched entries into js/movies.js
tests/engine.test.js  Node test suite
```

## License

MIT — see `LICENSE`. Film posters belong to their respective studios; they're referenced by URL from Wikipedia for personal/educational use.
