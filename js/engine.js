/* Movie Night — recommendation engine.
   Pure logic, no DOM. Works in the browser (window.MovieEngine) and in Node (module.exports)
   so the same code that powers the app is covered by tests/engine.test.js.

   Every movie carries a taste vector: 0-10 scores on ten axes.
   A quiz builds a *preference vector* by adding the vectors of movies the user
   picks (and subtracting a little for the ones they pass on). Recommendations
   are the unseen movies whose vectors have the highest cosine similarity to
   that preference vector — the same "similar by vector" idea as a movie map. */
(function (global) {
  'use strict';

  var AXES = ['adrenaline', 'brainy', 'scary', 'funny', 'heartwarming', 'dark', 'romantic', 'epic', 'cozy', 'weird'];
  var AXIS_LABELS = {
    adrenaline: 'high-energy thrills', brainy: 'smart, thought-provoking stories', scary: 'real scares',
    funny: 'laughs', heartwarming: 'feel-good warmth', dark: 'dark, gritty edges', romantic: 'romance',
    epic: 'big sweeping scale', cozy: 'cozy comfort', weird: 'delightfully weird twists'
  };

  /* Deterministic RNG (mulberry32) so tests and "play again" behave sanely. */
  function makeRng(seed) {
    var a = (seed >>> 0) || 123456789;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function vectorArray(movie) {
    return AXES.map(function (axis) { return movie.vector[axis] || 0; });
  }

  /* ---- v7: centered ("z-scored") scoring ---------------------------------
     Raw cosine on 0-10 vectors is dominated by the catalog-wide average
     (almost every film scores some "dark" and some "brainy"), so everything
     looks 80-95% alike. We subtract the catalog mean per axis and divide by
     its spread before comparing, which makes similarity reflect what is
     DISTINCTIVE about a film. Stats are re-estimated from the live catalog
     on first use (calibrate) and fall back to sane constants. */
  var MU = [5, 5, 2.5, 3.5, 4, 4.5, 2.5, 4.5, 3, 3];
  var SD = [2.6, 2.2, 2.6, 2.8, 2.4, 2.4, 2.6, 2.4, 2.4, 2.2];
  var calibratedFor = null, calVersion = 0;
  function calibrate(movies) {
    if (!movies || !movies.length || calibratedFor === movies) return;
    var step = Math.max(1, Math.floor(movies.length / 4000)), n = 0, i, k;
    var sum = AXES.map(function () { return 0; }), sq = sum.slice();
    for (i = 0; i < movies.length; i += step) {
      for (k = 0; k < AXES.length; k++) {
        var v = (movies[i].vector && movies[i].vector[AXES[k]]) || 0;
        sum[k] += v; sq[k] += v * v;
      }
      n++;
    }
    if (n < 30) return;
    for (k = 0; k < AXES.length; k++) {
      MU[k] = sum[k] / n;
      SD[k] = Math.max(0.8, Math.sqrt(Math.max(0, sq[k] / n - MU[k] * MU[k])));
    }
    calibratedFor = movies; calVersion++;
  }
  function zArray(arr) { return arr.map(function (v, k) { return (v - MU[k]) / SD[k]; }); }
  function zMovie(movie) {
    if (movie._z && movie._zv === calVersion) return movie._z;
    var z = zArray(vectorArray(movie));
    try {
      Object.defineProperty(movie, '_z', { value: z, enumerable: false, writable: true, configurable: true });
      Object.defineProperty(movie, '_zv', { value: calVersion, enumerable: false, writable: true, configurable: true });
    } catch (e) { /* frozen */ }
    return z;
  }
  /* Preferences are weighted SUMS of film vectors; divide by the effective
     total weight (sum / sum-of-means) to recover an average film, then z it. */
  function zPref(pref) {
    var arr = AXES.map(function (a) { return pref[a] || 0; });
    var muSum = 0, k, s = 0;
    for (k = 0; k < MU.length; k++) muSum += MU[k];
    for (k = 0; k < arr.length; k++) s += arr[k];
    var w = s / muSum;
    if (!(w > 0.05)) return null;
    return zArray(arr.map(function (v) { return v / w; }));
  }
  function cosineZ(za, zb) { return za && zb ? cosineArrays(za, zb) : 0; }

  function cosineArrays(a, b) {
    var dot = 0, na = 0, nb = 0;
    for (var i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
    if (na === 0 || nb === 0) return 0;
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
  }

  function cosine(prefObj, movie) {
    return cosineArrays(AXES.map(function (axis) { return prefObj[axis] || 0; }), vectorArray(movie));
  }

  function vectorDistance(m1, m2) {
    var a = vectorArray(m1), b = vectorArray(m2), s = 0;
    for (var i = 0; i < a.length; i++) { var d = a[i] - b[i]; s += d * d; }
    return Math.sqrt(s);
  }

  function emptyPreference() {
    var p = {}; AXES.forEach(function (axis) { p[axis] = 0; }); return p;
  }

  function addMovie(pref, movie, weight) {
    AXES.forEach(function (axis) { pref[axis] += (movie.vector[axis] || 0) * weight; });
    return pref;
  }

  /* picks: [{chosen: movie, passed: movie|null, kind: 'pick'|'both'|'neither'}]
     Both sides of every pick teach the model: the chosen film's vector is
     added at full weight, the passed film's vector is subtracted at half
     weight — a rejection is real information, just softer than a choice. */
  var REJECT_WEIGHT = 0.5;
  function preferenceFromPicks(picks) {
    var pref = emptyPreference();
    picks.forEach(function (p) {
      if (p.kind === 'both') {
        addMovie(pref, p.chosen, 0.6); if (p.passed) addMovie(pref, p.passed, 0.6);
      } else if (p.kind === 'neither') {
        addMovie(pref, p.chosen, -0.25); if (p.passed) addMovie(pref, p.passed, -0.25);
      } else {
        addMovie(pref, p.chosen, 1.0); if (p.passed) addMovie(pref, p.passed, -REJECT_WEIGHT);
      }
    });
    return pref;
  }

  /* Appeal prior (0..1): the catalog's internal popularity/acclaim score,
     so equally good fits resolve toward films a typical viewer has heard of. */
  function appeal(m) {
    if (typeof m.ap === 'number') return Math.max(0, Math.min(1, m.ap / 100));
    return m.tier === 'core' ? 0.8 : (m.poster ? 0.5 : 0.35);
  }
  function qualityPrior(m) { return appeal(m) * 0.10; }

  /* ---- context filters (audience / length / era) ---- */
  function runtimeOf(m) {
    if (typeof m.runtime === 'number' && m.runtime > 0) return m.runtime;
    return null;
  }
  function contextFilter(ctx) {
    ctx = ctx || {};
    return function (m) {
      var isShow = m.startYear !== undefined;
      var y = isShow ? m.startYear : m.year;
      if (ctx.audience === 'family') {
        if (!m.kf) return false;
      } else if (ctx.audience === 'date') {
        if ((m.genres || []).indexOf('Horror') !== -1 || (m.vector && m.vector.scary >= 6)) return false;
        if (m.kf && (m.genres || []).indexOf('Animation') !== -1) return false;
      } else if (ctx.audience === 'adults') {
        if (m.kf && (m.genres || []).indexOf('Animation') !== -1 && m.vector.dark < 3) return false;
      }
      if (ctx.era === 'recent') { if (y && y < 2015) return false; }
      else if (ctx.era === 'modern') { if (y && y < 2000) return false; }
      else if (ctx.era === 'classic') { if (y && y >= 2000) return false; }
      if (!isShow && ctx.length) {
        var rt = runtimeOf(m);
        if (rt) {
          if (ctx.length === 'short' && rt > 105) return false;
          if (ctx.length === 'epic' && rt < 125) return false;
        }
      }
      return true;
    };
  }

  /* Anchors: the films a user actually picked and rejected carry far more
     signal than the averaged taste vector — "I'd watch Knives Out" says
     more than "mystery 6.3". Score = similarity to the nearest chosen films
     minus similarity to rejected ones. */
  function anchorsFromPicks(picks) {
    var liked = [], disliked = [];
    (picks || []).forEach(function (p) {
      if (p.kind === 'neither') { disliked.push(p.chosen); if (p.passed) disliked.push(p.passed); }
      else if (p.kind === 'both') { liked.push(p.chosen); if (p.passed) liked.push(p.passed); }
      else { liked.push(p.chosen); if (p.passed) disliked.push(p.passed); }
    });
    return { liked: liked, disliked: disliked };
  }
  function topMean(sims, n) {
    if (!sims.length) return 0;
    sims.sort(function (a, b) { return b - a; });
    var t = 0, k = Math.min(n, sims.length);
    for (var i = 0; i < k; i++) t += sims[i];
    return t / k;
  }

  function scoreAll(movies, pref, options) {
    var zp = zPref(pref), anchors = options.anchors || null;
    var likedZ = anchors ? anchors.liked.map(zMovie) : [];
    var dislikedZ = anchors ? anchors.disliked.map(zMovie) : [];
    var pop = options.popularity == null ? 1 : options.popularity;
    return movies.map(function (m) {
      var zm = zMovie(m);
      var taste = zp ? cosineArrays(zp, zm) : 0;
      var like = likedZ.length ? topMean(likedZ.map(function (z) { return cosineArrays(z, zm); }), 3) : taste;
      var dis = dislikedZ.length ? topMean(dislikedZ.map(function (z) { return cosineArrays(z, zm); }), 2) : 0;
      var fit = 0.72 * taste + 0.28 * like - 0.22 * Math.max(0, dis - Math.max(0, like) * 0.6);
      var rt = typeof m.r === 'number' ? Math.max(-0.04, Math.min(0.05, (m.r - 6.5) * 0.02)) : 0;
      return { movie: m, score: taste, fit: fit, rank: fit + pop * (0.02 + appeal(m) * 0.10) + rt, z: zm };
    });
  }

  function whyFor(pref, movie, count) {
    var zp = zPref(pref), zm = zMovie(movie);
    var contrib = AXES.map(function (axis, k) {
      return { axis: axis, value: zp ? zp[k] * zm[k] : (pref[axis] || 0) * (movie.vector[axis] || 0) };
    }).filter(function (c) { return c.value > 0; })
      .sort(function (a, b) { return b.value - a.value; })
      .slice(0, count || 2);
    if (!contrib.length) return 'A fresh direction based on your picks.';
    return 'Picked for its ' + contrib.map(function (c) { return AXIS_LABELS[c.axis]; }).join(' and ') + '.';
  }

  /* Maximal-marginal-relevance re-ranking so the final list is five
     great, DIFFERENT films rather than five near-clones. */
  function mmrSelect(ranked, limit, lambda) {
    var out = [], pool = ranked.slice(0, Math.min(ranked.length, 80)), genreCount = {};
    while (out.length < limit && pool.length) {
      var bestI = -1, bestV = -Infinity, i, j;
      for (i = 0; i < pool.length; i++) {
        var maxSim = 0;
        for (j = 0; j < out.length; j++) {
          var sim = cosineArrays(pool[i].z, out[j].z);
          if (sim > maxSim) maxSim = sim;
        }
        var g = pool[i].movie.genres[0] || '';
        var v = pool[i].rank - lambda * Math.max(0, maxSim) - ((genreCount[g] || 0) >= 2 ? 0.15 : 0);
        if (v > bestV) { bestV = v; bestI = i; }
      }
      var pick = pool.splice(bestI, 1)[0];
      out.push(pick);
      var pg = pick.movie.genres[0] || '';
      genreCount[pg] = (genreCount[pg] || 0) + 1;
    }
    return out;
  }

  function buildRecommendations(movies, pref, options) {
    options = options || {};
    calibrate(movies);
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var limit = options.limit || 5;
    var pass = typeof options.filter === 'function' ? options.filter : null;
    var pool = movies.filter(function (m) { return !exclude[m.id] && (!pass || pass(m)); });
    if (pass && pool.length < limit * 3) pool = movies.filter(function (m) { return !exclude[m.id]; });
    var ranked = scoreAll(pool, pref, options).sort(function (a, b) { return b.rank - a.rank; });
    var out = mmrSelect(ranked, limit, options.diversity == null ? 0.22 : options.diversity);
    return out.map(function (r) {
      return { movie: r.movie, score: r.score, fit: r.fit, why: whyFor(pref, r.movie), match: matchPercent(pref, r.movie) };
    });
  }

  function similarMovies(movies, movie, limit) {
    calibrate(movies);
    var zm = zMovie(movie);
    return movies
      .filter(function (m) { return m.id !== movie.id; })
      .map(function (m) { return { movie: m, score: cosineArrays(zm, zMovie(m)) + appeal(m) * 0.08 }; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit || 6)
      .map(function (r) { return r.movie; });
  }

  function sample(arr, n, rng) {
    var copy = arr.slice(), out = [];
    while (copy.length && out.length < n) {
      out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
    }
    return out;
  }

  /* How recognizable a film is: hand-written core tier first, then
     catalog titles with a real poster, then the deep catalogue. */
  function recognizability(m) {
    if (typeof m.ap === 'number') return m.ap >= 78 ? 2 : (m.ap >= 55 ? 1 : 0);
    return m.tier === 'core' ? 2 : (m.poster ? 1 : 0);
  }

  /* The axis on which two films differ most — used to avoid serving the
     same kind of contrast twice in a row. */
  function dominantAxis(a, b) {
    var va = vectorArray(a), vb = vectorArray(b), best = -1, bi = 0;
    for (var i = 0; i < va.length; i++) {
      var d = Math.abs(va[i] - vb[i]);
      if (d > best) { best = d; bi = i; }
    }
    return AXES[bi];
  }

  /* How concentrated a pair's difference is on its top two axes (0..1).
     A concentrated pair ("scary vs not-scary, else alike") isolates one
     taste dimension, so the answer teaches the model more per round. */
  function distanceConcentration(a, b) {
    var va = vectorArray(a), vb = vectorArray(b), ds = [], total = 0, i, d;
    for (i = 0; i < va.length; i++) { d = Math.abs(va[i] - vb[i]); ds.push(d); total += d; }
    if (!total) return 0;
    ds.sort(function (x, y) { return y - x; });
    return (ds[0] + ds[1]) / total;
  }

  /* Choose the next this-or-that pair.
     Early rounds: recognizable titles in concentrated contrasts — pairs
     that differ mainly on 1-2 axes, so each answer maps one dimension of
     taste cleanly; the dominant contrast axis is not repeated back-to-back.
     Middle rounds: blend of contrast and the emerging preference.
     Late rounds: dilemmas — two films the current preference likes
     almost equally, so the pick fine-tunes rather than explores.
     Obscure-vs-obscure matchups are avoided early and only surface once
     the model knows what it's looking for. */
  function nextPair(movies, usedIds, roundIndex, totalRounds, pref, rng) {
    var used = {}; usedIds.forEach(function (id) { used[id] = true; });
    var pool = movies.filter(function (m) { return !used[m.id]; });
    if (pool.length < 2) return null;
    var byIdMap = {};
    movies.forEach(function (m) { byIdMap[m.id] = m; });
    var recentAxes = [], u, m1, m2;
    for (u = Math.max(0, usedIds.length - 4); u + 1 < usedIds.length; u += 2) {
      m1 = byIdMap[usedIds[u]]; m2 = byIdMap[usedIds[u + 1]];
      if (m1 && m2) recentAxes.push(dominantAxis(m1, m2));
    }
    var phase = totalRounds ? roundIndex / totalRounds : 0;
    calibrate(movies);
    /* Only ever ask about films a typical viewer knows: users can't
       express taste about titles they've never heard of. */
    var floor = phase < 0.34 ? 2 : 1;
    var famous = pool.filter(function (m) { return recognizability(m) >= floor; });
    if (famous.length < 40 && floor === 2) famous = pool.filter(function (m) { return recognizability(m) >= 1; });
    if (famous.length >= 12) pool = famous;
    /* Stratified candidate sampling: bucket the pool by primary genre
       and draw round-robin, so the 18 candidates span the taste space
       instead of mirroring catalog density (at 20k+ titles a pure
       random draw floods the sample with whichever genres dominate
       the catalog, and the quiz would only ever ask about those). */
    var candidates = [];
    (function () {
      var target = Math.min(24, pool.length);
      var buckets = {}, keys = [], i, g, b;
      for (i = 0; i < pool.length; i++) {
        g = pool[i].genres[0] || 'Other';
        if (!buckets[g]) { buckets[g] = []; keys.push(g); }
        buckets[g].push(pool[i]);
      }
      // shuffle bucket order and each bucket with the quiz rng
      for (i = keys.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)); var t = keys[i]; keys[i] = keys[j]; keys[j] = t; }
      keys.forEach(function (k) { var arr = buckets[k]; for (var x = arr.length - 1; x > 0; x--) { var y = Math.floor(rng() * (x + 1)); var z = arr[x]; arr[x] = arr[y]; arr[y] = z; } });
      var progressed = true;
      while (candidates.length < target && progressed) {
        progressed = false;
        for (i = 0; i < keys.length && candidates.length < target; i++) {
          b = buckets[keys[i]];
          if (b.length) { candidates.push(b.pop()); progressed = true; }
        }
      }
    })();
    var best = null, bestScore = -Infinity, i, j, a, b;
    for (i = 0; i < candidates.length; i++) for (j = i + 1; j < candidates.length; j++) {
      a = candidates[i]; b = candidates[j];
      var dist = vectorDistance(a, b);
      var conc = distanceConcentration(a, b);
      var recog = recognizability(a) + recognizability(b);
      var dom = dominantAxis(a, b);
      var repeat = recentAxes.indexOf(dom) !== -1;
      var s;
      if (phase < 0.34) {
        s = dist * (0.55 + conc) + recog * 2.2;
        if (dist < 4) s -= 10;
        if (repeat) s -= 6;
      } else if (phase >= 0.67 && pref) {
        var zpr = zPref(pref);
        var ca = zpr ? cosineArrays(zpr, zMovie(a)) : cosine(pref, a), cb = zpr ? cosineArrays(zpr, zMovie(b)) : cosine(pref, b);
        s = ca + cb - Math.abs(ca - cb) * 1.5 + recog * 0.05;
        if (dist < 2.5) s -= 2;
      } else {
        s = dist * (0.4 + conc * 0.6) + recog * 1.2;
        var zpm = pref ? zPref(pref) : null;
        if (zpm) s += (cosineArrays(zpm, zMovie(a)) + cosineArrays(zpm, zMovie(b))) * 0.8;
        if (dist < 3) s -= 6;
        if (repeat) s -= 4;
      }
      if (s > bestScore) { bestScore = s; best = [a, b]; }
    }
    return best;
  }

  /* Shuffle is appeal-weighted: well-known, well-liked titles come up
     far more often than deep-catalog ones, but nothing is unreachable. */
  function shufflePick(movies, options) {
    options = options || {};
    var rng = options.rng || Math.random;
    var pool = movies;
    if (options.genre && options.genre !== 'All') {
      pool = pool.filter(function (m) { return m.genres.indexOf(options.genre) !== -1; });
    }
    if (typeof options.filter === 'function') {
      var f = pool.filter(options.filter);
      if (f.length >= (options.count || 5)) pool = f;
    }
    var minAp = options.minAppeal == null ? 45 : options.minAppeal;
    var good = pool.filter(function (m) { return typeof m.ap !== 'number' || m.ap >= minAp; });
    if (good.length >= (options.count || 5) * 3) pool = good;
    var n = Math.min(options.count || 5, pool.length), out = [];
    var items = pool.map(function (m) {
      var w = Math.pow(Math.max(0.05, appeal(m)), 3);
      return { m: m, k: Math.pow(Math.max(1e-9, rng()), 1 / w) }; // Efraimidis-Spirakis
    });
    items.sort(function (a, b) { return b.k - a.k; });
    for (var i = 0; i < n; i++) out.push(items[i].m);
    return out;
  }

  /* ---------- roulette: ranked, diverse shortlist (v11) ----------
     Returns the best `count` (default 5) picks for a mode, not one.
     Score = quality prior + taste fit (when known) + small random jitter
     so every spin differs, then a greedy diversity pass (limits repeats of
     primary genre/decade, no repeat directors, no near-duplicate titles). */
  function rouletteSelect(movies, o) {
    o = o || {};
    var rng = o.rng || Math.random, count = Math.max(1, Math.min(8, o.count || 5));
    var mode = o.mode || 'surprise', taste = o.taste || null;
    var watched = o.watched || [], rated = o.rated || {}, genre = o.genre;
    var hasTaste = !!taste && AXES.some(function (a) { return (taste[a] || 0) > 0; });
    var wset = {}; watched.forEach(function (id) { wset[id] = 1; });
    function g(m, x) { return m.genres.indexOf(x) >= 0; }
    function ok(m) {
      if (genre && genre !== 'All' && !g(m, genre)) return false;
      if (rated[m.id] === -1) return false;
      var y = m.year || m.startYear || 0, v = m.vector || {};
      switch (mode) {
        case 'unseen': return !wset[m.id] && !rated[m.id];
        case 'horror': return g(m, 'Horror');
        case 'short': return !!m.runtime && m.runtime < 100;
        case 'date': return g(m, 'Romance') || g(m, 'Rom-Com') || (v.romantic || 0) >= 6 || (g(m, 'Comedy') && (v.heartwarming || 0) >= 5);
        case 'critics': return (m.ap || 0) >= 84;
        case 'throwback': return y && y <= 1999;
        case 'hidden': return (m.ap || 0) <= 78 && (m.ap || 0) >= 40;
        default: return true;
      }
    }
    var pool = movies.filter(ok);
    if (mode === 'throwback' && pool.length < 30) pool = movies.filter(function (m) { return (!genre || genre === 'All' || g(m, genre)) && (m.year || 0) <= 2005; });
    if (mode !== 'hidden') { var q = pool.filter(function (m) { return (m.ap || 0) >= 45; }); if (q.length >= count * 6) pool = q; }
    if (!pool.length) return [];
    if (hasTaste) calibrate(movies);
    var scored = pool.map(function (m) {
      var ap = (m.ap || 50) / 100, mp = hasTaste ? matchPercent(taste, m) / 100 : null, sc;
      if (mode === 'outside' && hasTaste) sc = 0.55 * ap + 0.45 * (1 - mp);
      else if (hasTaste) sc = (mode === 'match' ? 0.25 : 0.4) * ap + (mode === 'match' ? 0.75 : 0.6) * mp;
      else sc = ap;
      if (wset[m.id]) sc -= 0.25;
      sc += (rng() - 0.5) * (mode === 'surprise' ? 0.5 : 0.22);
      return { m: m, s: sc, mp: mp };
    }).sort(function (a, b) { return b.s - a.s; });
    var cand = scored.slice(0, Math.max(60, count * 12)), out = [], gc = {}, dirs = {}, dec = {}, stems = {};
    function stem(t) { return t.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').slice(0, 2).join(' '); }
    while (out.length < count && cand.length) {
      var bi = -1, bv = -1e9;
      for (var i = 0; i < cand.length; i++) {
        var c = cand[i], m = c.m, pg = m.genres[0], d = Math.floor((m.year || m.startYear || 2000) / 10);
        var pen = (gc[pg] || 0) * 0.07 + (dec[d] || 0) * 0.04 + (m.director && dirs[m.director] ? 0.5 : 0) + (stems[stem(m.title)] ? 0.5 : 0);
        var v = c.s - pen;
        if (v > bv) { bv = v; bi = i; }
      }
      var pick = cand.splice(bi, 1)[0], pm = pick.m;
      out.push({ movie: pm, score: pick.s, match: pick.mp == null ? null : Math.round(pick.mp * 100) });
      gc[pm.genres[0]] = (gc[pm.genres[0]] || 0) + 1;
      var dd = Math.floor((pm.year || pm.startYear || 2000) / 10); dec[dd] = (dec[dd] || 0) + 1;
      if (pm.director) dirs[pm.director] = 1;
      stems[stem(pm.title)] = 1;
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out;
  }

  function normalizePreference(pref) {
    var max = 0;
    AXES.forEach(function (axis) { max = Math.max(max, pref[axis] || 0); });
    var out = emptyPreference();
    if (max <= 0) return out;
    AXES.forEach(function (axis) { out[axis] = Math.max(0, (pref[axis] || 0)) / max * 10; });
    return out;
  }

  /* Combine two partners' preferences: average, plus a synergy bonus on any
     axis BOTH partners rated highly — shared loves count extra. */
  function combinePreferences(prefA, prefB) {
    var a = normalizePreference(prefA), b = normalizePreference(prefB), out = emptyPreference();
    AXES.forEach(function (axis) {
      var shared = Math.min(a[axis], b[axis]);
      var bonus = shared >= 6 ? 1.5 : shared >= 4 ? 0.75 : 0;
      out[axis] = (a[axis] + b[axis]) / 2 + bonus;
    });
    return out;
  }

  /* Calibrated match %: centered cosine through tanh so a genuinely
     strong fit reads 90%+, an average film ~50%, and a poor fit < 35%. */
  function matchPercent(pref, movie) {
    var zp = zPref(pref);
    if (!zp) return 50;
    var c = cosineArrays(zp, zMovie(movie));
    return Math.max(1, Math.min(99, Math.round(50 + 50 * Math.tanh(1.25 * c))));
  }

  /* Couples: a pick must clear a minimum centered-cosine fit for EACH
     partner (nobody gets dragged to something they'd hate), then films are
     ranked by fairness — half the average fit, half the worse partner's fit,
     so a 90/40 split loses to a 70/70 one. The floor relaxes stepwise only
     when too few films clear it and the floor used is reported. */
  var COUPLES_FLOOR = 0.25;
  var COUPLES_FLOOR_STEPS = [0.25, 0.15, 0.05, -2];

  function couplesRecommendations(movies, prefA, prefB, options) {
    options = options || {};
    calibrate(movies);
    var combined = combinePreferences(prefA, prefB);
    var zA = zPref(prefA), zB = zPref(prefB), zC = zPref(combined);
    var limit = options.limit || 5;
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var pass = typeof options.filter === 'function' ? options.filter : null;
    var base = movies.filter(function (m) { return !exclude[m.id] && (!pass || pass(m)); });
    if (pass && base.length < limit * 3) base = movies.filter(function (m) { return !exclude[m.id]; });
    var pool = base.map(function (m) {
      var zm = zMovie(m);
      var a = cosineZ(zA, zm), b = cosineZ(zB, zm), c = cosineZ(zC, zm);
      var fair = 0.5 * (a + b) / 2 + 0.5 * Math.min(a, b);
      return { movie: m, cosA: a, cosB: b, cosC: c, z: zm, rank: fair * 0.7 + c * 0.3 + 0.02 + appeal(m) * 0.16 };
    });
    var chosen = [], floorUsed = 0, s, f;
    for (s = 0; s < COUPLES_FLOOR_STEPS.length; s++) {
      f = COUPLES_FLOOR_STEPS[s];
      var ok = pool.filter(function (r) { return r.cosA >= f && r.cosB >= f; });
      if (ok.length >= limit || s === COUPLES_FLOOR_STEPS.length - 1) { chosen = ok; floorUsed = f; break; }
    }
    chosen.sort(function (x, y) { return y.rank - x.rank; });
    var out = mmrSelect(chosen.map(function (r) { r.movie = r.movie; return r; }), limit, 0.2);
    return out.map(function (r) {
      return {
        movie: r.movie, score: r.cosC, cosA: r.cosA, cosB: r.cosB, floor: floorUsed,
        matchA: matchPercent(prefA, r.movie), matchB: matchPercent(prefB, r.movie),
        combined: combined, why: whyFor(combined, r.movie)
      };
    });
  }

  /* =====================================================================
     v12 — mood-first, adaptive quiz + personalised lists
     ---------------------------------------------------------------------
     The old quiz asked "which of these two?" with pairs chosen mostly for
     contrast. v12 treats the quiz as a search problem:
       1. TONIGHT beats TASTE. The user can say what mood they are in (and
          what they are NOT in the mood for) before round one. That becomes a
          prior; long-term taste is deliberately NOT mixed into the quiz, so a
          horror fan who wants something light tonight is not dragged back
          toward horror.
       2. Every question is chosen to split the films that are STILL IN PLAY
          as evenly as possible (a "20 questions" bisection in taste space),
          so each answer removes roughly half of the remaining plausible
          films instead of re-confirming what is already known.
       3. The last rounds are finals between the current front-runners.
       4. candidatesInPlay() exposes how far the field has narrowed.
     ===================================================================== */
  var MOODS = [
    { id: 'thrill', label: 'Edge of my seat', icon: '⚡', up: { adrenaline: 1, dark: 0.3 }, down: { cozy: 1 } },
    { id: 'laugh', label: 'Make me laugh', icon: '😂', up: { funny: 1, cozy: 0.3 }, down: { dark: 0.8, scary: 1 } },
    { id: 'heart', label: 'Hit me in the heart', icon: '💛', up: { heartwarming: 1, romantic: 0.3 }, down: { scary: 0.8 } },
    { id: 'mind', label: 'Mess with my mind', icon: '🧠', up: { brainy: 1, weird: 0.5 }, down: { cozy: 0.6 } },
    { id: 'scare', label: 'Scare me', icon: '👻', up: { scary: 1, dark: 0.5 }, down: { cozy: 1, funny: 0.5 } },
    { id: 'romance', label: 'Something romantic', icon: '💘', up: { romantic: 1, heartwarming: 0.4 }, down: { scary: 1 } },
    { id: 'epic', label: 'A big escape', icon: '🌌', up: { epic: 1, adrenaline: 0.4 }, down: {} },
    { id: 'cozy', label: 'Easy comfort watch', icon: '🛋️', up: { cozy: 1, heartwarming: 0.5 }, down: { dark: 1, scary: 1 } },
    { id: 'dark', label: 'Dark & gritty', icon: '🌑', up: { dark: 1, brainy: 0.3 }, down: { cozy: 0.8, funny: 0.4 } }
  ];
  var AVOIDABLE = ['Horror', 'Romance', 'Animation', 'War', 'Western', 'Musical', 'Documentary', 'Superhero', 'Sci-Fi', 'Fantasy', 'Crime'];
  var MOOD_BY_ID = {};
  MOODS.forEach(function (m) { MOOD_BY_ID[m.id] = m; });
  var MOOD_PRIOR_WEIGHT = 2.5;

  /* A pseudo-film that sits where the chosen moods say tonight should land:
     the average film, pushed up on wanted axes and down on unwanted ones. */
  function moodPseudoFilm(moodIds) {
    var v = MU.slice(), k, a;
    (moodIds || []).forEach(function (id) {
      var m = MOOD_BY_ID[id]; if (!m) return;
      for (a in m.up) { k = AXES.indexOf(a); v[k] = Math.min(10, v[k] + (10 - MU[k]) * 0.8 * m.up[a]); }
      for (a in m.down) { k = AXES.indexOf(a); v[k] = Math.max(0, v[k] - MU[k] * 0.7 * m.down[a]); }
    });
    var vec = {};
    AXES.forEach(function (ax, i) { vec[ax] = v[i]; });
    return { id: '__mood__', vector: vec, genres: [] };
  }
  /* Preference vector for the quiz: tonight's mood prior + this session's picks. */
  function quizPreference(picks, moodIds) {
    var pref = preferenceFromPicks(picks || []);
    if (moodIds && moodIds.length) addMovie(pref, moodPseudoFilm(moodIds), MOOD_PRIOR_WEIGHT);
    return pref;
  }

  function ratingOf(m) { return typeof m.r === 'number' ? m.r : (typeof m.ir === 'number' ? m.ir : null); }
  /* Blend of the internal appeal score and the public rating when we have one. */
  function quality(m) {
    var ap = (typeof m.ap === 'number' ? m.ap : 50) / 100, r = ratingOf(m);
    if (r == null) return ap;
    return 0.5 * ap + 0.5 * Math.max(0, Math.min(1, (r - 5) / 4));
  }

  /* contextFilter v12: also honours "not tonight" genres and chosen platforms. */
  var baseContextFilter = contextFilter;
  function contextFilterV12(ctx) {
    ctx = ctx || {};
    var base = baseContextFilter(ctx), avoid = ctx.avoid || [], plats = ctx.platforms || [];
    return function (m) {
      if (!base(m)) return false;
      if (avoid.length && (m.genres || []).some(function (g) { return avoid.indexOf(g) !== -1; })) return false;
      if (plats.length) {
        if (!m.pl || !m.pl.length) return false;
        if (!m.pl.some(function (p) { return plats.indexOf(p) !== -1; })) return false;
      }
      return true;
    };
  }

  function subsample(arr, n, rng) {
    if (arr.length <= n) return arr.slice();
    var out = [], step = arr.length / n, i;
    for (i = 0; i < n; i++) out.push(arr[Math.min(arr.length - 1, Math.floor(i * step + rng() * step))]);
    return out;
  }

  /* How many films are still plausible answers? exp(entropy) of a softmax over
     fit scores — a smooth "effective number of candidates". */
  function candidatesInPlay(movies, pref, options) {
    options = options || {};
    calibrate(movies);
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var pass = typeof options.filter === 'function' ? options.filter : null;
    var pool = movies.filter(function (m) { return !exclude[m.id] && (!pass || pass(m)); });
    if (!pool.length) return 0;
    if (!zPref(pref)) return pool.length;
    var scored = scoreAll(pool, pref, { anchors: options.anchors || null, popularity: 0 });
    var tau = 0.10, max = -Infinity, i;
    for (i = 0; i < scored.length; i++) if (scored[i].fit > max) max = scored[i].fit;
    var sum = 0, w = new Array(scored.length);
    for (i = 0; i < scored.length; i++) { w[i] = Math.exp((scored[i].fit - max) / tau); sum += w[i]; }
    var H = 0;
    for (i = 0; i < w.length; i++) { var p = w[i] / sum; if (p > 1e-12) H -= p * Math.log(p); }
    return Math.max(1, Math.min(pool.length, Math.round(Math.exp(H))));
  }

  /* Choose the next this-or-that pair by bisecting the films still in play. */
  function adaptivePair(movies, usedIds, roundIndex, totalRounds, pref, rng, options) {
    options = options || {};
    calibrate(movies);
    var used = {}; usedIds.forEach(function (id) { used[id] = true; });
    var pass = typeof options.filter === 'function' ? options.filter : null;
    var pool = movies.filter(function (m) { return !used[m.id] && (!pass || pass(m)); });
    if (pool.length < 2) return null;
    var phase = totalRounds ? roundIndex / totalRounds : 0;
    var roundsLeft = totalRounds - roundIndex;
    /* Only ask about films a typical viewer has heard of. */
    var floor = phase < 0.34 ? 2 : 1;
    var famous = pool.filter(function (m) { return recognizability(m) >= floor; });
    if (famous.length < 40 && floor === 2) famous = pool.filter(function (m) { return recognizability(m) >= 1; });
    if (famous.length >= 12) pool = famous;

    var zp = pref ? zPref(pref) : null;
    var scored = pool.map(function (m) { var z = zMovie(m); return { m: m, z: z, s: zp ? cosineArrays(zp, z) : 0 }; });
    if (zp) scored.sort(function (a, b) { return b.s - a.s; });

    /* The region still in play shrinks as the quiz proceeds. */
    var keep = zp ? (phase < 0.2 ? 0.5 : phase < 0.45 ? 0.25 : phase < 0.7 ? 0.1 : 0.04) : 1;
    var region = zp ? scored.slice(0, Math.max(60, Math.round(scored.length * keep))) : scored;
    var evalSet = subsample(region, 160, rng);

    /* Option candidates. Finals (last 2 rounds): current front-runners only.
       Otherwise a genre-stratified draw from the region so options differ. */
    var cands = [];
    if (zp && roundsLeft <= 2) {
      cands = scored.slice(0, 14);
    } else {
      var buckets = {}, keys = [], i, g;
      var src = region.length > 400 ? subsample(region, 400, rng) : region;
      for (i = 0; i < src.length; i++) {
        g = src[i].m.genres[0] || 'Other';
        if (!buckets[g]) { buckets[g] = []; keys.push(g); }
        buckets[g].push(src[i]);
      }
      for (i = keys.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)); var t = keys[i]; keys[i] = keys[j]; keys[j] = t; }
      keys.forEach(function (k) { var arr = buckets[k]; for (var x = arr.length - 1; x > 0; x--) { var y = Math.floor(rng() * (x + 1)); var z2 = arr[x]; arr[x] = arr[y]; arr[y] = z2; } });
      var progressed = true;
      while (cands.length < 26 && progressed) {
        progressed = false;
        for (i = 0; i < keys.length && cands.length < 26; i++) {
          if (buckets[keys[i]].length) { cands.push(buckets[keys[i]].pop()); progressed = true; }
        }
      }
    }
    if (cands.length < 2) cands = scored.slice(0, Math.min(scored.length, 12));
    if (cands.length < 2) return null;

    var byIdMap = {};
    movies.forEach(function (m) { byIdMap[m.id] = m; });
    var recentAxes = [], u, m1, m2;
    for (u = Math.max(0, usedIds.length - 4); u + 1 < usedIds.length; u += 2) {
      m1 = byIdMap[usedIds[u]]; m2 = byIdMap[usedIds[u + 1]];
      if (m1 && m2) recentAxes.push(dominantAxis(m1, m2));
    }

    var best = null, bestScore = -Infinity, a, b, c, n = evalSet.length;
    for (var ci = 0; ci < cands.length; ci++) for (var cj = ci + 1; cj < cands.length; cj++) {
      a = cands[ci]; b = cands[cj];
      var dist = vectorDistance(a.m, b.m);
      var minDist = phase < 0.34 ? 3.2 : 2.2;
      if (dist < minDist) continue;
      var wins = 0;
      for (c = 0; c < n; c++) { if (cosineArrays(evalSet[c].z, a.z) > cosineArrays(evalSet[c].z, b.z)) wins++; }
      var p = n ? wins / n : 0.5;
      var balance = 1 - Math.abs(2 * p - 1);
      var conc = distanceConcentration(a.m, b.m);
      var recog = recognizability(a.m) + recognizability(b.m);
      var plaus = zp ? (a.s + b.s) / 2 : 0;
      var repeat = recentAxes.indexOf(dominantAxis(a.m, b.m)) !== -1;
      var s;
      if (zp && roundsLeft <= 2) {
        s = 2.2 * balance + 1.6 * plaus + 0.1 * Math.min(dist, 6) + 0.05 * recog;
      } else {
        s = 3.0 * balance + 1.2 * conc + 0.25 * recog + (zp ? 0.9 * plaus : 0) - (repeat ? 0.8 : 0);
      }
      if (s > bestScore) { bestScore = s; best = [a.m, b.m]; }
    }
    if (!best) best = [cands[0].m, cands[1].m];
    return best;
  }

  /* ---------- personalised Top N ---------- */
  var GENRE_ALIAS = {
    'Psychological Thriller': ['Thriller', 'Mystery'], 'Mystery': ['Mystery'], 'Sci-Fi': ['Sci-Fi'],
    'Horror': ['Horror'], 'Crime': ['Crime'], 'Action': ['Action', 'Adventure', 'Superhero'],
    'Drama': ['Drama', 'Historical Drama'], 'Comedy': ['Comedy', 'Rom-Com'], 'Romance': ['Romance', 'Rom-Com'],
    'Fantasy': ['Fantasy'], 'Documentary': ['Documentary', 'Docuseries'], 'Animation': ['Animation', 'Anime', 'Family']
  };
  function expandGenres(list) {
    var out = [];
    (list || []).forEach(function (g) {
      (GENRE_ALIAS[g] || [g]).forEach(function (x) { if (out.indexOf(x) === -1) out.push(x); });
    });
    return out;
  }
  var MOOD_AXIS = {
    'Mind-bending twists': 'brainy', 'Complex characters': 'heartwarming', 'Atmosphere and tension': 'dark',
    'Big emotional payoff': 'heartwarming', 'Fast-paced action': 'adrenaline', 'Immersive worlds': 'epic',
    'Clever humor': 'funny', 'Real-life stories': 'brainy'
  };

  /* A ranked, diverse list tuned to one person: taste fit + quality + the
     genres they declared + their thumbs-ups, with a diversity pass. */
  function personalTop(list, o) {
    o = o || {};
    calibrate(list);
    var limit = o.limit || 20, taste = o.taste || null;
    var hasTaste = !!taste && AXES.some(function (a) { return (taste[a] || 0) > 0; });
    var declared = expandGenres(o.genres), include = expandGenres(o.includeGenres);
    var exclude = {}, watched = {}, rated = o.rated || {};
    (o.excludeIds || []).forEach(function (id) { exclude[id] = 1; });
    (o.watched || []).forEach(function (id) { watched[id] = 1; });
    function eraOk(m) {
      var y = m.year || m.startYear || 0;
      if (o.era === 'modern') return !y || y >= 2000;
      if (o.era === 'recent') return !y || y >= 2015;
      if (o.era === 'classic') return !y || y < 2000;
      return true;
    }
    function base(m) {
      if (exclude[m.id] || rated[m.id] === -1) return false;
      if (o.hideWatched && watched[m.id]) return false;
      if (include.length && !(m.genres || []).some(function (g) { return include.indexOf(g) !== -1; })) return false;
      if (o.avoid && o.avoid.length && (m.genres || []).some(function (g) { return o.avoid.indexOf(g) !== -1; })) return false;
      return eraOk(m);
    }
    var pool = list.filter(base);
    var strict = pool.filter(function (m) { return quality(m) >= 0.72; });
    if (strict.length >= limit * 4) pool = strict;
    else { var loose = pool.filter(function (m) { return quality(m) >= 0.6; }); if (loose.length >= limit * 2) pool = loose; }
    if (!pool.length) return [];
    var likedZ = [], id;
    for (id in rated) if (rated[id] === 1 && o.byId && o.byId[id]) likedZ.push(zMovie(o.byId[id]));
    var zt = hasTaste ? zPref(taste) : null;
    var scored = pool.map(function (m) {
      var zm = zMovie(m);
      var match = zt ? (50 + 50 * Math.tanh(1.25 * cosineArrays(zt, zm))) / 100 : 0.5;
      var g = 0;
      if (declared.length) {
        if (declared.indexOf(m.genres[0]) !== -1) g = 1;
        else if (m.genres.some(function (x) { return declared.indexOf(x) !== -1; })) g = 0.6;
      }
      var anchor = likedZ.length ? Math.max(0, topMean(likedZ.map(function (z) { return cosineArrays(z, zm); }), 3)) : 0;
      var q = quality(m);
      var s = (zt ? 0.46 : 0.2) * match + 0.24 * q + (declared.length ? 0.14 : 0) * g + (likedZ.length ? 0.16 : 0) * anchor +
        (watched[m.id] && rated[m.id] === 1 ? 0.04 : 0);
      return { movie: m, s: s, match: Math.round(match * 100), z: zm };
    }).sort(function (a, b) { return b.s - a.s; });
    var cand = scored.slice(0, Math.max(120, limit * 10)), out = [], gc = {};
    while (out.length < limit && cand.length) {
      var bi = -1, bv = -1e9, i, j;
      for (i = 0; i < cand.length; i++) {
        var maxSim = 0;
        for (j = 0; j < out.length; j++) { var sm = cosineArrays(cand[i].z, out[j].z); if (sm > maxSim) maxSim = sm; }
        var pg = cand[i].movie.genres[0] || '';
        var v = cand[i].s - 0.14 * Math.max(0, maxSim) - ((gc[pg] || 0) >= 5 ? 0.2 : 0);
        if (v > bv) { bv = v; bi = i; }
      }
      var pick = cand.splice(bi, 1)[0];
      out.push(pick);
      var pk = pick.movie.genres[0] || '';
      gc[pk] = (gc[pk] || 0) + 1;
    }
    return out.map(function (r) {
      return { movie: r.movie, match: r.match, score: r.s, why: hasTaste ? whyFor(taste, r.movie) : 'A consensus favourite.' };
    });
  }

  /* ---------- Tonight's Pick: weighted-random, never the same one twice running ---------- */
  function pickTonight(list, o) {
    o = o || {};
    var rng = o.rng || Math.random, recent = {}, watched = {}, rated = o.rated || {};
    (o.recent || []).forEach(function (id) { recent[id] = 1; });
    (o.watched || []).forEach(function (id) { watched[id] = 1; });
    var taste = o.taste || null;
    var hasTaste = !!taste && AXES.some(function (a) { return (taste[a] || 0) > 0; });
    var pool = list.filter(function (m) {
      var y = m.year || m.startYear || 0;
      return m.poster && !/\.svg(?:\?|$)/i.test(m.poster) && y >= (o.minYear || 2000) && quality(m) >= 0.74 &&
        !recent[m.id] && !watched[m.id] && rated[m.id] !== -1;
    });
    if (pool.length < 12) pool = list.filter(function (m) { return m.poster && !recent[m.id] && rated[m.id] !== -1; });
    if (!pool.length) pool = list;
    if (hasTaste) calibrate(list);
    var best = null, bestK = -1;
    pool.forEach(function (m) {
      var w = Math.pow(Math.max(0.05, quality(m)), 2) * (hasTaste ? (0.6 + matchPercent(taste, m) / 100) : 1);
      var k = Math.pow(Math.max(1e-9, rng()), 1 / Math.max(1e-6, w));
      if (k > bestK) { bestK = k; best = m; }
    });
    return best;
  }

  function recalibrate() { calibratedFor = null; }

  var api = {
    MOODS: MOODS, AVOIDABLE: AVOIDABLE, moodPseudoFilm: moodPseudoFilm, quizPreference: quizPreference,
    adaptivePair: adaptivePair, candidatesInPlay: candidatesInPlay, personalTop: personalTop,
    pickTonight: pickTonight, quality: quality, ratingOf: ratingOf, expandGenres: expandGenres,
    MOOD_AXIS: MOOD_AXIS, recalibrate: recalibrate,
    AXES: AXES, AXIS_LABELS: AXIS_LABELS, makeRng: makeRng, vectorArray: vectorArray,
    cosine: cosine, cosineArrays: cosineArrays, vectorDistance: vectorDistance,
    emptyPreference: emptyPreference, addMovie: addMovie, preferenceFromPicks: preferenceFromPicks,
    buildRecommendations: buildRecommendations, similarMovies: similarMovies, nextPair: nextPair,
    shufflePick: shufflePick, rouletteSelect: rouletteSelect, normalizePreference: normalizePreference,
    combinePreferences: combinePreferences, matchPercent: matchPercent,
    couplesRecommendations: couplesRecommendations, whyFor: whyFor,
    qualityPrior: qualityPrior, recognizability: recognizability,
    distanceConcentration: distanceConcentration, dominantAxis: dominantAxis,
    COUPLES_FLOOR: COUPLES_FLOOR, COUPLES_FLOOR_STEPS: COUPLES_FLOOR_STEPS,
    REJECT_WEIGHT: REJECT_WEIGHT, calibrate: calibrate, contextFilter: contextFilterV12,
    anchorsFromPicks: anchorsFromPicks, appeal: appeal, zPref: zPref, zMovie: zMovie
  };

  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  global.MovieEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
