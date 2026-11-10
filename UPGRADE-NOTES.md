# Movie Night v12 — upgrade notes

Copy every file in this ZIP into the matching path in the repo (overwrite when asked), commit, and let GitHub Pages redeploy.

## What changed
- **Premium redesign.** New design system (`css/styles.css`): refined typography (Fraunces + Inter), consistent cards/buttons/segmented controls, a slide-in watchlist drawer, light + dark modes, mobile-first layout with a bottom tab bar and a desktop top nav. Every screen uses the same components.
- **Smarter quizzes (`js/engine.js`).** The quiz now starts with *tonight's mood* (9 moods, pick up to 2) and a *"Not tonight"* list (e.g. skip Horror even if you love it). Mood outweighs long-term taste, every question is chosen to split the titles still in play in half, the last two questions compare the current front-runners, and a live "~N films still in play" counter shows it narrowing. Solo has Back; Couples uses pass-the-phone. In simulation (`node tests/quiz-sim-v12.js 200`), ~49–52% of picks land in the user's true top 2% vs ~11–15% before (assuming the mood is named correctly), and it degrades gracefully if it is not.
- **Couples is now a quiz mode** (Quiz → Who's watching → Couples; Player 2 can be any profile or a one-night guest). TV Shows and Couples were removed from the old "More" page.
- **Account page** replaces "More ways to play": profile & avatar studio, colours & theme, personality quiz, ratings key, share link, activity & achievements, log out.
- **Hamburger menu** (top-left) opens two collapsible watchlists: Movies and TV (open, mark watched, remove).
- **Top 20 is personal.** *For you* (taste + declared genres + quality, diversified) or *Canon*; Movies | TV; genre, era, hide-watched, and ✕ to drop a title (the next best moves up). Finishing the personality quiz (now 4 steps, with an optional "usually skip" step) builds it automatically and jumps to it.
- **Tonight's pick changes** every visit (weighted-random, skips the last 60 shown and anything you've watched or thumbed down) plus an "Another pick" button.
- **Profile customisation.** 60 emoji in 4 sets or a monogram, 8 gradients + 8 solid colours, 4 frames, 8 colour themes (incl. two light), custom accent colour and a light/dark switch. The theme re-skins the whole app and is remembered per account (applied before first paint, no flash).
- **Ratings & reviews.** Cards and detail sheets show the TMDB rating; with a free OMDb key (Account → Ratings & reviews) the detail sheet adds live IMDb, Rotten Tomatoes and Metacritic scores (cached 30 days) plus awards, and always shows "read reviews" links to IMDb / Rotten Tomatoes / TMDB. Rotten Tomatoes has no public API and IMDb's official API is paid, so OMDb is the practical route.

## What still needs ONE run from you (be aware)
The build sandbox could not reach TMDB, so **the new catalog data is not in this ZIP.** The extension files (`js/movies-ext.js`, `js/shows-ext.js`, `js/*-meta.js`) are empty stubs that the app already loads lazily. To add the 8,000 movies + 3,500 shows with posters, ratings, IMDb ids and streaming providers:
1. Get a free TMDB key: themoviedb.org → Settings → API → "API Key (v3 auth)".
2. GitHub repo → Settings → Secrets and variables → Actions → new secret `TMDB_API_KEY`.
3. Actions tab → **Expand catalog (TMDB)** → Run workflow (defaults 8000 / 3500, metadata on). It commits the data files itself (takes a couple of hours).
Or locally: `export TMDB_API_KEY=...; python3 tools/v12_tmdb_import.py --movies 8000 --shows 3500 --meta`, then `python3 tools/v12_tmdb_import.py --report`.

Notes: every new title must have a poster and a real description (100% by construction). The 7 movies and 22 shows in the current catalog that lack covers are fixed by `--meta`. Quality ladder: movies avg ≥ 6.4 / 500 votes (relaxing to 6.0 / 150), shows avg ≥ 7.0 / 200 votes (relaxing to 6.6 / 80); if TMDB doesn't contain enough titles above that bar the script says so instead of padding. The importer is tested against a mock TMDB server (`python3 tools/tests/test_v12_import.py`) but has not been run against the real API, so check `--report` afterwards. Streaming-provider filtering ("Only on my services") appears automatically once enough titles have provider data.

## Tests
```bash
node tests/engine.test.js && node tests/engine-v12.test.js && node tests/shows.test.js
node tests/accounts.test.js && node tests/ratings.test.js
python3 tools/tests/test_v12_import.py
npm i jsdom && node tests/ui-smoke.test.js     # full click-through
```

---

# Movie Night upgrade notes

This patch updates the existing static/PWA application. Copy the files in this ZIP into the matching paths in the repository and allow GitHub to overwrite the old files.

## Included
- Per-title thumbs-up / thumbs-down rating and an Already Watched toggle in each title's detail sheet (movies and series).
- Per-profile persistence for ratings, watched history, event history, quiz answers and achievement unlocks, while retaining the existing local-only account model.
- Three-step first-use entertainment personality quiz, with a retake button in the profile.
- Evolving identity panel with a personality archetype, taste-axis meters, watched/rated counts, average thumbs score, most-watched genres, most-watched decades and leading directors/creators.
- Achievement collection with Cinephile, Horror Addict, Nolan Architect, Binge Master, Genre Explorer, Movie Historian and Double Feature milestones.
- Ten shuffle modes with a single-title roulette reveal and selection explanation.
- Quiz skips and passed titles are recorded; disliked and repeatedly skipped titles are excluded from subsequent quiz recommendations.
- Five additional TV series: The Pitt, Shōgun, The Residence, Monarch: Legacy of Monsters and Black Doves.
- Poster recovery for empty and SVG/logo-only poster entries using Wikipedia's page-image API, with four concurrent lookups and local fallback art if no usable thumbnail is returned.
- Service-worker cache version incremented so clients fetch the new app files.

