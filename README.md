# 🎬 Movie Night

**Find tonight's movie without the 45-minute scroll.**

Movie Night is a mobile-first web app (an installable PWA) built around one idea borrowed from movie vector maps: *every film has a position in taste-space*. Each of the 1,300+ films in the library carries a **taste vector** — scores for thrills, scares, laughs, heart, darkness, romance, scale, coziness, smarts and weirdness. A quick this-or-that quiz builds *your* vector, and the app recommends the films whose vectors point the same way.

No build step, no accounts, no server, no API keys. Plain HTML/CSS/JS — open it and it works.

## What's new in v2

- **Catalog grew from 263 → 1,300+ films**, prioritized toward 2000–2026 releases (~74% of the library) with the essential classics kept. Every main genre (Action, Sci-Fi, Horror, Thriller, Drama, Comedy, Romance, Crime, Animation, Fantasy, Adventure) now has 100+ entries. A note on scale: the original ask was “500 movies per genre” (~5,000+ films) — at one verified poster, an original description and a hand-scored taste vector per film, that's a small studio's worth of work; v2 ships the largest catalog we could build *without* padding the data with junk or wrong credits.
- **Real posters for 1,306 of 1,347 films (97.0%)**, each resolved and verified (HTTP 200, image content-type) from Wikipedia at build time. The remaining 41 — mostly pre-1965 classics whose Wikipedia lead images aren't posters — use the generated-cover fallback.
- **Top 20 rebuilt to spec:** *Inception* at #1; Owen's essentials (*The Matrix, Talk to Me, The Dark Knight, The Return of the King, The Wolf of Wall Street, Into the Spider-Verse, The Hangover, Interstellar*) in the mix; and the remaining slots filled with the highest-rated films ever on Rotten Tomatoes. Note: Rotten Tomatoes publishes no single canonical ordered “best ever” list, so those slots are an editorial selection of the titles that consistently sit at the very top of RT's all-time ratings and critics' consensus.
- **Polish:** a daily-rotating “Tonight's pick” hero, sticky search + genre chips with counts, sorting (A–Z, newest/oldest, shortest/longest), chunked grid rendering (60 at a time with “Show more”), animated quiz transitions with pick feedback, backdrop-blur detail sheets, visible focus states and `prefers-reduced-motion` support.

## Features

- **Browse** — the full library (1,300+ films) in a searchable, genre-filterable grid that renders in chunks so it stays fast. Tap any film for details: story summary, director, runtime, rating, its taste-vector bars, keywords, and **“More like this”** (the six nearest films by vector similarity). Favorite and watchlist buttons on every film.
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
  poster: "https://… or empty string"
}
```

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
tests/engine.test.js  Node test suite
```

## License

MIT — see `LICENSE`. Film posters belong to their respective studios; they're referenced by URL from Wikipedia for personal/educational use.
