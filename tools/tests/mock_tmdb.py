#!/usr/bin/env python3
"""A tiny fake TMDB used to test tools/v12_tmdb_import.py without network access.
Serves /discover/{movie,tv}, /{movie,tv}/{id}, /search/{movie,tv}, /genre/{kind}/list."""
import json, random, re, threading
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

GENRES = {"movie": [(28, "Action"), (35, "Comedy"), (18, "Drama"), (27, "Horror"), (878, "Science Fiction"), (10749, "Romance"), (53, "Thriller"), (16, "Animation"), (99, "Documentary"), (10770, "TV Movie")],
          "tv": [(10759, "Action & Adventure"), (35, "Comedy"), (18, "Drama"), (9648, "Mystery"), (10765, "Sci-Fi & Fantasy"), (10764, "Reality"), (10767, "Talk")]}


def make_world(per_year=70, seed=7):
    rnd = random.Random(seed)
    world = {"movie": {}, "tv": {}}
    nid = 1000
    for kind in ("movie", "tv"):
        for year in range(2000, 2027):
            for i in range(per_year):
                nid += 1
                g = rnd.sample(GENRES[kind], 2)
                votes = rnd.choice([40, 120, 300, 900, 4000, 20000])
                avg = round(rnd.uniform(5.5, 8.8), 1)
                title = "Mock %s %d-%d" % (kind, year, i)
                d = {"id": nid, "vote_average": avg, "vote_count": votes, "original_language": "en" if rnd.random() < .8 else "fr",
                     "poster_path": ("/p%d.jpg" % nid) if rnd.random() > .05 else None,
                     "overview": ("A story number %d about people and what happens to them over time." % nid) if rnd.random() > .05 else "",
                     "genres": [{"id": a, "name": b} for a, b in g], "genre_ids": [a for a, _ in g], "imdb_id": "tt%07d" % nid,
                     "runtime": rnd.choice([50, 95, 110, 130]), "release_date": "%d-06-01" % year, "title": title, "original_title": title,
                     "first_air_date": "%d-03-01" % year, "name": title, "original_name": title, "status": rnd.choice(["Ended", "Returning Series"]),
                     "number_of_seasons": 3, "number_of_episodes": 30, "networks": [{"name": "MockNet"}], "created_by": [{"name": "Some Creator"}],
                     "credits": {"cast": [{"name": "Actor %d" % k} for k in range(5)], "crew": [{"job": "Director", "name": "Dir Person"}]},
                     "keywords": {"keywords": [{"name": "friendship"}], "results": [{"name": "friendship"}]},
                     "release_dates": {"results": [{"iso_3166_1": "US", "release_dates": [{"certification": "PG-13"}]}]},
                     "content_ratings": {"results": [{"iso_3166_1": "US", "rating": "TV-14"}]},
                     "external_ids": {"imdb_id": "tt%07d" % nid},
                     "watch/providers": {"results": {"US": {"flatrate": [{"provider_name": rnd.choice(["Netflix", "Max", "Hulu", "Disney Plus"])}]}}}}
                world[kind][nid] = d
    return world


class H(BaseHTTPRequestHandler):
    world = make_world()

    def log_message(self, *a):
        pass

    def send(self, obj, code=200):
        b = json.dumps(obj).encode()
        self.send_response(code); self.send_header("Content-Type", "application/json"); self.send_header("Content-Length", str(len(b))); self.end_headers(); self.wfile.write(b)

    def do_GET(self):
        u = urlparse(self.path); q = {k: v[0] for k, v in parse_qs(u.query).items()}; path = u.path
        m = re.match(r"/genre/(movie|tv)/list", path)
        if m:
            return self.send({"genres": [{"id": a, "name": b} for a, b in GENRES[m.group(1)]]})
        m = re.match(r"/discover/(movie|tv)", path)
        if m:
            kind = m.group(1); rows = []
            for d in self.world[kind].values():
                y = int((d["first_air_date"] if kind == "tv" else d["release_date"])[:4])
                if str(y) != q.get("first_air_date_year" if kind == "tv" else "primary_release_year", str(y)): continue
                if d["vote_average"] < float(q.get("vote_average.gte", 0)) or d["vote_count"] < int(q.get("vote_count.gte", 0)): continue
                if q.get("without_genres") and set(int(x) for x in q["without_genres"].split(",")) & set(d["genre_ids"]): continue
                if q.get("with_genres") and int(q["with_genres"]) not in d["genre_ids"]: continue
                rows.append(d)
            rows.sort(key=lambda d: -d["vote_count"])
            page = int(q.get("page", 1)); per = 20
            return self.send({"page": page, "total_pages": max(1, -(-len(rows) // per)), "results": rows[(page - 1) * per: page * per]})
        m = re.match(r"/search/(movie|tv)", path)
        if m:
            kind = m.group(1); qq = q.get("query", "").lower()
            return self.send({"results": [d for d in self.world[kind].values() if (d["name"] if kind == "tv" else d["title"]).lower() == qq]})
        m = re.match(r"/(movie|tv)/(\d+)", path)
        if m:
            d = self.world[m.group(1)].get(int(m.group(2)))
            return self.send(d, 200) if d else self.send({}, 404)
        self.send({}, 404)


def serve(port=0):
    srv = HTTPServer(("127.0.0.1", port), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


if __name__ == "__main__":
    s = serve(8899); print("mock TMDB on", s.server_address); threading.Event().wait()
