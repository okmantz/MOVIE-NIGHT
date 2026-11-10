/* Movie Night — UI (v12). Accounts and all data live on this device only
   (localStorage, see js/accounts.js) — there is no server in this version,
   so nothing syncs between phones. Sections: core · themes & avatars ·
   watchlist drawer · browse · detail · quiz · Top 20 · shuffle · account. */
(function () {
  'use strict';
  var E = window.MovieEngine;
  var A = window.MovieAccounts;
  var R = window.MovieRatings;
  /* Canonical share/install URL (GitHub Pages). Update this ONE constant if it ever changes. */
  var APP_URL = 'https://okmantz.github.io/MOVIE-NIGHT/';
  var byId = {};
  MOVIES.forEach(function (m) { byId[m.id] = m; });
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
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function runtimeLabel(min) { if (!min) return ''; var h = Math.floor(min / 60), m = min % 60; return h ? (h + 'h ' + m + 'm') : (m + 'm'); }
  function metaLine() { return Array.prototype.filter.call(arguments, function (p) { return !!p; }).join(' · '); }
  function lsGet(k, fb) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function listFor(media) { return media === 'shows' ? SHOW_LIST : MOVIES; }

  /* Line icons (replace the emoji that used to decorate every screen). */
  function ic(path, size, fill) {
    return '<svg class="i" viewBox="0 0 24 24" width="' + (size || 16) + '" height="' + (size || 16) + '" fill="' + (fill ? 'currentColor' : 'none') +
      '" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
  }
  var THUMB = '<path d="M7 11v9H4v-9zM7 11l4-8a2 2 0 0 1 2 2v4h6.2a1.8 1.8 0 0 1 1.8 2.1l-1.2 7A2 2 0 0 1 17.8 20H7"/>';
  var ICON = {
    up: THUMB, down: '<g transform="rotate(180 12 12)">' + THUMB + '</g>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
    bookmark: '<path d="M7 4h10v16l-5-3.5L7 20z"/>', chevUp: '<path d="M6 15l6-6 6 6"/>', chevDown: '<path d="M6 9l6 6 6-6"/>',
    swap: '<path d="M7 7h11l-3-3M17 17H6l3 3"/>', filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    film: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 9h16M4 15h16M8 5v14M16 5v14"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>', list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>', award: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2.5 4 2.5-1-7.5"/>'
  };

  /* ---------- covers & cards ---------- */
  var PALETTES = {
    Action: ['#7a1f1f', '#2b0d0d'], 'Sci-Fi': ['#14335c', '#060d1d'], Horror: ['#3d0a2e', '#12040e'],
    Thriller: ['#26324a', '#0b0f18'], Drama: ['#5c4318', '#1d1505'], Comedy: ['#7a5410', '#241a04'],
    Romance: ['#6e2438', '#200a12'], Crime: ['#3a3f1a', '#12130a'], Animation: ['#14532d', '#071a10'],
    Mystery: ['#2e2a4a', '#0d0b1a'], War: ['#4a4232', '#171410'], Family: ['#155e63', '#081d1f'],
    Fantasy: ['#3d2a63', '#120b24'], Adventure: ['#6b3a12', '#1f1004'], Western: ['#6e4517', '#211304'],
    Musical: ['#5b2a5e', '#1c0b1e'], Documentary: ['#8a7b4f', '#3d3423'], Docuseries: ['#7d6a45', '#38301f'],
    Reality: ['#b04a8a', '#4a1f3a'], Superhero: ['#31519e', '#16264f'], 'Historical Drama': ['#8a6d3b', '#40331a'],
    'Psychological Thriller': ['#4a3d63', '#241d33'], 'Family Drama': ['#7c6a8a', '#372f40'], 'Horror Thriller': ['#40254d', '#231233']
  };
  function paletteFor(m) {
    var p = PALETTES[(m.genres || [])[0]] || ['#33334a', '#101018'];
    return 'background:linear-gradient(160deg,' + p[0] + ',' + p[1] + ')';
  }
  function posterOf(m) { return m.poster && !/\.svg(?:\?|$)/i.test(m.poster) ? m.poster : ''; }
  function coverHTML(m, extraClass) {
    var src = posterOf(m);
    var img = src ? '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async" onload="this.classList.add(\'loaded\')" onerror="this.classList.add(\'img-failed\')">' : '';
    var badge = R.badge(m);
    return '<div class="cover ' + (extraClass || '') + '">' +
      '<div class="cover-fallback" style="' + paletteFor(m) + '"><div class="cover-initial">' + esc(m.title.replace(/^(The|A|An) /, '').charAt(0)) + '</div>' +
      '<div class="cover-title">' + esc(m.title) + '</div><div class="cover-meta">' + esc(yearText(m)) + ' · ' + esc((m.genres || [])[0] || '') + '</div></div>' +
      img + (badge ? '<span class="rating-chip"><i>★</i>' + badge + '</span>' : '') + '</div>';
  }

  /* ---------- accounts & persistent state ---------- */
  var UI_KEY = 'movienight.ui.v1';
  var EMOJI_SETS = [
    { id: 'cinema', label: 'Cinema', list: ['🎬', '🍿', '🎭', '🎞️', '📽️', '🎟️', '🎥', '⭐', '🏆', '🎧', '🎤', '🎸'] },
    { id: 'animals', label: 'Animals', list: ['🦊', '🐼', '🦉', '🐙', '🦁', '🐺', '🐯', '🦄', '🐸', '🐧', '🦋', '🐢', '🐨', '🦈', '🐲'] },
    { id: 'faces', label: 'Faces', list: ['😎', '🤩', '🥳', '😈', '🤓', '🧐', '😴', '🥹', '🤠', '👻', '🤖', '👽', '🧛', '🧙', '🦸'] },
    { id: 'vibes', label: 'Vibes', list: ['🌙', '🔥', '💎', '🌈', '⚡', '🌊', '🍀', '🌸', '☕', '🍕', '🚀', '🪐', '❄️', '🌵', '🍷'] }
  ];
  var EMOJIS = EMOJI_SETS[0].list.slice(0, 4).concat(EMOJI_SETS[1].list.slice(0, 4));
  var COLORS = ['#e8b34b', '#e0655a', '#5ab0e0', '#7ac74f', '#b48ce0', '#e08ab5', '#4fd1c5', '#f08c3c'];
  var AV_BGS = {
    sunset: 'linear-gradient(135deg,#f6a65a,#e0536f)', ocean: 'linear-gradient(135deg,#4cc9f0,#4361ee)',
    forest: 'linear-gradient(135deg,#7ed957,#0f766e)', orchid: 'linear-gradient(135deg,#c084fc,#6d28d9)',
    candy: 'linear-gradient(135deg,#ff9ac1,#ffb86b)', night: 'linear-gradient(135deg,#334155,#0f172a)',
    gold: 'linear-gradient(135deg,#f9d976,#d99a1c)', slate: 'linear-gradient(135deg,#94a3b8,#475569)'
  };
  A.migrateLegacyIfNeeded();
  function profileFromRecord(rec) {
    var d = A.getData(rec.id);
    var taste = E.emptyPreference();
    if (d.taste) E.AXES.forEach(function (a) { taste[a] = d.taste[a] || 0; });
    return {
      id: rec.id, name: rec.name, emoji: rec.emoji, color: rec.color, style: rec.style || 'emoji', bg: rec.bg || '', frame: rec.frame || 'none',
      email: rec.email || null, unclaimed: !!rec.unclaimed, guest: !!rec.guest,
      favorites: d.favorites || [], watchlist: d.watchlist || [],
      showFavorites: d.showFavorites || [], showWatchlist: d.showWatchlist || [],
      history: d.history || [], taste: taste, ratings: d.ratings || {}, watched: d.watched || [], events: d.events || [],
      quizProfile: d.quizProfile || null, achievements: d.achievements || [],
      snapshots: d.snapshots || [], quizBoost: d.quizBoost || null, foundPerfect: !!d.foundPerfect,
      settings: d.settings || {}, top20: A.normTop20(d.top20)
    };
  }
  var state = { profiles: [], activeId: null, coupleA: null, coupleB: null };
  function refreshPeople() {
    A.guestPerson();
    state.profiles = A.people().map(profileFromRecord);
    var sid = A.getSession();
    var me = sid ? state.profiles.find(function (p) { return p.id === sid && !p.unclaimed; }) : null;
    state.activeId = me ? me.id : null;
  }
  refreshPeople();
  /* Adaptive affinity: rebuilt lazily from every signal the person has given
     (favorites, thumbs, watchlist, watched, own Top 20, quiz passes). */
  var affCache = {};
  function affinityFor(p) {
    if (!p) return null;
    var c = affCache[p.id];
    if (c) return c;
    var t = p.top20 || {}, mine = t.mine || {}, auto = t.auto || [];
    function human(a) { return (a || []).filter(function (id) { return auto.indexOf(id) < 0; }); }
    c = E.buildAffinity(E.signalEntries({
      favorites: p.favorites, showFavorites: p.showFavorites, watchlist: p.watchlist, showWatchlist: p.showWatchlist,
      watched: p.watched, ratings: p.ratings, events: p.events, mine: { movies: human(mine.movies), shows: human(mine.shows) }
    }), anyById);
    affCache[p.id] = c;
    return c;
  }
  /* Taste-vector match, sharpened by what this person has actually done. */
  function personalMatch(p, m) {
    E.calibrate(listFor(isShow(m) ? 'shows' : 'movies'));
    return E.blendMatch(E.matchPercent(p.taste, m), E.affinityScore(affinityFor(p), m));
  }
  function save() {
    affCache = {};
    state.profiles.forEach(function (p) {
      A.saveData(p.id, {
        favorites: p.favorites, watchlist: p.watchlist, showFavorites: p.showFavorites, showWatchlist: p.showWatchlist,
        history: p.history, taste: p.taste, ratings: p.ratings, watched: p.watched, events: p.events, quizProfile: p.quizProfile,
        achievements: p.achievements, snapshots: p.snapshots || [], quizBoost: p.quizBoost || null, foundPerfect: !!p.foundPerfect,
        settings: p.settings || {}, top20: p.top20
      });
    });
  }
  function profile(id) { return state.profiles.find(function (p) { return p.id === (id || state.activeId); }) || state.profiles[0]; }
  function me() { return profile(); }
  function AXES_ADD(target, add) { E.AXES.forEach(function (a) { target[a] = (target[a] || 0) + (add[a] || 0); }); }
  function recordQuiz(p, mode, rounds, pref, topTitles) {
    if (!p || p.id === '__temp__') return;
    AXES_ADD(p.taste, pref);
    p.history.push({ date: new Date().toISOString(), mode: mode, rounds: rounds, top: topTitles });
    if (p.history.length > 120) p.history = p.history.slice(-120);
    snapshotTaste(p);
    save();
  }
  function logEvent(id, type, value) {
    var p = me(); if (!p) return;
    p.events = p.events || [];
    p.events.push({ id: id, type: type, value: value || null, at: new Date().toISOString() });
    if (p.events.length > 1500) p.events = p.events.slice(-1500);
    save();
  }
  function hasTaste(p) { return !!p && E.AXES.some(function (a) { return (p.taste[a] || 0) > 0; }); }

  /* ---------- toast ---------- */
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg; t.classList.remove('hidden');
    clearTimeout(t._hide);
    t._hide = setTimeout(function () { t.classList.add('hidden'); }, 2800);
  }

  /* ---------- themes: colours that re-skin the whole app ---------- */
  function hex2rgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)]; }
  function rgb2hex(c) { return '#' + c.map(function (x) { return ('0' + Math.max(0, Math.min(255, Math.round(x))).toString(16)).slice(-2); }).join(''); }
  function mix(a, b, t) { var x = hex2rgb(a), y = hex2rgb(b); return rgb2hex([0, 1, 2].map(function (i) { return x[i] + (y[i] - x[i]) * t; })); }
  function lum(h) { var c = hex2rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  var THEMES = [
    { id: 'gold', name: 'Midnight Gold', mode: 'dark', bg: '#09090e', accent: '#e9b756' },
    { id: 'rose', name: 'Noir Rose', mode: 'dark', bg: '#0e0a0d', accent: '#ff6b8b' },
    { id: 'ocean', name: 'Deep Ocean', mode: 'dark', bg: '#070c12', accent: '#4cc9f0' },
    { id: 'emerald', name: 'Emerald', mode: 'dark', bg: '#07100c', accent: '#4ade80' },
    { id: 'violet', name: 'Violet Hour', mode: 'dark', bg: '#0c0a14', accent: '#a78bfa' },
    { id: 'ember', name: 'Ember', mode: 'dark', bg: '#100a07', accent: '#fb923c' },
    { id: 'ivory', name: 'Ivory', mode: 'light', bg: '#f6f3ec', accent: '#b7791f' },
    { id: 'blush', name: 'Blush Light', mode: 'light', bg: '#faf3f4', accent: '#d6456b' }
  ];
  function themeVars(t) {
    var light = t.mode === 'light', acc = t.accent, bg = t.bg;
    var v = { '--accent': acc, '--accent-rgb': hex2rgb(acc).join(','), '--accent-ink': lum(acc) > 0.38 ? '#1b1405' : '#ffffff', '--bg': bg };
    if (light) {
      v['--bg2'] = mix(bg, '#000000', 0.04); v['--surface'] = '#ffffff'; v['--surface2'] = mix(bg, '#000000', 0.03); v['--surface3'] = mix(bg, '#000000', 0.09);
      v['--text'] = '#18151f'; v['--muted'] = '#5d5969'; v['--faint'] = '#8a8697';
      v['--line'] = 'rgba(24,20,34,.1)'; v['--line2'] = 'rgba(24,20,34,.2)';
      v['--accent'] = lum(acc) > 0.45 ? mix(acc, '#000000', 0.35) : acc;
    } else {
      v['--bg2'] = mix(bg, '#ffffff', 0.035); v['--surface'] = mix(bg, '#ffffff', 0.065); v['--surface2'] = mix(bg, '#ffffff', 0.105); v['--surface3'] = mix(bg, '#ffffff', 0.15);
      v['--text'] = '#f6f3ec'; v['--muted'] = '#a4a1b4'; v['--faint'] = '#6f6c80';
      v['--line'] = 'rgba(255,255,255,.08)'; v['--line2'] = 'rgba(255,255,255,.16)';
    }
    return v;
  }
  function resolveTheme(s) {
    s = s || {};
    var base = THEMES.find(function (t) { return t.id === s.preset; }) || THEMES[0];
    var t = { id: base.id, mode: s.mode === 'light' || s.mode === 'dark' ? s.mode : base.mode, bg: base.bg, accent: /^#[0-9a-f]{6}$/i.test(s.accent || '') ? s.accent : base.accent };
    if (t.mode !== base.mode) t.bg = t.mode === 'light' ? '#f6f3ec' : '#09090e';
    return t;
  }
  function applyTheme(s) {
    var t = resolveTheme(s), vars = themeVars(t), root = document.documentElement;
    Object.keys(vars).forEach(function (k) { root.style.setProperty(k, vars[k]); });
    root.setAttribute('data-mode', t.mode);
    var m = document.getElementById('meta-theme'); if (m) m.setAttribute('content', vars['--bg']);
    lsSet('movienight.theme.v1', { vars: vars, mode: t.mode });
  }
  function themeSettings(p) { return (p && p.settings && p.settings.theme) || {}; }
  function setTheme(patch) {
    var p = me(); if (!p) return;
    p.settings = p.settings || {};
    p.settings.theme = Object.assign({}, p.settings.theme || {}, patch);
    applyTheme(p.settings.theme); save();
  }

  /* ---------- avatars ---------- */
  function avatarHTML(p, size) {
    var bg = AV_BGS[p.bg] || p.color || '#e9b756';
    var mono = p.style === 'mono' || !p.emoji;
    var inner = mono ? esc((p.name || '?').trim().charAt(0).toUpperCase()) : esc(p.emoji);
    return '<span class="avatar' + (mono ? ' mono' : '') + (p.frame && p.frame !== 'none' ? ' frame-' + p.frame : '') + (size ? ' avatar-' + size : '') +
      '" style="--av-bg:' + esc(bg) + ';background:' + esc(bg) + '" aria-hidden="true">' + inner + '</span>';
  }
  function renderHeaderProfile() {
    var p = me(), b = $('#header-profile');
    b.innerHTML = avatarHTML(p) + '<span class="nm">' + esc(state.activeId ? p.name : 'Sign in') + '</span>';
    var n = p ? (p.watchlist.length + p.showWatchlist.length) : 0;
    var c = $('#menu-count'); c.textContent = n > 99 ? '99+' : n; c.classList.toggle('hidden', !n);
  }

  /* ---------- navigation ---------- */
  var VIEWS = ['home', 'quiz', 'top20', 'shuffle', 'account'];
  var currentView = 'home';
  function goto(view, opts) {
    if (VIEWS.indexOf(view) < 0) view = 'home';
    currentView = view;
    VIEWS.forEach(function (v) { $('#view-' + v).classList.toggle('active', v === view); });
    $$('[data-goto]').forEach(function (b) { if (b.classList.contains('tab')) b.classList.toggle('active', b.dataset.goto === view); });
    closeDrawer();
    if (view === 'top20') renderTop20();
    if (view === 'account') renderAccount();
    if (view === 'quiz' && quizPhase === 'setup') renderQuizSetup();
    if (!opts || !opts.keepScroll) window.scrollTo(0, 0);
  }
  document.addEventListener('click', function (ev) {
    var g = ev.target.closest('[data-goto]');
    if (g) { ev.preventDefault(); goto(g.dataset.goto); }
    var o = ev.target.closest('[data-open]');
    if (o && !ev.target.closest('[data-qrate],[data-qwatch],[data-watch]')) { openDetail(o.dataset.open); }
  });

  /* ---------- watchlist drawer (hamburger) ---------- */
  var drawerOpen = { movies: true, shows: false };
  function openDrawer() {
    renderDrawer();
    $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false');
    $('#drawer-scrim').classList.add('show'); $('#menu-btn').setAttribute('aria-expanded', 'true');
    document.body.classList.add('locked');
  }
  function closeDrawer() {
    $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true');
    $('#drawer-scrim').classList.remove('show'); $('#menu-btn').setAttribute('aria-expanded', 'false');
    if ($('#detail-overlay').classList.contains('hidden')) document.body.classList.remove('locked');
  }
  function wlRow(m) {
    return '<div class="wl-row"><button class="wl-open" data-open="' + m.id + '">' + coverHTML(m) +
      '<span><span class="wl-title">' + esc(m.title) + '</span><br><span class="wl-sub">' + esc(metaLine(yearText(m), (m.genres || [])[0])) + '</span></span></button>' +
      '<span class="wl-actions"><button class="icon-btn" data-wl-watched="' + m.id + '" title="Mark watched and remove" aria-label="Mark watched">' + ic(ICON.check, 16) + '</button>' +
      '<button class="icon-btn" data-wl-remove="' + m.id + '" title="Remove" aria-label="Remove from watchlist">' + ic(ICON.x, 16) + '</button></span></div>';
  }
  function renderDrawer() {
    var p = me(), body = $('#drawer-body'), keepTop = body.scrollTop;
    function section(key, label, icon, ids) {
      var items = ids.map(anyById).filter(Boolean);
      return '<div class="acc' + (drawerOpen[key] ? ' open' : '') + '" data-acc="' + key + '"><button class="acc-head" aria-expanded="' + !!drawerOpen[key] + '">' +
        '<span class="ico">' + icon + '</span><span><b>' + label + '</b><small>' + items.length + (items.length === 1 ? ' title' : ' titles') + '</small></span>' +
        '<svg class="chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>' +
        '<div class="acc-body"><div class="acc-inner"><div>' +
        (items.length ? items.slice().reverse().map(wlRow).join('') : '<div class="empty"><b>Nothing here yet</b>Use Watchlist on any ' + (key === 'shows' ? 'show' : 'movie') + '.</div>') +
        '</div></div></div></div>';
    }
    body.innerHTML = section('movies', 'Movie watchlist', ic(ICON.film, 18), p.watchlist) + section('shows', 'TV watchlist', ic(ICON.tv, 18), p.showWatchlist);
    body.scrollTop = keepTop;
  }
  $('#menu-btn').addEventListener('click', openDrawer);
  $('#drawer-close').addEventListener('click', closeDrawer);
  $('#drawer-scrim').addEventListener('click', closeDrawer);
  $('#drawer-body').addEventListener('click', function (ev) {
    var h = ev.target.closest('.acc-head');
    if (h) { var acc = h.parentNode, k = acc.dataset.acc; drawerOpen[k] = !acc.classList.contains('open'); acc.classList.toggle('open', drawerOpen[k]); h.setAttribute('aria-expanded', drawerOpen[k]); return; }
    var w = ev.target.closest('[data-wl-watched]'), r = ev.target.closest('[data-wl-remove]');
    if (w) { setWatched(w.dataset.wlWatched, true); removeFromWatchlist(w.dataset.wlWatched); }
    if (r) removeFromWatchlist(r.dataset.wlRemove);
    if (ev.target.closest('[data-open]')) closeDrawer();
  });
  function removeFromWatchlist(id) {
    var p = me(), f = showById[id] ? 'showWatchlist' : 'watchlist', i = p[f].indexOf(id);
    if (i >= 0) { p[f].splice(i, 1); applySignal(p, id, 'watchlist', false); }
    save(); renderDrawer(); renderHeaderProfile();
  }
  function toggleList(listName, id) {
    var p = me(), field = showById[id] ? 'show' + listName.charAt(0).toUpperCase() + listName.slice(1) : listName;
    var i = p[field].indexOf(id);
    if (i === -1) p[field].push(id); else p[field].splice(i, 1);
    applySignal(p, id, listName === 'favorites' ? 'fav' : 'watchlist', i === -1);
    logEvent(id, (i === -1 ? '' : 'un') + (listName === 'favorites' ? 'favorited' : 'watchlisted'));
    save(); renderHeaderProfile();
    return i === -1;
  }
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    if (picker) { closePicker(); return; }
    if (!$('#detail-overlay').classList.contains('hidden')) closeDetail(); else closeDrawer();
  });
  $('#header-profile').addEventListener('click', function () { if (state.activeId) goto('account'); else openWelcome('main'); });

  /* ---------- share ---------- */
  function copyAppLink() {
    function ok() { toast('Link copied'); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(APP_URL).then(ok, function () { toast(APP_URL); });
    else { var t = document.createElement('textarea'); t.value = APP_URL; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); ok(); } catch (e) { toast(APP_URL); } t.remove(); }
  }
  function shareApp() {
    if (navigator.share) navigator.share({ title: 'Movie Night', text: 'Find tonight\'s movie in a few taps.', url: APP_URL }).catch(function () {});
    else copyAppLink();
  }
  /* Taste snapshots: the identity's memory of where it has been. A new
     snapshot is stored when the normalized taste has actually moved. */
  function snapshotTaste(p, force) {
    if (!p) return;
    p.snapshots = p.snapshots || [];
    var norm = E.normalizePreference(p.taste);
    var last = p.snapshots[p.snapshots.length - 1];
    if (!force && last) {
      var dist = 0;
      E.AXES.forEach(function (a) { dist += Math.abs((norm[a] || 0) - (last.taste[a] || 0)); });
      if (dist < 2.5) return;
    }
    p.snapshots.push({ at: new Date().toISOString(), taste: norm });
    if (p.snapshots.length > 24) p.snapshots = p.snapshots.slice(-24);
  }
  function capAxis(a) { return a.charAt(0).toUpperCase() + a.slice(1); }

  /* ---------- engine memory: latent traits from what you loved ----------
     Keywords shared across the titles a user loved/watched form trait
     threads ("unreliable", "heist", "time loop", ...). Recommendations
     that share a thread get called out by name — the engine remembers
     WHY you loved things, not just which genre bucket they sat in. */
  function likedTitles(p) {
    return Object.keys(p.ratings || {}).filter(function (id) { return p.ratings[id] === 1; }).map(anyById).filter(Boolean);
  }
  function engagedTitles(p) {
    var seen = {}, out = [];
    (p.watched || []).forEach(function (id) { seen[id] = 1; });
    Object.keys(p.ratings || {}).forEach(function (id) { if (p.ratings[id] === 1) seen[id] = 1; });
    Object.keys(seen).forEach(function (id) { var m = anyById(id); if (m) out.push(m); });
    return out;
  }
  function traitProfile(p) {
    var counts = {}, films = {};
    likedTitles(p).concat((p.watched || []).map(anyById).filter(Boolean)).forEach(function (m) {
      (m.keywords || []).forEach(function (k) { counts[k] = (counts[k] || 0) + 1; if (!films[k]) films[k] = m.title; });
    });
    var top = Object.keys(counts).filter(function (k) { return counts[k] >= 2; })
      .sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, 6);
    return { counts: counts, films: films, top: top };
  }
  function traitWhy(p, movie) {
    if (!p) return '';
    var tp = traitProfile(p);
    if (!tp.top.length) return '';
    var shared = (movie.keywords || []).filter(function (k) { return tp.top.indexOf(k) >= 0; });
    if (!shared.length) return '';
    return 'It shares the \u201C' + shared[0] + '\u201D thread running through what you love \u2014 like ' + tp.films[shared[0]] + '.';
  }

  /* ---------- thumbs + watched on every card ---------- */
  function watchedBtnInner(w) { return w ? ic(ICON.check, 13) + ' Watched' : ic(ICON.plus, 13) + ' Watched'; }
  function quickSpansHTML(m) {
    var p = profile();
    var r = (p && p.ratings && p.ratings[m.id]) || 0;
    var w = !!(p && p.watched && p.watched.indexOf(m.id) >= 0);
    return '<span class="qbtn qi' + (r === 1 ? ' on' : '') + '" data-qrate="1" data-qid="' + m.id + '" role="button" title="Love it" aria-label="Love it">' + ic(ICON.up, 15) + '</span>' +
      '<span class="qbtn qi' + (r === -1 ? ' on' : '') + '" data-qrate="-1" data-qid="' + m.id + '" role="button" title="Not for me" aria-label="Not for me">' + ic(ICON.down, 15) + '</span>' +
      '<span class="qbtn qwatch' + (w ? ' on' : '') + '" data-qwatch="' + m.id + '" role="button" title="Mark as already watched">' + watchedBtnInner(w) + '</span>';
  }
  function refreshQuick(id) {
    var p = profile(); if (!p) return;
    var r = (p.ratings && p.ratings[id]) || 0;
    var w = !!(p.watched && p.watched.indexOf(id) >= 0);
    document.querySelectorAll('[data-qrate][data-qid="' + id + '"]').forEach(function (b) {
      b.classList.toggle('on', r === Number(b.dataset.qrate));
    });
    document.querySelectorAll('[data-qwatch="' + id + '"]').forEach(function (b) {
      b.classList.toggle('on', w);
      b.innerHTML = watchedBtnInner(w);
    });
  }
  /* Capture phase so a tap on thumbs/watched never also opens the card. */
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    var qr = t.closest('[data-qrate]');
    if (qr) {
      ev.stopPropagation(); ev.preventDefault();
      rateTitle(qr.dataset.qid, Number(qr.dataset.qrate));
      refreshQuick(qr.dataset.qid);
      return;
    }
    var qw = t.closest('[data-qwatch]');
    if (qw) {
      ev.stopPropagation(); ev.preventDefault();
      var p = profile();
      if (p) { setWatched(qw.dataset.qwatch, p.watched.indexOf(qw.dataset.qwatch) < 0); refreshQuick(qw.dataset.qwatch); }
    }
  }, true);


  /* ---------- cards & result cards ---------- */
  function wlLabel(on) { return on ? ic(ICON.check, 15) + 'On watchlist' : ic(ICON.plus, 15) + 'Watchlist'; }
  function listHas(listName, id) {
    var p = me(); if (!p) return false;
    var f = showById[id] ? 'show' + listName.charAt(0).toUpperCase() + listName.slice(1) : listName;
    return (p[f] || []).indexOf(id) >= 0;
  }
  function cardHTML(m) {
    return '<button class="card" data-open="' + m.id + '">' + coverHTML(m) +
      '<div class="card-body"><div class="card-title">' + esc(m.title) + '</div>' +
      '<div class="card-sub">' + esc(metaLine(yearText(m), lengthLabel(m), m.rating)) + '</div>' +
      '<div>' + (m.genres || []).slice(0, 2).map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join(' ') + '</div>' +
      '<div class="card-desc">' + esc(m.description) + '</div>' +
      '<div class="quick-row">' + quickSpansHTML(m) + '</div></div></button>';
  }
  function pairCard(m, side) {
    return '<button class="card" data-pick="' + side + '">' + coverHTML(m) +
      '<div class="card-body"><div class="card-title">' + esc(m.title) + '</div>' +
      '<div class="card-sub">' + esc(metaLine(yearText(m), (m.genres || [])[0], lengthLabel(m))) + '</div>' +
      '<div class="card-desc">' + esc(m.description) + '</div></div></button>';
  }
  function ringHTML(pct) { return '<span class="ring" style="--p:' + pct + '" aria-label="' + pct + ' percent match"><b>' + pct + '%</b></span>'; }
  function resultCard(r, extra, idx, ringPct) {
    var m = r.movie, featured = idx === 0;
    var meta = metaLine(yearText(m), lengthLabel(m), m.rating, (m.genres || []).slice(0, 2).join(', '));
    var tw = traitWhy(me(), m);
    return '<div class="result-card' + (featured ? ' featured' : '') + '">' +
      (!featured && idx != null ? '<span class="result-rank">#' + (idx + 1) + '</span>' : '') +
      '<div class="cover-wrap" data-open="' + m.id + '" style="cursor:pointer">' + coverHTML(m) + '</div>' +
      '<div class="result-main">' + (featured ? '<div class="top-badge">Your top pick</div>' : '') +
      '<div class="card-title">' + esc(m.title) + '</div><div class="card-sub">' + esc(meta) + '</div>' +
      (ringPct != null ? '<div class="match-row">' + ringHTML(ringPct) + '<div>' + (extra || '') + '</div></div>' : (extra || '')) +
      '<div class="why">' + esc(r.why || '') + (tw ? ' ' + esc(tw) : '') + '</div>' +
      '<div class="result-actions"><button class="btn btn-sm" data-open="' + m.id + '">Details</button>' +
      '<button class="btn btn-sm" data-watch="' + m.id + '">' + wlLabel(listHas('watchlist', m.id)) + '</button>' + quickSpansHTML(m) + '</div></div></div>';
  }
  document.addEventListener('click', function (ev) {
    var w = ev.target.closest('[data-watch]');
    if (w) { var on = toggleList('watchlist', w.dataset.watch); w.innerHTML = wlLabel(on); }
  });
  function vectorBars(vector) {
    return E.AXES.map(function (axis) {
      var v = (vector && vector[axis]) || 0;
      return '<div class="bar-row"><span>' + capAxis(axis) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + (v * 10) + '%"></div></div><span class="bar-val">' + v + '/10</span></div>';
    }).join('');
  }

  /* ---------- optional catalog extensions (lazy, so startup stays fast) ---------- */
  var extReady = false;
  function loadScript(src) {
    return new Promise(function (res) {
      var s = document.createElement('script'); s.src = src; s.async = true;
      s.onload = function () { res(true); }; s.onerror = function () { res(false); };
      document.head.appendChild(s);
    });
  }
  function mergeExt() {
    var added = 0, w = window;
    [[MOVIES, byId, w.MOVIES_EXT, w.MOVIES_META], [SHOW_LIST, showById, w.SHOWS_EXT, w.SHOWS_META]].forEach(function (t) {
      var list = t[0], map = t[1], ext = t[2] || [], meta = t[3] || {};
      ext.forEach(function (m) { if (!map[m.id]) { list.push(m); map[m.id] = m; added++; } });
      list.forEach(function (m) { var x = meta[m.id]; if (x) { for (var k in x) m[k] = x[k]; } });
    });
    if (added || w.MOVIES_META || w.SHOWS_META) { E.recalibrate(); hayCache = {}; }
    return added;
  }
  function loadExtensions() {
    return Promise.all(['js/movies-meta.js', 'js/shows-meta.js', 'js/movies-ext.js', 'js/shows-ext.js'].map(loadScript)).then(function () {
      var n = mergeExt(); extReady = true;
      if (n) { buildGenreChips(); renderBrowse(true); pickHero(true); }
      else renderBrowse(true);
    });
  }

  /* ---------- Home: Tonight's pick (changes every visit) ---------- */
  var RECENT_KEY = 'movienight.tonight.v1', heroId = null;
  function pickHero(forceNew) {
    var p = me(), recent = lsGet(RECENT_KEY, []);
    var pool = MOVIES.concat(SHOW_LIST);
    var m = E.pickTonight(pool, {
      recent: recent.slice(-60).concat(forceNew && heroId ? [heroId] : []),
      watched: p ? p.watched : [], rated: p ? p.ratings : {}, taste: hasTaste(p) ? p.taste : null,
      affinity: p ? affinityFor(p) : null
    });
    if (!m) return;
    heroId = m.id; recent.push(m.id); lsSet(RECENT_KEY, recent.slice(-120));
    renderHero(m);
  }
  function renderHero(m) {
    var src = posterOf(m), p = me(), on = (isShow(m) ? p.showWatchlist : p.watchlist).indexOf(m.id) >= 0;
    var score = R.badge(m);
    var fit = hasTaste(p) ? personalMatch(p, m) : null;
    $('#hero-featured').innerHTML =
      '<div class="hero"><div class="hero-bg" style="background-image:url(&quot;' + esc(src) + '&quot;)"></div><div class="hero-body">' +
      '<div class="hero-poster" data-open="' + m.id + '">' + coverHTML(m) + '</div>' +
      '<div class="hero-info"><div class="hero-label"><span class="eyebrow" style="color:var(--accent)">Tonight\'s pick</span><span class="tag">' + (isShow(m) ? 'TV series' : 'Movie') + '</span></div>' +
      '<div class="hero-title" data-open="' + m.id + '">' + esc(m.title) + '</div>' +
      '<div class="hero-meta">' + esc(metaLine(yearText(m), lengthLabel(m), (m.genres || []).slice(0, 2).join(' / '))) + '</div>' +
      '<div class="score-row">' + (score ? '<span class="score"><i style="color:var(--accent)">★</i> ' + score + '</span>' : '') + (fit != null ? '<span class="score">' + fit + '% match</span>' : '') + '</div></div>' +
      '<p class="hero-desc">' + esc(m.description) + '</p>' +
      '<div class="hero-actions"><button class="btn btn-primary" data-open="' + m.id + '">Details</button>' +
      '<button class="btn" id="hero-wl">' + wlLabel(on) + '</button>' +
      '<button class="btn" id="hero-another">Another pick</button></div></div></div>';
    $('#hero-wl').onclick = function () { var now = toggleList('watchlist', m.id); this.innerHTML = wlLabel(now); };
    $('#hero-another').onclick = function () { pickHero(true); };
  }

  /* ---------- Home: browse ---------- */
  var browse = { media: 'movies', genre: 'All', q: '', sort: 'top', shown: 60 };
  var PAGE_SIZE = 60, hayCache = {};
  function hay(m) {
    var h = hayCache[m.id];
    if (!h) h = hayCache[m.id] = (m.title + ' ' + (m.director || m.creator || '') + ' ' + (m.cast || []).join(' ') + ' ' + (m.keywords || []).join(' ') + ' ' + (m.genres || []).join(' ') + ' ' + (m.network || '')).toLowerCase();
    return h;
  }
  var SORTS = [['top', 'Top rated'], ['match', 'Best match for me'], ['new', 'Newest first'], ['old', 'Oldest first'], ['az', 'A → Z']];
  $('#sort').innerHTML = SORTS.map(function (s) { return '<option value="' + s[0] + '">' + s[1] + '</option>'; }).join('');
  function buildGenreChips() {
    var list = listFor(browse.media), counts = {};
    list.forEach(function (m) { (m.genres || []).forEach(function (g) { counts[g] = (counts[g] || 0) + 1; }); });
    var gs = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    $('#genre-chips').innerHTML = ['All'].concat(gs).map(function (g) {
      return '<button class="chip' + (g === browse.genre ? ' active' : '') + '" data-genre="' + esc(g) + '">' + esc(g) + ' <span class="n">' + (g === 'All' ? list.length : counts[g]) + '</span></button>';
    }).join('');
  }
  function browseList() {
    var list = listFor(browse.media), q = browse.q.toLowerCase().trim(), toks = q ? q.split(/\s+/) : [];
    var out = list.filter(function (m) {
      if (browse.genre !== 'All' && (m.genres || []).indexOf(browse.genre) < 0) return false;
      if (!toks.length) return true;
      var h = hay(m);
      return toks.every(function (t) { return h.indexOf(t) >= 0; });
    });
    var p = me();
    if (browse.sort === 'match' && hasTaste(p)) {
      E.calibrate(list);
      var s = {}; out.forEach(function (m) { s[m.id] = personalMatch(p, m) + E.quality(m) * 6; });
      out.sort(function (a, b) { return s[b.id] - s[a.id]; });
    } else if (browse.sort === 'new') out.sort(function (a, b) { return (b.year || b.startYear || 0) - (a.year || a.startYear || 0); });
    else if (browse.sort === 'old') out.sort(function (a, b) { return (a.year || a.startYear || 0) - (b.year || b.startYear || 0); });
    else if (browse.sort === 'az') out.sort(function (a, b) { return a.title.localeCompare(b.title); });
    else out.sort(function (a, b) { return E.quality(b) - E.quality(a); });
    return out;
  }
  function renderBrowse(reset) {
    if (reset) browse.shown = PAGE_SIZE;
    var all = browseList(), page = all.slice(0, browse.shown);
    $('#browse-count').textContent = all.length.toLocaleString() + (browse.media === 'shows' ? ' shows' : ' movies') + (browse.q || browse.genre !== 'All' ? ' match' : '');
    $('#grid').innerHTML = page.length ? page.map(cardHTML).join('') : '<div class="empty" style="grid-column:1/-1"><b>No matches</b>Try a different word or clear the genre filter.</div>';
    $('#show-more').classList.toggle('hidden', all.length <= browse.shown);
    $('#show-more').textContent = 'Show more (' + Math.min(PAGE_SIZE, all.length - browse.shown) + ' of ' + (all.length - browse.shown).toLocaleString() + ' left)';
  }
  var searchT;
  $('#search').addEventListener('input', function () { var v = this.value; clearTimeout(searchT); searchT = setTimeout(function () { browse.q = v; renderBrowse(true); }, 140); });
  $('#sort').addEventListener('change', function () { browse.sort = this.value; renderBrowse(true); });
  $('#genre-chips').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-genre]'); if (!b) return;
    browse.genre = b.dataset.genre;
    $$('#genre-chips .chip').forEach(function (x) { x.classList.toggle('active', x === b); });
    renderBrowse(true);
  });
  $('#show-more').addEventListener('click', function () { browse.shown += PAGE_SIZE; renderBrowse(false); });
  $('#media-switch').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-media]'); if (!b) return;
    browse.media = b.dataset.media; browse.genre = 'All';
    $$('#media-switch .seg').forEach(function (s) { s.classList.toggle('selected', s === b); });
    buildGenreChips(); renderBrowse(true);
  });

  /* ---------- detail sheet ---------- */
  function closeDetail() {
    $('#detail-overlay').classList.add('hidden');
    if (!$('#drawer').classList.contains('open')) document.body.classList.remove('locked');
    if (currentView === 'top20' && typeof rerenderTop20 === 'function') rerenderTop20();
  }
  function detailFit(m) {
    var p = me(); if (!state.activeId || !hasTaste(p)) return '';
    var why = E.affinityReason(affinityFor(p), m);
    return '<div class="detail-why"><strong>' + personalMatch(p, m) + '% match</strong> for your taste. ' + esc(E.whyFor(p.taste, m)) + ' ' + esc(why || traitWhy(p, m)) + '</div>';
  }
  function ratingsHTML(m, live) {
    var d = R.merge(m, live), tiles = [];
    if (d.imdb) tiles.push('<div class="rtile imdb"><b>' + d.imdb.rating.toFixed(1) + '</b><span>IMDb</span></div>');
    if (d.rt) tiles.push('<div class="rtile rt"><b>' + d.rt.pct + '%</b><span>Rotten Tomatoes</span></div>');
    if (d.mc) tiles.push('<div class="rtile mc"><b>' + d.mc.score + '</b><span>Metacritic</span></div>');
    if (d.tmdb) tiles.push('<div class="rtile tmdb"><b>' + d.tmdb.rating.toFixed(1) + '</b><span>TMDB</span></div>');
    var hint = '';
    if (!R.hasKey()) hint = '<p class="fineprint">Add a free OMDb key in Account → Ratings &amp; reviews to see Rotten Tomatoes and Metacritic here.</p>';
    else if (live && live.limited) hint = '<p class="fineprint">OMDb daily limit reached — live scores will return tomorrow.</p>';
    else if (live && live.badKey) hint = '<p class="fineprint">Your OMDb key was rejected. Check it in Account → Ratings &amp; reviews.</p>';
    return '<div class="ratings-block">' + (tiles.length ? '<div class="ratings-grid">' + tiles.join('') + '</div>' : '<p class="muted" style="margin:0">No public ratings for this title yet.</p>') +
      (d.awards ? '<p class="fineprint" style="margin:0">' + esc(d.awards) + '</p>' : '') + hint +
      '<div class="review-links">' + R.links(m).map(function (l) { return '<a class="btn btn-sm" target="_blank" rel="noopener" href="' + esc(l.url) + '">' + esc(l.label) + ' reviews</a>'; }).join('') + '</div></div>';
  }
  function detailFlags(id) {
    var p = me(), tv = !!showById[id];
    return {
      fav: (tv ? p.showFavorites : p.favorites).indexOf(id) !== -1,
      wl: (tv ? p.showWatchlist : p.watchlist).indexOf(id) !== -1,
      rating: p.ratings[id] || 0, watched: p.watched.indexOf(id) !== -1,
      t20: p.top20.mine[tv ? 'shows' : 'movies'].indexOf(id) !== -1
    };
  }
  function favHTML(on) { return ic(ICON.heart, 16, on) + (on ? 'Favorited' : 'Favorite'); }
  function t20HTML(on) { return (on ? ic(ICON.check, 15) : ic(ICON.plus, 15)) + 'Top 20'; }
  function dwlHTML(on) { return (on ? ic(ICON.check, 15) : ic(ICON.plus, 15)) + 'Watchlist'; }
  function watchedHTML(on) { return on ? ic(ICON.check, 15) + 'Already watched' : ic(ICON.plus, 15) + 'Already watched'; }
  /* Update the sheet in place. The sheet is NOT rebuilt, so the scroll position
     never moves and several buttons can be pressed in a row. */
  function refreshDetail(id) {
    if (!$('#detail-fav')) return;
    var f = detailFlags(id), m = anyById(id);
    function setBtn(sel, on, html) { var b = $(sel); if (b) { b.classList.toggle('btn-primary', on); b.innerHTML = html; } }
    setBtn('#detail-fav', f.fav, favHTML(f.fav));
    setBtn('#detail-wl', f.wl, dwlHTML(f.wl));
    setBtn('#detail-t20', f.t20, t20HTML(f.t20));
    var w = $('#detail-watched'); if (w) w.innerHTML = watchedHTML(f.watched);
    $$('#detail-sheet [data-rate]').forEach(function (b) {
      var v = Number(b.dataset.rate);
      b.className = 'rate-btn' + (f.rating === v ? ' selected ' + (v === 1 ? 'up' : 'down') : '');
    });
    var fit = $('#detail-fit'); if (fit && m) fit.innerHTML = detailFit(m);
    refreshQuick(id);
  }
  function openDetail(id) {
    var m = anyById(id); if (!m) return;
    var tv = isShow(m), p = me(), f = detailFlags(id);
    var similar = E.similarMovies(listFor(tv ? 'shows' : 'movies'), m, 6);
    var meta = tv
      ? metaLine(yearText(m), m.status, lengthLabel(m), m.network, m.creator ? 'Created by ' + m.creator : '', m.rating ? 'Rated ' + String(m.rating).replace(/-/g, '\u2011') : '')
      : metaLine(m.year, (m.director && m.director !== 'Unknown') ? 'Directed by ' + m.director : '', runtimeLabel(m.runtime), m.rating ? 'Rated ' + String(m.rating).replace(/-/g, '\u2011') : '');
    var plat = (m.pl && m.pl.length) ? '<div class="platforms"><span class="muted" style="font-size:.8rem">Streaming on</span>' + m.pl.map(function (x) { return '<span class="tag">' + esc(x) + '</span>'; }).join('') + '</div>' : '';
    $('#detail-sheet').innerHTML =
      '<div class="sheet-hero">' + (posterOf(m) ? '<div class="sheet-backdrop" style="background-image:url(&quot;' + esc(posterOf(m)) + '&quot;)"></div>' : '') + coverHTML(m) +
      '<button class="sheet-close" id="detail-close" aria-label="Close">' + ic(ICON.x, 18) + '</button></div>' +
      '<div class="sheet-body"><h2>' + esc(m.title) + '</h2><p class="meta-line">' + esc(meta) + '</p>' +
      '<div>' + (m.genres || []).map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join(' ') + '</div>' +
      '<div id="detail-fit">' + detailFit(m) + '</div><p>' + esc(m.description) + '</p>' + plat +
      '<div class="row detail-actions"><button class="btn ' + (f.fav ? 'btn-primary' : '') + '" id="detail-fav">' + favHTML(f.fav) + '</button>' +
      '<button class="btn ' + (f.wl ? 'btn-primary' : '') + '" id="detail-wl">' + dwlHTML(f.wl) + '</button>' +
      '<button class="btn ' + (f.t20 ? 'btn-primary' : '') + '" id="detail-t20">' + t20HTML(f.t20) + '</button></div>' +
      '<div class="rating-row"><span>Rate this title</span><button class="rate-btn ' + (f.rating === 1 ? 'selected up' : '') + '" data-rate="1" aria-label="Love it">' + ic(ICON.up, 18) + '</button><button class="rate-btn ' + (f.rating === -1 ? 'selected down' : '') + '" data-rate="-1" aria-label="Not for me">' + ic(ICON.down, 18) + '</button>' +
      '<button class="btn btn-ghost btn-sm" id="detail-watched">' + watchedHTML(f.watched) + '</button></div>' +
      '<h3>Ratings &amp; reviews</h3><div id="detail-ratings">' + ratingsHTML(m, null) + '</div>' +
      '<h3>Taste profile</h3>' + vectorBars(m.vector) +
      '<div class="kw-row">' + (m.keywords || []).map(function (k) { return '<span class="kw">#' + esc(k) + '</span>'; }).join('') + '</div>' +
      '<h3>More like this</h3><div class="similar-grid">' +
      similar.map(function (s) { return '<button class="card" data-open="' + s.id + '">' + coverHTML(s) + '<div class="card-body"><div class="card-title">' + esc(s.title) + '</div><div class="card-sub">' + esc(yearText(s)) + '</div></div></button>'; }).join('') +
      '</div></div>';
    $('#detail-sheet').dataset.id = id;
    $('#detail-overlay').classList.remove('hidden'); document.body.classList.add('locked');
    $('#detail-close').addEventListener('click', closeDetail);
    $('#detail-fav').addEventListener('click', function () { toggleList('favorites', id); refreshDetail(id); });
    $('#detail-wl').addEventListener('click', function () { toggleList('watchlist', id); refreshDetail(id); });
    $('#detail-t20').addEventListener('click', function () { toggleMine(id); refreshDetail(id); });
    $('#detail-watched').addEventListener('click', function () { setWatched(id, detailFlags(id).watched ? false : true); refreshDetail(id); });
    $$('#detail-sheet [data-rate]').forEach(function (b) { b.addEventListener('click', function () { rateTitle(id, Number(b.dataset.rate)); refreshDetail(id); }); });
    $('#detail-sheet').scrollTop = 0;
    if (R.hasKey()) R.fetchLive(m).then(function (live) {
      var box = $('#detail-ratings');
      if (box && live && (live.ok || live.limited || live.badKey)) box.innerHTML = ratingsHTML(m, live);
    });
  }
  $('#detail-overlay').addEventListener('click', function (ev) { if (ev.target === this) closeDetail(); });
  /* One place that turns an action into taste. Every signal is reversible,
     so undoing an action (un-favoriting, switching a thumb) takes back
     exactly what it added. */
  var TASTE_W = { fav: 0.9, like: 0.65, dislike: -0.55, watchlist: 0.3, top20: 0.5, watched: 0.25 };
  function applySignal(p, id, key, on) {
    var m = anyById(id); if (!p || !m || p.id === '__temp__') return;
    E.addMovie(p.taste, m, (on ? 1 : -1) * TASTE_W[key]);
    snapshotTaste(p);
  }
  function rateTitle(id, score) {
    var p = profile(); if (!p) return;
    p.ratings = p.ratings || {};
    var prev = p.ratings[id] || 0, key = score === 1 ? 'like' : 'dislike', off = prev === score;
    if (prev) applySignal(p, id, prev === 1 ? 'like' : 'dislike', false);
    if (off) delete p.ratings[id]; else { p.ratings[id] = score; applySignal(p, id, key, true); }
    logEvent(id, off ? 'unrated' : (score === 1 ? 'liked' : 'disliked'), off ? null : score);
    save(); checkAchievements(p); refreshQuick(id);
    toast(off ? 'Rating removed' : (score === 1 ? 'Saved. More like this will rank higher.' : 'Saved. We will steer away from this.'));
  }
  function setWatched(id, yes) {
    var p = profile(); if (!p) return;
    var i = p.watched.indexOf(id);
    if (yes && i < 0) {
      p.watched.push(id); applySignal(p, id, 'watched', true);
      logEvent(id, 'watched'); toast('Added to watched history');
    } else if (!yes && i >= 0) {
      p.watched.splice(i, 1); applySignal(p, id, 'watched', false);
      logEvent(id, 'unwatched');
    }
    checkAchievements(p); save(); refreshQuick(id);
  }

  /* ---------- entertainment identity v2 ---------- */
  var IDENTITY_DIMS = [
    { name: 'Psychological Thriller', title: 'The Psychological Strategist', axes: { brainy: 0.6, dark: 0.4 }, genres: ['Thriller', 'Psychological Thriller', 'Mystery'] },
    { name: 'Mind Games', title: 'The Mystery Hunter', axes: { brainy: 0.7, weird: 0.3 }, genres: ['Mystery', 'Sci-Fi'] },
    { name: 'Dark Atmosphere', title: 'The Dark Storyteller', axes: { dark: 0.8, scary: 0.2 }, genres: ['Crime', 'Thriller', 'Horror'] },
    { name: 'High-Stakes Action', title: 'The Adrenaline Seeker', axes: { adrenaline: 0.8, epic: 0.2 }, genres: ['Action', 'Adventure'] },
    { name: 'Supernatural Horror', title: 'The Midnight Seeker', axes: { scary: 0.8, weird: 0.2 }, genres: ['Horror'] },
    { name: 'Epic Worlds', title: 'The World Builder', axes: { epic: 0.8, brainy: 0.2 }, genres: ['Fantasy', 'Sci-Fi', 'Adventure'] },
    { name: 'Heart & Warmth', title: 'The Emotional Explorer', axes: { heartwarming: 0.7, cozy: 0.3 }, genres: ['Drama', 'Family'] },
    { name: 'Romance', title: 'The Romantic Idealist', axes: { romantic: 1 }, genres: ['Romance', 'Rom-Com'] },
    { name: 'Laughs', title: 'The Comedy Curator', axes: { funny: 1 }, genres: ['Comedy'] },
    { name: 'Cozy Comfort', title: 'The Comfort Connoisseur', axes: { cozy: 0.7, heartwarming: 0.3 }, genres: ['Family', 'Animation'] }
  ];
  function dimScore(dim, norm, engaged) {
    var wsum = 0, asum = 0;
    Object.keys(dim.axes).forEach(function (a) { wsum += dim.axes[a]; asum += dim.axes[a] * (norm[a] || 0); });
    var axisPart = wsum ? asum / wsum : 0;
    var genrePart = 0;
    if (engaged.length) {
      var hits = engaged.filter(function (m) { return m.genres.some(function (g) { return dim.genres.indexOf(g) >= 0; }); }).length;
      genrePart = hits / engaged.length;
    }
    return Math.max(3, Math.min(99, Math.round((0.62 * (axisPart / 10) + 0.38 * Math.min(1, genrePart * 2.4)) * 100)));
  }
  var _baseNorm = null;
  function catalogBaselineNorm() {
    if (_baseNorm) return _baseNorm;
    var sum = E.emptyPreference(), n = 0, i;
    for (i = 0; i < MOVIES.length; i += 7) { E.AXES.forEach(function (a) { sum[a] += MOVIES[i].vector[a] || 0; }); n++; }
    var mean = {};
    E.AXES.forEach(function (a) { mean[a] = sum[a] / Math.max(1, n); });
    _baseNorm = E.normalizePreference(mean);
    return _baseNorm;
  }
  function topKeysN(o, n) {
    return Object.keys(o).sort(function (a, b) { return o[b] - o[a]; }).slice(0, n || 3)
      .map(function (k) { return k + ' (' + o[k] + ')'; }).join(', ') || 'Not enough data yet';
  }
  function identityHTML(p) {
    var norm = E.normalizePreference(p.taste);
    var engaged = engagedTitles(p);
    var dims = IDENTITY_DIMS.map(function (d) { return { name: d.name, title: d.title, pct: dimScore(d, norm, engaged) }; })
      .sort(function (a, b) { return b.pct - a.pct; });
    var gc = {}, dc = {}, ac = {}, dec = {};
    engaged.forEach(function (m) {
      m.genres.forEach(function (g) { gc[g] = (gc[g] || 0) + 1; });
      var d = m.director || m.creator; if (d && d !== 'Unknown') dc[d] = (dc[d] || 0) + 1;
      (m.cast || []).forEach(function (a) { ac[a] = (ac[a] || 0) + 1; });
      var y = m.year || m.startYear; if (y) dec[Math.floor(y / 10) * 10 + 's'] = (dec[Math.floor(y / 10) * 10 + 's'] || 0) + 1;
    });
    var ratedIds = Object.keys(p.ratings || {});
    var likedN = ratedIds.filter(function (id) { return p.ratings[id] === 1; }).length;
    var avgStars = ratedIds.length ? (ratedIds.reduce(function (s, id) { return s + (p.ratings[id] === 1 ? 5 : 1); }, 0) / ratedIds.length) : null;
    /* unexpected loves: liked genres outside the usual lane */
    var topWatched = Object.keys(gc).sort(function (a, b) { return gc[b] - gc[a]; }).slice(0, 3);
    var declared = ((p.quizProfile && p.quizProfile.genres) || []).map(function (s) { return s.toLowerCase(); });
    var lgc = {};
    likedTitles(p).forEach(function (m) { m.genres.forEach(function (g) { lgc[g] = (lgc[g] || 0) + 1; }); });
    var unexpected = Object.keys(lgc).filter(function (g) {
      if (lgc[g] < 2 || topWatched.indexOf(g) >= 0) return false;
      return !declared.some(function (d) { return d.indexOf(g.toLowerCase()) >= 0 || g.toLowerCase().indexOf(d) >= 0; });
    }).sort(function (a, b) { return lgc[b] - lgc[a]; }).slice(0, 2);
    /* evolution from snapshots */
    var evo = '';
    var snaps = p.snapshots || [];
    if (snaps.length >= 2) {
      var first = snaps[0].taste, last = snaps[snaps.length - 1].taste;
      var diffs = E.AXES.map(function (a) { return { a: a, d: ((last[a] || 0) - (first[a] || 0)) * 10 }; }).sort(function (x, y) { return y.d - x.d; });
      var bits = [];
      if (diffs[0].d >= 4) bits.push('trending up: <b>' + capAxis(diffs[0].a) + ' +' + Math.round(diffs[0].d) + ' pts</b>');
      if (diffs[diffs.length - 1].d <= -4) bits.push('cooling off: <b>' + capAxis(diffs[diffs.length - 1].a) + ' ' + Math.round(diffs[diffs.length - 1].d) + ' pts</b>');
      evo = '<p><b>Taste evolution</b> \u00B7 ' + (bits.length ? bits.join(' \u00B7 ') : 'steady so far') +
        '<br><span class="muted">' + snaps.length + ' snapshots since ' + new Date(snaps[0].at).toLocaleDateString() + ' \u2014 your identity rewrites itself every time you rate or finish something.</span></p>';
    } else {
      evo = '<p class="muted">Taste evolution appears here after your taste has moved a few times \u2014 rate and mark titles watched and watch this space.</p>';
    }
    /* you vs other viewers: other profiles on this device + the catalog baseline */
    var cmp = [];
    var others = state.profiles.filter(function (x) { return x.id !== p.id && E.AXES.some(function (a) { return (x.taste[a] || 0) > 0; }); });
    if (others.length) {
      var mean = E.emptyPreference();
      others.forEach(function (o) { E.AXES.forEach(function (a) { mean[a] += (o.taste[a] || 0) / others.length; }); });
      var mn = E.normalizePreference(mean), best = null;
      E.AXES.forEach(function (a) { var d = (norm[a] || 0) - (mn[a] || 0); if (!best || d > best.d) best = { a: a, d: d }; });
      if (best && best.d > 0.4) cmp.push('You lean <b>' + capAxis(best.a) + '</b> harder than the other profile' + (others.length > 1 ? 's' : '') + ' on this device (+' + best.d.toFixed(1) + ' vs their average).');
      var closest = others.map(function (o) { return { name: o.name, c: E.cosine(p.taste, { vector: o.taste }) }; })
        .sort(function (a, b) { return b.c - a.c; })[0];
      if (closest && closest.c > 0) cmp.push('Closest taste on this device: <b>' + esc(closest.name) + '</b> (' + Math.round(closest.c * 100) + '% vector overlap).');
    }
    var base = catalogBaselineNorm(), bd = null;
    E.AXES.forEach(function (a) { var d = (norm[a] || 0) - (base[a] || 0); if (!bd || d > bd.d) bd = { a: a, d: d }; });
    if (bd && bd.d > 0.4) cmp.push('Against the average catalog title, your taste runs <b>' + capAxis(bd.a) + '</b>-heavy (+' + bd.d.toFixed(1) + ').');
    var qp = p.quizProfile;
    return '<div class="identity-card"><div class="identity-title">' + dims[0].title + '</div>' +
      '<p class="muted">Your entertainment identity \u00B7 evolves as you watch and rate</p>' +
      dims.slice(0, 6).map(function (x) { return '<div class="identity-meter"><span>' + x.name + '</span><b>' + x.pct + '%</b><i><em style="width:' + x.pct + '%"></em></i></div>'; }).join('') +
      '<div class="identity-stats"><div><b>' + (p.watched || []).length + '</b><span>Watched</span></div>' +
      '<div><b>' + ratedIds.length + '</b><span>Rated</span></div>' +
      '<div><b>' + (avgStars === null ? '\u2014' : '\u2605 ' + avgStars.toFixed(1) + '/5') + '</b><span>Avg. rating (from your thumbs)</span></div>' +
      '<div><b>' + (ratedIds.length ? Math.round(likedN / ratedIds.length * 100) + '%' : '\u2014') + '</b><span>Thumbs-up rate</span></div></div>' +
      '<p><b>Most watched genres:</b> ' + topKeysN(gc) + '</p>' +
      '<p><b>Favorite directors & creators:</b> ' + topKeysN(dc) + '</p>' +
      '<p><b>Favorite actors:</b> ' + (Object.keys(ac).length ? topKeysN(ac) : 'Not enough cast data yet \u2014 it fills in as you rate well-known titles.') + '</p>' +
      '<p><b>Favorite decades:</b> ' + topKeysN(dec) + '</p>' +
      (unexpected.length ? '<p><b>Unexpected loves:</b> you keep rating ' + unexpected.map(function (g) { return g + ' (' + lgc[g] + ')'; }).join(' and ') + ' highly, even though ' + (unexpected.length > 1 ? 'they sit' : 'it sits') + ' outside your usual lane.</p>' : '') +
      evo +
      (cmp.length ? '<p><b>You vs. other viewers</b><br>' + cmp.join('<br>') + '</p>' : '') +
      (qp && qp.platforms && qp.platforms.length ? '<p class="muted">You watch on: ' + qp.platforms.map(esc).join(', ') + (qp.mood ? ' \u00B7 drawn to ' + esc(qp.mood.toLowerCase()) : '') + '</p>' : '') +
      '</div>';
  }

  /* ---------- achievements v2: progress + seasonal challenges ---------- */
  function achProgress(p) {
    var watchedTitles = (p.watched || []).map(anyById).filter(Boolean);
    var gs = {}, ds = {}, dayCount = {}, maxDay = 0, k;
    watchedTitles.forEach(function (m) {
      m.genres.forEach(function (g) { gs[g] = 1; });
      if (m.year) ds[Math.floor(m.year / 10)] = 1;
    });
    (p.events || []).forEach(function (e) {
      if (e.type !== 'watched') return;
      var m = anyById(e.id);
      if (m && !isShow(m)) { k = e.at.slice(0, 10); dayCount[k] = (dayCount[k] || 0) + 1; if (dayCount[k] > maxDay) maxDay = dayCount[k]; }
    });
    return {
      cinephile: [Object.keys(p.ratings || {}).length, 100],
      horror: [watchedTitles.filter(function (m) { return m.genres.indexOf('Horror') >= 0; }).length, 25],
      nolan: [watchedTitles.filter(function (m) { return m.director && m.director.indexOf('Christopher Nolan') >= 0; }).length,
        Math.max(1, MOVIES.filter(function (m) { return m.director && m.director.indexOf('Christopher Nolan') >= 0; }).length)],
      binge: [(p.watched || []).filter(function (id) { return !!showById[id]; }).length, 5],
      explorer: [Object.keys(gs).length, 10],
      historian: [Object.keys(ds).length, 6],
      perfect: [p.foundPerfect ? 1 : 0, 1],
      double: [maxDay, 2]
    };
  }
  var ACH2_DEFS = [
    ['cinephile', 'Cinephile', 'Rate 100 titles'],
    ['horror', 'Horror Addict', 'Watch 25 horror titles'],
    ['nolan', 'Nolan Architect', 'Watch every Christopher Nolan film in the catalog'],
    ['binge', 'Binge Master', 'Mark 5 TV series as watched'],
    ['explorer', 'Genre Explorer', 'Watch titles across 10 different genres'],
    ['historian', 'Movie Historian', 'Watch movies across 6 decades'],
    ['perfect', 'Perfect Match', 'Find a 95%+ taste match in a quiz'],
    ['double', 'Double Feature', 'Watch two movies in one day']
  ];
  function checkAchievements(p) {
    p.achievements = p.achievements || [];
    var prog = achProgress(p), changed = false;
    ACH2_DEFS.forEach(function (a) {
      var pr = prog[a[0]];
      if (pr && pr[0] >= pr[1] && p.achievements.indexOf(a[0]) < 0) {
        p.achievements.push(a[0]); changed = true;
        toast('Achievement unlocked: ' + a[1]);
      }
    });
    if (changed) save();
  }
  var SEASONS = [
    { id: 'autumn', icon: '\uD83C\uDF42', name: 'Autumn Horror', months: [9, 10, 11], goal: 3, label: 'Watch 3 horror titles (Sep\u2013Nov)', test: function (m) { return m.genres.indexOf('Horror') >= 0; } },
    { id: 'winter', icon: '\uD83D\uDD6F\uFE0F', name: 'December Comfort', months: [12], goal: 3, label: 'Watch 3 cozy or heartwarming titles (Dec)', test: function (m) { return (m.vector.cozy || 0) >= 6 || (m.vector.heartwarming || 0) >= 6; } },
    { id: 'summer', icon: '\u2600\uFE0F', name: 'Summer Spectacle', months: [6, 7, 8], goal: 3, label: 'Watch 3 big-scale or high-adrenaline titles (Jun\u2013Aug)', test: function (m) { return (m.vector.epic || 0) >= 6 || (m.vector.adrenaline || 0) >= 7; } },
    { id: 'spring', icon: '\uD83C\uDF31', name: 'Spring Mysteries', months: [3, 4, 5], goal: 3, label: 'Watch 3 mystery or mind-bending titles (Mar\u2013May)', test: function (m) { return m.genres.indexOf('Mystery') >= 0 || (m.vector.brainy || 0) >= 8; } }
  ];
  var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function seasonalProgress(p, s) {
    var y = new Date().getFullYear(), n = 0;
    (p.events || []).forEach(function (e) {
      if (e.type !== 'watched') return;
      var d = new Date(e.at);
      if (d.getFullYear() !== y || s.months.indexOf(d.getMonth() + 1) < 0) return;
      var m = anyById(e.id);
      if (m && s.test(m)) n++;
    });
    return n;
  }
  function seasonalHTML(p) {
    var cm = new Date().getMonth() + 1;
    var cards = SEASONS.map(function (s) {
      var n = seasonalProgress(p, s);
      var active = s.months.indexOf(cm) >= 0;
      var done = n >= s.goal;
      var state = done ? 'Complete' : active
        ? 'Limited time \u00B7 ' + n + '/' + s.goal + ' \u00B7 ends ' + MONTH_NAMES[s.months[s.months.length - 1] - 1]
        : 'Starts ' + MONTH_NAMES[s.months[0] - 1];
      return '<div class="achievement ' + (done ? 'earned' : '') + '"><b>' + s.name + '</b><small>' + s.label + '</small><small>' + state + '</small></div>';
    }).join('');
    return '<h4 class="ach-sub">Seasonal collections &amp; limited-time challenges</h4><div class="achievement-grid">' + cards + '</div>';
  }
  function achievementsHTML(p) {
    checkAchievements(p);
    var prog = achProgress(p);
    var grid = ACH2_DEFS.map(function (a) {
      var done = p.achievements.indexOf(a[0]) >= 0;
      var pr = prog[a[0]] || [0, 1];
      var pctW = Math.min(100, Math.round(pr[0] / pr[1] * 100));
      return '<div class="achievement ' + (done ? 'earned' : '') + '"><b>' + (done ? ic(ICON.award, 15) : ic(ICON.lock, 15)) + ' ' + a[1] + '</b><small>' + a[2] + '</small>' +
        '<span class="ach-bar"><i style="width:' + pctW + '%"></i></span><small>' + Math.min(pr[0], pr[1]) + ' / ' + pr[1] + '</small></div>';
    }).join('');
    return '<div class="achievement-grid">' + grid + '</div>' + seasonalHTML(p);
  }

  /* ---------- personality quiz v2: answers seed the taste vector ---------- */
  var GENRE_BOOST = {
    'Psychological Thriller': { brainy: 1.4, dark: 0.8 }, 'Mystery': { brainy: 1.2, weird: 0.6 },
    'Sci-Fi': { brainy: 1.0, epic: 0.8 }, 'Horror': { scary: 1.4, dark: 0.6 },
    'Crime': { dark: 1.0, brainy: 0.6 }, 'Action': { adrenaline: 1.4 },
    'Drama': { heartwarming: 0.8, brainy: 0.6 }, 'Comedy': { funny: 1.4 },
    'Romance': { romantic: 1.4 }, 'Fantasy': { epic: 1.0, weird: 0.6 },
    'Documentary': { brainy: 0.8, cozy: 0.6 }, 'Animation': { funny: 0.7, heartwarming: 0.7, cozy: 0.5 }
  };
  var MOOD_BOOST = { 'Mind-bending twists': 'brainy', 'Complex characters': 'heartwarming', 'Atmosphere and tension': 'dark', 'Big emotional payoff': 'heartwarming', 'Fast-paced action': 'adrenaline', 'Immersive worlds': 'epic', 'Clever humor': 'funny', 'Real-life stories': 'brainy' };
  function applyQuizBoost(p, a) {
    var old = p.quizBoost || {};
    E.AXES.forEach(function (ax) { if (old[ax]) p.taste[ax] = Math.max(0, (p.taste[ax] || 0) - old[ax]); });
    var nb = {};
    (a.genres || []).forEach(function (g) {
      var b = GENRE_BOOST[g];
      if (b) Object.keys(b).forEach(function (ax) { nb[ax] = (nb[ax] || 0) + b[ax]; });
    });
    var ma = MOOD_BOOST[a.mood];
    if (ma) nb[ma] = (nb[ma] || 0) + 2;
    E.AXES.forEach(function (ax) { if (nb[ax]) p.taste[ax] = (p.taste[ax] || 0) + nb[ax]; });
    p.quizBoost = nb;
  }

  /* ---------- Quiz (solo + couples, movies + TV) ---------- */
  var quizPhase = 'setup', quiz = null;
  var cfg = { who: 'solo', media: 'movies', moods: [], avoid: [], audience: '', era: '', rounds: 12, partner: '', guestName: '', mine: false };
  var qsMoreOpen = false;
  var TEMP_ID = '__temp__';
  function player(id) {
    if (id === TEMP_ID) return { id: TEMP_ID, name: cfg.guestName.trim() || 'Guest', emoji: '', style: 'mono', bg: '', frame: 'none', color: '#8a8697', taste: E.emptyPreference(), watched: [], ratings: {}, history: [] };
    return profile(id);
  }
  function platformCoverage(list) { var n = 0; for (var i = 0; i < list.length; i++) if (list[i].pl && list[i].pl.length) n++; return n; }
  function segHTML(attr, opts, cur) {
    return '<div class="seg-group">' + opts.map(function (o) { return '<button class="seg' + (String(o[0]) === String(cur) ? ' selected' : '') + '" ' + attr + '="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
  }
  var AUDIENCES = [['', 'Anyone'], ['date', 'Date night'], ['family', 'Family'], ['adults', 'Adults']];
  var ERAS = [['', 'Any'], ['modern', '2000s on'], ['recent', '2015+'], ['classic', 'Before 2000']];
  var ROUNDS = [[8, 'Quick · 8'], [12, 'Balanced · 12'], [16, 'Precise · 16']];
  function pick2(arr, v) { return (arr.filter(function (x) { return String(x[0]) === String(v); })[0] || [])[1]; }
  function fineTuneSummary() {
    var b = [];
    if (cfg.avoid.length) b.push('No ' + cfg.avoid.join(', ').toLowerCase());
    if (cfg.audience) b.push(pick2(AUDIENCES, cfg.audience));
    if (cfg.era) b.push(pick2(ERAS, cfg.era));
    if (cfg.mine) b.push('My services');
    b.push(cfg.rounds + ' questions');
    return b.join(' · ');
  }
  function renderQuizSetup() {
    var p = me(), tv = cfg.media === 'shows', couple = cfg.who === 'couple';
    if (!cfg.partner || (cfg.partner !== TEMP_ID && !profile(cfg.partner))) cfg.partner = TEMP_ID;
    var others = state.profiles.filter(function (x) { return x.id !== state.activeId && !x.guest; });
    var plats = p && p.quizProfile && p.quizProfile.platforms && p.quizProfile.platforms.filter(function (x) { return /\+|Netflix|Prime|Max|Hulu|Peacock/.test(x); });
    var showPlat = plats && plats.length && platformCoverage(listFor(cfg.media)) >= 300;
    var h = '<div class="qs-head"><h1>' + (couple ? 'Watch together' : (tv ? 'Find your next series' : 'Find tonight\'s movie')) + '</h1>' +
      '<p>Pick a mood, answer a few this-or-that questions, get your match.</p></div>';
    h += '<div class="qs-row">' + segHTML('data-who', [['solo', 'Just me'], ['couple', 'Couples']], cfg.who) + segHTML('data-qmedia', [['movies', 'Movies'], ['shows', 'TV']], cfg.media) + '</div>';
    if (couple) {
      h += '<div class="qs-players"><div class="field"><span class="label">Player 1</span><div class="input qs-me">' + avatarHTML(p) + esc(p.name) + '</div></div>' +
        '<div class="field"><span class="label">Player 2</span><select id="q-partner" aria-label="Second player">' +
        others.map(function (o) { return '<option value="' + o.id + '"' + (cfg.partner === o.id ? ' selected' : '') + '>' + esc(o.name) + '</option>'; }).join('') +
        '<option value="' + TEMP_ID + '"' + (cfg.partner === TEMP_ID ? ' selected' : '') + '>Someone else, just tonight</option></select></div></div>' +
        (cfg.partner === TEMP_ID ? '<input id="q-guest" class="input" style="margin-top:8px" maxlength="20" placeholder="Their name (optional)" value="' + esc(cfg.guestName) + '">' : '');
    }
    h += '<div class="qs-label">Tonight\'s mood <span class="muted">pick up to 2, or skip</span></div><div class="mood-pills">' +
      E.MOODS.map(function (m) { return '<button class="mood-chip' + (cfg.moods.indexOf(m.id) >= 0 ? ' on' : (cfg.moods.length >= 2 ? ' off' : '')) + '" data-mood="' + m.id + '">' + esc(m.label) + '</button>'; }).join('') + '</div>';
    h += '<details class="qs-more" id="qs-more"' + (qsMoreOpen ? ' open' : '') + '><summary><span class="qs-more-t">Fine-tune</span><span class="qs-more-s">' + esc(fineTuneSummary()) + '</span>' + ic(ICON.chevDown, 18) + '</summary><div class="qs-more-body">' +
      '<div class="qs-field"><div class="label">Not tonight <span class="muted">we\'ll leave these out</span></div><div class="chips wrap">' +
      E.AVOIDABLE.map(function (g) { return '<button class="mood-chip avoid' + (cfg.avoid.indexOf(g) >= 0 ? ' on' : '') + '" data-avoid="' + esc(g) + '">' + esc(g) + '</button>'; }).join('') + '</div></div>' +
      '<div class="qs-field"><div class="label">Who is it for</div>' + segHTML('data-ctx-audience', AUDIENCES, cfg.audience) + '</div>' +
      '<div class="qs-field"><div class="label">Era</div>' + segHTML('data-ctx-era', ERAS, cfg.era) + '</div>' +
      (showPlat ? '<label class="switch qs-field"><input type="checkbox" id="q-mine"' + (cfg.mine ? ' checked' : '') + '> <span>Only on my streaming services</span></label>' : '') +
      '<div class="qs-field"><div class="label">Length of quiz</div>' + segHTML('data-qrounds', ROUNDS, cfg.rounds) + '</div></div></details>';
    h += '<button class="btn btn-primary btn-lg btn-block qs-start" id="quiz-start">Start the quiz</button>';
    $('#quiz-setup').innerHTML = h;
    var more = $('#qs-more'); if (more) more.addEventListener('toggle', function () { qsMoreOpen = more.open; });
  }
  $('#quiz-setup').addEventListener('click', function (ev) {
    var t = ev.target.closest('button'); if (!t) return;
    var d = t.dataset;
    if (d.who) cfg.who = d.who;
    else if (d.qmedia) { cfg.media = d.qmedia; }
    else if (d.mood) { var i = cfg.moods.indexOf(d.mood); if (i >= 0) cfg.moods.splice(i, 1); else if (cfg.moods.length < 2) cfg.moods.push(d.mood); }
    else if (d.avoid !== undefined) { var j = cfg.avoid.indexOf(d.avoid); if (j >= 0) cfg.avoid.splice(j, 1); else cfg.avoid.push(d.avoid); }
    else if (d.ctxAudience !== undefined) cfg.audience = d.ctxAudience;
    else if (d.ctxEra !== undefined) cfg.era = d.ctxEra;
    else if (d.qrounds) cfg.rounds = parseInt(d.qrounds, 10);
    else if (t.id === 'quiz-start') return startQuiz();
    else return;
    var y = window.scrollY; renderQuizSetup(); window.scrollTo(0, y);
  });
  $('#quiz-setup').addEventListener('change', function (ev) {
    if (ev.target.id === 'q-partner') { cfg.partner = ev.target.value; var y = window.scrollY; renderQuizSetup(); window.scrollTo(0, y); }
    if (ev.target.id === 'q-mine') cfg.mine = ev.target.checked;
  });
  $('#quiz-setup').addEventListener('input', function (ev) { if (ev.target.id === 'q-guest') cfg.guestName = ev.target.value; });

  function quizCtx() {
    var p = me(), c = { audience: cfg.audience, era: cfg.era, avoid: cfg.avoid.slice() };
    if (cfg.mine && p.quizProfile && p.quizProfile.platforms) c.platforms = p.quizProfile.platforms;
    return c;
  }
  function ctxSummary() {
    var b = [];
    cfg.moods.forEach(function (id) { var m = E.MOODS.filter(function (x) { return x.id === id; })[0]; if (m) b.push(m.label.toLowerCase()); });
    if (cfg.audience === 'date') b.push('date night'); else if (cfg.audience === 'family') b.push('family-friendly');
    if (cfg.era === 'modern') b.push('2000s on'); else if (cfg.era === 'recent') b.push('2015+');
    if (cfg.avoid.length) b.push('no ' + cfg.avoid.join('/').toLowerCase());
    return b.join(' · ');
  }
  function startQuiz() {
    var tv = cfg.media === 'shows', full = listFor(cfg.media), couple = cfg.who === 'couple';
    var ctx = quizCtx(), f = E.contextFilter(ctx), sub = full.filter(f), relaxed = false;
    if (sub.length < 120) { ctx.avoid = []; ctx.platforms = null; f = E.contextFilter(ctx); sub = full.filter(f); relaxed = true; }
    if (sub.length < 40) { f = null; sub = full; relaxed = true; }
    if (relaxed) toast('Filters were narrow — widened them a bit so there is enough to choose from.');
    E.calibrate(full);
    quiz = {
      couple: couple, tv: tv, rounds: cfg.rounds, round: 0, used: [], picks: [], picksB: [], pair: null, stack: [],
      rng: E.makeRng((Date.now() ^ (Math.random() * 1e9)) % 2147483647), list: sub, full: full, filter: f, map: tv ? showById : byId,
      moods: cfg.moods.slice(), shown: [], aId: state.activeId, bId: couple ? cfg.partner : null, ctxText: ctxSummary()
    };
    quizPhase = 'play';
    $('#quiz-setup').classList.add('hidden'); $('#quiz-results').classList.add('hidden'); $('#quiz-play').classList.remove('hidden');
    $('#quiz-undo').classList.toggle('hidden', couple);
    nextRound(true);
    window.scrollTo(0, 0);
  }
  function toPicks(arr) { return arr.map(function (x) { return { chosen: quiz.map[x.chosenId], passed: quiz.map[x.passedId], kind: x.kind }; }); }
  function prefOf(arr) { return E.quizPreference(toPicks(arr), quiz.moods); }
  function curPref() { return quiz.couple ? E.combinePreferences(prefOf(quiz.picks), prefOf(quiz.picksB)) : prefOf(quiz.picks); }
  function nextRound(first) {
    if (quiz.round >= quiz.rounds) return finishQuiz();
    var pref = curPref(), useP = quiz.moods.length || quiz.picks.length || quiz.picksB.length ? pref : null;
    var pair = E.adaptivePair(quiz.list, quiz.used, quiz.round, quiz.rounds, useP, quiz.rng, {});
    if (!pair) return finishQuiz();
    var turn = quiz.couple ? player(quiz.round % 2 === 0 ? quiz.aId : quiz.bId) : null;
    function show() { showPair(pair, turn, pref); }
    if (quiz.couple && !first) {
      $('#pass-title').textContent = turn.name + ', your turn';
      $('#pass-go').textContent = 'I\'m ' + turn.name + ', show my picks';
      $('#pass-overlay').classList.remove('hidden');
      $('#pass-go').onclick = function () { $('#pass-overlay').classList.add('hidden'); show(); };
    } else show();
  }
  function showPair(pair, turn, pref) {
    quiz.stack.push({ round: quiz.round, usedLen: quiz.used.length, pair: pair });
    quiz.pair = pair; quiz.used.push(pair[0].id, pair[1].id);
    $('#quiz-progress').style.width = (quiz.round / quiz.rounds * 100) + '%';
    $('#quiz-counter').textContent = 'Question ' + (quiz.round + 1) + ' of ' + quiz.rounds;
    $('#quiz-q').innerHTML = turn ? '<span class="turn-banner">' + avatarHTML(turn) + esc(turn.name) + '\'s pick</span><br>Which are you more in the mood for?' : 'Which are you more in the mood for?';
    var qp = $('#quiz-pair');
    qp.innerHTML = pairCard(pair[0], 'a') + pairCard(pair[1], 'b');
    qp.classList.remove('pair-enter'); void qp.offsetWidth; qp.classList.add('pair-enter');
    $('#quiz-undo').disabled = quiz.stack.length < 2;
    var ip = $('#quiz-inplay');
    if (quiz.moods.length || quiz.picks.length) {
      var n = E.candidatesInPlay(quiz.list, pref, { excludeIds: quiz.used });
      ip.innerHTML = 'Narrowing down · <b>~' + (n >= 1000 ? Math.round(n / 100) * 100 : n >= 100 ? Math.round(n / 10) * 10 : n).toLocaleString() + '</b> ' + (quiz.tv ? 'series' : 'films') + ' still in play';
      ip.classList.remove('hidden');
    } else ip.classList.add('hidden');
  }
  function answer(kind, side) {
    if (!quiz || !quiz.pair) return;
    var a = quiz.pair[0], b = quiz.pair[1], arr = quiz.couple && quiz.round % 2 === 1 ? quiz.picksB : quiz.picks;
    if (kind === 'pick') { var c = side === 'a' ? a : b, x = side === 'a' ? b : a; arr.push({ chosenId: c.id, passedId: x.id, kind: 'pick' }); if (!quiz.couple) { logEvent(c.id, 'picked'); logEvent(x.id, 'passed'); } }
    else { arr.push({ chosenId: a.id, passedId: b.id, kind: kind }); if (kind === 'neither' && !quiz.couple) { logEvent(a.id, 'skipped'); logEvent(b.id, 'skipped'); } else if (kind === 'both' && !quiz.couple) { logEvent(a.id, 'picked'); logEvent(b.id, 'picked'); } }
    quiz.round++; nextRound(false);
  }
  $('#quiz-pair').addEventListener('click', function (ev) {
    var c = ev.target.closest('[data-pick]'); if (!c || this.dataset.locked) return;
    this.dataset.locked = '1'; c.classList.add('picked');
    var self = this;
    setTimeout(function () { delete self.dataset.locked; answer('pick', c.dataset.pick); }, 190);
  });
  $('#quiz-both').addEventListener('click', function () { answer('both'); });
  $('#quiz-neither').addEventListener('click', function () { answer('neither'); });
  $('#quiz-undo').addEventListener('click', function () {
    if (!quiz || quiz.couple || quiz.stack.length < 2) return;
    quiz.stack.pop(); var s = quiz.stack.pop();       /* drop current, restore previous */
    quiz.picks.pop(); quiz.round = s.round; quiz.used.length = s.usedLen;
    showPair(s.pair, null, curPref());
  });
  function recsFor(exclude, limit) {
    var p = me(), disliked = Object.keys(p.ratings || {}).filter(function (id) { return p.ratings[id] === -1; });
    var skipped = {}; (p.events || []).forEach(function (e) { if (e.type === 'skipped' || e.type === 'passed') skipped[e.id] = (skipped[e.id] || 0) + 1; });
    var ign = Object.keys(skipped).filter(function (id) { return skipped[id] >= 2; });
    var ex = quiz.used.concat(p.watched || [], disliked, ign, exclude || []);
    if (quiz.couple) {
      var pb = player(quiz.bId), dB = Object.keys(pb.ratings || {}).filter(function (id) { return pb.ratings[id] === -1; });
      return E.couplesRecommendations(quiz.full, prefOf(quiz.picks), prefOf(quiz.picksB), {
        excludeIds: ex.concat(pb.watched || [], dB), limit: limit, filter: quiz.filter,
        affinityA: affinityFor(p), affinityB: quiz.bId === TEMP_ID ? null : affinityFor(pb)
      });
    }
    return E.buildRecommendations(quiz.full, curPref(), { excludeIds: ex, limit: limit, filter: quiz.filter, anchors: E.anchorsFromPicks(toPicks(quiz.picks)), affinity: affinityFor(p) });
  }
  function resultsHTML(recs, offset) {
    var pa = player(quiz.aId), pb = quiz.couple ? player(quiz.bId) : null;
    return recs.map(function (r, i) {
      var idx = offset + i;
      if (quiz.couple) return resultCard(r, '<div class="match">' + (idx === 0 ? 'Best for both of you' : 'Works for both') + '</div><div class="match-label">' + esc(pa.name) + ' ' + r.matchA + '% · ' + esc(pb.name) + ' ' + r.matchB + '%</div>', idx, Math.round((r.matchA + r.matchB) / 2));
      return resultCard(r, '<div class="match">' + (idx === 0 ? 'Best fit for tonight' : 'Strong fit') + '</div><div class="match-label">match for your taste</div>', idx, r.match);
    }).join('');
  }
  function finishQuiz() {
    $('#quiz-play').classList.add('hidden'); $('#pass-overlay').classList.add('hidden');
    quizPhase = 'results';
    var recs = recsFor([], 5); quiz.shown = recs.map(function (r) { return r.movie.id; });
    var titles = recs.map(function (r) { return r.movie.title; });
    var mode = quiz.couple ? 'couples' : (quiz.tv ? 'series' : 'solo');
    recordQuiz(player(quiz.aId), mode, quiz.rounds, E.preferenceFromPicks(toPicks(quiz.picks)), titles);
    if (quiz.couple && quiz.bId !== TEMP_ID) recordQuiz(player(quiz.bId), mode, quiz.rounds, E.preferenceFromPicks(toPicks(quiz.picksB)), titles);
    var pa = player(quiz.aId), pb = quiz.couple ? player(quiz.bId) : null, box = $('#quiz-results');
    box.innerHTML = '<div class="panel"><span class="eyebrow">' + (quiz.couple ? 'For the two of you' : 'Your results') + '</span><h2 style="margin:4px 0 6px">' +
      (quiz.couple ? esc(pa.name) + ' &amp; ' + esc(pb.name) + ', watch this' : (quiz.tv ? 'Your next series' : 'Tonight, you\'re watching')) + '</h2>' +
      '<p class="muted" style="margin:0">' + (quiz.couple ? 'Every pick clears a minimum fit for both of you, then the fairest overlap wins.' : 'Matched to tonight\'s mood, your ' + quiz.rounds + ' answers and what you have rated and saved') + (quiz.ctxText ? ' · ' + esc(quiz.ctxText) : '') + '.</p></div>' +
      '<div id="quiz-result-list">' + resultsHTML(recs, 0) + '</div>' +
      '<button class="btn btn-block" id="quiz-more">Show 5 more</button>' +
      '<div class="row" style="margin-top:10px"><button class="btn btn-primary" id="quiz-again" style="flex:1">Play again</button><button class="btn" id="quiz-tweak" style="flex:1">Change mood or filters</button></div>';
    box.classList.remove('hidden');
    $('#quiz-more').onclick = function () {
      var more = recsFor(quiz.shown, 5);
      if (!more.length) { this.classList.add('hidden'); return; }
      var off = quiz.shown.length; quiz.shown = quiz.shown.concat(more.map(function (r) { return r.movie.id; }));
      $('#quiz-result-list').insertAdjacentHTML('beforeend', resultsHTML(more, off));
    };
    $('#quiz-again').onclick = function () { startQuiz(); };
    $('#quiz-tweak').onclick = resetQuiz;
    window.scrollTo(0, 0);
  }
  function resetQuiz() {
    quizPhase = 'setup'; $('#quiz-results').classList.add('hidden'); $('#quiz-play').classList.add('hidden'); $('#quiz-setup').classList.remove('hidden');
    renderQuizSetup(); window.scrollTo(0, 0);
  }

  /* ---------- Shuffle ---------- */
  var shuffle = { media: 'movies', mode: 'surprise' };
  var SHUFFLE_MODES = [
    ['surprise', 'Surprise me'], ['match', 'Best match'], ['unseen', 'Not seen yet'], ['outside', 'Outside my taste'],
    ['hidden', 'Hidden gems'], ['critics', 'Critics\' picks'], ['date', 'Date night'], ['short', 'Quick watch'], ['throwback', 'Throwback'], ['horror', 'Scary night']
  ];
  var SHUFFLE_WHY = {
    surprise: 'A wildcard from across the catalog.', unseen: 'You have not watched or rated this yet.', outside: 'A deliberate step outside your usual taste.',
    match: 'A strong match for your taste profile.', hidden: 'A less obvious pick worth discovering.', horror: 'A pick for a darker kind of night.',
    date: 'A date-night mix of romance and laughs.', short: 'Quick to watch and easy to commit to.', critics: 'Highly rated by critics and audiences.', throwback: 'A trip back to an earlier era.'
  };
  function renderShuffleControls() {
    $('#shuffle-modes').innerHTML = SHUFFLE_MODES.map(function (m) { return '<button class="chip' + (m[0] === shuffle.mode ? ' active' : '') + '" data-smode="' + m[0] + '">' + m[1] + '</button>'; }).join('');
    var gs = {}; listFor(shuffle.media).forEach(function (m) { (m.genres || []).forEach(function (g) { gs[g] = (gs[g] || 0) + 1; }); });
    var cur = $('#shuffle-genre').value || 'All';
    $('#shuffle-genre').innerHTML = ['All'].concat(Object.keys(gs).sort()).map(function (g) { return '<option' + (g === cur ? ' selected' : '') + '>' + esc(g) + '</option>'; }).join('');
  }
  $('#shuffle-media').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-smedia]'); if (!b) return;
    shuffle.media = b.dataset.smedia; $('#shuffle-genre').value = 'All';
    $$('#shuffle-media .seg').forEach(function (s) { s.classList.toggle('selected', s === b); }); renderShuffleControls();
  });
  $('#shuffle-modes').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-smode]'); if (!b) return;
    shuffle.mode = b.dataset.smode; $$('#shuffle-modes .chip').forEach(function (s) { s.classList.toggle('active', s === b); });
  });
  function weightedPick(items, weight, n, rng) {
    var pool = items.slice(), out = [];
    while (out.length < n && pool.length) {
      var best = -1, bk = -1;
      for (var i = 0; i < pool.length; i++) { var k = Math.pow(Math.max(1e-9, rng()), 1 / Math.max(1e-6, weight(pool[i]))); if (k > bk) { bk = k; best = i; } }
      out.push(pool.splice(best, 1)[0]);
    }
    return out;
  }
  function doShuffle() {
    var p = me(), list = listFor(shuffle.media), g = $('#shuffle-genre').value, mode = shuffle.mode, taste = hasTaste(p);
    var watched = p.watched, rated = p.ratings;
    E.calibrate(list);
    var pool = list.filter(function (m) {
      var y = m.year || m.startYear || 0;
      if (g && g !== 'All' && (m.genres || []).indexOf(g) < 0) return false;
      if (rated[m.id] === -1) return false;
      if (mode === 'unseen' && (watched.indexOf(m.id) >= 0 || rated[m.id])) return false;
      if (mode === 'horror' && (m.genres || []).indexOf('Horror') < 0) return false;
      if (mode === 'short' && !isShow(m) && (!m.runtime || m.runtime >= 100)) return false;
      if (mode === 'short' && isShow(m) && m.seasons > 3) return false;
      if (mode === 'date' && !(m.genres || []).some(function (x) { return ['Romance', 'Rom-Com', 'Comedy'].indexOf(x) >= 0; })) return false;
      if (mode === 'critics' && E.quality(m) < 0.8) return false;
      if (mode === 'throwback' && y > 2008) return false;
      if (mode === 'hidden' && ((m.ap || 0) > 80 || E.quality(m) < 0.66)) return false;
      return true;
    });
    if (!pool.length) { toast('Nothing fits those filters — try another mode or genre.'); return; }
    var rng = Math.random, mt = {};
    if (taste) pool.forEach(function (m) { mt[m.id] = personalMatch(p, m) / 100; });
    var picks = weightedPick(pool, function (m) {
      var q = Math.pow(Math.max(0.05, E.quality(m)), 2);
      if (mode === 'match' && taste) return q * Math.pow(mt[m.id], 6) * 50;
      if (mode === 'outside' && taste) return q * Math.pow(1 - mt[m.id] + 0.05, 3);
      return q;
    }, 5, rng);
    var strip = picks.concat(pool.slice(0, 3)).slice(0, 3).map(function (m) { return '<div class="spin-cover">' + coverHTML(m) + '</div>'; }).join('');
    $('#shuffle-results').innerHTML = '<div class="roulette-reveal"><div class="spin-slot"><div class="spin-strip">' + strip + '</div></div></div>';
    setTimeout(function () {
      $('#shuffle-results').innerHTML = '<div class="roulette-reveal"><span class="eyebrow">Your roulette reveal</span><p class="roulette-sub">' + esc(SHUFFLE_WHY[mode]) + '</p>' +
        picks.map(function (m, i) {
          var r = { movie: m, why: i === 0 && taste ? E.whyFor(p.taste, m) : '' };
          return resultCard(r, '', i, taste ? Math.round(mt[m.id] * 100) : null);
        }).join('') + '<button class="btn btn-block" id="roulette-again">Spin again</button></div>';
      $('#roulette-again').onclick = doShuffle;
    }, 650);
  }
  $('#shuffle-go').addEventListener('click', doShuffle);

  /* ---------- Top 20 (personalised, canon, or hand-built) ---------- */
  var t20media = lsGet(UI_KEY, {}).t20media || 'movies';
  var t20FiltersOpen = false;
  var T20_GENRES = ['Action', 'Comedy', 'Drama', 'Thriller', 'Sci-Fi', 'Horror', 'Crime', 'Romance', 'Fantasy', 'Animation', 'Mystery', 'Documentary'];
  var T20_MAX = 20;
  function top20Items(p, media) {
    var t = p.top20, list = listFor(media), qp = p.quizProfile || {};
    var canon = t.mode === 'canon';
    E.calibrate(list);
    var byIdMap = media === 'shows' ? showById : byId;
    return E.personalTop(list, {
      taste: canon || !hasTaste(p) ? null : p.taste,
      genres: canon ? [] : (qp.genres || []), includeGenres: t.genres, era: t.era,
      avoid: canon ? [] : (qp.avoid || []), excludeIds: t.hidden, rated: p.ratings, watched: p.watched,
      hideWatched: t.hideWatched, byId: byIdMap, limit: 20, affinity: canon ? null : affinityFor(p)
    });
  }
  function mineItems(p, media) {
    var map = media === 'shows' ? showById : byId, withMatch = hasTaste(p);
    return p.top20.mine[media].map(function (id) { return map[id]; }).filter(Boolean).map(function (m) {
      return { movie: m, match: withMatch ? personalMatch(p, m) : null, why: '' };
    });
  }

  /* --- editing the hand-built list. Every change teaches the engine. --- */
  function addMine(p, id, media, auto) {
    var t = p.top20, list = t.mine[media];
    if (list.indexOf(id) >= 0 || list.length >= T20_MAX) return false;
    list.push(id);
    if (auto) t.auto.push(id); else applySignal(p, id, 'top20', true);
    logEvent(id, 'top20-add');
    save();
    return true;
  }
  function dropSignal(p, id) {
    var t = p.top20, ai = t.auto.indexOf(id);
    if (ai >= 0) t.auto.splice(ai, 1); else applySignal(p, id, 'top20', false);
  }
  function removeMine(p, id, media) {
    var list = p.top20.mine[media], i = list.indexOf(id);
    if (i < 0) return;
    list.splice(i, 1); dropSignal(p, id); save();
  }
  function replaceMine(p, index, newId, media) {
    var list = p.top20.mine[media], old = list[index];
    if (old == null || list.indexOf(newId) >= 0) return false;
    list[index] = newId; dropSignal(p, old); applySignal(p, newId, 'top20', true);
    logEvent(newId, 'top20-add'); save();
    return true;
  }
  function moveMine(p, index, dir, media) {
    var list = p.top20.mine[media], j = index + dir;
    if (j < 0 || j >= list.length) return;
    var t = list[index]; list[index] = list[j]; list[j] = t;
    /* placing a title by hand confirms it: auto-filled titles start counting as taste once moved */
    [list[index], list[j]].forEach(function (id) { var ai = p.top20.auto.indexOf(id); if (ai >= 0) { p.top20.auto.splice(ai, 1); applySignal(p, id, 'top20', true); } });
    save();
  }
  function toggleMine(id) {
    var p = me(), media = showById[id] ? 'shows' : 'movies', list = p.top20.mine[media];
    if (list.indexOf(id) >= 0) { removeMine(p, id, media); toast('Removed from your Top 20'); return false; }
    if (list.length >= T20_MAX) { openPicker({ media: media, mode: 'slot', forId: id }); return false; }
    addMine(p, id, media);
    toast('Added to your Top 20 (' + list.length + ' of ' + T20_MAX + ')');
    return true;
  }
  function fillMine() {
    var p = me(), media = t20media, list = p.top20.mine[media], room = T20_MAX - list.length;
    if (room <= 0) return;
    var qp = p.quizProfile || {}, lst = listFor(media);
    E.calibrate(lst);
    var recs = E.personalTop(lst, {
      taste: hasTaste(p) ? p.taste : null, genres: qp.genres || [], avoid: qp.avoid || [],
      excludeIds: p.top20.hidden.concat(list), rated: p.ratings, watched: p.watched,
      byId: media === 'shows' ? showById : byId, limit: room, affinity: affinityFor(p)
    });
    recs.forEach(function (r) { addMine(p, r.movie.id, media, true); });
    toast('Added ' + recs.length + ' suggestions. Swap or reorder anything.');
  }

  function t20End(inner) { return '<span class="lr-end">' + inner + '</span>'; }
  function t20Row(r, i, endHTML, note) {
    var m = r.movie;
    return '<div class="list-row" data-open="' + m.id + '" role="button" tabindex="0"><span class="rank">' + (i + 1) + '</span><span class="mini-cover">' + coverHTML(m) + '</span>' +
      '<span class="lr-main"><div class="lr-title">' + esc(m.title) + '</div><div class="lr-sub">' + esc(metaLine(yearText(m), (m.genres || []).slice(0, 2).join(', '), R.badge(m) ? 'Rated ' + R.badge(m) : '')) + '</div>' +
      (note ? '<div class="lr-note">' + esc(note) + '</div>' : '') + '</span>' + endHTML + '</div>';
  }
  function renderTop20() {
    var p = me(), t = p.top20, root = $('#top20-root'), mode = t.mode, canon = mode === 'canon', mineMode = mode === 'mine';
    var needQuiz = !canon && !mineMode && !p.quizProfile && !hasTaste(p);
    var mineIds = t.mine[t20media], nFilters = t.genres.length + (t.era ? 1 : 0) + (t.hideWatched ? 1 : 0);
    var sub = canon ? 'Critically loved' : mineMode ? mineIds.length + ' of ' + T20_MAX + ' chosen' : 'Built for ' + esc(p.name);
    var h = '<div class="t20-top"><div class="t20-title"><h1>Top 20</h1><span class="t20-sub">' + sub + '</span></div>' +
      (mineMode
        ? '<button class="btn btn-primary btn-sm" id="t20-addopen"' + (mineIds.length >= T20_MAX ? ' disabled' : '') + '>' + ic(ICON.plus, 15) + 'Add title</button>'
        : '<button class="btn btn-sm t20-filter' + (t20FiltersOpen ? ' open' : '') + '" id="t20-filters" aria-expanded="' + t20FiltersOpen + '">' + ic(ICON.filter, 15) + 'Filters' + (nFilters ? '<span class="count-dot">' + nFilters + '</span>' : '') + '</button>') + '</div>';
    h += '<div class="t20-bar"><div class="seg-group t20-modes">' + [['foryou', 'For you'], ['canon', 'Canon'], ['mine', 'My list']].map(function (o) { return '<button class="seg' + (mode === o[0] ? ' selected' : '') + '" data-t20mode="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' +
      '<div class="seg-group t20-media">' + [['movies', 'Movies'], ['shows', 'TV']].map(function (o) { return '<button class="seg' + (t20media === o[0] ? ' selected' : '') + '" data-t20media="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
    if (!mineMode && t20FiltersOpen) {
      h += '<div class="t20-filters-panel"><div class="chips wrap" role="group" aria-label="Limit to genres">' + T20_GENRES.map(function (g) { return '<button class="chip' + (t.genres.indexOf(g) >= 0 ? ' active' : '') + '" data-t20genre="' + g + '">' + g + '</button>'; }).join('') + '</div>' +
        '<div class="t20-filter-row"><div class="seg-group">' + [['', 'Any'], ['modern', '2000+'], ['recent', '2015+'], ['classic', 'Pre‑2000']].map(function (o) { return '<button class="seg' + (t.era === o[0] ? ' selected' : '') + '" data-t20era="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' +
        '<label class="switch"><input type="checkbox" id="t20-hide"' + (t.hideWatched ? ' checked' : '') + '> <span>Hide watched</span></label></div></div>';
    }
    if (needQuiz) h += '<p class="t20-note">Take the one-minute personality quiz to tune this list. <button class="link-btn" id="t20-take">Take the quiz</button></p>';

    if (mineMode) {
      var items = mineItems(p, t20media);
      if (!items.length) {
        h += '<div class="empty t20-empty"><b>Build your own Top 20</b>Add titles one at a time, or start from our suggestions and swap anything out.' +
          '<div class="row" style="justify-content:center;margin-top:14px"><button class="btn btn-primary" id="t20-addopen2">Add a title</button><button class="btn" id="t20-fill">Start from suggestions</button></div></div>';
      } else {
        h += '<div class="list-stack">' + items.map(function (r, i) {
          var m = r.movie, last = i === items.length - 1;
          return t20Row(r, i, t20End((r.match != null ? '<span class="match-pill sm">' + r.match + '%</span>' : '') +
            '<span class="lr-tools">' +
            '<button class="x-btn" data-t20up="' + i + '" title="Move up" aria-label="Move up"' + (i === 0 ? ' disabled' : '') + '>' + ic(ICON.chevUp, 15) + '</button>' +
            '<button class="x-btn" data-t20down="' + i + '" title="Move down" aria-label="Move down"' + (last ? ' disabled' : '') + '>' + ic(ICON.chevDown, 15) + '</button>' +
            '<button class="x-btn" data-t20swap="' + i + '" title="Replace" aria-label="Replace this title">' + ic(ICON.swap, 15) + '</button>' +
            '<button class="x-btn" data-t20rm="' + m.id + '" title="Remove" aria-label="Remove from my Top 20">' + ic(ICON.x, 15) + '</button></span>'), '');
        }).join('') + '</div>';
        if (mineIds.length < T20_MAX) {
          h += '<div class="t20-more"><button class="btn btn-block" id="t20-addopen2">' + ic(ICON.plus, 16) + 'Add a title <span class="muted">· ' + (T20_MAX - mineIds.length) + ' open</span></button>' +
            '<button class="btn btn-ghost btn-block" id="t20-fill">Fill the rest with suggestions</button></div>';
        }
      }
    } else {
      var auto = top20Items(p, t20media), inMine = t.mine[t20media];
      h += auto.length ? '<div class="list-stack">' + auto.map(function (r, i) {
        var m = r.movie, on = inMine.indexOf(m.id) >= 0;
        return t20Row(r, i, t20End((canon || needQuiz ? '' : '<span class="match-pill sm">' + r.match + '%</span>') +
          '<span class="lr-tools one">' +
          '<button class="x-btn' + (on ? ' on' : '') + '" data-t20add="' + m.id + '" title="' + (on ? 'In your list' : 'Add to my list') + '" aria-label="Add to my Top 20">' + ic(on ? ICON.check : ICON.plus, 15) + '</button>' +
          '<button class="x-btn" data-t20hide="' + m.id + '" title="Not interested" aria-label="Remove from this list">' + ic(ICON.x, 15) + '</button></span>'), canon ? m.description : (r.why === 'A consensus favourite.' ? '' : r.why));
      }).join('') + '</div>' : '<div class="empty"><b>Nothing matches those filters</b>Loosen the genre or era filters.</div>';
      if (t.hidden.length) h += '<p class="fineprint" style="text-align:center;margin-top:14px">' + t.hidden.length + ' hidden · <button class="link-btn" id="t20-restore">Restore all</button></p>';
    }
    root.innerHTML = h;
    var tk = $('#t20-take'); if (tk) tk.onclick = function () { openPersonalityQuiz(); };
  }
  function rerenderTop20() { var y = window.scrollY; renderTop20(); window.scrollTo(0, y); }
  $('#top20-root').addEventListener('click', function (ev) {
    var p = me(), t = p.top20, b, media = t20media;
    function stop() { ev.stopPropagation(); ev.preventDefault(); }
    if ((b = ev.target.closest('[data-t20hide]'))) { stop(); t.hidden.push(b.dataset.t20hide); save(); rerenderTop20(); toast('Removed. The next best title moved up.'); return; }
    if ((b = ev.target.closest('[data-t20add]'))) { stop(); toggleMine(b.dataset.t20add); rerenderTop20(); return; }
    if ((b = ev.target.closest('[data-t20rm]'))) { stop(); removeMine(p, b.dataset.t20rm, media); rerenderTop20(); toast('Removed from your Top 20'); return; }
    if ((b = ev.target.closest('[data-t20up]'))) { stop(); moveMine(p, Number(b.dataset.t20up), -1, media); rerenderTop20(); return; }
    if ((b = ev.target.closest('[data-t20down]'))) { stop(); moveMine(p, Number(b.dataset.t20down), 1, media); rerenderTop20(); return; }
    if ((b = ev.target.closest('[data-t20swap]'))) { stop(); openPicker({ media: media, mode: 'replace', index: Number(b.dataset.t20swap) }); return; }
    if (ev.target.closest('#t20-addopen, #t20-addopen2')) { openPicker({ media: media, mode: 'add' }); return; }
    if (ev.target.closest('#t20-fill')) { fillMine(); rerenderTop20(); return; }
    if (ev.target.closest('#t20-filters')) { t20FiltersOpen = !t20FiltersOpen; rerenderTop20(); return; }
    if ((b = ev.target.closest('[data-t20mode]'))) t.mode = b.dataset.t20mode;
    else if ((b = ev.target.closest('[data-t20media]'))) { t20media = b.dataset.t20media; var ui = lsGet(UI_KEY, {}); ui.t20media = t20media; lsSet(UI_KEY, ui); }
    else if ((b = ev.target.closest('[data-t20genre]'))) { var i = t.genres.indexOf(b.dataset.t20genre); if (i >= 0) t.genres.splice(i, 1); else t.genres.push(b.dataset.t20genre); }
    else if ((b = ev.target.closest('[data-t20era]'))) t.era = b.dataset.t20era;
    else if (ev.target.closest('#t20-restore')) t.hidden = [];
    else return;
    save(); rerenderTop20();
  });
  $('#top20-root').addEventListener('change', function (ev) { if (ev.target.id === 't20-hide') { me().top20.hideWatched = ev.target.checked; save(); rerenderTop20(); } });
  $('#top20-root').addEventListener('keydown', function (ev) { if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.classList.contains('list-row')) { ev.preventDefault(); openDetail(ev.target.dataset.open); } });

  /* --- title picker: add to / replace in the hand-built list --- */
  var picker = null;
  function closePicker() {
    if (!picker) return;
    picker.ov.remove(); picker = null;
    if ($('#detail-overlay').classList.contains('hidden') && !$('#drawer').classList.contains('open')) document.body.classList.remove('locked');
    if (currentView === 'top20') rerenderTop20();
    var df = $('#detail-fav'); if (df && !$('#detail-overlay').classList.contains('hidden')) { var dt = $('#detail-t20'); if (dt) { var did = ($('#detail-sheet').dataset.id); if (did) refreshDetail(did); } }
  }
  function pickerRows(items, label, btn) {
    return (label ? '<div class="picker-label">' + label + '</div>' : '') + items.map(function (it) {
      var m = it.movie || it;
      return '<div class="pick-row"><span class="mini-cover">' + coverHTML(m) + '</span><span class="pick-main"><span class="pick-title">' + esc(m.title) + '</span><span class="pick-sub">' + esc(metaLine(yearText(m), (m.genres || []).slice(0, 2).join(', '))) + '</span></span>' + btn(m) + '</div>';
    }).join('');
  }
  function pickerSearch(media, q) {
    var list = listFor(media), toks = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var hits = list.filter(function (m) { var h = hay(m); return toks.every(function (t) { return h.indexOf(t) >= 0; }); });
    var ql = q.toLowerCase().trim();
    hits.sort(function (a, b) {
      var sa = a.title.toLowerCase().indexOf(ql) === 0 ? 1 : 0, sb = b.title.toLowerCase().indexOf(ql) === 0 ? 1 : 0;
      return (sb - sa) || (E.quality(b) - E.quality(a));
    });
    return hits.slice(0, 30);
  }
  function drawPickerResults() {
    if (!picker) return;
    var p = me(), o = picker.opts, media = o.media, list = p.top20.mine[media], map = media === 'shows' ? showById : byId, box = $('#t20-results'), cnt = $('#t20-count');
    if (cnt) cnt.textContent = list.length + ' of ' + T20_MAX + ' in your list';
    if (o.mode === 'slot') {
      var nm = anyById(o.forId);
      var rows = list.map(function (id, i) { return { movie: map[id], i: i }; }).filter(function (r) { return r.movie; });
      box.innerHTML = '<div class="picker-note">Your list is full. Choose a title to replace with <b>' + esc(nm ? nm.title : 'this title') + '</b>.</div>' +
        rows.map(function (r) {
          var m = r.movie;
          return '<div class="pick-row"><span class="rank sm">' + (r.i + 1) + '</span><span class="mini-cover">' + coverHTML(m) + '</span><span class="pick-main"><span class="pick-title">' + esc(m.title) + '</span><span class="pick-sub">' + esc(metaLine(yearText(m), (m.genres || []).slice(0, 2).join(', '))) + '</span></span><button class="btn btn-sm" data-pslot="' + r.i + '">Replace</button></div>';
        }).join('');
      return;
    }
    var q = ($('#t20-q') || {}).value || '', items, label = '';
    if (q.trim()) { items = pickerSearch(media, q); if (!items.length) { box.innerHTML = '<div class="empty"><b>No matches</b>Try a different title, actor or keyword.</div>'; return; } }
    else {
      var qp = p.quizProfile || {}, lst = listFor(media);
      E.calibrate(lst);
      items = E.personalTop(lst, {
        taste: hasTaste(p) ? p.taste : null, genres: qp.genres || [], avoid: qp.avoid || [], excludeIds: p.top20.hidden.concat(list), rated: p.ratings,
        watched: p.watched, byId: map, limit: 20, affinity: affinityFor(p)
      }).map(function (r) { return r.movie; });
      label = 'Suggested for you';
    }
    box.innerHTML = pickerRows(items, label, function (m) {
      var inList = list.indexOf(m.id) >= 0;
      if (inList) return '<span class="pick-done">' + ic(ICON.check, 15) + 'In list</span>';
      if (o.mode === 'replace') return '<button class="btn btn-sm btn-primary" data-ppick="' + m.id + '">Replace</button>';
      return '<button class="btn btn-sm btn-primary" data-ppick="' + m.id + '">' + (list.length >= T20_MAX ? 'Replace…' : 'Add') + '</button>';
    });
  }
  function openPicker(o) {
    closePicker();
    var p = me(), media = o.media, list = p.top20.mine[media], tv = media === 'shows';
    var title = o.mode === 'replace' ? 'Replace a title' : o.mode === 'slot' ? 'Replace a title' : 'Add to your Top 20';
    var ov = el('<div class="overlay center t20-picker" role="dialog" aria-modal="true" aria-label="' + title + '"><div class="welcome-card picker-card"></div></div>');
    document.body.appendChild(ov); document.body.classList.add('locked');
    picker = { ov: ov, opts: o };
    var box = ov.firstElementChild;
    var oldT = o.mode === 'replace' && list[o.index] ? (anyById(list[o.index]) || {}).title : '';
    box.innerHTML = '<div class="picker-head"><div><div class="eyebrow">' + (tv ? 'TV shows' : 'Movies') + '</div><h2>' + title + '</h2>' + (oldT ? '<p class="muted picker-sub">Swapping out ' + esc(oldT) + '</p>' : '') + '</div>' +
      '<button class="icon-btn" data-pclose aria-label="Close">' + ic(ICON.x, 18) + '</button></div>' +
      (o.mode === 'slot' ? '' : '<label class="search picker-search">' + ic(ICON.search, 18) + '<input id="t20-q" type="search" placeholder="' + (tv ? 'Search TV shows' : 'Search movies') + '" autocomplete="off" aria-label="Search titles"></label>') +
      '<div id="t20-results" class="picker-results"></div>' +
      '<div class="picker-foot"><span id="t20-count" class="muted"></span><button class="btn btn-primary btn-sm" data-pclose>Done</button></div>';
    drawPickerResults();
    var qi = $('#t20-q'), st;
    if (qi) { qi.addEventListener('input', function () { clearTimeout(st); st = setTimeout(drawPickerResults, 120); }); setTimeout(function () { try { qi.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 60); }
    ov.addEventListener('click', function (ev) {
      if (ev.target === ov || ev.target.closest('[data-pclose]')) { closePicker(); return; }
      var pk = ev.target.closest('[data-ppick]'), sl = ev.target.closest('[data-pslot]'), pp = me(), op = picker && picker.opts;
      if (pk && op) {
        var id = pk.dataset.ppick, lst = pp.top20.mine[op.media];
        if (op.mode === 'replace') { if (replaceMine(pp, op.index, id, op.media)) { toast('Replaced'); closePicker(); } return; }
        if (lst.length >= T20_MAX) { picker.opts = { media: op.media, mode: 'slot', forId: id }; ov.querySelector('.picker-search') && ov.querySelector('.picker-search').remove(); drawPickerResults(); return; }
        addMine(pp, id, op.media); drawPickerResults();
      } else if (sl && op) {
        if (replaceMine(pp, Number(sl.dataset.pslot), op.forId, op.media)) { toast('Replaced'); closePicker(); }
      }
    });
  }

  /* ---------- Personality quiz (4 steps, seeds taste + Top 20) ---------- */
  function openPersonalityQuiz() {
    var p = me(); if (!state.activeId) { openWelcome('main'); return; }
    var qp = p.quizProfile || {};
    var a = { platforms: (qp.platforms || []).slice(), genres: (qp.genres || []).slice(), mood: qp.mood || '', avoid: (qp.avoid || []).slice() }, step = 0;
    var qs = [
      { title: 'What do you watch on?', sub: 'Pick any that apply.', key: 'platforms', multi: true, opts: ['Netflix', 'Prime Video', 'Max', 'Disney+', 'Hulu', 'Apple TV+', 'Peacock', 'Paramount+', 'Theaters / physical media'] },
      { title: 'What\'s your vibe?', sub: 'The genres that pull you in — pick any.', key: 'genres', multi: true, opts: ['Psychological Thriller', 'Mystery', 'Sci-Fi', 'Horror', 'Crime', 'Action', 'Drama', 'Comedy', 'Romance', 'Fantasy', 'Documentary', 'Animation'] },
      { title: 'What makes a story unforgettable?', sub: 'Pick one.', key: 'mood', multi: false, opts: ['Mind-bending twists', 'Complex characters', 'Atmosphere and tension', 'Big emotional payoff', 'Fast-paced action', 'Immersive worlds', 'Clever humor', 'Real-life stories'] },
      { title: 'Anything you usually skip?', sub: 'We\'ll keep these out of your Top 20 and picks. Optional.', key: 'avoid', multi: true, opts: E.AVOIDABLE.slice() }
    ];
    var ov = el('<div class="overlay center" role="dialog" aria-modal="true"><div class="welcome-card personality-modal"></div></div>');
    document.body.appendChild(ov); document.body.classList.add('locked');
    var box = ov.firstElementChild;
    function close() { ov.remove(); if ($('#detail-overlay').classList.contains('hidden')) document.body.classList.remove('locked'); }
    function draw() {
      var q = qs[step];
      box.innerHTML = '<div class="step-dots">' + qs.map(function (_, i) { return '<i class="' + (i <= step ? 'on' : '') + '"></i>'; }).join('') + '</div>' +
        '<span class="eyebrow">Entertainment DNA · step ' + (step + 1) + ' of ' + qs.length + '</span><h2>' + esc(q.title) + '</h2><p class="muted">' + esc(q.sub) + '</p>' +
        '<div class="quiz-choice-grid">' + q.opts.map(function (v) { var on = q.multi ? a[q.key].indexOf(v) >= 0 : a[q.key] === v; return '<button class="quiz-choice' + (on ? ' selected' : '') + '" data-v="' + esc(v) + '">' + esc(v) + '</button>'; }).join('') + '</div>' +
        '<div class="row" style="margin-top:16px"><button class="btn" id="qback"' + (!step ? ' disabled' : '') + '>Back</button><button class="btn btn-primary" id="qnext" style="flex:1">' + (step === qs.length - 1 ? 'Build my Top 20' : 'Continue') + '</button></div>' +
        '<button class="btn btn-ghost btn-block" id="qclose" style="margin-top:6px">Maybe later</button>';
      $$('.personality-modal [data-v]').forEach(function (b) {
        b.onclick = function () {
          var v = b.dataset.v;
          if (q.multi) { var i = a[q.key].indexOf(v); if (i < 0) a[q.key].push(v); else a[q.key].splice(i, 1); } else a[q.key] = v;
          draw();
        };
      });
      $('#qback').onclick = function () { if (step) { step--; draw(); } };
      $('#qclose').onclick = close;
      $('#qnext').onclick = function () {
        if (step < qs.length - 1) { step++; draw(); return; }
        p.quizProfile = a; applyQuizBoost(p, a); snapshotTaste(p, true);
        p.top20.mode = 'foryou'; p.top20.hidden = [];
        logEvent('personality-quiz', 'quiz-completed'); save(); close();
        toast('Your Top 20 is ready'); goto('top20');
      };
    }
    draw();
  }
  function maybeStartPersonalityQuiz() { var p = me(); if (state.activeId && p && !p.guest && !p.quizProfile) setTimeout(openPersonalityQuiz, 900); }

  /* ---------- Account ---------- */
  var accOpenFold = false;
  var accOpen = { look: false, theme: false, dna: false, ratings: false, share: false };
  var avSet = 0;
  function miniGrid(ids, emptyMsg) {
    var items = ids.map(anyById).filter(Boolean);
    return items.length ? '<div class="mini-grid">' + items.slice(-12).reverse().map(function (m) { return '<button class="card" data-open="' + m.id + '">' + coverHTML(m) + '<div class="card-body"><div class="card-title">' + esc(m.title) + '</div></div></button>'; }).join('') + '</div>' : '<p class="muted">' + emptyMsg + '</p>';
  }
  function pzFold(key, title, meta, lead, body) {
    return '<details class="pz-fold" data-pz="' + key + '"' + (accOpen[key] ? ' open' : '') + '><summary>' + (lead || '') + '<span class="pz-t">' + title + '</span><span class="pz-m">' + meta + '</span>' + ic(ICON.chevDown, 18) + '</summary><div class="pz-body">' + body + '</div></details>';
  }
  function rerenderAccount() { var y = window.scrollY; renderAccount(); window.scrollTo(0, y); }
  function renderAccount() {
    var p = me(), root = $('#account-root'), signed = !!state.activeId;
    if (!signed) {
      root.innerHTML = '<div class="page-head"><span class="eyebrow">Account</span><h1>Sign in to personalise</h1><p>Create a free account on this device to save watchlists, build your Top 20 and tune the app\'s look.</p></div>' +
        '<div class="panel"><button class="btn btn-primary btn-lg btn-block" id="acc-signin">Log in or create account</button><div class="divider"></div><div class="panel-title">Share Movie Night</div>' + shareHTML() + '</div>';
      $('#acc-signin').onclick = function () { openWelcome('main'); }; bindShare(); return;
    }
    var th = themeSettings(p), rt = resolveTheme(th), qp = p.quizProfile;
    var rated = Object.keys(p.ratings).length;
    var curTheme = THEMES.filter(function (t) { return t.id === rt.id; })[0];
    var h = '<div class="panel acc-head-card"><div class="profile-head">' + avatarHTML(p, 'lg') + '<div style="flex:1;min-width:140px"><h2 style="margin:0">' + esc(p.name) + '</h2><p class="muted" style="margin:2px 0 0">' + esc(p.guest ? 'Guest · data stays on this device' : (p.email || '')) + '</p></div></div>' +
      '<div class="stat-row"><div class="stat"><b>' + p.watched.length + '</b><span>Watched</span></div><div class="stat"><b>' + rated + '</b><span>Rated</span></div><div class="stat"><b>' + p.history.length + '</b><span>Quizzes</span></div></div></div>';

    /* profile + avatar */
    var look = '<div class="field"><label class="label" for="acc-name">Display name</label><input id="acc-name" class="input" maxlength="24" value="' + esc(p.name) + '"></div>' +
      '<div class="pz-line"><span class="label">Avatar</span><div class="seg-group">' + [['emoji', 'Emoji'], ['mono', 'Monogram']].map(function (o) { return '<button class="seg' + ((p.style === o[0] || (o[0] === 'mono' && !p.emoji)) ? ' selected' : '') + '" data-av-style="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>' +
      (p.style === 'mono' ? '' : '<div class="seg-group pz-sets">' + EMOJI_SETS.map(function (st, i) { return '<button class="seg' + (avSet === i ? ' selected' : '') + '" data-av-set="' + i + '">' + st.label + '</button>'; }).join('') + '</div>' +
        '<div class="avatar-grid">' + EMOJI_SETS[avSet].list.map(function (e) { return '<button class="emoji-btn' + (p.emoji === e ? ' selected' : '') + '" data-av-emoji="' + e + '" aria-label="' + e + '">' + e + '</button>'; }).join('') + '</div>') +
      '<div class="pz-line"><span class="label">Colour</span><div class="swatch-row">' +
      Object.keys(AV_BGS).map(function (k) { return '<button class="swatch' + (p.bg === k ? ' selected' : '') + '" style="background:' + AV_BGS[k] + '" data-av-bg="' + k + '" aria-label="' + k + ' gradient"></button>'; }).join('') +
      COLORS.map(function (c) { return '<button class="swatch' + (!p.bg && p.color === c ? ' selected' : '') + '" style="background:' + c + '" data-av-color="' + c + '" aria-label="Solid ' + c + '"></button>'; }).join('') + '</div></div>' +
      '<div class="pz-line"><span class="label">Frame</span><div class="seg-group">' + [['none', 'None'], ['ring', 'Ring'], ['double', 'Double'], ['glow', 'Glow']].map(function (o) { return '<button class="seg' + (p.frame === o[0] ? ' selected' : '') + '" data-av-frame="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';

    /* theme */
    var theme = '<div class="theme-grid">' + THEMES.map(function (t) { var v = themeVars(t); return '<button class="theme-swatch' + (th.preset === t.id || (!th.preset && t.id === 'gold') ? ' selected' : '') + '" data-theme="' + t.id + '"><div class="prev" style="background:' + v['--bg'] + '"><i style="background:' + v['--accent'] + '"></i><i style="background:' + v['--surface2'] + '"></i><i style="background:' + v['--surface3'] + '"></i></div><span>' + t.name + '</span></button>'; }).join('') + '</div>' +
      '<div class="pz-line"><label class="label" for="acc-accent">Custom accent</label><input type="color" id="acc-accent" value="' + rt.accent + '" class="pz-color">' +
      '<div class="seg-group" style="margin-left:auto">' + [['dark', 'Dark'], ['light', 'Light']].map(function (o) { return '<button class="seg' + (rt.mode === o[0] ? ' selected' : '') + '" data-mode="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';

    /* personality */
    var dna = (qp ? '<p class="muted" style="margin:0 0 10px">Your Entertainment DNA shapes your Top 20 and recommendations, and keeps adapting as you rate and watch.</p><div class="chips wrap">' + (qp.genres || []).map(function (g) { return '<span class="chip soft active">' + esc(g) + '</span>'; }).join('') + (qp.mood ? '<span class="chip soft">' + esc(qp.mood) + '</span>' : '') + '</div>' : '<p class="muted" style="margin:0">One minute, four questions. It seeds your taste profile and builds your Top 20. After that, every rating and save keeps tuning it.</p>') +
      '<button class="btn btn-primary btn-block" id="acc-pq" style="margin-top:12px">' + (qp ? 'Retake the personality quiz' : 'Take the personality quiz') + '</button>';

    /* ratings */
    var ratings = '<p class="muted" style="margin:0 0 10px">Every title shows its TMDB rating. Paste a free <a href="https://www.omdbapi.com/apikey.aspx" target="_blank" rel="noopener">OMDb key</a> to add live IMDb, Rotten Tomatoes and Metacritic scores (cached on this device).</p>' +
      '<div class="row"><input id="acc-omdb" class="input" style="flex:1;min-width:180px" placeholder="OMDb API key" autocomplete="off" value="' + esc(R.getKey()) + '"><button class="btn" id="acc-omdb-save">Save</button></div>';

    h += '<div class="pz">' +
      pzFold('look', 'Profile &amp; avatar', esc(p.name), avatarHTML(p), look) +
      pzFold('theme', 'Colours &amp; theme', esc((curTheme ? curTheme.name : 'Gold') + ' · ' + (rt.mode === 'light' ? 'Light' : 'Dark')), '<span class="pz-dot" style="background:' + esc(rt.accent) + '"></span>', theme) +
      pzFold('dna', 'Personality quiz', qp ? 'Saved' : 'Not taken', '', dna) +
      pzFold('ratings', 'Ratings &amp; reviews', R.hasKey() ? 'Key saved' : 'Optional', '', ratings) +
      pzFold('share', 'Share Movie Night', 'Copy link', '', shareHTML()) +
      '</div>';

    /* activity */
    h += '<details class="fold"' + (accOpenFold ? ' open' : '') + ' id="acc-fold"><summary>Your activity &amp; achievements</summary><div class="fold-body">' +
      identityHTML(p) + '<h3>Achievements</h3>' + achievementsHTML(p) + '<h3>Favorites</h3>' + miniGrid(p.favorites.concat(p.showFavorites), 'Favorite a title to keep it here.') +
      '<h3>Recent quizzes</h3>' + (p.history.length ? '<div class="list-stack">' + p.history.slice(-5).reverse().map(function (x) { return '<div class="panel" style="padding:12px"><b>' + esc({ solo: 'Solo', couples: 'Couples', series: 'TV' }[x.mode] || x.mode) + '</b> · ' + esc(new Date(x.date).toLocaleDateString()) + '<div class="muted" style="font-size:.85rem">' + esc((x.top || []).slice(0, 3).join(' · ')) + '</div></div>'; }).join('') + '</div>' : '<p class="muted">No quizzes yet.</p>') +
      '</div></details>';

    /* account actions */
    h += '<div class="acc-actions">' +
      (p.guest ? '<button class="btn btn-primary" id="acc-create">Create an account</button>' : '') +
      '<button class="btn" id="acc-switch">Switch account</button><button class="btn btn-danger" id="acc-out">Log out</button></div>' +
      '<p class="fineprint" style="text-align:center">Movie data and ratings from TMDB and JustWatch. This product uses the TMDB API but is not endorsed or certified by TMDB. Rotten Tomatoes, IMDb and Metacritic scores are provided via OMDb.</p>';
    root.innerHTML = '<div class="page-head compact"><h1>Account</h1></div><div class="stack">' + h + '</div>';
    bindShare();
    $$('.pz-fold').forEach(function (d) { d.addEventListener('toggle', function () { accOpen[d.dataset.pz] = d.open; }); });
    var fold = $('#acc-fold'); if (fold) fold.addEventListener('toggle', function () { accOpenFold = fold.open; });
    $('#acc-pq').onclick = openPersonalityQuiz;
    $('#acc-omdb-save').onclick = function () {
      R.setKey($('#acc-omdb').value); R.clearCache();
      toast(R.hasKey() ? 'Key saved. Ratings will load in each title.' : 'Key removed');
    };
    $('#acc-out').onclick = signOutToWelcome; $('#acc-switch').onclick = signOutToWelcome;
    var cr = $('#acc-create'); if (cr) cr.onclick = function () { openWelcome('signup'); };
  }
  function shareHTML() {
    return '<div class="row"><input class="input" readonly value="' + APP_URL + '" style="flex:1;min-width:200px" onclick="this.select()" aria-label="App link"><button class="btn" id="share-copy">Copy</button><button class="btn btn-primary" id="share-go">Share</button></div>' +
      '<p class="fineprint">Anyone can open the link and tap <em>Add to Home Screen</em> to install it. No app store needed.</p>';
  }
  function bindShare() { var c = $('#share-copy'), g = $('#share-go'); if (c) c.onclick = copyAppLink; if (g) g.onclick = shareApp; }
  function persistLook(fields) {
    var p = me(); Object.keys(fields).forEach(function (k) { p[k] = fields[k]; });
    A.updatePerson(p.id, fields); renderHeaderProfile(); rerenderAccount();
  }
  $('#account-root').addEventListener('click', function (ev) {
    var b;
    if ((b = ev.target.closest('[data-av-set]'))) { avSet = Number(b.dataset.avSet); rerenderAccount(); }
    else if ((b = ev.target.closest('[data-av-style]'))) persistLook({ style: b.dataset.avStyle });
    else if ((b = ev.target.closest('[data-av-emoji]'))) persistLook({ emoji: b.dataset.avEmoji, style: 'emoji' });
    else if ((b = ev.target.closest('[data-av-bg]'))) persistLook({ bg: b.dataset.avBg });
    else if ((b = ev.target.closest('[data-av-color]'))) { var p = me(); p.bg = ''; A.updatePerson(p.id, { color: b.dataset.avColor }); var st = A.loadStore(), rec = st.people.find(function (x) { return x.id === p.id; }); if (rec) { rec.bg = ''; localStorage.setItem(A.ACCOUNTS_KEY, JSON.stringify(st)); } persistLook({ color: b.dataset.avColor, bg: '' }); }
    else if ((b = ev.target.closest('[data-av-frame]'))) persistLook({ frame: b.dataset.avFrame });
    else if ((b = ev.target.closest('[data-theme]'))) { setTheme({ preset: b.dataset.theme, mode: undefined, accent: undefined }); rerenderAccount(); }
    else if ((b = ev.target.closest('[data-mode]'))) { setTheme({ mode: b.dataset.mode }); rerenderAccount(); }
  });
  $('#account-root').addEventListener('change', function (ev) {
    if (ev.target.id === 'acc-name') { var v = ev.target.value.trim(); if (v) { persistLook({ name: v.slice(0, 24) }); toast('Name updated'); } }
    if (ev.target.id === 'acc-accent') { setTheme({ accent: ev.target.value }); rerenderAccount(); }
  });

  /* ---------- welcome / sign-in ---------- */
  function enterAs(id) {
    A.setSession(id); refreshPeople(); save();
    $('#welcome-overlay').classList.add('hidden'); document.body.classList.remove('locked');
    applyTheme(themeSettings(me()));
    renderHeaderProfile(); pickHero(false); renderBrowse(true);
    goto('home');
    var p = me();
    toast(p && p.guest ? 'Browsing as Guest' : 'Welcome, ' + (p ? p.name : ''));
    maybeStartPersonalityQuiz();
  }
  function signOutToWelcome() { A.setSession(null); refreshPeople(); renderHeaderProfile(); openWelcome('main'); }
  function openWelcome(mode, claimId) {
    var card = $('#welcome-card'), folks = A.people();
    var claimed = folks.filter(function (x) { return !x.unclaimed && !x.guest; });
    var unclaimed = folks.filter(function (x) { return x.unclaimed; });
    var err = '<p class="error hidden" id="w-error"></p>';
    function head(sub) { return '<div class="welcome-head"><svg class="welcome-mark" viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="var(--accent-ink)"/></svg><h2>Movie Night</h2><p class="muted">' + sub + '</p></div>'; }
    function showErr(msg) { var e = $('#w-error'); e.textContent = msg; e.classList.remove('hidden'); }
    var cryptoFail = 'Sign-in isn\'t available in this browser (Web Crypto is missing). Try a current browser.';
    if (mode === 'login') {
      card.innerHTML = head('Log in to your account on this device.') +
        (claimed.length ? '<p class="label">Accounts on this device</p><div class="chips wrap auth-chips">' + claimed.map(function (x) { return '<button class="chip" data-wemail="' + esc(x.email) + '">' + esc(x.emoji + ' ' + x.name) + '</button>'; }).join('') + '</div>' : '<p class="muted">No accounts on this device yet — create one instead.</p>') +
        '<div class="field"><label class="label" for="w-email">Email</label><input id="w-email" class="input" type="email" autocomplete="email" placeholder="you@example.com"></div>' +
        '<div class="field"><label class="label" for="w-pin">PIN or password</label><input id="w-pin" class="input" type="password" autocomplete="current-password" placeholder="Your PIN"></div>' + err +
        '<button class="btn btn-primary btn-lg btn-block" id="w-login-go">Log in</button><button class="btn btn-ghost btn-block" id="w-back">Back</button>';
      $$('[data-wemail]').forEach(function (b) { b.onclick = function () { $('#w-email').value = b.dataset.wemail; $('#w-pin').focus(); }; });
      $('#w-back').onclick = function () { openWelcome('main'); };
      $('#w-login-go').onclick = function () {
        A.verifyLogin($('#w-email').value, $('#w-pin').value).then(function (acct) {
          if (!acct) showErr('That email and PIN don\'t match an account on this device.'); else enterAs(acct.id);
        }).catch(function () { showErr(cryptoFail); });
      };
    } else if (mode === 'signup' || mode === 'claim') {
      var target = mode === 'claim' ? A.person(claimId) : null;
      card.innerHTML = head(mode === 'claim' ? 'Claim <strong>' + esc(target ? target.name : 'this profile') + '</strong> — set an email and PIN. Everything saved on it stays.' : 'Create your account. It lives only on this device — nothing leaves your phone.') +
        (mode === 'signup' ? '<div class="field"><label class="label" for="w-name">Your name</label><input id="w-name" class="input" maxlength="24" placeholder="e.g. Alex"></div>' : '') +
        '<div class="field"><label class="label" for="w-email">Email</label><input id="w-email" class="input" type="email" autocomplete="email" placeholder="you@example.com"></div>' +
        '<div class="field"><label class="label" for="w-pin">PIN or password (4+ characters)</label><input id="w-pin" class="input" type="password" autocomplete="new-password" placeholder="Choose a PIN"></div>' + err +
        '<button class="btn btn-primary btn-lg btn-block" id="w-auth-go">' + (mode === 'claim' ? 'Claim &amp; continue' : 'Create account') + '</button><button class="btn btn-ghost btn-block" id="w-back">Back</button>';
      $('#w-back').onclick = function () { openWelcome('main'); };
      $('#w-auth-go').onclick = function () {
        var email = $('#w-email').value, pin = $('#w-pin').value;
        function done(r) { if (!r.ok) showErr(r.error); else enterAs(r.account.id); }
        function fail() { showErr(cryptoFail); }
        if (mode === 'claim') A.claimAccount(claimId, { email: email, pin: pin }).then(done).catch(fail);
        else A.createAccount({ name: $('#w-name').value, email: email, pin: pin, emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)], style: 'mono', color: COLORS[Math.floor(Math.random() * COLORS.length)] }).then(done).catch(fail);
      };
    } else {
      card.innerHTML = head('Tell it your mood, answer a few this-or-that questions, and get the movie or show that fits tonight. Accounts live on this device only.') +
        (claimed.length ? '<button class="btn btn-primary btn-lg btn-block" id="w-go-login">Log in</button>' : '') +
        '<button class="btn ' + (claimed.length ? '' : 'btn-primary ') + 'btn-lg btn-block" id="w-go-signup" style="margin-top:8px">Create account</button>' +
        '<button class="btn btn-ghost btn-block" id="w-go-guest" style="margin-top:8px">Continue as guest</button>' +
        (unclaimed.length ? '<p class="label" style="margin-top:16px">Profiles from before accounts — claim yours to keep its data:</p>' + unclaimed.map(function (u) { return '<button class="btn btn-sm" data-wclaim="' + u.id + '" style="margin:0 6px 6px 0">' + esc(u.emoji + ' ' + u.name) + '</button>'; }).join('') : '');
      var gl = $('#w-go-login'); if (gl) gl.onclick = function () { openWelcome('login'); };
      $('#w-go-signup').onclick = function () { openWelcome('signup'); };
      $('#w-go-guest').onclick = function () { enterAs(A.GUEST_ID); };
      $$('[data-wclaim]').forEach(function (b) { b.onclick = function () { openWelcome('claim', b.dataset.wclaim); }; });
    }
    $('#welcome-overlay').classList.remove('hidden'); document.body.classList.add('locked');
  }

  /* ---------- init ---------- */
  applyTheme(themeSettings(me()));
  renderHeaderProfile();
  buildGenreChips();
  renderShuffleControls();
  renderQuizSetup();
  if (state.activeId) { pickHero(false); renderBrowse(true); goto('home'); maybeStartPersonalityQuiz(); }
  else { pickHero(false); renderBrowse(true); openWelcome('main'); }
  setTimeout(loadExtensions, 200);
})();
