/* Node tests for the on-device accounts layer (js/accounts.js).
   Run:  node tests/accounts.test.js
   Uses the real module with an in-memory localStorage shim and Node's
   Web Crypto (globalThis.crypto.subtle), the same primitives the
   browser build uses. */
'use strict';
const assert = require('assert');

// localStorage shim, installed BEFORE the module is required.
const backing = new Map();
globalThis.localStorage = {
  getItem: k => (backing.has(k) ? backing.get(k) : null),
  setItem: (k, v) => backing.set(k, String(v)),
  removeItem: k => backing.delete(k)
};
const A = require('../js/accounts.js');

let passed = 0;
async function check(name, fn) { await fn(); passed++; console.log('  ok -', name); }

(async function main() {
  console.log('Accounts');

  await check('create account stores a salted hash, never the plaintext PIN', async () => {
    const r = await A.createAccount({ name: 'Owen', email: 'owen@example.com', pin: '1234', emoji: '🎬', color: '#e8b34b' });
    assert.ok(r.ok, r.error);
    const raw = backing.get(A.ACCOUNTS_KEY);
    assert.ok(!raw.includes('"1234"'), 'plaintext PIN leaked into storage');
    const acct = A.findByEmail('owen@example.com');
    assert.ok(acct && acct.salt && acct.hash && acct.hash !== '1234');
    assert.strictEqual(acct.hash.length, 64, 'SHA-256 hex expected');
  });

  await check('duplicate email on the same device is rejected', async () => {
    const r = await A.createAccount({ name: 'Copy', email: 'OWEN@example.com', pin: '9999' });
    assert.ok(!r.ok);
  });

  await check('second account gets a different salt (same PIN, different hash)', async () => {
    const r = await A.createAccount({ name: 'Janae', email: 'janae@example.com', pin: '1234', emoji: '🍿', color: '#5ab0e0' });
    assert.ok(r.ok, r.error);
    const a = A.findByEmail('owen@example.com'), b = A.findByEmail('janae@example.com');
    assert.notStrictEqual(a.salt, b.salt);
    assert.notStrictEqual(a.hash, b.hash);
  });

  await check('login accepts the right PIN and rejects a wrong one', async () => {
    assert.ok(await A.verifyLogin('owen@example.com', '1234'), 'right PIN should log in');
    assert.strictEqual(await A.verifyLogin('owen@example.com', '0000'), null, 'wrong PIN must fail');
    assert.strictEqual(await A.verifyLogin('owen@example.com', ''), null);
    assert.strictEqual(await A.verifyLogin('nobody@example.com', '1234'), null);
    assert.ok(await A.verifyLogin('OWEN@example.com', '1234'), 'email match is case-insensitive');
  });

  await check('account data is fully isolated per account', async () => {
    const a = A.findByEmail('owen@example.com'), b = A.findByEmail('janae@example.com');
    A.saveData(a.id, { favorites: ['inception', 'heat'], watchlist: ['dune'], history: [{ mode: 'solo' }], taste: { scary: 5 } });
    const dataB = A.getData(b.id);
    assert.deepStrictEqual(dataB.favorites, [], 'B must not see A\'s favorites');
    assert.deepStrictEqual(dataB.watchlist, []);
    assert.deepStrictEqual(dataB.history, []);
    const dataA = A.getData(a.id);
    assert.deepStrictEqual(dataA.favorites, ['inception', 'heat']);
    // and writing B's data does not disturb A's
    A.saveData(b.id, { favorites: ['amelie'], watchlist: [], history: [], taste: null });
    assert.deepStrictEqual(A.getData(a.id).favorites, ['inception', 'heat']);
    assert.deepStrictEqual(A.getData(b.id).favorites, ['amelie']);
    // guest data is its own namespace too
    assert.deepStrictEqual(A.getData(A.GUEST_ID).favorites, []);
  });

  await check('session persists and clears', async () => {
    const a = A.findByEmail('owen@example.com');
    A.setSession(a.id);
    assert.strictEqual(A.getSession(), a.id);
    A.setSession(null);
    assert.strictEqual(A.getSession(), null);
  });

  await check('legacy v1 profiles migrate to unclaimed people with data intact', async () => {
    // fresh device: wipe, seed a legacy store exactly like v1-v3 wrote it
    backing.clear();
    const legacy = {
      profiles: [
        { id: 'plegacy1', name: 'Player 1', emoji: '🎬', color: '#e8b34b', favorites: ['heat'], watchlist: ['casino'], history: [{ mode: 'solo', rounds: 15 }], taste: { adrenaline: 12 } },
        { id: 'plegacy2', name: 'Player 2', emoji: '🍿', color: '#5ab0e0', favorites: [], watchlist: [], history: [], taste: {} }
      ],
      activeId: 'plegacy1', coupleA: 'plegacy1', coupleB: 'plegacy2'
    };
    backing.set(A.LEGACY_KEY, JSON.stringify(legacy));
    const res = A.migrateLegacyIfNeeded();
    assert.ok(res.migrated);
    const p1 = A.person('plegacy1');
    assert.ok(p1 && p1.unclaimed, 'legacy profile should be unclaimed');
    assert.deepStrictEqual(A.getData('plegacy1').favorites, ['heat']);
    assert.deepStrictEqual(A.getData('plegacy1').history.length, 1);
    // legacy key is left untouched (non-destructive)
    assert.ok(backing.get(A.LEGACY_KEY).includes('plegacy1'));
    // migration is one-time
    assert.ok(!A.migrateLegacyIfNeeded().migrated);
    // unclaimed profiles cannot log in until claimed
    assert.strictEqual(await A.verifyLogin('any@example.com', '1234'), null);
    // claiming keeps the id — and therefore all the saved data
    const claim = await A.claimAccount('plegacy1', { email: 'owen@example.com', pin: '4321' });
    assert.ok(claim.ok, claim.error);
    assert.deepStrictEqual(A.getData('plegacy1').favorites, ['heat'], 'claim must preserve data');
    assert.ok(await A.verifyLogin('owen@example.com', '4321'));
    assert.strictEqual(await A.verifyLogin('owen@example.com', '1234'), null);
    // the other legacy profile is still unclaimed and untouched
    assert.ok(A.person('plegacy2').unclaimed);
  });

  console.log(`\nALL ${passed} ACCOUNT CHECKS PASSED`);
})().catch(e => { console.error('FAILED:', e); process.exit(1); });
