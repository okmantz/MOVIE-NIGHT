#!/usr/bin/env python3
"""Fetch a movie poster URL from Wikipedia (free, no API key needed).

Usage:
    python3 tools/fetch_posters.py "Alien (film)"
    python3 tools/fetch_posters.py "The Matrix" "Parasite (2019 film)"

How it works: the Wikipedia REST summary endpoint returns each article's
lead image — for film articles, that is the theatrical poster. (The older
PageImages API only carries free-licensed images, so it misses most
posters; the summary endpoint does not have that limit.) Every URL is
checked for an HTTP 200 image response before it is printed.

Use the printed URL as the `poster` field for that movie in
js/movies.js. Leave `poster` as "" when nothing resolves — the app draws
an elegant generated cover instead. Never paste in a URL you have not
verified this way.
"""
import sys
import requests

HEADERS = {"User-Agent": "MovieNightApp/1.0 (poster lookup; educational project)"}


def fetch(title: str) -> str | None:
    slug = requests.utils.quote(title.replace(" ", "_"), safe="")
    r = requests.get(f"https://en.wikipedia.org/api/rest_v1/page/summary/{slug}",
                     headers=HEADERS, timeout=30)
    if r.status_code == 404:
        return None
    r.raise_for_status()
    data = r.json()
    url = (data.get("originalimage") or {}).get("source") or (data.get("thumbnail") or {}).get("source")
    if not url:
        return None
    url = url.split("?")[0]
    check = requests.get(url, headers=HEADERS, timeout=15, stream=True)
    ok = check.status_code == 200 and check.headers.get("Content-Type", "").startswith("image")
    check.close()
    return url if ok else None


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for title in sys.argv[1:]:
        print(f"{title!r}: {fetch(title) or 'NO POSTER FOUND (leave poster empty)'}")


if __name__ == "__main__":
    main()
