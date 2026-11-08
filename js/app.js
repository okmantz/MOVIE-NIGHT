/* Movie Night — UI. Accounts and all data live on this device only
   (localStorage, see js/accounts.js) — there is no server in this
   version, so nothing syncs between phones. */
(function () {
  'use strict';
  var E = window.MovieEngine;
  var A = window.MovieAccounts;
  /* Canonical share/install URL (GitHub Pages). If the Pages URL ever
     differs, update this ONE constant — every share action uses it. */
  var APP_URL = 'https://okmantz.github.io/MOVIE-NIGHT/';
  var byId = {};
  MOVIES.forEach(function (m) { byId[m.id] = m; });
  /* TV shows (v6, js/shows.js). Show ids are prefixed "tv-" so they can
     never collide with movie ids in shared handlers. */
  var SHOW_LIST = (typeof SHOWS !== 'undefined') ? SHOWS : [];
  var showById = {};
  SHOW_LIST.forEach(function (s) { showById[s.id] = s; });
  function anyById(id) { return showById[id] || byId[id]; }
  function isShow(it) { return !!it && it.startYear !== undefined; }
  function yearText(it) {
    if (isShow(it)) {
      if (!it.startYear) return 'Series';
      if (it.endYear) return it.startYear === it.endYear ? '' + it.startYear : it.startYear + '–' + it.endYear;
      return it.startYear + '–present';
    }
    return '' + it.year;
  }
  function lengthLabel(it) {
    if (isShow(it)) {
      if (it.seasons) return it.seasons + (it.seasons === 1 ? ' season' : ' seasons');
      if (it.episodes) return it.episodes + ' episodes';
      return '';
    }
    return runtimeLabel(it.runtime);
  }

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
    Western: ['#6e4517', '#211304'], Musical: ['#5b2a5e', '#1c0b1e'],
    Documentary: ['#8a7b4f', '#3d3423'], Docuseries: ['#7d6a45', '#38301f'],
    Reality: ['#b04a8a', '#4a1f3a'], Superhero: ['#31519e', '#16264f'],
    'Historical Drama': ['#8a6d3b', '#40331a'], 'Psychological Thriller': ['#4a3d63', '#241d33'],
    'Family Drama': ['#7c6a8a', '#372f40'], 'Horror Thriller': ['#40254d', '#231233']
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
      '<div class="cover-meta">' + yearText(movie) + ' · ' + esc(movie.genres[0]) + '</div>' +
      '</div></div>';
  }
  function cardHTML(movie) {
    return '<button class="card" data-open="' + movie.id + '">' + coverHTML(movie) +
      '<div class="card-body"><div class="card-title">' + esc(movie.title) + '</div>' +
      '<div class="card-sub">' + metaLine(yearText(movie), lengthLabel(movie), movie.rating ? esc(movie.rating) : '') + '</div>' +
      '<div>' + movie.genres.slice(0, 2).map(function (g) { return '<span class="genre-tag">' + esc(g) + '</span>'; }).join('') + '</div>' +
      '<div class="card-desc">' + esc(movie.description) + '</div></div></button>';
  }

  /* ---------- accounts & persistent state ----------
     Identity + credentials live in the accounts store (js/accounts.js);
     each person's favorites/watchlist/history/taste live under their own
     per-account key. `state.profiles` is the merged in-memory view of
     every person on this device (accounts + unclaimed legacy profiles +
     Guest); state.activeId is the SIGNED-IN identity (null when nobody
     is signed in). Couples mode can pair any two people on the device. */
  var UI_KEY = 'movienight.ui.v1';
  var EMOJIS = ['🎬', '🍿', '🎭', '🦊', '🐼', '🦉', '🐙', '🌙', '🔥', '💎', '🎧', '🦁'];
  var COLORS = ['#e8b34b', '#e0655a', '#5ab0e0', '#7ac74f', '#b48ce0', '#e08ab5', '#4fd1c5', '#f08c3c'];
  A.migrateLegacyIfNeeded();
  function profileFromRecord(rec) {
    var d = A.getData(rec.id);
    var taste = E.emptyPreference();
    if (d.taste) E.AXES.forEach(function (a) { taste[a] = d.taste[a] || 0; });
    return {
      id: rec.id, name: rec.name, emoji: rec.emoji, color: rec.color,
      email: rec.email || null, unclaimed: !!rec.unclaimed, guest: !!rec.guest,
      favorites: d.favorites || [], watchlist: d.watchlist || [],
      showFavorites: d.showFavorites || [], showWatchlist: d.showWatchlist || [],
      history: d.history || [], taste: taste
    };
  }
  var state = { profiles: [], activeId: null, coupleA: null, coupleB: null };
  function refreshPeople() {
    A.guestPerson(); /* make sure the Guest person always exists */
    state.profiles = A.people().map(profileFromRecord);
    var sid = A.getSession();
    var me = sid ? state.profiles.find(function (p) { return p.id === sid && !p.unclaimed; }) : null;
    state.activeId = me ? me.id : null;
    var ui = {};
    try { ui = JSON.parse(localStorage.getItem(UI_KEY)) || {}; } catch (e) { /* ignore */ }
    var legacyPrefs = A.loadStore().legacyPrefs || {};
    function pick(saved, fallbackIdx) {
      if (saved && state.profiles.some(function (p) { return p.id === saved; })) return saved;
      return state.profiles[Math.min(fallbackIdx, state.profiles.length - 1)].id;
    }
    state.coupleA = pick(ui.coupleA || legacyPrefs.coupleA, 0);
    state.coupleB = pick(ui.coupleB || legacyPrefs.coupleB, 1);
  }
  refreshPeople();
  function save() {
    state.profiles.forEach(function (p) {
      A.saveData(p.id, {
        favorites: p.favorites, watchlist: p.watchlist,
        showFavorites: p.showFavorites, showWatchlist: p.showWatchlist,
        history: p.history, taste: p.taste
      });
    });
    try { localStorage.setItem(UI_KEY, JSON.stringify({ coupleA: state.coupleA, coupleB: state.coupleB })); } catch (e) { /* ignore */ }
  }
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
    var ml = ev.target.closest('[data-media-link]');
    if (ml) { setMedia(ml.dataset.mediaLink); goto('home'); return; }
    var g = ev.target.closest('[data-goto]');
    if (g) { goto(g.dataset.goto); return; }
    var o = ev.target.closest('[data-open]');
    if (o) openDetail(o.dataset.open);
  });
  $('#header-profile').addEventListener('click', function () {
    if (!state.activeId) openWelcome('main'); else goto('profile');
  });
  function renderHeaderProfile() {
    var hp = $('#header-profile');
    if (!state.activeId) {
      hp.innerHTML = '<span class="avatar-dot" style="background:#8a8fa3">👤</span>Sign in';
      return;
    }
    var p = profile();
    hp.innerHTML = '<span class="avatar-dot" style="background:' + p.color + '">' + p.emoji + '</span>' + esc(p.name);
  }

  /* ---------- share & toast ---------- */
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(t._hide);
    t._hide = setTimeout(function () { t.classList.add('hidden'); }, 2800);
  }
  function copyAppLink() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(APP_URL).then(
        function () { toast('Link copied — send it to anyone!'); },
        function () { toast('Copy this link: ' + APP_URL); });
    } else toast('Copy this link: ' + APP_URL);
  }
  function shareApp() {
    if (navigator.share) {
      navigator.share({
        title: 'Movie Night',
        text: 'Movie Night — the this-or-that movie picker. Take the quiz, get picks you\'ll both love.',
        url: APP_URL
      }).catch(function () { /* user cancelled */ });
    } else copyAppLink();
  }
  function renderSharePanel() {
    var box = $('#share-panel');
    if (!box) return;
    box.innerHTML = '<div class="panel"><h3>📤 Share Movie Night</h3>' +
      '<p class="muted">Send this app to anyone: they open the link on their phone and install it — no app store, no sign-up with you. The app runs entirely on their phone and they make their own account there.</p>' +
      '<p class="muted"><strong>Install:</strong> iPhone — Share button → <em>Add to Home Screen</em>. Android — ⋮ menu → <em>Install app</em>.</p>' +
      '<div class="row-gap"><button class="btn btn-primary" id="share-go">Share this app</button><button class="btn" id="share-copy">Copy link</button></div>' +
      '<p class="muted" style="margin-top:10px">' + APP_URL + '</p></div>';
    $('#share-go').addEventListener('click', shareApp);
    $('#share-copy').addEventListener('click', copyAppLink);
  }

  /* ---------- welcome / sign-in ---------- */
  function enterAs(id) {
    A.setSession(id);
    refreshPeople();
    save();
    $('#welcome-overlay').classList.add('hidden');
    renderHeaderProfile();
    renderCouplesSetup();
    goto(state.activeId ? 'home' : 'profile');
    var p = profile(id);
    toast(p && p.guest ? 'Browsing as Guest 👤' : 'Welcome, ' + (p ? p.name : '') + ' 🍿');
  }
  function signOutToWelcome() {
    A.setSession(null);
    refreshPeople();
    renderHeaderProfile();
    openWelcome('main');
  }
  function openWelcome(mode, claimId) {
    var card = $('#welcome-card');
    var folks = A.people();
    var claimed = folks.filter(function (x) { return !x.unclaimed && !x.guest; });
    var unclaimed = folks.filter(function (x) { return x.unclaimed; });
    var errHtml = '<p class="error hidden" id="w-error"></p>';
    function head(sub) {
      return '<div class="welcome-head"><div class="pass-emoji">🎬🍿</div><h2>Movie Night</h2>' +
        '<p class="muted">' + sub + '</p></div>';
    }
    function showErr(msg) { var e = $('#w-error'); e.textContent = msg; e.classList.remove('hidden'); }
    if (mode === 'login') {
      card.innerHTML = head('Log in to your account on this device.') +
        (claimed.length
          ? '<p class="label">Accounts on this device</p><div class="chips auth-chips">' +
            claimed.map(function (x) { return '<button class="chip" data-wemail="' + esc(x.email) + '">' + x.emoji + ' ' + esc(x.name) + '</button>'; }).join('') + '</div>'
          : '<p class="muted">No accounts on this device yet — create one instead.</p>') +
        '<label class="label" for="w-email">Email</label><input id="w-email" class="input" type="email" autocomplete="email" placeholder="you@example.com">' +
        '<label class="label" for="w-pin">PIN or password</label><input id="w-pin" class="input" type="password" autocomplete="current-password" placeholder="Your PIN">' +
        errHtml +
        '<button class="btn btn-primary btn-big" id="w-login-go">Log in</button>' +
        '<button class="btn btn-ghost btn-big" id="w-back">Back</button>';
      card.querySelectorAll('[data-wemail]').forEach(function (b) {
        b.addEventListener('click', function () { $('#w-email').value = b.dataset.wemail; $('#w-pin').focus(); });
      });
      $('#w-back').addEventListener('click', function () { openWelcome('main'); });
      $('#w-login-go').addEventListener('click', function () {
        A.verifyLogin($('#w-email').value, $('#w-pin').value).then(function (acct) {
          if (!acct) { showErr('That email and PIN don\'t match an account on this device.'); return; }
          enterAs(acct.id);
        }).catch(function () { showErr('Sign-in isn\'t available in this browser (Web Crypto is missing). Try a current browser.'); });
      });
    } else if (mode === 'signup' || mode === 'claim') {
      var target = mode === 'claim' ? A.person(claimId) : null;
      card.innerHTML = head(mode === 'claim'
        ? 'Claim <strong>' + esc(target ? target.name : 'this profile') + '</strong> — set an email and PIN to make it your account. All of its favorites, watchlist and history stay exactly as they are.'
        : 'Create your account. It lives only on this device — no server, nothing leaves your phone.') +
        (mode === 'signup'
          ? '<label class="label" for="w-name">Your name</label><input id="w-name" class="input" type="text" maxlength="24" placeholder="e.g. Alex">'
          : '') +
        '<label class="label" for="w-email">Email</label><input id="w-email" class="input" type="email" autocomplete="email" placeholder="you@example.com">' +
        '<label class="label" for="w-pin">PIN or password (4+ characters)</label><input id="w-pin" class="input" type="password" autocomplete="new-password" placeholder="Choose a PIN">' +
        errHtml +
        '<button class="btn btn-primary btn-big" id="w-auth-go">' + (mode === 'claim' ? 'Claim & continue' : 'Create account') + '</button>' +
        '<button class="btn btn-ghost btn-big" id="w-back">Back</button>';
      $('#w-back').addEventListener('click', function () { openWelcome('main'); });
      $('#w-auth-go').addEventListener('click', function () {
        var email = $('#w-email').value, pin = $('#w-pin').value;
        function done(r) {
          if (!r.ok) { showErr(r.error); return; }
          enterAs(r.account.id);
        }
        var fail = function () { showErr('Accounts aren\'t available in this browser (Web Crypto is missing). Try a current browser.'); };
        if (mode === 'claim') A.claimAccount(claimId, { email: email, pin: pin }).then(done).catch(fail);
        else A.createAccount({
          name: $('#w-name').value, email: email, pin: pin,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        }).then(done).catch(fail);
      });
    } else {
      card.innerHTML = head('Find a film you — or both of you — will love. Accounts live on this device only: each phone keeps its own, and nothing syncs or leaves the phone.') +
        (claimed.length ? '<button class="btn btn-primary btn-big" id="w-go-login">Log in</button>' : '') +
        '<button class="btn ' + (claimed.length ? '' : 'btn-primary ') + 'btn-big" id="w-go-signup">Create account</button>' +
        '<button class="btn btn-ghost btn-big" id="w-go-guest">Continue as guest</button>' +
        (unclaimed.length
          ? '<p class="label" style="margin-top:16px">Profiles from before accounts — claim yours to keep its data:</p>' +
            unclaimed.map(function (u) { return '<button class="btn" data-wclaim="' + u.id + '" style="margin:0 6px 6px 0">' + u.emoji + ' ' + esc(u.name) + '</button>'; }).join('')
          : '') +
        '<div class="welcome-share"><button class="btn" id="w-share">📤 Share this app</button>' +
        '<p class="muted">Send anyone the link — they open it and tap <em>Add to Home Screen</em> to install. No app store needed.</p></div>';
      var gl = $('#w-go-login');
      if (gl) gl.addEventListener('click', function () { openWelcome('login'); });
      $('#w-go-signup').addEventListener('click', function () { openWelcome('signup'); });
      $('#w-go-guest').addEventListener('click', function () { enterAs(A.GUEST_ID); });
      card.querySelectorAll('[data-wclaim]').forEach(function (b) {
        b.addEventListener('click', function () { openWelcome('claim', b.dataset.wclaim); });
      });
      $('#w-share').addEventListener('click', shareApp);
    }
    $('#welcome-overlay').classList.remove('hidden');
  }

  /* ---------- browse ---------- */
  var allGenres = [];
  MOVIES.forEach(function (m) { m.genres.forEach(function (g) { if (allGenres.indexOf(g) === -1) allGenres.push(g); }); });
  var activeGenre = 'All';
  var chipsBox = $('#genre-chips');
  var genreCounts = {};
  MOVIES.forEach(function (m) { m.genres.forEach(function (g) { genreCounts[g] = (genreCounts[g] || 0) + 1; }); });
  allGenres.sort(function (a, b) { return (genreCounts[b] || 0) - (genreCounts[a] || 0); });
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
      if (sort === 'pop') return (b.ap || 0) - (a.ap || 0) || a.title.localeCompare(b.title);
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
    var cc = $('#catalog-count'); if (cc) cc.textContent = (Math.floor(MOVIES.length / 100) * 100).toLocaleString() + '+';
    var pool = MOVIES.filter(function (m) { return m.poster && m.year >= 2000 && (m.ap || 0) >= 82; });
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
    /* Shows live in parallel per-account lists so a series can never
       land in (or evict anything from) the movie lists. */
    var field = showById[id]
      ? 'show' + listName.charAt(0).toUpperCase() + listName.slice(1)
      : listName;
    var i = p[field].indexOf(id);
    if (i === -1) p[field].push(id); else p[field].splice(i, 1);
    save();
  }
  function detailFit(m, tv) {
    var me = state.activeId ? profile(state.activeId) : null;
    if (!me) return '';
    var has = E.AXES.some(function (a) { return me.taste[a] > 0; });
    if (!has) return '';
    E.calibrate(tv ? SHOW_LIST : MOVIES);
    var pct = E.matchPercent(me.taste, m);
    return '<div class="detail-why"><strong>' + pct + '% match</strong> for your taste. ' + esc(E.whyFor(me.taste, m)) + '</div>';
  }
  function openDetail(id) {
    var m = anyById(id); if (!m) return;
    var tv = isShow(m);
    var p = profile();
    var favList = tv ? p.showFavorites : p.favorites;
    var wlList = tv ? p.showWatchlist : p.watchlist;
    var fav = favList.indexOf(id) !== -1, wl = wlList.indexOf(id) !== -1;
    var similar = E.similarMovies(tv ? SHOW_LIST : MOVIES, m, 6);
    var meta = tv
      ? metaLine(yearText(m), m.status || '',
          m.seasons ? m.seasons + (m.seasons === 1 ? ' season' : ' seasons') : '',
          m.episodes ? m.episodes + ' episodes' : '',
          m.network ? '📺 ' + esc(m.network) : '',
          m.creator ? 'Created by ' + esc(m.creator) : '',
          m.rating ? 'Rated ' + esc(m.rating) : '')
      : metaLine(m.year, (m.director && m.director !== 'Unknown') ? 'Directed by ' + esc(m.director) : '', runtimeLabel(m.runtime), m.rating ? 'Rated ' + esc(m.rating) : '');
    $('#detail-sheet').innerHTML =
      '<div class="sheet-hero">' + (m.poster ? '<div class="sheet-backdrop" style="background-image:url(&quot;' + esc(m.poster) + '&quot;)"></div>' : '') + coverHTML(m) +
      '<button class="sheet-close" id="detail-close" aria-label="Close">✕</button></div>' +
      '<div class="sheet-body"><h2>' + esc(m.title) + '</h2>' +
      '<p class="meta-line">' + meta + '</p>' +
      '<div>' + m.genres.map(function (g) { return '<span class="genre-tag">' + esc(g) + '</span>'; }).join('') + '</div>' +
      detailFit(m, tv) +
      '<p>' + esc(m.description) + '</p>' +
      '<div class="row-gap">' +
      '<button class="btn ' + (fav ? 'btn-primary' : '') + '" id="detail-fav">' + (fav ? '♥ Favorited' : '♡ Favorite') + '</button>' +
      '<button class="btn ' + (wl ? 'btn-primary' : '') + '" id="detail-wl">' + (wl ? '✓ On watchlist' : '+ Watchlist') + '</button></div>' +
      (tv ? '<p class="fineprint">Platform shown is the original network or service that first aired the series — where it streams today changes often and isn\'t tracked here.</p>' : '') +
      '<h3>Taste profile</h3>' + vectorBars(m.vector) +
      '<div class="kw-row">' + m.keywords.map(function (k) { return '<span class="kw">#' + esc(k) + '</span>'; }).join('') + '</div>' +
      '<h3>More like this</h3><div class="similar-grid">' +
      similar.map(function (s) { return '<button class="card" data-open="' + s.id + '">' + coverHTML(s) + '<div class="card-body"><div class="card-title">' + esc(s.title) + '</div><div class="card-sub">' + yearText(s) + '</div></div></button>'; }).join('') +
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
      '<div class="card-sub">' + metaLine(yearText(movie), esc(movie.genres[0]), lengthLabel(movie)) + '</div>' +
      '<div class="card-desc">' + esc(movie.description) + '</div></div></button>';
  }
  function ringHTML(pct) {
    return '<span class="ring" style="--p:' + pct + '" aria-label="' + pct + ' percent match"><b>' + pct + '%</b></span>';
  }
  function resultCard(r, extra, idx, ringPct) {
    var m = r.movie, featured = idx === 0;
    var meta = metaLine(yearText(m), lengthLabel(m), m.rating ? esc(m.rating) : '', esc(m.genres.slice(0, 2).join(', ')));
    var head = (featured ? '<div class="top-badge">Your top pick</div>' : '');
    var cover = featured
      ? '<div class="cover-wrap" data-open="' + m.id + '">' + coverHTML(m) + '</div>'
      : '<div data-open="' + m.id + '" style="cursor:pointer">' + coverHTML(m) + '</div>';
    return '<div class="result-card' + (featured ? ' featured' : '') + '">' +
      (!featured && idx != null ? '<span class="result-rank">#' + (idx + 1) + '</span>' : '') + cover +
      '<div class="result-main">' + head +
      '<div class="card-title">' + esc(m.title) + '</div><div class="card-sub">' + meta + '</div>' +
      (ringPct != null ? '<div class="match-row">' + ringHTML(ringPct) + '<div>' + (extra || '') + '</div></div>' : (extra || '')) +
      '<div class="why">' + esc(r.why) + '</div>' +
      '<div class="result-actions"><button class="btn" data-open="' + m.id + '">Details</button>' +
      '<button class="btn" data-watch="' + m.id + '">+ Watchlist</button></div></div></div>';
  }
  document.addEventListener('click', function (ev) {
    var w = ev.target.closest('[data-watch]');
    if (w) { toggleList('watchlist', w.dataset.watch); w.textContent = '✓ On watchlist'; w.classList.add('selected'); }
  });

  /* ---------- solo quiz (movies or TV shows) ---------- */
  var quiz = null;
  var soloRounds = 15;
  var quizCtx = { audience: '', length: '', era: '' };
  document.querySelectorAll('[data-ctx]').forEach(function (grp) {
    grp.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-val]'); if (!b) return;
      quizCtx[grp.dataset.ctx] = b.dataset.val;
      grp.querySelectorAll('.seg').forEach(function (x) { x.classList.toggle('selected', x === b); });
    });
  });
  function ctxFilterFor(list) {
    var f = E.contextFilter(quizCtx);
    var sub = list.filter(f);
    return sub.length >= 150 ? { filter: f, list: sub } : { filter: null, list: list };
  }
  function ctxSummary() {
    var bits = [];
    if (quizCtx.audience === 'date') bits.push('date night'); else if (quizCtx.audience === 'family') bits.push('family-friendly');
    if (quizCtx.length === 'short') bits.push('under ~105 minutes'); else if (quizCtx.length === 'epic') bits.push('2h+ settle-in films');
    if (quizCtx.era === 'modern') bits.push('2000s on'); else if (quizCtx.era === 'recent') bits.push('2015 and later');
    return bits.join(' · ');
  }
  var quizPool = 'movies';
  function setQuizPool(pool) {
    quizPool = pool;
    document.querySelectorAll('#quiz-pool .seg').forEach(function (s) {
      s.classList.toggle('selected', s.dataset.pool === pool);
    });
    var tv = pool === 'shows';
    $('#quiz-setup-title').textContent = tv ? 'Next Series Quiz' : 'Mood Match Quiz';
    $('#quiz-setup-copy').textContent = tv
      ? 'Two series, one tap. Pick the one you\'d rather start — there are no wrong answers. After the last round we\'ll line up 3–5 shows matched to your taste.'
      : 'Two movies, one tap. Pick the one you\'re more in the mood for — there are no wrong answers. After the last round we\'ll line up 3–5 films matched to your taste.';
  }
  $('#quiz-pool').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-pool]'); if (!b) return;
    setQuizPool(b.dataset.pool);
  });
  $('#quiz-rounds').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-rounds]'); if (!b) return;
    soloRounds = parseInt(b.dataset.rounds, 10);
    this.querySelectorAll('.seg').forEach(function (s) { s.classList.toggle('selected', s === b); });
  });
  $('#quiz-start').addEventListener('click', function () {
    var tv = quizPool === 'shows';
    var full = tv ? SHOW_LIST : MOVIES;
    var cf = ctxFilterFor(full);
    quiz = {
      rounds: soloRounds, round: 0, used: [], picks: [], pair: null,
      rng: E.makeRng(Date.now() % 2147483647),
      pool: quizPool, list: cf.list, fullList: full, filter: cf.filter, ctx: ctxSummary(), map: tv ? showById : byId
    };
    E.calibrate(full);
    $('#quiz-setup').classList.add('hidden');
    $('#quiz-results').classList.add('hidden');
    $('#quiz-play').classList.remove('hidden');
    nextSoloRound();
  });
  function nextSoloRound() {
    var pref = E.preferenceFromPicks(quiz.picks.map(function (p) { return { chosen: quiz.map[p.chosenId], passed: quiz.map[p.passedId], kind: p.kind }; }));
    quiz.pref = pref;
    var pair = E.nextPair(quiz.list, quiz.used, quiz.round, quiz.rounds, quiz.round > 0 ? pref : null, quiz.rng);
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
    var tv = quiz.pool === 'shows';
    var anchors = E.anchorsFromPicks(quiz.picks.map(function (p) { return { chosen: quiz.map[p.chosenId], passed: quiz.map[p.passedId], kind: p.kind }; }));
    var recs = E.buildRecommendations(quiz.fullList, quiz.pref, { excludeIds: quiz.used, limit: 5, filter: quiz.filter, anchors: anchors });
    var p = profile();
    recordQuiz(p, tv ? 'series' : 'solo', quiz.rounds, quiz.pref, recs.map(function (r) { return r.movie.title; }));
    var box = $('#quiz-results');
    box.innerHTML = '<div class="panel"><h2>' + (tv ? 'Your next series' : 'Tonight, you\'re watching') + '</h2>' +
      '<p class="muted">Matched to ' + esc(p.name) + '\'s taste from ' + quiz.rounds + ' rounds' + (quiz.ctx ? ' · ' + esc(quiz.ctx) : '') + '. Saved to your profile.</p></div>' +
      recs.map(function (r, i) {
        return resultCard(r, '<div class="match">' + (i === 0 ? 'Best fit' : 'Strong fit') + '</div><div class="match-label">match for your taste</div>', i, r.match);
      }).join('') +
      '<button class="btn btn-primary btn-big" id="quiz-again">Play again</button>' +
      '<button class="btn btn-ghost btn-big" id="quiz-tweak">Change audience, length or era</button>';
    box.classList.remove('hidden');
    $('#quiz-tweak').addEventListener('click', function () {
      box.classList.add('hidden'); $('#quiz-setup').classList.remove('hidden');
    });
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
    couple = { list: MOVIES, rounds: coupleRounds, round: 0, used: [], picksA: [], picksB: [], pair: null, rng: E.makeRng((Date.now() + 7) % 2147483647), aId: aId, bId: bId, current: null };
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
    var pair = E.nextPair(couple.list, couple.used, couple.round, couple.rounds, couple.round > 1 ? combined : null, couple.rng);
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
    box.innerHTML = '<div class="panel"><h2>Made for the two of you</h2>' +
      '<p class="muted">Every film clears a minimum fit for both ' + esc(pa.name) + ' <em>and</em> ' + esc(pb.name) + ', then the fairest overlap wins.</p></div>' +
      recs.map(function (r, i) {
        return resultCard(r, '<div class="match">' + (i === 0 ? 'Best for both of you' : 'Together') + '</div>' +
          '<div class="match-sub">' + esc(pa.name) + ' ' + r.matchA + '% · ' + esc(pb.name) + ' ' + r.matchB + '%</div>', i, Math.round((r.matchA + r.matchB) / 2));
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
  $('#pf-new').addEventListener('click', function () { openWelcome('signup'); });
  $('#pf-save').addEventListener('click', function () {
    if (!state.activeId) { openWelcome('main'); return; }
    var name = $('#pf-name').value.trim() || 'Movie Fan';
    A.updatePerson(state.activeId, { name: name, emoji: formEmoji, color: formColor });
    refreshPeople();
    save(); renderProfile(); renderHeaderProfile(); renderCouplesSetup();
    toast('Profile saved');
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
  function miniGrid(ids, map, emptyMsg) {
    map = map || byId;
    if (!ids.length) return '<p class="muted">' + (emptyMsg || 'Nothing here yet — tap a movie and add it.') + '</p>';
    return '<div class="list-grid">' + ids.map(function (id) {
      var m = map[id]; if (!m) return '';
      return '<button class="card" data-open="' + m.id + '">' + coverHTML(m) + '<div class="card-body"><div class="card-title">' + esc(m.title) + '</div></div></button>';
    }).join('') + '</div>';
  }
  function renderAccountPanel() {
    var me = state.activeId ? profile(state.activeId) : null;
    var unclaimed = A.people().filter(function (x) { return x.unclaimed; });
    var html = '<div class="panel" style="margin-top:0">';
    if (me && !me.guest) {
      html += '<h3 style="margin-top:0">👤 Signed in</h3>' +
        '<p class="muted">' + esc(me.name) + ' · ' + esc(me.email || '') + '<br>' +
        'Your account lives on this device only — your favorites, watchlist and taste are separate from everyone else\'s on this phone, and nothing syncs to other devices.</p>' +
        '<div class="row-gap"><button class="btn" id="acct-switch">Switch account</button>' +
        '<button class="btn" id="acct-logout">Log out</button></div>';
    } else if (me && me.guest) {
      html += '<h3 style="margin-top:0">👤 Guest mode</h3>' +
        '<p class="muted">You\'re browsing as Guest. Your picks save on this device — create an account to keep them under your name.</p>' +
        '<div class="row-gap"><button class="btn btn-primary" id="acct-signup">Create account</button>' +
        '<button class="btn" id="acct-login">Log in</button>' +
        '<button class="btn" id="acct-logout">Exit guest</button></div>';
    } else {
      html += '<h3 style="margin-top:0">👤 Not signed in</h3>' +
        '<p class="muted">Sign in to see your own taste profile, favorites and watchlist.</p>' +
        '<div class="row-gap"><button class="btn btn-primary" id="acct-login">Log in / Create account</button></div>';
    }
    if (unclaimed.length) {
      html += '<p class="label" style="margin-top:14px">Unclaimed profiles from before accounts</p>' +
        unclaimed.map(function (u) {
          return '<button class="btn" data-claim="' + u.id + '" style="margin:0 6px 6px 0">' + u.emoji + ' Claim ' + esc(u.name) + '</button>';
        }).join('') +
        '<p class="muted">Claiming keeps all of that profile\'s favorites, watchlist and history.</p>';
    }
    html += '<div class="share-row"><button class="btn btn-primary" id="acct-share">📤 Share this app</button></div>' +
      '<p class="muted">Send the link to anyone — they open it and tap <em>Add to Home Screen</em> to install it on their phone. No app store, no account with you needed.</p></div>';
    var box = $('#profile-switcher');
    box.className = '';
    box.innerHTML = html;
    var login = $('#acct-login'); if (login) login.addEventListener('click', function () { openWelcome('login'); });
    var signup = $('#acct-signup'); if (signup) signup.addEventListener('click', function () { openWelcome('signup'); });
    var sw = $('#acct-switch'); if (sw) sw.addEventListener('click', signOutToWelcome);
    var lo = $('#acct-logout'); if (lo) lo.addEventListener('click', signOutToWelcome);
    $('#acct-share').addEventListener('click', shareApp);
    box.querySelectorAll('[data-claim]').forEach(function (b) {
      b.addEventListener('click', function () { openWelcome('claim', b.dataset.claim); });
    });
  }
  function renderProfile() {
    renderAccountPanel();
    var me = state.activeId ? profile(state.activeId) : null;
    if (!me) {
      $('#profile-card').innerHTML = '<div class="panel"><h3 style="margin-top:0">Your taste lives with your account</h3>' +
        '<p class="muted">Log in or create an account above and your favorites, watchlist, quiz history and taste profile will show up here — visible only to you on this device.</p></div>';
      $('#profile-lists').innerHTML = '';
      $('#profile-form-title').textContent = 'Sign in to edit your profile';
      return;
    }
    var p = me;
    editingId = p.id;
    $('#pf-name').value = p.name; formEmoji = p.emoji; formColor = p.color;
    $('#profile-form-title').textContent = 'Edit your profile';
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
      '<div class="panel"><h3>📺 Series favorites</h3>' + miniGrid(p.showFavorites, showById, 'Nothing here yet — open the TV Shows section and favorite a series.') + '</div>' +
      '<div class="panel"><h3>📺 Series watchlist</h3>' + miniGrid(p.showWatchlist, showById, 'Nothing here yet — add a series from the TV Shows section.') + '</div>' +
      (p.history.length ? '<div class="panel"><h3>Recent quizzes</h3>' + p.history.slice(-5).reverse().map(function (h) {
        return '<p class="muted" style="margin:6px 0">' + (h.mode === 'couples' ? '💞 Couples' : h.mode === 'series' ? '📺 Series' : '🎯 Solo') + ' · ' + h.rounds + ' rounds · ' + new Date(h.date).toLocaleDateString() +
          (h.top && h.top.length ? '<br>Top pick: <strong style="color:var(--text)">' + esc(h.top[0]) + '</strong>' : '') + '</p>';
      }).join('') + '</div>' : '');
  }

  /* ---------- TV shows section ---------- */
  var mediaMode = 'movies';
  var showsInited = false;
  var showGenre = 'All';
  var showShown = PAGE_SIZE;
  function setMedia(mode) {
    mediaMode = mode;
    document.querySelectorAll('#media-switch .seg').forEach(function (s) {
      s.classList.toggle('selected', s.dataset.media === mode);
    });
    $('#movies-browse').classList.toggle('hidden', mode !== 'movies');
    $('#shows-browse').classList.toggle('hidden', mode !== 'shows');
    if (mode === 'shows' && !showsInited) { initShows(); showsInited = true; }
    window.scrollTo({ top: 0 });
  }
  $('#media-switch').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-media]'); if (!b) return;
    setMedia(b.dataset.media);
  });
  function showHay(s) {
    return (s.title + ' ' + s.genres.join(' ') + ' ' + (s.creator || '') + ' ' +
      (s.network || '') + ' ' + s.keywords.join(' ')).toLowerCase();
  }
  function renderShows(reset) {
    if (reset) showShown = PAGE_SIZE;
    var q = $('#show-search').value.trim().toLowerCase();
    var sort = $('#show-sort').value;
    var list = SHOW_LIST.filter(function (s) {
      if (showGenre !== 'All' && s.genres.indexOf(showGenre) === -1) return false;
      return !q || showHay(s).indexOf(q) !== -1;
    });
    list.sort(function (a, b) {
      if (sort === 'pop') return (b.ap || 0) - (a.ap || 0) || a.title.localeCompare(b.title);
      if (sort === 'new') return (b.startYear || 0) - (a.startYear || 0) || a.title.localeCompare(b.title);
      if (sort === 'seasons') return (b.seasons || 0) - (a.seasons || 0) || a.title.localeCompare(b.title);
      if (sort === 'episodes') return (b.episodes || 0) - (a.episodes || 0) || a.title.localeCompare(b.title);
      return a.title.localeCompare(b.title);
    });
    var shown = list.slice(0, showShown);
    $('#show-browse-count').textContent = list.length + (list.length === 1 ? ' series' : ' series') +
      (list.length > shown.length ? ' · showing ' + shown.length : '');
    $('#show-grid').innerHTML = shown.map(cardHTML).join('') ||
      '<p class="muted">Nothing matches — try a different search or genre.</p>';
    $('#show-more-shows').classList.toggle('hidden', list.length <= shown.length);
  }
  function initShows() {
    var sc = $('#shows-count'); if (sc) sc.textContent = (Math.floor(SHOW_LIST.length / 100) * 100).toLocaleString() + '+';
    /* genre chips with counts */
    var counts = {}, genres = [];
    SHOW_LIST.forEach(function (s) {
      s.genres.forEach(function (g) {
        counts[g] = (counts[g] || 0) + 1;
        if (genres.indexOf(g) === -1) genres.push(g);
      });
    });
    genres.sort(function (a, b) { return counts[b] - counts[a]; });
    var box = $('#show-genre-chips');
    ['All'].concat(genres).forEach(function (g) {
      var n = g === 'All' ? SHOW_LIST.length : counts[g];
      var c = el('<button class="chip' + (g === 'All' ? ' active' : '') + '" data-sgenre="' + esc(g) + '">' + esc(g) + ' <span class="chip-count">' + n + '</span></button>');
      c.addEventListener('click', function () {
        showGenre = g;
        box.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('active', x.dataset.sgenre === g); });
        renderShows(true);
      });
      box.appendChild(c);
    });
    /* shuffle genre select */
    var sgs = $('#show-shuffle-genre');
    sgs.innerHTML = '<option value="">Any genre</option>' + genres.map(function (g) {
      return '<option>' + esc(g) + '</option>';
    }).join('');
    /* Top Series */
    var top = (typeof TOP_SERIES !== 'undefined') ? TOP_SERIES : [];
    $('#top-series-list').innerHTML = top.map(function (t, i) {
      var s = showById[t.id]; if (!s) return '';
      return '<button class="top-row" data-open="' + s.id + '"><span class="top-rank">' + (i + 1) + '</span>' + coverHTML(s) +
        '<span><span class="card-title">' + esc(s.title) + '</span><div class="card-sub">' + yearText(s) + ' · ' + esc(s.genres.slice(0, 2).join(', ')) + '</div>' +
        '<div class="top-note">' + esc(t.note) + '</div></span></button>';
    }).join('');
    renderShows(true);
  }
  $('#show-more-shows').addEventListener('click', function () { showShown += PAGE_SIZE; renderShows(false); });
  var showSearchTimer = null;
  $('#show-search').addEventListener('input', function () {
    clearTimeout(showSearchTimer);
    showSearchTimer = setTimeout(function () { renderShows(true); }, 150);
  });
  $('#show-sort').addEventListener('change', function () { renderShows(true); });
  $('#show-shuffle-btn').addEventListener('click', function () {
    var g = $('#show-shuffle-genre').value;
    var picks = E.shufflePick(SHOW_LIST, { genre: g || 'All', count: 5, rng: Math.random });
    $('#show-shuffle-results').innerHTML = '<div class="grid">' + picks.map(cardHTML).join('') + '</div>';
  });
  $('#start-show-quiz').addEventListener('click', function () {
    setQuizPool('shows');
    $('#quiz-play').classList.add('hidden');
    $('#quiz-results').classList.add('hidden');
    $('#quiz-setup').classList.remove('hidden');
    goto('quiz');
  });

  /* ---------- init ---------- */
  renderHeaderProfile();
  renderBrowse();
  buildProfileForm();
  renderCouplesSetup();
  renderSharePanel();
  if (!state.activeId) openWelcome('main');
})();
