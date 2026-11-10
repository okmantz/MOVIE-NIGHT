/* Tests for js/ratings.js — OMDb parsing, caching, key handling, links, merge.
   Run: node tests/ratings.test.js   (no network: fetch is stubbed) */
'use strict';
const assert = require('assert');
const backing = new Map();
globalThis.localStorage = {
  getItem: k => (backing.has(k) ? backing.get(k) : null),
  setItem: (k, v) => backing.set(k, String(v)),
  removeItem: k => backing.delete(k)
};
const R = require('../js/ratings.js');
let passed = 0;
async function check(name, fn) { await fn(); passed++; console.log('  ok -', name); }

const OMDB_OK = {
  Response: 'True', imdbID: 'tt1375666', imdbRating: '8.8', imdbVotes: '2,500,123', Metascore: '74', Awards: 'Won 4 Oscars. 157 wins & 220 nominations total', Rated: 'PG-13',
  Ratings: [{ Source: 'Internet Movie Database', Value: '8.8/10' }, { Source: 'Rotten Tomatoes', Value: '87%' }, { Source: 'Metacritic', Value: '74/100' }]
};
const movie = { id: 'inception', title: 'Inception', year: 2010, ii: 'tt1375666', tm: 27205, r: 8.4 };
const show = { id: 'tv-the-wire', title: 'The Wire', startYear: 2002 };

(async function main() {
  console.log('Ratings');
  await check('parseOmdb extracts IMDb, Rotten Tomatoes, Metacritic, awards', async () => {
    const d = R.parseOmdb(OMDB_OK);
    assert.strictEqual(d.imdb.rating, 8.8); assert.strictEqual(d.imdb.votes, 2500123);
    assert.strictEqual(d.rt.pct, 87); assert.strictEqual(d.mc.score, 74); assert.ok(/Oscars/.test(d.awards));
  });
  await check('parseOmdb flags errors, limits and bad keys', async () => {
    assert.ok(R.parseOmdb({ Response: 'False', Error: 'Request limit reached!' }).limited);
    assert.ok(R.parseOmdb({ Response: 'False', Error: 'Invalid API key!' }).badKey);
    assert.strictEqual(R.parseOmdb({ Response: 'False', Error: 'Movie not found!' }).ok, false);
    assert.strictEqual(R.parseOmdb(null).ok, false);
  });
  await check('static ratings come from catalog fields without any key', async () => {
    const s = R.staticRatings({ r: 7.9, ir: 8.1 });
    assert.strictEqual(s.tmdb.rating, 7.9); assert.strictEqual(s.imdb.rating, 8.1);
    assert.deepStrictEqual(R.staticRatings({}), {});
    assert.strictEqual(R.badge({ r: 7.94 }), '7.9'); assert.strictEqual(R.badge({}), '');
  });
  await check('omdbUrl uses the IMDb id when known, title+year+type otherwise', async () => {
    assert.ok(R.omdbUrl(movie, 'K').includes('&i=tt1375666'));
    const u = R.omdbUrl(show, 'K'); assert.ok(u.includes('t=The%20Wire') && u.includes('y=2002') && u.includes('type=series'));
  });
  await check('no key => no network call', async () => {
    let calls = 0; R.setKey('');
    const d = await R.fetchLive(movie, { fetch: () => { calls++; return Promise.resolve({ json: () => OMDB_OK }); } });
    assert.strictEqual(calls, 0); assert.ok(d.noKey);
  });
  await check('live lookup parses, caches, and is served from cache next time', async () => {
    R.setKey('abc123'); let calls = 0;
    const f = () => { calls++; return Promise.resolve({ json: () => Promise.resolve(OMDB_OK) }); };
    const a = await R.fetchLive(movie, { fetch: f }), b = await R.fetchLive(movie, { fetch: f });
    assert.strictEqual(calls, 1); assert.strictEqual(a.rt.pct, 87); assert.strictEqual(b.rt.pct, 87);
  });
  await check('rate-limit is remembered and stops further calls this session', async () => {
    R.setKey('abc123'); let calls = 0;
    const f = () => { calls++; return Promise.resolve({ json: () => Promise.resolve({ Response: 'False', Error: 'Request limit reached!' }) }); };
    const a = await R.fetchLive({ id: 'x1', title: 'X1', year: 2001 }, { fetch: f });
    const b = await R.fetchLive({ id: 'x2', title: 'X2', year: 2002 }, { fetch: f });
    assert.ok(a.limited && b.limited); assert.strictEqual(calls, 1);
    R.setKey('abc123'); /* re-saving the key clears the limited flag */
  });
  await check('network failure resolves (never rejects) and is not cached', async () => {
    const f = () => Promise.reject(new Error('offline'));
    const d = await R.fetchLive({ id: 'net1', title: 'N', year: 2003 }, { fetch: f });
    assert.strictEqual(d.ok, false); assert.strictEqual(R.cacheGet('net1'), null);
  });
  await check('merge prefers live IMDb, keeps TMDB, adds RT/MC/awards', async () => {
    const m = R.merge(movie, R.parseOmdb(OMDB_OK));
    assert.strictEqual(m.imdb.rating, 8.8); assert.strictEqual(m.tmdb.rating, 8.4); assert.strictEqual(m.rt.pct, 87);
    const m2 = R.merge({ r: 7.2 }, { ok: false });
    assert.deepStrictEqual(Object.keys(m2), ['tmdb']);
  });
  await check('review links: IMDb by id, RT search, TMDB by kind', async () => {
    const l = R.links(movie), byId = {}; l.forEach(x => byId[x.id] = x.url);
    assert.ok(byId.imdb.includes('/title/tt1375666/')); assert.ok(byId.rt.includes('search=Inception'));
    assert.ok(byId.tmdb.includes('/movie/27205/'));
    const ls2 = R.links(Object.assign({}, show, { tm: 1438 })), b2 = {}; ls2.forEach(x => b2[x.id] = x.url);
    assert.ok(b2.tmdb.includes('/tv/1438/')); assert.ok(b2.imdb.includes('find'));
  });
  console.log('\nALL ' + passed + ' RATINGS CHECKS PASSED');
})().catch(e => { console.error('FAILED:', e); process.exit(1); });
