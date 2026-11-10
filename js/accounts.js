/* Movie Night — on-device accounts.
   Accounts live ONLY in this browser's localStorage. A credential is a
   per-account salted SHA-256 hash of the PIN/password (Web Crypto);
   plaintext secrets are never stored. Each account's favorites,
   watchlist, quiz history and taste profile are kept under a
   per-account storage key, fully separate from every other account.
   There is NO server in this version: accounts do not sync between
   devices — each phone keeps its own accounts.
   Works in the browser (window.MovieAccounts) and in Node
   (module.exports) so tests/accounts.test.js can exercise the real
   storage + hash logic with a localStorage shim. */
(function (global) {
  'use strict';

  var ACCOUNTS_KEY = 'movienight.accounts.v1';
  var SESSION_KEY = 'movienight.session.v1';
  var LEGACY_KEY = 'movienight.v1';
  var DATA_PREFIX = 'movienight.data.';
  var GUEST_ID = 'guest';

  function ls() { return global.localStorage; }
  function readJSON(key, fallback) {
    try {
      var v = ls().getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  }
  function writeJSON(key, obj) {
    try { ls().setItem(key, JSON.stringify(obj)); } catch (e) { /* full/blocked */ }
  }

  function loadStore() {
    var s = readJSON(ACCOUNTS_KEY, null);
    if (!s || !Array.isArray(s.people)) s = { people: [] };
    return s;
  }
  function saveStore(s) { writeJSON(ACCOUNTS_KEY, s); }

  function randomHex(n) {
    var bytes = new Uint8Array(n);
    if (global.crypto && global.crypto.getRandomValues) {
      global.crypto.getRandomValues(bytes);
    } else {
      for (var i = 0; i < n; i++) bytes[i] = Math.floor(Math.random() * 256);
    }
    return Array.prototype.map.call(bytes, function (b) {
      return ('0' + b.toString(16)).slice(-2);
    }).join('');
  }
  function newId() { return 'a' + Date.now().toString(36) + randomHex(3); }

  /* Salted SHA-256 of the secret. Async (Web Crypto). */
  function hashSecret(secret, salt) {
    var enc = new global.TextEncoder();
    return global.crypto.subtle.digest('SHA-256', enc.encode(salt + ':' + secret))
      .then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('');
      });
  }

  function emptyData() {
    return {
      favorites: [], watchlist: [], history: [], taste: null, ratings: {}, watched: [], events: [], quizProfile: null, achievements: [],
      snapshots: [], quizBoost: null, foundPerfect: false,
      showFavorites: [], showWatchlist: [],
      settings: {}, top20: { mode: 'foryou', genres: [], era: '', hideWatched: false, hidden: [] }
    };
  }
  function normTop20(t) {
    t = (t && typeof t === 'object') ? t : {};
    return {
      mode: t.mode === 'canon' ? 'canon' : 'foryou',
      genres: Array.isArray(t.genres) ? t.genres : [],
      era: typeof t.era === 'string' ? t.era : '',
      hideWatched: !!t.hideWatched,
      hidden: Array.isArray(t.hidden) ? t.hidden : []
    };
  }
  function getData(id) {
    var d = readJSON(DATA_PREFIX + id, null);
    if (!d || typeof d !== 'object') return emptyData();
    var out = emptyData();
    out.favorites = Array.isArray(d.favorites) ? d.favorites : [];
    out.watchlist = Array.isArray(d.watchlist) ? d.watchlist : [];
    out.history = Array.isArray(d.history) ? d.history : [];
    out.taste = d.taste || null;
    out.ratings = d.ratings || {}; out.watched = Array.isArray(d.watched) ? d.watched : [];
    out.events = Array.isArray(d.events) ? d.events : []; out.quizProfile = d.quizProfile || null;
    out.achievements = Array.isArray(d.achievements) ? d.achievements : [];
    out.snapshots = Array.isArray(d.snapshots) ? d.snapshots : [];
    out.quizBoost = d.quizBoost || null;
    out.foundPerfect = !!d.foundPerfect;
    /* TV-section lists live in their own fields so show ids (prefixed
       "tv-") can never collide with movie favorites/watchlist. Records
       saved before v6 simply default to empty lists. */
    out.showFavorites = Array.isArray(d.showFavorites) ? d.showFavorites : [];
    out.showWatchlist = Array.isArray(d.showWatchlist) ? d.showWatchlist : [];
    /* v12: per-account appearance/app settings and Top 20 customisation. */
    out.settings = (d.settings && typeof d.settings === 'object') ? d.settings : {};
    out.top20 = normTop20(d.top20);
    return out;
  }
  function saveData(id, data) {
    data = data || {};
    writeJSON(DATA_PREFIX + id, {
      favorites: data.favorites || [], watchlist: data.watchlist || [],
      history: data.history || [], taste: data.taste || null, ratings: data.ratings || {}, watched: data.watched || [], events: data.events || [], quizProfile: data.quizProfile || null, achievements: data.achievements || [],
      snapshots: data.snapshots || [], quizBoost: data.quizBoost || null, foundPerfect: !!data.foundPerfect,
      showFavorites: data.showFavorites || [], showWatchlist: data.showWatchlist || [],
      settings: data.settings || {}, top20: normTop20(data.top20)
    });
  }

  function people() { return loadStore().people; }
  function person(id) {
    return people().find(function (p) { return p.id === id; }) || null;
  }
  function findByEmail(email) {
    var e = String(email || '').trim().toLowerCase();
    if (!e) return null;
    return people().find(function (p) { return p.email && p.email === e; }) || null;
  }
  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
  }
  function checkNewCredentials(email, pin, exceptId) {
    if (!validEmail(email)) return 'That email doesn\'t look right.';
    if (String(pin || '').length < 4) return 'Use a PIN or password of at least 4 characters.';
    var f = findByEmail(email);
    if (f && f.id !== exceptId) return 'An account with that email already exists on this device.';
    return null;
  }

  function createAccount(input) {
    input = input || {};
    var name = String(input.name || '').trim();
    var email = String(input.email || '').trim().toLowerCase();
    var pin = String(input.pin || '');
    if (!name) return Promise.resolve({ ok: false, error: 'Please enter a name.' });
    var err = checkNewCredentials(email, pin, null);
    if (err) return Promise.resolve({ ok: false, error: err });
    var salt = randomHex(16);
    return hashSecret(pin, salt).then(function (hash) {
      var store = loadStore();
      var acct = {
        id: newId(), name: name, email: email, salt: salt, hash: hash,
        emoji: input.emoji || '🎬', color: input.color || '#e8b34b',
        createdAt: new Date().toISOString(), unclaimed: false
      };
      store.people.push(acct);
      saveStore(store);
      return { ok: true, account: acct };
    });
  }

  /* Turn a migrated (unclaimed) legacy profile into a real account,
     keeping its id — and therefore all of its saved data. */
  function claimAccount(id, input) {
    var p = person(id);
    if (!p || !p.unclaimed) {
      return Promise.resolve({ ok: false, error: 'That profile can\'t be claimed.' });
    }
    input = input || {};
    var email = String(input.email || '').trim().toLowerCase();
    var pin = String(input.pin || '');
    var err = checkNewCredentials(email, pin, id);
    if (err) return Promise.resolve({ ok: false, error: err });
    var salt = randomHex(16);
    return hashSecret(pin, salt).then(function (hash) {
      var store = loadStore();
      var rec = store.people.find(function (x) { return x.id === id; });
      rec.email = email; rec.salt = salt; rec.hash = hash; rec.unclaimed = false;
      saveStore(store);
      return { ok: true, account: rec };
    });
  }

  function verifyLogin(email, pin) {
    var acct = findByEmail(email);
    if (!acct || acct.unclaimed || !acct.hash) return Promise.resolve(null);
    return hashSecret(String(pin || ''), acct.salt).then(function (h) {
      return h === acct.hash ? acct : null;
    });
  }

  function updatePerson(id, fields) {
    var store = loadStore();
    var rec = store.people.find(function (x) { return x.id === id; });
    if (!rec) {
      if (id !== GUEST_ID) return null;
      rec = {
        id: GUEST_ID, name: 'Guest', email: null, salt: null, hash: null,
        emoji: '👤', color: '#8a8fa3', createdAt: null, unclaimed: false, guest: true
      };
      store.people.push(rec);
    }
    /* v12 adds avatar style ('emoji' | 'monogram'), a gradient preset id and a frame style. */
    ['name', 'emoji', 'color', 'style', 'bg', 'frame'].forEach(function (k) {
      if (fields && fields[k] !== undefined && fields[k] !== null && fields[k] !== '') rec[k] = fields[k];
    });
    saveStore(store);
    return rec;
  }
  function guestPerson() {
    return person(GUEST_ID) || updatePerson(GUEST_ID, {});
  }

  function getSession() {
    try { return ls().getItem(SESSION_KEY) || null; } catch (e) { return null; }
  }
  function setSession(id) {
    try {
      if (id) ls().setItem(SESSION_KEY, id);
      else ls().removeItem(SESSION_KEY);
    } catch (e) { /* ignore */ }
  }

  /* One-time, non-destructive migration of the pre-accounts profile
     store (movienight.v1): every legacy profile becomes an UNCLAIMED
     person record keeping its id, and its favorites/watchlist/history/
     taste are copied into the per-account data namespace. Nothing is
     deleted; the legacy key is left in place. */
  function migrateLegacyIfNeeded() {
    var store = loadStore();
    if (store.migrated) return { migrated: false, people: store.people };
    store.migrated = true;
    var legacy = readJSON(LEGACY_KEY, null);
    var did = false;
    if (legacy && Array.isArray(legacy.profiles) && legacy.profiles.length) {
      legacy.profiles.forEach(function (p) {
        if (!store.people.some(function (x) { return x.id === p.id; })) {
          store.people.push({
            id: p.id, name: p.name, email: null, salt: null, hash: null,
            emoji: p.emoji, color: p.color, createdAt: null, unclaimed: true
          });
        }
        var exists = false;
        try { exists = !!ls().getItem(DATA_PREFIX + p.id); } catch (e) { /* ignore */ }
        if (!exists) {
          saveData(p.id, {
            favorites: p.favorites || [], watchlist: p.watchlist || [],
            history: p.history || [], taste: p.taste || null
          });
        }
      });
      store.legacyPrefs = {
        coupleA: legacy.coupleA || null, coupleB: legacy.coupleB || null,
        activeId: legacy.activeId || null
      };
      did = true;
    }
    saveStore(store);
    return { migrated: did, people: store.people };
  }

  var api = {
    GUEST_ID: GUEST_ID, ACCOUNTS_KEY: ACCOUNTS_KEY, SESSION_KEY: SESSION_KEY,
    LEGACY_KEY: LEGACY_KEY, DATA_PREFIX: DATA_PREFIX,
    loadStore: loadStore, people: people, person: person,
    guestPerson: guestPerson, findByEmail: findByEmail, validEmail: validEmail,
    createAccount: createAccount, claimAccount: claimAccount,
    verifyLogin: verifyLogin, updatePerson: updatePerson,
    getData: getData, saveData: saveData,
    getSession: getSession, setSession: setSession,
    migrateLegacyIfNeeded: migrateLegacyIfNeeded,
    hashSecret: hashSecret, emptyData: emptyData, normTop20: normTop20
  };
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  global.MovieAccounts = api;
})(typeof window !== 'undefined' ? window : globalThis);
