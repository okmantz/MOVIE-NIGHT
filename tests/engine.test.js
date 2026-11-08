/* Node test suite for the Movie Night engine. Run:  node tests/engine.test.js
   No dependencies — uses only Node's built-in assert. */
'use strict';
const assert = require('assert');
const { MOVIES, TOP20, MOVIE_AXES } = require('../js/movies.js');
const E = require('../js/engine.js');

let passed = 0;
function check(name, fn) { fn(); passed++; console.log('  ok -', name); }

console.log('Dataset');
check(`has at least 1000 movies (actual: ${MOVIES.length})`, () => {
  assert.ok(MOVIES.length >= 1000);
});
check('at least 70% of the catalog is from 2000 or later', () => {
  const modern = MOVIES.filter(m => m.year >= 2000).length;
  assert.ok(modern / MOVIES.length >= 0.70, `only ${(100 * modern / MOVIES.length).toFixed(1)}% modern`);
});
check('every main genre has at least 100 entries (multi-genre tags counted)', () => {
  const counts = {};
  for (const m of MOVIES) for (const g of m.genres) counts[g] = (counts[g] || 0) + 1;
  for (const g of ['Action', 'Sci-Fi', 'Horror', 'Thriller', 'Drama', 'Comedy', 'Romance', 'Crime', 'Animation', 'Fantasy', 'Adventure']) {
    assert.ok((counts[g] || 0) >= 100, `genre ${g} has only ${counts[g] || 0}`);
  }
});
check('every movie has all required fields', () => {
  for (const m of MOVIES) {
    for (const f of ['id', 'title', 'year', 'director', 'genres', 'runtime', 'rating', 'description', 'vector', 'keywords', 'poster']) {
      assert.ok(f in m, `${m.title} missing field ${f}`);
    }
    assert.ok(Array.isArray(m.genres) && m.genres.length >= 1);
    assert.ok(typeof m.description === 'string' && m.description.length >= 30, `${m.title} description too short`);
  }
});
check('ids are unique', () => {
  assert.strictEqual(new Set(MOVIES.map(m => m.id)).size, MOVIES.length);
});
check('every taste vector scores all ten axes 0..10', () => {
  assert.deepStrictEqual([...MOVIE_AXES].sort(), [...E.AXES].sort());
  for (const m of MOVIES) for (const axis of E.AXES) {
    const v = m.vector[axis];
    assert.ok(typeof v === 'number' && v >= 0 && v <= 10, `${m.title}.${axis} = ${v}`);
  }
});
check('all major genres are represented', () => {
  const present = new Set(MOVIES.flatMap(m => m.genres));
  for (const g of ['Action', 'Sci-Fi', 'Horror', 'Thriller', 'Drama', 'Comedy', 'Romance', 'Crime', 'Animation']) {
    assert.ok(present.has(g), `genre missing: ${g}`);
  }
});
check('Top 20 has 20 entries, all in the dataset', () => {
  assert.strictEqual(TOP20.length, 20);
  const ids = new Set(MOVIES.map(m => m.id));
  for (const t of TOP20) assert.ok(ids.has(t.id), `Top20 id not in dataset: ${t.id}`);
});
check('Top 20 follows the spec: Inception #1 plus the required titles', () => {
  assert.strictEqual(TOP20[0].id, 'inception', 'rank 1 must be Inception');
  assert.deepStrictEqual(TOP20.map(t => t.rank), Array.from({ length: 20 }, (_, i) => i + 1), 'ranks must run 1..20');
  const ids = new Set(TOP20.map(t => t.id));
  for (const req of ['the-matrix', 'talk-to-me', 'the-dark-knight',
    'the-lord-of-the-rings-the-return-of-the-king', 'the-wolf-of-wall-street',
    'spider-man-into-the-spider-verse', 'the-hangover', 'interstellar']) {
    assert.ok(ids.has(req), `Top 20 is missing required title: ${req}`);
  }
  // Remaining slots are the Rotten Tomatoes all-time selection
  for (const rt of ['the-godfather', 'parasite', 'casablanca', '12-angry-men',
    "schindler-s-list", 'pulp-fiction', 'seven-samurai', 'spirited-away',
    'mad-max-fury-road', 'the-godfather-part-ii', 'toy-story']) {
    assert.ok(ids.has(rt), `Top 20 is missing RT selection: ${rt}`);
  }
});

