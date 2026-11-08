#!/usr/bin/env python3
"""Movie Night v9 data pass — method documentation (executed pass was Node,
see /tmp stage scripts from the Nov 8 2026 session; this file documents the
exact sources, matching rules and normalizations so the pass is reproducible).

GOALS
  * Real poster key art for as close to 100% of movies + shows as the free
    sources allow (logos / title cards / .svg wordmarks do NOT count).
  * Seasons / status / network / cast filled for shows; cast for popular movies.
  * +100 movies and +100 shows, all with real posters + real descriptions.
  * 'Anime' genre tag on Japanese animated series.

SOURCES (all free, no API keys)
  * TVmaze            https://api.tvmaze.com  (~20 calls / 10 s; paced 550 ms)
  * Wikipedia         MediaWiki API (batched, 40 titles/call) + REST extracts
  * Wikidata          P18 (image) fallback for movie posters
  * iTunes Search API ATTEMPTED FIRST for movie posters as specified, but it
    returns {"resultCount": 0} for every query from this network (verified
    with curl and Node, multiple titles/countries), so all movie posters were
    resolved through the documented fallback chain:
    Wikipedia search -> infobox image / pageimages -> Wikidata P18.

DEFINITIONS
  bad_poster(u)  = empty, contains "logo" (case-insensitive), or contains ".svg"
  real_poster(u) = non-empty and not bad_poster(u)

SHOWS — TVmaze overhaul (stage 1)
  For EVERY show (poster-bad first): GET /singlesearch/shows?q=TITLE
  &embed[]=seasons&embed[]=cast  (one call returns show + seasons + cast).
  Acceptance: word-set Dice similarity of normalized titles >= 0.6 and
  |catalog startYear - TVmaze premiered year| <= 2 (titles of <= 4 normalized
  chars require an exact match and year diff <= 1). On rejection, fall back to
  /search/shows and take the best-scoring candidate, then
  /shows/:id?embed[]=seasons&embed[]=cast.
  Applied to the catalog entry:
    poster   replaced ONLY if the current poster is bad and TVmaze's
             image.original is a real poster.
    seasons  filled only if null: count of embedded seasons with number >= 1
             (specials seasons have number=null and are excluded).
    status   filled only if null; TVmaze "Running" / "To Be Determined" /
             "In Development" all normalize to "Running", "Ended" stays.
             Correction: status "Running" + a past endYear + TVmaze "Ended"
             becomes "Ended".
    network  filled only if null: network.name else webChannel.name.
    endYear  filled only if null, from TVmaze "ended" (Ended shows only).
    cast     new field, filled only if absent: first 5 person names from the
             embedded cast, billing order, de-duplicated.
  Episodes were deliberately NOT bulk-fetched for existing shows (would have
  doubled the call volume); they ARE fetched for new additions.

MOVIES — poster repair (stage 2)
  Targets: every movie with a bad poster. Per movie: Wikipedia search
  `"TITLE" YEAR film` plus deterministic variants TITLE (YEAR film),
  TITLE (film), TITLE; candidates scored by title similarity + variant bonus;
  article must contain {{Infobox film}} and, when a release year is parseable
  from the infobox, match the catalog year within 1. Poster = infobox `image`
  resolved through imageinfo, else the pageimages original. Remaining titles
  fall back to Wikidata P18: filename -> MD5 -> candidate upload.wikimedia.org
  URLs under /commons/ and /en/, HEAD-verified.

MOVIES — cast (stage 3)
  Movies with ap >= 85, highest appeal first, capped at 700 titles. Batched
  MediaWiki revisions (section 0) over TITLE (YEAR film) / TITLE (film) /
  TITLE; the first article with {{Infobox film}} whose `starring` field parses
  to >= 2 clean names wins; `cast` = up to 4 names (wikilinks unwrapped,
  plainlist/ubl templates flattened, refs stripped).

ADDITIONS (stage 4)
  Candidates: the ChatGPT-suggested priority lists first (movies: 51 titles,
  shows: 26 titles), then curated top-ups (2023-2026 releases + acclaimed
  backlog for movies; prestige + anime + classics + K-drama for shows).
  De-duplication: normalized title (lowercase, punctuation stripped, leading
  "the" dropped) + year for movies; normalized title (+ a suffix rule for
  e.g. "Avatar: The Legend of Korra" vs "The Legend of Korra") for shows.
  NO Indian productions (standing rule).
  Movies: description = Wikipedia lead extract trimmed to <= 380 chars at a
  sentence boundary (>= 40 chars); poster as in stage 2 (must be real);
  director / cast / runtime parsed from the infobox; genres curated,
  MAX 3 (test-enforced); vector = genre-baseline average (primary genre
  double-weighted); tier "catalog"; ap 50-88 by fame; kf=1 for Family titles.
  Shows: TVmaze search-scored match (title similarity + year proximity +
  Animation-type bonus for anime) -> poster (must be real), seasons, cast,
  status (normalized as above), network, premiered/ended years, plus an
  episode count from /shows/:id/episodes (entries with a numeric episode
  number). Description = Wikipedia lead extract (<= 600 chars) from the
  "(TV series)"-family of article variants guarded by {{Infobox television}},
  falling back to the TVmaze summary with HTML stripped. Creator parsed from
  the Wikipedia infobox when present. tier "catalog".

ANIME RETAG (stage 5)
  A show is tagged 'Anime' (added to genres, 'Animation' kept/added) when:
    * its TVmaze record is country JP with type Animation / genre Anime /
      language Japanese, OR
    * its normalized title is in the knowledge-based anime title set
      (tools run used /tmp/anime_set.js, ~300 title variants).
  New anime additions carry 'Anime' in their curated genres from the start.

INVARIANTS KEPT (test-enforced)
  * Movie genres 1-3; descriptions >= 30 (we ship >= 40); years 1900-2027;
    ap 0-100; unique ids; vectors 0-10 on all ten axes.
  * Show ids start "tv-"; descriptions >= 40; keywords arrays; startYear
    1946-2026 or null; endYear >= startYear or null; seasons 1-80 or null;
    episodes >= 1 or null; status exactly "Ended" / "Running" / null;
    tier "core" / "catalog". Existing shows are never dropped or renamed;
    Breaking Bad stays core with network + seasons.
  * NOTE: tests/shows.test.js originally asserted all show posters are
    upload.wikimedia.org URLs. TVmaze posters (static.tvmaze.com) and iTunes
    art (*.mzstatic.com) intentionally violate that assertion — real key art
    is the requirement; the test's allowed-host list was updated separately
    (test-alignment edit, not a data workaround).
"""
