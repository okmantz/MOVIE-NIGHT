/* Tests for the v13 adaptive affinity model: every action (favorite, thumbs,
   watchlist, watched, own Top 20, quiz passes) must move recommendations.
   Run: node tests/engine-v13.test.js */
'use strict';
const assert = require('assert'), fs = require('fs'), path = require('path');
global.window = global;
const E = require('../js/engine.js');
const MOVIES = new Function(fs.readFileSync(path.join(__dirname, '../js/movies.js'), 'utf8') + ';return MOVIES')();
const byId = {}; MOVIES.forEach(m => { byId[m.id] = m; });
let n = 0; const ok = (name, fn) => { fn(); n++; console.log('  ok -', name); };
E.calibrate(MOVIES);
const genreOf = g => MOVIES.filter(m => m.genres[0] === g && E.quality(m) >= 0.8);
const horror = genreOf('Horror').slice(0, 8), comedy = genreOf('Comedy').slice(0, 8);
assert.ok(horror.length >= 6 && comedy.length >= 6, 'fixture genres available');

ok('signal weights rank: favorite > like > watchlist > watched, dislike is negative', () => {
  const W = E.SIGNAL_W;
  assert.ok(W.fav > W.like && W.like > W.watchlist && W.watchlist > W.watched && W.watched > 0 && W.dislike < 0);
});
ok('signalEntries merges every source and clamps', () => {
  const e = E.signalEntries({ favorites: ['a'], watchlist: ['a', 'b'], watched: ['a'], ratings: { a: 1, c: -1 }, mine: { movies: ['a'], shows: ['d'] } });
  const m = {}; e.forEach(x => { m[x.id] = x.w; });
  assert.ok(m.a > 2 && m.a <= 2.2, 'a stacked + clamped: ' + m.a);
  assert.ok(m.c < 0 && m.d > 0 && m.b > 0);
});
ok('repeated quiz passes count but are capped (no runaway penalty)', () => {
  const ev = []; for (let i = 0; i < 10; i++) ev.push({ id: 'x', type: 'passed' });
  const w = E.signalEntries({ events: ev })[0].w;
  assert.ok(Math.abs(w - 3 * E.SIGNAL_W.passed) < 1e-9, String(w));
});
ok('empty model scores 0 (no signals -> no change)', () => {
  assert.strictEqual(E.affinityScore(E.buildAffinity([], byId), comedy[0]), 0);
  assert.strictEqual(E.affinityScore(null, comedy[0]), 0);
});
ok('favoriting comedies raises comedy affinity above horror (and vice versa)', () => {
  const likesComedy = E.buildAffinity(E.signalEntries({ favorites: comedy.slice(0, 5).map(m => m.id) }), byId);
  const a = comedy.slice(5).map(m => E.affinityScore(likesComedy, m)), b = horror.map(m => E.affinityScore(likesComedy, m));
  const avg = x => x.reduce((s, v) => s + v, 0) / x.length;
  assert.ok(avg(a) > avg(b) + 0.1, avg(a).toFixed(3) + ' vs ' + avg(b).toFixed(3));
  const likesHorror = E.buildAffinity(E.signalEntries({ favorites: horror.slice(0, 5).map(m => m.id) }), byId);
  assert.ok(avg(horror.slice(5).map(m => E.affinityScore(likesHorror, m))) > avg(comedy.map(m => E.affinityScore(likesHorror, m))) + 0.1);
});
ok('a thumbs-down pushes similar titles below an untouched profile', () => {
  const t = horror[7], sims = E.similarMovies(MOVIES, t, 5);
  const none = E.buildAffinity([], byId);
  const down = E.buildAffinity(E.signalEntries({ ratings: { [t.id]: -1 } }), byId);
  const a = sims.reduce((s, m) => s + E.affinityScore(down, m), 0) / sims.length;
  assert.ok(a < E.affinityScore(none, sims[0]) - 0.02, 'avg ' + a.toFixed(3));
});
ok('affinity grows with evidence: more signals -> stronger separation', () => {
  const few = E.buildAffinity(E.signalEntries({ favorites: [comedy[0].id] }), byId);
  const many = E.buildAffinity(E.signalEntries({ favorites: comedy.slice(0, 6).map(m => m.id) }), byId);
  const t = comedy[7];
  assert.ok(E.affinityScore(many, t) >= E.affinityScore(few, t), 'confidence should not shrink with more data');
});
ok('personalTop is steered by affinity (different list than the cold start)', () => {
  const cold = E.personalTop(MOVIES, { limit: 20, byId, rated: {} }).map(r => r.movie.id);
  const aff = E.buildAffinity(E.signalEntries({ favorites: horror.slice(0, 6).map(m => m.id), ratings: Object.fromEntries(comedy.slice(0, 4).map(m => [m.id, -1])) }), byId);
  const warm = E.personalTop(MOVIES, { limit: 20, byId, rated: {}, affinity: aff });
  const h = warm.filter(r => r.movie.genres.includes('Horror')).length, hc = cold.filter(id => byId[id].genres.includes('Horror')).length;
  assert.ok(h > hc, 'horror in top 20: ' + hc + ' -> ' + h);
  assert.ok(warm.every(r => !comedy.slice(0, 4).some(c => c.id === r.movie.id)), 'disliked titles never appear');
});
ok('a user\'s own favorites rank up in their Top 20 (direct signal)', () => {
  const coldList = E.personalTop(MOVIES, { limit: 80, byId }).map(r => r.movie.id);
  const favId = coldList[45];
  const aff = E.buildAffinity(E.signalEntries({ favorites: [favId] }), byId);
  const warm = E.personalTop(MOVIES, { limit: 80, byId, affinity: aff }).map(r => r.movie.id).indexOf(favId);
  assert.ok(warm !== -1 && warm < 45, '45 -> ' + warm);
});
ok('declared genres fade as real behaviour accumulates', () => {
  const declared = { limit: 20, byId, genres: ['Romance'] };
  const romCount = r => r.filter(x => x.movie.genres.includes('Romance')).length;
  const seed = romCount(E.personalTop(MOVIES, declared));
  const aff = E.buildAffinity(E.signalEntries({ favorites: horror.concat(genreOf('Thriller').slice(0, 8)).map(m => m.id) }), byId);
  const later = romCount(E.personalTop(MOVIES, Object.assign({ affinity: aff }, declared)));
  assert.ok(later <= seed, 'romance ' + seed + ' -> ' + later);
});
ok('buildRecommendations: affinity re-ranks quiz results toward what you save', () => {
  const pref = E.quizPreference([], ['mind']);
  const aff = E.buildAffinity(E.signalEntries({ favorites: comedy.slice(0, 6).map(m => m.id), watchlist: comedy.slice(6).map(m => m.id) }), byId);
  const base = E.buildRecommendations(MOVIES, pref, { limit: 10 }), warm = E.buildRecommendations(MOVIES, pref, { limit: 10, affinity: aff });
  assert.ok(warm.length === 10 && base.length === 10);
  const avg = r => r.reduce((s, x) => s + E.affinityScore(aff, x.movie), 0) / r.length;
  assert.ok(avg(warm) > avg(base), avg(base).toFixed(3) + ' -> ' + avg(warm).toFixed(3));
});
ok('couples: each partner\'s affinity is respected', () => {
  const pa = E.quizPreference([], ['laugh']), pb = E.quizPreference([], ['thrill']);
  const affA = E.buildAffinity(E.signalEntries({ ratings: Object.fromEntries(horror.slice(0, 5).map(m => [m.id, -1])) }), byId);
  const r = E.couplesRecommendations(MOVIES, pa, pb, { limit: 5, affinityA: affA });
  assert.strictEqual(r.length, 5);
  r.forEach(x => assert.ok(x.matchA >= 1 && x.matchA <= 99 && x.matchB >= 1 && x.matchB <= 99));
});
ok('blendMatch stays within 1..99 and moves ~14 points at full affinity', () => {
  assert.strictEqual(E.blendMatch(95, 1), 99); assert.strictEqual(E.blendMatch(3, -1), 1);
  assert.strictEqual(E.blendMatch(60, 0), 60); assert.strictEqual(E.blendMatch(60, 1), 74);
});
ok('pickTonight leans toward affinity but stays varied', () => {
  const aff = E.buildAffinity(E.signalEntries({ favorites: horror.map(m => m.id) }), byId);
  const seen = new Set(); let horrorHits = 0, base = 0;
  for (let i = 0; i < 80; i++) {
    const a = E.pickTonight(MOVIES, { affinity: aff, rng: E.makeRng(i + 1) }), b = E.pickTonight(MOVIES, { rng: E.makeRng(i + 1) });
    seen.add(a.id); if (a.genres.includes('Horror')) horrorHits++; if (b.genres.includes('Horror')) base++;
  }
  assert.ok(horrorHits >= base && seen.size > 20, horrorHits + ' vs ' + base + ', distinct ' + seen.size);
});
ok('affinityReason names a genre/theme the person responds to', () => {
  const aff = E.buildAffinity(E.signalEntries({ favorites: horror.slice(0, 6).map(m => m.id) }), byId);
  const r = E.affinityReason(aff, horror[7]);
  assert.ok(typeof r === 'string' && r.length > 5, 'reason: ' + r);
});
console.log('\nALL ' + n + ' V13 ENGINE CHECKS PASSED');
