/* Node test suite for the Movie Night engine and the v7 movie dataset.
   Run:  node tests/engine.test.js   (also: shows.test.js, accounts.test.js)
   No dependencies — uses only Node's built-in assert. */
'use strict';
const assert = require('assert');
const { MOVIES, TOP20, MOVIE_AXES } = require('../js/movies.js');
const E = require('../js/engine.js');
const SIM = require('./quiz-sim.js');

let passed = 0;
function check(name, fn) { fn(); passed++; console.log('  ok -', name); }
const mk = (id, v, extra) => Object.assign({
  id, title: id, year: 2015, director: 'X', genres: ['Drama'], runtime: 100, rating: 'PG-13',
  description: 'x'.repeat(40), vector: Object.assign({}, { adrenaline: 3, brainy: 3, scary: 1, funny: 3, heartwarming: 3, dark: 3, romantic: 3, epic: 3, cozy: 3, weird: 3 }, v),
  keywords: [], poster: 'p.jpg', tier: 'catalog', ap: 60
}, extra || {});

console.log('Dataset (v7)');
check(`catalog is large and curated (${MOVIES.length} films)`, () => assert.ok(MOVIES.length >= 10000));
check('catalog skews modern: >= 60% from 2000 on, < 8% before 1970', () => {
  assert.ok(MOVIES.filter(m => m.year >= 2000).length / MOVIES.length >= 0.60);
  assert.ok(MOVIES.filter(m => m.year < 1970).length / MOVIES.length < 0.08);
});
check('every movie has the required fields and sane values', () => {
  for (const m of MOVIES) {
    for (const f of ['id', 'title', 'year', 'genres', 'description', 'vector', 'keywords', 'poster', 'ap']) assert.ok(f in m, `${m.title} missing ${f}`);
    assert.ok(Array.isArray(m.genres) && m.genres.length >= 1 && m.genres.length <= 3);
    assert.ok(m.description.length >= 30, `${m.title} description too short`);
    assert.ok(m.year >= 1900 && m.year <= 2027, `${m.title} year ${m.year}`);
    assert.ok(m.ap >= 0 && m.ap <= 100);
  }
});
check('ids unique, vectors 0..10 on all ten axes', () => {
  assert.strictEqual(new Set(MOVIES.map(m => m.id)).size, MOVIES.length);
  for (const m of MOVIES) for (const a of MOVIE_AXES) {
    const v = m.vector[a]; assert.ok(typeof v === 'number' && v >= 0 && v <= 10, `${m.title}.${a}`);
  }
});
check('poster coverage >= 90%', () => assert.ok(MOVIES.filter(m => m.poster).length / MOVIES.length >= 0.90));
check('every broad genre has depth (>= 250 titles, Documentary >= 100)', () => {
  const c = {}; MOVIES.forEach(m => m.genres.forEach(g => { c[g] = (c[g] || 0) + 1; }));
  for (const g of ['Comedy', 'Drama', 'Horror', 'Thriller', 'Sci-Fi', 'Romance', 'Action', 'Crime', 'Rom-Com', 'Fantasy', 'Animation', 'Family', 'Mystery', 'Superhero', 'Western', 'Adventure', 'War', 'Musical']) assert.ok((c[g] || 0) >= 250, `${g}: ${c[g]}`);
  assert.ok((c.Documentary || 0) >= 100);
});
check('household-name films are present', () => {
  const titles = new Set(MOVIES.map(m => m.title));
  for (const t of ['The Dark Knight', 'Inception', 'Get Out', 'Superbad', 'Parasite', 'Mad Max: Fury Road', 'The Notebook', 'Barbie', 'Oppenheimer', 'Knives Out', 'Top Gun: Maverick', 'Everything Everywhere All at Once', 'The Shawshank Redemption', 'Toy Story', 'Jaws']) assert.ok(titles.has(t), t + ' missing');
});
check('the 2020s are well represented (>= 600 films from 2020+)', () => assert.ok(MOVIES.filter(m => m.year >= 2020).length >= 600));
check('TOP20 resolves to catalog ids', () => {
  const ids = new Set(MOVIES.map(m => m.id)); assert.strictEqual(TOP20.length, 20);
  TOP20.forEach(t => assert.ok(ids.has(t.id), t.id));
});

