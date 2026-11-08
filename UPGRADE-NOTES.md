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