console.log('Quiz engine');
check('pairs: requested rounds, all distinct movies, no repeats', () => {
  const rng = E.makeRng(42);
  const used = [], picks = [];
  for (let round = 0; round < 15; round++) {
    const pref = E.preferenceFromPicks(picks);
    const pair = E.nextPair(MOVIES, used, round, 15, round ? pref : null, rng);
    assert.ok(pair && pair.length === 2 && pair[0].id !== pair[1].id);
    used.push(pair[0].id, pair[1].id);
    picks.push({ chosen: pair[0], passed: pair[1], kind: 'pick' });
  }
  assert.strictEqual(new Set(used).size, used.length);
});
check('early pairs are broader contrasts than late pairs', () => {
  const rng = E.makeRng(7);
  const used = [], picks = [];
  const dists = [];
  for (let round = 0; round < 20; round++) {
    const pref = E.preferenceFromPicks(picks);
    const pair = E.nextPair(MOVIES, used, round, 20, round ? pref : null, rng);
    dists.push(E.vectorDistance(pair[0], pair[1]));
    used.push(pair[0].id, pair[1].id);
    picks.push({ chosen: pair[0], passed: pair[1], kind: 'pick' });
  }
  const avg = a => a.reduce((x, y) => x + y, 0) / a.length;
  assert.ok(avg(dists.slice(0, 5)) > avg(dists.slice(15)), 'early rounds should contrast more');
});
check('solo quiz produces exactly 5 recommendations, none shown in the quiz', () => {
  const rng = E.makeRng(99);
  const used = [], picks = [];
  for (let round = 0; round < 15; round++) {
    const pref = E.preferenceFromPicks(picks);
    const pair = E.nextPair(MOVIES, used, round, 15, round ? pref : null, rng);
    used.push(pair[0].id, pair[1].id);
    picks.push({ chosen: round % 2 ? pair[1] : pair[0], passed: round % 2 ? pair[0] : pair[1], kind: 'pick' });
  }
  const recs = E.buildRecommendations(MOVIES, E.preferenceFromPicks(picks), { excludeIds: used, limit: 5 });
  assert.strictEqual(recs.length, 5);
  for (const r of recs) {
    assert.ok(!used.includes(r.movie.id), 'recommended a quiz movie');
    assert.ok(r.score > -1 && r.score <= 1);
    assert.ok(typeof r.why === 'string' && r.why.length > 10);
  }
  for (let i = 1; i < recs.length; i++) assert.ok(recs[i - 1].score >= recs[i].score, 'results not sorted');
});
check('horror-lover picks yield horror-leaning recommendations', () => {
  const horror = MOVIES.filter(m => m.genres.includes('Horror')).slice(0, 10);
  const pref = E.emptyPreference();
  horror.forEach(m => E.addMovie(pref, m, 1));
  const recs = E.buildRecommendations(MOVIES, pref, { excludeIds: horror.map(m => m.id), limit: 5 });
  const scaryAvg = recs.reduce((s, r) => s + r.movie.vector.scary, 0) / recs.length;
  assert.ok(scaryAvg >= 6, `expected scary recommendations, got avg scary=${scaryAvg.toFixed(1)}`);
});

console.log('Couples engine');
check('combined preference boosts axes both partners love', () => {
  const a = E.emptyPreference(), b = E.emptyPreference();
  a.funny = 40; a.cozy = 30; a.scary = 35;      // partner A: comedy + horror
  b.funny = 38; b.cozy = 28; b.romantic = 40;   // partner B: comedy + romance
  const combined = E.combinePreferences(a, b);
  const plainAvgFunny = (E.normalizePreference(a).funny + E.normalizePreference(b).funny) / 2;
  assert.ok(combined.funny > plainAvgFunny, 'shared axis should get a synergy bonus');
  assert.ok(combined.scary < combined.funny, 'one-sided axis should rank below shared loves');
});
check('couples recommendations carry per-partner match percentages', () => {
  const rng = E.makeRng(5);
  const used = [], picksA = [], picksB = [];
  for (let round = 0; round < 16; round++) {
    const pair = E.nextPair(MOVIES, used, round, 16, null, rng);
    used.push(pair[0].id, pair[1].id);
    (round % 2 === 0 ? picksA : picksB).push({ chosen: pair[0], passed: pair[1], kind: 'pick' });
  }
  const recs = E.couplesRecommendations(MOVIES, E.preferenceFromPicks(picksA), E.preferenceFromPicks(picksB), { excludeIds: used, limit: 5 });
  assert.strictEqual(recs.length, 5);
  for (const r of recs) {
    assert.ok(r.matchA >= 0 && r.matchA <= 100 && r.matchB >= 0 && r.matchB <= 100);
    assert.ok(!used.includes(r.movie.id));
  }
});

console.log('Shuffle & similarity');
check('shuffle returns 5 distinct movies', () => {
  const picks = E.shufflePick(MOVIES, { count: 5, rng: E.makeRng(3) });
  assert.strictEqual(picks.length, 5);
  assert.strictEqual(new Set(picks.map(m => m.id)).size, 5);
});
check('genre-filtered shuffle stays in genre', () => {
  const picks = E.shufflePick(MOVIES, { count: 5, genre: 'Horror', rng: E.makeRng(11) });
  assert.strictEqual(picks.length, 5);
  for (const m of picks) assert.ok(m.genres.includes('Horror'));
});
check('similar movies exclude self and rank sensibly', () => {
  const alien = MOVIES.find(m => m.id === 'alien');
  const sims = E.similarMovies(MOVIES, alien, 6);
  assert.strictEqual(sims.length, 6);
  assert.ok(!sims.some(m => m.id === 'alien'));
  const scores = sims.map(m => E.cosineArrays(E.vectorArray(alien), E.vectorArray(m)));
  for (let i = 1; i < scores.length; i++) assert.ok(scores[i - 1] >= scores[i]);
  assert.ok(sims.some(m => m.vector.scary >= 7), 'Alien should be near other scary films');
});

console.log(`\nALL ${passed} CHECKS PASSED`);
