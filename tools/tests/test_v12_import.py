#!/usr/bin/env python3
"""End-to-end test of tools/v12_tmdb_import.py against the mock TMDB server (no network).
Run: python3 tools/tests/test_v12_import.py"""
import json, os, re, shutil, subprocess, sys, tempfile
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
import mock_tmdb

tmp = tempfile.mkdtemp()
for f in ("movies.js", "shows.js"):
    shutil.copy(os.path.join(ROOT, "js", f), tmp)
srv = mock_tmdb.serve(0); port = srv.server_address[1]
env = dict(os.environ, MOVIENIGHT_JS=tmp, TMDB_API_KEY="test")
def run(*a):
    r = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "v12_tmdb_import.py"), "--api-base", "http://127.0.0.1:%d" % port, "--image-base", "http://img.test", "--qps", "500", "--pages", "3"] + list(a), env=env, capture_output=True, text=True)
    return r
def ext(name, var):
    s = open(os.path.join(tmp, name), encoding="utf8").read()
    return json.loads(re.search(r"window\.%s\s*=\s*window\.%s\s*\|\|\s*(\[.*\]);" % (var, var), s, re.S).group(1))
n = 0
def ok(c, m):
    global n
    assert c, "FAILED: " + m; n += 1; print("  ok -", m)
r = run("--movies", "80", "--shows", "40")
print(r.stdout[-600:]); ok("built" in r.stdout, "importer ran: " + (r.stderr[-200:] or "no stderr"))
mv, sh = ext("movies-ext.js", "MOVIES_EXT"), ext("shows-ext.js", "SHOWS_EXT")
ok(len(mv) == 80 and len(sh) == 40, "adds exactly the requested counts (%d movies, %d shows)" % (len(mv), len(sh)))
ok(all(m["poster"].startswith("http://img.test/w500/") for m in mv + sh), "every new title has a poster")
ok(all(len(m["description"]) >= 40 for m in mv + sh), "every new title has a real description")
ok(all(2000 <= (m.get("year") or m.get("startYear")) <= 2026 for m in mv + sh), "all within 2000-2026")
ok(len({m["id"] for m in mv + sh}) == 120, "ids unique")
ok(all(set(m["vector"]) == {"adrenaline", "brainy", "scary", "funny", "heartwarming", "dark", "romantic", "epic", "cozy", "weird"} for m in mv + sh), "taste vectors have all 10 axes")
ok(all("TV Movie" not in m["genres"] and "Talk" not in m["genres"] for m in mv + sh), "TV movies / talk shows excluded")
ok(len({y for y in [m["year"] for m in mv]}) >= 20, "spread across years (%d distinct)" % len({m["year"] for m in mv}))
ok(len({m["genres"][0] for m in mv}) >= 5, "spread across genres (%d primary genres)" % len({m["genres"][0] for m in mv}))
r2 = run("--movies", "80"); mv2 = ext("movies-ext.js", "MOVIES_EXT")
ok(len(mv2) == 80 and len({m["id"] for m in mv2}) == len(mv2), "re-running only tops up, never duplicates (%d)" % len(mv2))
r3 = run("--report"); print(r3.stdout)
ok("movies:" in r3.stdout and "shows:" in r3.stdout, "report prints coverage")
import importlib.util
spec = importlib.util.spec_from_file_location("imp", os.path.join(ROOT, "tools", "v12_tmdb_import.py")); imp = importlib.util.module_from_spec(spec); spec.loader.exec_module(imp)
hit = imp.best_match([{"title": "Heat", "release_date": "1995-12-15", "vote_count": 9000, "id": 1}, {"title": "Heat Wave", "release_date": "2010-01-01", "vote_count": 5, "id": 2}], "Heat", 1995, False)
ok(hit and hit["id"] == 1, "title+year matching picks the right TMDB record")
ok(imp.best_match([{"title": "Totally Different", "release_date": "1995-01-01", "vote_count": 10, "id": 3}], "Heat", 1995, False) is None, "weak matches are rejected")
ok(imp.providers_of({"watch/providers": {"results": {"US": {"flatrate": [{"provider_name": "Disney Plus"}, {"provider_name": "Obscure"}]}}}}) == ["Disney+"], "streaming providers normalised to app labels")
shutil.rmtree(tmp); print("\nALL %d IMPORTER CHECKS PASSED" % n)
