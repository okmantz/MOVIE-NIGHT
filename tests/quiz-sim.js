/* Quiz-quality simulation harness (shared by the test suite).
   Simulates full quizzes for synthetic users whose TRUE taste vectors are
   known: at each pair the synthetic user answers from its true taste
   (with a little noise, plus 'both'/'neither' when the pair warrants it),
   exactly the way the app collects picks. It then measures how well the
   final recommendations match the TRUE taste — not the quiz-derived
   preference — which is the honest end-to-end test of the engine. */
'use strict';
const E = require('../js/engine.js');

/* Ground truth is the CENTERED (z-scored) cosine between a synthetic user's
   true taste and a film — the same geometry the engine scores with. */
function trueFit(taste, movie) {
  const a = E.zPref(taste), b = E.zMovie(movie);
  return E.cosineArrays(a, b);
}

function tasteOf(obj) {
  const t = E.emptyPreference();
  for (const k of Object.keys(obj)) t[k] = obj[k];
  return t;
}

const ARCHETYPES = [
  {
    name: 'Horror fan', seed: 101, dominant: ['Horror'],
    taste: tasteOf({ scary: 10, dark: 8, adrenaline: 6, weird: 5, brainy: 4, epic: 3, funny: 2 })
  },
  {
    name: 'Rom-com fan', seed: 202, dominant: ['Rom-Com', 'Romance', 'Comedy'],
    taste: tasteOf({ romantic: 10, funny: 9, heartwarming: 8, cozy: 7, brainy: 3, adrenaline: 2, epic: 2, weird: 2 })
  },
  {
    name: 'Brainy sci-fi fan', seed: 303, dominant: ['Sci-Fi'],
    taste: tasteOf({ brainy: 10, weird: 7, epic: 7, adrenaline: 5, dark: 5, scary: 3, heartwarming: 2, funny: 1, romantic: 1 })
  },
  {
    name: 'Family / cozy fan', seed: 404, dominant: ['Family', 'Animation', 'Animated', 'Comedy'],
    taste: tasteOf({ heartwarming: 10, cozy: 9, funny: 8, epic: 5, adrenaline: 4, romantic: 3, brainy: 3, weird: 3 })
  }
];

/* Random but coherent profiles: a weighted blend of two archetype tastes
   plus per-axis jitter — how real tastes actually look. */
function randomTaste(seed) {
  const rng = E.makeRng(seed);
  const a = ARCHETYPES[Math.floor(rng() * ARCHETYPES.length)].taste;
  let b = ARCHETYPES[Math.floor(rng() * ARCHETYPES.length)].taste;
  if (b === a) b = ARCHETYPES[(ARCHETYPES.indexOf(ARCHETYPES.find(x => x.taste === a)) + 1) % ARCHETYPES.length].taste;
  const wa = 0.4 + rng() * 0.6, wb = 1 - wa;
  const t = E.emptyPreference();
  E.AXES.forEach(axis => {
    t[axis] = Math.max(0, Math.min(10, a[axis] * wa + b[axis] * wb + (rng() * 2 - 1)));
  });
  return t;
}

function simulateQuiz(MOVIES, taste, seed, rounds) {
  rounds = rounds || 15;
  E.calibrate(MOVIES);
  const rng = E.makeRng(seed);
  const used = [], picks = [];
  let pref = E.emptyPreference();
  for (let r = 0; r < rounds; r++) {
    const pair = E.nextPair(MOVIES, used, r, rounds, pref, rng);
    if (!pair) break;
    used.push(pair[0].id, pair[1].id);
    const ca = trueFit(taste, pair[0]), cb = trueFit(taste, pair[1]);
    let pick;
    if (ca < -0.05 && cb < -0.05) {
      pick = { chosen: pair[0], passed: pair[1], kind: 'neither' };
    } else if (ca > 0.55 && cb > 0.55 && Math.abs(ca - cb) < 0.06) {
      pick = { chosen: pair[0], passed: pair[1], kind: 'both' };
    } else {
      /* Standard softmax (Luce) choice: the probability of picking a film
         grows with its true-taste margin over the other. Clear preferences
         are chosen reliably; genuine coin-flips are where noise lives —
         which is how people actually answer this-or-that questions. */
      const pFirst = 1 / (1 + Math.exp(-(ca - cb) / 0.18));
      pick = rng() < pFirst
        ? { chosen: pair[0], passed: pair[1], kind: 'pick' }
        : { chosen: pair[1], passed: pair[0], kind: 'pick' };
    }
    picks.push(pick);
    pref = E.preferenceFromPicks(picks);
  }
  return { pref, used };
}

function evaluateUser(MOVIES, taste, seed) {
  const { pref, used } = simulateQuiz(MOVIES, taste, seed, 15);
  const recs = E.buildRecommendations(MOVIES, pref, { excludeIds: used, limit: 5 });
  const cosines = recs.map(r => trueFit(taste, r.movie));
  return {
    recs, cosines,
    strong: cosines.filter(c => c >= 0.45).length,
    mean: cosines.reduce((s, c) => s + c, 0) / Math.max(1, cosines.length)
  };
}

function evaluateCouple(MOVIES, tasteA, tasteB, seedA, seedB) {
  const qa = simulateQuiz(MOVIES, tasteA, seedA, 8);
  const qb = simulateQuiz(MOVIES, tasteB, seedB, 8);
  const exclude = qa.used.concat(qb.used);
  const recs = E.couplesRecommendations(MOVIES, qa.pref, qb.pref, { excludeIds: exclude, limit: 5 });
  return { recs, prefA: qa.pref, prefB: qb.pref };
}

module.exports = { trueFit, ARCHETYPES, randomTaste, simulateQuiz, evaluateUser, evaluateCouple, tasteOf };