console.log('Engine');
check('preference sums chosen films and subtracts passed ones', () => {
  const a = mk('a', { scary: 10 }), b = mk('b', { funny: 10 });
  const p = E.preferenceFromPicks([{ chosen: a, passed: b, kind: 'pick' }]);
  assert.ok(p.scary > 0 && p.funny < p.scary);
});
check('centered cosine: distinctive axes drive similarity, not the catalog average', () => {
  E.calibrate(MOVIES);
  const horror = MOVIES.find(m => m.title === 'Get Out'), horror2 = MOVIES.find(m => m.title === 'It Follows' || m.title === 'Hereditary');
  const rom = MOVIES.find(m => m.title === 'The Notebook');
  const za = E.zMovie(horror), zb = E.zMovie(horror2), zc = E.zMovie(rom);
  assert.ok(E.cosineArrays(za, zb) > E.cosineArrays(za, zc));
});
check('matchPercent is calibrated: strong fit >= 85, opposite fit <= 35, empty pref = 50', () => {
  E.calibrate(MOVIES);
  const horrorFan = E.addMovie(E.addMovie(E.emptyPreference(), MOVIES.find(m => m.title === 'Hereditary'), 1), MOVIES.find(m => m.title === 'The Conjuring'), 1);
  const best = E.matchPercent(horrorFan, MOVIES.find(m => m.title === 'Insidious') || MOVIES.find(m => m.title === 'Sinister'));
  const worst = E.matchPercent(horrorFan, MOVIES.find(m => m.title === 'The Notebook'));
  assert.ok(best >= 85, 'best=' + best); assert.ok(worst <= 35, 'worst=' + worst);
  assert.strictEqual(E.matchPercent(E.emptyPreference(), MOVIES[0]), 50);
});
check('recommendations never include excluded ids and honor the limit', () => {
  const pref = E.addMovie(E.emptyPreference(), MOVIES.find(m => m.title === 'Superbad'), 1);
  const ex = MOVIES.slice(0, 50).map(m => m.id);
  const recs = E.buildRecommendations(MOVIES, pref, { excludeIds: ex, limit: 7 });
  assert.strictEqual(recs.length, 7);
  recs.forEach(r => assert.ok(!ex.includes(r.movie.id)));
});
check('comedy-lover gets comedies; horror-lover gets horror', () => {
  const find = t => MOVIES.find(m => m.title === t);
  const c = E.addMovie(E.addMovie(E.emptyPreference(), find('Superbad'), 1), find('Step Brothers'), 1);
  const h = E.addMovie(E.addMovie(E.emptyPreference(), find('Hereditary'), 1), find('The Conjuring'), 1);
  assert.ok(E.buildRecommendations(MOVIES, c, { limit: 5 }).filter(r => r.movie.genres.includes('Comedy') || r.movie.genres.includes('Rom-Com')).length >= 4);
  assert.ok(E.buildRecommendations(MOVIES, h, { limit: 5 }).filter(r => r.movie.genres.includes('Horror')).length >= 4);
});
check('anchors: liked films pull recommendations toward them, rejected ones push away', () => {
  const liked = mk('liked', { scary: 9, dark: 8 }), rej = mk('rej', { funny: 9, cozy: 8 });
  const near = mk('near-liked', { scary: 9, dark: 8, weird: 4 }), far = mk('near-rej', { funny: 9, cozy: 8, weird: 4 });
  const pool = [near, far].concat(Array.from({ length: 60 }, (_, i) => mk('f' + i, { adrenaline: i % 10 })));
  const picks = [{ chosen: liked, passed: rej, kind: 'pick' }];
  const pref = E.preferenceFromPicks(picks);
  const recs = E.buildRecommendations(pool, pref, { limit: 3, anchors: E.anchorsFromPicks(picks) });
  assert.strictEqual(recs[0].movie.id, 'near-liked');
  assert.ok(!recs.some(r => r.movie.id === 'near-rej') || recs.findIndex(r => r.movie.id === 'near-rej') > 0);
});
check('appeal prior breaks near-ties toward well-known titles', () => {
  const pool = [mk('obscure', {}, { ap: 20 }), mk('famous', {}, { ap: 95 }), mk('mid', {}, { ap: 55 })].concat(Array.from({ length: 40 }, (_, i) => mk('x' + i, { funny: 9 })));
  const recs = E.buildRecommendations(pool, E.addMovie(E.emptyPreference(), mk('p', {}), 1), { limit: 3, diversity: 0 });
  assert.strictEqual(recs[0].movie.id, 'famous');
});
check('MMR diversity: a list of 5 is not five clones', () => {
  const pref = E.addMovie(E.emptyPreference(), MOVIES.find(m => m.title === 'The Dark Knight'), 1);
  const recs = E.buildRecommendations(MOVIES, pref, { limit: 5 });
  assert.ok(new Set(recs.map(r => r.movie.genres[0])).size >= 2);
  assert.strictEqual(new Set(recs.map(r => r.movie.id)).size, 5);
});
check('contextFilter: family, date-night, era and length', () => {
  const fam = MOVIES.filter(E.contextFilter({ audience: 'family' }));
  assert.ok(fam.length > 500 && fam.every(m => m.kf));
  const date = MOVIES.filter(E.contextFilter({ audience: 'date' }));
  assert.ok(date.every(m => !m.genres.includes('Horror')));
  const recent = MOVIES.filter(E.contextFilter({ era: 'recent' })); assert.ok(recent.every(m => m.year >= 2015));
  const short = MOVIES.filter(E.contextFilter({ length: 'short' })); assert.ok(short.every(m => !m.runtime || m.runtime <= 105));
});
check('context filter is honored by recommendations', () => {
  const pref = E.addMovie(E.emptyPreference(), MOVIES.find(m => m.title === 'Hereditary'), 1);
  const recs = E.buildRecommendations(MOVIES, pref, { limit: 5, filter: E.contextFilter({ audience: 'family' }) });
  recs.forEach(r => assert.ok(r.movie.kf));
});
check('nextPair only serves recognizable films and never repeats a title', () => {
  const rng = E.makeRng(7), used = [];
  let pref = E.emptyPreference();
  for (let r = 0; r < 12; r++) {
    const pair = E.nextPair(MOVIES, used, r, 12, pref, rng);
    assert.ok(pair && pair[0].id !== pair[1].id);
    pair.forEach(m => { assert.ok(!used.includes(m.id)); assert.ok(m.ap >= 55, `${m.title} ap=${m.ap} too obscure for the quiz`); });
    used.push(pair[0].id, pair[1].id);
    pref = E.preferenceFromPicks([{ chosen: pair[0], passed: pair[1], kind: 'pick' }]);
  }
});
check('shufflePick is appeal-weighted and respects genre filter', () => {
  const rng = E.makeRng(3); let ap = 0, n = 0;
  for (let i = 0; i < 60; i++) E.shufflePick(MOVIES, { rng, count: 5 }).forEach(m => { ap += m.ap; n++; });
  const avgAll = MOVIES.reduce((s, m) => s + m.ap, 0) / MOVIES.length;
  assert.ok(ap / n > avgAll + 8, `avg shuffled appeal ${(ap / n).toFixed(1)} vs catalog ${avgAll.toFixed(1)}`);
  E.shufflePick(MOVIES, { rng, count: 5, genre: 'Horror' }).forEach(m => assert.ok(m.genres.includes('Horror')));
});
check('couples: every pick clears the per-partner floor when possible; fairness beats lopsided', () => {
  const find = t => MOVIES.find(m => m.title === t);
  const A = E.addMovie(E.addMovie(E.emptyPreference(), find('The Notebook'), 1), find('La La Land'), 1);
  const B = E.addMovie(E.addMovie(E.emptyPreference(), find('Superbad'), 1), find('Anchorman: The Legend of Ron Burgundy'), 1);
  const recs = E.couplesRecommendations(MOVIES, A, B, { limit: 5 });
  assert.strictEqual(recs.length, 5);
  recs.forEach(r => { assert.ok(r.cosA >= r.floor && r.cosB >= r.floor); assert.ok(r.matchA >= 40 && r.matchB >= 40, `${r.movie.title} ${r.matchA}/${r.matchB}`); });
});
check('similarMovies returns kin of the same flavor', () => {
  const t = MOVIES.find(m => m.title === 'The Conjuring');
  assert.ok(E.similarMovies(MOVIES, t, 6).filter(m => m.genres.includes('Horror')).length >= 5);
});

