/* Movie Night — ratings & reviews layer (v12).
   Three sources, in order of reliability:
     1. STATIC  — numbers baked into the catalog at build time by
                  tools/v12_tmdb_import.py: `r` (TMDB community average, 0-10),
                  `ir` (IMDb rating, when an IMDb ratings file was supplied),
                  `ii` (IMDb id), `tm` (TMDB id). Works offline, needs no key.
     2. LIVE    — OMDb (omdbapi.com) returns the IMDb rating, the Rotten
                  Tomatoes critics score and the Metacritic score in one call.
                  It needs a free API key that the user pastes in Account →
                  Ratings & reviews. Results are cached on-device for 30 days
                  so a title is looked up once.
     3. LINKS   — outbound links to read the actual reviews on IMDb, Rotten
                  Tomatoes and TMDB (we never copy review text).
   Why OMDb: Rotten Tomatoes has no public API and IMDb's official API is a
   paid enterprise product; OMDb is the practical, ToS-friendly way to get both.
   Works in the browser (window.MovieRatings) and Node (module.exports). */
(function (global) {
  'use strict';

  var KEY_STORE = 'movienight.omdbkey.v1';
  var CACHE_STORE = 'movienight.ratings.v1';
  var TTL_MS = 30 * 24 * 3600 * 1000;
  var NEG_TTL_MS = 3 * 24 * 3600 * 1000;
  var limited = false;                 /* OMDb daily limit hit this session */
  var queue = Promise.resolve();

  function ls() { try { return global.localStorage; } catch (e) { return null; } }
  function read(key, fb) { try { var v = ls().getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function write(key, val) { try { ls().setItem(key, JSON.stringify(val)); } catch (e) { /* full / blocked */ } }

  function getKey() { try { return ls().getItem(KEY_STORE) || ''; } catch (e) { return ''; } }
  function setKey(k) {
    try { k = String(k || '').trim(); if (k) ls().setItem(KEY_STORE, k); else ls().removeItem(KEY_STORE); limited = false; } catch (e) { /* ignore */ }
  }
  function hasKey() { return !!getKey(); }

  function isShow(item) { return !!item && item.startYear !== undefined; }
  function num(x) { var n = parseFloat(String(x).replace(/,/g, '')); return isFinite(n) ? n : null; }

  /* Static ratings straight from the catalog record. */
  function staticRatings(item) {
    var out = {};
    if (!item) return out;
    if (typeof item.ir === 'number') out.imdb = { rating: item.ir, source: 'catalog' };
    if (typeof item.r === 'number' && item.r > 0) out.tmdb = { rating: item.r };
    return out;
  }

  function omdbUrl(item, key) {
    var base = 'https://www.omdbapi.com/?apikey=' + encodeURIComponent(key) + '&plot=short&tomatoes=true';
    if (item.ii) return base + '&i=' + encodeURIComponent(item.ii);
    var y = isShow(item) ? item.startYear : item.year;
    return base + '&t=' + encodeURIComponent(item.title) + (y ? '&y=' + y : '') + '&type=' + (isShow(item) ? 'series' : 'movie');
  }

  /* OMDb payload -> normalised ratings object. */
  function parseOmdb(j) {
    if (!j || j.Response === 'False') {
      var err = (j && j.Error) || 'Not found';
      return { ok: false, error: err, limited: /limit/i.test(err), badKey: /invalid api key|no api key/i.test(err) };
    }
    var out = { ok: true };
    var imdb = num(j.imdbRating);
    if (imdb) out.imdb = { rating: imdb, votes: num(j.imdbVotes), id: j.imdbID || null };
    (j.Ratings || []).forEach(function (r) {
      if (r.Source === 'Rotten Tomatoes') { var p = num(r.Value); if (p != null) out.rt = { pct: Math.round(p) }; }
      else if (r.Source === 'Metacritic') { var m = num(r.Value); if (m != null) out.mc = { score: Math.round(m) }; }
    });
    if (!out.mc) { var ms = num(j.Metascore); if (ms) out.mc = { score: Math.round(ms) }; }
    if (j.Awards && j.Awards !== 'N/A') out.awards = j.Awards;
    if (j.Rated && j.Rated !== 'N/A') out.rated = j.Rated;
    return out;
  }

  function cacheGet(id) {
    var c = read(CACHE_STORE, {}), e = c[id];
    if (!e) return null;
    var ttl = e.d && e.d.ok === false ? NEG_TTL_MS : TTL_MS;
    return (Date.now() - e.t) < ttl ? e.d : null;
  }
  function cachePut(id, d) {
    var c = read(CACHE_STORE, {}), keys = Object.keys(c);
    if (keys.length > 1500) {                       /* prune oldest 300 */
      keys.sort(function (a, b) { return c[a].t - c[b].t; }).slice(0, 300).forEach(function (k) { delete c[k]; });
    }
    c[id] = { t: Date.now(), d: d };
    write(CACHE_STORE, c);
  }
  function clearCache() { try { ls().removeItem(CACHE_STORE); } catch (e) { /* ignore */ } }

  /* Live lookup (queued one at a time to be gentle with the free tier).
     Resolves to a parsed object; never rejects. */
  function fetchLive(item, opts) {
    opts = opts || {};
    var key = getKey();
    if (!key) return Promise.resolve({ ok: false, noKey: true });
    var cached = opts.force ? null : cacheGet(item.id);
    if (cached) return Promise.resolve(cached);
    if (limited) return Promise.resolve({ ok: false, limited: true });
    var f = opts.fetch || global.fetch;
    if (typeof f !== 'function') return Promise.resolve({ ok: false, error: 'fetch unavailable' });
    var job = queue.then(function () {
      return f(omdbUrl(item, key)).then(function (r) { return r.json(); }).then(function (j) {
        var d = parseOmdb(j);
        if (d.limited) limited = true;
        if (d.ok || (!d.limited && !d.badKey)) cachePut(item.id, d);
        return d;
      });
    }).catch(function () { return { ok: false, error: 'network' }; });
    queue = job.then(function () { return null; }, function () { return null; });
    return job;
  }

  /* Merge static + live into one display model. */
  function merge(item, live) {
    var s = staticRatings(item), out = {};
    live = live && live.ok ? live : {};
    var imdb = live.imdb || s.imdb;
    if (imdb) out.imdb = imdb;
    if (live.rt) out.rt = live.rt;
    if (live.mc) out.mc = live.mc;
    if (s.tmdb) out.tmdb = s.tmdb;
    if (live.awards) out.awards = live.awards;
    return out;
  }

  function enc(s) { return encodeURIComponent(s); }
  /* Outbound links to read real reviews. */
  function links(item) {
    var y = isShow(item) ? item.startYear : item.year, out = [];
    out.push({
      id: 'imdb', label: 'IMDb',
      url: item.ii ? 'https://www.imdb.com/title/' + item.ii + '/reviews/' : 'https://www.imdb.com/find/?s=tt&q=' + enc(item.title + (y ? ' ' + y : ''))
    });
    out.push({ id: 'rt', label: 'Rotten Tomatoes', url: 'https://www.rottentomatoes.com/search?search=' + enc(item.title) });
    if (item.tm) out.push({ id: 'tmdb', label: 'TMDB', url: 'https://www.themoviedb.org/' + (isShow(item) ? 'tv' : 'movie') + '/' + item.tm + '/reviews' });
    return out;
  }

  /* Short badge text for cards: best static rating we have, e.g. "7.8". */
  function badge(item) {
    var s = staticRatings(item);
    var r = s.imdb ? s.imdb.rating : (s.tmdb ? s.tmdb.rating : null);
    return r ? r.toFixed(1) : '';
  }

  var api = {
    getKey: getKey, setKey: setKey, hasKey: hasKey, staticRatings: staticRatings, parseOmdb: parseOmdb,
    omdbUrl: omdbUrl, fetchLive: fetchLive, merge: merge, links: links, badge: badge,
    cacheGet: cacheGet, cachePut: cachePut, clearCache: clearCache,
    KEY_STORE: KEY_STORE, CACHE_STORE: CACHE_STORE
  };
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  global.MovieRatings = api;
})(typeof window !== 'undefined' ? window : globalThis);
