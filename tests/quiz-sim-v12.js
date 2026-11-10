/* v12 quiz benchmark: old pair selection vs adaptive, mood-first selection.
   Synthetic users have a KNOWN "tonight" target (a mood, optionally unlike their
   usual taste). Each answers with noisy softmax choice. We then score the final
   recommendations against the TRUE target. Run: node tests/quiz-sim-v12.js [trials] */
'use strict';
const E = require('../js/engine.js');
const { MOVIES } = require('../js/movies.js');
const TRIALS = parseInt(process.argv[2] || '40', 10), ROUNDS = 15;

function trueFit(t, m) { return E.cosineArrays(E.zPref(t), E.zMovie(m)); }
function targetFor(moodIds, rng) {
  const f = E.moodPseudoFilm(moodIds), t = E.emptyPreference();
  E.AXES.forEach(a => { t[a] = Math.max(0, Math.min(10, f.vector[a] + (rng() * 2 - 1) * 1.2)); });
  return t;
}
function answer(t, pair, rng) {
  const ca = trueFit(t, pair[0]), cb = trueFit(t, pair[1]);
  if (ca < -0.05 && cb < -0.05) return { chosen: pair[0], passed: pair[1], kind: 'neither' };
  const pFirst = 1 / (1 + Math.exp(-(ca - cb) / 0.18));
  return rng() < pFirst ? { chosen: pair[0], passed: pair[1], kind: 'pick' } : { chosen: pair[1], passed: pair[0], kind: 'pick' };
}
function run(mode, moods, target, seed, list, filter) {
  const rng = E.makeRng(seed), used = [], picks = [];
  let pref = mode === 'v12mood' ? E.quizPreference([], moods) : E.emptyPreference();
  for (let r = 0; r < ROUNDS; r++) {
    const known = picks.length || mode === 'v12mood';
    const pair = mode === 'old'
      ? E.nextPair(list, used, r, ROUNDS, picks.length ? pref : null, rng)
      : E.adaptivePair(list, used, r, ROUNDS, known ? pref : null, rng, { filter });
    if (!pair) break;
    used.push(pair[0].id, pair[1].id);
    picks.push(answer(target, pair, rng));
    pref = mode === 'v12mood' ? E.quizPreference(picks, moods) : E.preferenceFromPicks(picks);
  }
  const anchors = E.anchorsFromPicks(picks);
  const recs = E.buildRecommendations(list, pref, { excludeIds: used, limit: 5, anchors, filter });
  return recs.map(x => x.movie);
}
const MOOD_SETS = [['thrill'], ['laugh'], ['heart'], ['mind'], ['scare'], ['romance'], ['epic'], ['cozy'], ['dark'], ['laugh', 'romance'], ['mind', 'dark'], ['cozy', 'heart'], ['thrill', 'epic']];
E.calibrate(MOVIES);
const modes = ['old', 'v12plain', 'v12mood'], agg = {};
modes.forEach(m => agg[m] = { fit: 0, pct: 0, hit: 0, n: 0 });
for (let i = 0; i < TRIALS; i++) {
  const rng = E.makeRng(900 + i), moods = MOOD_SETS[i % MOOD_SETS.length], target = targetFor(moods, rng);
  const allFit = MOVIES.map(m => trueFit(target, m)).sort((a, b) => a - b);
  const cut2 = allFit[Math.floor(allFit.length * 0.98)];
  modes.forEach(mode => {
    const recs = run(mode, moods, target, 5000 + i, MOVIES, null);
    recs.forEach(m => {
      const f = trueFit(target, m);
      let lo = 0, hi = allFit.length; while (lo < hi) { const mid = (lo + hi) >> 1; if (allFit[mid] < f) lo = mid + 1; else hi = mid; }
      agg[mode].fit += f; agg[mode].pct += lo / allFit.length; agg[mode].hit += f >= cut2 ? 1 : 0; agg[mode].n++;
    });
  });
}
console.log('trials', TRIALS, 'rounds', ROUNDS, 'catalog', MOVIES.length);
modes.forEach(m => {
  const a = agg[m];
  console.log(m.padEnd(9), 'mean true fit', (a.fit / a.n).toFixed(3), '| mean percentile', (100 * a.pct / a.n).toFixed(1), '| in true top-2%', (100 * a.hit / a.n).toFixed(1) + '%');
});
