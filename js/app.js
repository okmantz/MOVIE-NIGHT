/* Movie Night — UI. All state is local (localStorage). No accounts, no server. */
(function () {
  'use strict';
  var E = window.MovieEngine;
  var byId = {};
  MOVIES.forEach(function (m) { byId[m.id] = m; });

  /* ---------- helpers ---------- */
  function $(sel) { return document.querySelector(sel); }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function runtimeLabel(min) { if (!min) return ''; var h = Math.floor(min / 60), m = min % 60; return h ? (h + 'h ' + m + 'm') : (m + 'm'); }
  function metaLine() { return Array.prototype.filter.call(arguments, function (p) { return !!p; }).join(' · '); }

  var PALETTES = {
    Action: ['#7a1f1f', '#2b0d0d'], 'Sci-Fi': ['#14335c', '#060d1d'], Horror: ['#3d0a2e', '#12040e'],
    Thriller: ['#26324a', '#0b0f18'], Drama: ['#5c4318', '#1d1505'], Comedy: ['#7a5410', '#241a04'],
    Romance: ['#6e2438', '#200a12'], Crime: ['#3a3f1a', '#12130a'], Animation: ['#14532d', '#071a10'],
    Mystery: ['#2e2a4a', '#0d0b1a'], War: ['#4a4232', '#171410'],
    Family: ['#155e63', '#081d1f'], Fantasy: ['#3d2a63', '#120b24'], Adventure: ['#6b3a12', '#1f1004'],
    Western: ['#6e4517', '#211304'], Musical: ['#5b2a5e', '#1c0b1e']
  };
  function paletteFor(movie) {
    var p = PALETTES[movie.genres[0]] || ['#33334a', '#101018'];
    return 'background:linear-gradient(160deg,' + p[0] + ',' + p[1] + ')';
  }
  function coverHTML(movie, extraClass) {
    var img = movie.poster
      ? '<img src="' + esc(movie.poster) + '" alt="" loading="lazy" decoding="async" onerror="this.classList.add(\'img-failed\')">'
      : '';
    return '<div class="cover ' + (extraClass || '') + '">' + img +
      '<div class="cover-fallback" style="' + paletteFor(movie) + '">' +
      '<div class="cover-initial">' + esc(movie.title.replace(/^(The|A|An) /, '').charAt(0)) + '</div>' +
      '<div class="cover-title">' + esc(movie.title) + '</div>' +
      '<div class="cover-meta">' + movie.year + ' · ' + esc(movie.genres[0]) + '</div>' +
      '</div></div>';
  }
  function cardHTML(movie) {
    return '<button class="card" data-open="' + movie.id + '">' + coverHTML(movie) +
      '<div class="card-body"><div class="card-title">' + esc(movie.title) + '</div>' +
      '<div class="card-sub">' + metaLine(movie.year, runtimeLabel(movie.runtime), movie.rating ? esc(movie.rating) : '') + '</div>' +
      '<div>' + movie.genres.slice(0, 2).map(function (g) { return '<span class="genre-tag">' + esc(g) + '</span>'; }).join('') + '</div>' +
      '<div class="card-desc">' + esc(movie.description) + '</div></div></button>';
  }

  /* ---------- persistent state ---------- */
  var KEY = 'movienight.v1';
  var EMOJIS = ['🎬', '🍿', '🎭', '🦊', '🐼', '🦉', '🐙', '🌙', '🔥', '💎', '🎧', '🦁'];
  var COLORS = ['#e8b34b', '#e0655a', '#5ab0e0', '#7ac74f', '#b48ce0', '#e08ab5', '#4fd1c5', '#f08c3c'];
  function blankProfile(name, emoji, color) {
    return { id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 999), name: name, emoji: emoji, color: color, favorites: [], watchlist: [], history: [], taste: E.emptyPreference() };
  }
  function loadState() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.profiles && s.profiles.length) return s;
    } catch (e) { /* fall through */ }
    var p1 = blankProfile('Player 1', '🎬', COLORS[0]);
    var p2 = blankProfile('Player 2', '🍿', COLORS[2]);
    return { profiles: [p1, p2], activeId: p1.id, coupleA: p1.id, coupleB: p2.id };
  }
  var state = loadState();
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
  function profile(id) { return state.profiles.find(function (p) { return p.id === (id || state.activeId); }) || state.profiles[0]; }
  function recordQuiz(p, mode, rounds, pref, topTitles) {
    AXES_ADD(p.taste, pref);
    p.history.push({ date: new Date().toISOString(), mode: mode, rounds: rounds, top: topTitles });
    save();
  }
  function AXES_ADD(target, add) { E.AXES.forEach(function (a) { target[a] = (target[a] || 0) + (add[a] || 0); }); }

  /* ---------- navigation ---------- */
  var VIEWS = ['home', 'quiz', 'top20', 'shuffle', 'more', 'couples', 'profile'];
  var TAB_FOR = { home: 'home', quiz: 'quiz', top20: 'top20', shuffle: 'shuffle', more: 'more', couples: 'more', profile: 'more' };
  function goto(view) {
    VIEWS.forEach(function (v) { $('#view-' + v).classList.toggle('active', v === view); });
    document.querySelectorAll('.tab').forEach(function (t) { t.classList.toggle('active', t.dataset.goto === TAB_FOR[view]); });
    window.scrollTo({ top: 0 });
    if (view === 'profile') renderProfile();
    if (view === 'couples') renderCouplesSetup();
  }
  document.addEventListener('click', function (ev) {
    var g = ev.target.closest('[data-goto]');
    if (g) { goto(g.dataset.goto); return; }
    var o = ev.target.closest('[data-open]');
    if (o) openDetail(o.dataset.open);
  });
  $('#header-profile').addEventListener('click', function () { goto('profile'); });
  function renderHeaderProfile() {
    var p = profile();
    $('#header-profile').innerHTML = '<span class="avatar-dot" style="background:' + p.color + '">' + p.emoji + '</span>' + esc(p.name);
  }

  /* ---------- browse ---------- */
  var allGenres = [];
  MOVIES.forEach(function (m) { m.genres.forEach(function (g) { if (allGenres.indexOf(g) === -1) allGenres.push(g); }); });
  allGenres.sort();
  var activeGenre = 'All';
  var chipsBox = $('#genre-chips');
  var genreCounts = {};
  MOVIES.forEach(function (m) { m.genres.forEach(function (g) { genreCounts[g] = (genreCounts[g] || 0) + 1; }); });
  ['All'].concat(allGenres).forEach(function (g) {
    var n = g === 'All' ? MOVIES.length : (genreCounts[g] || 0);
    var c = el('<button class="chip' + (g === 'All' ? ' active' : '') + '" data-genre="' + esc(g) + '">' + esc(g) + ' <span class="chip-count">' + n + '</span></button>');
    c.addEventListener('click', function () {
      activeGenre = g;
      chipsBox.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('active', x.dataset.genre === g); });
      renderBrowse(true);
    });
    chipsBox.appendChild(c);
  });
  var PAGE_SIZE = 60;
  var shownCount = PAGE_SIZE;
  var lastList = [];
  function renderBrowse(reset) {
    if (reset) shownCount = PAGE_SIZE;
    var q = $('#search').value.trim().toLowerCase();
    var sort = $('#sort').value;
    var list = MOVIES.filter(function (m) {
      if (activeGenre !== 'All' && m.genres.indexOf(activeGenre) === -1) return false;
      if (!q) return true;
      var hay = (m.title + ' ' + m.director + ' ' + m.genres.join(' ') + ' ' + m.keywords.join(' ')).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    list.sort(function (a, b) {
      if (sort === 'new') return b.year - a.year || a.title.localeCompare(b.title);
      if (sort === 'old') return a.year - b.year || a.title.localeCompare(b.title);
      if (sort === 'short') return (a.runtime || 99999) - (b.runtime || 99999);
      if (sort === 'long') return (b.runtime || 0) - (a.runtime || 0);
      return a.title.localeCompare(b.title);
    });
    lastList = list;
    var shown = list.slice(0, shownCount);
    $('#browse-count').textContent = list.length + (list.length === 1 ? ' movie' : ' movies') +
      (list.length > shown.length ? ' · showing ' + shown.length : '');
    $('#movie-grid').innerHTML = shown.map(cardHTML).join('') ||
      '<p class="muted">Nothing matches — try a different search or genre.</p>';
    $('#show-more').classList.toggle('hidden', list.length <= shown.length);
  }
  $('#show-more').addEventListener('click', function () { shownCount += PAGE_SIZE; renderBrowse(false); });
  var searchTimer = null;
  $('#search').addEventListener('input', function () { clearTimeout(searchTimer); searchTimer = setTimeout(function () { renderBrowse(true); }, 150); });
  $('#sort').addEventListener('change', function () { renderBrowse(true); });

  /* ---------- tonight's pick (rotates daily, seeded by date) ---------- */
  (function renderHero() {
    var cc = $('#catalog-count'); if (cc) cc.textContent = MOVIES.length.toLocaleString() + '+';
    var pool = MOVIES.filter(function (m) { return m.poster && m.year >= 1960; });
    if (!pool.length) pool = MOVIES;
    var seed = Math.floor(Date.now() / 86400000);
    var pick = pool[seed % pool.length];
    var box = $('#hero-featured'); if (!box || !pick) return;
    box.innerHTML =
      '<button class="hero-card" data-open="' + pick.id + '">' +
      '<span class="hero-art">' + (pick.poster ? '<img src="' + esc(pick.poster) + '" alt="" onerror="this.classList.add(\'img-failed\')">' : '') +
      '<span class="hero-fade"></span></span>' +
      '<span class="hero-info"><span class="hero-title">' + esc(pick.title) + '</span>' +
      '<span class="hero-meta">' + metaLine(pick.year, runtimeLabel(pick.runtime), pick.rating ? esc(pick.rating) : '', pick.genres.map(esc).join(', ')) + '</span>' +
      '<span class="hero-desc">' + esc(pick.description) + '</span>' +
      '<span class="hero-cta">See why it fits tonight →</span></span></button>';
  })();

  /* ---------- detail sheet ---------- */
  function vectorBars(vector) {
    return E.AXES.map(function (axis) {
      var v = vector[axis] || 0;
      var label = axis.charAt(0).toUpperCase() + axis.slice(1);
      return '<div class="bar-row"><span>' + label + '</span><div class="bar-track"><div class="bar-fill" style="width:' + (v * 10) + '%"></div></div><span class="bar-val">' + v + '/10</span></div>';
    }).join('');
  }
  function toggleList(listName, id) {
    var p = profile();
    var i = p[listName].indexOf(id);
    if (i === -1) p[listName].push(id); else p[listName].splice(i, 1);
    save();
  }
  function openDetail(id) {
    var m = byId[id]; if (!m) return;
    var p = profile();
    var fav = p.favorites.indexOf(id) !== -1, wl = p.watchlist.indexOf(id) !== -1;
    var similar = E.similarMovies(MOVIES, m, 6);
    $('#detail-sheet').innerHTML =
      '<div class="sheet-hero">' + (m.poster ? '<div class="sheet-backdrop" style="background-image:url(&quot;' + esc(m.poster) + '&quot;)"></div>' : '') + coverHTML(m) +
      '<button class="sheet-close" id="detail-close" aria-label="Close">✕</button></div>' +
      '<div class="sheet-body"><h2>' + esc(m.title) + '</h2>' +
      '<p class="meta-line">' + metaLine(m.year, (m.director && m.director !== 'Unknown') ? 'Directed by ' + esc(m.director) : '', runtimeLabel(m.runtime), m.rating ? 'Rated ' + esc(m.rating) : '') + '</p>' +
      '<div>' + m.genres.map(function (g) { return '<span class="genre-tag">' + esc(g) + '</span>'; }).join('') + '</div>' +
      '<p>' + esc(m.description) + '</p>' +
      '<div class="row-gap">' +
      '<button class="btn ' + (fav ? 'btn-primary' : '') + '" id="detail-fav">' + (fav ? '♥ Favorited' : '♡ Favorite') + '</button>' +
      '<button class="btn ' + (wl ? 'btn-primary' : '') + '" id="detail-wl">' + (wl ? '✓ On watchlist' : '+ Watchlist') + '</button></div>' +
      '<h3>Taste profile</h3>' + vectorBars(m.vector) +
      '<div class="kw-row">' + m.keywords.map(function (k) { return '<span class="kw">#' + esc(k) + '</span>'; }).join('') + '</div>' +
      '<h3>More like this</h3><div class="similar-grid">' +
      similar.map(function (s) { return '<button class="card" data-open="' + s.id + '">' + coverHTML(s) + '<div class="card-body"><div class="card-title">' + esc(s.title) + '</div><div class="card-sub">' + s.year + '</div></div></button>'; }).join('') +
      '</div></div>';
    $('#detail-overlay').classList.remove('hidden');
    $('#detail-close').addEventListener('click', closeDetail);
    $('#detail-fav').addEventListener('click', function () { toggleList('favorites', id); openDetail(id); renderHeaderProfile(); });
    $('#detail-wl').addEventListener('click', function () { toggleList('watchlist', id); openDetail(id); });
    $('#detail-sheet').scrollTop = 0;
  }
  function closeDetail() { $('#detail-overlay').classList.add('hidden'); }
  $('#detail-overlay').addEventListener('click', function (ev) { if (ev.target === this) closeDetail(); });

  /* ---------- top 20 ---------- */
  $('#top20-list').innerHTML = TOP20.map(function (t) {
    var m = byId[t.id];
    return '<button class="top-row" data-open="' + m.id + '"><span class="top-rank">' + t.rank + '</span>' + coverHTML(m) +
      '<span><span class="card-title">' + esc(m.title) + '</span><div class="card-sub">' + m.year + ' · ' + esc(m.director) + '</div>' +
      '<div class="top-note">' + esc(t.note) + '</div></span></button>';
  }).join('');

  /* ---------- shuffle ---------- */
  var sg = $('#shuffle-genre');
  sg.innerHTML = ['All'].concat(allGenres).map(function (g) { return '<option>' + esc(g) + '</option>'; }).join('');
  function doShuffle() {
    var picks = E.shufflePick(MOVIES, { genre: sg.value, count: 5, rng: Math.random });
    $('#shuffle-results').innerHTML = picks.map(cardHTML).join('');
  }
  $('#shuffle-go').addEventListener('click', doShuffle);

  /* ---------- shared quiz rendering ---------- */
  function pairCard(movie, side) {
    return '<button class="card" data-pick="' + side + '">' + coverHTML(movie) +
      '<div class="card-body"><div class="card-title">' + esc(movie.title) + '</div>' +
      '<div class="card-sub">' + metaLine(movie.year, esc(movie.genres[0]), runtimeLabel(movie.runtime)) + '</div>' +
      '<div class="card-desc">' + esc(movie.description) + '</div></div></button>';
  }
  function resultCard(r, extra) {
    var m = r.movie;
    return '<div class="result-card"><div data-open="' + m.id + '" style="cursor:pointer">' + coverHTML(m) + '</div>' +
      '<div class="result-main"><div class="card-title">' + esc(m.title) + ' <span class="muted">(' + m.year + ')</span></div>' +
      (extra || '') +
      '<div class="why">' + esc(r.why) + '</div>' +
      '<div class="result-actions"><button class="btn" data-open="' + m.id + '">Details</button>' +
      '<button class="btn" data-watch="' + m.id + '">+ Watchlist</button></div></div></div>';
  }
  document.addEventListener('click', function (ev) {
    var w = ev.target.closest('[data-watch]');
    if (w) { toggleList('watchlist', w.dataset.watch); w.textContent = '✓ On watchlist'; w.classList.add('selected'); }
  });

  /* ---------- solo quiz ---------- */
  var quiz = null;
  var soloRounds = 15;
  $('#quiz-rounds').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-rounds]'); if (!b) return;
    soloRounds = parseInt(b.dataset.rounds, 10);
    this.querySelectorAll('.seg').forEach(function (s) { s.classList.toggle('selected', s === b); });
  });
  $('#quiz-start').addEventListener('click', function () {
    quiz = { rounds: soloRounds, round: 0, used: [], picks: [], pair: null, rng: E.makeRng(Date.now() % 2147483647) };
    $('#quiz-setup').classList.add('hidden');
    $('#quiz-results').classList.add('hidden');
    $('#quiz-play').classList.remove('hidden');
    nextSoloRound();
  });
  function nextSoloRound() {
    var pref = E.preferenceFromPicks(quiz.picks.map(function (p) { return { chosen: byId[p.chosenId], passed: byId[p.passedId], kind: p.kind }; }));
    quiz.pref = pref;
    var pair = E.nextPair(MOVIES, quiz.used, quiz.round, quiz.rounds, quiz.round > 0 ? pref : null, quiz.rng);
    if (!pair || quiz.round >= quiz.rounds) return finishSolo();
    quiz.pair = pair;
    quiz.used.push(pair[0].id, pair[1].id);
    $('#quiz-progress').style.width = (quiz.round / quiz.rounds * 100) + '%';
    $('#quiz-counter').textContent = 'Round ' + (quiz.round + 1) + ' of ' + quiz.rounds;
    var qp = $('#quiz-pair');
    qp.innerHTML = pairCard(pair[0], 'a') + pairCard(pair[1], 'b');
    qp.classList.remove('pair-enter'); void qp.offsetWidth; qp.classList.add('pair-enter');
  }
  function soloAnswer(kind, side) {
    if (!quiz || !quiz.pair) return;
    var a = quiz.pair[0], b = quiz.pair[1];
    if (kind === 'pick') {
      var chosen = side === 'a' ? a : b, passed = side === 'a' ? b : a;
      quiz.picks.push({ chosenId: chosen.id, passedId: passed.id, kind: 'pick' });
    } else {
      quiz.picks.push({ chosenId: a.id, passedId: b.id, kind: kind });
    }
    quiz.round++;
    nextSoloRound();
  }
  $('#quiz-pair').addEventListener('click', function (ev) {
    var c = ev.target.closest('[data-pick]'); if (!c || this.dataset.locked) return;
    this.dataset.locked = '1'; c.classList.add('picked');
    var self = this;
    setTimeout(function () { delete self.dataset.locked; soloAnswer('pick', c.dataset.pick); }, 190);
  });
  $('#quiz-both').addEventListener('click', function () { soloAnswer('both'); });
  $('#quiz-neither').addEventListener('click', function () { soloAnswer('neither'); });
  function finishSolo() {
    $('#quiz-play').classList.add('hidden');
    var recs = E.buildRecommendations(MOVIES, quiz.pref, { excludeIds: quiz.used, limit: 5 });
    var p = profile();
    recordQuiz(p, 'solo', quiz.rounds, quiz.pref, recs.map(function (r) { return r.movie.title; }));
    var box = $('#quiz-results');
    box.innerHTML = '<div class="panel"><h2>🎬 Tonight, you\'re watching…</h2>' +
      '<p class="muted">Matched to ' + esc(p.name) + '\'s taste from ' + quiz.rounds + ' rounds. Saved to your profile.</p></div>' +
      recs.map(function (r) {
        return resultCard(r, '<div class="match">' + Math.round(((r.score + 1) / 2) * 100) + '% match</div>');
      }).join('') +
      '<button class="btn btn-primary btn-big" id="quiz-again">Play again</button>';
    box.classList.remove('hidden');
    $('#quiz-again').addEventListener('click', function () {
      box.classList.add('hidden'); $('#quiz-setup').classList.remove('hidden');
    });
    goto('quiz');
  }

  /* ---------- couples mode ---------- */
  var coupleRounds = 16;
  $('#couple-rounds').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-rounds]'); if (!b) return;
    coupleRounds = parseInt(b.dataset.rounds, 10);
    this.querySelectorAll('.seg').forEach(function (s) { s.classList.toggle('selected', s === b); });
  });
  function profileOptions(selectedId) {
    return state.profiles.map(function (p) {
      return '<option value="' + p.id + '"' + (p.id === selectedId ? ' selected' : '') + '>' + p.emoji + ' ' + esc(p.name) + '</option>';
    }).join('');
  }
  function renderCouplesSetup() {
    $('#couple-a').innerHTML = profileOptions(state.coupleA);
    $('#couple-b').innerHTML = profileOptions(state.coupleB);
  }
  var couple = null;
  $('#couples-start').addEventListener('click', function () {
    var aId = $('#couple-a').value, bId = $('#couple-b').value;
    if (aId === bId) { $('#couples-error').classList.remove('hidden'); return; }
    $('#couples-error').classList.add('hidden');
    state.coupleA = aId; state.coupleB = bId; save();
    couple = { rounds: coupleRounds, round: 0, used: [], picksA: [], picksB: [], pair: null, rng: E.makeRng((Date.now() + 7) % 2147483647), aId: aId, bId: bId, current: null };
    $('#couples-setup').classList.add('hidden');
    $('#couples-results').classList.add('hidden');
    $('#couples-play').classList.remove('hidden');
    nextCoupleRound(true);
  });
  function couplePref(picks) {
    return E.preferenceFromPicks(picks.map(function (p) { return { chosen: byId[p.chosenId], passed: byId[p.passedId], kind: p.kind }; }));
  }
  function nextCoupleRound(first) {
    if (couple.round >= couple.rounds) return finishCouples();
    var turnProfile = profile(couple.round % 2 === 0 ? couple.aId : couple.bId);
    couple.current = turnProfile;
    var combined = E.combinePreferences(couplePref(couple.picksA), couplePref(couple.picksB));
    var pair = E.nextPair(MOVIES, couple.used, couple.round, couple.rounds, couple.round > 1 ? combined : null, couple.rng);
    if (!pair) return finishCouples();
    couple.pair = pair;
    couple.used.push(pair[0].id, pair[1].id);
    var showPair = function () {
      $('#couples-progress').style.width = (couple.round / couple.rounds * 100) + '%';
      $('#couples-counter').textContent = 'Round ' + (couple.round + 1) + ' of ' + couple.rounds;
      $('#couples-turn-label').innerHTML = '<span class="turn-banner">' + turnProfile.emoji + ' ' + esc(turnProfile.name) + '\'s pick</span><br>Which are you more in the mood for?';
      $('#couples-pair').innerHTML = pairCard(pair[0], 'a') + pairCard(pair[1], 'b');
      var cp = $('#couples-pair');
      cp.classList.remove('pair-enter'); void cp.offsetWidth; cp.classList.add('pair-enter');
    };
    if (!first) {
      $('#pass-title').textContent = turnProfile.name + ', your turn!';
      $('#pass-go').textContent = 'I\'m ' + turnProfile.name + ' — show my movies';
      $('#pass-overlay').classList.remove('hidden');
      $('#pass-go').onclick = function () { $('#pass-overlay').classList.add('hidden'); showPair(); };
    } else {
      showPair();
    }
  }
  function coupleAnswer(kind, side) {
    if (!couple || !couple.pair) return;
    var a = couple.pair[0], b = couple.pair[1];
    var list = (couple.round % 2 === 0) ? couple.picksA : couple.picksB;
    if (kind === 'pick') {
      var chosen = side === 'a' ? a : b, passed = side === 'a' ? b : a;
      list.push({ chosenId: chosen.id, passedId: passed.id, kind: 'pick' });
    } else {
      list.push({ chosenId: a.id, passedId: b.id, kind: kind });
    }
    couple.round++;
    nextCoupleRound(false);
  }
  $('#couples-pair').addEventListener('click', function (ev) {
    var c = ev.target.closest('[data-pick]'); if (!c || this.dataset.locked) return;
    this.dataset.locked = '1'; c.classList.add('picked');
    var self = this;
    setTimeout(function () { delete self.dataset.locked; coupleAnswer('pick', c.dataset.pick); }, 190);
  });
  $('#couples-both').addEventListener('click', function () { coupleAnswer('both'); });
  $('#couples-neither').addEventListener('click', function () { coupleAnswer('neither'); });
  function finishCouples() {
    $('#couples-play').classList.add('hidden');
    $('#pass-overlay').classList.add('hidden');
    var prefA = couplePref(couple.picksA), prefB = couplePref(couple.picksB);
    var recs = E.couplesRecommendations(MOVIES, prefA, prefB, { excludeIds: couple.used, limit: 5 });
    var pa = profile(couple.aId), pb = profile(couple.bId);
    var titles = recs.map(function (r) { return r.movie.title; });
    recordQuiz(pa, 'couples', couple.rounds, prefA, titles);
    recordQuiz(pb, 'couples', couple.rounds, prefB, titles);
    var box = $('#couples-results');
    box.innerHTML = '<div class="panel"><h2>💞 Made for the two of you</h2>' +
      '<p class="muted">Ranked by how well each film fits ' + esc(pa.name) + ' <em>and</em> ' + esc(pb.name) + ' — shared loves counted double.</p></div>' +
      recs.map(function (r) {
        return resultCard(r, '<div class="match">' + Math.round((r.matchA + r.matchB) / 2) + '% together</div>' +
          '<div class="match-sub">' + esc(pa.name) + ': ' + r.matchA + '% · ' + esc(pb.name) + ': ' + r.matchB + '%</div>');
      }).join('') +
      '<button class="btn btn-primary btn-big" id="couples-again">Play again</button>';
    box.classList.remove('hidden');
    $('#couples-again').addEventListener('click', function () {
      box.classList.add('hidden'); $('#couples-setup').classList.remove('hidden'); renderCouplesSetup();
    });
    goto('couples');
  }

  /* ---------- profile ---------- */
  var formEmoji = EMOJIS[0], formColor = COLORS[0], editingId = null;
  function buildProfileForm() {
    $('#pf-emojis').innerHTML = EMOJIS.map(function (e) {
      return '<button class="emoji-btn' + (e === formEmoji ? ' selected' : '') + '" data-emoji="' + e + '">' + e + '</button>';
    }).join('');
    $('#pf-colors').innerHTML = COLORS.map(function (c) {
      return '<button class="color-btn' + (c === formColor ? ' selected' : '') + '" data-color="' + c + '" style="background:' + c + '" aria-label="Color ' + c + '"></button>';
    }).join('');
  }
  $('#pf-emojis').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-emoji]'); if (!b) return;
    formEmoji = b.dataset.emoji; buildProfileForm();
  });
  $('#pf-colors').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-color]'); if (!b) return;
    formColor = b.dataset.color; buildProfileForm();
  });
  $('#pf-new').addEventListener('click', function () {
    editingId = null; $('#pf-name').value = ''; formEmoji = EMOJIS[0]; formColor = COLORS[0];
    $('#profile-form-title').textContent = 'Add a profile'; buildProfileForm();
  });
  $('#pf-save').addEventListener('click', function () {
    var name = $('#pf-name').value.trim() || 'Movie Fan';
    if (editingId) {
      var p = profile(editingId); p.name = name; p.emoji = formEmoji; p.color = formColor;
    } else {
      var np = blankProfile(name, formEmoji, formColor);
      state.profiles.push(np); state.activeId = np.id; editingId = np.id;
      $('#profile-form-title').textContent = 'Edit profile';
    }
    save(); renderProfile(); renderHeaderProfile();
  });
  function tasteBars(p) {
    var norm = E.normalizePreference(p.taste);
    var top = E.AXES.map(function (a) { return { axis: a, v: norm[a] }; })
      .filter(function (x) { return x.v > 0; })
      .sort(function (a, b) { return b.v - a.v; }).slice(0, 5);
    if (!top.length) return '<p class="muted">Take a quiz and your taste profile will appear here.</p>';
    return top.map(function (x) {
      return '<div class="bar-row"><span>' + x.axis.charAt(0).toUpperCase() + x.axis.slice(1) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + Math.round(x.v * 10) + '%"></div></div><span class="bar-val">' + x.v.toFixed(1) + '</span></div>';
    }).join('');
  }
  function miniGrid(ids) {
    if (!ids.length) return '<p class="muted">Nothing here yet — tap a movie and add it.</p>';
    return '<div class="list-grid">' + ids.map(function (id) {
      var m = byId[id]; if (!m) return '';
      return '<button class="card" data-open="' + m.id + '">' + coverHTML(m) + '<div class="card-body"><div class="card-title">' + esc(m.title) + '</div></div></button>';
    }).join('') + '</div>';
  }
  function renderProfile() {
    var p = profile();
    $('#profile-switcher').innerHTML = state.profiles.map(function (x) {
      return '<button class="chip' + (x.id === p.id ? ' active' : '') + '" data-switch="' + x.id + '">' + x.emoji + ' ' + esc(x.name) + '</button>';
    }).join('');
    $('#profile-switcher').querySelectorAll('[data-switch]').forEach(function (b) {
      b.addEventListener('click', function () { state.activeId = b.dataset.switch; save(); renderProfile(); renderHeaderProfile(); });
    });
    editingId = p.id;
    $('#pf-name').value = p.name; formEmoji = p.emoji; formColor = p.color;
    $('#profile-form-title').textContent = 'Edit profile';
    buildProfileForm();
    $('#profile-card').innerHTML = '<div class="panel"><div class="profile-head">' +
      '<div class="profile-avatar" style="background:' + p.color + '">' + p.emoji + '</div>' +
      '<div><h2 style="margin:0">' + esc(p.name) + '</h2><p class="muted" style="margin:2px 0 0">Your taste, saved on this device only.</p></div></div>' +
      '<div class="stat-row"><div class="stat"><b>' + p.favorites.length + '</b><span>Favorites</span></div>' +
      '<div class="stat"><b>' + p.watchlist.length + '</b><span>Watchlist</span></div>' +
      '<div class="stat"><b>' + p.history.length + '</b><span>Quizzes</span></div></div>' +
      '<h3 style="margin-top:18px">Taste profile</h3>' + tasteBars(p) + '</div>';
    $('#profile-lists').innerHTML =
      '<div class="panel"><h3>♥ Favorites</h3>' + miniGrid(p.favorites) + '</div>' +
      '<div class="panel"><h3>Watchlist</h3>' + miniGrid(p.watchlist) + '</div>' +
      (p.history.length ? '<div class="panel"><h3>Recent quizzes</h3>' + p.history.slice(-5).reverse().map(function (h) {
        return '<p class="muted" style="margin:6px 0">' + (h.mode === 'couples' ? '💞 Couples' : '🎯 Solo') + ' · ' + h.rounds + ' rounds · ' + new Date(h.date).toLocaleDateString() +
          (h.top && h.top.length ? '<br>Top pick: <strong style="color:var(--text)">' + esc(h.top[0]) + '</strong>' : '') + '</p>';
      }).join('') + '</div>' : '');
  }

  /* ---------- init ---------- */
  renderHeaderProfile();
  renderBrowse();
  buildProfileForm();
  renderCouplesSetup();
})();
