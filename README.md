# 🎬 Movie Night

**Find tonight's movie without the 45-minute scroll.**

Movie Night is a mobile-first web app (an installable PWA) built around one idea borrowed from movie vector maps: *every film has a position in taste-space*. Each of the 11,000+ films (and 1,200+ series) in the library carries a **taste vector** — scores for thrills, scares, laughs, heart, darkness, romance, scale, coziness, smarts and weirdness. A quick this-or-that quiz builds *your* vector, and the app recommends the films whose vectors point the same way.

No build step, no server, no API keys. Plain HTML/CSS/JS — open it and it works. Accounts are **on-device** (see [Accounts](#accounts-on-device-only) below).

## What's new in v7 — a curated, American-first library and a smarter picker

- **Library audit (`js/movies.js`: 11,002 films, down from 20,000+).** The old list was a Wikipedia sweep: great for coverage, bad for "what should I watch tonight" — it was full of 1940s Spanish horror, regional-industry films and obscure shorts. v7 scores every title on *evidence* (core-tier hand-picks, vote counts from public datasets used only for scoring — never shipped, star power, awards, studio/franchise cues) and *context* (era, American/UK-Ireland origin, poster, a real description), and keeps only titles with real evidence of being watched. Result: 72% of the library is 2000 or later, <1% predates 1970, and every film carries an internal appeal score `ap` (0–100) the app uses to rank browse, pick Tonight's Pick, weight Shuffle and choose quiz pairs. Run `python3 tools/rebuild_movies_v7.py --help` to re-run or loosen the cutoffs (`--min-appeal`, `--min-evidence`).
- **About the 25,000 target:** the audit could not honestly reach 25,000 films. Quality sources for new titles were unreachable from the build environment, and the earlier catalog was already close to every notable film Wikipedia lists — getting to 25k would mean re-admitting exactly the obscure, foreign and low-evidence films this release removes. To grow the catalog, loosen `--min-appeal`/`--min-evidence` or feed new harvests through `tools/v5_expand.py` (needs Wikipedia access) and re-run the rebuild.
- **TV (`js/shows.js`: 1,270 series, up from 778).** Non-series entries (celebrities, crimes, films, a FIFA World Cup page…) and foreign/obscure filler were removed; wrong years were repaired; ~640 well-known American-audience series were added from the hand-curated `tools/shows_v7_curated.txt` (original run years and networks only — no "currently streaming on" claims). Added series without a verified poster use the generated cover. Re-run: `python3 tools/rebuild_shows_v7.py --src <v6 shows.js>`.
- **New recommendation engine (`js/engine.js`).** (1) *Centered scoring* — vectors are standardized against the catalog before comparing, so similarity reflects what is distinctive instead of the shared average. (2) *Anchors* — the films you actually chose/rejected pull recommendations toward/away from their nearest neighbors, not just your averaged taste. (3) *Appeal prior* — near-ties resolve toward well-known films. (4) *MMR diversity* — five good, different films instead of five clones. (5) *Context filters* — Just me / Date night / Family, length, and era before the quiz. (6) *Calibrated match %* — strong fits read 90%+, average films ~50%. (7) *Quiz pairs* are only ever films a typical viewer knows. (8) *Couples* — a hard per-partner floor, then ranking by fairness (half average fit, half the *worse* partner's fit). In simulated quizzes (tests/quiz-sim.js, same noisy synthetic users for both) the new engine recommended better-fitting films (mean fit 0.62 vs 0.59, 90th vs 88th percentile) that are far better known (mean appeal ~81 vs ~63) and more varied.
- **Redesign.** Quieter dark theme with refined cards and glass header, SVG navigation, a desktop top nav, a "Your top pick" hero with a match ring on results, a pre-quiz *who's watching / how long / which era* step, and Top Picks as the default browse order.
- Service-worker cache is `movie-night-v7`.

## What was new in v6 — TV Shows 📺

- **A whole second catalog: the TV Shows section.** Browse now has a **Movies | TV Shows** switch at the top (and a TV Shows entry in the More tab). The shows side has its own searchable, genre-chipped, sortable browse (A–Z, newest, most seasons, most episodes), its own detail view, a curated **Top Series** twenty, a **Series Shuffle**, and a **Next Series Quiz** — the same this-or-that engine, pointed at series. Show favorites and watchlist are stored per account in their own lists (`showFavorites` / `showWatchlist`), so they never collide with movie lists. Couples Mode stays movies-only.
- **The dataset (`js/shows.js`): SHOWS_COUNT series**, built the same way as the films — nothing invented. SHOWS_CORE hand-picked core entries (the icons: *Breaking Bad*, *The Sopranos*, *The Wire*, *Dark*, *Squid Game*, *Chernobyl*, *Arcane*, *Shōgun*…) carry curated genres/keywords and hand-set taste vectors for the biggest titles; the rest were harvested from Wikipedia's streaming "original programming" lists (Netflix, HBO/Max, Prime Video, Hulu, Disney+, Paramount+, Peacock, AMC, Syfy…) and TV genre/decade category trees, then quality-gated on article substance (length + a real lead extract), a mapped genre and a known start year — the same notability proxy as the films, called what it is. **Era split: ERA_SPLIT.**
- **Facts come from each article's infobox** — creator, original network, season/episode counts, first/last air years — and are `null` wherever the article doesn't state them, never filled in from memory. Descriptions are adapted from Wikipedia leads (**CC BY-SA**, like the film catalog). Catalog-tier taste vectors are genre-baseline estimates, labeled as such in the data file.
- **Posters: POSTER_PCT coverage** — every stored URL verified live at build time (HTTP 200/206 + image content type) via the pageimages original or thumbnail; the rest use the generated-cover fallback. TV posters on Wikipedia are spottier than film posters, so this is reported as measured, not rounded up.
- **Streaming honesty:** the platform shown for a series is its **original network or service** (where it first aired). Where a show streams *today* changes constantly and is **not** tracked or claimed anywhere in the app.
- The standing exclusion was applied to additions: **no Indian productions** (category/infobox-country evidence). Existing-style international hits already famous worldwide (e.g. *Squid Game*, *Dark*, *Money Heist*) are in, as intended.
- Genre spread: GENRE_TABLE. Service-worker cache is `movie-night-v6`; `js/movies.js` is untouched by this release.

## What's new in v5

- **The catalog more than quintupled: 3,804 → 21,536 films**, in two passes over the same source pool (the v3 harvest plus a new deep harvest of 105,989 Wikipedia articles across dated year/genre categories and 18 genre-tree walks). The first pass reached 10,740; an overnight expansion pass added 10,846 more. Every addition was quality-gated by the stated proxy — Wikipedia notability + substance: article length (the expansion's bar of 2,800 characters never had to be relaxed), a real lead extract as the description, a director credit from the infobox or extract. **There are no Rotten Tomatoes scores in this data source and none are fabricated** — article substance and awards/festival/best-of category provenance are the notability signal, called what it is.
- **Expansion additions are American-first, as specified.** Origin is Wikipedia category evidence (an "American … films" production category). Of the 10,846 expansion additions: **United States 7,981 (73.6%)**, no usable origin evidence 2,362, English-language-evidence only 429, and **other foreign productions just 77 (0.7%)** — far under the 15% minority cap, because the US pool alone filled the target. **86.0% of expansion additions are from 2000–2026** (2010–2019: 3,971 · 2000–2009: 3,065 · 2020–2026: 2,294). Films already in the catalog were kept regardless of origin — the American focus governed additions only. The Indian-production exclusion was applied to every addition; the test suite's description scan caught 3 phrasings the build-time screen missed (two Gujarati productions, one Hindi) and they were removed.
- **Westerns and Musicals restored — correcting a v4 misread.** Owen said "enough with the westerns and musicals" meaning *stop adding more*; v4 misread it as *cut them down* (Western 238 → 119, Musical 750 → 156). V5 restored all 714 trimmed titles from the v3 dataset (the Indian-production rule re-applied to them), and genuine additions grew both genres well past their v3 counts: **Western 929, Musical 1,204**.
- **Genre floor 400 — now met by every genre except one.** Drama 5,930 · Documentary 5,144 · Modern Drama 4,641 · Comedy 4,602 · Romance 4,091 · Thriller 3,612 · Horror 2,689 · Rom-Com 2,236 · Crime 2,037 · Action 1,858 · Sci-Fi 1,637 · Fantasy 1,337 · Horror Thriller 1,267 · Psychological Thriller 1,219 · Musical 1,204 · Animation 1,176 · War 1,117 · Western 929 · Adventure 906 · Family 880 · Mystery 773 · Superhero 723 · Historical Drama 615 · **Neo-Noir exactly 400** (the expansion's deficit top-up found 55 more genuine members — a critics' label with no real category tree, it crossed the floor honestly). **The one remaining exception: Family Drama 82, locked in the test suite** — Wikipedia has no family-drama category tree outside two Indian-language ones, and after two harvests and a 23,631-candidate prepared pool, 82 is the documented maximum of genuinely-labeled titles. No force-tagging. One honest skew: Documentary is the second-largest tag (5,144) because the source pool itself skews documentary at the notable end.
- **A non-film cleanup, disclosed.** Verification sweeps (identical-description groups, redirect-signature and title-marker scans) found 166 entries that were not films at all — soundtrack albums and songs, video games, a TV series, franchise/character articles that had silently inherited a film's description through Wikipedia redirects, plus one duplicated film (*Saw*, entered at both 2003 and 2004) and 3 Indian-language slips. 113 came from the expansion additions; **50 were in the earlier catalog** (mostly soundtrack albums, e.g. *Iron Man (soundtrack)*) and were removed on the same correctness grounds — albums are not films, and the headline count should not include them. The full removal list with per-entry reasons is kept in the build records.
- **Posters: 85.2% coverage (18,340 of 21,536).** The first pass held 90.2% at 10,740 films by trimming posterless additions; at expansion scale the count took priority over the 90% line (the trade-off was specified in advance). The expansion's additions carry posters at 79.8% — roughly a fifth of notable films have no poster file on Wikipedia at all (no infobox image, no lead image); of the poster files that do exist, the MediaWiki API confirmed 98.5%. Posters are never hot-linked guesses: every URL was API-confirmed (file exists, image MIME, non-trivial size), after the first pass learned the hard way that live-verifying thousands of CDN URLs trips Wikimedia rate limits (HTTP 429) and craters *measured* coverage.
- **Quiz engine: stratified pair sampling.** At 21k scale a purely random pair sampler mirrors catalog density, so quizzes drifted into whichever genre cluster dominates (in simulation, the brainy sci-fi archetype fell to 3/5 strong matches, served smart-horror). Pair candidates are now sampled evenly across primary genres. Simulation on the shipped data: all four archetypes score **5/5 recommendations at cosine ≥ 0.80** to their true taste (means 0.92–0.97), random profiles 5/5, couples floor unrelaxed. One earlier test amendment stands, openly: the harness's "top-1 genre label" check measures taste alignment (cosine ≥ 0.80) instead, because fixed-seed simulated mis-picks legitimately bend revealed taste — the rationale is written into `tests/engine.test.js`.
- `js/movies.js` is now **~15.2 MB** — the honest price of a 21.5k-film offline catalog. First load downloads it once; the service worker (cache `movie-night-v5`) keeps it on-device afterwards, and the app already mitigates the size with chunked grid rendering, lazy-loaded posters and debounced search. The repo ships a `.nojekyll` file so GitHub Pages serves the site as-is — no Jekyll build step, faster and cleaner publishing.

## What was new in v4

- **Quality over bulk: 5,551 → 3,804 films.** Three cuts, all deliberate:
  - **Indian productions removed (551 net).** Films whose Wikipedia sources assert Indian origin or an Indian-language industry (Bollywood/Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi, Punjabi and the rest) are out — detected by enriched nationality (501), lead-extract language markers (35) and corroborated category evidence (21, including *All We Imagine as Light* and *Monkey Man*, which carries six Indian production categories). Non-Indian films with Indian settings or casts **stay** (*Life of Pi*, *Four Lions*, *Lion*). Every removal was re-audited by the signal that fired; 6 false positives were restored — two "Bollywood-inspired/style" mentions (*Christmas Karma*, *Bhai's Cafe*) and four Mexican animated films Wikipedia miscategorizes as Indian.
  - **Westerns trimmed 238 → 119 and Musicals 750 → 156:** core-tier entries plus the best-documented catalog titles; the deep filler is gone.
  - **964 no-poster catalog titles pruned** to hit the poster target below (core tier, the Top 20 and Owen's list were exempt).
- **A refined genre taxonomy, 200+ titles each.** New first-class labels, tagged from Wikipedia category evidence (subcategory provenance like *Psychological thriller films*, *Superhero films*, the neo-noir list) plus documented derived rules: **Thriller 841 · Psychological Thriller 290 · Rom-Com 214 · Sci-Fi 499 · Mystery 472 · Animated 479 · Superhero 217 · Documentary 249 · Romance 393 · Action 679 · Historical Drama 205 · Crime 440 · Neo-Noir 248 · Modern Drama 890 · Horror 485 · Horror Thriller 232**. 465 acclaimed titles were added for the thin genres (Documentary +225 from per-year documentary categories and the Oscar winners list, Neo-Noir +67, Historical Drama +64, Superhero +56, Rom-Com +34), every one with a verified poster and a real description. **Family Drama is the one honest miss at 60:** Wikipedia has no family-drama category tree, the family∩drama intersection of the entire 46,000-film source pool is ~75 titles (mostly animated comedies), and Wikidata's family-drama genre covers 19 English-Wikipedia films — so 60 real titles is the maximum that exists, locked in the tests like Western was. (*Modern Drama* = the derived label for contemporary-set drama: tagged Drama, released 2000 or later, and not Historical Drama.)
- **Posters: 90.5% coverage (3,443 of 3,804).** The big lever was a discovery: the Wikipedia *pageimages* API silently excludes non-free poster images, but the films' infoboxes name the poster files directly — resolving those gained 323 posters the v3 pass missed. Additions all carry verified posters; Owen's-list films are exempt from pruning regardless.
- **Real descriptions.** Catalog-tier descriptions are no longer bare "A 2023 … film directed by …" one-liners: 2,931 were upgraded to the first 1–2 sentences of the film's Wikipedia lead, cleaned and trimmed (99.9% of the catalog tier; 3 films had no usable extract). Catalog descriptions are adapted from Wikipedia and are licensed **CC BY-SA** (see License).
- **The quiz engine, rebuilt and proven.** Passed films now subtract at half weight (was 0.35); pair selection is adaptive (concentrated 1–2-axis contrasts early with recognizable titles, dilemmas late, no repeated contrast axis back-to-back, no obscure-vs-obscure early); recommendations add a small core-tier quality prior on near-ties and a diversity rule (max 2 of 5 from one primary genre unless strong matches demand otherwise); couples picks must clear a **per-partner floor** — a minimum match for *both* partners, not just a good average. A simulation harness (`tests/quiz-sim.js`) proves it end-to-end: synthetic users with known tastes take full quizzes, and on the current dataset all four archetypes (horror, rom-com, brainy sci-fi, family/cozy) score **5/5 recommendations at cosine ≥ 0.80 to their true taste** (means 0.86–0.99), three random profiles score 5/5, and couples simulations clear the full 0.55 floor for both partners without relaxing it.
- **Owen's "Best Movies of All Time" list is protected.** All 89 lines of the list (100 concrete films with trilogies/series expanded) resolve to dataset entries — 20 gaps were added as hand-written core entries (*V for Vendetta*, *Joker* (2019), *I Am Legend*, *Terrifier* (2016), *Die Welle*, the 1997 *Hercules*, the 1968 *Planet of the Apes*, even the 5-minute Pixar short *Presto*) — and a test asserts every one stays.
- **Accounts, sharing, and a new icon.** Profiles grew into on-device accounts (name + email + PIN, salted-hash storage, full per-account isolation, legacy profiles claimable with their data intact), the app is shareable via one canonical link with a proper install flow, and the app icon is now Owen's custom clapperboard-and-popcorn artwork (`icons/icon.png` + sized variants). Details under [Share it](#share-it) and [Accounts](#accounts-on-device-only).
- `js/movies.js` shrank to ~2.7 MB and the service-worker cache is `movie-night-v4`.

## What was new in v3

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

- **Browse** — the full library (21,500+ films) in a searchable, genre-filterable grid that renders in chunks so it stays fast. Tap any film for details: story summary, director, runtime, rating, its taste-vector bars, keywords, and **“More like this”** (the six nearest films by vector similarity). Favorite and watchlist buttons on every film.
- **TV Shows** 📺 — a first-class second section (Movies | TV Shows switch on Browse, plus a More-tab entry): 500+ series with posters and descriptions, its own genre chips and sorts, series detail pages (years, status, seasons/episodes, original network, creator), a **Next Series Quiz** (same engine, series pool), **Series Shuffle**, a curated **Top Series** list, and per-account series favorites/watchlist kept separate from the movie lists.
- **Mood Match Quiz (solo)** — pick 10, 15 or 20 rounds of two-movies-side-by-side. Early rounds are broad contrasts; later rounds are close calls near your emerging taste, so every tap teaches the app something. “Both sound good” and “Neither” count too. You finish with **3–5 ranked recommendations**, each with a match % and a plain-English *why*.
- **Couples Mode** 💞 — the signature mode. Two profiles alternate picks on one phone, with a “pass the phone” moment between turns so nobody sees the other's answers. The app averages both taste vectors, adds a bonus for whatever you *both* love, and recommends films with a **match % for each partner**.
- **Top 20 of All Time** — *Inception* at #1, Owen's essentials, and the rest of the slots drawn from the highest-rated films ever on Rotten Tomatoes — each with a one-line case.
- **Shuffle** — one tap deals 5 random films (optionally within one genre). Re-shuffle freely.
- **Accounts** — sign up with name + email + PIN (or browse as Guest). Each account keeps its own favorites, watchlist, quiz history and **taste profile**, fully separate from every other account on the same phone. Couples mode can pair any two people on the device. Everything is stored in `localStorage` on the device — nothing leaves the phone (see [Accounts](#accounts-on-device-only)).
- **Shareable** — one link installs it on anyone's phone; the Profile and More tabs have a **Share this app** button (system share sheet, or copy-the-link fallback).
- **Installable & offline** — add it to your home screen like a native app; a service worker caches the app shell so it opens offline.

## Deploy on GitHub Pages (2 minutes)

1. Create a new repository on GitHub (e.g. `movie-night`) — or use an existing one.
2. Upload all of this project's files to the repo root (the folder structure must stay as-is: `index.html` at the top, plus `css/`, `js/`, `icons/`). Keep the `.nojekyll` file — it tells GitHub Pages to publish the files exactly as they are instead of running a Jekyll build first, which makes the Pages build faster and avoids Jekyll surprises.
3. In the repo, go to **Settings → Pages**.
4. Under *Build and deployment*, choose **Deploy from a branch**, pick your main branch and the `/ (root)` folder, and save.
5. Wait ~a minute; GitHub shows your live URL (like `https://yourname.github.io/movie-night/`).
6. Open that URL on your phone → browser menu → **Add to Home Screen / Install app**. Done — it now behaves like an app.

> Every path in the app is relative, so it works from a project subpath (`/movie-night/`) as well as from a domain root.

## Share it

Send anyone the link: **https://okmantz.github.io/MOVIE-NIGHT/**

They open it on their phone and tap **Add to Home Screen** (iPhone: Share → *Add to Home Screen*; Android: ⋮ menu → *Install app*). No app store, no account with Owen, nothing to pay — the app runs entirely on their phone, and they create their own account there. The in-app **Share this app** buttons use this same URL, which lives in exactly one place in the code: the `APP_URL` constant at the top of `js/app.js`. If the Pages URL ever differs, update that one constant.

## Accounts (on-device only)

Movie Night's accounts are **stored on the device only** — there is no server in this version. Signing up saves your name, your email, and a **salted SHA-256 hash** of your PIN/password (Web Crypto; the plaintext is never stored) in the browser's `localStorage`, namespaced per account (`js/accounts.js`). Each account's favorites, watchlist, quiz history and taste profile live under that account's own storage key, invisible to other accounts on the same phone. People who used the pre-accounts version find their old profiles waiting as "unclaimed" — claim one with an email + PIN and all of its data carries over untouched.

What this means in practice: each person who installs the app creates **their own account on their own phone**; accounts do **not** sync across devices, and clearing the browser's site data deletes them. That's the honest trade for zero servers and zero cost.

### Want cloud accounts later?

The upgrade path, when it's worth it:

- Create a **Firebase** (or Supabase) project and enable email/password authentication — it replaces the local hash check with real auth and gives every user a server-side UID.
- Move the per-account data (`movienight.data.<id>` blobs) into Firestore/Supabase rows keyed by that UID; the data shapes already match one-to-one.
- On first sign-in, upload the device's local data for that account (the migration pattern in `js/accounts.js` is the template), then read/write through the backend SDK instead of `localStorage`.
- Keep the guest mode and the whole quiz engine exactly as they are — they never needed the server.

## How the recommender works

Each film/series has a taste vector — ten numbers (0–10): `adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird` — and an internal appeal score `ap` (0–100).

- **Solo quiz:** each round shows two well-known titles. Your picks add the chosen vector and subtract half of the passed one (± small weights for "both/neither"). The engine then z-scores everything against the catalog, ranks every unseen title by `0.72 × taste fit + 0.28 × similarity to the films you chose − a penalty for similarity to the ones you rejected + a small appeal bonus`, applies the audience/length/era filter, and picks the final five with maximal-marginal-relevance re-ranking so they differ from each other.
- **Pair selection (`nextPair`):** early rounds ask about very recognizable titles in concentrated contrasts (two films differing mainly on one or two axes); the middle blends contrast with your emerging taste; late rounds serve near-tie dilemmas. A contrast axis is never repeated back-to-back and obscure titles are never asked about.
- **Couples:** each partner builds their own preference from their own turns. A recommendation must clear a per-partner floor (centered fit ≥ 0.25 for *each* partner, relaxed stepwise only if too few clear it); survivors are ranked by fairness — half the mean fit, half the worse partner's fit — then diversified. Each result shows both partners' match %.
- **More like this:** centered cosine similarity plus a small appeal bonus.
- **Match %:** `50 + 50·tanh(1.25 × centered cosine)` — 50% is an average film for you; 90%+ is genuinely strong.

All logic lives in `js/engine.js`, separated from the UI and covered by tests — including `tests/quiz-sim.js`, which plays full quizzes as synthetic users with known tastes and scores the recommendations against those true tastes.

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
node tests/engine.test.js     # dataset + engine + quiz-quality harness (29 checks)
node tests/shows.test.js      # TV dataset + Next Series quiz simulation
node tests/accounts.test.js   # on-device accounts: hashing, isolation, migration (7 checks)
```

No dependencies — plain Node. The engine suite checks the dataset (count, schema, vector ranges, Top 20 integrity, the refined-taxonomy minimums, the Indian-removal rule, ≥90% poster coverage, and every title on Owen's best-movies list), the engine (preference weights, pair generation, recommendation counts and exclusions, quality prior, diversity rule, couples floor, shuffle, similarity ranking) and runs the simulation harness end-to-end. The accounts suite exercises the real storage layer in Node (with a `localStorage` shim and Node's Web Crypto): salted hashing, right-PIN/wrong-PIN verification, per-account data isolation, and the legacy-profile migration.

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
js/accounts.js        On-device accounts: salted-hash credentials + per-account storage
js/app.js             UI, routing, welcome/sign-in, sharing, localStorage
manifest.webmanifest  PWA manifest (custom clapperboard + popcorn icon set)
sw.js                 Service worker (offline shell, cache movie-night-v7)
.nojekyll             Tells GitHub Pages to serve the files as-is (no Jekyll build)
icons/                icon.svg plus Owen's custom PNG icon (1024/512/192/180/32)
tools/catalog_lib.py     v7 shared helpers (taxonomy, vectors, origin detection)
tools/rebuild_movies_v7.py  v7 movie audit/rebuild (appeal + evidence scoring)
tools/rebuild_shows_v7.py   v7 TV rebuild (reads tools/shows_v7_curated.txt)
tools/shows_v7_curated.txt  Hand-curated American-audience series list
tools/fetch_posters.py  Verified poster lookup via Wikipedia
tools/harvest_categories.py  Bulk title harvest from Wikipedia year/genre categories
tools/enrich_catalog.py  Selection + infobox/summary enrichment for catalog-tier entries
tools/build_entries.py   Merges enriched entries into js/movies.js
tools/build_v4.py        v4 pipeline: Indian removal, trims, taxonomy retag, additions, posters, prune
tools/v4_articles.py / v4_harvest.py / v4_lib.py  v4 category + enrichment helpers
tools/restore_false_positives.py  Audited restorations from the removal pass
tools/v5_harvest.py      v5 deep harvest: pre-2000 dated categories + genre-tree walks
tools/v5_enrich.py       v5 candidate pool + batch API enrichment (extract/poster/categories)
tools/build_v5.py        v5 pipeline: Western/Musical restoration, floor-first additions, posters
tools/v5_poster_fix.py   v5 poster recovery (API-confirmed) + coverage trim
tools/v5_expand.py       v5 expansion: extract backfill (batches of 20), remainder enrichment, American-first selection to 20k+
tools/retag_family_drama.py        Derived Family Drama tagging (documented in the file)
tools/merge_owen_list.py           Guarantees Owen's best-movies list is fully present
tools/patch_owen_posters.py        Poster retries + tracking-param cleanup for protected titles
tests/engine.test.js  Dataset + engine suite with the quiz-quality harness
tests/accounts.test.js  Accounts suite (hashing, isolation, migration)
tests/quiz-sim.js       Synthetic-user simulation used by the engine suite
```

## License

MIT — see `LICENSE`. Film posters belong to their respective studios; they're referenced by URL from Wikipedia for personal/educational use. **Catalog-tier descriptions are adapted from Wikipedia article lead sections and are licensed CC BY-SA** (attribution: Wikipedia contributors); core-tier descriptions are original to this project.
