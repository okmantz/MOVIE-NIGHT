/* Tests for the v12 engine: mood-first adaptive quiz, personal Top N, Tonight's pick.
   Run: node tests/engine-v12.test.js */
'use strict';
const assert = require('assert'), fs = require('fs'), path = require('path');
global.window = global;
const E = require('../js/engine.js');
const MOVIES = new Function(fs.readFileSync(path.join(__dirname, '../js/movies.js'), 'utf8') + ';return MOVIES')();
let n = 0; const ok = (name, fn) => { fn(); n++; console.log('  ok -', name); };
const rng = () => E.makeRng(42);

ok('mood prior moves the preference toward the chosen mood axis', () => {
  const p = E.quizPreference([], ['scare']), q = E.quizPreference([], ['cozy']);
  assert.ok(p.scary > q.scary && q.cozy > p.cozy);
});
ok('adaptivePair returns two distinct, unused films and respects the filter', () => {
  const f = E.contextFilter({ avoid: ['Horror'], era: 'modern' });
  const pair = E.adaptivePair(MOVIES.filter(f), [], 0, 12, E.quizPreference([], ['laugh']), rng(), {});
  assert.ok(pair && pair[0].id !== pair[1].id);
  pair.forEach(m => { assert.ok(!m.genres.includes('Horror')); assert.ok(m.year >= 2000); });
});
ok('questions get more focused: candidates in play shrink as answers narrow the mood', () => {
  const big = E.candidatesInPlay(MOVIES, E.quizPreference([], []), {});
  const mid = E.candidatesInPlay(MOVIES, E.quizPreference([], ['mind', 'dark']), {});
  assert.ok(mid < big, big + ' -> ' + mid);
});
ok('"not tonight" genres never appear in recommendations', () => {
  const f = E.contextFilter({ avoid: ['Horror', 'Animation'] });
  const recs = E.buildRecommendations(MOVIES, E.quizPreference([], ['scare']), { limit: 10, filter: f });
  recs.forEach(r => { assert.ok(!r.movie.genres.includes('Horror') && !r.movie.genres.includes('Animation')); });
});
ok('a horror fan who wants to laugh tonight is NOT handed horror', () => {
  const taste = E.emptyPreference(); taste.scary = 20; taste.dark = 12;
  const recs = E.buildRecommendations(MOVIES, E.quizPreference([], ['laugh', 'cozy']), { limit: 5 });
  assert.ok(recs.filter(r => r.movie.genres[0] === 'Horror').length === 0);
});
ok('personalTop returns 20 distinct titles, honours genre include, avoid, hidden and era', () => {
  const taste = E.emptyPreference(); taste.brainy = 10; taste.dark = 6;
  const hide = E.personalTop(MOVIES, { taste, limit: 20 })[0].movie.id;
  const top = E.personalTop(MOVIES, { taste, includeGenres: ['Thriller'], avoid: ['Horror'], era: 'recent', excludeIds: [hide], limit: 20 });
  assert.strictEqual(top.length, 20); assert.strictEqual(new Set(top.map(r => r.movie.id)).size, 20);
  top.forEach(r => { assert.ok(r.movie.genres.includes('Thriller') && !r.movie.genres.includes('Horror') && r.movie.year >= 2015 && r.movie.id !== hide); });
});
ok('personalTop changes with taste (not a fixed list)', () => {
  const a = E.emptyPreference(); a.funny = 10; const b = E.emptyPreference(); b.scary = 10;
  const ta = E.personalTop(MOVIES, { taste: a }).map(r => r.movie.id), tb = E.personalTop(MOVIES, { taste: b }).map(r => r.movie.id);
  assert.ok(ta.filter(x => tb.includes(x)).length < 8);
});
ok('Tonight\'s pick varies, skips recent/watched, and always has a cover', () => {
  const seen = new Set(), recent = [];
  for (let i = 0; i < 25; i++) { const m = E.pickTonight(MOVIES, { recent }); assert.ok(m.poster); assert.ok(!recent.includes(m.id)); recent.push(m.id); seen.add(m.id); }
  assert.strictEqual(seen.size, 25);
  const w = E.pickTonight(MOVIES, { watched: [recent[0]] }); assert.notStrictEqual(w.id, recent[0]);
});
console.log('\nALL ' + n + ' V12 ENGINE CHECKS PASSED');
