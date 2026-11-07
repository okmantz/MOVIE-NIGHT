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

  /* picks: [{chosen: movie, passed: movie|null, kind: 'pick'|'both'|'neither'}] */
  function preferenceFromPicks(picks) {
    var pref = emptyPreference();
    picks.forEach(function (p) {
      if (p.kind === 'both') {
        addMovie(pref, p.chosen, 0.6); if (p.passed) addMovie(pref, p.passed, 0.6);
      } else if (p.kind === 'neither') {
        addMovie(pref, p.chosen, -0.2); if (p.passed) addMovie(pref, p.passed, -0.2);
      } else {
        addMovie(pref, p.chosen, 1.0); if (p.passed) addMovie(pref, p.passed, -0.35);
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

  function buildRecommendations(movies, pref, options) {
    options = options || {};
    var exclude = {};
    (options.excludeIds || []).forEach(function (id) { exclude[id] = true; });
    var limit = options.limit || 5;
    return movies
      .filter(function (m) { return !exclude[m.id]; })
      .map(function (m) { return { movie: m, score: cosine(pref, m), why: whyFor(pref, m) }; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit);
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

  /* Choose the next this-or-that pair.
     Early rounds: broad contrasts (far-apart vectors) to map the user's taste quickly.
     Late rounds: close calls — both movies near the current preference, so the pick is hard and informative. */
  function nextPair(movies, usedIds, roundIndex, totalRounds, pref, rng) {
    var used = {}; usedIds.forEach(function (id) { used[id] = true; });
    var pool = movies.filter(function (m) { return !used[m.id]; });
    if (pool.length < 2) return null;
    var candidates = sample(pool, Math.min(16, pool.length), rng);
    var best = null, i, j, a, b;
    var phase = totalRounds ? roundIndex / totalRounds : 0;
    if (phase < 0.34) {
      var bestDist = -1;
      for (i = 0; i < candidates.length; i++) for (j = i + 1; j < candidates.length; j++) {
        var d = vectorDistance(candidates[i], candidates[j]);
        if (d > bestDist) { bestDist = d; best = [candidates[i], candidates[j]]; }
      }
    } else if (phase >= 0.67 && pref) {
      var bestScore = -Infinity;
      for (i = 0; i < candidates.length; i++) for (j = i + 1; j < candidates.length; j++) {
        a = candidates[i]; b = candidates[j];
        var ca = cosine(pref, a), cb = cosine(pref, b);
        var s = ca + cb - Math.abs(ca - cb) * 1.5; // both liked, similarly liked = a real dilemma
        if (s > bestScore) { bestScore = s; best = [a, b]; }
      }
    } else {
      best = sample(candidates, 2, rng);
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

  function couplesRecommendations(movies, prefA, prefB, options) {
    options = options || {};
    var combined = combinePreferences(prefA, prefB);
    return buildRecommendations(movies, combined, options).map(function (r) {
      r.matchA = matchPercent(prefA, r.movie);
      r.matchB = matchPercent(prefB, r.movie);
      r.combined = combined;
      return r;
    });
  }

  var api = {
    AXES: AXES, AXIS_LABELS: AXIS_LABELS, makeRng: makeRng, vectorArray: vectorArray,
    cosine: cosine, cosineArrays: cosineArrays, vectorDistance: vectorDistance,
    emptyPreference: emptyPreference, addMovie: addMovie, preferenceFromPicks: preferenceFromPicks,
    buildRecommendations: buildRecommendations, similarMovies: similarMovies, nextPair: nextPair,
    shufflePick: shufflePick, normalizePreference: normalizePreference,
    combinePreferences: combinePreferences, matchPercent: matchPercent,
    couplesRecommendations: couplesRecommendations, whyFor: whyFor
  };

  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  global.MovieEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
