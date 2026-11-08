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

  function whyFor(pref, movie, count) {
    var contrib = AXES.map(function (axis) {
      return { axis: axis, value: (pref[axis] || 0) * (movie.vector[axis] || 0) };
    }).filter(function (c) { return c.value > 0; })
      .sort(function (a, b) { return b.value - a.value; })
      .slice(0, count || 2);
    if (!contrib.length) return 'A fresh direction based on your picks.';
    return 'Picked for its ' + contrib.map(function (c) { return AXIS_LABELS[c.axis]; }).join(' and ') + '.';
  }

  /* Quality prior: on near-ties, prefer recognizable, acclaimed titles —
     core-tier entries and anything with a real poster. The bonus is tiny
     next to a cosine gap, so it breaks ties; it never overrules taste. */
  function qualityPrior(m) {
    return (m.tier === 'core' ? 0.015 : 0) + (m.poster ? 0.005 : 0);
  }

  function buildRecommendations(movies, pref, options) {
    options = options || {};
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var limit = options.limit || 5;
    var ranked = movies
      .filter(function (m) { return !exclude[m.id]; })
      .map(function (m) {
        var cos = cosine(pref, m);
        return { movie: m, score: cos, rank: cos + qualityPrior(m), why: whyFor(pref, m) };
      })
      .sort(function (a, b) { return b.rank - a.rank; });
    /* Diversity rule: strong matches (cosine >= 0.75) are taken as ranked —
       when the picks overwhelmingly demand one genre, the list follows.
       The remaining slots are filled with a cap of 2 per primary genre so
       a diffuse taste still gets variety; if the capped pass can't fill
       the list, it tops up by rank regardless of genre. */
    var STRONG = 0.75;
    var out = [], genreCount = {}, i, r, g;
    for (i = 0; i < ranked.length && out.length < limit; i++) {
      r = ranked[i];
      if (r.score < STRONG) break;
      out.push(r);
      g = r.movie.genres[0] || '';
      genreCount[g] = (genreCount[g] || 0) + 1;
    }
    for (i = 0; i < ranked.length && out.length < limit; i++) {
      r = ranked[i];
      if (out.indexOf(r) !== -1) continue;
      g = r.movie.genres[0] || '';
      if ((genreCount[g] || 0) >= 2) continue;
      genreCount[g] = (genreCount[g] || 0) + 1;
      out.push(r);
    }
    for (i = 0; i < ranked.length && out.length < limit; i++) {
      r = ranked[i];
      if (out.indexOf(r) === -1) out.push(r);
    }
    out.forEach(function (x) { delete x.rank; });
    return out;
  }

  function similarMovies(movies, movie, limit) {
    return movies
      .filter(function (m) { return m.id !== movie.id; })
      .map(function (m) { return { movie: m, score: cosineArrays(vectorArray(movie), vectorArray(m)) }; })
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
    if (phase < 0.34) {
      var famous = pool.filter(function (m) { return recognizability(m) >= 1; });
      if (famous.length >= 12) pool = famous;
    }
    /* Stratified candidate sampling: bucket the pool by primary genre
       and draw round-robin, so the 18 candidates span the taste space
       instead of mirroring catalog density (at 20k+ titles a pure
       random draw floods the sample with whichever genres dominate
       the catalog, and the quiz would only ever ask about those). */
    var candidates = [];
    (function () {
      var target = Math.min(18, pool.length);
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
        var ca = cosine(pref, a), cb = cosine(pref, b);
        s = ca + cb - Math.abs(ca - cb) * 1.5 + recog * 0.05;
        if (dist < 2.5) s -= 2;
      } else {
        s = dist * (0.4 + conc * 0.6) + recog * 1.2;
        if (pref) s += (cosine(pref, a) + cosine(pref, b)) * 0.8;
        if (dist < 3) s -= 6;
        if (repeat) s -= 4;
      }
      if (s > bestScore) { bestScore = s; best = [a, b]; }
    }
    return best;
  }

  function shufflePick(movies, options) {
    options = options || {};
    var rng = options.rng || Math.random;
    var pool = movies.slice();
    if (options.genre && options.genre !== 'All') {
      pool = pool.filter(function (m) { return m.genres.indexOf(options.genre) !== -1; });
    }
    return sample(pool, Math.min(options.count || 5, pool.length), rng);
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

  function matchPercent(pref, movie) {
    var has = AXES.some(function (axis) { return (pref[axis] || 0) !== 0; });
    if (!has) return 50;
    return Math.round(((cosine(pref, movie) + 1) / 2) * 100);
  }

  /* Per-partner floor for couples picks: a couples recommendation must
     clear a minimum cosine against EACH partner's own taste — a film one
     partner would hate can't ride in on a high combined average. The
     floor relaxes stepwise only when too few films clear it, and the
     floor actually used is reported on every recommendation. */
  var COUPLES_FLOOR = 0.55;
  var COUPLES_FLOOR_STEPS = [0.55, 0.45, 0.35, 0];

  function couplesRecommendations(movies, prefA, prefB, options) {
    options = options || {};
    var combined = combinePreferences(prefA, prefB);
    var limit = options.limit || 5;
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var pool = movies
      .filter(function (m) { return !exclude[m.id]; })
      .map(function (m) {
        return {
          movie: m, cosA: cosine(prefA, m), cosB: cosine(prefB, m),
          cosC: cosine(combined, m)
        };
      });
    var chosen = [], floorUsed = 0, s, f;
    for (s = 0; s < COUPLES_FLOOR_STEPS.length; s++) {
      f = COUPLES_FLOOR_STEPS[s];
      var ok = pool.filter(function (r) { return r.cosA >= f && r.cosB >= f; });
      if (ok.length >= limit || s === COUPLES_FLOOR_STEPS.length - 1) {
        chosen = ok; floorUsed = f; break;
      }
    }
    chosen.sort(function (a, b) {
      return (b.cosC + qualityPrior(b.movie)) - (a.cosC + qualityPrior(a.movie));
    });
    var out = [], genreCount = {}, i, r, g;
    for (i = 0; i < chosen.length && out.length < limit; i++) {
      r = chosen[i];
      g = r.movie.genres[0] || '';
      if ((genreCount[g] || 0) >= 3) continue;
      genreCount[g] = (genreCount[g] || 0) + 1;
      out.push(r);
    }
    for (i = 0; i < chosen.length && out.length < limit; i++) {
      if (out.indexOf(chosen[i]) === -1) out.push(chosen[i]);
    }
    return out.map(function (r) {
      return {
        movie: r.movie, score: r.cosC, cosA: r.cosA, cosB: r.cosB, floor: floorUsed,
        matchA: matchPercent(prefA, r.movie), matchB: matchPercent(prefB, r.movie),
        combined: combined, why: whyFor(combined, r.movie)
      };
    });
  }

  var api = {
    AXES: AXES, AXIS_LABELS: AXIS_LABELS, makeRng: makeRng, vectorArray: vectorArray,
    cosine: cosine, cosineArrays: cosineArrays, vectorDistance: vectorDistance,
    emptyPreference: emptyPreference, addMovie: addMovie, preferenceFromPicks: preferenceFromPicks,
    buildRecommendations: buildRecommendations, similarMovies: similarMovies, nextPair: nextPair,
    shufflePick: shufflePick, normalizePreference: normalizePreference,
    combinePreferences: combinePreferences, matchPercent: matchPercent,
    couplesRecommendations: couplesRecommendations, whyFor: whyFor,
    qualityPrior: qualityPrior, recognizability: recognizability,
    distanceConcentration: distanceConcentration, dominantAxis: dominantAxis,
    COUPLES_FLOOR: COUPLES_FLOOR, COUPLES_FLOOR_STEPS: COUPLES_FLOOR_STEPS,
    REJECT_WEIGHT: REJECT_WEIGHT
  };

  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  global.MovieEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