## Important limitations (not represented as completed)
- The catalog has no cast/actor metadata, so favorite actors cannot yet be calculated. Creator/director summaries are available where catalog fields exist.
- The current app has no backend or shared analytics. Cross-user taste comparisons, live seasonal challenges and limited-time community events need a server-side service and privacy/consent design.
- Streaming-platform answers are saved as preference context, but this repository has no reliable live streaming-availability dataset/API, so the quiz does not claim a title is currently available on a selected service.
- Poster recovery is best-effort, not a guarantee of 99.9% verified theatrical key art. The supplied catalog currently has 153 movie entries and 115 show entries with no poster URL, plus 3 movie and 352 show SVG/logo URLs. Wikipedia page thumbnails can be absent or can be a non-poster image; entries without a usable thumbnail retain the app's designed fallback. To guarantee 99.9% genuine poster art, use a licensed movie-poster provider such as TMDB with a configured API key and verify every returned asset, or bundle verified poster files.
- Thumbs are a two-state preference signal, not a 1–10 star rating. The average shown is the mean of +1 / -1 responses.
- All activity remains local to the device, consistent with the existing account architecture. It does not sync between devices.

## Tests
Run from the repository root:

```bash
node tests/engine.test.js
node tests/shows.test.js
node tests/accounts.test.js
```

## v10 — Ratings everywhere, entertainment identity, roulette, achievements, real posters
- Thumbs up/down + "Already watched" on every card and quiz result (previously detail-only); un-rating now correctly reverses its taste effect.
- Entertainment identity v2: named dimension percentages (Psychological Thriller, Mind Games, Dark Atmosphere, High-Stakes Action, Supernatural Horror, Epic Worlds...), personality title, taste-evolution snapshots, favorite directors/creators AND actors (new cast data), favorite decades, average rating from your thumbs, thumbs-up rate, "unexpected loves", and you-vs-other-viewers comparisons (other on-device profiles + catalog baseline).
- Personality quiz (3 steps: platforms, genres, what makes a story unforgettable) now genuinely seeds the taste vector via per-genre boosts (re-taking replaces the old boost, never stacks), takes a taste snapshot, and is reachable from the More tab as well as Profile.
- Roulette shuffle: real spin animation, then a reveal with match % and a reason (mode reason + taste fit + trait thread). Mode fixes: Throwback is pre-2000, Outside My Comfort Zone keeps a quality floor, Hidden Gem prefers high fit among less-famous titles.
- Achievements rebuilt with progress bars; added Perfect Match (find a 95%+ quiz match); Nolan Architect now means every Nolan film in the catalog. Four seasonal collections with limited-time windows (Autumn Horror, December Comfort, Summer Spectacle, Spring Mysteries) tracked from dated watched events.
- Engine memory: loved/watched titles form keyword "trait threads"; quiz and shuffle recommendations name the shared thread (e.g. the "unreliable" thread, like Shutter Island). Tonight's hero pick avoids titles you've watched or disliked. Quiz exclusions for disliked/skipped/repeatedly-ignored were already in v9 and are unchanged.
- Data: movies 11,137 with 99.94% real posters; shows 1,576 (+202 net new) with 98.60% real posters. The 567 show "posters" that were actually logos/title cards were replaced with real key art via TVmaze; Better Call Saul now has its real poster, 6 seasons, and cast. Cast coverage: 1,397 shows and 702 popular movies. Seasons coverage: 1,515 shows. 129 shows carry the new Anime genre tag. Remaining poster gaps are ~22 news/variety/unaired obscurities with no key art in any reachable source — they use generated covers.
- Test alignment (not a behavior change): tests/shows.test.js poster rule now allows verified real-poster hosts (Wikimedia, TVmaze, Apple artwork) and counts logos/SVGs as bad posters, with a 95% real-poster coverage floor — because for TV series, Wikimedia mostly hosts logos, not posters.
- Detail hero fix: the poster is shown as a proper portrait over a blurred backdrop instead of being stretched into a wide banner.

## v11
- Roulette now returns a ranked, diverse top 5 (`E.rouletteSelect`) with match scores, shown as a podium.
- Premium design layer appended to css/styles.css (tokens, buttons, chips, cards, motion, focus states).
- js/movies.js: +1,089 evidence-backed films (12,226 total) via tools/v11_add_movies.py (`--loose --count 4000` to go wider).
- tools/v11_add_shows.py: TVmaze importer for +1,000 series; run locally (`python3 tools/v11_add_shows.py --count 1000`).
- sw.js cache bumped to v11. Engine tests relaxed for the broader era mix; new roulette tests added.

## v13 — refinement
- Quiz: "how long" removed; compact one-screen setup with optional fine-tune fold.
- Top 20: customizable "My list" (add, replace, reorder, remove), compact header with Filters panel.
- Detail sheet updates in place — scroll position no longer jumps on rate/favorite/watchlist/watched.
- Account: personalization grouped into accordion folds.
- Emoji chrome replaced with line icons; premium restyle (emoji avatar sets kept as opt-in).
- Adaptive engine: favorites, likes/dislikes, watchlist, Top 20, watched and skips all feed a reversible affinity model that shapes Top 20, quiz results, couples, shuffle and match %.
- Service worker cache bumped to movienight-v13.