console.log('Simulated quizzes (recs scored against the synthetic user\'s TRUE taste)');
for (const arch of SIM.ARCHETYPES) {
  check(`${arch.name}: >= 4 of 5 strong fits, mean fit >= 0.55`, () => {
    const r = SIM.evaluateUser(MOVIES, arch.taste, arch.seed);
    console.log(`     ${arch.name}: ` + r.recs.map(x => `${x.movie.title} (${x.match}%)`).join(' · '));
    assert.ok(r.strong >= 4, 'strong=' + r.strong); assert.ok(r.mean >= 0.55, 'mean=' + r.mean.toFixed(2));
  });
}
check('40 random synthetic users: mean fit >= 0.55 and mean recommendation appeal >= 70', () => {
  let fit = 0, ap = 0, n = 0;
  for (let u = 0; u < 40; u++) {
    const r = SIM.evaluateUser(MOVIES, SIM.randomTaste(1000 + u), 2000 + u);
    r.recs.forEach((x, i) => { fit += r.cosines[i]; ap += x.movie.ap; n++; });
  }
  console.log(`     mean fit ${(fit / n).toFixed(3)}, mean appeal ${(ap / n).toFixed(1)}`);
  assert.ok(fit / n >= 0.55); assert.ok(ap / n >= 70);
});
check('couples sim: both partners get a decent match on every pick', () => {
  const a = SIM.ARCHETYPES[1], b = SIM.ARCHETYPES[2];
  const r = SIM.evaluateCouple(MOVIES, a.taste, b.taste, 11, 12);
  assert.strictEqual(r.recs.length, 5);
  r.recs.forEach(x => assert.ok(x.matchA >= 40 && x.matchB >= 40, `${x.movie.title} ${x.matchA}/${x.matchB}`));
});

console.log(`\nALL ${passed} ENGINE TESTS PASSED`);

check('rouletteSelect returns 5 diverse picks in every mode', () => {
  ['surprise','unseen','horror','date','short','critics','throwback','hidden','match','outside'].forEach(mode => {
    const taste = { adrenaline: 7, brainy: 4, scary: 1, funny: 3, heartwarming: 2, dark: 5, romantic: 1, epic: 5, cozy: 1, weird: 2 };
    const r = E.rouletteSelect(MOVIES, { mode, taste: (mode==='match'||mode==='outside') ? taste : null });
    assert.strictEqual(r.length, 5, mode);
    assert.strictEqual(new Set(r.map(x => x.movie.id)).size, 5, mode);
  });
});
check('rouletteSelect honors unseen + genre', () => {
  const seen = MOVIES.slice(0, 500).map(m => m.id);
  const r = E.rouletteSelect(MOVIES, { mode: 'unseen', watched: seen, genre: 'Comedy' });
  assert.ok(r.every(x => seen.indexOf(x.movie.id) < 0 && x.movie.genres.includes('Comedy')));
});
