#!/usr/bin/env python3
"""Restore audited false positives of the Indian-removal rule.

After the build, every removal was re-audited by the signal that fired:
501 by enriched nationality, 35 by lead-extract language markers, 21 by
category corroboration. The audit found 6 false positives:

  Mention-only extracts (the lead mentions Bollywood as a style or
  reference; the film is not an Indian production):
    - Christmas Karma (2025, British — "a Bollywood-inspired adaptation")
    - Bhai's Cafe (2019, South African — "shot in the style of a
      Bollywood film")

  Wikipedia miscategorization (Mexican Ánima Estudios animated films
  filed under "Indian animated films" categories):
    - A Wizard's Tale (2018), Monster Island (2017),
      Guardians of Oz (2015), Top Cat Begins (2015)

This restores those 6 from the v3 dataset into the post-build set,
with the same post-processing the build would have applied: upgraded
description from the cached Wikipedia extract, an infobox poster
attempt, and the deterministic derived genre tags.

Usage: python3 tools/restore_false_positives.py   (before the retag/merge)
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BUILD = os.path.join(ROOT, ".build")
V4 = os.path.join(BUILD, "v4")
PATH = f"{V4}/final_pre_merge.json"

RESTORE = ["Christmas Karma", "Bhai's Cafe", "A Wizard's Tale",
           "Monster Island", "Guardians of Oz", "Top Cat Begins"]
ARTICLES = {
    "Christmas Karma": "Christmas Karma",
    "Bhai's Cafe": "Bhai's Cafe",
    "A Wizard's Tale": "A Wizard's Tale",
    "Monster Island": "Monster Island (film)",
    "Guardians of Oz": "Guardians of Oz",
    "Top Cat Begins": "Top Cat Begins",
}


def main():
    movies = json.load(open(PATH))
    v3 = json.load(open(f"{BUILD}/movies_v3.json"))
    have = {m["id"] for m in movies}
    summaries = L.fetch_summaries([ARTICLES[t] for t in RESTORE])
    L.fetch_wikitext([ARTICLES[t] for t in RESTORE])
    restored = []
    for title in RESTORE:
        src = next((m for m in v3 if m["title"] == title), None)
        if not src or src["id"] in have:
            continue
        m = dict(src)
        art = ARTICLES[title]
        info = summaries.get(art)
        if info and not info.get("dead"):
            m["description"] = L.clean_extract_description(
                info.get("extract", ""), m["description"])
            if not m["poster"]:
                m["poster"] = L.poster_for_article(art, info.get("poster", ""))
        g = list(m["genres"])
        if "Animation" in g and "Animated" not in g:
            g.append("Animated")
        if "Horror" in g and "Thriller" in g and "Horror Thriller" not in g:
            g.append("Horror Thriller")
        if ("Drama" in g and m["year"] >= 2000
                and "Historical Drama" not in g and "Modern Drama" not in g):
            g.append("Modern Drama")
        m["genres"] = g[:8]
        movies.append(m)
        have.add(m["id"])
        restored.append((title, bool(m["poster"])))
    json.dump(movies, open(PATH, "w"))
    stats = json.load(open(f"{V4}/stats.json"))
    stats["restored_false_positives"] = len(restored)
    stats["removed_indian_net"] = stats["removed_indian"] - len(restored)
    L.save_json(f"{V4}/stats.json", stats)
    print(f"restored {len(restored)} false positives: {restored}")


if __name__ == "__main__":
    main()
