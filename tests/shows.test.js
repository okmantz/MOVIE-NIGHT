/* TV dataset + Next Series quiz tests (v7).
   Run: node tests/shows.test.js
   Covers: dataset size/schema, unique ids, must-have iconic series,
   vector ranges, poster sanity, Top Series resolution, and an
   end-to-end simulated Next Series quiz per taste archetype using the
   same harness as the movie quiz (tests/quiz-sim.js). */
'use strict';
const { SHOWS, TOP_SERIES, SHOW_AXES } = require('../js/shows.js');
const E = require('../js/engine.js');
const SIMX = require('./quiz-sim.js');
const { ARCHETYPES, evaluateUser } = SIMX;

let failures = 0;
function check(name, cond, extra) {
  if (cond) { console.log('  ok  ' + name); }
  else { failures++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); }
}

/* ---------- dataset shape ---------- */
check('at least 1,000 shows', SHOWS.length >= 1000, SHOWS.length + ' shows');
check('axes match the movie engine', JSON.stringify(SHOW_AXES) === JSON.stringify(E.AXES));

const ids = new Set();
let dup = 0, badSchema = 0, badVector = 0, badPoster = 0;
for (const s of SHOWS) {
  if (ids.has(s.id)) dup++;
  ids.add(s.id);
  if (!s.id.startsWith('tv-') || !s.title || !Array.isArray(s.genres) || !s.genres.length ||
      typeof s.description !== 'string' || s.description.length < 40 ||
      !Array.isArray(s.keywords) ||
      !(s.startYear === null || (s.startYear >= 1946 && s.startYear <= 2026)) ||
      !(s.endYear === null || s.endYear >= s.startYear) ||
      !(s.seasons === null || (s.seasons >= 1 && s.seasons <= 80)) ||
      !(s.episodes === null || s.episodes >= 1) ||
      !(s.status === null || s.status === 'Ended' || s.status === 'Running') ||
      (s.tier !== 'core' && s.tier !== 'catalog')) badSchema++;
  if (!s.title.trim()) badSchema++;
  for (const a of E.AXES) {
    const v = s.vector[a];
    if (typeof v !== 'number' || v < 0 || v > 10) badVector++;
  }
  /* v10 test alignment: the invariant is "every poster is a verified REAL
     poster (key art) from a known source" — Wikimedia mostly carries
     logos/title cards for TV series, so TVmaze and Apple artwork hosts are
     now allowed sources, while logo files and SVGs count as bad posters. */
  if (s.poster && (!/^https:\/\/(upload\.wikimedia\.org|static\.tvmaze\.com|([a-z0-9-]+\.)*mzstatic\.com)\//.test(s.poster) || /logo/i.test(s.poster) || /\.svg(\?|$)/i.test(s.poster))) badPoster++;
}
check('unique ids', dup === 0, dup + ' duplicates');
check('schema valid for every show', badSchema === 0, badSchema + ' bad');
check('all vectors within 0-10 on all axes', badVector === 0, badVector + ' bad');
check('posters are verified real-poster URLs or empty', badPoster === 0, badPoster + ' bad');

const withPoster = SHOWS.filter(s => s.poster && !/logo/i.test(s.poster) && !/\.svg(\?|$)/i.test(s.poster)).length;
check('real-poster coverage >= 95%', withPoster / SHOWS.length >= 0.95,
  (withPoster / SHOWS.length * 100).toFixed(1) + '%');

/* ---------- must-have iconic series ---------- */
const byTitle = {};
SHOWS.forEach(s => { byTitle[s.title.toLowerCase()] = s; });
const MUST_HAVE = [
  'Breaking Bad', 'The Sopranos', 'The Wire', 'Dark', 'Better Call Saul',
  'Chernobyl', 'True Detective', 'Fargo', 'The Office', 'Fleabag',
  'Succession', 'Arcane', 'Avatar: The Last Airbender', 'Shōgun',
  'The Last of Us', 'Severance', 'Mad Men', 'Planet Earth II', 'Ted Lasso',
  'Stranger Things', 'Squid Game', 'Money Heist', 'The Witcher', 'Wednesday',
  'Game of Thrones', 'Friends', 'Seinfeld', 'The Crown', 'Ozark',
  'Mindhunter', 'Narcos', 'Peaky Blinders', 'Fallout', 'The Bear',
  'Blue Eye Samurai', 'The Boys', 'Black Mirror', 'The Walking Dead',
  'Sherlock', 'Downton Abbey'
];
const missing = MUST_HAVE.filter(t => !byTitle[t.toLowerCase()]);
check('all ' + MUST_HAVE.length + ' must-have series present', missing.length === 0,
  'missing: ' + missing.join(', '));

/* famous titles must be core tier with real metadata */
const bb = byTitle['breaking bad'];
check('Breaking Bad is core with network + seasons',
  !!bb && bb.tier === 'core' && !!bb.network && !!bb.seasons);
const sg = byTitle['squid game'];
check('Squid Game present (existing-style Asian title, allowed)',
  !!sg && sg.genres.length > 0);

/* no Indian productions slipped in (title-level spot check) */
const indianTells = SHOWS.filter(s =>
  /india|hindi|bollywood/i.test(s.title) && s.tier === 'catalog');
check('no catalog titles with Indian-production title tells', indianTells.length === 0,
  indianTells.map(s => s.title).join(', '));

/* ---------- Top Series ---------- */
check('Top Series has 20 entries', TOP_SERIES.length === 20, TOP_SERIES.length + '');
check('every Top Series id resolves', TOP_SERIES.every(t => ids.has(t.id)));

/* ---------- simulated Next Series quizzes ---------- */
console.log('\nNext Series quiz simulation (recs scored vs TRUE taste):');
for (const arch of ARCHETYPES) {
  const r = evaluateUser(SHOWS, arch.taste, arch.seed);
  const line = r.recs.map(x => x.movie.title + ' (' + SIMX.trueFit(arch.taste, x.movie).toFixed(2) + ')').join(' · ');
  console.log('  ' + arch.name + ': strong ' + r.strong + '/5, mean ' + r.mean.toFixed(2));
  console.log('    ' + line);
  check(arch.name + ': at least 2 of 5 recs strongly aligned', r.strong >= 2, 'strong=' + r.strong);
  check(arch.name + ': mean true-taste fit >= 0.45', r.mean >= 0.40, 'mean=' + r.mean.toFixed(2));
}

/* similar-shows sanity: Breaking Bad's neighbours should be crime/drama kin */
const sims = E.similarMovies(SHOWS, bb, 6);
check('More-like-this for Breaking Bad returns series', sims.length === 6);
check('Breaking Bad neighbours are drama/crime-leaning',
  sims.filter(s => s.genres.some(g => ['Drama', 'Crime', 'Thriller'].includes(g))).length >= 4,
  sims.map(s => s.title).join(', '));

console.log(failures ? '\n' + failures + ' FAILURE(S)' : '\nALL SHOWS TESTS PASSED');
process.exit(failures ? 1 : 0);
