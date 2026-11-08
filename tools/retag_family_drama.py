#!/usr/bin/env python3
"""Post-build retag (run between build_v4.py and merge_owen_list.py).

Wikipedia maintains no usable "family drama" category tree (checked:
the only 'family drama' categories in 5,534 film articles are two
Indian-language ones), so Family Drama is a DERIVED label, applied with
the same intersection logic the build already uses for Horror Thriller
and Modern Drama:

    Family Drama  :=  genres contain both "Family" and "Drama"
                      (i.e. Wikipedia's year/genre categories place the
                      film among both family films and drama films),
                      or a hand-picked core title.

The build applied this only to core titles with strong poster/
description evidence at pool time (56 films). This pass applies the
rule uniformly to the final dataset, after the poster pass, and adds
the second evidence form: a film whose Wikipedia lead self-describes
as a "family drama" (the missing Family/Drama tag is added too, as the
lead asserts it). It only ADDS tags (genre cap 8 respected); it never
removes or reorders — genres[0] is untouched. Wikidata's family-drama
genre (Q29621749) was also checked: only 19 enwiki films carry it,
mostly Indian-language titles the removal rule excludes anyway.
Final honest count: 58 — locked in the test suite like Western was.

Usage: python3 tools/retag_family_drama.py
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import v4_lib as L

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PATH = f"{ROOT}/.build/v4/final_pre_merge.json"


def main():
    movies = json.load(open(PATH))
    film_article = json.load(open(f"{ROOT}/.build/v4/film_article.json"))
    summaries = L.summary_cache()
    tagged = 0
    for m in movies:
        g = m["genres"]
        if "Family Drama" in g:
            continue
        if "Family" in g and "Drama" in g and len(g) < 8:
            g.append("Family Drama")
            tagged += 1
            continue
        art = film_article.get(m["id"])
        info = summaries.get(art) if art else None
        ext = (info or {}).get("extract", "") if info else ""
        if re.search(r"family[ -]drama", ext[:600], re.I):
            for extra in ("Family", "Drama", "Family Drama"):
                if extra not in g and len(g) < 8:
                    g.append(extra)
            if "Family Drama" in g:
                tagged += 1
    count = sum(1 for m in movies if "Family Drama" in m["genres"])
    json.dump(movies, open(PATH, "w"))
    print(f"family-drama retag: +{tagged} derived tags; Family Drama now {count}")


if __name__ == "__main__":
    main()
