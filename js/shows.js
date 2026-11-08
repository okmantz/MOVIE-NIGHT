/* Movie Night — TV dataset (v6). Each series carries a 0-10 taste
   vector on the same ten axes as the movie catalog, so the quiz engine
   works on shows unchanged. Entries with tier "core" are hand-picked
   (genres/keywords curated; vectors hand-set for the biggest titles).
   Catalog entries were sourced from Wikipedia streaming/genre category
   trees: creator, network, seasons, episodes and air dates come from
   the article infobox (null when the article does not state them —
   never invented), the description is adapted from the article's
   Wikipedia lead (CC BY-SA), and the taste vector is an ESTIMATE
   derived from genre-baseline profiles. Poster URLs were verified
   live at build time; an empty poster means the UI draws an elegant
   generated cover instead. "network" is the ORIGINAL network or
   service that first aired the series — where it streams today
   changes constantly and is not tracked. Additions applied the
   documented Indian-production exclusion. */
const SHOW_AXES = ["adrenaline","brainy","scary","funny","heartwarming","dark","romantic","epic","cozy","weird"];
const SHOWS = [
 {
  "id": "tv-100-greatest",
  "title": "100 Greatest",
  "startYear": 1999,
  "endYear": 2015,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": 60,
  "status": "Ended",
  "network": "Channel 4",
  "rating": null,
  "description": "100 Greatest is a long-running television strand on Channel 4 in the United Kingdom that was originally broadcast from 11 September 1999 to 10 October 2015. The lists presented are generally the result of public polls, and reflect the votes of visitors to the Channel 4 website. However, the results of some are determined by experts.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "documentary",
   "channel 4",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/100_Greatest.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-100-things-to-do-before-high-school",
  "title": "100 Things to Do Before High School",
  "startYear": 2014,
  "endYear": null,
  "creator": "Scott Fellows",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "100 Things to Do Before High School is an American comedy television series created by Scott Fellows that aired on Nickelodeon from November 11, 2014 to February 27, 2016. The series stars Isabela Moner, Jaheem King Toombs, Owen Joyner, and Jack De Sena.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 2,
   "epic": 3,
   "cozy": 9,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/100_Things_to_Do_Before_High_School.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-101-dalmatians-the-series",
  "title": "101 Dalmatians: The Series",
  "startYear": 1997,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "101 Dalmatians: The Series is an American animated television series that aired from September 1, 1997, to March 4, 1998, on the Disney-Kellogg Alliance and ABC. It was produced by Walt Disney Television Animation and Jumbo Pictures and is based on the 1961 Disney animated feature film of the same name and its 1996 live-action remake.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 1,
   "epic": 5,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b2/101_Dalmatians_The_Series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-11-22-63",
  "title": "11.22.63",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "11.22.63 is an American science fiction thriller television miniseries based on the 2011 novel 11/22/63 by Stephen King, and consisting of eight episodes, in which a time traveler (portrayed by James Franco) attempts to stop the assassination of John F. Kennedy. The series was developed by Bridget Carpenter, who also executive produced along with J. J. Abrams, King, and Bryan Burk.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/11.22.63_TV_series.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-12-monkeys",
  "title": "12 Monkeys",
  "startYear": 1995,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "12 Monkeys is an American science fiction television series on Syfy developed by Terry Matalas and Travis Fickett loosely adapting the 1995 film 12 Monkeys, itself based on Chris Marker's 1962 featurette La Jetée. In the series, Aaron Stanford and Amanda Schull star as James Cole and Dr.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/12_Monkeys_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-13-reasons-why",
  "title": "13 Reasons Why",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "13 Reasons Why (also stylized as TH1RTEEN R3ASONS WHY) is an American teen drama television series based on the 2007 novel Thirteen Reasons Why by author Jay Asher. Developed for Netflix by Brian Yorkey and with Selena Gomez serving as an executive producer, the series stars Dylan Minnette and Katherine Langford alongside an ensemble cast.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 3,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "mystery",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c0/13_Reasons_Why.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-1670",
  "title": "1670",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "1670 is a Polish mockumentary satirical comedy television series. It premiered on Netflix on 13 December 2023. The third season premiered on 5 August 2026.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 0,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/1670_Netflix.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-1899",
  "title": "1899",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "1899 is a multilingual German mystery science fiction television series created by Jantje Friese and Baran bo Odar. It premiered on Netflix in November 2022 and received generally favourable reviews. The series was cancelled in January 2023.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 6,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/59/1899NetflixPosterEnglish.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-2026-fifa-world-cup",
  "title": "2026 FIFA World Cup",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "War"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The 2026 FIFA World Cup was the 23rd FIFA World Cup, the quadrennial international men's soccer championship contested by the national teams of the member associations of FIFA. The tournament began on June 11, 2026, and concluded on July 19 with Spain winning the championship for the second time. It was jointly hosted by 16 cities—11 in the United States, 3 in Mexico, and 2 in Canada.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "war",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-24",
  "title": "24",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "24 is an American action thriller television series created by Joel Surnow and Robert Cochran for Fox. The series features an ensemble cast, with Kiefer Sutherland starring as American counter-terrorist federal agent Jack Bauer. Each season covers 24 consecutive hours using the real time method of narration, which is emphasized by the display of split screens and a digital clock.",
  "vector": {
   "adrenaline": 10,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "real time",
   "jack bauer",
   "ctu",
   "ticking clock"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/33/24-Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-24-hours-in-a-e",
  "title": "24 Hours in A&E",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": 35,
  "episodes": 348,
  "status": "Running",
  "network": "Channel 4",
  "rating": null,
  "description": "24 Hours in A&E is a British factual medical documentary programme, airing on Channel 4, set in a teaching hospital in inner London. Initially it was filmed in King's College Hospital in Denmark Hill, Camberwell, but in the seventh series, the setting was changed to St George's Hospital in Tooting, Wandsworth.",
  "vector": {
   "adrenaline": 2,
   "brainy": 10,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 0,
   "epic": 6,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "channel 4",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/16/24_Hours_in_A%26E.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-24-legacy",
  "title": "24: Legacy",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "24: Legacy is an American television series created by Manny Coto and Evan Katz that aired on Fox network from February 5 to April 17, 2017. The series is a spin-off of 24 which was created by Joel Surnow and Robert Cochran and its premiere served as the lead-out program for Super Bowl LI before moving to its regular time slot of Monday at 8:00 p.m.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/24-_Legacy_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-24-live-another-day",
  "title": "24: Live Another Day",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "24: Live Another Day (also known as 24: Season 9 or 24: Day 9) is a 24 limited event television series that aired on Fox from May 5 to July 14, 2014. Sky 1 simulcast the premiere on May 6 in the United Kingdom and Ireland but switched to Wednesday nights for the rest of the episodes. It began airing in Australia on Network Ten on May 12, 2014.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/24_LAD_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-24-redemption",
  "title": "24: Redemption",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": "Fox",
  "rating": null,
  "description": "24: Redemption is a 2008 American television film based on the series 24. Redemption takes place almost four years after the sixth season and two months before the seventh season in real time between 3:00 pm and 5:00 pm (Sangala Time Zone) on Inauguration Day in the United States.",
  "vector": {
   "adrenaline": 10,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "action",
   "western",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/24_Redemption_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-30-rock",
  "title": "30 Rock",
  "startYear": 2006,
  "endYear": null,
  "creator": "Tina Fey",
  "genres": [
   "Comedy"
  ],
  "seasons": 7,
  "episodes": 138,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "30 Rock is an American satirical surrealist sitcom television series created by Tina Fey that originally aired on NBC from 2006 to 2013. The series, based on Fey's experiences as Saturday Night Live's head writer, takes place behind the scenes of a fictional live sketch comedy show depicted as airing on NBC.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 10,
   "heartwarming": 3,
   "dark": 1,
   "romantic": 2,
   "epic": 1,
   "cozy": 5,
   "weird": 8
  },
  "keywords": [
   "behind the scenes",
   "tv studio",
   "tina fey",
   "absurd"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/84/30rock.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-666-park-avenue",
  "title": "666 Park Avenue",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "666 Park Avenue is an American supernatural drama television series that aired on ABC from September 30, 2012, to July 13, 2013. The series was developed and produced by David Wilcox, and was loosely based upon the novel of the same name by author Gabriella Pierce.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "horror",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/8c/666_Park_Avenue.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-9-1-1-lone-star",
  "title": "9-1-1: Lone Star",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "9-1-1: Lone Star is an American procedural drama television series that aired on Fox from January 19, 2020, to February 3, 2025. Created by Ryan Murphy, Brad Falchuk, and Tim Minear, the series is a spin-off of the American procedural drama television series 9-1-1, and was ordered by Fox in May 2019.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a9/9-1-1_Lone_Star_%28logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-9-1-1-nashville",
  "title": "9-1-1: Nashville",
  "startYear": 2025,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "9-1-1: Nashville is an American procedural drama television series which premiered on ABC on October 9, 2025. It is the second spin-off of the 9-1-1 franchise, following 9-1-1: Lone Star, which concluded in February 2025. The series is created by Ryan Murphy, Tim Minear, and Rashad Raisani, with Brad Falchuk and Angela Bassett also serving as executive producers.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/9e/9-1-1_Nashville.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-a-good-girls-guide-to-murder",
  "title": "A Good Girl's Guide to Murder",
  "startYear": 2019,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "A Good Girl's Guide to Murder is a British mystery thriller television series based on the 2019 novel by Holly Jackson, adapted by Poppy Cogan, directed by Dolly Wells, and developed by Moonage Pictures and the German public broadcaster ZDFneo for BBC Three.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/dc/A_Good_Girl%27s_Guide_to_Murder_%28TV_series%29_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-a-killer-paradox",
  "title": "A Killer Paradox",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "A Killer Paradox (Korean: 살인자ㅇ난감; stylized with a red O or ieung) is a 2024 South Korean crime thriller dark comedy television series written by Kim Da-min, directed by Lee Chang-hee, and starring Choi Woo-shik, Son Suk-ku, and Lee Hee-joon.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/A_Killer_Paradox_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-a-knight-of-the-seven-kingdoms",
  "title": "A Knight of the Seven Kingdoms",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "A Knight of the Seven Kingdoms is an American fantasy drama television series created by Ira Parker and George R. R. Martin. A prequel to Game of Thrones (2011–2019), it is the third television series in the Game of Thrones franchise and is an adaptation of the Tales of Dunk and Egg series of novellas, beginning with The Hedge Knight.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f3/AKOTSK_TV_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-a-p-bio",
  "title": "A.P. Bio",
  "startYear": 2018,
  "endYear": 2019,
  "creator": "Mike O'Brien",
  "genres": [
   "Comedy"
  ],
  "seasons": 4,
  "episodes": 42,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "A.P. Bio is an American television sitcom that premiered on February 1, 2018, on NBC as a mid-season replacement. It aired on NBC for two seasons until June 13, 2019, and moved to Peacock for its subsequent seasons.",
  "vector": {
   "adrenaline": 0,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 0,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/AP_Bio_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-abbott-elementary",
  "title": "Abbott Elementary",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Abbott Elementary is an American mockumentary sitcom television series created by Quinta Brunson for ABC. It stars Brunson as Janine Teagues, a perpetually optimistic second-grade teacher at the underfunded Abbott Elementary, a fictional predominantly black public school in West Philadelphia.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 3,
   "epic": 1,
   "cozy": 10,
   "weird": 2
  },
  "keywords": [
   "school",
   "mockumentary",
   "teachers",
   "abc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Abbott_Elementary_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-abc-afterschool-special",
  "title": "ABC Afterschool Special",
  "startYear": 1972,
  "endYear": 1997,
  "creator": null,
  "genres": [
   "Animation",
   "Action"
  ],
  "seasons": 25,
  "episodes": 154,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "ABC Afterschool Special is an American anthology television series that aired on ABC from October 4, 1972, to January 23, 1997, usually in the late afternoon on weekdays. Most episodes were dramatically presented situations, often controversial, of interest to children and teenagers. Several episodes were either in animated form or presented as documentaries.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "action",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/ABC_Afterschool_Special_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-abc-weekend-special",
  "title": "ABC Weekend Special",
  "startYear": 1977,
  "endYear": 1997,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Family"
  ],
  "seasons": 17,
  "episodes": 132,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "ABC Weekend Special is a weekly 30-minute American television anthology series for children that aired Saturday mornings on ABC from September 10, 1977 to August 30, 1997, which featured a wide variety of stories that were both live-action and animated.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "animation",
   "action",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a1/ABC_Weekend_Special_3D_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-adventure-time",
  "title": "Adventure Time",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Adventure Time is an American animated fantasy television series created by Pendleton Ward for Cartoon Network. It follows the adventures of a boy named Finn (Jeremy Shada) and his best friend and adoptive brother Jake (John DiMaggio)—a dog with the power to change size and shape at will.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 9,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 3,
   "epic": 7,
   "cozy": 7,
   "weird": 10
  },
  "keywords": [
   "finn and jake",
   "ooo",
   "deceptively deep",
   "cartoon network"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-adventures-in-wonderland",
  "title": "Adventures in Wonderland",
  "startYear": 1992,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Adventures in Wonderland is an American live-action/puppet musical television series based on the novels Alice's Adventures in Wonderland (1865) and Through the Looking-Glass (1871) by Lewis Carroll as well as the 1951 animated film.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 10,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Disney_Adventures_in_Wonderland_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-alcoa-presents-one-step-beyond",
  "title": "Alcoa Presents One Step Beyond",
  "startYear": 1959,
  "endYear": 1961,
  "creator": "Merwin Gerard",
  "genres": [
   "Sci-Fi"
  ],
  "seasons": 3,
  "episodes": 97,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Alcoa Presents: One Step Beyond (also known as One Step Beyond) is an American anthology series created by Merwin Gerard. The original series was broadcast for three seasons by the American Broadcasting Company (ABC) from January 1959 to July 1961.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b7/One_Step_Beyond.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-alias",
  "title": "Alias",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Alias is an American spy action thriller television series created by J. J. Abrams that was broadcast on ABC for five seasons from September 30, 2001, to May 22, 2006. It stars Jennifer Garner as Sydney Bristow, a double agent for the Central Intelligence Agency posing as an operative for SD-6, a worldwide criminal and espionage organization.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/43/Alias_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-alice-in-borderland",
  "title": "Alice in Borderland",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Alice in Borderland (Japanese: 今際の国のアリス, Hepburn: Imawa no Kuni no Arisu; lit. 'Arisu in the present world') is a Japanese science fiction thriller drama television series based on the manga of the same name by Haro Aso.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 5,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "death games",
   "tokyo",
   "japanese",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Alice_in_Borderland_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-alphas",
  "title": "Alphas",
  "startYear": 2011,
  "endYear": 2012,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 24,
  "status": "Ended",
  "network": "Syfy",
  "rating": null,
  "description": "Alphas is an American superhero drama television series created by Zak Penn and Michael Karnow. It follows a group of people with superhuman abilities, known as \"Alphas\", as they work to prevent crimes committed by other Alphas. The series was broadcast in the United States on the cable channel Syfy and was a co-production between BermanBraun and Universal Cable Productions.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 2,
   "funny": 3,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "syfy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/Alphasintertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-altered-carbon",
  "title": "Altered Carbon",
  "startYear": 2002,
  "endYear": null,
  "creator": "Laeta Kalogridis",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Altered Carbon is an American cyberpunk television series created by Laeta Kalogridis and based on the 2002 novel of the same title by English author Richard K. Morgan. In a world where consciousness can be transferred to different bodies, Takeshi Kovacs, a former soldier turned investigator, is released from prison in order to solve a murder.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "sci-fi",
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-amazing-stories",
  "title": "Amazing Stories",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Fantasy",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Amazing Stories is an American anthology television series created by Steven Spielberg, that originally ran on NBC in the United States from September 29, 1985, to April 10, 1987. The series was nominated for 12 Emmy Awards and won five. The first-season episode \"The Amazing Falsworth\" earned writer Mick Garris an Edgar Award for Best Episode in a TV Series.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 2,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/AmazingStoriesTVseries.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-american-dad",
  "title": "American Dad!",
  "startYear": 2005,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "American Dad! is an American animated sitcom created by Seth MacFarlane, Mike Barker and Matt Weitzman for Fox and TBS. The series premiered on February 6, 2005, following Super Bowl XXXIX, with the rest of the first season airing from May 1 of the same year.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4d/American_dad_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-american-gods",
  "title": "American Gods",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "American Gods is an American fantasy drama television series based on Neil Gaiman's 2001 novel and developed by Bryan Fuller and Michael Green for the premium cable network Starz. Produced by Fremantle North America and distributed by Lionsgate Television, the first season premiered on April 30, 2017.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 9,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/American_Gods_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-american-horror-story",
  "title": "American Horror Story",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "American Horror Story (AHS) is an American horror anthology television series created by Ryan Murphy and Brad Falchuk for the cable network FX.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 9,
   "funny": 3,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 9
  },
  "keywords": [
   "anthology",
   "ryan murphy",
   "camp",
   "fx"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/39/American_Horror_Story_%28FX_television_series%29_red_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-american-vandal",
  "title": "American Vandal",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "American Vandal is an American mockumentary television series created by Dan Perrault and Tony Yacenda that premiered on September 15, 2017, on Netflix. The series is a parody of true crime documentaries such as Making a Murderer and Serial. On October 26, 2018, Netflix canceled the series after two seasons.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/American_Vandal_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-amphibia",
  "title": "Amphibia",
  "startYear": 2019,
  "endYear": null,
  "creator": "Matt Braly",
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Amphibia is an American animated fantasy television series created by Matt Braly that aired on Disney Channel from June 17, 2019, to May 14, 2022. The series features the voices of Brenda Song, Justin Felbinger, Bill Farmer, Amanda Leighton, Anna Akana, Troy Baker, Haley Tju, and Keith David.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Amphibia_series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-andor",
  "title": "Andor",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "A Star Wars prequel series following thief-turned-rebel Cassian Andor in the five years before Rogue One, as a scattered rebellion hardens into an alliance. Grounded, political, and widely called the franchise's most adult drama.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "star wars",
   "rebellion",
   "grounded",
   "disney+"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-angel",
  "title": "Angel",
  "startYear": 1999,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Crime",
   "Thriller",
   "Action",
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Angel is an American supernatural drama television series, a spinoff of Buffy the Vampire Slayer. The series was created by Buffy's creator, writer and director Joss Whedon, in collaboration with David Greenwalt. It aired on The WB from October 5, 1999, to May 19, 2004, consisting of five seasons and 110 episodes. Like Buffy, it was produced by Whedon's production company, Mutant Enemy.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Angel_%28Mutant_Enemy_television_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-angels-in-america",
  "title": "Angels in America",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Angels in America is a 2003 American miniseries directed by Mike Nichols and based on the Pulitzer Prize–winning 1991 play of the same name by Tony Kushner. Set in 1985, the miniseries revolves around six New Yorkers whose lives intersect. At its core, it is the fantastical story of Prior Walter, a gay man living with AIDS who is visited by an angel.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/Angels_In_America%2C_2003_TV_mini_series%2C_DVD_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-another-life",
  "title": "Another Life",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Another Life is an American science fiction drama television series created by Aaron Martin, which premiered on Netflix on July 25, 2019. The series stars Katee Sackhoff, Selma Blair, Justin Chatwin, Samuel Anderson, Elizabeth Ludlow, Blu Hunt, A.J.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 0,
   "epic": 9,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/Another_Life_%282019_TV_series%29_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-arcane",
  "title": "Arcane",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Arcane (titled onscreen as Arcane: League of Legends) is an animated steampunk, action-adventure television series created by Christian Linke and Alex Yee. It was produced by the French animation studio Fortiche, under the supervision of Riot Games, and distributed by Netflix.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "league of legends",
   "sisters",
   "steampunk",
   "netflix"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-archer",
  "title": "Archer",
  "startYear": 2009,
  "endYear": null,
  "creator": "Adam Reed",
  "genres": [
   "Animation",
   "Crime",
   "Comedy",
   "Action",
   "Adventure"
  ],
  "seasons": 14,
  "episodes": 145,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Archer is an American adult animated sitcom created by Adam Reed for FX that aired from September 17, 2009, to December 17, 2023. The show follows the exploits of bumbling, volatile secret agent Sterling Archer (voiced by H. Jon Benjamin) and his dysfunctional colleagues.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/af/Archer_2009_TV_series_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-arrested-development",
  "title": "Arrested Development",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "A formerly wealthy, wildly dysfunctional family loses everything when its patriarch is jailed for fraud, and the one responsible son tries to hold them together. Dense, fast, endlessly quotable deadpan comedy.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 10,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 1,
   "epic": 1,
   "cozy": 6,
   "weird": 7
  },
  "keywords": [
   "bluth family",
   "narrated",
   "running gags",
   "cult"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-arrested-development-2003",
  "title": "Arrested Development",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Arrested Development is an American satirical television sitcom created by Mitchell Hurwitz that debuted on Fox on November 2, 2003. It follows the formerly wealthy, dysfunctional Bluth family, and is presented in a serialized format, incorporating handheld camera work, voice-over narration, archival photos, and historical footage, while maintaining numerous running gags and catchphrases.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 1,
   "funny": 10,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 2,
   "epic": 1,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Arrested_Development.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ascension",
  "title": "Ascension",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ascension is a 2014 science fiction mystery drama television miniseries which aired on CBC in Canada and Syfy in the United States. It consisted of six episodes, grouped into three chapters of two episodes each. The show was created by Philip Levens and Adrian A. Cruz. The pilot was written and executive produced by Philip Levens, who served as the showrunner.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5b/AscensionSeriesIntertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-atlanta",
  "title": "Atlanta",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Atlanta is an American surrealist comedy-drama television series created by Donald Glover for FX. The series follows college dropout and music manager Earnest \"Earn\" Marks (Glover) and rapper Alfred \"Paper Boi\" Miles (Brian Tyree Henry) as they navigate a strange, apparently otherworldly Atlanta hip hop scene.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 2,
   "cozy": 2,
   "weird": 10
  },
  "keywords": [
   "rap",
   "surreal",
   "donald glover",
   "fx"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/04/Atlanta_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-attack-on-titan",
  "title": "Attack on Titan",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Horror"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin; lit. 'The Advancing Giant(s)') is a Japanese dark fantasy anime television series based on the 2009–2021 manga series Attack on Titan by Hajime Isayama. The series premiered on April 7, 2013, and concluded on November 5, 2023.",
  "vector": {
   "adrenaline": 9,
   "brainy": 8,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 10,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "anime",
   "titans",
   "war",
   "phenomenon"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-avatar-the-last-airbender",
  "title": "Avatar: The Last Airbender",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "In a world of four nations that bend the elements, a 12-year-old Avatar named Aang wakes from a century in ice to stop the Fire Nation's war. Animated adventure with real stakes and real heart.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 2,
   "epic": 9,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "bending",
   "aang",
   "all-ages masterpiece",
   "nickelodeon"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-avatar-the-last-airbender-2024",
  "title": "Avatar: The Last Airbender",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Avatar: The Last Airbender is an American fantasy action-adventure television series developed by Albert Kim for Netflix. It is a live-action adaptation of the animated television series created by Michael Dante DiMartino and Bryan Konietzko for Nickelodeon.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 5,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Avatar_The_Last_Airbender_%282024_TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bait",
  "title": "Bait",
  "startYear": 2026,
  "endYear": null,
  "creator": "Riz Ahmed",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Bait is a 2026 comedy-drama television series created by Riz Ahmed. It was developed at Jax Media in association with Left Handed Films for Amazon MGM Studios. The series stars Ahmed, Guz Khan, Ritu Arya, and Sheeba Chaddha. It had its world premiere at the 2026 Sundance Film Festival, and was released on 25 March 2026 on Amazon Prime Video.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 2,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Bait_poster_for_Prime_Video.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ballers",
  "title": "Ballers",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ballers is an American sports comedy-drama series created by Stephen Levinson that aired for five seasons on HBO from June 21, 2015, to October 13, 2019. It stars Dwayne Johnson as a retired NFL player who must navigate his new career as the financial manager of other NFL players.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 4,
   "epic": 3,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/Ballers_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-band-of-brothers",
  "title": "Band of Brothers",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": 10,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Band of Brothers is a 2001 American war drama miniseries based on historian Stephen E. Ambrose's 1992 non-fiction book of the same name. It was created by Steven Spielberg and Tom Hanks, who also served as executive producers, and who had collaborated on the 1998 World War II film Saving Private Ryan, from which the series got many of its visual cues and crew members.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "action",
   "war",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/BandofBrothersIntertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-banged-up-abroad",
  "title": "Banged Up Abroad",
  "startYear": 2006,
  "endYear": 2022,
  "creator": "Bart Layton",
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": 133,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Banged Up Abroad (rebadged as Locked Up Abroad in Asia and the United States, and Jailed Abroad in India, for the National Geographic Channel) is a British documentary/docudrama television series created by Bart Layton that was produced for Channel 5 and that premiered in March 2006.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Banged_Up_Abroad.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-banshee",
  "title": "Banshee",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Banshee is an American action television series created by Jonathan Tropper and David Schickler that aired on Cinemax from January 11, 2013, to May 20, 2016, over four seasons and 38 episodes.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/16/Banshee_%28Home_Box_Office%2C_Inc%29_blood_red_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-barnaby-jones",
  "title": "Barnaby Jones",
  "startYear": 1973,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Barnaby Jones is an American detective series created by Quinn Martin for QM Productions that aired on CBS from January 28, 1973, to April 3, 1980. It stars Buddy Ebsen as Barnaby Jones, a private investigator who comes out of retirement in his mid-sixties to operate a detective agency in Los Angeles, and Lee Meriwether as Betty Jones, his widowed daughter-in-law and secretary.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Barnaby_jones.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-barry",
  "title": "Barry",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Barry is an American crime tragicomedy television series created by Alec Berg and Bill Hader for HBO. Set and primarily filmed in Los Angeles, California, the series stars Hader as Barry Berkman, a depressed hitman who joins an acting class while hunting a target, and begins to question his path in life as he deals with his criminal associates while navigating his new relationships.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 8,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "hitman actor",
   "dark comedy",
   "hbo",
   "bill hader"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Barry_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-baskets",
  "title": "Baskets",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Baskets is an American comedy drama television series that premiered on FX on January 21, 2016. The series was co-created by Louis C.K., Zach Galifianakis, and Jonathan Krisel; Krisel is also the showrunner and director.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 4,
   "epic": 1,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/Baskets_FX.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bates-motel",
  "title": "Bates Motel",
  "startYear": 1959,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Drama",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Bates Motel is an American psychological horror drama television series based on characters from the 1959 novel Psycho by Robert Bloch that aired on A&E from March 18, 2013, to April 24, 2017. It was developed by Carlton Cuse, Kerry Ehrin, and Anthony Cipriano.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "psycho prequel",
   "norman",
   "mother",
   "a&e"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/23/BatesMotelTitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-batfink",
  "title": "Batfink",
  "startYear": 1966,
  "endYear": 1967,
  "creator": "Hal Seeger",
  "genres": [
   "Horror",
   "Animation",
   "Superhero",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 100,
  "status": "Ended",
  "network": "KTLA and syndication",
  "rating": null,
  "description": "Batfink is an American animated television series, consisting of five-minute shorts, that first aired in April 1966. The 100-episode series was quickly created by Hal Seeger, starting in 1966, to send up the popular Batman and Green Hornet television series, which had premiered the same year.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 6,
   "funny": 4,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "horror",
   "animation",
   "ktla and syndication",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Bf%26karate.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-batman-the-animated-series",
  "title": "Batman: The Animated Series",
  "startYear": 1992,
  "endYear": 1995,
  "creator": "Eric Radomski Bruce W. Timm",
  "genres": [
   "Animation",
   "Action",
   "Crime"
  ],
  "seasons": 2,
  "episodes": 85,
  "status": "Ended",
  "network": "Fox Kids",
  "rating": null,
  "description": "Batman: The Animated Series (often shortened as Batman TAS or BTAS) is an American animated superhero television series based on the DC Comics superhero Batman. Developed by Bruce Timm and Eric Radomski, and produced by Warner Bros. Animation, it originally aired on Fox Kids from September 5, 1992, to September 15, 1995, with a total of 85 episodes.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 3,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "dark deco",
   "gotham",
   "definitive batman",
   "nineties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Batman-_The_Animated_Series_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-battlestar-galactica",
  "title": "Battlestar Galactica",
  "startYear": 2004,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Battlestar Galactica is an American military science fiction television series, and part of the Battlestar Galactica franchise. The show was developed by Ronald D. Moore and executive produced by Moore and David Eick as a \"re-imagining\" of the 1978 Battlestar Galactica television series created by Glen A. Larson.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 3,
   "epic": 9,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "cylons",
   "space",
   "survival",
   "reimagined"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/Battlestar_Galactica_%282004_TV_series%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-beartown",
  "title": "Beartown",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Beartown (Swedish: Björnstad) is a five-episode 2020 drama series directed by Peter Grönlund. Based on Fredrik Backman's 2016 novel of the same name, the series centres on the fallout of a violent incident between two teenagers in a rural, declining town in Northern Sweden, where hockey is not just a sport but a way of life.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Beartown_TV_series_2020_promotional_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-beauty-the-beast",
  "title": "Beauty & the Beast",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Crime",
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Beauty & the Beast is a science fiction police procedural television series filmed in Toronto, Canada, very loosely inspired by the 1987 CBS series of the same name. Developed by Sherri Cooper-Landsman and Jennifer Levin, the show premiered on The CW on October 11, 2012, and ended its four season-run on September 15, 2016.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Beauty_and_the_Beast_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-beef",
  "title": "Beef",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Comedy",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Beef is an American comedy drama anthology television series created by Lee Sung Jin for Netflix. Season 1 stars Steven Yeun and Ali Wong as Danny Cho and Amy Lau, two strangers whose involvement in a road rage incident escalates into a prolonged feud. Appearing in supporting roles are Joseph Lee, Young Mazino, David Choe, and Patti Yasutake.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 7,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "road rage",
   "feud",
   "a24",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/71/Beef_TV_series_%28logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-below-deck-down-under",
  "title": "Below Deck Down Under",
  "startYear": 2022,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Below Deck Down Under is an American reality television series that premiered on Peacock on March 17, 2022. The show is the third spin-off of Below Deck, following Below Deck Mediterranean and Below Deck Sailing Yacht.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Below_Deck_Down_Under_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ben-and-kate",
  "title": "Ben and Kate",
  "startYear": 2012,
  "endYear": 2013,
  "creator": "Dana Fox",
  "genres": [
   "Comedy"
  ],
  "seasons": 1,
  "episodes": 16,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Ben and Kate is an American single-camera sitcom television series created by Dana Fox. It ran on Fox from September 25, 2012 to January 22, 2013, as part of the 2012–13 television season. The series stars Dakota Johnson and Nat Faxon as siblings. It was produced by 20th Century Fox Television and Chernin Entertainment.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 3,
   "epic": 0,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Ben%26Kate_promotional_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ben-fogle-new-lives-in-the-wild",
  "title": "Ben Fogle: New Lives in the Wild",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Adventure"
  ],
  "seasons": null,
  "episodes": 134,
  "status": "Running",
  "network": "Channel 5 (UK)",
  "rating": null,
  "description": "Ben Fogle: New Lives in the Wild is a television series on Channel 5 hosted by English adventurer Ben Fogle and produced by Motion Content Group and Renegade Pictures. The programme shows, in a series of unconnected episodes, Fogle meeting people who have adopted 'alternative' lifestyles that are primarily 'off-the-grid' in some of the more remote locations on Earth.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 8,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "adventure",
   "channel 5 (uk)",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-benefits-street",
  "title": "Benefits Street",
  "startYear": 2014,
  "endYear": 2015,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": 9,
  "status": "Ended",
  "network": "Channel 4",
  "rating": null,
  "description": "Benefits Street is a British documentary series broadcast on Channel 4. It followed the lives of benefit claimants and showed them committing crimes, including a demonstration of how to shoplift, and portrayed a situation in which people are dependent on benefits and voluntarily refuse to seek employment.",
  "vector": {
   "adrenaline": 1,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "documentary",
   "channel 4",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/Benefits_Street.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-better-call-saul",
  "title": "Better Call Saul",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Better Call Saul is an American neo-noir legal crime drama television series created by Vince Gilligan and Peter Gould for AMC. Part of the Breaking Bad franchise, it is a spin-off of Gilligan's previous series, Breaking Bad (2008–2013), to which it serves primarily as a prequel, with some scenes taking place during and after the events of Breaking Bad.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "prequel",
   "lawyer",
   "slow burn",
   "tragedy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Better_Call_Saul_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-better-things",
  "title": "Better Things",
  "startYear": 2016,
  "endYear": null,
  "creator": "{{plain list|",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Better Things is an American comedy drama television series created by Pamela Adlon and Louis C.K., which ran for five seasons between 2016 and 2022 on FX. It stars Adlon as a divorced actress who raises her three daughters—played by Mikey Madison, Hannah Alligood and Olivia Edward—on her own. Better Things premiered on FX on September 8, 2016.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 4,
   "epic": 1,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/46/Better_Things_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-between-the-lions",
  "title": "Between the Lions",
  "startYear": 2000,
  "endYear": 2010,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 10,
  "episodes": 130,
  "status": "Ended",
  "network": "PBS Kids",
  "rating": null,
  "description": "Between the Lions is an American educational children's television series designed to promote reading that combines live-action, sketch comedy, animation, and puppetry.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "pbs kids",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-beyond-belief-fact-or-fiction",
  "title": "Beyond Belief: Fact or Fiction",
  "startYear": 1997,
  "endYear": 2002,
  "creator": "Lynn Lehmann",
  "genres": [
   "Sci-Fi",
   "Mystery"
  ],
  "seasons": 6,
  "episodes": 57,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Beyond Belief: Fact or Fiction is an American television anthology series created by Lynn Lehmann, presented by Dick Clark Productions, and produced and aired by the Fox network from 1997 to 2002. Each episode features stories, all of which appear to defy logic, and some of which are allegedly based on actual events.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fe/Beyond_Belief-_Fact_or_Fiction_%28television_show_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-big-little-lies",
  "title": "Big Little Lies",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Mystery",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Big Little Lies may refer to: Big Little Lies (novel), a 2014 novel written by Liane Moriarty Big Little Lies (TV series), a 2017 American television series based on the novel adapted by David E. Kelley \"Big Little Lies\", an episode of Queer Eye (2018 TV series)",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "monterey",
   "mothers",
   "secret",
   "hbo"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-big-little-lies-2014",
  "title": "Big Little Lies",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Big Little Lies is an American psychological dark comedy drama television series based on the 2014 novel by Liane Moriarty. Created and written by David E. Kelley, it aired on HBO from February 19, 2017, to July 21, 2019, encompassing 14 episodes and two seasons, although it was originally billed as a miniseries.",
  "vector": {
   "adrenaline": 5,
   "brainy": 10,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "mystery",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/55/Big_Little_Lies_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-big-love",
  "title": "Big Love",
  "startYear": 2006,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Big Love is an American drama television series created by Mark V. Olsen and Will Scheffer that aired on HBO from 2006 to 2011. It stars Bill Paxton as the patriarch of a fundamentalist Mormon family in contemporary Utah that practices polygamy, with Jeanne Tripplehorn, Chloë Sevigny, and Ginnifer Goodwin portraying his wives.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/96/Big_love_ver2.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-big-time-rush",
  "title": "Big Time Rush",
  "startYear": 2009,
  "endYear": null,
  "creator": "Scott Fellows",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Big Time Rush is an American musical sitcom television series created by Scott Fellows that originally aired on Nickelodeon from November 28, 2009, to July 25, 2013, featuring the band Big Time Rush portrayed as a fictional version of themselves, similar to The Monkees.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 2,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Big_Time_Rush_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bill-hader",
  "title": "Bill Hader",
  "startYear": 1978,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "William Thomas Hader Jr. (born June 7, 1978) is an American actor, comedian, and filmmaker. He was a cast member on the NBC sketch comedy series Saturday Night Live from 2005 to 2013, for which he received four Primetime Emmy Award nominations and a Peabody Award.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 3,
   "epic": 4,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Bill_Hader_%2829419489470%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bill-nye",
  "title": "Bill Nye",
  "startYear": 1955,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "William Sanford Nye (; born November 27, 1955) is an American science communicator, television presenter, and former mechanical engineer. He is best known as the host of the science education television show Bill Nye the Science Guy (1993–1998) and as a science educator in pop culture.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 2,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Bill_Nye_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bionic-woman",
  "title": "Bionic Woman",
  "startYear": 2007,
  "endYear": null,
  "creator": "David Eick",
  "genres": [
   "Sci-Fi",
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Bionic Woman is an American science fiction drama television series that aired on NBC from September 26 to November 28, 2007, which was created by David Eick, under NBC Universal Television Studio, GEP Productions, and David Eick Productions.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bionic_Woman_TV_Series_Logo_%282007%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bittomo-heroine-kirameki-powers",
  "title": "Bittomo × Heroine Kirameki Powers!",
  "startYear": 2021,
  "endYear": 2022,
  "creator": "TOMY OLM",
  "genres": [
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": 50,
  "status": "Ended",
  "network": "TXN (TV Tokyo)",
  "rating": null,
  "description": "Bittomo × Heroine Kirameki Powers! (ビッ友x戦士 キラメキパワーズ！, Bittomo Senshi Kirameki Pawāzu!) is a Japanese tokusatsu TV drama series that began airing on July 11, 2021. It is the fifth and final installment for the Girls × Heroine Series produced by Takara Tomy and OLM, Inc. (with the assistance of Shogakukan and EXPG Studio). The series stars Tsubaki Nagayama and Hiiro Fukasawa.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 4,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "family",
   "drama",
   "txn (tv tokyo)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Bittomo_x_Heroine_Kirameki_Powers_Visual_2.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-black-blood-brothers",
  "title": "Black Blood Brothers",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Black Blood Brothers, also known as BBB, is a light novel series written by Kōhei Azano and illustrated by Yuuya Kusaka. In 2006, Studio Live and Group TAC produced an anime based on the series. It is directed by Hiroaki Yoshikawa. It was licensed for North American release by Funimation Entertainment, with the first DVD being released in February 2008.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "animation",
   "animated",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-black-lightning",
  "title": "Black Lightning",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Crime",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Black Lightning is an American superhero drama television series, developed by Salim Akil, that premiered on The CW on January 16, 2018, and concluded on May 24, 2021. It is based on the character of the same name, created by Jenny Blake Isabella with Trevor Von Eeden, featured in publications of DC Comics.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/af/Black_Lighting_%28Berlanti_Productions%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-black-mirror",
  "title": "Black Mirror",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Horror"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Black Mirror is a British anthology television series created by Charlie Brooker. Most episodes are speculative fiction, set in near-future dystopias containing sci-fi technology. The series is inspired by The Twilight Zone and uses the themes of technology and media to comment on contemporary social issues.",
  "vector": {
   "adrenaline": 4,
   "brainy": 10,
   "scary": 5,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 9
  },
  "keywords": [
   "anthology",
   "technology",
   "dystopia",
   "twilight zone heir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Black_Mirror_%28British_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-black-ish",
  "title": "Black-ish",
  "startYear": 2014,
  "endYear": null,
  "creator": "Kenya Barris",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Black-ish (stylized as black·ish) is an American sitcom television series created by Kenya Barris. It aired on ABC from September 24, 2014, to April 19, 2022, running for eight seasons with 175 episodes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 2,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/50/Blackish_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-blakes-7",
  "title": "Blake's 7",
  "startYear": 1978,
  "endYear": null,
  "creator": "Terry Nation",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Western"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Blake's 7 is a British science fiction television programme produced by the BBC. Four series of thirteen 50-minute episodes were broadcast on BBC1 between 1978 and 1981.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Blake%27s_7_%28title_card%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-blaze-and-the-monster-machines",
  "title": "Blaze and the Monster Machines",
  "startYear": 2014,
  "endYear": null,
  "creator": "Jeff Borkin Ellen Martin",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Blaze and the Monster Machines is an animated children's television series. It premiered on Nickelodeon on October 13, 2014. The show revolves around Blaze, a monster truck, and his human driver, AJ, as they have adventures in Axle City and learn about various STEM concepts that help them on their way.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/30/Blaze_and_the_Monster_Machines_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bless-the-harts",
  "title": "Bless the Harts",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Bless the Harts is an American animated sitcom created by Emily Spivey for Fox's Animation Domination programming block. Premiering on September 29, 2019, the series was executive produced by Spivey, Andy Bobrow, Phil Lord, Christopher Miller, Kristen Wiig, and Seth Cohen. The series is a joint production between Fox Entertainment and 20th Television.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 1,
   "epic": 5,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Bless_the_Harts_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-blood-treasure",
  "title": "Blood & Treasure",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Blood & Treasure is an American action adventure television series created by Matthew Federman and Stephen Scaia that premiered on May 21, 2019, on CBS. Federman and Scaia also serve as writers and executive producers alongside Taylor Elmore, Ben Silverman, Marc Webb, and Mark Vlasic. In June 2019, CBS renewed the series for a second season.",
  "vector": {
   "adrenaline": 10,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "action",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/Blood_%26_Treasure_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-blue-eye-samurai",
  "title": "Blue Eye Samurai",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Blue Eye Samurai is an adult animated historical action television series created and written by wife-and-husband team Amber Noizumi and Michael Green, with supervising director and series producer Jane Wu. It was animated and co-produced by French studio Blue Spirit. The first season premiered on Netflix on November 3, 2023.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "revenge",
   "edo japan",
   "sword",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/Blue_Eye_Samurai_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-blue-planet-ii",
  "title": "Blue Planet II",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Blue Planet II is a 2017 British nature documentary series on marine life produced as a co-production between the BBC Natural History Unit, BBC America, Tencent, WDR, France Télévisions and CCTV-9 in partnership with The Open University. It is a successor to The Blue Planet (2001) with naturalist Sir David Attenborough reprising his role as the narrator. Blue Planet II received acclaim.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 9,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "ocean",
   "attenborough",
   "bbc",
   "nature"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/BBC_Blue_Planet_II_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bluey",
  "title": "Bluey",
  "startYear": null,
  "endYear": null,
  "creator": "Joe Brumm",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Bluey is an Australian animated television series aimed at preschool children, created by Joe Brumm and produced by Ludo Studio in Queensland. It was commissioned by the Australian Broadcasting Corporation and the British Broadcasting Corporation, with BBC Studios holding global distribution and merchandising rights. Bluey premiered on ABC Kids on 1 October 2018.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 10,
   "dark": 0,
   "romantic": 2,
   "epic": 1,
   "cozy": 10,
   "weird": 2
  },
  "keywords": [
   "australian",
   "parenting",
   "seven-minute gems",
   "kids and adults"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Bluey_%282018_TV_series%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bo-burnham-inside",
  "title": "Bo Burnham: Inside",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Bo Burnham: Inside is a 2021 musical special written, directed, filmed, edited, and performed by American comedian Bo Burnham. Created alone by Burnham in the guest house of his Los Angeles home during the COVID-19 pandemic, it was released on Netflix on May 30, 2021.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-boardwalk-empire",
  "title": "Boardwalk Empire",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Boardwalk Empire is an American period crime drama television series created by Terence Winter for the premium cable channel HBO. The series is set chiefly in Atlantic City, New Jersey, during the Prohibition era of the 1920s. The series stars Steve Buscemi as Nucky Thompson.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "prohibition",
   "gangsters",
   "atlantic city",
   "period"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Boardwalk_Empire_2010_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bodyguard",
  "title": "Bodyguard",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Bodyguard is a British political thriller television series created and written by Jed Mercurio and produced by World Productions as part of ITV Studios for the BBC.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "protection officer",
   "politics",
   "bbc",
   "tense"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Bodyguard_tv_series_2018_titlecard.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bojack-horseman",
  "title": "BoJack Horseman",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "BoJack Horseman is an American adult animated tragicomedy television series created by Raphael Bob-Waksberg. It stars the voices of Will Arnett, Amy Sedaris, Alison Brie, Paul F. Tompkins, and Aaron Paul.",
  "vector": {
   "adrenaline": 1,
   "brainy": 9,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 2,
   "epic": 2,
   "cozy": 2,
   "weird": 8
  },
  "keywords": [
   "hollywood",
   "depression",
   "satire",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cc/BoJack_Horseman_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bored-to-death",
  "title": "Bored to Death",
  "startYear": 2009,
  "endYear": 2011,
  "creator": "Jonathan Ames",
  "genres": [
   "Crime",
   "Comedy",
   "Mystery",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 24,
  "status": "Ended",
  "network": "HBO",
  "rating": null,
  "description": "Bored to Death is an American comedy series that ran on HBO from September 20, 2009, to November 28, 2011. The show was created by author Jonathan Ames, and stars Jason Schwartzman as a fictional Jonathan Ames—a writer based in Brooklyn, New York City, who moonlights as an unlicensed private detective.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 1,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "hbo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Bored_to_Death_title_screen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-boyfriend-on-demand",
  "title": "Boyfriend on Demand",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Comedy",
   "Romance",
   "Rom-Com",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Boyfriend on Demand (Korean: 월간남친) is a 2026 South Korean science fantasy romantic comedy television series written by Namgung Do-young and directed by Kim Jung-sik. Starring Jisoo and Seo In-guk, it follows a burnt-out webtoon producer whose reality blurs after she subscribes to a virtual dating service.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Boyfriend_on_Demand_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-bravestarr",
  "title": "BraveStarr",
  "startYear": 1987,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Western",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "BraveStarr is an American space Western animated television series that aired 65 episodes from September 1987 to February 1988 in syndication. The show was broadcast a year after Mattel had released a line of Bravestarr action figures. BraveStarr was the last animated series produced by Filmation and Group W Productions before Filmation shut down in 1989.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/Bravestarrtitlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-breaking-bad",
  "title": "Breaking Bad",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Thriller"
  ],
  "seasons": 5,
  "episodes": 62,
  "status": "Ended",
  "network": "AMC",
  "rating": "TV-MA",
  "description": "Breaking Bad is an American neo-Western crime drama television series created by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an overqualified high school chemistry teacher who, after being diagnosed with stage-three lung cancer, begins producing and selling methamphetamine with former student Jesse Pinkman (Aaron Paul) to…",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 10,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "cartel",
   "descent",
   "antihero",
   "albuquerque"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-bridgerton",
  "title": "Bridgerton",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance",
   "Drama",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Bridgerton is an American alternative history, Regency romance television series created by Chris Van Dusen for Netflix. Based on the book series of the same name by Julia Quinn, it is Shondaland's first scripted show for Netflix.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 10,
   "epic": 6,
   "cozy": 5,
   "weird": 1
  },
  "keywords": [
   "regency",
   "shondaland",
   "gossip",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/Bridgerton_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-broadchurch",
  "title": "Broadchurch",
  "startYear": 2013,
  "endYear": null,
  "creator": "Chris Chibnall",
  "genres": [
   "Drama",
   "Crime",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Broadchurch is a British crime drama television series broadcast on ITV for three series between 2013 and 2017. It was created by Chris Chibnall, who acted as an executive producer and wrote all 24 episodes; it was produced by Kudos in association with Imaginary Friends Productions Ltd.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "seaside town",
   "murder",
   "grief",
   "british"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Broadchurch_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-brooklyn-nine-nine",
  "title": "Brooklyn Nine-Nine",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-14",
  "description": "Brooklyn Nine-Nine is an American police procedural sitcom that aired on Fox from September 17, 2013, to May 20, 2018, and later on NBC, from January 10, 2019, to September 16, 2021, for eight seasons and 153 episodes. Created by Dan Goor and Michael Schur and produced by Fremulon, Dr.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 0,
   "romantic": 4,
   "epic": 1,
   "cozy": 9,
   "weird": 3
  },
  "keywords": [
   "precinct",
   "workplace",
   "ensemble",
   "feel-good cop comedy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Brooklyn_Nine-Nine_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-buffy-the-vampire-slayer",
  "title": "Buffy the Vampire Slayer",
  "startYear": 1992,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Comedy",
   "Action",
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Buffy the Vampire Slayer is an American supernatural horror drama television series created by Joss Whedon. The show's concept is based on the 1992 film written by Whedon, although they are separate and distinct productions. Whedon served as executive producer and showrunner of the series under his production company Mutant Enemy Productions.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Buffy_the_vampire_slayer.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-burn-notice",
  "title": "Burn Notice",
  "startYear": 2007,
  "endYear": null,
  "creator": "Matt Nix",
  "genres": [
   "Crime",
   "Comedy",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": 7,
  "episodes": 111,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Burn Notice is an American spy comedy-drama television series created by Matt Nix. The show originally aired on the USA Network from June 28, 2007, to September 12, 2013. The show stars Jeffrey Donovan, Gabrielle Anwar, Bruce Campbell, Sharon Gless, and (beginning in season four) Coby Bell.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Burn_Notice_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-busted",
  "title": "Busted!",
  "startYear": 2018,
  "endYear": 2021,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery"
  ],
  "seasons": 3,
  "episodes": 28,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Busted! (Korean: 범인은 바로 너; RR: Beomineun baro neo) is a South Korean television program on Netflix starring Yoo Jae-suk, Ahn Jae-wook, Kim Jong-min, Lee Kwang-soo, Park Min-young, Oh Se-hun, Kim Se-jeong and Lee Seung-gi. It premiered on May 4, 2018, and concluded on January 22, 2021.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "thriller",
   "mystery",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Busted%21.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-buzz-lightyear-of-star-command",
  "title": "Buzz Lightyear of Star Command",
  "startYear": 2000,
  "endYear": 2001,
  "creator": "Mark McCorkle Bob Schooley",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 62,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Buzz Lightyear of Star Command is an American animated science fiction comedy television series produced by Walt Disney Television Animation. It is a spin-off of Pixar's Toy Story franchise, and aired on ABC and UPN from October 2, 2000, to January 13, 2001. While the series is 2D animated, Pixar animated the CGI opening title sequence.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Buzz_Lightyear_of_Star_Command_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-cable-girls",
  "title": "Cable Girls",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Cable Girls (Spanish: Las chicas del cable) is a Spanish period drama television series that ran from April 2017 and concluded in July 2020. Set in the late 1920s, it stars Ana Fernández, Nadia de Santiago, Blanca Suárez and Maggie Civantos. The first season, consisting of eight episodes, premiered on Netflix, worldwide, on 28 April 2017.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 4,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/LCDP_LOGO.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-caprica",
  "title": "Caprica",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Reality",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Caprica is a 2010 American science fiction drama television series, a prequel spin-off of the 2003–2009 series Battlestar Galactica. Caprica is set 58 years before the main series, and shows how humanity first created the Cylon robots which would later turn against their human masters.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 4,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Caprica_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-captain-power-and-the-soldiers-of-the-future",
  "title": "Captain Power and the Soldiers of the Future",
  "startYear": 1987,
  "endYear": 1988,
  "creator": "Gary Goddard Tony Christopher",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 22,
  "status": "Ended",
  "network": "Syndication",
  "rating": null,
  "description": "Captain Power and the Soldiers of the Future is a science fiction-action television series, merging live action with animation based on computer-generated images, that ran for 22 episodes in Canadian and American syndication. A toy line was also produced by Mattel, and during each episode there was a segment that included visual and audio material which interacted with the toys.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "syndication",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/79/Captain_Power_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-captain-scarlet-and-the-mysterons",
  "title": "Captain Scarlet and the Mysterons",
  "startYear": 1967,
  "endYear": 1968,
  "creator": "Gerry & Sylvia Anderson",
  "genres": [
   "Sci-Fi",
   "Action",
   "Family"
  ],
  "seasons": null,
  "episodes": 32,
  "status": "Ended",
  "network": "ITV",
  "rating": null,
  "description": "Captain Scarlet and the Mysterons, often shortened to Captain Scarlet, is a British science fiction television series created by Gerry and Sylvia Anderson and filmed by their production company Century 21 for ITC Entertainment. It is the sixth Anderson series to be filmed using a form of electronic marionette puppetry dubbed \"Supermarionation\" combined with scale model special effects.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "action",
   "itv",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f4/Captain_Scarlet_and_the_Mysterons.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-care-bears-adventures-in-care-a-lot",
  "title": "Care Bears: Adventures in Care-a-lot",
  "startYear": 2007,
  "endYear": 2010,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 26,
  "status": "Ended",
  "network": "CBS",
  "rating": null,
  "description": "Care Bears: Adventures in Care-a-Lot is an American children's animated television series based on the Care Bears franchise produced by American Greetings Properties and animated by SD Entertainment.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "cbs",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/Care_Bears_Adventures_in_Care-a-lot.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-castle",
  "title": "Castle",
  "startYear": 2009,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Castle is an American crime mystery comedy-drama television series that aired on ABC for a total of eight seasons from March 9, 2009, to May 16, 2016. The series was produced by Beacon Pictures and ABC Studios. Created by Andrew W.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 1,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/CastleIntertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-castlevania",
  "title": "Castlevania",
  "startYear": null,
  "endYear": null,
  "creator": "Warren Ellis",
  "genres": [
   "Animation",
   "Horror",
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Castlevania is an American adult animated action horror television series created and written by Warren Ellis for Netflix. Based on the Japanese Castlevania series by Konami, the first two seasons adapt the 1989 entry Castlevania III: Dracula's Curse and follow Trevor Belmont, Alucard and Sypha Belnades as they defend the nation of Wallachia from Dracula and his minions.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 7,
   "funny": 2,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "vampires",
   "gothic",
   "video game",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/Castlevania_netflix_titlecard.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-charles-manson",
  "title": "Charles Manson",
  "startYear": 1934,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Western",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Charles Milles Manson (né Maddox; November 12, 1934 – November 19, 2017) was an American criminal and musician who was the central figure of the Manson Family. He orchestrated the Tate–LaBianca murders, in which his followers murdered eight people around Los Angeles, including actress Sharon Tate and her unborn child.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 2,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "western",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/59/Manson1968.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-charlies-angels",
  "title": "Charlie's Angels",
  "startYear": 1976,
  "endYear": 1981,
  "creator": "Ivan Goff Ben Roberts",
  "genres": [
   "Superhero",
   "Crime",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 115,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "Charlie's Angels is an American crime drama television series created by Ivan Goff and Ben Roberts for ABC. It originally aired from September 22, 1976, to June 24, 1981, airing for five seasons consisting of 115 episodes. It was produced by Spelling-Goldberg Productions.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "superhero",
   "crime",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Charliesangels.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-charlies-angels-2011",
  "title": "Charlie's Angels",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Charlie's Angels is an American action crime drama television series developed by Alfred Gough and Miles Millar. Produced by Millar/Gough Ink, Panda Productions, Flower Films and Sony Pictures Television, the series is a reboot based on the 1976 original television series of the same name created by Ivan Goff and Ben Roberts and the second series in the Charlie's Angels franchise.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Charlie%27s_Angels_%282011_TV_series%29_logo.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-chase",
  "title": "Chase",
  "startYear": 2010,
  "endYear": 2011,
  "creator": "Jennifer Johnson",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 18,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "Chase is an American police procedural drama television series created by Jennifer Johnson for NBC. The series follows a U.S. Marshals fugitive-apprehension team, based out of Houston, Texas. Jerry Bruckheimer and Johnson serve as executive producers. The series originally aired on Mondays at 10:00 pm ET/9:00 pm CT and premiered on September 20, 2010.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Chase_2010_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-chefs-table",
  "title": "Chef's Table",
  "startYear": 2015,
  "endYear": null,
  "creator": "David Gelb",
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Chef's Table is an American documentary series created by David Gelb, which premiered on video streaming service Netflix on April 26, 2015. The series shows the lives and kitchens of acclaimed and successful international chefs, with each episode focusing on a single chef. The series has been nominated for and awarded awards, including eight Emmy nominations.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 9,
   "weird": 2
  },
  "keywords": [
   "food",
   "chefs",
   "cinematic",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/Chef%27s_Table.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-chernobyl",
  "title": "Chernobyl",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Historical Drama",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Chernobyl is a 2019 historical drama television miniseries that revolves around the Chernobyl disaster of 1986 and the cleanup efforts that followed. The series was created and written by Craig Mazin and directed by Johan Renck. It features an ensemble cast led by Jared Harris, Stellan Skarsgård, Emily Watson, and Paul Ritter.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 4,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "disaster",
   "soviet",
   "true story",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-chouseishin-gransazer",
  "title": "Chouseishin Gransazer",
  "startYear": 2003,
  "endYear": 2004,
  "creator": "Eberechi Azu",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": 51,
  "status": "Ended",
  "network": "TV Tokyo",
  "rating": null,
  "description": "Chouseishin Gransazer (Japanese: 超星神グランセイザー, Hepburn: Chōseishin Guranseizā; English: ) (translated into English as Ultra Star God Gransazer or Super Star God Gransazer, also known simply as Gransazer) is a Japanese drama produced by Toho Company Ltd. and Konami. The series aired on TV Tokyo from October 4, 2003, to September 25, 2004, with 51 half-hour episodes.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "tv tokyo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/%E8%B6%85%E6%98%9F%E7%A5%9E.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-chowder",
  "title": "Chowder",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Chowder is an American animated surreal comedy television series created by C. H. Greenblatt for Cartoon Network. It premiered on November 2, 2007, and ended on August 7, 2010, after three seasons with a total of 49 episodes. The series follows an aspiring young boy named Chowder and his day-to-day adventures as an apprentice in Chef Mung Daal's catering company.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/Chowder_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-chrisley-knows-best",
  "title": "Chrisley Knows Best",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Chrisley Knows Best is an American reality television series that aired on the USA Network from March 11, 2014, to March 27, 2023. It revolves around the lives of real estate tycoon Todd Chrisley and his wealthy family. The show was filmed in Roswell and Alpharetta, suburbs of Atlanta, before moving primarily to Nashville during the fourth season.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/96/ChrisleyKnowsBestUSAlogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-clash-of-clans",
  "title": "Clash of Clans",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Supercell. It was released for iOS on 2 August 2012, and Android on 7 October 2013, and later Windows on 23 October 2023. The game is set in a fantasy-themed persistent world, where the player is the chief of a village.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 4,
   "epic": 9,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "fantasy",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-class-of-3000",
  "title": "Class of 3000",
  "startYear": 2006,
  "endYear": 2008,
  "creator": "André 3000 Thomas W. Lynch",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 2,
  "episodes": 28,
  "status": "Ended",
  "network": "Cartoon Network",
  "rating": null,
  "description": "Class of 3000 is an American animated children's musical television series created by André 3000 (best known as a member of the hip hop duo Outkast) and Thomas W. Lynch for Cartoon Network.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "cartoon network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Class_of_3000.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-clifford-the-big-red-dog",
  "title": "Clifford the Big Red Dog",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Clifford the Big Red Dog is an animated children's television series adapted from the book series of the same name written by Norman Bridwell, and a reboot to the 2000 animated series created by Deborah Forte and produced by Mike Young Productions, releasing on Amazon Prime Video from December 6, 2019 to February 12, 2021.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/Clifford_the_Big_Red_Dog_%282019%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-columbo",
  "title": "Columbo",
  "startYear": 1968,
  "endYear": 1978,
  "creator": "Richard Levinson William Link",
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": 10,
  "episodes": 69,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "Columbo is an American crime drama television series starring Peter Falk as Lieutenant Columbo, a homicide detective with the Los Angeles Police Department. After two pilot episodes in 1968 and 1971, the show originally aired on NBC from 1971 to 1978 as one of the rotating programs of The NBC Mystery Movie.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "crime",
   "mystery",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/19/Columbo-Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-comedy-central",
  "title": "Comedy Central",
  "startYear": 1991,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Comedy Central is an American basic cable television channel owned by Skydance Corporation. Launched on April 1, 1991 and based in Manhattan, New York City, it broadcasts comedy programming in the form of original, licensed and syndicated television series, stand-up comedy specials, and feature films. The channel’s prime target demographic is more mature audiences.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 2,
   "epic": 0,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-community",
  "title": "Community",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Community is an American television sitcom created by Dan Harmon. The series ran for 110 episodes over six seasons, with its first five seasons airing on NBC from September 17, 2009, to April 17, 2014, and its final season airing on Yahoo Screen from March 17 to June 2, 2015.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 9
  },
  "keywords": [
   "study group",
   "meta",
   "paintball",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Community_2009_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-confidence-queen",
  "title": "Confidence Queen",
  "startYear": 2025,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Confidence Queen (Korean: 컨피던스 맨 KR) is a 2025 South Korean crime comedy television series starring Park Min-young, Park Hee-soon and Joo Jong-hyuk.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Confidence_Queen_TV_series_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-cops",
  "title": "COPS",
  "startYear": 1988,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "C.O.P.S. (Central Organization of Police Specialists) is a 1988 animated television series released by DIC Animation City, and distributed by Claster Television. The series focuses on a team of highly trained police officers tasked with protecting the fictional Empire City from a group of gangsters led by the \"Big Boss\".",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/C.O.P.S._%28TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-cops-tv-program",
  "title": "Cops (TV program)",
  "startYear": 1989,
  "endYear": 2013,
  "creator": "John Langley Malcolm Barbour",
  "genres": [
   "Documentary",
   "Crime",
   "Reality"
  ],
  "seasons": 38,
  "episodes": 1269,
  "status": "Ended",
  "network": "Fox",
  "rating": null,
  "description": "Cops (stylized in all caps as COPS) is an American documentary television series that is currently in its 38th season. It is produced by Langley Productions and premiered on the Fox network on March 11, 1989.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "crime",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_of_Cops_%28TV_series%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-cosmos-a-spacetime-odyssey",
  "title": "Cosmos: A Spacetime Odyssey",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Cosmos: A Spacetime Odyssey is a 2014 American science documentary television series. The show is a follow-up to the 1980 television series Cosmos: A Personal Voyage, which was presented by Carl Sagan on the Public Broadcasting Service and is considered a milestone for scientific documentaries.",
  "vector": {
   "adrenaline": 2,
   "brainy": 10,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 0,
   "epic": 10,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "science",
   "tyson",
   "space",
   "wonder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-cousins-for-life",
  "title": "Cousins for Life",
  "startYear": 2018,
  "endYear": null,
  "creator": "Kevin Kopelow & Heath Seifert",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Cousins for Life is an American comedy television series created by Kevin Kopelow and Heath Seifert that aired on Nickelodeon from November 24, 2018 to June 8, 2019. The series stars Scarlet Spencer, Dallas Dupree Young, Micah Abbey, Ron G, and Ishmel Sahid.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/Cousins_for_Life_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-covert-affairs",
  "title": "Covert Affairs",
  "startYear": 2010,
  "endYear": 2014,
  "creator": "Matt Corman Chris Ord",
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 75,
  "status": "Ended",
  "network": "USA Network",
  "rating": null,
  "description": "Covert Affairs is an American action drama television series filmed in Toronto, Canada, starring Piper Perabo and Christopher Gorham that premiered on Tuesday, July 13, 2010. On January 6, 2015, USA Network canceled Covert Affairs after five seasons.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "action",
   "drama",
   "usa network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/07/Covert_Affairs_2010_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-cowboy-bebop",
  "title": "Cowboy Bebop",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Sci-Fi",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "A crew of broke bounty hunters drifts through the solar system in 2071, chasing fares and outrunning their pasts. Jazz-scored neo-noir anime about loneliness, style, and the things you cannot leave behind.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "anime",
   "jazz",
   "bounty hunters",
   "classic"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-cowboy-bebop-2021",
  "title": "Cowboy Bebop",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Cowboy Bebop is an American space Western television series. It is a live action series based on the 1998 Japanese anime television series Cowboy Bebop and the 2001 anime film Cowboy Bebop: The Movie. Set in the year 2071, it charts the adventures of a ragtag group of bounty hunters chasing down criminals across the Solar System on the Bebop spaceship.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/Cowboy_Bebop_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-crashing",
  "title": "Crashing",
  "startYear": 2017,
  "endYear": 2019,
  "creator": "Pete Holmes",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 24,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Crashing is an American comedy-drama television series created by Pete Holmes and executive produced by Holmes and occasional series director Judd Apatow. The series aired on HBO in the United States from February 19, 2017, to March 10, 2019, for a total of three seasons.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 1,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/96/Crashing_HBO.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-crashletes",
  "title": "Crashletes",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Crashletes is an American sports television program that premiered on Nickelodeon on July 5, 2016. The program is hosted by Rob Gronkowski, Brandon Broady, and Stevie Nelson.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 0,
   "romantic": 3,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "family",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Crashletes_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-crazy-rich-asians",
  "title": "Crazy Rich Asians",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Romance",
   "Rom-Com",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Crazy Rich Asians is a 2018 American romantic comedy drama film directed by Jon M. Chu from a screenplay by Peter Chiarelli and Adele Lim, based on the 2013 novel by Kevin Kwan. The film stars Constance Wu, Henry Golding, Gemma Chan, Lisa Lu, Awkwafina, Ken Jeong, and Michelle Yeoh.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 4,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "romance",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-crisis",
  "title": "Crisis",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Crisis is an American action thriller drama television series created by Rand Ravich for 20th Century Fox Television. It aired on NBC as part of the 2013–14 United States network television schedule and the mid-season entry.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Crisis_%282014_TV_series%29_text_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-crouching-tiger-hidden-dragon",
  "title": "Crouching Tiger, Hidden Dragon",
  "startYear": 2000,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Crouching Tiger, Hidden Dragon is a 2000 wuxia film directed by Ang Lee and written for the screen by Wang Hui-ling, James Schamus, and Tsai Kuo-jung. It is based on the Chinese novel of the same name, serialized between 1941 and 1942 by Wang Dulu, the fourth part of his Crane-Iron Series. It stars Chow Yun-fat, Michelle Yeoh, Zhang Ziyi, Chang Chen and Cheng Pei-pei in the leading roles.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "action",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-csi-crime-scene-investigation",
  "title": "CSI: Crime Scene Investigation",
  "startYear": 2000,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "CSI: Crime Scene Investigation is an American police procedural drama television series that aired on CBS from October 6, 2000, to September 27, 2015, spanning 15 seasons. It is the first series in the CSI franchise. The series originally starred William Petersen, Marg Helgenberger, Gary Dourdan, George Eads, Jorja Fox, and Paul Guilfoyle.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/98/CSI-LV.main.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-csi-miami",
  "title": "CSI: Miami",
  "startYear": 2002,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "CSI: Miami (Crime Scene Investigation: Miami) is an American police procedural television series that aired on CBS from September 23, 2002, to April 8, 2012.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/96/CSI_Miami.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-curb-your-enthusiasm",
  "title": "Curb Your Enthusiasm",
  "startYear": null,
  "endYear": null,
  "creator": "Larry David",
  "genres": [
   "Comedy"
  ],
  "seasons": 12,
  "episodes": 120,
  "status": null,
  "network": "HBO",
  "rating": "TV-MA",
  "description": "Curb Your Enthusiasm, also known colloquially as Curb, is an American comedy television series created by Larry David that premiered on HBO with an hour-long special on October 17, 1999, followed by 12 seasons broadcast from 2000 to 2024.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 1,
   "dark": 3,
   "romantic": 0,
   "epic": 1,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "larry david",
   "improv",
   "cringe",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Curb_Your_Enthusiasm.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-dads",
  "title": "Dads",
  "startYear": 2013,
  "endYear": 2014,
  "creator": "Alec Sulkin Wellesley Wild",
  "genres": [
   "Comedy"
  ],
  "seasons": 1,
  "episodes": 19,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Dads (stylized in all lowercase) is an American television sitcom created by Wellesley Wild, Alec Sulkin and Seth MacFarlane for Fox. The series follows Warner and Eli, two successful video game developers whose lives are unexpectedly changed when their respective fathers move in with them. Sulkin and Wild are also executive producers. The show was recorded in front of a live studio audience.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 4,
   "epic": 1,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Dads_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-daisy-jones-the-six",
  "title": "Daisy Jones & the Six",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Daisy Jones & the Six is an American musical drama television miniseries developed by Scott Neustadter and Michael H. Weber, based on the 2019 novel of the same name by Taylor Jenkins Reid.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-dallas",
  "title": "Dallas",
  "startYear": 1978,
  "endYear": null,
  "creator": "David Jacobs",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dallas is an American prime time soap opera that aired on CBS from April 2, 1978, to May 3, 1991. The series revolved around an affluent and feuding Texas family, the Ewings, who owned the independent oil company Ewing Oil and the cattle-ranching land of Southfork. The series originally focused on the marriage of Bobby Ewing and Pam Ewing, whose families were sworn enemies.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/DallasLogo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dan-vs",
  "title": "Dan Vs.",
  "startYear": 2011,
  "endYear": 2013,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 3,
  "episodes": 53,
  "status": "Ended",
  "network": "The Hub",
  "rating": null,
  "description": "Dan Vs. is an American animated sitcom created by Dan Mandel and Chris Pearson for the cable channel The Hub. The series stars Curtis Armstrong as Dan. Dave Foley and Paget Brewster also star as Chris and Elise, respectively. The series ran for three seasons on The Hub from January 1, 2011, until March 9, 2013 with a total of 53 episodes and 1 short produced.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "the hub",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/27/Dan_Vs_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dancing-with-the-stars",
  "title": "Dancing with the Stars",
  "startYear": 2005,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dancing with the Stars is an American reality dance competition television series that premiered on ABC on June 1, 2005. It is the American version of the British contest program Strictly Come Dancing and is part of its international franchise. The series pairs celebrities with professional dancers to perform primarily ballroom and Latin routines.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/76/DWTS_New_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dare-me",
  "title": "Dare Me",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dare Me is an American teen drama mystery thriller television series based on the 2012 novel of the same name by Megan Abbott, co-developed with Gina Fattore. The series was picked up in late January 2019 and premiered on USA Network on December 29, 2019. In April 2020, USA Network canceled the series after one season.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Dare_Me_%28TV_series%29_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-daredevil",
  "title": "Daredevil",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Action",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Marvel's Daredevil is an American television series created by Drew Goddard for the streaming service Netflix, based on the Marvel Comics character Daredevil. It is set in the Marvel Cinematic Universe (MCU), sharing continuity with the films of the franchise, and was the first Marvel Netflix series leading to the crossover miniseries The Defenders (2017).",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "hell's kitchen",
   "blind lawyer",
   "gritty"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Daredevil_%28TV_series%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-daria",
  "title": "Daria",
  "startYear": 1997,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Romance",
   "Rom-Com",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Daria is an American teen animated sitcom created by Glenn Eichler and Susie Lewis Lynn. The series ran from March 3, 1997, to January 21, 2002, on MTV. It centers on the titular character, Daria Morgendorffer, an intelligent, cynical high school student, voiced by Tracy Grandstaff, who had voiced the character in Mike Judge's earlier animated series, Beavis and Butt-Head.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Daria_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dark",
  "title": "Dark",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Dark is a German science-fiction mystery thriller television series created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. The story primarily follows four families from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance, unraveling a sinister time travel conspiracy that spans several generations.",
  "vector": {
   "adrenaline": 4,
   "brainy": 10,
   "scary": 4,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 8
  },
  "keywords": [
   "time travel",
   "german",
   "mind-bending",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Dark_TV_Series_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-dark-angel",
  "title": "Dark Angel",
  "startYear": 2000,
  "endYear": 2002,
  "creator": "{{plainlist|",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 43,
  "status": "Ended",
  "network": "Fox",
  "rating": null,
  "description": "Dark Angel is an American science fiction action drama television series that aired on Fox from October 3, 2000, to May 3, 2002. Created by James Cameron and Charles H. Eglee, it stars Jessica Alba in her breakthrough role. Set in 2019, the series chronicles the life of Max Guevara (Alba), a genetically enhanced runaway supersoldier who escapes from a covert military facility as a child.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "action",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/79/Dark_Angel_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dark-blue",
  "title": "Dark Blue",
  "startYear": 2009,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dark Blue is an American crime drama television series created by Danny Cannon and Doug Jung that premiered on TNT on July 15, 2009 and ended its run on September 15, 2010. The series is set in Los Angeles and revolves around Carter Shaw (Dylan McDermott), the leader of an undercover unit.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Dark_Blue_title_screen.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dark-matter",
  "title": "Dark Matter",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dark Matter is an American science fiction television series created by Blake Crouch, based on his 2016 novel. The series premiered on Apple TV+ on May 8, 2024. In August 2024, the series was renewed for a second season, which premiered on August 28, 2026.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Dark_Matter_%282024_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dark-shadows",
  "title": "Dark Shadows",
  "startYear": 1966,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dark Shadows is an American Gothic soap opera that aired weekdays on the ABC television network from June 27, 1966, to April 2, 1971. The series depicted the lives, loves, trials, and tribulations of the wealthy Collins family of Collinsport, Maine, where a number of supernatural occurrences take place. It was created and executive-produced by Dan Curtis, and developed by Art Wallace.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Dark_Shadows_%28original_television_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-darkwing-duck",
  "title": "Darkwing Duck",
  "startYear": 1991,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Mystery",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Darkwing Duck is an American animated superhero comedy television series produced by Walt Disney Television Animation that first ran from 1991 to 1992 on both the syndicated programming block The Disney Afternoon and Saturday mornings on ABC. A total of ninety-one episodes were aired.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Disney%27s_Darkwing_Duck_official_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-darna",
  "title": "Darna",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Fantasy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mars Ravelo's Darna is a Philippine superhero television series that aired on Kapamilya Channel. The series is based from Mars Ravelo's fictional Philippine superheroine of the same name. Directed by Chito S. Roño, Avel E. Sunpongco, Benedict Mique and Darnel Joy R. Villaflor, it stars Jane de Leon in the title role. It premiered on August 15, 2022, on the network's Primetime Bida line up.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/Darna_%282022%29_promo_art.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-david-letterman",
  "title": "David Letterman",
  "startYear": 1947,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "David Michael Letterman (born April 12, 1947) is an American comedian, television host, writer, and producer. He hosted late-night television talk shows for 33 years, beginning with the February 1, 1982, debut of Late Night with David Letterman on NBC and ending with the May 20, 2015, broadcast of Late Show with David Letterman on CBS.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 2,
   "epic": 0,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Celebration_of_Service_160505-F-HS721-010_%28cropped%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dc-nation-shorts",
  "title": "DC Nation Shorts",
  "startYear": 2011,
  "endYear": 2014,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 162,
  "status": "Ended",
  "network": "Cartoon Network",
  "rating": null,
  "description": "DC Nation Shorts is an animated series of shorts featuring characters from DC Comics from a variety of different titles that aired on Cartoon Network on Saturdays at 10/9c.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "cartoon network",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-deadloch",
  "title": "Deadloch",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Deadloch is an Australian black comedy crime mystery television series that premiered on Amazon Prime Video on 2 June 2023. Created by Kate McCartney and Kate McLennan, the story is set in Deadloch, a fictional town in Tasmania, and stars Kate Box, Madeleine Sami, Alicia Gardiner, and Nina Oyama. Deadloch was produced by Amazon Studios. The second series premiered on Prime Video on 20 March 2026.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 2,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 2,
   "epic": 1,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Deadloch_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-deadwood",
  "title": "Deadwood",
  "startYear": 2004,
  "endYear": null,
  "creator": "David Milch",
  "genres": [
   "Drama",
   "Western",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Deadwood is an American Western television series that aired on the premium cable network HBO from March 21, 2004, to August 27, 2006. The series is set in the 1870s in Deadwood, South Dakota, before and after the area's annexation by the Dakota Territory, and charts Deadwood's growth from camp to town. The show was created, produced, and largely written by David Milch.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "gold rush",
   "frontier",
   "hbo",
   "profane poetry"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Deadwood_titleimage.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-death-by-lightning",
  "title": "Death by Lightning",
  "startYear": 2011,
  "endYear": null,
  "creator": "Mike Makowsky",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Death by Lightning is an American historical drama miniseries created by Mike Makowsky and based on the 2011 book Destiny of the Republic by Candice Millard. It stars Michael Shannon as United States President James A. Garfield and Matthew Macfadyen as his assassin Charles J. Guiteau. The four-episode series premiered on November 6, 2025, on Netflix.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 4,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/Death_by_Lightning_TV_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-death-note",
  "title": "Death Note",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Thriller",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Death Note (stylized in all caps) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with its chapters collected in 12 tankōbon volumes. The story follows Light Yagami, a genius high school student who discovers a mysterious notebook, the Death Note.",
  "vector": {
   "adrenaline": 5,
   "brainy": 10,
   "scary": 4,
   "funny": 1,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "anime",
   "shinigami",
   "cat and mouse",
   "light vs l"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-defying-gravity",
  "title": "Defying Gravity",
  "startYear": 2009,
  "endYear": null,
  "creator": "James D. Parriott",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Defying Gravity is a multi-nationally produced science fiction television series which first aired on August 2, 2009 on ABC and CTV and was canceled in October 2009.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 8,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/DGTV.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-demi-lovato",
  "title": "Demi Lovato",
  "startYear": 1992,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Demetria Devonne \"Demi\" Lovato ( DEM-ee lə-VAH-toh; born August 20, 1992) is an American singer, songwriter, and actress. After appearing on the children's television series Barney & Friends (2002–2004), she starred in the Disney Channel short series As the Bell Rings (2007–2008), and as the titular character on the sitcom Sonny with a Chance (2009–2011).",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Demi_Lovato_Interview_Feb_2020.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-devilman-crybaby",
  "title": "Devilman Crybaby",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Devilman Crybaby is a 2018 Japanese original net animation (ONA) series based on Go Nagai's manga series Devilman. The web anime is directed by Masaaki Yuasa, produced by Aniplex and Dynamic Planning, animated by Science Saru, and released by Netflix. Yuasa was offered the opportunity to create a Devilman project by Aniplex, and envisioned Devilman Crybaby.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 6,
   "funny": 4,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "horror",
   "animation",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-dexter",
  "title": "Dexter",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Dexter is an American crime television series that initially aired on Showtime from October 1, 2006, to September 22, 2013. Set in Miami, the series centers on Dexter Morgan (Michael C.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 5,
   "funny": 3,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "serial killer",
   "forensics",
   "miami",
   "vigilante"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dexter_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-dinozaurs",
  "title": "Dinozaurs",
  "startYear": 2000,
  "endYear": 2000,
  "creator": "Hajime Yatate",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 26,
  "status": "Ended",
  "network": "Fox Kids",
  "rating": null,
  "description": "Dinozaurs, known in Japan as Dinozone (ダイノゾーン, Dainozōn), is a Japanese toyline created by toy company Bandai in 1998. Alongside the toys, two media adaptations were created by Sunrise: a 5-episode 3D CGI OVA series that ran from November 27, 1998, to January 2000 and a 26-episode animated television series that aired on Fox Kids from July 28 to November 30, 2000.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "fox kids",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Dinozaur.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dirt",
  "title": "Dirt",
  "startYear": 2007,
  "endYear": null,
  "creator": "Matthew Carnahan",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dirt (styled d!rt for logos) is an American television series broadcast on the FX network. It premiered on January 2, 2007, and starred Courteney Cox as Lucy Spiller, the editor-in-chief of the first-of-its-kind \"glossy tabloid\" magazine DirtNow. A 13-episode second and final season was announced on May 8, 2007.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dirtlogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-disclaimer",
  "title": "Disclaimer",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Psychological Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Disclaimer (stylized as Disclaimer*) is a 2024 psychological erotic thriller miniseries created, written, edited, and directed by Alfonso Cuarón, based on the 2015 novel of the same name by Renée Knight. It stars Cate Blanchett and Leila George as documentarian Catherine Ravenscroft, and Kevin Kline as an elderly widower who forces Ravenscroft to confront her past.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 4,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "thriller",
   "psychological thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a5/Disclaimer_%28TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-disney-anthology-television-series",
  "title": "Disney anthology television series",
  "startYear": 1954,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Walt Disney Company has produced an anthology television series since 1954 under several titles and formats. The program title The Wonderful World of Disney was used from 1969 to 1979 and again from 1991 onward. The program moved among the Big Three television networks in its first four decades, but has aired on ABC since 1997. The original version of the series premiered on ABC in 1954.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "animation",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/A_screenshot_of_the_title_logo_of_the_Wonderful_World_of_Disney.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dispatches-from-elsewhere",
  "title": "Dispatches from Elsewhere",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dispatches from Elsewhere is an American comedy-drama television series created by and starring Jason Segel that premiered on March 1, 2020, on AMC. It is based on the documentary film The Institute about the alternate reality game The Jejune Institute.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 4,
   "epic": 4,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/20/Dispatches_from_Elsewhere.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-doctor-who",
  "title": "Doctor Who",
  "startYear": 1963,
  "endYear": null,
  "creator": "{{ubl",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Drama"
  ],
  "seasons": 26,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Doctor Who is a British science fiction television series first broadcast by the BBC in 1963. The series, created by Sydney Newman, C. E. Webber and Donald Wilson, follows the adventures of the Doctor, an extraterrestrial being from a humanoid species known as Time Lords.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 3,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 8
  },
  "keywords": [
   "time lord",
   "tardis",
   "british",
   "regeneration"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Doctor_Who_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-dominion",
  "title": "Dominion",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dominion is an American apocalyptic fantasy television series created by Vaun Wilmott. It is a sequel to the 2010 film Legion, written by Peter Schink and Scott Stewart. In December 2013, Syfy ordered a pilot episode and the series premiered on the cable television network Syfy on June 19, 2014. The show was filmed in Cape Town, South Africa.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "action",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/Dominion_-_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dota-dragons-blood",
  "title": "Dota: Dragon's Blood",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Action"
  ],
  "seasons": 3,
  "episodes": 24,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dota: Dragon's Blood (Korean: 도타: 용의 피; RR: Dota: yongui pi) is a 2021 adult animated epic fantasy television series. It is based on the 2013 video game Dota 2 by Valve. The show was produced by Studio Mir in association with Ashley Edward Miller's company Kaiju Boulevard. The series premiered on Netflix on March 25, 2021, and concluded after three seasons on August 11, 2022.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Dota_Dragons_Blood_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-downton-abbey",
  "title": "Downton Abbey",
  "startYear": null,
  "endYear": null,
  "creator": "Julian Fellowes",
  "genres": [
   "Drama",
   "Historical Drama",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-PG",
  "description": "Downton Abbey is a British historical drama television series set in the early 20th century, created and co-written by Julian Fellowes. It first aired in the United Kingdom on ITV on 26 September 2010 and in the United States on PBS, which supported its production as part of its Masterpiece Classic anthology, on 9 January 2011.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 7,
   "cozy": 8,
   "weird": 0
  },
  "keywords": [
   "british",
   "estate",
   "period",
   "upstairs downstairs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c4/Downton_Abbey_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-dr-death",
  "title": "Dr. Death",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dr. Death is an American true crime drama anthology television series created by Patrick Macmanus, based on the podcast of the same name. It premiered on Peacock on July 15, 2021. In July 2022, the series was renewed for a second season that premiered on December 21, 2023.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dr._Death_%282021_TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ducktales",
  "title": "DuckTales",
  "startYear": 1987,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "DuckTales is an American animated television series produced by Walt Disney Television Animation. The broadcast began in syndication on September 18, 1987, spanning 100 episodes across 4 seasons, with the final episode airing on November 28, 1990.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/69/DuckTales_%281987_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-dwight-in-shining-armor",
  "title": "Dwight in Shining Armor",
  "startYear": 2019,
  "endYear": 2021,
  "creator": "LeeAnne H. Adams & Brian J. Adams",
  "genres": [
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 5,
  "episodes": 50,
  "status": "Ended",
  "network": "BYUtv",
  "rating": null,
  "description": "Dwight in Shining Armor is an American family fantasy television show created by LeeAnne H. Adams & Brian J. Adams that premiered on BYUtv on March 18, 2019. The show features a present-day teenager who awakens a princess from a 1,000-year magical slumber. The show has five ten-episode seasons. In June 2019 the series was approved for two more seasons.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 3,
   "epic": 5,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "fantasy",
   "comedy",
   "byutv",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-dynasty",
  "title": "Dynasty",
  "startYear": 1981,
  "endYear": null,
  "creator": "Richard and Esther Shapiro",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dynasty is an American prime time soap opera that aired on ABC from January 12, 1981, to May 11, 1989. The series, created by Richard and Esther Shapiro and produced by Aaron Spelling, revolves around the Carringtons, a wealthy family residing in Denver.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Dynasty_%281981%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-earth-to-luna",
  "title": "Earth to Luna!",
  "startYear": 2014,
  "endYear": 2023,
  "creator": "Célia Catunda Kiko Mistrorigo",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": 9,
  "episodes": 234,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Earth to Luna! (Neutral Spanish: El Mundo de Luna!) (Brazilian Portuguese: O Show da Luna!) is an animated children's television series created and directed by Célia Catunda and Kiko Mistrorigo and produced by PinGuim Content and Little Airplane Productions (seasons 1–2) in association with Discovery Kids, that debuted on the American channel Sprout, on August 16, 2014.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Earth_To_Luna.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-eastsiders",
  "title": "EastSiders",
  "startYear": 2012,
  "endYear": null,
  "creator": "Kit Williamson",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "EastSiders is an American dark comedy web series created by Kit Williamson. It premiered on YouTube on December 14, 2012, and began streaming through Logo TV's website on April 23, 2013. Set in Silver Lake, Los Angeles, the series follows couple Thom (Van Hansis) and Cal (Williamson) as they struggle with infidelity and substance abuse.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c3/EastSiders_web_series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-eight-is-enough",
  "title": "Eight Is Enough",
  "startYear": 1977,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Eight Is Enough is an American comedy-drama television series that aired on ABC from March 15, 1977, to May 23, 1981. The show was modeled on the life of syndicated newspaper columnist Tom Braden (Tom Bradford on the show), a real-life parent with eight children, who wrote a book by the same title.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 1,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3a/Eight_is_Enough.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-el-tigre-the-adventures-of-manny-rivera",
  "title": "El Tigre: The Adventures of Manny Rivera",
  "startYear": 2007,
  "endYear": 2008,
  "creator": "Jorge R. Gutiérrez Sandra Equihua",
  "genres": [
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 26,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "El Tigre: The Adventures of Manny Rivera (also often shortened to El Tigre) is an animated superhero comedy television series created by Jorge R. Gutiérrez and Sandra Equihua for Nickelodeon and produced by Nickelodeon Animation Studio in association with Mexopolis. It was the network's first series primarily animated using Adobe Flash.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "superhero",
   "nickelodeon",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-elena-of-avalor",
  "title": "Elena of Avalor",
  "startYear": 2016,
  "endYear": null,
  "creator": "Craig Gerber",
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Elena of Avalor is an American animated children's television series created by Craig Gerber. It premiered on Disney Channel on July 22, 2016, before it was moved to Disney Junior on July 14, 2018. The series features Aimee Carrero as the voice of Elena, Disney's first Latina princess.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Elena_of_Avalor_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-eli-roth",
  "title": "Eli Roth",
  "startYear": 1972,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Eli Raphael Roth (born April 18, 1972) is an American film director, screenwriter, producer, and actor. As a director and producer, he is most closely associated with the horror genre, namely splatter films, having directed Cabin Fever (2002) and Hostel (2005).",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Eli_Roth_Photo_Op_Nightmare_Weekend_Chicago_2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-elsbeth",
  "title": "Elsbeth",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Elsbeth is an American police procedural comedy drama television series that premiered on February 29, 2024, on CBS. It is a spin-off of The Good Wife (2009–2016) and The Good Fight (2017–2022), in which Carrie Preston originated the role of Elsbeth Tascioni, an unconventional attorney who ends up working as a de facto detective.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/67/Elsbeth.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-emily-in-paris",
  "title": "Emily in Paris",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Rom-Com",
   "Comedy",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Emily in Paris is an American romantic comedy drama television series created by Darren Star for Netflix. The series stars Lily Collins as aspiring marketing executive Emily Cooper, an American who moves to Paris to provide an American point of view to a French marketing firm. In Paris, she tries to overcome challenges in her work, love life, and friendships.",
  "vector": {
   "adrenaline": 1,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 9,
   "epic": 3,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "paris",
   "fashion",
   "light",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Emily_in_Paris_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-enlightened",
  "title": "Enlightened",
  "startYear": 2011,
  "endYear": 2013,
  "creator": "Mike White Laura Dern",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 18,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Enlightened is an American comedy-drama television series that premiered on HBO on October 10, 2011. The series was created by Mike White, who wrote every episode, and Laura Dern.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 4,
   "epic": 1,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/55/Enlightened_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-entourage",
  "title": "Entourage",
  "startYear": 2004,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Entourage is an American satirical comedy-drama television series that premiered on HBO on July 18, 2004, and ended on September 11, 2011, after eight seasons.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 1,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 1,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Entourage_title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-er",
  "title": "ER",
  "startYear": 1994,
  "endYear": 2009,
  "creator": "Michael Crichton",
  "genres": [
   "Drama"
  ],
  "seasons": 15,
  "episodes": 331,
  "status": "Ended",
  "network": "NBC",
  "rating": "TV-14",
  "description": "ER is an American medical drama television series created by Michael Crichton that aired on NBC from September 19, 1994, to April 2, 2009, with a total of 331 episodes spanning 15 seasons. It was produced by Constant c Productions and Amblin Television, in association with Warner Bros. Television.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "medical",
   "chicago",
   "ensemble",
   "groundbreaking"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ea/ER_%28Amblin_Television_series%29_logo_%284%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-eureka",
  "title": "Eureka",
  "startYear": 2006,
  "endYear": 2012,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 77,
  "status": "Ended",
  "network": "Sci-Fi Channel",
  "rating": null,
  "description": "Eureka (stylized as EUReKA) is an American science fiction television series that premiered on Sci-Fi Channel (renamed Syfy in 2009) on July 18, 2006. The fifth and final season ended on July 16, 2012.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "comedy",
   "sci-fi channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Eureka_%282006_TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-expats",
  "title": "Expats",
  "startYear": 2016,
  "endYear": null,
  "creator": "Lulu Wang",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Expats is an American drama television miniseries created and directed by Lulu Wang, based on the 2016 novel The Expatriates by Janice Y. K. Lee. It premiered on Amazon Prime Video on January 26, 2024. It stars Nicole Kidman as Margaret Woo, an American expatriate living in Hong Kong when tragedy befalls her family. The show was filmed from August 2021 to December 2022.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Expats_poster.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-expedition-unknown",
  "title": "Expedition Unknown",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Adventure",
   "Reality"
  ],
  "seasons": 17,
  "episodes": 159,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Expedition Unknown is an American reality television series produced by Ping Pong Productions, which follows host Josh Gates as he investigates mysteries and legends. In each episode, Gates meets with historians, archeologists, salvage operations, or treasure hunters to join their search for historical evidence or lost treasure.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "adventure",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-f-is-for-family",
  "title": "F Is for Family",
  "startYear": 2015,
  "endYear": 2021,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 44,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "F Is for Family is an adult animated sitcom created by Bill Burr and Michael Price for Netflix. It was produced by Vince Vaughn's Wild West Television, King of France Productions, Loner Productions, Gaumont Television USA and Gaumont Animation. Set in 1973–74, the series follows a dysfunctional suburban Irish American family in the fictional town of Rustvale, Pennsylvania.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/75/F_is_for_Family_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fallout",
  "title": "Fallout",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Fallout is an American post-apocalyptic drama television series created by Graham Wagner and Geneva Robertson-Dworet for Amazon Prime Video. Based on the role-playing video game franchise created by Tim Cain and Leonard Boyarsky, the series is set two centuries after the Great War of 2077, in which society has collapsed following a nuclear holocaust.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 4,
   "funny": 5,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "vault",
   "wasteland",
   "video game",
   "prime video"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Fallout_television_series_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-family-guy",
  "title": "Family Guy",
  "startYear": 1999,
  "endYear": null,
  "creator": "Seth MacFarlane",
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Family_Guy_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fanboy-chum-chum",
  "title": "Fanboy & Chum Chum",
  "startYear": 2009,
  "endYear": 2012,
  "creator": "Eric Robles",
  "genres": [
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 52,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "Fanboy & Chum Chum is an American animated television series created by Eric Robles for Nickelodeon. It is based on Fanboy, an animated short created by Robles for Nickelodeon Animation Studio and Frederator Studios, that was broadcast on Random! Cartoons. The series was first broadcast on October 12, 2009, on Nickelodeon as a preview, then officially premiered after SpongeBob's Truth or Square.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "animation",
   "superhero",
   "nickelodeon",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Fanboy_and_Chum_Chum_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fargo",
  "title": "Fargo",
  "startYear": 1996,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Fargo is an American black comedy crime drama television series created by Noah Hawley for FX. It is based on the 1996 film written and directed by Joel and Ethan Coen. The Coens, whose other films also heavily influenced the series, were originally uninvolved but joined as executive producers after being impressed by Hawley's script for the first season. The series premiered on April 15, 2014.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 5,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "anthology",
   "minnesota",
   "dark comedy",
   "coens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Fargo_%28TV_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-fast-furious-spy-racers",
  "title": "Fast & Furious Spy Racers",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Fast & Furious Spy Racers is an American animated television series that premiered on Netflix on December 26, 2019, based on the Fast & Furious film series by Gary Scott Thompson. The series is executive produced by Tim Hedrick, Bret Haaland, Neal H. Moritz, Vin Diesel and Chris Morgan. Hedrick and Haaland also serve as the show's showrunners.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Fast_%26_Furious_Spy_Racers_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-father-of-the-pride",
  "title": "Father of the Pride",
  "startYear": 2004,
  "endYear": 2005,
  "creator": "Jeffrey Katzenberg",
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": 1,
  "episodes": 15,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "Father of the Pride is an American adult animated sitcom created by Jeffrey Katzenberg and produced by DreamWorks Animation for NBC. Father of the Pride follows a family of white lions, the patriarch of which stars in a Siegfried & Roy show in Las Vegas. Despite heavy promotion and support, the series was cancelled after one season due to declining ratings.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 4,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/Father_of_the_pride.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fetch-with-ruff-ruffman",
  "title": "Fetch! with Ruff Ruffman",
  "startYear": 2006,
  "endYear": 2010,
  "creator": "Kate Taylor",
  "genres": [
   "Animation",
   "Action",
   "Family",
   "Reality"
  ],
  "seasons": 5,
  "episodes": 100,
  "status": "Ended",
  "network": "PBS Kids Go!",
  "rating": null,
  "description": "Fetch! with Ruff Ruffman (sometimes shortened as Fetch!) is an American live-action/animated television series that aired on PBS Kids Go! and is largely targeted toward children ages 6–10. It is a reality competition hosted by Ruff Ruffman, an animated anthropomorphic dog who dispenses challenges to the show's real-life contestants.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "animation",
   "action",
   "pbs kids go!",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/FETCH%21_with_Ruff_Ruffman_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-feud",
  "title": "Feud",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Feud is an American anthology drama television series created by Ryan Murphy, Jaffe Cohen, and Michael Zam, which premiered on FX on March 5, 2017.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Feud_%28Ryan_Murphy_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-final-fantasy-the-spirits-within",
  "title": "Final Fantasy: The Spirits Within",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Final Fantasy: The Spirits Within (Japanese: ファイナルファンタジー, Hepburn: Fainarufantajī) is a 2001 animated science fiction film directed by Hironobu Sakaguchi, creator of the Final Fantasy franchise.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-firefly",
  "title": "Firefly",
  "startYear": 2002,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Western"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Firefly is a 2002 American space Western drama television series, created by writer and director Joss Whedon, under his Mutant Enemy Productions label. Whedon served as an executive producer, along with Tim Minear. The series is set in the year 2517, after the arrival of humans in a new star system, and follows the adventures of the renegade crew of Serenity, a \"Firefly-class\" spaceship.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Fireflyopeninglogo.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fleabag",
  "title": "Fleabag",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Fleabag is a British tragicomedy television series created and written by Phoebe Waller-Bridge, based on her one-woman show first performed in 2013 at the Edinburgh Festival Fringe. The series was produced by Two Brothers Pictures for digital channel BBC Three, in a co-production agreement with Amazon Studios.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 6,
   "epic": 1,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "fourth wall",
   "london",
   "phoebe waller-bridge",
   "hot priest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/08/Fleabag_titlecard.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-flight-of-the-conchords",
  "title": "Flight of the Conchords",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Flight of the Conchords is an American sitcom that was first shown on HBO on June 17, 2007. The show follows the adventures of a struggling two-man band from New Zealand, as its members seek fame and success in New York City. The show stars the duo of Jemaine Clement and Bret McKenzie, who also perform as real-life musical comedy act Flight of the Conchords.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 0,
   "romantic": 3,
   "epic": 0,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Conchords_Intro.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-for-all-mankind",
  "title": "For All Mankind",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "For All Mankind is an American science fiction drama television series created by Ronald D. Moore, Matt Wolpert, and Ben Nedivi and produced for the Apple TV streaming service. The series dramatizes an alternate history depicting \"what would have happened if the global space race had never ended\" after the Soviet Union succeeds in the first crewed Moon landing ahead of the United States.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 9,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "alternate history",
   "space race",
   "nasa",
   "apple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/For_All_Mankind_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-forever",
  "title": "Forever",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Crime",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Forever is an American fantasy crime drama television series that aired on ABC as part of the 2014–15 fall television season. Created by Matthew Miller, it centers on the character of Dr. Henry Morgan, an immortal New York City medical examiner who uses his extensive knowledge to assist the New York City Police Department (NYPD) in solving crimes and to discover a way to end his immortality.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Forever_%28U.S._TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-formula-1-drive-to-survive",
  "title": "Formula 1: Drive to Survive",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": 8,
  "episodes": 78,
  "status": "Running",
  "network": "Netflix",
  "rating": null,
  "description": "Formula 1: Drive to Survive is a British television documentary series produced by Netflix in collaboration with Formula One. The series provided a behind-the-scenes look at the drivers, teams, and races along with the intense rivalries that drive the Formula One Championship.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Formula_1_Drive_to_Survive.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-fosse-verdon",
  "title": "Fosse/Verdon",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Fosse/Verdon is a 2019 American biographical drama miniseries, developed by Steven Levenson and Thomas Kail. Based on the biography Fosse by Sam Wasson, the series charts the troubled marriage and professional relationship of director/choreographer Bob Fosse and actress/dancer Gwen Verdon, played by Sam Rockwell and Michelle Williams, respectively.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ee/Fosse_Verdon_FX.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-foundation",
  "title": "Foundation",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Foundation is an American science fiction television series created by David S. Goyer and Josh Friedman for Apple TV+, based on the Foundation series of stories by Isaac Asimov. It features an ensemble cast led by Jared Harris, Lee Pace, Lou Llobell, Leah Harvey, and Laura Birn. The series premiered on September 24, 2021.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 10,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "asimov",
   "galactic empire",
   "apple",
   "epic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Foundation_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-frequency",
  "title": "Frequency",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Crime",
   "Mystery",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Frequency is an American mystery science fiction drama television series that aired on the CW from October 5, 2016, to January 25, 2017. Inspired by the 2000 film Frequency, the television series was developed by Jeremy Carver. The series was canceled on May 8, 2017; five days later, an epilogue to the series was released.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/Frequency_%28TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-friday-night-lights",
  "title": "Friday Night Lights",
  "startYear": 1990,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-PG",
  "description": "Friday Night Lights is an American sports drama television series developed by Peter Berg and inspired by a 1990 book of immersive journalism by H. G. Bissinger, which was adapted as the 2004 film by Berg. Executive producers were Brian Grazer, David Nevins, Sarah Aubrey, and Jason Katims who also served as showrunner.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 6,
   "weird": 0
  },
  "keywords": [
   "football",
   "texas",
   "small town",
   "heart"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/Friday_Night_Lights_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-friends",
  "title": "Friends",
  "startYear": 1994,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-14",
  "description": "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer, the show revolves around six friends in their 20s and early 30s who live in Manhattan, New York City.",
  "vector": {
   "adrenaline": 1,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 8,
   "dark": 0,
   "romantic": 8,
   "epic": 1,
   "cozy": 10,
   "weird": 1
  },
  "keywords": [
   "sitcom",
   "new york",
   "six friends",
   "nineties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-fringe",
  "title": "Fringe",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Fringe is an American science fiction television series created by J. J. Abrams, Alex Kurtzman, and Roberto Orci. It premiered on Fox on September 9, 2008, and concluded on January 18, 2013, after five seasons comprising 100 episodes.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 4,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "parallel worlds",
   "fbi",
   "mad science",
   "procedural-plus"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Fringe_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-from",
  "title": "From",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Mystery",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "From (stylized as FROM) is an American science fiction horror television series created by John Griffin. The first season premiered on February 20, 2022, on Epix. The series stars Harold Perrineau, Catalina Sandino Moreno, Eion Bailey, David Alpay, Elizabeth Saunders, Scott McCord, Ricky He, and Chloe Van Landschoot in main roles.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 9,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "trapped town",
   "creatures",
   "mgm+",
   "lost energy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/From_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-fullmetal-alchemist-brotherhood",
  "title": "Fullmetal Alchemist: Brotherhood",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Fullmetal Alchemist: Brotherhood (Japanese: 鋼の錬金術師 FULLMETAL ALCHEMIST, Hepburn: Hagane no Renkinjutsushi) is a Japanese anime television series, serving as the second animated adaptation of the manga series Fullmetal Alchemist by Hiromu Arakawa, after the 2003 anime series.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 3,
   "funny": 4,
   "heartwarming": 8,
   "dark": 7,
   "romantic": 1,
   "epic": 9,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "anime",
   "alchemy",
   "brothers",
   "beloved"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-futurama",
  "title": "Futurama",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Sci-Fi",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Futurama is an American animated science fiction sitcom created by Matt Groening and developed by Groening and David X. Cohen for the Fox Broadcasting Company, and later revived by Comedy Central and then Hulu. The series follows Philip J. Fry, a young man who is cryogenically preserved for 1,000 years and revived on December 31, 2999.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 5,
   "epic": 6,
   "cozy": 5,
   "weird": 8
  },
  "keywords": [
   "year 3000",
   "delivery crew",
   "groening",
   "heart"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/84/Futurama_1999_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-future-worm",
  "title": "Future-Worm!",
  "startYear": 2016,
  "endYear": 2018,
  "creator": "Ryan Quincy",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 21,
  "status": "Ended",
  "network": "Disney XD",
  "rating": null,
  "description": "Future-Worm! is an American comic science fiction animated television series created by Ryan Quincy, who previously created IFC's Out There, for Disney XD. The show features the adventures of Danny and Future-Worm, who time travel by using a lunch box-shaped time machine. After a series of shorts, the full show premiered on August 1, 2016 and ended on May 19, 2018.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "disney xd",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Future-Worm%21_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-gabbys-dollhouse",
  "title": "Gabby's Dollhouse",
  "startYear": 2021,
  "endYear": null,
  "creator": "Traci Paige Johnson Jennifer Twomey",
  "genres": [
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 14,
  "episodes": 90,
  "status": "Running",
  "network": "Netflix",
  "rating": null,
  "description": "Gabby's Dollhouse is an American interactive television series created by Blue's Clues veterans Traci Paige Johnson and Jennifer Twomey for Netflix and produced by DreamWorks Animation Television. The series first premiered on Netflix on January 5, 2021.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Gabby_dolhouse_poster_fairuse_thyssen.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-gadget-the-gadgetinis",
  "title": "Gadget & the Gadgetinis",
  "startYear": 2002,
  "endYear": 2003,
  "creator": "Jean Chalopin",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 52,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Gadget & the Gadgetinis is an animated television series and the sequel of the 1983 series Inspector Gadget. The series was a co-production between Fox Kids Europe, DIC Entertainment Corporation, French animation studio SIP Animation, French broadcaster M6 Métropole Télévision, the British Channel 5 and the Italian Mediatrade S.p.A.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/Gadget_and_the_Gadgetinis.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-gaga-five-foot-two",
  "title": "Gaga: Five Foot Two",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Gaga: Five Foot Two is a 2017 American documentary film directed by Chris Moukarbel about singer Lady Gaga. It was produced by Moukarbel, Gaga, Bobby Campbell, and Heather Parry.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 8,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-game-of-thrones",
  "title": "Game of Thrones",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Fantasy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is the first adaptation of A Song of Ice and Fire, a series of high fantasy novels by George R. R. Martin, and the first in what would become the Game of Thrones franchise.",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 3,
   "epic": 10,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "dragons",
   "thrones",
   "westeros",
   "epic fantasy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Game_of_thrones_HBO_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-genseishin-justirisers",
  "title": "Genseishin Justirisers",
  "startYear": 2004,
  "endYear": 2005,
  "creator": "Toho",
  "genres": [
   "Superhero",
   "Comedy",
   "Action",
   "Adventure",
   "Romance"
  ],
  "seasons": null,
  "episodes": 51,
  "status": "Ended",
  "network": "TV Tokyo",
  "rating": null,
  "description": "Genseishin Justirisers (幻星神ジャスティライザー, Genseishin Jasutiraizā), lit. Phantom Star God Justirisers, is a tokusatsu superhero TV series produced by Toho and airing on TV Tokyo. This series is the second in Toho's Seishin (Star God) series. The show aired 51 episodes between October 2, 2004 and September 24, 2005.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "comedy",
   "tv tokyo",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-george-takei",
  "title": "George Takei",
  "startYear": 1937,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "George Takei ( tə-KAY; born Hosato Takei, April 20, 1937) is an American actor, author, and activist. He is known for his role as Hikaru Sulu, helmsman of the USS Enterprise in the Star Trek franchise. Takei was born to Japanese American parents, with whom he lived in Tule Lake Segregation Center during World War II.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e7/George_Takei_by_Gage_Skidmore_4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ghost-hunters",
  "title": "Ghost Hunters",
  "startYear": 2004,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ghost Hunters is an American paranormal and reality television series. The original series aired from October 6, 2004 until October 26, 2016 on Syfy. The original program spanned eleven seasons with 230 episodes, not including 10 specials.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "documentary",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Ghost_Hunters_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ghost-mine",
  "title": "Ghost Mine",
  "startYear": 2013,
  "endYear": 2013,
  "creator": null,
  "genres": [
   "Documentary",
   "Reality"
  ],
  "seasons": 2,
  "episodes": 18,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Ghost Mine is an American paranormal television series that premiered on January 16, 2013, in the United States on the Syfy channel. The series features a group of hard rock miners searching for gold in Oregon's Crescent Mine. Two paranormal investigators accompany them in an attempt to determine if the location is haunted.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 7,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "reality",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-ghost-whisperer",
  "title": "Ghost Whisperer",
  "startYear": 2005,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ghost Whisperer is an American supernatural television series, which ran on CBS from September 23, 2005, to May 21, 2010. The series follows the life of Melinda Gordon (Jennifer Love Hewitt), who has the ability to see and communicate with ghosts.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 5,
   "epic": 7,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Ghost_Whisperer.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ghostbusters",
  "title": "Ghostbusters",
  "startYear": 1986,
  "endYear": null,
  "creator": "Marc Richards",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Filmation's Ghostbusters (previously called Ghostbusters) is a 1986 American animated television series created by Filmation and distributed by Tribune Entertainment, serving as the sequel to Filmation's 1975 live-action television show The Ghost Busters. The show premiered around the same time as the unrelated The Real Ghostbusters, which premiered five days later.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/Filmations_Ghostbusters_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ghostforce",
  "title": "Ghostforce",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Animation",
   "Superhero",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ghostforce (also named Ghost Force) is a French independent animated television series created by Jeremy Zag that premiered on TFOU in France on August 21, 2021. The show was initially licensed by The Walt Disney Company for international broadcast, due to the company's ties to Miraculous: Tales of Ladybug & Cat Noir.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/04/Ghostforce_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-gilgo-beach-serial-killings",
  "title": "Gilgo Beach serial killings",
  "startYear": 1993,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Gilgo Beach serial killings were a series of murders on Long Island, New York, between 1993 and 2010. The case gained national attention in late 2010 and 2011, when police searching for a missing woman, Shannan Gilbert, discovered the remains of ten victims along Ocean Parkway near Gilgo Beach and in nearby areas of Suffolk and Nassau counties.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "crime",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/80/Ocean_Parkway_Road_on_Long_Island_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-girls5eva",
  "title": "Girls5eva",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Girls5eva is an American musical comedy television series created by Meredith Scardino that premiered on May 6, 2021, on Peacock. It follows four women who were part of a girl group named Girls5eva, which was briefly popular around the year 2000 before fading away. Now unfulfilled in their various lives, they reunite to try to find musical success again.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Girls5eva_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-glitch",
  "title": "Glitch",
  "startYear": 2015,
  "endYear": 2019,
  "creator": "{{Plainlist|",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": 18,
  "status": "Ended",
  "network": "ABC Netflix",
  "rating": null,
  "description": "Glitch is an Australian supernatural drama television series developed by Tony Ayres and Louise Fox. Set in the fictional country town of Yoorana, Victoria, it follows seven people who return from the dead in perfect health but with no memory. No one in the town knows why the deceased have returned.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "sci-fi",
   "drama",
   "abc netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Glitch_%28title_screen%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-go-diego-go",
  "title": "Go, Diego, Go!",
  "startYear": 2005,
  "endYear": null,
  "creator": "Chris Gifford Valerie Walsh Valdes",
  "genres": [
   "Animation",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Go, Diego, Go! is an American animated children's television series that aired on Nickelodeon from September 6, 2005, to July 13, 2013, with 80 episodes across four seasons.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "animation",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Go%2C_Diego%2C_Go%21_%28logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-godless",
  "title": "Godless",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Western"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "A wounded outlaw fleeing his mentor's gang hides out in a New Mexico town run almost entirely by women in this seven-part Western. Dusty, violent, and quietly revisionist.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "outlaw",
   "town of women",
   "miniseries",
   "netflix"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-goliath",
  "title": "Goliath",
  "startYear": 2016,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Goliath is an American legal drama television series created by David E. Kelley and Jonathan Shapiro. It ran for four eight-episode seasons from 2016 to 2021 on Amazon Prime Video.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-good-omens",
  "title": "Good Omens",
  "startYear": 1990,
  "endYear": null,
  "creator": "Neil Gaiman",
  "genres": [
   "Fantasy",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Good Omens is a fantasy comedy television series created by Neil Gaiman based on his and Terry Pratchett's 1990 novel. A co-production between Amazon MGM Studios and BBC Studios, the series was directed by Douglas Mackinnon, with Gaiman also serving as showrunner.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 3,
   "epic": 6,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "angel and demon",
   "apocalypse",
   "gaiman and pratchett",
   "prime video"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/57/Good_Omens.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-goosebumps",
  "title": "Goosebumps",
  "startYear": 1995,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Goosebumps is a children's horror anthology television series based on R. L. Stine's best-selling book series. It is an anthology of stories involving preteens and young teenagers in otherworldly scenarios. The series focuses on the same supernatural and occult themes as the novels, with most episodes directly adapting the original stories.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 6,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Goosebumps_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-gravity-falls",
  "title": "Gravity Falls",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Mystery",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Gravity Falls is an American animated mystery comedy television series created by Alex Hirsch for Disney Channel and Disney XD.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 4,
   "funny": 9,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 6,
   "weird": 9
  },
  "keywords": [
   "twins",
   "oregon",
   "codes",
   "disney"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Gravity_Falls_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-greys-anatomy",
  "title": "Grey's Anatomy",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Grey's Anatomy is an American medical drama television series focusing on the personal and professional lives of surgical interns, residents, and attendings at the fictional Seattle Grace Hospital (later renamed Seattle Grace Mercy West Hospital, and currently Grey Sloan Memorial Hospital).",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 1,
   "funny": 3,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 8,
   "epic": 3,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "medical",
   "seattle",
   "soap",
   "long-running"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-groovie-goolies",
  "title": "Groovie Goolies",
  "startYear": 1970,
  "endYear": 1972,
  "creator": null,
  "genres": [
   "Horror",
   "Animation",
   "Superhero",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 1,
  "episodes": 16,
  "status": "Ended",
  "network": "CBS",
  "rating": null,
  "description": "Groovie Goolies is an American animated television show that had its original run Saturday mornings on CBS during the 1970-71. It was rebroadcast the following season on Sunday mornings. Set at a decrepit castle, the show focused on its monstrous but good-natured and mostly friendly inhabitants.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 6,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "horror",
   "animation",
   "cbs",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/GroovieGoolies_title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-hacks",
  "title": "Hacks",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "A legendary Las Vegas stand-up whose act is going stale is forced to work with a canceled young comedy writer she cannot stand. A sharp, funny, surprisingly tender story about mentorship and ego.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "comedian",
   "mentor",
   "las vegas",
   "max"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-hanna",
  "title": "Hanna",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Hanna is an American action drama television series, based on the 2011 film of the same name, for Amazon Prime Video. The series was created and written by David Farr and stars Esme Creed-Miles and Mireille Enos. The first episode was made available on Amazon Prime Video as a time-limited preview on February 3, 2019.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "action",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Hanna.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-hannibal",
  "title": "Hannibal",
  "startYear": null,
  "endYear": null,
  "creator": "Bryan Fuller",
  "genres": [
   "Horror",
   "Crime",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Hannibal is an American psychological horror-thriller television series developed by Bryan Fuller for NBC. The series is based on characters and elements appearing in Thomas Harris' novels Red Dragon (1981), Hannibal (1999), and Hannibal Rising (2006) and focuses on the relationship between Federal Bureau of Investigation (FBI) special investigator Will Graham (Hugh Dancy) and Dr.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 10,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "lecter",
   "gothic",
   "fbi",
   "beautiful dread"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Hannibal_%28Universal_Television_series%29_main_title.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-happy-valley",
  "title": "Happy Valley",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Happy Valley is a British crime drama television series, set and filmed in the Calder Valley, West Yorkshire. Starring Sarah Lancashire, James Norton and Siobhan Finneran, it was written and created by Sally Wainwright and directed by Wainwright, Euros Lyn and Tim Fywell.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "yorkshire",
   "police sergeant",
   "gritty",
   "bbc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Happy_Valley_%28TV_Series%29_title-card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-hard-knocks",
  "title": "Hard Knocks",
  "startYear": 2001,
  "endYear": null,
  "creator": "Marty Callner",
  "genres": [
   "Documentary",
   "Reality"
  ],
  "seasons": 24,
  "episodes": 105,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Hard Knocks is a reality sports documentary television series produced by NFL Films for HBO. First broadcast in 2001, the show typically follows a National Football League (NFL) team through its training camp and covers the team's preparation for the upcoming football season.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 0,
   "epic": 7,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "documentary",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Hard-knocks-logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-haven",
  "title": "Haven",
  "startYear": 2005,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Haven is a supernatural drama television series developed by Jim Dunn and Sam Ernst, loosely based on the Stephen King novel The Colorado Kid (2005). The series, which deals with strange events in a fictional town in Maine named Haven, was filmed on the South Shore of Nova Scotia, and is an American-Canadian co-production.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 8,
   "funny": 3,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Haven_%28Syfy_TV_series%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-hawaii-five-0",
  "title": "Hawaii Five-0",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Hawaii Five-0 is an American police procedural drama television series developed for CBS by Roberto Orci, Alex Kurtzman and Peter M. Lenkov. It is a reboot of the 1968–1980 series (the original series had the letter \"O\" in its title; the 2010 series has the number zero), which also aired on CBS.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Hawaii_Five-0_2010_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-heartbreak-high",
  "title": "Heartbreak High",
  "startYear": 2022,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Heartbreak High is an Australian comedy drama television series created for Netflix by Hannah Carroll Chapman. The series follows the students and teachers of Hartley High as they navigate relationships, sexuality, identity and adolescence. It is a soft reboot of the 1994 series (itself a spin-off of the 1993 feature film The Heartbreak Kid), which first screened on Network Ten.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 2,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Heartbreak_High_%282022_TV_series%29_season_3_promotional_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-heartstopper",
  "title": "Heartstopper",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance",
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Heartstopper is a British coming-of-age romantic comedy-drama television series created and written by Alice Oseman for Netflix, based on her webcomic and graphic novel series of the same name. Starring Kit Connor and Joe Locke as Nick Nelson and Charlie Spring, it follows two teenagers whose friendship at Truham Grammar School develops into a romantic relationship.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 10,
   "dark": 1,
   "romantic": 9,
   "epic": 1,
   "cozy": 9,
   "weird": 1
  },
  "keywords": [
   "british teens",
   "sweet",
   "school",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Heartstopper_title-card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-helix",
  "title": "Helix",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Helix is an American science fiction horror drama television series that aired on Syfy from January 10, 2014, to April 10, 2015. The series follows a team of scientists from the Centers for Disease Control and Prevention (CDC) who travel to a research facility in the Arctic to investigate a potential outbreak of disease.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 6,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Logo_Helix.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-henry-danger",
  "title": "Henry Danger",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Henry Danger is an American superhero comedy television series created by Dan Schneider and Dana Olsen that aired on Nickelodeon from July 26, 2014, to March 21, 2020. The series stars Jace Norman, Cooper Barnes, Riele Downs, Sean Ryan Fox, Ella Anderson, and Michael D. Cohen.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 3,
   "epic": 3,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "superhero",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/Henry_Danger_%282014_television_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-heroes",
  "title": "Heroes",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Drama",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Heroes is an American superhero drama television series created by Tim Kring that aired on NBC for four seasons from September 25, 2006, to February 8, 2010. The series tells the stories of ordinary people who discover that they have superhuman abilities and how these abilities take effect in the characters' lives as they work together to prevent catastrophic futures.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 4,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "save the cheerleader",
   "ensemble",
   "nbc",
   "phenomenon"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-heroes-reborn",
  "title": "Heroes Reborn",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Heroes Reborn is an American television series with 13 episodes which premiered on September 24, 2015, as a continuation of the NBC superhero drama series Heroes. Series creator Tim Kring returned as executive producer. During the 2015 Super Bowl, NBC aired a 16-second teaser promo for the series.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/Heroes_Reborn_logo_nbc.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-hill-street-blues",
  "title": "Hill Street Blues",
  "startYear": 1981,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Hill Street Blues is an American police procedural television series that aired on NBC in prime-time from January 15, 1981, to May 12, 1987, for 146 episodes. The show chronicles the lives of the Metropolitan Police Department staff of a single police station located on Hill Street in an unnamed large U.S. city. The \"blues\" are the police officers in their blue uniforms.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/db/Hill_Street_Blues_official_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-his-dark-materials",
  "title": "His Dark Materials",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "His Dark Materials is a fantasy drama television series based on the trilogy of novels by Philip Pullman. It is produced by Bad Wolf and New Line Productions, for BBC One and HBO, with the latter handling international distribution. The show follows the orphan Lyra Belacqua as she searches for a missing friend and discovers a kidnapping plot related to an invisible cosmic substance called Dust.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "pullman",
   "daemons",
   "multiverse",
   "hbo bbc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/His_Dark_Materials_TV_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-home-and-away",
  "title": "Home and Away",
  "startYear": 1988,
  "endYear": null,
  "creator": "Alan Bateman",
  "genres": [
   "Drama"
  ],
  "seasons": 39,
  "episodes": 8837,
  "status": "Running",
  "network": "Seven Network",
  "rating": null,
  "description": "Home and Away (H&A) is an Australian television soap opera. It was created by Alan Bateman and commenced broadcast on the Seven Network on 17 January 1988.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "drama",
   "seven network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Homeandawaytitlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-homecoming",
  "title": "Homecoming",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Homecoming is an American psychological thriller television series based on the Gimlet Media podcast of the same name. The series premiered November 2, 2018, on Amazon Prime Video, and stars Julia Roberts, Bobby Cannavale, Stephan James, Shea Whigham, Alex Karpovsky, and Sissy Spacek.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 4,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/HomecomingTitleScreen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-homecoming-a-film-by-beyonc",
  "title": "Homecoming: A Film by Beyoncé",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Homecoming: A Film by Beyoncé is a 2019 documentary concert film about American singer Beyoncé's performance at the 2018 Coachella Valley Music and Arts Festival. She wrote, executive-produced, and directed the film. It was released on April 17, 2019, by Netflix, alongside an accompanying live album. Beyoncé's headlining performances at the 2018 Coachella festival took place on April 14 and 21.",
  "vector": {
   "adrenaline": 3,
   "brainy": 10,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 7,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-homeland",
  "title": "Homeland",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Thriller",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Homeland (stylized as HOMƎLAND) is an American espionage thriller television series developed by Howard Gordon and Alex Gansa. It is based on the Israeli series Prisoners of War, created by Gideon Raff, who also serves as an executive producer on Homeland.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "cia",
   "terrorism",
   "paranoia",
   "spy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/97/HomelandTVSeries.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-hot-wheels-battle-force-5",
  "title": "Hot Wheels Battle Force 5",
  "startYear": 2009,
  "endYear": 2012,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 52,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Hot Wheels Battle Force 5 is an animated science fiction television series produced by Mattel, Nelvana, and Nerd Corps Entertainment, based on the Hot Wheels toy line by the American toy maker, Mattel which was introduced in 1968.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Hot_Wheels_Battle_Force_5_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-house",
  "title": "House",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "House (also known as House, M.D. and Dr. House in some international markets) is an American medical drama television series created by David Shore for Fox. It aired for eight seasons from November 16, 2004 to May 21, 2012. It focuses on Dr.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 1,
   "funny": 6,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "medical",
   "genius",
   "sarcasm",
   "diagnosis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e5/House_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-house-of-cards",
  "title": "House of Cards",
  "startYear": 1989,
  "endYear": null,
  "creator": "Beau Willimon",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "House of Cards is an American political thriller television series created by Beau Willimon for the streaming service Netflix. It is based on the 1989 novel of the same title by Michael Dobbs and an adaptation of the eponymous 1990 British television series by Andrew Davies, also from the novel. The first 13-episode season was released on February 1, 2013.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "thriller",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/House_of_Cards_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-house-of-the-dragon",
  "title": "House of the Dragon",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Fantasy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "House of the Dragon is an American fantasy drama television series created by George R. R. Martin and Ryan Condal for HBO. A prequel to Game of Thrones (2011–2019), it is the second television series in the Game of Thrones franchise.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 2,
   "epic": 10,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "targaryen",
   "dragons",
   "prequel",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4b/House_of_the_dragon_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-housebroken",
  "title": "HouseBroken",
  "startYear": 2021,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "HouseBroken is an American animated sitcom created by Jennifer Crittenden, Clea DuVall, and Gabrielle Allan that aired on Fox from May 31, 2021 to August 6, 2023. In August 2021, the series was renewed for a second season which premiered on December 4, 2022. The show reunited Nat Faxon and Sharon Horgan in roles similar to their characters in Disenchantment.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/HouseBroken_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-how-do-they-do-it",
  "title": "How Do They Do It?",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "How Do They Do It? is a television series produced by Wag TV for Discovery Channel. Each programme explores how two or three ordinary objects are made and used.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 0,
   "epic": 7,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/HowDoTheyDoIt.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-how-i-met-your-mother",
  "title": "How I Met Your Mother",
  "startYear": null,
  "endYear": null,
  "creator": "Carter Bays & Craig Thomas",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "How I Met Your Mother (often abbreviated HIMYM) is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which aired from September 19, 2005, to March 31, 2014, follows main character Ted Mosby and his group of friends in New York City's Manhattan.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 9,
   "epic": 1,
   "cozy": 9,
   "weird": 3
  },
  "keywords": [
   "sitcom",
   "new york",
   "frame story",
   "friendship"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fd/HowIMetYourMother.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-how-to-rock",
  "title": "How to Rock",
  "startYear": 2012,
  "endYear": null,
  "creator": "Jim O'Doherty",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "How to Rock is an American teen sitcom created by Jim O'Doherty and developed by David M. Israel that ran on Nickelodeon from February 4 to December 8, 2012. It stars singer Cymphonique Miller, who previously sang the theme song for Nickelodeon's Winx Club. It also co-stars Samantha Boscarino, Max Schneider, Lulu Antariksa, Halston Sage, Noah Crawford, and Christopher O'Neal.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 0,
   "romantic": 3,
   "epic": 0,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/How_to_Rock_%28Nickelodeon_Productions%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-human-target",
  "title": "Human Target",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Human Target is an American spy action television series that was broadcast by Fox in the United States. Based loosely on the Human Target comic book character created by Len Wein and Carmine Infantino for DC Comics, it is the second series based on this title developed for television, the first TV series having been aired in 1992 on ABC. Developed by Jonathan E.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 1,
   "romantic": 1,
   "epic": 2,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/Human_Target_2010_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-humans",
  "title": "Humans",
  "startYear": 2015,
  "endYear": null,
  "creator": "Jonathan Brackley Sam Vincent",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Humans is a science fiction television series that debuted in June 2015 on Channel 4 and on AMC. Created by Jonathan Brackley and Sam Vincent, based on the Swedish science fiction drama Real Humans, the series explores the themes of artificial intelligence, robotics, and their effects on the future of humanity, focusing on the social, cultural, and psychological impact of the invention and…",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/Humans_Series_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-hunters",
  "title": "Hunters",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Hunters is an American conspiracy drama thriller television series created by David Weil. It premiered on February 21, 2020, on Amazon Prime Video. In August 2020, the series was renewed for a second and final season, which premiered on January 13, 2023.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Hunters_%282020_TV_series%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-i-spy",
  "title": "I Spy",
  "startYear": 1965,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "I Spy is an American spy television series developed by David Friedkin and Morton Fine, that ran for three seasons on NBC from September 15, 1965, to April 15, 1968, and teamed American intelligence agents Kelly Robinson (Robert Culp) and Alexander \"Scotty\" Scott (Bill Cosby), traveling undercover as international \"tennis bums.\" Robinson poses as an amateur with Scott as his trainer, playing…",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/I_Spy_Title_Screen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-icarly",
  "title": "ICarly",
  "startYear": 2007,
  "endYear": null,
  "creator": "Dan Schneider",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "iCarly is an American teen sitcom created by Dan Schneider, which originally aired on Nickelodeon from September 8, 2007, to November 23, 2012. The series centers on Carly Shay, a Seattle-based teenager who creates and hosts her own web show called iCarly with her best friends, Sam Puckett and Freddie Benson, in the apartment loft that she and her older brother, Spencer, live in.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/Icarly_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-idol-warrior-miracle-tunes",
  "title": "Idol × Warrior Miracle Tunes!",
  "startYear": 2017,
  "endYear": 2018,
  "creator": null,
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": 51,
  "status": "Ended",
  "network": "TV Tokyo",
  "rating": null,
  "description": "Idol × Warrior Miracle Tunes! (アイドル×戦士 ミラクルちゅーんず!, Aidoru Senshi Mirakuru Chūnzu!) is a Japanese television series that aired from April 2, 2017, to March 25, 2018, on TV Tokyo. The show is the first installment of the Girls × Heroine Series conceived by Takara Tomy and OLM, Inc. with the assistance of Shogakukan and EXPG Studio, aimed towards a female demographic between ages 2 to 6.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 2,
   "epic": 5,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "animation",
   "family",
   "tv tokyo",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-impulse",
  "title": "Impulse",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Impulse is an American science fiction drama television series based on the 2013 Steven Gould novel Impulse. The novel was one of a series following Gould's novel Jumper. The series is a stand-alone spin-off to the 2008 film adaptation of Jumper. The series premiered on June 6, 2018, on YouTube Premium. Lauren LeFranc, Doug Liman, David Bartis, and Gene Klein served as executive producers.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/ImpulseTitleScreen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-in-the-heat-of-the-night",
  "title": "In the Heat of the Night",
  "startYear": 1988,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "In the Heat of the Night is an American police procedural crime drama television broadcast 1988 to 1995, starring Carroll O'Connor and Howard Rollins. It was loosely based on the Academy Award -winning 1967 film of the same title directed by Norman Jewison, starring Sidney Poitier and Rod Steiger and was in turn inspired by the 1965 novel by John Ball.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/In_the_Heat_of_the_Night_%28TV_series%29_cast_photo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-inside-job",
  "title": "Inside Job",
  "startYear": 2021,
  "endYear": 2022,
  "creator": "Shion Takeuchi",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy"
  ],
  "seasons": 1,
  "episodes": 18,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Inside Job (stylized in lowercase) is an American adult animated science fiction sitcom created by Shion Takeuchi for Netflix. The series premiered on October 22, 2021. Takeuchi, a former Gravity Falls writer, acts as showrunner and is an executive producer alongside Gravity Falls creator Alex Hirsch and BoJack Horseman director Mike Hollingsworth.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Inside_Job_%282021_TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-inside-the-factory",
  "title": "Inside the Factory",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": 78,
  "status": "Running",
  "network": "BBC Two",
  "rating": null,
  "description": "Inside the Factory is a British television series produced by Voltage TV for the BBC. The first episode was broadcast on BBC Two on 5 May 2015. Each episode explores how a specific product is made inside a factory. The 2024 series is presented by Paddy McGuinness, Cherry Healey and historian Ruth Goodman who provides a look at how products came to exist as we know them today.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "bbc two",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c1/InsideTheFactoryTitleCard.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-inspector-gadget",
  "title": "Inspector Gadget",
  "startYear": 1983,
  "endYear": null,
  "creator": "Andy Heyward Jean Chalopin Bruno Bianchi",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Inspector Gadget (French: Inspecteur Gadget) is an animated children's science fiction comedy series created by Andy Heyward, Jean Chalopin and Bruno Bianchi, and was produced by DIC Audiovisuel in association with Lexington Broadcast Services Company.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Inspector_Gadget_print_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-invasion",
  "title": "Invasion",
  "startYear": 2005,
  "endYear": 2006,
  "creator": "Shaun Cassidy",
  "genres": [
   "Sci-Fi"
  ],
  "seasons": 1,
  "episodes": 22,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "Invasion is an American science fiction television series created by Shaun Cassidy. It originally aired on ABC from September 21, 2005, through May 17, 2006.",
  "vector": {
   "adrenaline": 4,
   "brainy": 10,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 9,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/Invasion_DVD.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-invincible",
  "title": "Invincible",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Superhero",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Invincible is an American adult animated superhero television series created by Robert Kirkman for the streaming service Amazon Prime Video, based on the Image comic book series of the same name co-created with Cory Walker and Ryan Ottley. It is produced by Skybound Entertainment, Wind Sun Sky Entertainment, Point Grey Pictures, and Amazon MGM Studios.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 4,
   "funny": 4,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "superhero deconstruction",
   "brutal",
   "prime video",
   "kirkman"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/79/Invincible_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-invincible-fight-girl",
  "title": "Invincible Fight Girl",
  "startYear": 2024,
  "endYear": 2024,
  "creator": "Juston Gordon-Montgomery",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 1,
  "episodes": 10,
  "status": "Ended",
  "network": "Adult Swim",
  "rating": null,
  "description": "Invincible Fight Girl is an American animated action comedy television series created by Juston Gordon-Montgomery for Cartoon Network's nighttime programming block Adult Swim. The series premiered on November 3, 2024, in the United States on the Toonami programming block and on the streaming service HBO Max shortly after its initial broadcast.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "adult swim",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Invincible_Fight_Girl_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-it-welcome-to-derry",
  "title": "It – Welcome to Derry",
  "startYear": 1986,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Horror",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "It: Welcome to Derry is an American supernatural horror television series based on Stephen King's 1986 novel It. Serving as a prequel to the films It (2017) and It Chapter Two (2019), the series was developed by Andy Muschietti, Barbara Muschietti and Jason Fuchs, all of whom were involved in the It films.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "horror",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Welcome_to_derrylogo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-its-always-sunny-in-philadelphia",
  "title": "It's Always Sunny in Philadelphia",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "It's Always Sunny in Philadelphia (IASIP) is an American sitcom created by Rob McElhenney and co-developed by Glenn Howerton for FX, currently airing on FXX and FX. The show premiered on August 4, 2005, and stars Charlie Day, Howerton, McElhenney, Kaitlin Olson, and Danny DeVito, with Day, Howerton, and McElhenney as executive producers.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 1,
   "cozy": 3,
   "weird": 8
  },
  "keywords": [
   "the gang",
   "depraved",
   "sitcom",
   "fx"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c6/IASIPTC.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-its-pony",
  "title": "It's Pony",
  "startYear": 2020,
  "endYear": null,
  "creator": "Ant Blades",
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "It's Pony is a British animated television series created by Ant Blades that premiered on Nickelodeon in the United States on January 18, 2020. The series is storyboarded, designed, produced, and animated by Blue Zoo Animation Studio. The final episode aired on Nicktoons on May 26, 2022.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 1,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/It%27s_Pony_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-james-cameron",
  "title": "James Cameron",
  "startYear": 1954,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Documentary",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "James Francis Cameron (born August 16, 1954) is a Canadian and New Zealand filmmaker and explorer. His films combine cutting-edge film technology with classical filmmaking techniques and have grossed over $10 billion worldwide, making him the second highest-grossing film director of all time.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "documentary",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4f/James_Cameron_at_53rd_Saturn_Awards_2026-01_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-jem",
  "title": "Jem",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Romance",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Jem, also known as Jem and The Holograms, is an American animated musical television series that ran from 1985 to 1988. The series is about record company owner Jerrica Benton, her singer alter-ego Jem, and the adventures of her band Jem and The Holograms. The series was a joint collaboration by Hasbro, Sunbow Productions and Marvel Productions, the same team responsible for G.I.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Jem_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-jenni-rivera",
  "title": "Jenni Rivera",
  "startYear": 1969,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Dolores Janney \"Jenni\" Rivera (July 2, 1969 – December 9, 2012) was an American singer, songwriter, actress, businesswoman, and producer known for her work within the regional Mexican music genre, specifically in the styles of banda, mariachi and norteño.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 4,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jenni_Rivera_performing_in_2009_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-jericho",
  "title": "Jericho",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Mystery",
   "Action",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Jericho is an American post-apocalyptic action drama television series, which centers on the residents of the fictional city of Jericho, Kansas, in the aftermath of a nuclear attack on 23 major cities in the contiguous United States. It was produced by CBS Paramount Network Television and Junction Entertainment, with executive producers Jon Turteltaub, Stephen Chbosky, and Carol Barbee.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Jericho_%282006_CBS_network_TV_series%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-john-wayne-gacy",
  "title": "John Wayne Gacy",
  "startYear": 1942,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "John Wayne Gacy (March 17, 1942 – May 10, 1994) was an American serial killer and sex offender who raped, tortured and murdered at least thirty-three young men and boys between 1972 and 1978 in Norwood Park Township, a suburb of Chicago, Illinois. He became known as the \"Killer Clown\" due to his public performances as a clown prior to the discovery of his crimes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 2,
   "epic": 4,
   "cozy": 8,
   "weird": 1
  },
  "keywords": [
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c7/John_Wayne_Gacy_1978_mugshot.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-johnny-test",
  "title": "Johnny Test",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Johnny Test is a animated television series created by Scott Fellows, developed by WildBrain and a revival to the 2005 series of the same name. The series premiered on July 16, 2021, on Netflix, and also premiered on Family Chrgd on October 16, 2021. An interactive special, titled Johnny Test's Ultimate Meatloaf Quest, premiered on November 16.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Johnny_Test_Title_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-jojo-siwa",
  "title": "JoJo Siwa",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Joelle Joanie Siwa ( SEE-wah; born May 19, 2003), known professionally as JoJo Siwa, is an American singer, dancer, actress, and media personality. From 2015 to 2016, she appeared as a dancer on two seasons of the reality television show Dance Moms alongside her mother, Jessalynn Siwa. She was included on Time's annual list of the 100 most influential people in the world in 2020.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 8,
   "weird": 2
  },
  "keywords": [
   "family",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/65/JoJo_Siwa_2026_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-josie-and-the-pussycats",
  "title": "Josie and the Pussycats",
  "startYear": 1970,
  "endYear": 1972,
  "creator": "Dan DeCarlo Richard Goldwater",
  "genres": [
   "Animation",
   "Comedy",
   "Mystery",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 32,
  "status": "Ended",
  "network": "CBS",
  "rating": null,
  "description": "Josie and the Pussycats (formatted as Josie and the Pussy Cats in the opening titles) is an American animated television series based upon the Archie Comics comic book series of the same name created by Dan DeCarlo. Produced for Saturday morning television by Hanna-Barbera Productions, 16 episodes of Josie and the Pussycats aired on CBS from September 12, 1970 to December 23, 1972.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "cbs",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/36/Josie_and_the_Pussycats_%281970_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-jupiters-legacy",
  "title": "Jupiter's Legacy",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Jupiter's Legacy is an American superhero television series that premiered on Netflix on May 7, 2021. Based on the 2013–2025 comic book series of the same name by Mark Millar and Frank Quitely, the show was developed for television by Steven S. DeKnight, who initially served as showrunner, but was replaced by Sang Kyu Kim midway through production.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "superhero",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jupiters_Legacy_Title_Text.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-justified",
  "title": "Justified",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Western"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Justified may refer to: Justified (album), an album by Justin Timberlake \"Justified\" (song), a single by Kacey Musgraves Justified (TV series), an American television drama series \"Justified\" (A Day to Remember song), a 2016 song from the album Bad Vibrations \"Justified?\", a 1994 song by Sphere Lazza Maa Kheru (English translation: \"Justified\" or \"True of Voice\"), an ancient Egyptian epithet for…",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marshal",
   "kentucky",
   "neo-western",
   "elmore leonard"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-justified-2010",
  "title": "Justified",
  "startYear": 2010,
  "endYear": null,
  "creator": "Graham Yost",
  "genres": [
   "Crime",
   "Thriller",
   "Action",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Justified is an American neo-Western/Southern Gothic crime drama television series that premiered on March 16, 2010, on the FX network. Developed by Graham Yost, it is based on Elmore Leonard's stories about the character Raylan Givens, particularly \"Fire in the Hole\". Timothy Olyphant portrays Raylan Givens, a tough deputy U.S. Marshal enforcing his own brand of justice.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/22/Justified_2010_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-justified-city-primeval",
  "title": "Justified: City Primeval",
  "startYear": 2023,
  "endYear": 2023,
  "creator": null,
  "genres": [
   "Crime",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": 8,
  "status": "Ended",
  "network": "FX",
  "rating": null,
  "description": "Justified: City Primeval is an American neo-Western crime drama television miniseries developed by showrunners Dave Andron and Michael Dinner. The series continues the story from Justified taking inspiration from the Elmore Leonard novel City Primeval: High Noon in Detroit and short story \"Fire in the Hole\". Timothy Olyphant returns to star as Deputy U.S.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "western",
   "fx",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Justified_City_Primeval.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kamen-rider",
  "title": "Kamen Rider",
  "startYear": 1971,
  "endYear": 1973,
  "creator": "Shotaro Ishinomori",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Superhero",
   "Action"
  ],
  "seasons": null,
  "episodes": 98,
  "status": "Ended",
  "network": "ANN (MBS, NET)",
  "rating": null,
  "description": "Kamen Rider (仮面ライダー, Kamen Raidā) is a Japanese tokusatsu superhero television series and weekly science fiction manga created by manga artist Shotaro Ishinomori. The original airing consisted of a total of 98 episodes and were broadcast from April 3, 1971, to February 10, 1973, on Mainichi Broadcasting System and NET (now TV Asahi).",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 6,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "horror",
   "sci-fi",
   "ann (mbs, net)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b7/Kamen_Rider_%281971%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kamen-rider-dragon-knight",
  "title": "Kamen Rider: Dragon Knight",
  "startYear": 2008,
  "endYear": 2009,
  "creator": "Steve Wang",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Mystery",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 40,
  "status": "Ended",
  "network": "The CW (CW4Kids)",
  "rating": null,
  "description": "Kamen Rider: Dragon Knight is a science fiction superhero television series that originally aired in the United States on The CW, as part of the CW4Kids programming block, from December 13, 2008, to December 26, 2009. It is an adaptation of the Japanese tokusatsu series Kamen Rider Ryuki and is the second American adaptation of the Kamen Rider franchise after Saban's Masked Rider (1995).",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "the cw (cw4kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/KamenRider_DragonKnight.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kappa-mikey",
  "title": "Kappa Mikey",
  "startYear": 2006,
  "endYear": 2008,
  "creator": "Larry Schwarz",
  "genres": [
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 52,
  "status": "Ended",
  "network": "Nicktoons Network",
  "rating": null,
  "description": "Kappa Mikey is an American animated comedy television series created by Larry Schwarz for Nicktoons Network. Despite airing on the channel, it was not an official Nicktoon, being produced by Schwarz's production company Animation Collective. The series ran from February 25, 2006, to September 20, 2008, with repeats until November 29, 2010, across two seasons. 52 22-minute episodes were produced.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "animation",
   "superhero",
   "nicktoons network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/17/Kappa_Mikey.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-killing-eve",
  "title": "Killing Eve",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Killing Eve is a British dramedy and spy thriller television series produced in the United Kingdom by Sid Gentle Films for BBC America and BBC Three. The series follows Eve Polastri (Sandra Oh), a British intelligence investigator tasked with capturing psychopathic assassin Villanelle (Jodie Comer). As the chase progresses, the two develop a mutual obsession.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 5,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "assassin",
   "obsession",
   "spy",
   "cat and mouse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/52/Killing_Eve_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-king-of-the-hill",
  "title": "King of the Hill",
  "startYear": 1997,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "King of the Hill is an American animated sitcom created by Mike Judge and Greg Daniels that initially aired on Fox from January 12, 1997, to September 13, 2009, with four more episodes airing in syndication from May 3–6, 2010. The show was later revived on Hulu and Disney+ on August 4, 2025.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/King_of_the_Hill_%28logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kipo-and-the-age-of-wonderbeasts",
  "title": "Kipo and the Age of Wonderbeasts",
  "startYear": 2015,
  "endYear": null,
  "creator": "Radford Sechrist",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Kipo and the Age of Wonderbeasts is an animated television series created by Radford Sechrist and developed by Bill Wolkoff, adapted from Sechrist's 2015 webcomic Kipo. The series is produced by American company DreamWorks Animation Television in partnership with South Korean animation studio Mir.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 8,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kipo_and_the_Age_of_Wonderbeasts_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-knight-rider",
  "title": "Knight Rider",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Knight Rider is an American action television series that follows the 1982 television series of the same title created by Glen A. Larson and the 2008 television movie. The series aired on NBC from September 24, 2008 to March 4, 2009. The series stars Justin Bruening as Michael Traceur, the estranged son of Michael Knight; at the end of the pilot episode, Traceur renames himself Michael Knight II.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/Knight_Rider_%282008_TV_series_logo%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-knight-squad",
  "title": "Knight Squad",
  "startYear": 2018,
  "endYear": null,
  "creator": "Sean Cunningham & Marc Dworkin",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Knight Squad is an American comedy television series created by Sean Cunningham and Marc Dworkin that premiered on Nickelodeon on February 19, 2018. The series, which ran for two seasons and concluded on April 20, 2019, stars Owen Joyner, Daniella Perkins, Lilimar, Lexi DiBenedetto, Amarr M. Wooten, Savannah May, and Kelly Perine.",
  "vector": {
   "adrenaline": 0,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 4,
   "epic": 2,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/KnightSquadlogo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kolchak-the-night-stalker",
  "title": "Kolchak: The Night Stalker",
  "startYear": 1974,
  "endYear": null,
  "creator": "Jeff Rice",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Fantasy",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Kolchak: The Night Stalker is an American television series that aired on ABC during the 1974–1975 season. The series followed wire service reporter Carl Kolchak (Darren McGavin) who investigates mysterious crimes with unlikely causes, particularly those involving the supernatural or science fiction, including fantastic creatures.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Darren_McGavin_%22Kolchak_The_Night_Stalker%22_%281974_ABC_press_photo%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kung-fu",
  "title": "Kung Fu",
  "startYear": 1972,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Adventure",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Kung Fu is an American action-adventure martial arts Western drama television series starring David Carradine. The series follows the adventures of Kwai Chang Caine, a Shaolin monk who travels through the American Old West, armed only with his spiritual training and his skill in martial arts, as he seeks his half-brother, Danny Caine.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "action",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/52/Kung_Fu_%281972_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-kung-fu-2021",
  "title": "Kung Fu",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Kung Fu is an American martial arts action-adventure television series that premiered on The CW on April 7, 2021, and ended on March 8, 2023. Set in the present, it is an adaptation of the 1970s series of the same title. It is produced by Warner Bros. Television, as was the original series and Kung Fu: The Legend Continues. Executive producers include Christina M.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 2,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Kung_Fu_%282021_TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-la-brea",
  "title": "La Brea",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "La Brea is an American science fiction drama television series that aired on NBC from September 28, 2021 until February 13, 2024, across 3 seasons and 30 episodes. It was produced by Keshet Studios and Universal Television and created and executive produced by David Appelbaum. The series received mixed-to-negative reviews from critics.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 8,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/La_Brea_%28TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-la-que-se-avecina",
  "title": "La que se avecina",
  "startYear": 2007,
  "endYear": null,
  "creator": "Alberto Caballero Laura Caballero Daniel Deorador",
  "genres": [
   "Comedy"
  ],
  "seasons": 15,
  "episodes": 194,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "La que se avecina is a Spanish television sitcom created by Alberto Caballero, Laura Caballero and Daniel Deorador. The show is set in the fictitious Mirador de Montepinar, a condominium located in the suburbs of Madrid. The show is an indirect successor to the Antena 3 comedy Aquí no hay quien viva.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 4,
   "epic": 2,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/09/LaQueSeAvecina.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-last-chance-u",
  "title": "Last Chance U",
  "startYear": 2016,
  "endYear": 2020,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": 5,
  "episodes": 38,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Last Chance U is an American documentary television series that is produced by and premiered on Netflix. The six-episode first season explores the football program at East Mississippi Community College, which features several collegiate athletes that have had trouble in their lives and struggled with finding structure.",
  "vector": {
   "adrenaline": 1,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 8,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Last_Chance_U.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-last-resort",
  "title": "Last Resort",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Last Resort is an American military drama television series that aired on ABC from September 27, 2012, to January 24, 2013. The series was created by Shawn Ryan and Karl Gajdusek, and produced by Sony Pictures Television. On November 16, 2012, ABC announced that the series would not be picked up for another season, and the show finished with its original 13 episodes.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 1,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "action",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Last_Resort_ABC.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-law-order-organized-crime",
  "title": "Law & Order: Organized Crime",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Law & Order: Organized Crime is an American crime drama television series that premiered on NBC on April 1, 2021, running until June 12, 2025, with season five moving to Peacock. The seventh series in the Law & Order franchise and a spin-off of Law & Order and Law & Order: Special Victims Unit, the series stars Christopher Meloni as Elliot Stabler, reprising his role from SVU.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Law_%26_Order_Organized_Crime_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-legend-of-the-seeker",
  "title": "Legend of the Seeker",
  "startYear": 2008,
  "endYear": 2010,
  "creator": "Sam Raimi",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 44,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Legend of the Seeker is an American fantasy television series created by Sam Raimi, based on the fantasy novel series The Sword of Truth by Terry Goodkind. Distributed in U.S. by Disney-ABC Domestic Television, ABC Studios produced the series for first-run syndication with Raimi, Robert Tapert, Joshua Donen, Ned Nalle, and Kenneth Biller serving as executive producers.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/43/Legend_of_the_Seeker_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-legends",
  "title": "Legends",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Legends is an American crime drama television series that aired on TNT from August 13, 2014, to December 28, 2015. Developed by Howard Gordon, Jeffrey Nachmanoff, and Mark Bomback, the series is based on the 2005 book Legends: A Novel of Dissimulation written by Robert Littell. On December 4, 2014, TNT renewed Legends for a 10-episode second season, which premiered on November 2, 2015.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/Legends_%28TV%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lego-city-adventures",
  "title": "Lego City Adventures",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lego City Adventures is an animated television series that premiered on Nickelodeon in the United States on June 22, 2019, loosely based on the long-running Lego City toyline theme. The third season of the series was released on Netflix in its entirety on April 15, 2022, and the fourth and final season was released on The Lego Group's YouTube channel on October 25, 2022.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Lego_City_Adventures.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lego-star-wars-the-freemaker-adventures",
  "title": "Lego Star Wars: The Freemaker Adventures",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lego Star Wars: The Freemaker Adventures is an animated television series that is based on the Lego Star Wars theme, and premiered on Disney XD on June 20, 2016. Disney XD announced that it had renewed the series for a second season on April 3, 2017.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-level-up",
  "title": "Level Up",
  "startYear": 2012,
  "endYear": 2013,
  "creator": "Derek Guiley David Schneiderman",
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Comedy",
   "Adventure"
  ],
  "seasons": 2,
  "episodes": 35,
  "status": "Ended",
  "network": "Cartoon Network",
  "rating": null,
  "description": "Level Up is an American adventure comedy television series that aired on Cartoon Network. A film with the same title, which served as a pilot for the series, premiered on November 23, 2011. The series aired from January 24, 2012, to February 19, 2013. Level Up was the second Cartoon Network show spawned from a live-action film, with the first being Out of Jimmy's Head.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "cartoon network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c6/Level-Up-Cartoon-Network-Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-leverage",
  "title": "Leverage",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Thriller",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Leverage is an American action crime drama television series, which aired on TNT from December 7, 2008, to December 25, 2012. The series was produced by Electric Entertainment, a production company of executive producer and director Dean Devlin.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/31/Leverage_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lexx",
  "title": "Lexx",
  "startYear": 1997,
  "endYear": 2002,
  "creator": "Paul Donovan Lex Gigeroff Jeffrey Hirschfield",
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Drama"
  ],
  "seasons": 4,
  "episodes": 61,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Lexx (also known as LEXX: The Dark Zone Stories and Tales from a Parallel Universe) is a science fiction television series created by Lex Gigeroff and brothers Paul and Michael Donovan. It was originally aired on April 18, 1997, on Canada's Citytv as four made-for-TV films. Beginning with season two, the format changed to a traditional TV series with each episode running 45 minutes.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/Lexx_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-libertys-kids",
  "title": "Liberty's Kids",
  "startYear": 2002,
  "endYear": 2003,
  "creator": "Kevin O'Donnell Michael Maliani",
  "genres": [
   "Animation",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 40,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Liberty's Kids (stylized on-screen as Liberty's Kids: Est. 1776) is an American animated historical fiction television series produced by DIC Entertainment Corporation and WHYY-TV, and originally aired on PBS Kids from September 2, 2002, to April 4, 2003, with reruns airing on most PBS stations until October 10, 2004.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "animation",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Libkidsmenu.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lie-to-me",
  "title": "Lie to Me",
  "startYear": 2009,
  "endYear": 2011,
  "creator": "Samuel Baum",
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 48,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Lie to Me (stylized as Lie to me*) is an American crime drama television series created by Samuel Baum that aired on Fox from January 21, 2009, to January 31, 2011. In the show, Dr.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/96/Lie_to_Me.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-life-after-people",
  "title": "Life After People",
  "startYear": 2008,
  "endYear": 2025,
  "creator": "David de Vries",
  "genres": [
   "Documentary"
  ],
  "seasons": 3,
  "episodes": 28,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Life After People is a television series on which scientists, mechanical engineers, and other experts speculate about what might become of planet Earth if humanity suddenly disappeared. The featured experts also talk about the impact of human absence on the environment and the vestiges of civilization thus left behind.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/22/LifeAfterPeople_SC.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lilyhammer",
  "title": "Lilyhammer",
  "startYear": 2012,
  "endYear": 2014,
  "creator": "Anne Bjørnstad Eilif Skodvin",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 24,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Lilyhammer is a crime comedy-drama television series starring Steven Van Zandt about a former New York–based gangster named Frank \"The Fixer\" Tagliano trying to start a new life in isolated Lillehammer, Norway.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 2,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/Lilyhammer1.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-limitless",
  "title": "Limitless",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Crime",
   "Comedy",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Limitless is an American comedy-drama television series that aired on CBS for one season from 2015 to 2016. It is a continuation of the 2011 film of the same name, and takes place four years after the film's events.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Limitless_TV_series.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lincoln-rhyme-hunt-for-the-bone-collector",
  "title": "Lincoln Rhyme: Hunt for the Bone Collector",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lincoln Rhyme: Hunt for the Bone Collector is an American crime drama television series that premiered on NBC as part of the 2019–20 television season, on January 10, 2020 and ran until March 13, 2020. The series is based on the 1997 novel The Bone Collector by Jeffery Deaver. While popular as a mid-season replacement show, NBC made the decision in June 2020 to cancel after one season.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/Lincoln_Rhyme_-_Hunt_for_the_Bone_Collector_logo.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-line-of-duty",
  "title": "Line of Duty",
  "startYear": null,
  "endYear": null,
  "creator": "Jed Mercurio",
  "genres": [
   "Drama",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Line of Duty is a British police procedural drama television series created by Jed Mercurio and produced by World Productions for the British Broadcasting Corporation (BBC). It began broadcasting on BBC Two on 26 June 2012. The programme performed well and was quickly commissioned for additional series that aired in 2014 and 2016.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "anti-corruption",
   "interrogations",
   "bbc",
   "twists"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Line_of_Duty_%28TV_series%29_Titlecard.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-lioness",
  "title": "Lioness",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lioness, also marketed as Special Ops: Lioness, is an American spy thriller television series created by Taylor Sheridan that premiered on July 23, 2023, on Paramount+. The second season premiered on October 27, 2024. In October 2025, the series was renewed for a third season, which premiered on August 2, 2026. Season 1 averaged viewership of 3.5 million.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "thriller",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/Lioness_%282025%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lip-sync-battle-shorties",
  "title": "Lip Sync Battle Shorties",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lip Sync Battle Shorties is an American reality television program that first aired on Nickelodeon as a special hosted by Sarah Hyland on December 11, 2016, and later returned as a regular television program on October 15, 2017. The program is presented by Nick Cannon and JoJo Siwa.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "family",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/46/Lip_Sync_Battle_Shorties_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-little-einsteins",
  "title": "Little Einsteins",
  "startYear": 2005,
  "endYear": 2009,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 67,
  "status": "Ended",
  "network": "Disney Channel (Playhouse Disney)",
  "rating": null,
  "description": "Little Einsteins is an American live-action/animated children's television series developed by Douglas Wood. Produced by Curious Pictures in association with The Baby Einstein Company, the series follows the adventures of a team of four young children: Leo, June, Quincy, and Annie.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "disney channel (playhouse disney)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/Disney%27s_Little_Einsteins_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-littlest-pet-shop",
  "title": "Littlest Pet Shop",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Littlest Pet Shop is an animated children's television series produced by Hasbro Studios and animated by DHX Media. The series is based on Hasbro's Littlest Pet Shop and Blythe toy lines and was broadcast on Discovery Family from November 2012 to June 2016. It centers on Blythe Baxter, a teen girl who, after moving into an apartment in Downtown City, gains the ability to communicate with animals.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/88/Littlest_Pet_Shop_%282012_TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lizzie-mcguire",
  "title": "Lizzie McGuire",
  "startYear": 2001,
  "endYear": null,
  "creator": "Terri Minsky",
  "genres": [
   "Animation",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lizzie McGuire is an American teen sitcom created by Terri Minsky that premiered on Disney Channel on January 12, 2001. The series stars Hilary Duff as the titular character who learns to navigate the personal and social issues of her teenage years. Duff also voices an animated version of Lizzie that performs soliloquies to express the character's inner thoughts and emotions.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Lizzie_McGuire_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lloyd-in-space",
  "title": "Lloyd in Space",
  "startYear": 2001,
  "endYear": null,
  "creator": "Joe Ansolabehere Paul Germain",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 3,
  "episodes": 39,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lloyd in Space is an American animated television series, created by Recess co-creators Joe Ansolabehere and Paul Germain. It premiered on February 3, 2001, on ABC on Saturday mornings. The pilot was written by Ansolabehere, Germain and Mark Drop, with the characters designed by Eric Keyes. The series ran for three seasons, airing its final episode on February 27, 2004.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/LiSTitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-loki",
  "title": "Loki",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Sci-Fi",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character Loki. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 8
  },
  "keywords": [
   "marvel",
   "time variance",
   "antihero",
   "disney+"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-lol-chi-ride-fuori",
  "title": "LOL - Chi ride è fuori",
  "startYear": 2021,
  "endYear": null,
  "creator": "Hitoshi Matsumoto",
  "genres": [
   "Comedy",
   "Reality"
  ],
  "seasons": null,
  "episodes": 36,
  "status": "Running",
  "network": "Amazon Prime Video",
  "rating": null,
  "description": "LOL - Chi ride è fuori is an Italian comedy reality television show based on the format of Japanese comedian Hitoshi Matsumoto's Documental. It is hosted by Fedez, Mara Maionchi (Season 1) and Frank Matano (Season 2–3), The first four episodes were published on 1 April 2021, while the remaining two were made available on April 8. On April 23, 2021, the game show was renewed for a second edition.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 2,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "reality",
   "amazon prime video",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Chi_ride_%C3%A8_fuori.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-longmire",
  "title": "Longmire",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Longmire is an American neo-Western crime drama television series that premiered on June 3, 2012, on the A&E network, developed by John Coveny and Hunt Baldwin. The series is based on the Walt Longmire Mysteries series of novels by Craig Johnson. It centers on Walt Longmire, a sheriff in Wyoming.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Longmire_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-looking",
  "title": "Looking",
  "startYear": 2014,
  "endYear": null,
  "creator": "Michael Lannan",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Looking is an American comedy-drama television series that aired on HBO from January 19, 2014, to July 23, 2016. It was created by Michael Lannan, with Lannan, Andrew Haigh, David Marshall Grant, and Sarah Condon serving as executive producers. The show stars Jonathan Groff, Frankie J. Alvarez, Murray Bartlett, Lauren Weedman, Russell Tovey, and Raúl Castillo.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 3,
   "epic": 1,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/Intertitle_of_the_HBO_series_Looking.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-loonatics-unleashed",
  "title": "Loonatics Unleashed",
  "startYear": 2005,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Loonatics Unleashed is an American superhero animated television series produced by Warner Bros. Animation that ran on Kids' WB for two seasons from 2005 to 2007. It also aired on Cartoon Network internationally, excluding US and Japan. The series was based and inspired on the Looney Tunes cartoon characters, with the series described by Warner Bros. as an action comedy.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Loonatics_Unleashed.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lost",
  "title": "Lost",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Sci-Fi",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Lost is an American science fiction adventure drama television series created by Jeffrey Lieber, J. J. Abrams, and Damon Lindelof that aired on ABC from September 22, 2004, to May 23, 2010, with a total of 121 episodes over six seasons.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 8,
   "cozy": 1,
   "weird": 8
  },
  "keywords": [
   "island",
   "mysteries",
   "flashbacks",
   "ensemble"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Lost_main_title.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-lost-girl",
  "title": "Lost Girl",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lost Girl is a Canadian supernatural drama television series that premiered on Showcase on September 12, 2010, and ran for five seasons. It follows the life of a succubus named Bo, played by Anna Silk, as she learns to control her superhuman abilities, help those in need, and discover the truth about her origins.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ee/LostGirlTVSeriesLogo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lost-in-space",
  "title": "Lost in Space",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lost in Space is an American science fiction television series following the adventures of a family of space colonists whose ship veers off course. The series is a reimagining of the 1965 series of the same name, inspired by the 1812 novel The Swiss Family Robinson and the 1962 Gold Key comic book Space Family Robinson, created by Del Connell and artist Dan Spiegle.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 9,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Lost_in_Space_2018_series_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lost-in-space-1965",
  "title": "Lost in Space",
  "startYear": 1965,
  "endYear": null,
  "creator": "Irwin Allen",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lost in Space is an American science fiction television series created and produced by Irwin Allen, which originally aired between September 15, 1965, and March 6, 1968, on CBS. Lightly dramatic, sometimes comedic in tone, the series was inspired by the 1812 Johann David Wyss novel The Swiss Family Robinson.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 9,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/19/Lost_in_Space_%281965_TV_series_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lost-missing-pieces",
  "title": "Lost: Missing Pieces",
  "startYear": 2007,
  "endYear": 2008,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": 1,
  "episodes": 13,
  "status": "Ended",
  "network": "V CAST ABC.com",
  "rating": null,
  "description": "Lost: Missing Pieces is a series of thirteen video clips ranging in length from one to four minutes that aired during the hiatus between the third and fourth seasons of the television show Lost, from which this series is a spin off.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 4,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "drama",
   "v cast abc.com",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Lost_Missing_Pieces_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-louie",
  "title": "Louie",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Louie is an American comedy-drama television series that premiered on FX on June 29, 2010. It is written, directed, created, edited, and produced by comedian Louis C.K., who also stars in the show as a fictionalized version of himself, a comedian and newly divorced father raising his two daughters in New York City.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Louie-title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-love",
  "title": "Love",
  "startYear": 2016,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Romance",
   "Rom-Com",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Love is an American romantic comedy-drama television series created by Judd Apatow, Lesley Arfin, and Paul Rust. The series stars Rust, Gillian Jacobs, Mike Mitchell, and Claudia O'Doherty. Netflix originally ordered two seasons of the show. The first 10-episode season was made available on February 19, 2016, and a 12-episode second season premiered on March 10, 2017.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 5,
   "epic": 3,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/Love_TV_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-love-story",
  "title": "Love Story",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Love Story is an American biographical romantic-drama anthology television series created by Connor Hines and executive produced by Ryan Murphy, Nina Jacobson, Brad Simpson, D.V. DeVincentis, Kim Rosenstock, and Hines. The fifth installment in the American Story media franchise, it aired on FX and FX on Hulu. The first season, subtitled John F. Kennedy Jr.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 8,
   "epic": 2,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "romance",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/43/LovestoryFX.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-love-death-robots",
  "title": "Love, Death & Robots",
  "startYear": 2019,
  "endYear": 2025,
  "creator": "Tim Miller",
  "genres": [
   "Animation",
   "Sci-Fi",
   "Horror"
  ],
  "seasons": 4,
  "episodes": 45,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Love, Death & Robots (stylized as LOVE DEATH + ROBOTS; represented in emoji form as ❤️❌🤖) is an adult animated anthology web series created by Tim Miller for Netflix. Although the series is produced by Blur Studio, its individual episodes are drawn from the work of an international variety of animation studios. The animations span the genres of comedy, horror, science fiction, and fantasy.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 6,
   "funny": 3,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 10
  },
  "keywords": [
   "anthology",
   "short films",
   "adult",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Love%2C_Death_%26_Robots_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-lucifer",
  "title": "Lucifer",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Crime",
   "Comedy",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lucifer is an American urban fantasy television series developed by Tom Kapinos that began airing on January 25, 2016, and concluded on September 10, 2021. It revolves around Lucifer Morningstar (Tom Ellis), an alternate version of the DC Comics character of the same name created by Neil Gaiman, Sam Kieth and Mike Dringenberg.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lucifer_tv_logo.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-lupin",
  "title": "Lupin",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Inspired by the Arsène Lupin novels, a gentleman thief in Paris uses disguise and misdirection to avenge his father, who was framed by a wealthy family. Slick, charming caper storytelling.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "gentleman thief",
   "paris",
   "french",
   "netflix"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-lupin-2021",
  "title": "Lupin",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Lupin is a French mystery thriller television series created by George Kay and François Uzan. It premiered on Netflix on 8 January 2021, when the first set of five episodes were released. Another five aired on 11 June 2021. Its third installment debuted on 5 October 2023. The series has been renewed for a fourth part, which was released on 23 October 2026.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/06/Lupin_French_TV_series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-luther",
  "title": "Luther",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Luther is a British psychological crime thriller television series starring Idris Elba as DCI John Luther and Ruth Wilson as Alice Morgan, written by Neil Cross. The detective Luther must make cases against criminals while the murderer Morgan has a complicated relationship with him. The first series is composed of six episodes which ran in May and June 2010.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 4,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "detective",
   "london",
   "idris elba",
   "dark"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/LutherTitleScreen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-lyle-and-erik-menendez",
  "title": "Lyle and Erik Menendez",
  "startYear": 1968,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Joseph Lyle Menendez (born January 10, 1968) and Erik Galen Menendez (born November 27, 1970), most commonly referred to as the Menendez brothers, are American brothers convicted of killing their parents, José and Mary Louise \"Kitty\" Menendez, in their Beverly Hills home in 1989.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Menendez_brothers_2023_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-m-a-s-h",
  "title": "M*A*S*H",
  "startYear": 1972,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Action",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "M*A*S*H is an American war comedy drama television series that aired on CBS from September 17, 1972, to February 28, 1983. It was developed by Larry Gelbart as the first original spin-off series adapted from the 1970 film of the same name, which, in turn, was based on Richard Hooker's 1968 novel MASH: A Novel About Three Army Doctors.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/M%2AA%2AS%2AH_TV_title_screen.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-m-a-s-k",
  "title": "M.A.S.K.",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "M.A.S.K. is a 1985 science fiction animated television series produced by DIC and ICC TV Productions, Ltd. The series was based on the M.A.S.K. action figures produced by Kenner Products (acquired by Hasbro in 1991). It was animated in Japan by Ashi Productions, Studio World and K.K. DiC Asia (later known as K.K. C&D Asia).",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/61/M.A.S.K._TV_series.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-macgyver",
  "title": "MacGyver",
  "startYear": 2016,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Crime",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "MacGyver is an American action-adventure television series developed by Peter M. Lenkov that ran on CBS from September 23, 2016 to April 30, 2021, comprising five seasons and 94 episodes. The series stars Lucas Till as the title character, an undercover government agent who prefers to fight crime with ingenious feats of engineering rather than lethal force.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/MacGyver_Season_4_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mad-men",
  "title": "Mad Men",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Mad Men is an American period drama television series created by Matthew Weiner for AMC. It ran from July 19, 2007 until May 17, 2015, with seven seasons and 92 episodes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "1960s",
   "advertising",
   "identity",
   "period"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Mad-men-title-card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-mad-tv",
  "title": "Mad TV",
  "startYear": 1995,
  "endYear": 2009,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action"
  ],
  "seasons": 14,
  "episodes": 321,
  "status": "Ended",
  "network": "Fox",
  "rating": null,
  "description": "Mad TV (stylized as MADtv) is an American sketch comedy television series created by David Salzman, Fax Bahr, and Adam Small. Loosely based on the humor magazine Mad, Mad TV's pre-taped satirical sketches were primarily parodies of popular culture and occasionally politics. Many of its sketches featured the show's cast members playing recurring original characters and doing celebrity impressions.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 2,
   "epic": 5,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/82/Logo_of_MADtv.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-madonna",
  "title": "Madonna",
  "startYear": 1958,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Madonna Louise Ciccone ( chih-KOH-nee, Italian: [tʃikˈkoːne]; born August 16, 1958) is an American singer, songwriter, record producer, and actress. Dubbed the \"Queen of Pop\", she is known for her continual reinvention and versatility in music production, songwriting, and visual presentation.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 1,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/78/MadonnaO2171023_%2897_of_133%29_%2853269593787%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-magic-bullet-chronicles-ryukendo",
  "title": "Magic Bullet Chronicles Ryukendo",
  "startYear": 2006,
  "endYear": 2006,
  "creator": "Oji Hiroi Yūichirō Hira Yuzuru Miyauchi Tsuyoshi Yoshida",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": 50,
  "status": "Ended",
  "network": "TV Aichi",
  "rating": null,
  "description": "Magic Bullet Chronicles Ryukendo (魔（ま）弾（だん）戦（せん）記（き）リュウケンドー, Madan Senki Ryūkendō) is a Japanese superhero-genre television drama. It was Takara and We've Inc's first attempt at a tokusatsu series. This series aired at 7:00 JST on TV Aichi from January 8 to December 31, 2006.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "tv aichi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Ryukendo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-magical-heroine-magimajo-pures",
  "title": "Magical × Heroine Magimajo Pures!",
  "startYear": 2018,
  "endYear": 2019,
  "creator": null,
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": 51,
  "status": "Ended",
  "network": "TV Tokyo",
  "rating": null,
  "description": "Magical × Heroine Magimajo Pures (魔法×戦士 マジマジョピュアーズ!, Mahō Senshi Majimajo Pyuāzu!) is a Japanese television drama series that began airing on April 1, 2018, until March 24, 2019. It is the second installment of the Girls × Heroine Series produced by Takara Tomy and OLM, Inc.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "family",
   "tv tokyo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Magic_x_Warrior_Magi_Majo_Pures_visual.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-magnum-p-i",
  "title": "Magnum P.I.",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Magnum P.I. is an American action television series developed by Peter M. Lenkov and Eric Guggenheim. It stars Jay Hernandez as Thomas Magnum, the titular private investigator and former Navy SEAL who solves crimes in Hawaii. It is a reboot of the 1980–88 television series of the same name created by Donald P. Bellisario and Glen A. Larson.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-making-a-murderer",
  "title": "Making a Murderer",
  "startYear": 2015,
  "endYear": 2018,
  "creator": null,
  "genres": [
   "Documentary",
   "Crime"
  ],
  "seasons": 2,
  "episodes": 20,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Making a Murderer is an American true crime documentary television series written and directed by Laura Ricciardi and Moira Demos. The show tells the story of Steven Avery, a man from Manitowoc County, Wisconsin, who served 18 years in prison (1985–2003) after his wrongful conviction for the sexual assault and attempted murder of Penny Beerntsen.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "true crime",
   "wrongful conviction",
   "netflix",
   "phenomenon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Making_a_Murderer_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-malcolm-in-the-middle",
  "title": "Malcolm in the Middle",
  "startYear": 2000,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Malcolm in the Middle is an American television sitcom created by Linwood Boomer for the Fox Broadcasting Company. The series premiered on January 9, 2000, and ended on May 14, 2006, after seven seasons consisting of 151 episodes. The single-camera series is a comedy that follows a dysfunctional working-class family and stars Frankie Muniz in the lead role as Malcolm, a child prodigy.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 2,
   "epic": 3,
   "cozy": 10,
   "weird": 1
  },
  "keywords": [
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/MitM_credits_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-maniac",
  "title": "Maniac",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Maniac is an American psychological black comedy drama television miniseries that premiered on Netflix on September 21, 2018, after being announced in 2016.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Maniac_Netflix_series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-manifest",
  "title": "Manifest",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Manifest is an American supernatural drama television series created by Jeff Rake that premiered on September 24, 2018, on NBC. It centers on the passengers and crew on a commercial airliner who suddenly reappear after their plane goes missing and they are presumed dead for five and a half years. It stars Melissa Roxburgh, Josh Dallas, Athena Karkanis, J. R.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Manifest_%28Jeff_Rake_Productions_TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-marco-polo",
  "title": "Marco Polo",
  "startYear": 2014,
  "endYear": null,
  "creator": "John Fusco",
  "genres": [
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Marco Polo is an American drama television series inspired by Marco Polo's early years in the court of Kublai Khan, the Khagan of the Mongol Empire and the founder of the Yuan dynasty (1271–1368). The show premiered on Netflix on December 12, 2014. The series was created by John Fusco and stars Lorenzo Richelmy in the title role, with Benedict Wong as Kublai Khan.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "adventure",
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-mare-of-easttown",
  "title": "Mare of Easttown",
  "startYear": null,
  "endYear": null,
  "creator": "Brad Ingelsby",
  "genres": [
   "Drama",
   "Crime",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Mare of Easttown is an American crime drama television miniseries created and written by Brad Ingelsby for HBO. Directed by Craig Zobel, the series premiered on April 18, 2021, and concluded on May 30, 2021, consisting of seven episodes. It stars Kate Winslet in the title role, who investigates a murder in a small town outside Philadelphia.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "small town",
   "detective",
   "grief",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Mare_of_Easttown_2021_Television_Series_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-married",
  "title": "Married",
  "startYear": 2014,
  "endYear": null,
  "creator": "Andrew Gurland",
  "genres": [
   "Comedy",
   "Romance",
   "Rom-Com"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Married is an American sitcom created by Andrew Gurland, which aired on FX from July 17, 2014, to October 1, 2015. The series stars Judy Greer, Nat Faxon, Jenny Slate, and Brett Gelman. On September 30, 2014, FX renewed Married for a 13 episode second season which premiered on July 16, 2015. On October 26, 2015, FX cancelled the series after two seasons and 23 episodes.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 5,
   "epic": 1,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Married_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-married-at-first-sight",
  "title": "Married at First Sight",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": 20,
  "episodes": 224,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Married at First Sight is an American reality television series that first aired on July 8, 2014, on FYI. It later moved to Lifetime and Peacock. The series is based on a Danish series titled Gift ved første blik that first aired on September 4, 2013, on DR3. The original Danish series format has been sold to broadcasters throughout the world.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Married_at_First_Sight_US_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-martin-scorsese",
  "title": "Martin Scorsese",
  "startYear": 1942,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Martin Charles Scorsese ( skor-SESS-ee; Italian: [skorˈseːze, -se]; born November 17, 1942) is an American filmmaker. One of the major figures of the New Hollywood era, he is widely considered one of the greatest and most influential directors in the history of cinema.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/54/Martin_Scorsese-68749.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-max-steel",
  "title": "Max Steel",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Max Steel is an animated science fiction action-adventure superhero television series co-produced by Mattel Playground Productions, Nerd Corps Entertainment and FremantleMedia Enterprises. It is a reimagining of its predecessor of the same name, as well as being based on the Mattel action-figure also of the same name. Max Steel premiered on March 25, 2013, on Disney XD.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/Max_Steel_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-maya-miguel",
  "title": "Maya & Miguel",
  "startYear": 2004,
  "endYear": 2007,
  "creator": "Deborah Forte Carlos Darta",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 5,
  "episodes": 65,
  "status": "Ended",
  "network": "PBS Kids Go!",
  "rating": null,
  "description": "Maya & Miguel is an American animated children's television series produced by Scholastic Productions. It aired on PBS Kids Go! from October 11, 2004, to October 10, 2007, and had a total of five seasons and 65 episodes over three years. The show also ran on Univision's Saturday morning Planeta U block.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "pbs kids go!",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Maya_%26_Miguel_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-meateater",
  "title": "MeatEater",
  "startYear": 2012,
  "endYear": 2016,
  "creator": "Zero Point Zero Production Inc.",
  "genres": [
   "Reality"
  ],
  "seasons": 11,
  "episodes": 120,
  "status": "Ended",
  "network": "Sportsman Channel",
  "rating": null,
  "description": "MeatEater is a non-fiction outdoors hunting television series in the United States on Netflix starring Steven Rinella. The show first aired on January 1, 2012, and is produced by Zero Point Zero Production. The latest 12th season premiered on October 12, 2023 on the MeatEater website and YouTube channel.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 2,
   "epic": 2,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "reality",
   "sportsman channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/MeatEater_with_Steven_Rinella_Poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mega-man-fully-charged",
  "title": "Mega Man: Fully Charged",
  "startYear": 2018,
  "endYear": 2019,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 52,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Mega Man: Fully Charged is an animated television series based on the Japanese video game series Mega Man, published by Capcom. The series was developed by Man of Action Studios and produced by Dentsu Entertainment USA and DHX Studios Vancouver for Cartoon Network and Family Chrgd.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 5,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Mega_Man_Fully_Charged_%28Title_Card%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-megas-xlr",
  "title": "Megas XLR",
  "startYear": 2004,
  "endYear": 2005,
  "creator": "Jody Schaeffer George Krstic",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 26,
  "status": "Ended",
  "network": "Cartoon Network",
  "rating": null,
  "description": "Megas XLR is an American animated television series created by Jody Schaeffer and George Krstic for Cartoon Network. The series revolves around two slackers: mechanic Coop and his best friend Jamie, who find a mecha robot from the future called MEGAS (Mechanized Earth Guard Attack System) in a Jersey City, New Jersey junkyard.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "cartoon network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Megas_XLR_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-megastructures",
  "title": "Megastructures",
  "startYear": 2004,
  "endYear": 2009,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": 6,
  "episodes": 100,
  "status": "Ended",
  "network": "National Geographic Channel",
  "rating": null,
  "description": "Megastructures is a documentary television series appearing on the National Geographic Channel in the United States and the United Kingdom, Channel 5 in the United Kingdom, France 5 in France, and 7mate in Australia.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "national geographic channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/75/MegStcrs.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-melania-trump",
  "title": "Melania Trump",
  "startYear": 1970,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Melania Knauss Trump (born Melanija Knavs; April 26, 1970) is a Slovenian and American former model serving as the first lady of the United States since 2025, a role she previously held from 2017 to 2021 as the third wife of Donald Trump, the 45th and 47th president of the United States.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 10,
   "dark": 0,
   "romantic": 3,
   "epic": 3,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Melania_Trump_at_Fort_Bragg%2C_Friday%2C_February_13%2C_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-memphis-beat",
  "title": "Memphis Beat",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Mystery",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Memphis Beat is an American crime comedy-drama television series created by Joshua Harto and Liz W. Garcia that aired on TNT from June 22, 2010, to August 16, 2011, with a total of 20 episodes spanning two seasons. It was produced by Smokehouse Productions, in association with Warner Horizon Television. On October 14, 2011, TNT canceled the series of Memphis Beat after two seasons.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 1,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/MemphisBeatTitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-merlin",
  "title": "Merlin",
  "startYear": 2008,
  "endYear": null,
  "creator": "Julian Jones Jake Michie Johnny Capps Julian Murphy",
  "genres": [
   "Fantasy",
   "Comedy",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Merlin is a British fantasy-adventure comedy drama television programme, loosely based on the Arthurian legends regarding the close relations of Merlin and King Arthur. Created by Julian Jones, Jake Michie, Johnny Capps and Julian Murphy for the BBC, it was broadcast for five series on BBC One between 20 September 2008 and 24 December 2012.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 3,
   "epic": 5,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Merlin_-_Screen_Capture.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-miami-vice-film",
  "title": "Miami Vice (film)",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Miami Vice is a 2006 crime action film produced, written, and directed by Michael Mann. It is an adaptation of the 1980s television series of the same name, which Mann produced. It stars Colin Farrell as James \"Sonny\" Crockett and Jamie Foxx as Ricardo \"Rico\" Tubbs, MDSO detectives who go undercover to fight drug trafficking operations.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 3,
   "funny": 2,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-midnight-mass",
  "title": "Midnight Mass",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Midnight Mass is an American gothic supernatural horror television miniseries created and directed by Mike Flanagan for Netflix. It stars Zach Gilford, Kate Siegel, Hamish Linklater, Samantha Sloyan, Rahul Kohli, Kristin Lehman and Henry Thomas.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 9,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "flanagan",
   "island",
   "faith",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/Midnight_Mass_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-mighty-max",
  "title": "Mighty Max",
  "startYear": 1993,
  "endYear": 1994,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 40,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Mighty Max is an animated action/horror television series created by Mark Zaslove and Rob Hudnut based on the British Mighty Max toys, an outgrowth of the Polly Pocket line created by Bluebird Toys in 1992.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Mighty_Max_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mighty-morphin-power-rangers",
  "title": "Mighty Morphin Power Rangers",
  "startYear": 1993,
  "endYear": 1995,
  "creator": "Haim Saban Shuki Levy",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 3,
  "episodes": 145,
  "status": "Ended",
  "network": "Fox (Fox Kids)",
  "rating": null,
  "description": "Mighty Morphin Power Rangers (MMPR) is an American superhero television series produced by Saban Entertainment, which aired from August 28, 1993 to November 27, 1995, on the Fox Kids programming block, lasting three seasons. The series drew elements and stock footage from Super Sentai, a Japanese television series by Toei Company.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "fox (fox kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/Mighty_Morphin_Power_Rangers_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mike-molly",
  "title": "Mike & Molly",
  "startYear": 2010,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Romance",
   "Rom-Com"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mike & Molly is an American television sitcom created by Mark Roberts for CBS. It aired from September 20, 2010 to May 16, 2016. The series stars Billy Gardell and Melissa McCarthy as the eponymous Mike and Molly, a couple who meet in a Chicago Overeaters Anonymous group and fall in love.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 4,
   "epic": 2,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/Mike_%26_Molly_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mindhunter",
  "title": "Mindhunter",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Mindhunter may refer to: Mindhunter: Inside the FBI's Elite Serial Crime Unit, non-fiction crime book written by retired FBI agent John E.",
  "vector": {
   "adrenaline": 4,
   "brainy": 10,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "fbi",
   "serial killers",
   "fincher",
   "1970s"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-miracles",
  "title": "Miracles",
  "startYear": 2003,
  "endYear": null,
  "creator": "{{Plain list|",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Miracles is an American mystery drama television series starring Skeet Ulrich and Angus Macfadyen that aired on ABC from January 27 to March 31, 2003. The series created by Richard Hatem and Michael Petroni, the series was dubbed a \"spiritual version of The X-Files\" by its creators.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Miracles_%28Touchstone_Television_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-misfits",
  "title": "Misfits",
  "startYear": 2009,
  "endYear": null,
  "creator": "Howard Overman",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Misfits is a British science fiction comedy-drama television programme that aired on E4. The show premiered on 12 November 2009 and concluded on 11 December 2013 in its fifth series. Misfits is about a group of young offenders sentenced to work in a community service programme who obtain supernatural powers after a strange electrical storm.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/40/MisfitsIntertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mismatched",
  "title": "Mismatched",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mismatched is an Indian Hindi-language coming-of-age romantic drama television series on Netflix, based on Sandhya Menon's 2017 novel When Dimple Met Rishi. It was adapted by Gazal Dhaliwal and directed by Akarsh Khurana and Nipun Dharmadhikari. It is produced by Ronnie Screwvala's RSVP Movies.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 4,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Mismatched_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mission-impossible",
  "title": "Mission: Impossible",
  "startYear": 1966,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mission: Impossible is an American espionage television series created by Bruce Geller, and financed and produced by Desilu Productions. It aired on CBS for seven seasons from September 17, 1966, to March 30, 1973.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/92/Mission_Impossible_%281966_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mlb-on-fox",
  "title": "MLB on Fox",
  "startYear": 1996,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": 31,
  "episodes": null,
  "status": "Running",
  "network": "Fox",
  "rating": null,
  "description": "Major League Baseball on Fox (also known as MLB on Fox and Fox MLB) is an American presentation of Major League Baseball (MLB) games produced by Fox Sports, the sports division of the Fox Broadcasting Company (Fox), since June 1, 1996. Fox has aired the World Series in 1996, 1998, and every edition since 2000, and the All-Star Game in 1997, 1999, and every year since 2001.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 10,
   "dark": 0,
   "romantic": 4,
   "epic": 3,
   "cozy": 9,
   "weird": 3
  },
  "keywords": [
   "family",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9c/Fox_Major_League_Baseball_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mobile-suit-gundam-00",
  "title": "Mobile Suit Gundam 00",
  "startYear": 2007,
  "endYear": 2009,
  "creator": "Hajime Yatate Yoshiyuki Tomino",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action",
   "War"
  ],
  "seasons": 2,
  "episodes": 50,
  "status": "Ended",
  "network": "JNN (MBS, TBS)",
  "rating": null,
  "description": "Mobile Suit Gundam 00 (Japanese: 機動戦士ガンダム00（ダブルオー）, Hepburn: Kidō Senshi Gandamu Daburu Ō; Mobile Suit Gundam Double-O) is a Japanese anime television series and the eleventh installment of Sunrise's Gundam franchise.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "jnn (mbs, tbs)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/MobileSuitGundam00Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-modern-family",
  "title": "Modern Family",
  "startYear": null,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Modern Family is an American television mockumentary sitcom created by Christopher Lloyd and Steven Levitan for ABC. It aired for 11 seasons from September 23, 2009, to April 8, 2020. The series follows the lives of three diverse but interrelated family set-ups living in suburban Los Angeles.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 10,
   "dark": 0,
   "romantic": 5,
   "epic": 1,
   "cozy": 10,
   "weird": 1
  },
  "keywords": [
   "mockumentary",
   "three families",
   "warm",
   "abc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/77/Modern_Family_Title.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-mom",
  "title": "Mom",
  "startYear": 2013,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mom is an American television sitcom created by Chuck Lorre, Eddie Gorodetsky, and Gemma Baker that aired for eight seasons on CBS from September 23, 2013, to May 13, 2021.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 1,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/73/Mom_TV_series_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-money-heist",
  "title": "Money Heist",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "heist",
   "professor",
   "spanish",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/03/Casadepapelwordmark.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-money-heist-korea-joint-economic-area",
  "title": "Money Heist: Korea – Joint Economic Area",
  "startYear": 2022,
  "endYear": 2022,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": 12,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Money Heist: Korea – Joint Economic Area (Korean: 종이의 집: 공동경제구역) is a South Korean television series and second series in the Money Heist franchise, based on the original Spanish series. The Korean series directed by Kim Hong-sun and written by Ryu Yong-jae, is an original Netflix series, starring an ensemble cast led by Yoo Ji-tae, Kim Yun-jin, Park Hae-soo, and Jeon Jong-seo.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Money_Heist_Korea_%E2%80%93_Joint_Economic_Area.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-monk",
  "title": "Monk",
  "startYear": 2002,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Monk is an American mystery comedy-drama television series that originally ran on the USA Network from July 12, 2002, to December 6, 2009, with 125 episodes broadcast over eight seasons. It follows Adrian Monk (Tony Shalhoub), a private detective with obsessive–compulsive disorder (OCD) and multiple phobias, and his assistants Sharona Fleming (Bitty Schram) and Natalie Teeger (Traylor Howard).",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 1,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_Monk.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-monster-high",
  "title": "Monster High",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Monster High is an American animated fantasy comedy television series based on the eponymous fashion doll franchise and its 2022 television film by Mattel and Mattel Television, respectively. It aired on Nickelodeon in the United States and globally from October 6, 2022, to October 24, 2024.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 6,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Monster_High_2022_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-monsters-vs-aliens",
  "title": "Monsters vs. Aliens",
  "startYear": 2013,
  "endYear": 2014,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": 26,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "Monsters vs. Aliens is an American animated television series based on DreamWorks Animation's Monsters Vs. Aliens franchise. First announced in 2009, the series premiered on Nickelodeon on March 23, 2013, after the Nickelodeon Kids' Choice Awards, then began airing in its regular timeslot on April 6, 2013.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "nickelodeon",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/Monsters-vs-Aliens-title-card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-moonlight",
  "title": "Moonlight",
  "startYear": 2007,
  "endYear": 2008,
  "creator": "{{plainlist|",
  "genres": [
   "Fantasy",
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 16,
  "status": "Ended",
  "network": "CBS",
  "rating": null,
  "description": "Moonlight is an American paranormal romance television drama created by Ron Koslow and Trevor Munson, who was also executive producer for all episodes with Joel Silver, Gerard Bocaccio, Gabrielle Stanton and Harry Werksman. The series follows private investigator Mick St.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 3,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "crime",
   "cbs",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Moonlight_series2.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-motorcity",
  "title": "Motorcity",
  "startYear": 2012,
  "endYear": 2013,
  "creator": "Chris Prynoski",
  "genres": [
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 20,
  "status": "Ended",
  "network": "Disney XD",
  "rating": null,
  "description": "Motorcity is an American animated television series created by Chris Prynoski and produced by Prynoski's studio Titmouse, Inc., Robin Red Breast, Inc. and Disney Television Animation. The show is set in a futuristic version of Detroit named Detroit Deluxe, owned by the evil billionaire Abraham Kane.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 4,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "disney xd",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/31/Motorcity.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mr-inbetween",
  "title": "Mr Inbetween",
  "startYear": 2018,
  "endYear": null,
  "creator": "Scott Ryan",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 26,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mr Inbetween is an Australian dark comedy-crime drama television series which premiered on FX on 25 September 2018 in the United States, followed by Fox Showcase in Australia on 1 October 2018. The series is a serialisation of the 2005 feature film The Magician, which was created, written by and starred Scott Ryan as Ray Shoesmith, a hitman for hire balancing his criminal and personal lives.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/MrInbetweenSeason2Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mr-mrs-smith",
  "title": "Mr. & Mrs. Smith",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mr. & Mrs. Smith is an American spy anthology television series created by Francesca Sloane and Donald Glover, which premiered on February 2, 2024. It is inspired by the 2005 film Mr. & Mrs.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 1,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Mr._%26_Mrs._Smith_%282024_TV_series%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mr-iglesias",
  "title": "Mr. Iglesias",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mr. Iglesias is an American sitcom that premiered on Netflix on June 21, 2019. The series stars Gabriel Iglesias who executive produces alongside Kevin Hench, Joe Meloche, and Ron DeBlasio. In August 2019, the series was renewed for a second season which premiered on June 17, 2020.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 3,
   "epic": 0,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/40/Mr._Iglesias_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-muppet-babies",
  "title": "Muppet Babies",
  "startYear": 1984,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Jim Henson's Muppet Babies, commonly known by the shortened title Muppet Babies, is an American fantasy comedy animated television series produced by Marvel Productions for Jim Henson Productions. The show portrays toddler versions of the Muppets living together in a nursery under the care of a woman known as Nanny, involving the concepts of the power of imagination and creative problem-solving.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/85/Muppet_Babies_Classic.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-muppet-babies-2018",
  "title": "Muppet Babies",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Disney's Muppet Babies is an animated television series, from the United States, featuring toddler versions of the Muppets characters that began airing on Disney Jr. on March 23, 2018, and is aimed at a target audience of children from ages 4–7.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Muppet_Babies_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mutt-stuff",
  "title": "Mutt & Stuff",
  "startYear": 2015,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mutt & Stuff is an American children's television series that aired on the Nick Jr. Channel. The series premiered on March 6, 2015, with an hour-long pilot and began airing regularly on July 10, 2015. It was created by Sid and Marty Krofft (in their first new product in over a decade) and Bradley Zweig. It stars Calvin Millan, the son of the series' producer Cesar Millan.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 2,
   "cozy": 10,
   "weird": 1
  },
  "keywords": [
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Nick_Jr._Mutt_%26_Stuff_Logo_Original.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-my-life-with-the-walter-boys",
  "title": "My Life with the Walter Boys",
  "startYear": 2023,
  "endYear": null,
  "creator": "Melanie Halsall",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "My Life with the Walter Boys is an American teen drama television series developed by Melanie Halsall which premiered on Netflix on December 7, 2023. It is an adaptation of Ali Novak's 2014 novel of the same name, which was first published on Wattpad, and stars Nikki Rodriguez, Noah LaLonde, and Ashby Gentry.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/02/My_Life_with_the_Walter_Boys_%28Melanie_Halsall-produced_TV_series%29_-_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-my-little-pony-equestria-girls",
  "title": "My Little Pony: Equestria Girls",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "My Little Pony: Equestria Girls is an animated web series based on the eponymous toyline and media franchise, itself being a spin-off of the 2010 relaunch of Hasbro's My Little Pony toyline franchise. It refocuses on the main characters from the My Little Pony: Friendship Is Magic television series, re-envisioned as human teenagers attending high school.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 5,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Equestria_Girls_Digital_Series_logo_and_group_shot.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-mysticons",
  "title": "Mysticons",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Mysticons is an animated television series that aired from August 28, 2017, to September 15, 2018. A collaboration between Nelvana and Topps, it was created by Sean Jara, who also served as executive story editor and producer. In August 2018, Jara confirmed on Twitter that Mysticons had not been renewed for any episodes beyond its initial 40-episode production order.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7d/Mysticons_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-napoleon-dynamite",
  "title": "Napoleon Dynamite",
  "startYear": 2004,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Napoleon Dynamite is an American animated satirical slapstick comedy television series created by Jared and Jerusha Hess for Fox, based on the 2004 film of the same name, which both Hesses co-wrote. Veteran television writer Mike Scully helped develop the series, while the original cast reprised their roles.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 2,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Napoleon_Dynamite_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-narcos",
  "title": "Narcos",
  "startYear": 2015,
  "endYear": 2017,
  "creator": "{{plainlist|",
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "seasons": 3,
  "episodes": 30,
  "status": "Ended",
  "network": "Netflix",
  "rating": "TV-MA",
  "description": "Narcos is an American crime drama television series created and produced by Chris Brancato, Carlo Bernard, and Doug Miro. Set and filmed in Colombia, seasons 1 and 2 are about Colombian narcoterrorist and drug lord Pablo Escobar, leader of the Medellín Cartel and billionaire through cocaine production and distribution.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "cartel",
   "escobar",
   "dea",
   "colombia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Narcos_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-ncis-hawai-i",
  "title": "NCIS: Hawaiʻi",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "NCIS: Hawaiʻi is an American police procedural television series that premiered on CBS on September 20, 2021. It stars Vanessa Lachey as Jane Tennant, the Special Agent in Charge of a fictional team of special agents from the Naval Criminal Investigative Service based in Hawaii. The show is a spin-off of the series NCIS and the fourth series in the NCIS franchise.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/NCIS_Hawaii.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ncis-new-orleans",
  "title": "NCIS: New Orleans",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "NCIS: New Orleans is an American action crime drama and police procedural television series that premiered on CBS on September 23, 2014, following the twelfth season of NCIS. The pilot was written by Gary Glasberg, produced by CBS Studios, Wings Productions and, for the first four seasons, When Pigs Fly Incorporated.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/ca/NCIS_New_Orleans_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nero-wolfe",
  "title": "Nero Wolfe",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nero Wolfe is a television series adapted from Rex Stout's series of detective stories that aired for two seasons (2001–2002) on A&E. Set in New York City sometime in the 1940s–1950s, the stylized period drama stars Maury Chaykin as Nero Wolfe and Timothy Hutton as Archie Goodwin. A distinguishing feature of the series is its use of a repertory cast to play non-recurring roles.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/Wolfe-NWM.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-netflix-animation-studios",
  "title": "Netflix Animation Studios",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Netflix Animation Studios is an American animation studio and production company that was founded in March 2018 and is a subsidiary of Netflix, Inc. It is based in Burbank, California with offices in Sydney, Australia and Vancouver, Canada. The studio develops and produces animated feature films and television series, which are all released on the Netflix streaming service.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Netflix_Animation_Studios_2025.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nick-cannon",
  "title": "Nick Cannon",
  "startYear": 1980,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nicholas Scott Cannon (born October 8, 1980) is an American comedian, actor, and rapper. He began his career on Nickelodeon's All That before going on to host Wild 'n Out, America's Got Talent, Lip Sync Battle Shorties, and The Masked Singer. Cannon's 2003 single \"Gigolo\" (featuring R. Kelly) peaked within the top 30 of the Billboard Hot 100 and led his self-titled debut studio album.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/36/Nick_Cannon_and_Courtney_Bee_at_Essence_Fest_2025_%283%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nickelodeons-unfiltered",
  "title": "Nickelodeon's Unfiltered",
  "startYear": 2020,
  "endYear": 2021,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": 2,
  "episodes": 41,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "Nickelodeon's Unfiltered (also known simply as Unfiltered) is an American game show that aired on Nickelodeon from July 11, 2020 to November 11, 2021. The series is hosted by Jay Pharoah, with panelists Darci Lynne, Gabrielle Nevaeh Green, and Lex Lumpkin.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 10,
   "dark": 0,
   "romantic": 2,
   "epic": 2,
   "cozy": 10,
   "weird": 1
  },
  "keywords": [
   "family",
   "nickelodeon",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Unfiltered_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nikita",
  "title": "Nikita",
  "startYear": 2010,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nikita is an American action thriller drama television series that aired on the CW from September 9, 2010, to December 27, 2013, in the United States. The series is an adaptation of Luc Besson's French film La Femme Nikita, the second such adaptation after the 1997 Canadian TV series La Femme Nikita.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Nikita_2010_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nine-perfect-strangers",
  "title": "Nine Perfect Strangers",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nine Perfect Strangers is an American drama television series based on the 2018 novel of the same name by Liane Moriarty. Created by David E. Kelley who also developed the series alongside John-Henry Butterworth, starring Nicole Kidman and an ensemble cast, the series premiered on August 18, 2021, on Hulu. A second season premiered on May 21, 2025.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Nine_Perfect_Strangers_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nip-tuck",
  "title": "Nip/Tuck",
  "startYear": 2003,
  "endYear": null,
  "creator": "Ryan Murphy",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nip/Tuck is an American medical drama television series created by Ryan Murphy that aired on FX in the United States for six seasons from 2003 to 2010.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Nip-Tuck_%28Ryan_Murphy_Television%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nobody-wants-this",
  "title": "Nobody Wants This",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Rom-Com",
   "Comedy",
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nobody Wants This is an American romantic comedy television series created by Erin Foster which premiered on Netflix on September 26, 2024 and stars Kristen Bell, Adam Brody, Justine Lupe, Timothy Simons and Jackie Tohn. Nobody Wants This focuses on the unlikely relationship between an outspoken, agnostic woman and a handsome young Jewish rabbi.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 10,
   "epic": 1,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "podcaster and rabbi",
   "la",
   "netflix",
   "adult rom-com"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Nobody_Wants_This_Netflix_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-normal-people",
  "title": "Normal People",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Normal People is a romantic drama limited series based on the 2018 novel of the same name by Sally Rooney. It was written by Rooney, Alice Birch and Mark O'Rowe, and directed by Lenny Abrahamson and Hettie Macdonald. The series follows the relationship between Marianne Sheridan (Daisy Edgar-Jones) and Connell Waldron (Paul Mescal), who attend the same secondary school and the same university.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 10,
   "epic": 2,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "ireland",
   "young love",
   "sally rooney",
   "hulu bbc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/96/Normal_People.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-nos4a2",
  "title": "NOS4A2",
  "startYear": 2013,
  "endYear": null,
  "creator": "Jami O'Brien",
  "genres": [
   "Horror",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "NOS4A2 (pronounced Nosferatu) is an American supernatural horror drama television series, based on the 2013 novel by Joe Hill, that ran on AMC from June 2, 2019, to August 23, 2020. It was created by Jami O'Brien and stars Ashleigh Cummings, Ólafur Darri Ólafsson, Jahkara J. Smith, Ebon Moss-Bachrach, Virginia Kull, and Zachary Quinto.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "horror",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ec/NOS4A2_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-nurse-jackie",
  "title": "Nurse Jackie",
  "startYear": 2009,
  "endYear": null,
  "creator": "Liz Brixius Evan Dunsky Linda Wallem",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Nurse Jackie is an American medical comedy-drama television series that aired on Showtime from June 8, 2009, to June 28, 2015. Set in New York City, the series follows Jackie Peyton (Edie Falco), a drug-addicted emergency department nurse practitioner at the fictional All Saints' Hospital.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 2,
   "epic": 2,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/NurseJackie.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-once-upon-a-time",
  "title": "Once Upon a Time",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Once Upon a Time is an American fantasy drama television series that aired for seven seasons on ABC from October 23, 2011, to May 18, 2018. The action alternates between two main settings: a fantastical world where fairy tales happen and a fictional seaside town in Maine called Storybrooke.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 9,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/30/Once_Upon_A_Time_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-once-upon-a-time-in-wonderland",
  "title": "Once Upon a Time in Wonderland",
  "startYear": 2013,
  "endYear": 2014,
  "creator": "{{plainlist|",
  "genres": [
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Romance",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 13,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "Once Upon a Time in Wonderland is an American fantasy-drama series that aired on ABC from October 10, 2013, to April 3, 2014. A spin-off of Once Upon a Time, it was created by Edward Kitsis, Adam Horowitz, Zack Estrin, and Jane Espenson for ABC Studios.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 3,
   "epic": 7,
   "cozy": 5,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/83/Once_Upon_a_Time_in_Wonderland_%28ABC_Studios%29_logo_%282%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-one-day-at-a-time",
  "title": "One Day at a Time",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "One Day at a Time is an American sitcom based on the 1975 series of the same title. Executive producer Norman Lear's company, Act III Productions, approached Sony Pictures Television with the idea of reimagining the original series with a Latino family. Lear had previously executive produced the original series.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 2,
   "epic": 1,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/OneDayAtATime.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-one-of-us-is-lying",
  "title": "One of Us Is Lying",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "One of Us Is Lying is an American teen drama mystery television series developed by Erica Saleh. The series is based on the 2017 novel of the same name by Karen M. McManus and follows five high school students who enter detention, where one of them dies under suspicious circumstances and an investigation ensues.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/One_of_Us_Is_Lying.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-one-piece",
  "title": "One Piece",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "One Piece (stylized in all caps) is a fantasy adventure television series developed by Matt Owens and Steven Maeda for Netflix. The series is a live-action adaptation of the 1997 Japanese manga series One Piece by Eiichiro Oda, who also serves as a creative consultant. It is produced by Kaji Productions and Shueisha, the manga's publisher.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 4,
   "epic": 7,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e3/One_Piece_Live_Action_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-one-tree-hill",
  "title": "One Tree Hill",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "One Tree Hill is an American teen drama television series created by Mark Schwahn, which premiered on September 23, 2003, on the WB. After the series' third season, the WB merged with UPN to form the CW, and from September 27, 2006, the series was broadcast by the CW in the United States until the end of its run on April 4, 2012.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 4,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/80/One_Tree_Hill_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-only-murders-in-the-building",
  "title": "Only Murders in the Building",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Mystery",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Only Murders in the Building (abbreviated to OMITB) is an American mystery comedy-drama television series created by Steve Martin and John Hoffman.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 9,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "true crime podcast",
   "new york",
   "trio",
   "hulu"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Only_Murders_logo.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-operaci-n-triunfo",
  "title": "Operación Triunfo",
  "startYear": 2001,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Operación Triunfo (transl. 'Operation Triumph') is a reality television talent show which first aired on Televisión Española (TVE) in 2001 in Spain. A music talent contest with viewer voting and reality show elements that originated Endemol's Star Academy franchise, the show aims to find the country's next solo singing sensation. Operación Triunfo (also known as OT) first aired in 2001.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo_oficial_de_OT_2025.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-orlando-bloom",
  "title": "Orlando Bloom",
  "startYear": 1977,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Orlando Jonathan Blanchard Copeland Bloom (born 13 January 1977) is an English actor. He made his breakthrough as the character Legolas in The Lord of the Rings film series (2001–03), earning him three Actors Award nominations, winning once. He reprised his role in The Hobbit film series (2013–14).",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Orlando_Bloom-9047_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-orphan-black",
  "title": "Orphan Black",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Orphan Black is a Canadian science-fiction thriller television series created by screenwriter Graeme Manson and director John Fawcett and starring Tatiana Maslany. The series focuses on Sarah Manning, one of several genetically identical human clones, and later on some of the other clones.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "clones",
   "one actor many roles",
   "conspiracy",
   "tatiana maslany"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/86/Orphan_Black_Intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-our-planet",
  "title": "Our Planet",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Our Planet is a British nature documentary series made for Netflix. The series is narrated by David Attenborough and produced by Silverback Films, led by Alastair Fothergill and Keith Scholey, who also created BBC documentary series Planet Earth, Frozen Planet and The Blue Planet, in collaboration with the conservation charity World Wildlife Fund (WWF).",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 0,
   "epic": 9,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "nature",
   "netflix",
   "attenborough",
   "conservation"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-outlander",
  "title": "Outlander",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Romance",
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Outlander is a historical fantasy television series based on the book series of the same name by Diana Gabaldon. Developed by Ronald D. Moore, the show premiered on August 9, 2014, on Starz. It stars Caitríona Balfe as Claire Randall, an English former World War II military nurse in Scotland who, in 1945, finds herself transported back in time to 1743.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 10,
   "epic": 7,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "time travel",
   "scotland",
   "historical romance",
   "starz"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/Outlander_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-over-the-garden-wall",
  "title": "Over the Garden Wall",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Over the Garden Wall is an American animated dark fantasy television miniseries created by Patrick McHale for Cartoon Network. The series centers on two half-brothers who travel through a mysterious forest to find their way home, encountering a variety of strange and fantastical things on their journey.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 4,
   "funny": 6,
   "heartwarming": 8,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 8,
   "weird": 9
  },
  "keywords": [
   "miniseries",
   "autumn",
   "brothers",
   "cartoon network"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Over_the_Garden_Wall_%28animated_miniseries%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-ozark",
  "title": "Ozark",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "A financial adviser who launders money for a cartel drags his family to Missouri's Lake of the Ozarks and has to build a bigger operation to survive. Cold, blue, and relentlessly tense crime drama.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 10,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "money laundering",
   "family",
   "cartel",
   "lake"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-paradise",
  "title": "Paradise",
  "startYear": 2025,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Paradise is an American post-apocalyptic political thriller television series created by Dan Fogelman and starring Sterling K. Brown, Julianne Nicholson, and James Marsden. It was released on Hulu in the United States on January 26, 2025.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/78/Paradise_%282025_Hulu_network_TV_series%29.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-paradise-pd",
  "title": "Paradise PD",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Paradise PD is an American adult animated sitcom created by Waco O'Guin and Roger Black that premiered on August 31, 2018, and ran for four seasons on Netflix. The series stars Dana Snyder, Cedric Yarbrough, David Herman, Tom Kenny, Sarah Chalke, and Kyle Kinane. The second season was released on March 6, 2020, and the third season was released on March 12, 2021.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 5,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/ParadisePD.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-paradise-run",
  "title": "Paradise Run",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Paradise Run is an American reality competition television program that aired on Nickelodeon from February 1, 2016 to January 26, 2018. The program is presented by Daniella Monet.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 2,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "family",
   "reality",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-parks-and-recreation",
  "title": "Parks and Recreation",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Parks and Recreation (also known as Parks and Rec) is an American political satire mockumentary television sitcom created by Greg Daniels and Michael Schur. The series aired on NBC from April 9, 2009, to February 24, 2015, for 125 episodes, over seven seasons. A special reunion episode aired on April 30, 2020.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 5,
   "epic": 1,
   "cozy": 9,
   "weird": 3
  },
  "keywords": [
   "mockumentary",
   "small town",
   "leslie knope",
   "wholesome"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Parks_and_Recreation_%28Universal_Television%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-passions",
  "title": "Passions",
  "startYear": 1999,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Passions is an American television soap opera that originally aired on NBC from July 5, 1999, to September 7, 2007, and on DirecTV's The 101 Network from September 17, 2007, to August 7, 2008. Created by screenwriter James E.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 3,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Passions_%28NBCUniversal_Media_television_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-patriot",
  "title": "Patriot",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Patriot is an American comedy-drama television series created by Steven Conrad. The first episode premiered on Amazon Prime Video on November 5, 2015, as part of its Pilot Season initiative, and the complete first season was released on February 23, 2017. It stars Michael Dorman, Kurtwood Smith, Michael Chernus, Kathleen Munroe, Aliette Opheim, Chris Conrad, Terry O'Quinn and Debra Winger.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/PatriotTVLogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-patriot-act-with-hasan-minhaj",
  "title": "Patriot Act with Hasan Minhaj",
  "startYear": 2018,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Patriot Act with Hasan Minhaj is an American comedy talk show hosted by Hasan Minhaj that premiered on October 28, 2018, on Netflix and ran until June 28, 2020. It also had all the episodes, exclusives, and deep cuts on its YouTube channel.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 2,
   "epic": 1,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/PatriotActWithHasanMinhaj.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-peacemaker",
  "title": "Peacemaker",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Action",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Peacemaker is an American superhero television series created by James Gunn for the streaming service HBO Max, based on the eponymous character from DC Comics. The first season is a spin-off of the film The Suicide Squad (2021) set in the DC Extended Universe (DCEU), further exploring jingoistic self-titled hero Chris Smith / Peacemaker.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 2,
   "funny": 9,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "dc",
   "james gunn",
   "john cena",
   "max"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Peacemaker_%28TV_series%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-peaky-blinders",
  "title": "Peaky Blinders",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Peaky Blinders is a British historical crime drama television series created by Steven Knight. Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on an urban youth gang active in the city from the 1880s to the 1920s.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "birmingham",
   "gangsters",
   "period",
   "shelby"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Peaky_Blinders_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-pee-wees-playhouse",
  "title": "Pee-wee's Playhouse",
  "startYear": 1986,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Pee-wee's Playhouse is an American children's comedy television series starring Paul Reubens as the childlike Pee-wee Herman that ran from 1986 to 1990 on Saturday mornings on CBS, and airing in reruns until July 1991.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Peeweesplayhouse.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-peep-and-the-big-wide-world",
  "title": "Peep and the Big Wide World",
  "startYear": 2004,
  "endYear": 2007,
  "creator": "Kaj Pindal",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 5,
  "episodes": 60,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Peep and the Big Wide World is an animated television series for preschoolers aged 3-5, created by Danish-Canadian animator Kaj Pindal. It revolves around the lives of three anthropomorphic birds named Peep, Chirp, and Quack, as they discover, investigate, and explore the world around them.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 3,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Peep_and_the_Big_Wide_World_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-peg-cat",
  "title": "Peg + Cat",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Peg + Cat is an animated children's television series based on the children's picture book \"The Chicken Problem\", which was published in 2012. The series, which featured the voice acting of Hayley Faith Negrin and Dwayne Hill, was created by Billy Aronson and Jennifer Oxley and produced by Fred Rogers Productions and 9 Story Media Group.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/Peg%2BCat_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-penny-dreadful",
  "title": "Penny Dreadful",
  "startYear": null,
  "endYear": null,
  "creator": "John Logan",
  "genres": [
   "Horror",
   "Drama",
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Penny Dreadful is a horror drama television series created for Showtime and Sky by John Logan, who also acts as executive producer alongside Sam Mendes. The show was originally pitched to several American and British channels, and eventually landed with Showtime, with Sky Atlantic as co-producer.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 10,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "gothic",
   "victorian",
   "monsters",
   "showtime"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Penny_Dreadful_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-pennyworth",
  "title": "Pennyworth",
  "startYear": 2019,
  "endYear": 2021,
  "creator": "{{Plainlist|",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": 3,
  "episodes": 30,
  "status": "Ended",
  "network": "Epix",
  "rating": null,
  "description": "Pennyworth, marketed as Pennyworth: The Origin of Batman's Butler for its third season, is an American television series developed by Bruno Heller and Danny Cannon for Epix, based on the DC Comics character Alfred Pennyworth.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "epix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/20/Pennyworth_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-perry-mason",
  "title": "Perry Mason",
  "startYear": 1957,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Perry Mason is an American legal drama series aired on CBS from September 21, 1957, to May 22, 1966. The title character, played by Raymond Burr, is a Los Angeles criminal defense lawyer who originally appeared in detective fiction by Erle Stanley Gardner. Many episodes were based on stories written by Gardner.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 3,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f8/Perry_Mason_Title_Screen.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-perry-mason-2020",
  "title": "Perry Mason",
  "startYear": 2020,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Perry Mason is an American historical drama television series created by Rolin Jones and Ron Fitzgerald for HBO. Based on the character of the same name by Erle Stanley Gardner, the series stars Matthew Rhys in the title role and premiered on June 21, 2020. In July 2020, HBO renewed the series for a second season.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-perry-mason-tv-film-series",
  "title": "Perry Mason (TV film series)",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "A series of 30 Perry Mason television films aired on NBC from 1985 to 1995 as sequels to the CBS TV series Perry Mason. After a hiatus of nearly 20 years, Raymond Burr reprised his role as Los Angeles defense attorney Mason in 26 of the television films.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Perry-Mason-Returns-intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-person-of-interest",
  "title": "Person of Interest",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Crime",
   "Mystery",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Person of Interest is an American science fiction crime drama television series that aired on CBS from September 22, 2011, to June 21, 2016, with its five seasons consisting of 103 episodes. The series was created by Jonathan Nolan; executive producers were Nolan, J. J. Abrams, Bryan Burk, Greg Plageman, Denise Thé, and Chris Fisher.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Person_of_Interest_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-persons-unknown",
  "title": "Persons Unknown",
  "startYear": 2010,
  "endYear": 2010,
  "creator": "Christopher McQuarrie",
  "genres": [
   "Thriller",
   "Mystery",
   "Psychological Thriller",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 13,
  "status": "Ended",
  "network": "NBC (United States) Rai 2 (Italy)",
  "rating": null,
  "description": "Persons Unknown is a psychological thriller television series created by Christopher McQuarrie and produced by Fox Television Studios. The series follows a group of strangers who wake up imprisoned inside a small ghost town with no memory of how they wound up there. The thirteen-episode summer replacement on Monday, June 7, 2010, at 10:00 p.m.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "mystery",
   "nbc (united states) rai 2 (italy)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Persons_unknown.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-peter-pan-the-pirates",
  "title": "Peter Pan & the Pirates",
  "startYear": 1990,
  "endYear": 1991,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 65,
  "status": "Ended",
  "network": "Fox (Fox Kids)",
  "rating": null,
  "description": "Fox's Peter Pan & the Pirates (known in international markets as 20th Century Fox's Peter Pan & the Pirates) is an American animated television series based on J.M. Barrie's Peter Pan that aired on Fox Kids from September 8, 1990, to September 10, 1991. 65 episodes were produced. The show was one of Fox's first forays into programming for children.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 8,
   "cozy": 4,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "fox (fox kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Fox%27s_Peter_Pan_%26_the_Pirates_%28logo%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pinky-and-the-brain",
  "title": "Pinky and the Brain",
  "startYear": 1995,
  "endYear": 1998,
  "creator": "Tom Ruegger",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 4,
  "episodes": 65,
  "status": "Ended",
  "network": "Kids' WB",
  "rating": null,
  "description": "Pinky and the Brain is an American animated television series about two genetically enhanced laboratory mice, Pinky and The Brain or \"Brain\", who consistently try and take over the world. The show was created by Tom Ruegger for the Kids' WB programming block of The WB, as a collaboration with Steven Spielberg and his production company Amblin Entertainment, and Warner Bros. Television Animation.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "kids' wb",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/13/Pinky_and_the_Brain_original_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pinocchio-the-series",
  "title": "Pinocchio: The Series",
  "startYear": 1972,
  "endYear": 1972,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Family"
  ],
  "seasons": null,
  "episodes": 52,
  "status": "Ended",
  "network": "FNS (Fuji TV)",
  "rating": null,
  "description": "Pinocchio: The Series, also known as Saban's The Adventures of Pinocchio and known as Mock of the Oak Tree (樫の木モック, Kashi no Ki Mokku) in Japan, is a 52-episode anime series by Tatsunoko Production first aired on Fuji Television in 1972, which was edited by Saban in 1990. The story is loosely based on the 1883 novel The Adventures of Pinocchio by Italian author Carlo Collodi.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "animation",
   "fantasy",
   "fns (fuji tv)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/Kashinokimokku.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-planet-earth",
  "title": "Planet Earth",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Planet Earth is a 2006 nature documentary television miniseries produced as a co-production between the BBC Natural History Unit, BBC Worldwide, Discovery Channel and NHK, in association with CBC. Five years in the making, Planet Earth was the most expensive nature documentary series ever commissioned by the BBC and also the first to be filmed in high definition.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 0,
   "epic": 9,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "attenborough",
   "nature",
   "bbc",
   "landmark"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e3/BBC_PE_title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-planet-earth-ii",
  "title": "Planet Earth II",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Planet Earth II is a 2016 British nature documentary series co-produced by the BBC Natural History Unit, BBC Studios, BBC America, ZDF, France Télévisions and Tencent, and distributed by BBC Worldwide. It functions as a sequel to Planet Earth, which was broadcast in 2006. The series is presented and narrated by Sir David Attenborough with the main theme music composed by Hans Zimmer.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 10,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "attenborough",
   "nature",
   "bbc",
   "iguana vs snakes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Planet_Earth_II.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-pok-mon-journeys-the-series",
  "title": "Pokémon Journeys: The Series",
  "startYear": 2019,
  "endYear": 2020,
  "creator": null,
  "genres": [
   "Animation"
  ],
  "seasons": null,
  "episodes": 48,
  "status": "Ended",
  "network": "TV Tokyo",
  "rating": null,
  "description": "Pokémon Journeys: The Series is the twenty-third season of the Pokémon anime series and the first and titular season of Pokémon Journeys: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). The season premiered in Japan on TV Tokyo from November 17, 2019, to December 4, 2020. On April 23, 2020, The Pokémon Company International announced that Netflix has secured the U.S.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 5,
   "weird": 7
  },
  "keywords": [
   "animation",
   "animated",
   "tv tokyo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/Pok%C3%A9mon_S23_-_Posters.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-police-academy",
  "title": "Police Academy",
  "startYear": 1988,
  "endYear": 1989,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 2,
  "episodes": 65,
  "status": "Ended",
  "network": "Syndication (United States)",
  "rating": null,
  "description": "Police Academy (also known as Police Academy: The Animated Series) is a 1988 animated television series based on the Police Academy series of films. The show was produced by Ruby-Spears Enterprises for Warner Bros. Television. It aired weekdays and lasted two seasons for a total of 65 episodes. Some episodes feature a crime boss named Kingpin.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 1,
   "epic": 4,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "syndication (united states)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/92/Police_Academy_Animated.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-popeye-the-sailor",
  "title": "Popeye the Sailor",
  "startYear": 1960,
  "endYear": 1963,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": 220,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Popeye the Sailor is an American animated television series produced for King Features Syndicate TV starring Popeye that was released between 1960 and 1963 with 220 episodes produced. The episodes were produced by multiple animation studios and aired in broadcast syndication until the 1990s.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 9,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 2,
   "epic": 4,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/Popeye_1960.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-poppy-cat",
  "title": "Poppy Cat",
  "startYear": 2011,
  "endYear": 2015,
  "creator": null,
  "genres": [
   "Animation",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 104,
  "status": "Ended",
  "network": "Nick Jr.",
  "rating": null,
  "description": "Poppy Cat (alternatively known as The Extraordinary Adventures of Poppy Cat) is a British-American preschool animated television series, which first aired on May 2, 2011 and last aired on October 31, 2015.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 7,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "adventure",
   "nick jr.",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e1/Poppy_Cat_logo.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pound-puppies",
  "title": "Pound Puppies",
  "startYear": 2010,
  "endYear": 2013,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 3,
  "episodes": 65,
  "status": "Ended",
  "network": "The Hub/Hub Network",
  "rating": null,
  "description": "Pound Puppies is an animated television series developed by Wendy Klein Moss, Nancy Steingard, Paul Germain and Joe Ansolabehere for the Hub Network. It debuted on October 10, 2010 in the United States as the first Hub \"original series\". It also aired on YTV in Canada and on Boomerang in the United Kingdom, Ireland, Scandinavia and Australia.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "the hub/hub network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/Pound_Puppies_logo.PNG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-power-rangers-mystic-force",
  "title": "Power Rangers Mystic Force",
  "startYear": 2006,
  "endYear": 2006,
  "creator": "Bruce Kalish",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 32,
  "status": "Ended",
  "network": "Toon Disney (Jetix)",
  "rating": null,
  "description": "Power Rangers Mystic Force is a television series and the thirteenth entry of the Power Rangers franchise, and is based on the 29th Super Sentai tokusatsu series Mahō Sentai Magiranger. The season premiered on February 20, 2006, as part of the Jetix block on Toon Disney.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "toon disney (jetix)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Mystic_Force_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-power-rangers-rpm",
  "title": "Power Rangers RPM",
  "startYear": 2009,
  "endYear": 2009,
  "creator": "Haim Saban Toei Company, Ltd.",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": 32,
  "status": "Ended",
  "network": "ABC (ABC Kids)",
  "rating": null,
  "description": "Power Rangers RPM is a television series and the sixteenth entry of the Power Rangers franchise, and is an adaptation of Engine Sentai Go-onger, the thirty-second Japanese Super Sentai series. The season was the eighth and final to air on ABC stations.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "abc (abc kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ec/PR_RPM_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-power-rangers-samurai",
  "title": "Power Rangers Samurai",
  "startYear": 2011,
  "endYear": 2012,
  "creator": "Haim Saban Toei Company",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 45,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "Power Rangers Samurai is a television series and the seventeenth entry of the Power Rangers franchise, which is based on the Japanese Super Sentai Series. The season was the first to be produced by Saban Brands after it acquired the franchise from The Walt Disney Company. The season marks the franchise's debut on Nickelodeon, premiering on February 7, 2011.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "nickelodeon",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/PR_Samurai_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-power-rangers-wild-force",
  "title": "Power Rangers Wild Force",
  "startYear": 2002,
  "endYear": 2002,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 40,
  "status": "Ended",
  "network": "Fox (Fox Kids)",
  "rating": null,
  "description": "Power Rangers Wild Force is a television series and the tenth entry of Power Rangers. It is also the 10th anniversary season of the Power Rangers franchise, based on the 25th Super Sentai series Hyakujuu Sentai Gaoranger, which itself was the 25th anniversary of Super Sentai.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "fox (fox kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/PR_Wild_Force_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-power-rangers-zeo",
  "title": "Power Rangers Zeo",
  "startYear": 1996,
  "endYear": 1996,
  "creator": "Haim Saban Toei Company",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 50,
  "status": "Ended",
  "network": "Fox (Fox Kids)",
  "rating": null,
  "description": "Power Rangers Zeo is a television series and the fourth entry of the Power Rangers franchise, based on the 19th Super Sentai series Chouriki Sentai Ohranger. It is the continuation of Mighty Morphin Power Rangers and aired in 1996 as the direct sequel to the Mighty Morphin Alien Rangers miniseries. In the Philippines, the series is known as Zeo Rangers.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "fox (fox kids)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/PR_Zeo_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-powerless",
  "title": "Powerless",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Powerless is an American sitcom television series developed by Ben Queen, that aired on NBC from February 2, to April 20, 2017. The series is a sitcom set within the world of the DC Universe. The pilot, which was greenlit in August 2015, was ordered to series on May 11, 2016.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "superhero",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/Powerless_%28TV_series_logo%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-prehistoric-planet",
  "title": "Prehistoric Planet",
  "startYear": 2022,
  "endYear": 2023,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": 3,
  "episodes": 15,
  "status": "Ended",
  "network": "Apple TV",
  "rating": null,
  "description": "Prehistoric Planet is a television series, created in the nature documentary style, about extinct prehistoric animals that premiered on Apple TV beginning May 23, 2022. The first two seasons (2022–23) are produced by the BBC Studios Natural History Unit, with Jon Favreau as showrunner, visual effects by The Moving Picture Company, and narration by natural historian Sir David Attenborough.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 9,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "dinosaurs",
   "apple",
   "attenborough",
   "cgi"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2f/Prehistoric_Planet_2022_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-pretty-guardian-sailor-moon",
  "title": "Pretty Guardian Sailor Moon",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Pretty Guardian Sailor Moon (美少女戦士セーラームーン, Bishōjo Senshi Sērā Mūn) is a Japanese tokusatsu superhero television series based on the Sailor Moon manga created by Naoko Takeuchi. It was produced by Toei Company.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 10,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/PGSM_Cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pretty-little-liars",
  "title": "Pretty Little Liars",
  "startYear": 2010,
  "endYear": 2017,
  "creator": "I. Marlene King",
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Family",
   "Drama"
  ],
  "seasons": 7,
  "episodes": 160,
  "status": "Ended",
  "network": "Freeform",
  "rating": null,
  "description": "Pretty Little Liars is an American teen drama mystery television series created by I. Marlene King. It aired on Freeform from June 8, 2010, to June 27, 2017, based on the novel series of the same name written by Sara Shepard, lasting 160 episodes over seven seasons.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "freeform",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/14/Pretty_Little_Liars_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pretty-little-liars-2022",
  "title": "Pretty Little Liars",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Pretty Little Liars is an American slasher teen drama mystery television series created by Roberto Aguirre-Sacasa and Lindsay Calhoon Bring for HBO Max. It is the fourth and final television series in the Pretty Little Liars franchise, which is based on the novel series written by Sara Shepard, and set within the same continuity as the previous series.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "horror",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Pretty_Little_Liars_Original_Sin_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-primal",
  "title": "Primal",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Primal (also known as Genndy Tartakovsky's Primal or Primal: Tales of Savagery) is an American adult animated action horror television series created by Genndy Tartakovsky for Cartoon Network's night-time programming block Adult Swim. Produced by Cartoon Network Studios, it is the first full production from the company to be developed for Adult Swim.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 5,
   "funny": 0,
   "heartwarming": 5,
   "dark": 9,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "wordless",
   "prehistoric",
   "tartakovsky",
   "brutal beauty"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Primal_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-prince-harry-duke-of-sussex",
  "title": "Prince Harry, Duke of Sussex",
  "startYear": 1984,
  "endYear": null,
  "creator": null,
  "genres": [
   "War",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Prince Harry, Duke of Sussex (Henry Charles Albert David; born 15 September 1984), is a member of the British royal family. He is the younger son of King Charles III and Diana, Princess of Wales, and is fifth in the line of succession to the British throne. Harry was born during the reign of his paternal grandmother, Queen Elizabeth II.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "war",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Prince_Harry_Visits_Arlington_National_Cemetery_%2855476826080%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-prison-break",
  "title": "Prison Break",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Drama",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Prison Break is an American crime drama television series created by Paul Scheuring for Fox. The series revolves around two brothers: Lincoln Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller); Lincoln has been sentenced to death for a crime he did not commit, while Michael devises an elaborate plan to help his brother escape prison and clear his name.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "escape",
   "brothers",
   "conspiracy",
   "fox"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Prison_Break_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-psych",
  "title": "Psych",
  "startYear": 2006,
  "endYear": 2014,
  "creator": "Steve Franks",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Ended",
  "network": "USA Network",
  "rating": null,
  "description": "Psych is an American detective comedy-drama television series created by Steve Franks for USA Network. The series stars James Roday as Shawn Spencer, a young crime consultant for the Santa Barbara Police Department whose \"heightened observational skills\" and impressive eidetic memory allow him to convince people that he solves cases with his psychic abilities.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "comedy",
   "usa network",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Psych.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-pushing-daisies",
  "title": "Pushing Daisies",
  "startYear": 2007,
  "endYear": null,
  "creator": "Bryan Fuller",
  "genres": [
   "Fantasy",
   "Comedy",
   "Mystery",
   "Romance",
   "Rom-Com",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Pushing Daisies is an American comedy drama television series created by Bryan Fuller that aired on ABC from October 3, 2007, to June 13, 2009. The series stars Lee Pace as Ned, a pie-maker with the ability to bring dead things back to life with his touch, an ability that comes with stipulations.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/PushingDaisieslogo2.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-quantico",
  "title": "Quantico",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Quantico is an American thriller drama television series which aired on ABC from September 27, 2015, to August 3, 2018, with 57 episodes broadcast over three seasons. Produced by ABC Studios, the series was created by Joshua Safran, who also served as the showrunner. Mark Gordon, Robert Sertner, Nicholas Pepper and Safran are its executive producers.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Quantico_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-quantum-leap",
  "title": "Quantum Leap",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Quantum Leap is an American science fiction television series that aired on NBC. Developed by Steven Lilien and Bryan Wynbrandt, it is a revival of the 1989 show created by Donald P. Bellisario. Bellisario, Lilien and Wynbrandt executive produce. It takes place in 2022, thirty years after the original show concluded. The series stars Raymond Lee as the new lead character Dr.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/04/Quantum_Leap_%282022_TV_series%29_NBC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-queen-of-the-south",
  "title": "Queen of the South",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Queen of the South is an American crime drama television series developed by M.A. Fortin and Joshua John Miller. The series premiered on June 23, 2016, and concluded on June 9, 2021, with 62 episodes aired on USA Network.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Queen_of_the_South_%28TV_series%29_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-quiet-on-set-the-dark-side-of-kids-tv",
  "title": "Quiet on Set: The Dark Side of Kids TV",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Crime",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Quiet on Set: The Dark Side of Kids TV is a 2024 American five-part documentary television series that details the toxic behind-the-scenes world of children's television programs from the 1990s to the 2000s, with a special focus on Dan Schneider's tenure as a producer and showrunner at Nickelodeon.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/QuietOnSetKeyArt.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rainbow-rangers",
  "title": "Rainbow Rangers",
  "startYear": 2018,
  "endYear": 2022,
  "creator": "Rob Minkoff Shane Morris Tim Mansfield Elise Allen",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 3,
  "episodes": 62,
  "status": "Ended",
  "network": "Nick Jr. Channel",
  "rating": null,
  "description": "Rainbow Rangers is an American-Irish animated television series co-produced by Genius Brands and Telegael Teoranta which premiered on the Nick Jr. Channel on November 5, 2018. The series follows seven nine-year-old girls who reside in the kingdom of Kaleidoscopia.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "nick jr. channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Rainbow_Rangers_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-raising-dion",
  "title": "Raising Dion",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Raising Dion is an American superhero drama television series that premiered on October 4, 2019, on Netflix. It is based on the 2015 comic book and short film of the same name by Dennis Liu. In January 2020, Netflix renewed the series for a second and final season which premiered on February 1, 2022.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Raising_Dion_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rambo-the-force-of-freedom",
  "title": "Rambo: The Force of Freedom",
  "startYear": 1986,
  "endYear": 1986,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 65,
  "status": "Ended",
  "network": "First-run syndication",
  "rating": null,
  "description": "Rambo: The Force of Freedom (also known simply as Rambo) is a 1986 American animated series based on the character of John Rambo from David Morrell's book First Blood and the subsequent films First Blood (1982) and Rambo: First Blood Part II (1985).",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "animation",
   "action",
   "first-run syndication",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/Rambo_The_Force_of_Freedom.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-read-or-die-ova",
  "title": "Read or Die (OVA)",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Thriller",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Read or Die is an OVA based on the characters of the novels and manga of the same name by Hideyuki Kurata. It was released by Studio Deen from 2001 to 2002 and distributed outside Japan by Manga Entertainment in 2003. The series, directed by Koji Masunari, features the main characters of the original manga such as Yomiko Readman and Joker.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "animation",
   "thriller",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-real-time-with-bill-maher",
  "title": "Real Time with Bill Maher",
  "startYear": 2003,
  "endYear": null,
  "creator": "Bill Maher",
  "genres": [
   "Comedy"
  ],
  "seasons": 24,
  "episodes": 716,
  "status": "Running",
  "network": "HBO",
  "rating": null,
  "description": "Real Time with Bill Maher is an American television talk show created, written and presented by Bill Maher, and has been airing on HBO since 2003, with an audio-only podcast, with episodes at least since 2015. Much like his previous series Politically Incorrect on Comedy Central and later on ABC, Real Time features a panel of guests who discuss current events in politics and the media.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 0,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "hbo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Real_Time_with_Bill_Maher.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-regular-show",
  "title": "Regular Show",
  "startYear": 2010,
  "endYear": null,
  "creator": "J. G. Quintel",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 8,
  "episodes": 244,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Regular Show is an American animated sitcom created by J. G. Quintel for Cartoon Network. It ran from September 6, 2010, to January 16, 2017, over the course of eight seasons and 244 episodes. The series follows the daily lives of two 23-year-old friends—Mordecai, a blue jay, and Rigby, a raccoon—who work at a local park as groundskeepers.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Regular_Show_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rescue-me",
  "title": "Rescue Me",
  "startYear": 2004,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Rescue Me is an American comedy drama television series that aired on FX from July 21, 2004, to September 7, 2011. The series focuses on the professional and personal lives of a group of New York City firefighters. The protagonist and focal point of the series is veteran New York City firefighter Tommy Gavin (Denis Leary).",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Rescue_Me_%28Sony_and_Amblin_Television%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-resurrection",
  "title": "Resurrection",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Resurrection is an American fantasy drama television series that aired from March 9, 2014, to January 25, 2015, on ABC. It is based on Jason Mott's 2013 novel The Returned, and is centered on a town in which dead people come back to life.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 9,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Resurrection_2013_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-revenge",
  "title": "Revenge",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery",
   "Psychological Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Revenge is an American drama television series created by Mike Kelley and starring Madeleine Stowe and Emily VanCamp, which debuted on September 21, 2011, on ABC. The plot is inspired by Alexandre Dumas' 1844 novel The Count of Monte Cristo.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 1,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Revenge_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-revolution",
  "title": "Revolution",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Revolution (stylized as REVOLUTI⏻N) is an American post-apocalyptic science fiction television series that ran from September 17, 2012, until May 21, 2014, when it was cancelled by NBC. The show takes place in the post-apocalyptic near-future of the year 2027, 15 years after the start of a worldwide, permanent electrical-power blackout in 2012. Created by Eric Kripke and produced by J. J.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Revolution_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-richard-ramirez",
  "title": "Richard Ramirez",
  "startYear": 1960,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ricardo Leyva Muñoz Ramirez (; February 29, 1960 – June 7, 2013), better known as Richard Ramirez, was an American serial killer, sex offender, and burglar whose killing spree occurred in Greater Los Angeles and the San Francisco Bay Area in the state of California. From April 1984 to August 1985, Ramirez murdered at least 15 people during various break-ins.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 4,
   "epic": 4,
   "cozy": 8,
   "weird": 1
  },
  "keywords": [
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Richard_Ramirez_1984_mug_shot.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rick-and-morty",
  "title": "Rick and Morty",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Sci-Fi",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Rick and Morty is an American adult animated science fiction tragicomedy sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 3,
   "funny": 9,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 10
  },
  "keywords": [
   "multiverse",
   "adult swim",
   "nihilism",
   "portal gun"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-ringer",
  "title": "Ringer",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Ringer is an American crime thriller drama television series that aired on The CW from September 13, 2011, to April 17, 2012. The series stars Sarah Michelle Gellar, who plays twin sisters Bridget Kelly and Siobhan Martin. On May 13, 2011, it was reported that the project had been picked up to series by The CW. On October 12, 2011, The CW ordered a full first season of 22 episodes.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1a/RingerOpening.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-robot-and-monster",
  "title": "Robot and Monster",
  "startYear": 2012,
  "endYear": 2012,
  "creator": "Dave Pressler Joshua Sternin Jennifer Ventimilia",
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 26,
  "status": "Ended",
  "network": "Nickelodeon",
  "rating": null,
  "description": "Robot and Monster is an American animated television series created by Dave Pressler, Joshua Sternin and Jennifer Ventimilia. Main characters Robot and Monster are voiced by Curtis Armstrong and comedian Harland Williams, respectively. It began production in 2009 and was ordered for a full 26-episode season in 2010, before finally premiering on Nickelodeon on August 4, 2012.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "nickelodeon",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/Robot_and_Monster_title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rosies-rules",
  "title": "Rosie's Rules",
  "startYear": 2022,
  "endYear": null,
  "creator": "Jennifer Hamburg",
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Rosie's Rules is a children's animated television series created by Jennifer Hamburg. The series premiered on October 3, 2022 on PBS Kids and October 11, 2022 on TVOKids. The series is produced by 9 Story Media Group and its animation division Brown Bag Films. It is funded by McCormick and animated using Toon Boom Harmony.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Rosie%27s_Rules_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rubicon",
  "title": "Rubicon",
  "startYear": 2010,
  "endYear": 2010,
  "creator": "Jason Horwitch",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 13,
  "status": "Ended",
  "network": "AMC",
  "rating": null,
  "description": "Rubicon is an American conspiracy thriller television series created by Jason Horwitch and produced by Henry Bromell that was broadcast on the AMC television network in 2010. The series centers on an intelligence analyst working for the American Policy Institute (API) in New York City.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "thriller",
   "drama",
   "amc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1a/Rubicon_2010_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rugrats",
  "title": "Rugrats",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Rugrats is an American animated television series created by Arlene Klasky, Gábor Csupó, and Paul Germain. It has been described as a reboot of the original TV series of the same name which aired from 1991 to 2004. The series premiered on May 27, 2021, on Paramount+; it is the second Nickelodeon-based series created for the streaming service.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Rugrats-logo-2021.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-rupauls-drag-race",
  "title": "RuPaul's Drag Race",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "RuPaul's Drag Race is an American reality competition television series, the first in the Drag Race franchise, produced by World of Wonder for Logo TV (season 1–8), WOW Presents Plus, VH1 (season 9–14) and, beginning with the fifteenth season, MTV. The show documents RuPaul in the search for \"America's next drag superstar\".",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 7
  },
  "keywords": [
   "drag",
   "competition",
   "catchphrases",
   "mtv"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/cc/RuPaul%27s_Drag_Race_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-russian-doll",
  "title": "Russian Doll",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Russian Doll is an American comedy-drama television series, created by Natasha Lyonne, Leslye Headland, and Amy Poehler, that premiered on Netflix on February 1, 2019. The series follows Nadia Vulvokov (Lyonne), a game developer who repeatedly dies and relives the same night in an ongoing time loop and tries to solve it, leading to her finding Alan Zaveri (Charlie Barnett) in the same situation.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 2,
   "funny": 8,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 10
  },
  "keywords": [
   "time loop",
   "new york",
   "netflix",
   "existential"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/07/RussianDoll.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-rutherford-falls",
  "title": "Rutherford Falls",
  "startYear": 2021,
  "endYear": 2022,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": 2,
  "episodes": 18,
  "status": "Ended",
  "network": "Peacock",
  "rating": null,
  "description": "Rutherford Falls is an American sitcom television series that premiered on the streaming service Peacock on April 22, 2021. It was created by Ed Helms, Michael Schur, and Sierra Teller Ornelas. In July 2021, the series was renewed for a second season, which was released on June 16, 2022. In September 2022, the series was canceled after two seasons.",
  "vector": {
   "adrenaline": 0,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 0,
   "romantic": 4,
   "epic": 0,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "peacock",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Rutherford_Falls_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-s-w-a-t",
  "title": "S.W.A.T.",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "S.W.A.T. is an American action drama television series based on the 1975–76 television series of the same name. Aaron Rahsaan Thomas and Shawn Ryan developed the new series, which premiered on CBS on November 2, 2017, and is produced by Original Film, CBS Studios and Sony Pictures Television (the latter is a successor to the producer of the original 1975 series, Spelling-Goldberg Productions).",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/SWAT_TV_Series_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-salvation",
  "title": "Salvation",
  "startYear": 2017,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Salvation is an American suspense drama television series, that premiered on July 12, 2017. The series was originally announced as being developed in September 2013, but received its straight-to-series 13-episode order in October 2016. On October 18, 2017, CBS renewed the series for a 13-episode second season, which premiered on June 25, 2018.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/72/Salvation_Intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-samurai-jack",
  "title": "Samurai Jack",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Action",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Samurai Jack is an American animated science fantasy action-adventure television series created by Genndy Tartakovsky for Cartoon Network and later its nighttime programming block Adult Swim. It was produced by Cartoon Network Studios. Tartakovsky conceived Samurai Jack after finishing his work on his first Cartoon Network original series, Dexter's Laboratory, which premiered in 1996.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "tartakovsky",
   "minimalist",
   "time-displaced samurai",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Samurai_Jack_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-sanctuary",
  "title": "Sanctuary",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sanctuary is a Canadian science fantasy television series created by Damian Kindler. It aired on Syfy in the United States between 2008 and 2011, for all four seasons and a total of 59 episodes. The series also aired in Canada on The Movie Network and Movie Central for the first season, and on Space for seasons 2–4.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 6,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/Sanctuary_2008_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-saul-of-the-mole-men",
  "title": "Saul of the Mole Men",
  "startYear": 2007,
  "endYear": 2007,
  "creator": "Craig Lewis",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": 20,
  "status": "Ended",
  "network": "Adult Swim",
  "rating": null,
  "description": "Saul of the Mole Men is an American live-action/puppet/animated hybrid comedy television series created by Craig Lewis, former writer on Cartoon Network's The Grim Adventures of Billy & Mandy and Foster's Home for Imaginary Friends, and developed by Lewis, director Tom Stern and artist Peter Girardi.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "adult swim",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Soul_of_the_Mole_Men.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sausage-party-foodtopia",
  "title": "Sausage Party: Foodtopia",
  "startYear": 2016,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Animation",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sausage Party: Foodtopia is an adult animated dark comedy television series that serves as a sequel to the film Sausage Party (2016) created by Seth Rogen, Evan Goldberg, Kyle Hunter, and Ariel Shaffir, and developed by the latter two for Amazon Prime Video.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sausage_Party_Foodtopia_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-saved-by-the-bell",
  "title": "Saved by the Bell",
  "startYear": 2020,
  "endYear": null,
  "creator": "Sam Bobrick",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Saved by the Bell is an American television sitcom developed by Tracey Wigfield that premiered on November 25, 2020, on Peacock. It is a revival to the original television series of the same name created by Sam Bobrick and follows some of the same characters.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 1,
   "funny": 10,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 2,
   "epic": 0,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saved_by_the_Bell_%28Peacock_sitcom%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-schitts-creek",
  "title": "Schitt's Creek",
  "startYear": null,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Schitt's Creek (stylized as Schitt$ Creek) is a Canadian television sitcom created by Dan Levy and his father, Eugene Levy, consisting of 80 episodes over six seasons, airing on CBC Television from January 13, 2015, to April 7, 2020. Produced by Not a Real Company Productions and the Canadian Broadcasting Corporation, the series follows the formerly wealthy Rose family.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 6,
   "epic": 1,
   "cozy": 10,
   "weird": 3
  },
  "keywords": [
   "small town",
   "riches to rags",
   "family",
   "canadian"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Schitt%27s_Creek_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-scream-queens",
  "title": "Scream Queens",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Comedy",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Scream Queens is an American satirical dark comedy slasher television series that aired on Fox from September 22, 2015, to December 20, 2016. The series was created by Ryan Murphy, Brad Falchuk, and Ian Brennan and produced by Murphy, Falchuk, Brennan, and Alexis Martin Woodall, and by 20th Century Fox Television, Ryan Murphy Productions, Brad Falchuk Teley-vision, and Prospect Films.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 2,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "horror",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/80/Scream_Queens_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-scrubs",
  "title": "Scrubs",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Young doctors learn medicine and life at Sacred Heart Hospital, narrated through J.D.'s daydreams and fantasies. A sitcom that swings between goofy and genuinely gutting, often in the same scene.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 8,
   "weird": 6
  },
  "keywords": [
   "hospital",
   "daydreams",
   "bromance",
   "heart"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-scrubs-2026",
  "title": "Scrubs",
  "startYear": 2026,
  "endYear": null,
  "creator": "Bill Lawrence",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Scrubs (stylized as [scrubs]) is an American medical sitcom created by Bill Lawrence for ABC as a continuation of the 2001–2010 television series of the same name, and is developed by Aseem Batra and Tim Hobert. The series was officially announced by ABC in July 2025, following J.D.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 2,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/Scrubs_2026_titlecard.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sea-hunt",
  "title": "Sea Hunt",
  "startYear": 1958,
  "endYear": 1961,
  "creator": "Ivan Tors James Buxbaum",
  "genres": [
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 4,
  "episodes": 155,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Sea Hunt is an American action-adventure television series that aired in syndication from 1958 to 1961 and was popular for decades afterwards. The series originally aired for four seasons, with 155 episodes produced. It stars Lloyd Bridges as former Navy diver Mike Nelson, and was produced by Ivan Tors.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "action",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Sea_Hunt.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-secret-invasion",
  "title": "Secret Invasion",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Thriller",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Secret Invasion is an American television miniseries created by Kyle Bradstreet for the streaming service Disney+, based on the 2008 Marvel Comics storyline \"Secret Invasion\". It is the ninth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/Secret_Invasion_%28miniseries%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-secret-heroine-phantomirage",
  "title": "Secret × Heroine Phantomirage!",
  "startYear": 2019,
  "endYear": 2020,
  "creator": "TOMY OLM",
  "genres": [
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": 64,
  "status": "Ended",
  "network": "TXN (TV Tokyo)",
  "rating": null,
  "description": "Secret × Heroine Phantomirage! (ひみつ×戦士 ファントミラージュ!, Himitsu Senshi Fantomirāju!) is a Japanese television drama series that aired from April 7, 2019, to June 28, 2020. It is the third installment of the Girls × Heroine Series produced by Takara Tomy and OLM, Inc. with the assistance of Shogakukan and EXPG Studio. The series stars Minami Hishida, Kira Yamaguchi, Toa Harada, and Ran Ishii.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "family",
   "drama",
   "txn (tv tokyo)",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-seinfeld",
  "title": "Seinfeld",
  "startYear": 1989,
  "endYear": null,
  "creator": "Larry David (seasons 1–7) Jerry Seinfeld (season 8–9)",
  "genres": [
   "Comedy"
  ],
  "seasons": 9,
  "episodes": 180,
  "status": "Running",
  "network": null,
  "rating": "TV-PG",
  "description": "Seinfeld ( SYNE-feld) is an American television sitcom created by Larry David and Jerry Seinfeld. It originally aired on NBC from July 5, 1989, to May 14, 1998, with a total of nine seasons consisting of 180 episodes.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 2,
   "dark": 2,
   "romantic": 1,
   "epic": 1,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "sitcom",
   "new york",
   "show about nothing",
   "nineties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/78/Seinfeld_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-seth-macfarlane",
  "title": "Seth MacFarlane",
  "startYear": 1973,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Seth Woodbury MacFarlane (; born October 26, 1973) is an American actor, animator, filmmaker, comedian, and singer. He is the creator and star of the television series Family Guy and The Orville, and co-creator of the television series American Dad! and The Cleveland Show. He co-wrote, co-produced, directed and starred in the films Ted, its sequel Ted 2 and A Million Ways to Die in the West.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Seth_MacFarlane_-_NBTVF_2026-3_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-severance",
  "title": "Severance",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Severance is an American science fiction psychological thriller television series created by Dan Erickson, and executive produced and primarily directed by Ben Stiller. It stars Adam Scott, Zach Cherry, Britt Lower, Tramell Tillman, Jen Tullock, Dichen Lachman, Michael Chernus, John Turturro, Christopher Walken, Patricia Arquette, and Sarah Bock.",
  "vector": {
   "adrenaline": 3,
   "brainy": 10,
   "scary": 3,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 9
  },
  "keywords": [
   "workplace",
   "memory",
   "dystopia",
   "apple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/11/Severance_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-sex-and-the-city",
  "title": "Sex and the City",
  "startYear": 1996,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Romance",
   "Rom-Com",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sex and the City is an American romantic comedy-drama television series created by Darren Star for HBO, based on the newspaper column and 1996 book by Candace Bushnell. It premiered in the United States on June 6, 1998, and concluded on February 22, 2004, with 94 episodes broadcast over six seasons.",
  "vector": {
   "adrenaline": 0,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 5,
   "epic": 1,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/SATC_Title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-shades-of-blue",
  "title": "Shades of Blue",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Shades of Blue is an American crime drama television series created by Adi Hasak for NBC. The series premiered on January 7, 2016. It is set in New York City and stars Jennifer Lopez as Harlee Santos, a single-mother NYPD Detective who is forced to work for the FBI's Anti-Corruption Task Force, while dealing with her own financial and family problems.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Shades_of_Blue_nbc_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-shadow-and-bone",
  "title": "Shadow and Bone",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Drama",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Shadow and Bone is an American fantasy television series developed by Eric Heisserer for Netflix, starring Jessie Mei Li, Ben Barnes and Archie Renaux, with Freddy Carter, Amita Suman, and Kit Young in supporting roles.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 5,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "grishaverse",
   "young adult",
   "netflix",
   "magic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Shadow_and_Bone_Title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-sharp-objects",
  "title": "Sharp Objects",
  "startYear": 2006,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Mystery",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Sharp Objects is an American Southern Gothic psychological thriller television miniseries based on Gillian Flynn's 2006 debut novel of the same name that premiered on July 8, 2018, on HBO.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 4,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "gothic",
   "reporter",
   "trauma",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b4/SharpObjects.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-sherlock",
  "title": "Sherlock",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Sherlock is a British mystery crime drama television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, the show stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson.",
  "vector": {
   "adrenaline": 5,
   "brainy": 10,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "holmes",
   "london",
   "modern",
   "bbc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Sherlock_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-shogun",
  "title": "Shogun",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Historical Drama",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "An English pilot shipwrecked in 1600s Japan is drawn into Lord Toranaga's deadly political games on the eve of civil war. A lavish, largely Japanese-language epic of power, loyalty, and culture clash.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 2,
   "epic": 10,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "feudal japan",
   "samurai",
   "epic",
   "fx"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-shooter",
  "title": "Shooter",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Shooter is an American drama television series based on the 2007 film of the same name and the first three novels in the Bob Lee Swagger series by Stephen Hunter. The show stars Ryan Phillippe in the lead role of Bob Lee Swagger, a retired United States Marine Corps Scout Sniper from MARSOC living in seclusion who is coaxed back into action after learning of a plot to kill the President.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8d/Shooter_TV_Series_Key_Cast_Art.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-short-program",
  "title": "Short Program",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Short Program (Japanese: ショート・プログラム, Hepburn: Shōto Puroguramu) is a 2022 Japanese anthology streaming television drama series based on Mitsuru Adachi's manga collection with the same name starring members of boy band JO1 as the male protagonists. The series is produced by Atmovie Inc. and Lapone Entertainment, with Yoshimoto Kogyo as the distributor.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 3,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 9,
   "epic": 2,
   "cozy": 6,
   "weird": 0
  },
  "keywords": [
   "romance",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Short_Program_promotional_image.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-show-me-a-hero",
  "title": "Show Me a Hero",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Show Me a Hero is a 2015 American miniseries based on the 1999 nonfiction book of the same name by former New York Times writer Lisa Belkin about Yonkers mayor (1987–89) Nick Wasicsko.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/Show_Me_a_Hero_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sh-gun",
  "title": "Shōgun",
  "startYear": 2024,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Shōgun is an American historical drama television series created by Rachel Kondo and Justin Marks. It is based on the 1975 novel by James Clavell, which was previously adapted into a 1980 miniseries. Its ensemble cast includes Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai, Tadanobu Asano, Takehiro Hira, Tommy Bastow, and Fumi Nikaido.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Sh%C5%8Dgun_%282024_miniseries%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-side-hustle",
  "title": "Side Hustle",
  "startYear": 2020,
  "endYear": null,
  "creator": "Dave Malkoff",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Side Hustle is an American buddy comedy television series created by Dave Malkoff that premiered on Nickelodeon on November 7, 2020. It lasted two seasons, with the final episode airing on June 30, 2022. The series stars Jules LeBlanc, Jayden Bartels, Isaiah Crews, Mitchell Berg, and Jacques Chevelle.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 4,
   "epic": 3,
   "cozy": 9,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/SideHustleLogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-silicon-valley",
  "title": "Silicon Valley",
  "startYear": 2014,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Silicon Valley is an American comedy television series created by Mike Judge, John Altschuler and Dave Krinsky. It premiered on HBO on April 6, 2014, and concluded on December 8, 2019, running for six seasons for a total of 53 episodes.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 1,
   "funny": 9,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Silicon_valley_title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-silo",
  "title": "Silo",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Silo is an American science fiction dystopian drama television series created by Graham Yost, based on the Silo trilogy of novels (Wool, Shift, and Dust) by author Hugh Howey.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "underground",
   "dystopia",
   "apple",
   "secrets"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Silo_%28TV_series%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-silverhawks",
  "title": "SilverHawks",
  "startYear": 1986,
  "endYear": 1986,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Western",
   "Family"
  ],
  "seasons": 1,
  "episodes": 65,
  "status": "Ended",
  "network": "Syndication",
  "rating": null,
  "description": "SilverHawks is an American superhero animated television series developed by Rankin/Bass Productions and distributed by Lorimar-Telepictures in 1986. The animation was provided by Japanese studio Pacific Animation Corporation. In total, 65 episodes were made. It was created as a space-based equivalent of their previous series ThunderCats.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 5,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "syndication",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/Silverhawks_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sit-down-shut-up",
  "title": "Sit Down, Shut Up",
  "startYear": 2009,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sit Down, Shut Up (sometimes also known as Sit Down, Shut Up! in some promos) is an American adult animated television series developed by Mitchell Hurwitz for the Fox Broadcasting Company. The series focuses on a group of high school teachers in a small town in Florida \"who don't care about teaching\".",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 10,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 1,
   "epic": 5,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/SitDownShutUplogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-six-feet-under",
  "title": "Six Feet Under",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Six Feet Under may refer to: A euphemistic phrase for burial or death",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "funeral home",
   "death",
   "family",
   "hbo"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-six-feet-under-2001",
  "title": "Six Feet Under",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Six Feet Under is an American drama television series created and produced by Alan Ball for the television network HBO. It premiered on June 3, 2001, and ended on August 21, 2005, after five seasons consisting of 63 episodes. The show follows the Fisher family, who run a funeral home in Los Angeles, along with their friends and lovers. It stars Peter Krause, Michael C.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-slasher",
  "title": "Slasher",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Slasher is a Canadian-American horror anthology television series created by Aaron Martin. It premiered on Chiller on March 4, 2016, and on Super Channel on April 1, 2016. The licensing rights for the second season were acquired by Netflix in January 2017. The second season was released on October 17, 2017.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 7,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "horror",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Slasher_TV_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sleepy-hollow",
  "title": "Sleepy Hollow",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Crime",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sleepy Hollow is an American supernatural drama television series that aired on Fox from September 16, 2013, to March 31, 2017. The series is loosely based on the 1820 short story \"The Legend of Sleepy Hollow\", by Washington Irving, with added concepts from \"Rip Van Winkle\", also by Irving.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 7,
   "funny": 3,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/66/Sleepy_Hollow_%28TV_series%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sliders",
  "title": "Sliders",
  "startYear": 1995,
  "endYear": null,
  "creator": "Tracy Tormé Robert K. Weiss",
  "genres": [
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sliders is an American science-fiction and fantasy television series created by Robert K. Weiss and Tracy Tormé. It was broadcast for five seasons between 1995 and 2000. The series follows a group of travelers as they use a wormhole to \"slide\" between parallel universes.",
  "vector": {
   "adrenaline": 5,
   "brainy": 10,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Sliders_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-slow-horses",
  "title": "Slow Horses",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Slow Horses is a British spy thriller television series based on the Slough House novels by Mick Herron, and adapted for television by the English comedian and writer Will Smith. It follows Slough House, an MI5 unit where disgraced or failed agents are consigned, under the supervision of Jackson Lamb (Gary Oldman).",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "mi5",
   "disgraced spies",
   "gary oldman",
   "apple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Slow_Horses_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-small-town-security",
  "title": "Small Town Security",
  "startYear": 2012,
  "endYear": 2014,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": 3,
  "episodes": 24,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Small Town Security is an American reality television series produced by Ken Druckerman and Banks Tarver from Left/Right Productions for the AMC network. The unscripted show focused on a small, family-owned, private security company called JJK Security, located in the North Georgia city of Ringgold.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Small_Town_Security_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-smallville",
  "title": "Smallville",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Drama",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Smallville is an American superhero television series developed by writer-producers Alfred Gough and Miles Millar, based on the DC Comics character Superman created by Jerry Siegel and Joe Shuster. The series was produced by Millar/Gough Ink, Tollin/Robbins Productions, DC Entertainment, and Warner Bros. Television.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 6,
   "epic": 5,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "young superman",
   "teen drama",
   "wb",
   "ten seasons"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Smallville_2001_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-snoop-dogg",
  "title": "Snoop Dogg",
  "startYear": 1971,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Calvin Cordozar Broadus Jr. (born October 20, 1971), known professionally as Snoop Dogg, is an American rapper, singer, record producer, record executive, songwriter, and actor. A key figure in West Coast hip-hop, he helped define G-funk and gangsta rap, and is often regarded as one of the greatest rappers of all time.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Snoop_Dogg%2C_WrestleMania_XL_%28cropped%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-snowfall",
  "title": "Snowfall",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Snowfall is an American crime drama television series, created by John Singleton, Eric Amadio, and Dave Andron for FX. The series premiered on July 5, 2017, and concluded on April 19, 2023, after six seasons consisting of 60 episodes.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "crime",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/Snowfalltitlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-snowpiercer",
  "title": "Snowpiercer",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Snowpiercer is an American post-apocalyptic dystopian thriller television series that premiered on May 17, 2020, on TNT. It is based on both the 2013 film of the same name, directed by Bong Joon-ho, and the 1982 French graphic novel Le Transperceneige by Jacques Lob, Benjamin Legrand and Jean-Marc Rochette, from which the film was adapted.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Snowpiercer_%28TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sonic-boom",
  "title": "Sonic Boom",
  "startYear": 2014,
  "endYear": 2017,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 2,
  "episodes": 104,
  "status": "Ended",
  "network": "Cartoon Network & Boomerang Canal J & Gulli",
  "rating": null,
  "description": "Sonic Boom is an animated sitcom produced by Sega of America, Inc. and Technicolor Animation Productions (formerly OuiDo! Productions in season 1) in collaboration with Lagardère Thématiques and Jeunesse TV, respectively for Cartoon Network, Boomerang, Canal J, and Gulli, It is loosely based on the Sonic the Hedgehog video game series by Sega, the fifth animated television series based on the…",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "cartoon network & boomerang canal j & gulli",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b5/Sonic_Boom_franchise_and_video_game_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sons-of-anarchy",
  "title": "Sons of Anarchy",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Sons of Anarchy is an American action crime drama television series created by Kurt Sutter for FX. Originally aired from September 3, 2008, to December 9, 2014, Sons of Anarchy follows the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in California's Central Valley.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "bikers",
   "outlaw",
   "family",
   "shakespearean"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/SOATitlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-south-park",
  "title": "South Park",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "South Park is an American animated sitcom created by Trey Parker and Matt Stone for Comedy Central. The series revolves around four boys—Stan Marsh, Kyle Broflovski, Eric Cartman, and Kenny McCormick—and their adventures in and around the titular Colorado town. South Park also features many recurring characters.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 2,
   "funny": 10,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 3,
   "weird": 9
  },
  "keywords": [
   "satire",
   "topical",
   "colorado",
   "not for kids"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/59/South_Park.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-space-1999",
  "title": "Space: 1999",
  "startYear": 1999,
  "endYear": null,
  "creator": "Gerry and Sylvia Anderson",
  "genres": [
   "Sci-Fi",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Space: 1999 is a British science fiction television programme that ran for two series from 1975 to 1977. It was first telecast on Australia's Channel 7 Melbourne, starting on 28 July 1975. The programme, set in the year 1999, follows the 311 inhabitants of Moonbase Alpha, which is hurtling uncontrollably into space due to an explosion of nuclear waste stored on the Moon's far side.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 9,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Space1999_Year1_Title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-spartacus",
  "title": "Spartacus",
  "startYear": 2010,
  "endYear": null,
  "creator": "Steven S. DeKnight",
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Spartacus is an American historical drama television series created by Steven S. DeKnight that premiered on Starz on January 22, 2010, and concluded on April 12, 2013. The series was inspired by historical figure Spartacus, a Thracian gladiator who from 73 to 71 BC led a major slave uprising against the Roman Republic departing from Capua.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "action",
   "drama",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-spider-man-and-his-amazing-friends",
  "title": "Spider-Man and His Amazing Friends",
  "startYear": 1981,
  "endYear": null,
  "creator": "Stan Lee",
  "genres": [
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Spider-Man and His Amazing Friends is a 1981–1983 American superhero animated television series produced by Marvel Productions, and a crossover with the 1981 Spider-Man series. In addition to the established Marvel Comics characters Spider-Man and Iceman, the show introduced the principal character Fire-Star. As a trio called the Spider-Friends, they defeat various villains of the Marvel Universe.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Spider-Man_and_His_Amazing_Friends_%28intertitle%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-squid-game",
  "title": "Squid Game",
  "startYear": 2021,
  "endYear": 2025,
  "creator": "Hwang Dong-hyuk",
  "genres": [
   "Thriller",
   "Drama",
   "Horror Thriller"
  ],
  "seasons": 3,
  "episodes": 22,
  "status": "Ended",
  "network": "Netflix",
  "rating": "TV-MA",
  "description": "Squid Game (Korean: 오징어 게임; RR: Ojingeo geim) is a South Korean dystopian survival thriller drama television series created, written, and directed by Hwang Dong-hyuk for Netflix.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 3,
   "dark": 10,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "death games",
   "debt",
   "korean",
   "netflix phenomenon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/57/Squid_Game_2021_vector_logo_english.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-stalker",
  "title": "Stalker",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Stalker is an American crime drama television series created by Kevin Williamson that ran for one season on CBS, from October 1, 2014, to May 18, 2015. The series aired on Wednesdays for seventeen episodes and Monday for the last three. The show is about victims of stalking and the detectives of the LAPD's Threat Assessment Unit who investigate the crimes.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/Stalker_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-star-falls",
  "title": "Star Falls",
  "startYear": 2018,
  "endYear": null,
  "creator": "George Doty IV",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Star Falls is an American sitcom created by George Doty IV that aired on Nickelodeon from March 31 to July 28, 2018, and on TeenNick from August 5 to September 2, 2018. The series stars Siena Agudong, Kamaia Fairburn, Elena V. Wolfe, Dion Johnstone, Jadiel Dowlin, and Marcus Cornwall.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 0,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Star_Falls_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-star-trek-the-next-generation",
  "title": "Star Trek: The Next Generation",
  "startYear": 1987,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-PG",
  "description": "Star Trek: The Next Generation (TNG) is an American science fiction television series created by Gene Roddenberry. It originally aired from September 28, 1987, to May 23, 1994, in syndication, spanning 178 episodes over seven seasons. The third series in the Star Trek franchise, it was inspired by Star Trek: The Original Series.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 8,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "enterprise",
   "picard",
   "exploration",
   "optimism"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/15/Star_Trek_The_Next_Generation_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-star-trek-voyager",
  "title": "Star Trek: Voyager",
  "startYear": 1995,
  "endYear": null,
  "creator": "{{Plain list|",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Star Trek: Voyager is an American science fiction series created by Rick Berman, Michael Piller and Jeri Taylor. It aired from January 16, 1995, to May 23, 2001, on UPN, with 172 episodes over seven seasons. It is the fifth series in the Star Trek franchise, the first of two Trek series to air on UPN, as well as the first show to air on the network.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 9,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Star_Trek_Voyager_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-static-shock",
  "title": "Static Shock",
  "startYear": 2000,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Static Shock is an American animated superhero television series based on the Milestone Media/DC Comics superhero Static. It premiered on September 23, 2000, on the WB Television Network's Kids' WB programming block. Static Shock ran for four seasons, with 52 half-hour episodes in total.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/Static_Shock_%28DC_Comics_animated_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-station-eleven",
  "title": "Station Eleven",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Station Eleven is an American post-apocalyptic dystopian fiction television miniseries created by Patrick Somerville loosely based on the 2014 novel of the same name by Emily St. John Mandel. The miniseries premiered on HBO Max on December 16, 2021, and ran for ten episodes until January 13, 2022.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 2,
   "funny": 1,
   "heartwarming": 8,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "pandemic",
   "post-apocalyptic",
   "art",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Station_Eleven.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-steven-universe-future",
  "title": "Steven Universe Future",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Steven Universe Future is an American animated series created by Rebecca Sugar for Cartoon Network. It serves as an epilogue to Steven Universe (2013–2019) and a follow-up to its television film sequel Steven Universe: The Movie (2019). It premiered on December 7, 2019, and concluded on March 27, 2020.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/Steven_Universe_Future_-_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sticks-stones-2019-film",
  "title": "Sticks & Stones (2019 film)",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sticks & Stones is a 2019 American stand-up comedy television special starring comedian Dave Chappelle and directed by Stan Lathan. It was produced by Chappelle and Lathan and distributed by Netflix, the special is detailed as \"a provocative perspective on the tidal wave of celebrity scandals, the opioid crisis, and more\".",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 4,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-stingray",
  "title": "Stingray",
  "startYear": 1964,
  "endYear": null,
  "creator": "Gerry & Sylvia Anderson",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 39,
  "status": "Running",
  "network": "ITV",
  "rating": null,
  "description": "Stingray is a British children's science fiction television series created by Gerry and Sylvia Anderson and produced by AP Films (APF) for ITC Entertainment. Filmed in 1963 using a combination of electronic marionette puppetry and scale model special effects, it was APF's sixth puppet series and the third to be produced under the banner of \"Supermarionation\".",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "action",
   "itv",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Stingray_title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-stranger-things",
  "title": "Stranger Things",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Horror",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two volumes in May and July 2022.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 7,
   "funny": 4,
   "heartwarming": 7,
   "dark": 7,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 6
  },
  "keywords": [
   "eighties",
   "upside down",
   "kids",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-stretch-armstrong-and-the-flex-fighters",
  "title": "Stretch Armstrong and the Flex Fighters",
  "startYear": 2017,
  "endYear": 2018,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 23,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "Stretch Armstrong and the Flex Fighters is an American animated television series produced by Hasbro Studios and distributed by Netflix. It is based on the 1970s action figure Stretch Armstrong. The Netflix series features a brand new superhero universe, new characters, new villains, and new lore. The series was developed by executive producers Kevin Burke, Victor Cook, and Chris \"Doc\" Wyatt.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Stretch_Armstrong_and_the_Flex_Fighters.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-strike-back",
  "title": "Strike Back",
  "startYear": 2007,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Strike Back is a British action thriller television series based on the 2007 novel of the same name by novelist and former Special Air Service soldier Chris Ryan. The series follows the actions of Section 20, a secretive branch of the British Secret Intelligence Service (SIS, aka MI6), who operate several high risk, priority missions around the world.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/Strike_Back_title_2011.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-stumptown",
  "title": "Stumptown",
  "startYear": 2019,
  "endYear": null,
  "creator": "Jason Richman",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Stumptown is an American crime drama television series that premiered on ABC on September 25, 2019. The series is based on the comic book series of the same name, created by Greg Rucka, Matthew Southworth and Justin Greenwood and adapted for television by writer-producer Jason Richman. The title Stumptown is a nickname for the city of Portland, Oregon, where the series is set.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-succession",
  "title": "Succession",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Succession is the act or process of following in order or sequence.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 7,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "media empire",
   "family",
   "power",
   "satire"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-sugar",
  "title": "Sugar",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sugar is an American neo-noir mystery drama television series created by Mark Protosevich for Apple TV+. The series premiered on April 5, 2024, with Fernando Meirelles directing five episodes while Adam Arkin directed three. The series stars Colin Farrell in the lead role, who also serves as an executive producer.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Sugar_TV_series_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-summer-heights-high",
  "title": "Summer Heights High",
  "startYear": 2007,
  "endYear": 2007,
  "creator": "Chris Lilley",
  "genres": [
   "Comedy"
  ],
  "seasons": 1,
  "episodes": 8,
  "status": "Ended",
  "network": "ABC TV",
  "rating": null,
  "description": "Summer Heights High is an Australian television mockumentary sitcom written by and starring Chris Lilley. Set in the fictional Summer Heights High School in an outer suburb of Sydney (based on Summer Hill), it revolves around high-school experiences from the viewpoints of three individuals: the \"Director of Performing Arts\", Mr G; private-school exchange student Ja'mie King; and disobedient,…",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "abc tv",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f1/SummerHeightsHighIntro.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-supah-ninjas",
  "title": "Supah Ninjas",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Supah Ninjas is an American action superhero teen sitcom, created by Leo Chu and Eric Garcia. The series aired on Nickelodeon from January 17, 2011 to April 27, 2013. It ran for two seasons. The series follows three high school friends—Mike, Owen, and Amanda—who lead a double life as crime-fighting ninjas.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 3,
   "epic": 4,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "superhero",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/75/Supah_Ninjas_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-supergirl",
  "title": "Supergirl",
  "startYear": 2015,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Crime",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Supergirl is an American superhero drama television series developed by Ali Adler, Greg Berlanti and Andrew Kreisberg that aired on CBS from October 26, 2015, to April 8, 2016, and The CW from October 10, 2016, to November 9, 2021.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Supergirl_%28Arrowverse_television_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-supernatural-academy",
  "title": "Supernatural Academy",
  "startYear": 2022,
  "endYear": null,
  "creator": "Matthew Wexler",
  "genres": [
   "Animation",
   "Fantasy",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Supernatural Academy is an animated fantasy television series that premiered on Peacock on January 20, 2022. It is based on the book series created by Jaymin Eve.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Supernatural_Academy_%2841_Entertainment_LLC%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-survivor",
  "title": "Survivor",
  "startYear": null,
  "endYear": null,
  "creator": "Charlie Parsons",
  "genres": [
   "Reality",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Survivor is the American version of the international Survivor reality competition television franchise, itself derived from the Swedish television series Expedition Robinson created by Charlie Parsons which premiered in 1997. The American series premiered on May 31, 2000, on CBS. It is hosted by Jeff Probst, who is also an executive producer along with Mark Burnett and Parsons.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "competition",
   "island",
   "strategy",
   "cbs institution"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Survivor_US_TV_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-sweet-home",
  "title": "Sweet Home",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Fantasy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Sweet Home (Korean: 스위트홈) is a 2020 South Korean apocalyptic horror television series starring Song Kang, Lee Jin-wook, and Lee Si-young. It is based on the Naver webtoon of the same name by Kim Carnby and Hwang Young-chan, which recorded over 2.1 billion net views. The first season was released on Netflix on December 18, 2020. The second season was released on December 1, 2023.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 6,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Sweet_Home_-_TV_series_%28title_card%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-sym-bionic-titan",
  "title": "Sym-Bionic Titan",
  "startYear": 2010,
  "endYear": 2011,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 20,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Sym-Bionic Titan is an American animated television series created by Genndy Tartakovsky (in his fourth collaboration with the channel), Bryan Andrews and Paul Rudish for Cartoon Network.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Sym-Bionic_Titan_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-taken",
  "title": "Taken",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Taken is an action-thriller television series based on the Taken film series. It is an origin story for Bryan Mills (Clive Standen), the character played by Liam Neeson in the trilogy. The series was commissioned with a straight-to-series-order in September 2015 and premiered on February 27, 2017, on NBC.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Taken-TV-Title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-talia-in-the-kitchen",
  "title": "Talia in the Kitchen",
  "startYear": 2015,
  "endYear": null,
  "creator": "Catharina Ledeboer",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Talia in the Kitchen is an American telenovela-formatted comedy that premiered on Nickelodeon on July 6, 2015 and ended on December 23, 2015. It was an adaptation of the Nickelodeon Latin American telenovela, Toni, la Chef, and was created by Catharina Ledeboer, who was the head writer of Grachi, Every Witch Way & WITS Academy.",
  "vector": {
   "adrenaline": 0,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 0,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Talia_In_The_Kitchen.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-taz-mania",
  "title": "Taz-Mania",
  "startYear": 1991,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Taz-Mania is an American animated sitcom produced by Warner Bros. Animation from 1991 to 1995. It was broadcast in the United States on Fox Kids. It stars the Looney Tunes character Tasmanian Devil. It is similar in tone to other Warner Bros. cartoons of its time, such as Animaniacs and Tiny Toon Adventures (both of which were created by Taz-Mania co-developer Tom Ruegger).",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/23/Taz-Mania_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teach-you-a-lesson",
  "title": "Teach You a Lesson",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teach You a Lesson (Korean: 참교육) is a 2026 South Korean action school drama television series written by Lee Nam-kyu, Kim Da-hee, and Moon Jong-ho, directed by Hong Jong-chan, and starring Kim Mu-yeol, Lee Sung-min, Jin Ki-joo, and Pyo Ji-hoon.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "action",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Teach_You_a_Lesson_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ted-lasso",
  "title": "Ted Lasso",
  "startYear": null,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Ted Lasso ( LASS-oh) is an American sports comedy-drama television series developed by Jason Sudeikis, Bill Lawrence, Brendan Hunt, and Joe Kelly. It is based on a character Sudeikis portrayed in a series of promotional media for NBC Sports's coverage of England's football Premier League.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 10,
   "dark": 1,
   "romantic": 4,
   "epic": 3,
   "cozy": 9,
   "weird": 1
  },
  "keywords": [
   "football",
   "kindness",
   "coach",
   "apple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/Tedlassotitlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-teen-titans",
  "title": "Teen Titans",
  "startYear": 2003,
  "endYear": 2006,
  "creator": "Glen Murakami",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 65,
  "status": "Ended",
  "network": "Cartoon Network Kids' WB",
  "rating": null,
  "description": "Teen Titans is an American animated superhero comedy drama television series created by Glen Murakami, who developed the series with David Slack and Sam Register for Cartoon Network and Kids' WB.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "cartoon network kids' wb",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Teen_Titans.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teen-titans-go",
  "title": "Teen Titans Go!",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 9,
  "episodes": 456,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teen Titans Go! is an American animated series developed for Cartoon Network. It premiered on April 23, 2013, and is based on DC Comics' fictional superhero team the Teen Titans and DC Nation's New Teen Titans shorts. The production companies of the series are DC Entertainment and Warner Bros. Animation, with the animation outsourced to Canada at Copernicus Studios and Bardel Entertainment.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 3,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Teen_Titans_Go%21_horizontal_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teen-wolf",
  "title": "Teen Wolf",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teen Wolf is an American supernatural teen drama television series developed by Jeff Davis for MTV. Serving as a supernatural reimagining of the 1985 film of the same name, the series is the fourth installment overall in the titular franchise. Tyler Posey portrays a young werewolf who defends his California town from supernatural creatures and other threats.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 7,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Teen_Wolf_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teenage-mutant-ninja-turtles",
  "title": "Teenage Mutant Ninja Turtles",
  "startYear": 1987,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teenage Mutant Ninja Turtles (also known as Teenage Mutant Hero Turtles in some regions) is an American animated television series produced by Fred Wolf Films and based on the comic book characters created by Kevin Eastman and Peter Laird.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/TMNT1987Series.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teenage-mutant-ninja-turtles-2012",
  "title": "Teenage Mutant Ninja Turtles",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teenage Mutant Ninja Turtles is an American action animated television series developed by Ciro Nieli, Joshua Sternin, and Jennifer Ventimilia for Nickelodeon, based on the Teenage Mutant Ninja Turtles characters created by Kevin Eastman and Peter Laird.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Teenage_Mutant_Ninja_Turtles_2012_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-teenage-mutant-ninja-turtles-2003",
  "title": "Teenage Mutant Ninja Turtles",
  "startYear": 2003,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Teenage Mutant Ninja Turtles is an American animated television series developed by Lloyd Goldfine and based on the characters created by Kevin Eastman and Peter Laird. The series premiered on February 8, 2003, as part of Fox's FoxBox programming block (later known as 4Kids TV) and ended on February 28, 2009. The series was announced on May 7, 2002.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/TMNT03TVLOGO.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-temptation-island",
  "title": "Temptation Island",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": 10,
  "episodes": 97,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Temptation Island is an American reality television series originally broadcast by Fox. The series premiered on January 10, 2001, and it concluded with its third season on September 29, 2003. Temptation Island depicted four unmarried couples who traveled to a tropical island to have their fidelity tested.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Temptation_Island_netflix.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-terrace-house-boys-girls-in-the-city",
  "title": "Terrace House: Boys & Girls in the City",
  "startYear": 2015,
  "endYear": 2016,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": 1,
  "episodes": 46,
  "status": "Ended",
  "network": "Fuji TV (Japan) Netflix (international)",
  "rating": null,
  "description": "Terrace House: Boys & Girls in the City (Japanese: テラスハウス ボーイズ＆ガールズ イン・ザ・シティ, Hepburn: Terasu Hausu Bōizu ando Gāruzu in za Shiti) is a Japanese reality television series in the Terrace House franchise. It is the first in the franchise to be co-produced by Fuji TV and Netflix and the first to be released internationally.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "reality",
   "fuji tv (japan) netflix (international)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Boys_%26_Girls_in_the_City_cast.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-terrace-house-tokyo-2019-2020",
  "title": "Terrace House: Tokyo 2019–2020",
  "startYear": 2019,
  "endYear": 2020,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Ended",
  "network": "Fuji TV (Japan) Netflix (international)",
  "rating": null,
  "description": "Terrace House: Tokyo 2019–2020 (Japanese: テラスハウス Tokyo 2019-2020, Hepburn: Terasu Hausu Tōkyō Nī Zero Ichi Kyū Nī Zero Nī Zero) is a Japanese reality television series and the fifth installment of the Terrace House franchise. It follows three men and three women as they temporarily live together in a house in the Setagaya ward of Tokyo, Japan.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "reality",
   "fuji tv (japan) netflix (international)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Tokyo_2019_2020_cast.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-thanksgiving-united-states",
  "title": "Thanksgiving (United States)",
  "startYear": 1941,
  "endYear": null,
  "creator": null,
  "genres": [
   "War"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Thanksgiving is a federal holiday in the United States celebrated on the fourth Thursday of November (which became the uniform date country-wide in 1941). The earliest Thanksgiving can occur is November 22; the latest is November 28. Outside the United States, it is called American Thanksgiving to distinguish it from the Canadian holiday of the same name and related celebrations in other regions.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "war",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Thanksgiving_at_Plymouth%2C_1925%2C_Brownscombe.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-that-girl-lay-lay",
  "title": "That Girl Lay Lay",
  "startYear": 2021,
  "endYear": null,
  "creator": "David A. Arnold",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "That Girl Lay Lay is an American comedy television series created by David A. Arnold that aired on Nickelodeon from September 23, 2021 to March 20, 2024. The series stars That Girl Lay Lay, Gabrielle Nevaeh Green, Tiffany Daniels, Thomas Hobson, Peyton Perrine III, Caleb Brown, and Elijah M. Cooper.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 4,
   "epic": 3,
   "cozy": 9,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/60/That_Girl_Lay_Lay_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-100",
  "title": "The 100",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action",
   "Adventure",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The 100 (pronounced \"The Hundred\" ) is an American post-apocalyptic science fiction drama television series that premiered on March 19, 2014, on the CW network, and ended on September 30, 2020. Developed by Jason Rothenberg, the series is based on the young adult novel series The 100 by Kass Morgan.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/Logo_of_the_100.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-agency",
  "title": "The Agency",
  "startYear": 2024,
  "endYear": null,
  "creator": "Jez Butterworth & John-Henry Butterworth",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Agency, previously known as The Agency: Central Intelligence, is an American spy thriller television series created by Jez Butterworth and John-Henry Butterworth, executive produced by George Clooney and Grant Heslov and starring Michael Fassbender, Jeffrey Wright, Jodie Turner-Smith, and Richard Gere.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/The_Agency_Poster_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-americans",
  "title": "The Americans",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Thriller",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Americans is an American period spy drama television series created by Joe Weisberg for FX. It aired for six seasons from January 30, 2013, to May 30, 2018. Weisberg and Joel Fields also served as showrunners and executive producers.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 4,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "spies",
   "cold war",
   "marriage",
   "undercover"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/79/The_americans_2013_title_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-aquabats-super-show",
  "title": "The Aquabats! Super Show!",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Superhero",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Aquabats! Super Show! is an American action-comedy musical television series which aired from March 3, 2012 to January 18, 2014 on The Hub Network, later resuming as an independent YouTube series from September 2019 to February 2025. The series was created by Christian Jacobs and Scott Schultz, both the creators of the Nick Jr. Channel series Yo Gabba Gabba!, and Jason deVilliers.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "animation",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f8/TheAquabatsSuperShow_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-art-of-sarah",
  "title": "The Art of Sarah",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Art of Sarah (Korean: 레이디 두아) is a 2026 South Korean mystery thriller television series written by Chu Song-yeon and directed by Kim Jin-min. The series focuses on Sarah Kim (Shin Hye-sun), a woman who constructed a fraudulent identity as a high-society luxury brand executive, and the investigation into her mysterious murder led by detective Park Mu-gyeong (Lee Joon-hyuk).",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/The_Art_of_Sarah_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-baby-sitters-club",
  "title": "The Baby-Sitters Club",
  "startYear": 2020,
  "endYear": null,
  "creator": "Rachel Shukert",
  "genres": [
   "Comedy",
   "Family",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Baby-Sitters Club is an American comedy-drama television series created by Rachel Shukert, based on the children's novel series of the same name by Ann M. Martin. It was released on Netflix on July 3, 2020. In October 2020, the series was renewed for a second season which was released on October 11, 2021. In March 2022, the series was canceled after two seasons.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 9,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Baby-Sitters_Club_2020_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-bear",
  "title": "The Bear",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Bear is an American comedy-drama television series created by Christopher Storer for FX on Hulu. Jeremy Allen White stars as Carmy Berzatto, an award-winning chef who returns to his hometown of Chicago to manage the chaotic kitchen at his recently deceased brother's Italian beef sandwich shop.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 6,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "kitchen",
   "chicago",
   "grief",
   "intense"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d7/The_Bear_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-beatles-get-back",
  "title": "The Beatles: Get Back",
  "startYear": 1970,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Beatles: Get Back is a three-part documentary miniseries directed and produced by Peter Jackson. It covers the making of the Beatles' 1970 album Let It Be (which had the working title of Get Back) and draws largely from footage and audio originally captured for the 1970 documentary of the album directed by Michael Lindsay-Hogg.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 0,
   "epic": 7,
   "cozy": 8,
   "weird": 2
  },
  "keywords": [
   "beatles",
   "peter jackson",
   "rooftop",
   "disney+"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/TheBeatles-GetBackposter.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-big-bang-theory",
  "title": "The Big Bang Theory",
  "startYear": 2007,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Big Bang Theory is an American television sitcom created by Chuck Lorre and Bill Prady for CBS. It aired from September 24, 2007, to May 16, 2019, running for 12 seasons and 279 episodes.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 6,
   "epic": 1,
   "cozy": 9,
   "weird": 2
  },
  "keywords": [
   "nerds",
   "sitcom",
   "pasadena",
   "long-running"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/13/TBBT_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-book-of-pooh",
  "title": "The Book of Pooh",
  "startYear": 2001,
  "endYear": 2003,
  "creator": "Mitchell Kriegman",
  "genres": [
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 51,
  "status": "Ended",
  "network": "Playhouse Disney (Disney Channel)",
  "rating": null,
  "description": "The Book of Pooh is an American preschool educational children's television series that aired on the Playhouse Disney block on the Disney Channel. It is the third television series to feature the characters from the Disney franchise based on A. A.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 4,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 4,
   "epic": 5,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "fantasy",
   "comedy",
   "playhouse disney (disney channel)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Book_of_Pooh_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-boss-baby-back-in-business",
  "title": "The Boss Baby: Back in Business",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Boss Baby: Back in Business is an American animated comedy television series produced by DreamWorks Animation Television. The show is based on the 2017 film The Boss Baby, loosely based on the 2010 picture book of the same name written by Marla Frazee. The series premiered on Netflix on April 6, 2018.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/BossBabyTV.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-boys",
  "title": "The Boys",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Boys is an American satirical superhero television series developed by Eric Kripke for Amazon Prime Video. Based on the comic book series of the same name by Garth Ennis and Darick Robertson, it follows the eponymous team of vigilantes as they combat superpowered individuals, referred to as \"Supes\", who often abuse their powers for personal gain and work for a powerful company, Vought…",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 3,
   "funny": 7,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "corrupt supes",
   "satire",
   "ultra-violent",
   "prime video"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/68/The_Boys_TV_series_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-buzz-on-maggie",
  "title": "The Buzz on Maggie",
  "startYear": 2005,
  "endYear": 2006,
  "creator": "Dave Polsky",
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 1,
  "episodes": 21,
  "status": "Ended",
  "network": "Disney Channel",
  "rating": null,
  "description": "The Buzz on Maggie is an American animated television series created by Dave Polsky and directed by Dave Wasson for Disney Channel. The series centers on an ambitious and expressive tween fly named Maggie Pesky and her family and friends. The show is set in Stickyfeet, a city for insects located in a junkyard.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 9,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "disney channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Buzz_on_Maggie.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-cape",
  "title": "The Cape",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Crime",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Cape is an American superhero drama television series, first shown on NBC during the 2010–2011 television season as a mid-season replacement. A two-hour pilot episode aired on Sunday, January 9, 2011 at 9 pm Eastern and Pacific Time, and was repeated the next day. Further episodes aired on Monday evenings at 9 pm from January 17.",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Cape_2011_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-crown",
  "title": "The Crown",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Crown is a political concept used in Commonwealth realms, analogous to the concept of the government in legal systems influenced by Roman civil law. English common law never developed a concept of the state and left supreme executive power with the monarch.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 4,
   "epic": 8,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "royalty",
   "british",
   "period",
   "biographical"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/9d/2022_pattern_Tudor_Crown_%28plain%29_2D.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-cuphead-show",
  "title": "The Cuphead Show!",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Cuphead Show! is an animated slapstick comedy television series developed by Dave Wasson for Netflix based on the 2017 video game Cuphead by Studio MDHR. Chad and Jared Moldenhauer, the creators of Cuphead, serve as executive producers, along with Wasson and CJ Kettler from King Features Syndicate, and Cosmo Segurson serving as co-executive producer.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Cuphead_Show%21_-_Logotype.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-devils-plan",
  "title": "The Devil's Plan",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality"
  ],
  "seasons": 2,
  "episodes": 24,
  "status": "Running",
  "network": "Netflix",
  "rating": null,
  "description": "The Devil's Plan (Korean: 데블스 플랜) is a South Korean reality game show. Contestants play both collaborative and competitive strategy games in order to win a cash prize. Netflix began streaming the first season in September 2023, with the second season airing May 2025. In September 2025, Netflix announced production had begun on the third season.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 2,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "reality",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/The_Devil%27s_Plan_Promotional_Poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-diplomat",
  "title": "The Diplomat",
  "startYear": 2023,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Diplomat is an American political thriller television series created by Debora Cahn. First airing in 2023, it stars Keri Russell as a veteran US diplomat who is unexpectedly appointed as the ambassador to the United Kingdom amid an emerging international crisis. The series premiered on Netflix on April 20, 2023.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "thriller",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/The_Diplomat_%28American_TV_series_logo%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-dragon-prince",
  "title": "The Dragon Prince",
  "startYear": 2018,
  "endYear": 2024,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family",
   "Drama"
  ],
  "seasons": 7,
  "episodes": 63,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "The Dragon Prince, also known as The Dragon Prince: Mystery of Aaravos from the fourth season onward, is an animated fantasy television series created by Aaron Ehasz and Justin Richmond for Netflix. Produced by Wonderstorm and animated by Bardel Entertainment, the first season premiered on September 14, 2018.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 7,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/20/The_Dragon_Prince_-_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-dude-perfect-show",
  "title": "The Dude Perfect Show",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Family",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Dude Perfect Show is an American reality and comedy television program that premiered on CMT on April 14, 2016, and moved to Nickelodeon on July 16, 2017. The program stars Dude Perfect members Coby Cotton, Cory Cotton, Garrett Hilbert, Cody Jones, and Tyler Toney.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/The_Dude_Perfect_Show_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-dukes-of-hazzard",
  "title": "The Dukes of Hazzard",
  "startYear": 1979,
  "endYear": null,
  "creator": "Gy Waldron",
  "genres": [
   "Comedy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Dukes of Hazzard is an American action comedy television series created by Gy Waldron that aired on CBS from 1979 to 1985, with seven seasons and a total of 147 episodes. It was consistently among the top-viewed television series in the late 1970s and early 1980s, at one point, ranking second only to Dallas, which immediately followed the show on CBS's Friday night schedule.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Dukes_of_Hazzard_%28title_card%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-electric-company",
  "title": "The Electric Company",
  "startYear": 2009,
  "endYear": 2011,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 3,
  "episodes": 52,
  "status": "Ended",
  "network": "PBS Kids",
  "rating": null,
  "description": "The Electric Company is an American educational children's television series produced by Sesame Workshop and developed by Karen Fowler. It is a reboot of the 1971 series of the same name. The series aired on PBS Kids from January 23, 2009, to April 4, 2011 with reruns continuing on PBS until August 31, 2014.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "pbs kids",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/EC_logo_2009.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-end-of-the-f-ing-world",
  "title": "The End of the F***ing World",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The End of the F***ing World is a British black comedy television programme. Based on the 2011–13 minicomics The End of the Fucking World by Charles Forsman, the eight-part first series premiered its first episode on Channel 4 in the United Kingdom on 24 October 2017. Later episodes were released on All 4.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 4,
   "epic": 2,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_End_of_the_F%2A%2A%2Aing_World_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-equalizer",
  "title": "The Equalizer",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Equalizer is an American action crime drama television series, originally airing on CBS from September 18, 1985, to August 24, 1989, which was co-created by Michael Sloan and Richard Lindheim.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/The_Equalizer.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-equalizer-2021",
  "title": "The Equalizer",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Equalizer is an American crime drama television series that aired for five seasons on CBS from February 7, 2021, to May 4, 2025. It is the reboot of the original series of the same name created by Michael Sloan and Richard Lindheim. The series is co-created by executive producers Lindheim, with Sloan, and Queen Latifah, who also stars as the titular character.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/85/The_Equalizer_%282021_TV_series%29_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-event",
  "title": "The Event",
  "startYear": 2010,
  "endYear": 2011,
  "creator": "Nick Wauters",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 22,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "The Event (stylized as THE EVƎNT) is an American television series containing elements of science fiction, action/adventure and political allegory. It was created by Nick Wauters and aired on NBC from September 20, 2010, to May 23, 2011.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "action",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/14/The_Event_2010_Intertitle.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-expanse",
  "title": "The Expanse",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Expanse is an American science fiction television series developed by Mark Fergus and Hawk Ostby for the Syfy network; it is based on the series of novels of the same name by James S. A. Corey.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "space opera",
   "hard sf",
   "politics",
   "belter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/bd/The_Expanse_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-flash",
  "title": "The Flash",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Crime",
   "Mystery",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Flash is an American superhero television series developed by Greg Berlanti, Andrew Kreisberg, and Geoff Johns, airing on The CW. It is based on the Barry Allen incarnation of DC Comics character the Flash, a costumed superhero crime-fighter with the power to move at superhuman speeds. It is a spin-off of Arrow, existing in the same fictional universe known as the Arrowverse.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Flash_%28Arrowverse_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-flash-1990",
  "title": "The Flash",
  "startYear": 1990,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Flash is an American television series developed by the writing team of Danny Bilson and Paul De Meo that aired on CBS from September 20, 1990 to May 18, 1991. It is based on the DC Comics character Barry Allen / Flash, a costumed superhero crime-fighter with the power to move at superhuman speeds. The Flash starred John Wesley Shipp as Allen, along with Amanda Pays and Alex Désert.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Flash_%281990_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-flight-attendant",
  "title": "The Flight Attendant",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Flight Attendant is an American dark comedy drama mystery thriller television series developed by Steve Yockey based on the 2018 novel of the same name by Chris Bohjalian. It stars Kaley Cuoco in the title role and premiered on HBO Max on November 26, 2020. In December 2020, the series was renewed for a second season, which premiered on April 21, 2022.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 6,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 1,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Flight_Attendant.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-flintstone-comedy-show",
  "title": "The Flintstone Comedy Show",
  "startYear": 1980,
  "endYear": 1981,
  "creator": "William Hanna Joseph Barbera",
  "genres": [
   "Animation",
   "Comedy",
   "Mystery",
   "Family"
  ],
  "seasons": 2,
  "episodes": 18,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "The Flintstone Comedy Show is an American animated television series revival and spin-off of The Flintstones produced by Hanna-Barbera that aired on NBC from November 22, 1980, to October 24, 1981. Outside North America, the show was released under title of Flintstone Frolics.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 5,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Hanna-Barbera_0016.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-fugitive",
  "title": "The Fugitive",
  "startYear": 1963,
  "endYear": 1967,
  "creator": "Roy Huggins",
  "genres": [
   "Crime",
   "Mystery",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 4,
  "episodes": 120,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "The Fugitive is an American crime drama television series created by Roy Huggins and produced by QM Productions and United Artists Television. It aired on ABC from September 17, 1963, to August 29, 1967. David Janssen starred as Dr. Richard Kimble, a physician who is wrongfully convicted of his wife's murder, and unjustly sentenced to death. While Dr.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Fugitive_%281963_TV_series%29_title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-gentlemen",
  "title": "The Gentlemen",
  "startYear": 2024,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Gentlemen is a black comedy crime drama television series created by Guy Ritchie for Netflix. It is a spin-off of Ritchie's 2019 film of the same name, taking place in its fictional universe and sharing thematic connections but following a standalone story with a new cast, characters and settings. The series stars Theo James in the lead role and premiered on March 7, 2024.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Gentlemen_TV_series_title_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-get-down",
  "title": "The Get Down",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Get Down is an American musical drama television series created by Baz Luhrmann and Stephen Adly Guirgis. The series debuted on Netflix on August 12, 2016, and was cancelled after one season.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/The_Get_Down.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-glory",
  "title": "The Glory",
  "startYear": 2022,
  "endYear": 2023,
  "creator": null,
  "genres": [
   "Thriller"
  ],
  "seasons": null,
  "episodes": 16,
  "status": "Ended",
  "network": "Netflix",
  "rating": null,
  "description": "The Glory (Korean: 더 글로리) is a South Korean revenge psychological thriller television series written by Kim Eun-sook and directed by Ahn Gil-ho for Netflix. Song Hye-kyo, Lee Do-hyun, Lim Ji-yeon, Yeom Hye-ran, Park Sung-hoon, and Jung Sung-il round out the ensemble cast.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/79/The_Glory_TV_series.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-good-guys",
  "title": "The Good Guys",
  "startYear": 2010,
  "endYear": 2010,
  "creator": "Matt Nix",
  "genres": [
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 20,
  "status": "Ended",
  "network": "Fox",
  "rating": null,
  "description": "The Good Guys is an American action comedy-drama series about an old-school cop and a modern-day detective that premiered with a preview episode on Fox on May 19, 2010, and began airing regularly on June 7 of that year.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 4,
   "dark": 1,
   "romantic": 1,
   "epic": 1,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "action",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/The_Good_Guys_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-good-place",
  "title": "The Good Place",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Good Place is an American fantasy-comedy television series created by Michael Schur for NBC. The series premiered on September 19, 2016, and concluded on January 30, 2020, after four seasons consisting of 53 episodes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 9,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 4,
   "cozy": 7,
   "weird": 7
  },
  "keywords": [
   "afterlife",
   "philosophy",
   "twists",
   "wholesome"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7e/The_Good_Place_title_card.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-good-wife",
  "title": "The Good Wife",
  "startYear": 2009,
  "endYear": null,
  "creator": "{{Ubl",
  "genres": [
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-14",
  "description": "The Good Wife is an American legal political drama television series that aired on CBS from September 22, 2009, to May 8, 2016. It focuses on Alicia Florrick, the wife of the Cook County State's Attorney, who returns to her career in law after the events of a public sex and political corruption scandal involving her husband.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 4,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "law",
   "politics",
   "chicago",
   "procedural-plus"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1c/The_Good_Wife_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-great-british-bake-off",
  "title": "The Great British Bake Off",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality",
   "Comedy"
  ],
  "seasons": null,
  "episodes": 161,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Great British Bake Off (often abbreviated to Bake Off or GBBO) is a British television baking competition, produced by Love Productions, in which a group of amateur bakers compete against each other in a series of rounds, attempting to impress two judges with their baking skills.",
  "vector": {
   "adrenaline": 1,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 0,
   "romantic": 1,
   "epic": 2,
   "cozy": 10,
   "weird": 2
  },
  "keywords": [
   "baking",
   "tent",
   "gentle",
   "british comfort"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/The_Great_British_Bake_Off_title.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-grinder",
  "title": "The Grinder",
  "startYear": 2015,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Grinder is an American legal sitcom television series created by Jarrad Paul and Andrew Mogel for Fox. The show was picked up to series on May 8, 2015, and aired from September 29, 2015 to May 10, 2016. On October 15, 2015, Fox ordered six additional scripts for the first season, potentially increasing the season order to 19 episodes.",
  "vector": {
   "adrenaline": 0,
   "brainy": 6,
   "scary": 1,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Grinder_%28TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-handmaids-tale",
  "title": "The Handmaid's Tale",
  "startYear": 1985,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Sci-Fi",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Handmaid's Tale is an American dystopian television series created by Bruce Miller, based on the 1985 novel The Handmaid's Tale by Canadian author Margaret Atwood. The series was ordered by the streaming service Hulu as a straight-to-series order of ten episodes, for which production began in late 2016.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 5,
   "funny": 0,
   "heartwarming": 2,
   "dark": 10,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "dystopia",
   "gilead",
   "resistance",
   "hulu"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Handmaid%27s_Tale_intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-haunting-of-hill-house",
  "title": "The Haunting of Hill House",
  "startYear": 1959,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson. It was a finalist for the National Book Award and has been made into two feature films (The Haunting, directed by Robert Wise, and its remake), a play, and is the basis of a Netflix series. The book is dedicated to Leonard Brown, Jackson's English teacher at Syracuse University.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 10,
   "funny": 0,
   "heartwarming": 6,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "flanagan",
   "ghosts",
   "family trauma",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/04/HauntingOfHillHouse.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-hollow",
  "title": "The Hollow",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Sci-Fi",
   "Animation",
   "Superhero",
   "Fantasy",
   "Mystery",
   "Action",
   "Adventure",
   "Family",
   "Reality",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Hollow is a Canadian animated adventure mystery television series created by Vito Viscomi. The series premiered on Netflix on June 8, 2018. Its second season aired on May 8, 2020. On August 31, 2020, the series was cancelled.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 6,
   "funny": 2,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "sci-fi",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/The_Hollow.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-invisible-man",
  "title": "The Invisible Man",
  "startYear": 2000,
  "endYear": null,
  "creator": "Matt Greenberg",
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Invisible Man (also shortened to \"The I-Man\" in season 2) is an American science fiction television series starring Vincent Ventresca, Paul Ben-Victor, Eddie Jones, Shannon Kenny and Michael McCafferty. The show aired two seasons, from June 9, 2000, to February 1, 2002, on the Sci Fi Channel and was syndicated to American TV stations.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Invisible_Man_%282000_TV_series%29_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-jetsons",
  "title": "The Jetsons",
  "startYear": 1962,
  "endYear": 1963,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Family"
  ],
  "seasons": 3,
  "episodes": 75,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "The Jetsons is an American animated sitcom produced by Hanna-Barbera Productions. It originally aired in prime time from September 23, 1962, to March 17, 1963, on ABC, then later aired in reruns via syndication, with new episodes produced from 1985 to 1987. It was Hanna-Barbera's Space Age counterpart to The Flintstones.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/8f/The_Jetsons_%28television_series_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-jinx",
  "title": "The Jinx",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "A documentary miniseries investigating real-estate heir Robert Durst and the unsolved deaths around him, building to one of the most infamous final moments in true-crime television.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "robert durst",
   "true crime",
   "hbo",
   "that finale"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-the-kids-in-the-hall",
  "title": "The Kids in the Hall",
  "startYear": 1988,
  "endYear": 1995,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": 6,
  "episodes": 109,
  "status": "Ended",
  "network": "CBC Television",
  "rating": null,
  "description": "The Kids in the Hall is a Canadian sketch comedy television series that aired for five seasons from 1988 to 1995, and a sixth revival season in 2022, starring the comedy troupe The Kids in the Hall.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "cbc television",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/3a/The_Kids_in_the_Hall_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-killing",
  "title": "The Killing",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Killing is an American crime drama television series that premiered on April 3, 2011, on AMC, based on the Danish television series Forbrydelsen (literal translation The Crime but also widely known as The Killing internationally). The American version was developed by Veena Sud and produced by Fox Television Studios and Fuse Entertainment.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/The_Killing_2011_Intertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-kominsky-method",
  "title": "The Kominsky Method",
  "startYear": 2018,
  "endYear": null,
  "creator": "Chuck Lorre",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Kominsky Method is an American comedy-drama television series, created by Chuck Lorre, that premiered on November 16, 2018, on Netflix. It stars Michael Douglas, Alan Arkin, Sarah Baker, Nancy Travis, Paul Reiser and Kathleen Turner and follows an aging acting coach who many years earlier had a brief moment of success as an actor.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 4,
   "epic": 1,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/57/Kominsky_Method_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-last-dance",
  "title": "The Last Dance",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "A ten-part documentary on Michael Jordan and the 1990s Chicago Bulls, built around unaired footage from the 1997-98 title run. Part sports history, part study of a competitor who never switched off.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "jordan",
   "bulls",
   "sports",
   "espn netflix"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-the-last-kingdom",
  "title": "The Last Kingdom",
  "startYear": 2015,
  "endYear": 2017,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": 46,
  "status": "Ended",
  "network": "BBC Two",
  "rating": null,
  "description": "The Last Kingdom is a British historical drama television series created and developed for television by Stephen Butchard, based on The Saxon Stories series of novels by Bernard Cornwell. The series premiered on 10 October 2015 on BBC Two. After co-producing the second series, Netflix acquired the series in 2018. The series concluded on 9 March 2022 after five series for a total of 46 episodes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "drama",
   "bbc two",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/75/The_Last_Kingdom_TV_series_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-last-of-us",
  "title": "The Last of Us",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Horror",
   "Sci-Fi"
  ],
  "seasons": 2,
  "episodes": 16,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the video game franchise developed by Naughty Dog, the series is set decades after the collapse of society caused by a mass fungal infection that transforms its hosts into zombie-like creatures.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 6,
   "funny": 1,
   "heartwarming": 7,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "post-apocalyptic",
   "fungi",
   "joel and ellie",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/47/The_Last_of_Us_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-league",
  "title": "The League",
  "startYear": 2009,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The League is an American television sitcom that aired on FX and later FXX from October 29, 2009, to December 9, 2015, for a total of seven seasons. The series, set in Chicago, is a semi-improvised comedy show about a fantasy football league, its members, and their everyday lives.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 1,
   "funny": 9,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/TheLeagueintertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-leftovers",
  "title": "The Leftovers",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Leftovers is an American supernatural drama television series created by Damon Lindelof and Tom Perrotta that aired on HBO from June 29, 2014, to June 4, 2017. Based on Perrotta's 2011 novel, the series begins three years after the \"Sudden Departure\", a global event that resulted in 2% of the world's population disappearing.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 2,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "mystery",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/LeftoversS2Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-legend-of-tarzan",
  "title": "The Legend of Tarzan",
  "startYear": 2001,
  "endYear": 2003,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 39,
  "status": "Ended",
  "network": "UPN (Disney's One Too)",
  "rating": null,
  "description": "The Legend of Tarzan is an American animated television series produced by Walt Disney Television Animation, based on Tarzan from the novels written by Edgar Rice Burroughs, the character's original creator who appears in one episode of the series.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 4,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "upn (disney's one too)",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-the-librarians-the-next-chapter",
  "title": "The Librarians: The Next Chapter",
  "startYear": 2025,
  "endYear": null,
  "creator": "Dean Devlin",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 24,
  "status": "Running",
  "network": "TNT",
  "rating": null,
  "description": "The Librarians: The Next Chapter is an American fantasy adventure television series that is a direct spin-off of the Librarian film series, sharing continuity with the films and with The Librarians television series. The series stars Callum McGowan, Jessica Green, Olivia Morris, Bluey Robinson, and Caroline Loncq.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 9,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "action",
   "tnt",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c1/The_Librarians-_The_Next_Chapter_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-lord-of-the-rings-the-rings-of-power",
  "title": "The Lord of the Rings: The Rings of Power",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Drama",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Lord of the Rings: The Rings of Power is an American fantasy television series developed by J. D. Payne and Patrick McKay for the streaming service Amazon Prime Video. It is based on J. R. R. Tolkien's history of Middle-earth, primarily material from the appendices of the novel The Lord of the Rings (1954–55).",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 10,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "tolkien",
   "middle-earth",
   "prequel",
   "prime video"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/LOTR_The_Rings_of_Power_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-loud-house",
  "title": "The Loud House",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Loud House is an American animated sitcom created by Chris Savino that premiered on Nickelodeon on May 2, 2016. The series revolves around the chaotic everyday life of a boy named Lincoln Loud, who is the middle child and only son in a large family of 11 children. It is set in a fictional town in southeastern Michigan called Royal Woods, based on Savino's hometown of Royal Oak.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-man-from-u-n-c-l-e",
  "title": "The Man from U.N.C.L.E.",
  "startYear": 1964,
  "endYear": 1968,
  "creator": "Sam Rolfe Norman Felton",
  "genres": [
   "Action",
   "Drama"
  ],
  "seasons": 4,
  "episodes": 105,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "The Man from U.N.C.L.E. is an American spy fiction television series produced by Metro-Goldwyn-Mayer Television and first broadcast on NBC. The series follows secret agents Napoleon Solo, played by Robert Vaughn, and Illya Kuryakin, played by David McCallum, who work for a secret international counterespionage and law-enforcement agency called U.N.C.L.E.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "action",
   "drama",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/The_Man_from_U.N.C.L.E.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-mandalorian",
  "title": "The Mandalorian",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Mandalorian, also known as Star Wars: The Mandalorian, is an American space Western television series created by Jon Favreau for the streaming service Disney+. It is the first live-action series in the Star Wars franchise and begins five years after the events of the film Return of the Jedi (1983).",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 0,
   "epic": 7,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "star wars",
   "bounty hunter",
   "grogu",
   "space western"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-mickey-mouse-club",
  "title": "The Mickey Mouse Club",
  "startYear": 1955,
  "endYear": 1959,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 14,
  "episodes": 620,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "The Mickey Mouse Club is an American variety television show that aired intermittently from 1955 to 1996 and briefly returned to social media in 2017. Created by Walt Disney and produced by Walt Disney Productions, the program was first televised for four seasons, from 1955 to 1959, by ABC. This original run featured a regular, but ever-changing cast of mostly child, tween or teen performers.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/The_Mickey_Mouse_Club_original_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-midnight-gospel",
  "title": "The Midnight Gospel",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Midnight Gospel is an American adult animated television series created by Pendleton Ward and Duncan Trussell. Released on Netflix on April 20, 2020, it sets real podcast interviews between Trussell and various guests into surrealistic adventures, typically telling a story alongside the real podcast audio through the environment and extra voice work by Trussell and the guests of the original…",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/The_Midnight_Gospel_promotional_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-mr-men-show",
  "title": "The Mr. Men Show",
  "startYear": 2008,
  "endYear": 2009,
  "creator": "Roger Hargreaves Adam Hargreaves",
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 2,
  "episodes": 104,
  "status": "Ended",
  "network": "Cartoon Network (U.S.) Five (Milkshake!) (U.K.)",
  "rating": null,
  "description": "The Mr. Men Show is an animated children's television series based on the Mr. Men series of books created by the British author and illustrator Roger Hargreaves—later continued by his son Adam Hargreaves. It is a variety program—unlike the original basis for the show, it primarily features comedy sketches, pantomimes, dance numbers, and music videos.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "cartoon network (u.s.) five (milkshake!) (u.k.)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/65/Mr_Men_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-nanny",
  "title": "The Nanny",
  "startYear": 1993,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Romance",
   "Rom-Com"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Nanny is an American television sitcom. It originally aired on CBS from November 3, 1993, to June 23, 1999, starring Fran Drescher as Fran Fine, a Jewish fashionista from Flushing, Queens, who becomes the nanny to three children from an Anglo-American upper-class family in New York City.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c5/The_Nanny_%28TriStar_Television%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-new-adventures-of-he-man",
  "title": "The New Adventures of He-Man",
  "startYear": 1989,
  "endYear": 1990,
  "creator": null,
  "genres": [
   "Animation",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 1,
  "episodes": 65,
  "status": "Ended",
  "network": "First-run syndication",
  "rating": null,
  "description": "The New Adventures of He-Man is an animated series which ran in syndication starting in the second half of 1990. A pre-syndication early clearance of the series began in December, 1989 on select market independent stations, while Mattel released the toy line He-Man, an update of their Masters of the Universe line.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "animation",
   "superhero",
   "first-run syndication",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/NewAdventuresCartoon.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-new-pope",
  "title": "The New Pope",
  "startYear": 2016,
  "endYear": null,
  "creator": "Paolo Sorrentino",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The New Pope is a satirical drama television series created and directed by Paolo Sorrentino for Sky Atlantic, HBO and Canal+. It is a continuation of the 2016 series The Young Pope, originally announced as its second season. The nine-episode series stars Jude Law, reprising his role as the fictional Pope Pius XIII, and John Malkovich as the fictional Pope John Paul III, the titular new pope.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/79/The_New_Pope.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-newsroom",
  "title": "The Newsroom",
  "startYear": 2012,
  "endYear": null,
  "creator": "Aaron Sorkin",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Newsroom is an American political drama television series created and principally written by Aaron Sorkin that premiered on HBO on June 24, 2012, and concluded on December 14, 2014, consisting of 25 episodes over three seasons. The series chronicles behind-the-scenes events at the fictional Atlantis Cable News (ACN) channel.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 4,
   "epic": 5,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/TheNewsroomTitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-night-agent",
  "title": "The Night Agent",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Action",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Night Agent is an American action thriller television series created by Shawn Ryan based on the novel of the same name by Matthew Quirk. Starring Gabriel Basso in the title role, it premiered on Netflix on March 23, 2023. The series emerged as the third-most-viewed debuting series on Netflix in its first four days, and within a week it was renewed for a second season.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "fbi",
   "conspiracy",
   "netflix",
   "page-turner"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/The_Night_Agent.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-night-manager",
  "title": "The Night Manager",
  "startYear": 1993,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Night Manager is a British spy thriller television serial based on the 1993 novel by John le Carré and adapted by David Farr. The six-part first series, directed by Susanne Bier and starring Tom Hiddleston, Hugh Laurie, Olivia Colman, Tom Hollander, David Harewood and Elizabeth Debicki, began broadcasting on BBC One on 21 February 2016.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "thriller",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/The_Night_Manager_titlecard.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-night-of",
  "title": "The Night Of",
  "startYear": 2016,
  "endYear": null,
  "creator": "Richard Price Steven Zaillian",
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Night Of is a 2016 American eight-part crime drama miniseries based on the first series of Criminal Justice, a 2008 British series. The miniseries was written by Richard Price and Steven Zaillian (based on the original Criminal Justice plot by Peter Moffat), and directed by Zaillian and James Marsh. Broadcast on HBO, The Night Of premiered on July 10, 2016 to critical acclaim.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "miniseries",
   "prison",
   "legal",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/98/The_Night_Of_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-nine-lives-of-chloe-king",
  "title": "The Nine Lives of Chloe King",
  "startYear": 2011,
  "endYear": 2011,
  "creator": null,
  "genres": [
   "Action",
   "Family",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 10,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "The Nine Lives of Chloe King is an American supernatural drama television series which premiered on ABC Family on June 14, 2011, and ended on August 16, 2011. The one-hour drama is based on the book series of the same name by Liz Braswell.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "action",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/NineLivesIntertitle.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-oa",
  "title": "The OA",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The OA is an American mystery drama television series with science fiction, supernatural, and fantasy elements. The OA debuted on Netflix on December 16, 2016. Created and executive-produced by Brit Marling and Zal Batmanglij, the series is their third collaboration.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-the-oblongs",
  "title": "The Oblongs",
  "startYear": 2001,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Oblongs (stylized as the Oblongs...) is a 2001 American adult animated sitcom created by Angus Oblong and Jace Richdale. It was Mohawk Productions' first venture into animation. The series premiered on April 1, 2001, on The WB, and was cancelled due to low ratings on May 20, leaving the last five episodes unaired.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/The_Oblongs_title_card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-office",
  "title": "The Office",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "The Office is an American mockumentary sitcom television series. It is based on the BBC series The Office created by Ricky Gervais and Stephen Merchant, and adapted for NBC by Greg Daniels. The show depicts the everyday work lives of office employees at the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 6,
   "epic": 1,
   "cozy": 10,
   "weird": 3
  },
  "keywords": [
   "mockumentary",
   "workplace",
   "dunder mifflin",
   "cringe"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/80/The_Office_US_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-old-man",
  "title": "The Old Man",
  "startYear": 2017,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Action",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Old Man is an American action thriller television series based on the 2017 novel The Old Man by Thomas Perry. It was developed by Jonathan E. Steinberg and Robert Levine and premiered on FX on June 16, 2022. The first season consisted of seven episodes. Following its premiere, the series was renewed for a second season, which premiered on September 12, 2024.",
  "vector": {
   "adrenaline": 9,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/65/The_Old_Man_%28TV_series%29_Logo.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-other-black-girl",
  "title": "The Other Black Girl",
  "startYear": 2021,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Comedy",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Other Black Girl is an American comedy drama mystery thriller television series based on the 2021 novel of the same name by Zakiya Dalila Harris. The series premiered on Hulu on September 13, 2023. It focuses on Nella Rogers, an editorial assistant at Wagner Books and the only Black woman working for the company until the hiring of Hazel-May McCall.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 7,
   "funny": 5,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "horror",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/The_Other_Black_Girl_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-outpost",
  "title": "The Outpost",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Outpost is an American fantasy-adventure drama television series, acquired by The CW, which premiered on July 10, 2018. It was produced by Syfy's international channels for international broadcast. The series was renewed for a third season in October 2019 which premiered on October 8, 2020.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 2,
   "epic": 9,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "adventure",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Outpost_%28TV_series%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-outsider",
  "title": "The Outsider",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Crime",
   "Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Outsider is an American television miniseries based on the 2018 novel by Stephen King, adapted for television by Richard Price. It was ordered to series on December 3, 2018, after being optioned as a miniseries by MRC in June 2018. It premiered on HBO on January 12, 2020.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 6,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "horror",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/f1/The_Outsider_%28HBO_miniseries%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-owl-house",
  "title": "The Owl House",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Owl House is an American animated fantasy television series created by Dana Terrace that aired on Disney Channel from January 10, 2020, to April 8, 2023. The series features the voices of Sarah-Nicole Robles, Wendie Malick, Alex Hirsch, Tati Gabrielle, Issac Ryan Brown, Mae Whitman, Cissy Jones, Zeno Robinson, Matthew Rhys, Michaela Dietz, Elizabeth Grullon, and Fryda Wolff.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "horror",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/The_Owl_House_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-pacific",
  "title": "The Pacific",
  "startYear": 2010,
  "endYear": 2010,
  "creator": "Bruce McKenna",
  "genres": [
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": 10,
  "status": "Ended",
  "network": "HBO",
  "rating": null,
  "description": "The Pacific is a 2010 American war drama miniseries produced by HBO, Playtone, and DreamWorks that premiered in the United States on March 14, 2010. The Pacific is the second of three companion piece miniseries developed by Playtone and DreamWorks, following Band of Brothers (2001) and preceding Masters of the Air (2024).",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "war",
   "drama",
   "hbo",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/ThePacificIntertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-paper",
  "title": "The Paper",
  "startYear": 2025,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Paper is an American mockumentary sitcom television series created by Greg Daniels and Michael Koman. The series is a follow-up to and spinoff of the American mockumentary series The Office which originally ran on NBC from 2005 to 2013.",
  "vector": {
   "adrenaline": 0,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 2,
   "epic": 2,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/The_Paper_%282025_TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-perfect-couple",
  "title": "The Perfect Couple",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Perfect Couple is an American mystery drama miniseries based on the 2018 novel by Elin Hilderbrand. Created by Jenna Lamia and directed by Susanne Bier, the series premiered on September 5, 2024, on Netflix. It stars an ensemble cast of Nicole Kidman, Liev Schreiber, Eve Hewson, Billy Howle, Meghann Fahy, Dakota Fanning, Sam Nivola, Ishaan Khatter, and Jack Reynor.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Perfect_Couple_%28TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-pink-panther-show",
  "title": "The Pink Panther Show",
  "startYear": 1969,
  "endYear": 1978,
  "creator": "David H. DePatie Friz Freleng",
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": 10,
  "episodes": null,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "The Pink Panther Show is an American anthology showcase of animated shorts produced by David H. DePatie and Friz Freleng between 1969 and 1978, starring the animated Pink Panther character from the opening credits of the live-action films.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Pp_show_03.JPEG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-plot-against-america",
  "title": "The Plot Against America",
  "startYear": 2004,
  "endYear": null,
  "creator": "David Simon Ed Burns",
  "genres": [
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Plot Against America is an American alternate history drama television miniseries created and written by David Simon and Ed Burns, based on the 2004 novel of the same name by Philip Roth, that aired on HBO from March 16, 2020, to April 20, 2020.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "war",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Plot_Against_America_Title_Card.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-problem-solverz",
  "title": "The Problem Solverz",
  "startYear": 2011,
  "endYear": 2011,
  "creator": "Ben Jones",
  "genres": [
   "Animation",
   "Comedy",
   "Mystery",
   "Family"
  ],
  "seasons": 2,
  "episodes": 26,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "The Problem Solverz is an American animated television series created by Ben Jones for Cartoon Network. It follows Alfe, Roba, and Horace; a group of detectives in their troubled town, Farboro. The aforementioned characters were designed while Jones attended college in the 1990s; he later founded the art collective Paper Rad with Jessica and Jacob Ciocci.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 4,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/68/The_Problem_Solverz_logotype.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-proud-family",
  "title": "The Proud Family",
  "startYear": 2001,
  "endYear": 2005,
  "creator": "Bruce W. Smith",
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": 2,
  "episodes": 52,
  "status": "Ended",
  "network": "Disney Channel",
  "rating": null,
  "description": "The Proud Family is an American animated sitcom created by Bruce W. Smith that premiered on Disney Channel from September 15, 2001, to August 19, 2005. The series centers on the life of the titular family, including the show's main protagonist, Penny Proud, a 14-year-old African-American teenage girl who navigates her adolescence while dealing with her friends and family.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "disney channel",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Proud_Family_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-proud-family-louder-and-prouder",
  "title": "The Proud Family: Louder and Prouder",
  "startYear": 2022,
  "endYear": 2026,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 4,
  "episodes": 39,
  "status": "Ended",
  "network": "Disney+",
  "rating": null,
  "description": "The Proud Family: Louder and Prouder is an American animated sitcom created by Bruce W. Smith and Ralph Farquhar that premiered on Disney+ on February 23, 2022. It is a revival of the original series, that originally aired on Disney Channel from 2001 to 2005.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "disney+",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/af/The_Proud_Family_Louder_and_Prouder_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-queens-gambit",
  "title": "The Queen's Gambit",
  "startYear": 2020,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Queen's Gambit is a 2020 American coming-of-age period drama television miniseries based on the 1983 eponymous novel by Walter Tevis. The title refers to the \"Queen's Gambit\", a chess opening. The series was written and directed by Scott Frank, who created it with Allan Scott, who owns the rights to the book.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "chess",
   "1960s",
   "prodigy",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-rehearsal",
  "title": "The Rehearsal",
  "startYear": 2022,
  "endYear": null,
  "creator": "Nathan Fielder",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Rehearsal is an American docu-comedy television series created, written, directed by and starring Nathan Fielder. It premiered on HBO on July 15, 2022, to critical acclaim. It was renewed for a second season in August 2022, which premiered on April 20, 2025.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 1,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/62/The_Rehearsal.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-riches",
  "title": "The Riches",
  "startYear": 2007,
  "endYear": 2008,
  "creator": "Dmitry Lipkin",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 20,
  "status": "Ended",
  "network": "FX",
  "rating": null,
  "description": "The Riches (styled as the R1¢hes) is an American drama television series which was originally broadcast from March 12, 2007, to April 29, 2008, on FX. The series stars Eddie Izzard and Minnie Driver as members of a family of Irish Travellers who \"steal the American dream\" by stealing the home and identities of a wealthy dead couple.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "crime",
   "comedy",
   "fx",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/28/The_Riches_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-righteous-gemstones",
  "title": "The Righteous Gemstones",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Righteous Gemstones is an American crime comedy-drama television series created by Danny McBride that premiered on August 18, 2019, on HBO. The series follows a famous and dysfunctional family of televangelists. McBride also stars in the series, alongside Adam DeVine, Edi Patterson, Tony Cavalero, Cassidy Freeman, Gregory Alan Williams, Tim Baltz, and John Goodman.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/17/Righteous_Gemstones_intertitle.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-rockford-files",
  "title": "The Rockford Files",
  "startYear": 1974,
  "endYear": 1980,
  "creator": "Roy Huggins Stephen J. Cannell",
  "genres": [
   "Crime",
   "Mystery",
   "Drama"
  ],
  "seasons": 6,
  "episodes": 123,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "The Rockford Files is an American detective drama television series starring James Garner, aired on NBC from September 13, 1974, to January 10, 1980. Garner portrays Los Angeles private investigator Jim Rockford, with Noah Beery Jr. in the supporting role of his father, Joseph \"Rocky\" Rockford, a retired truck driver. The show was created by Roy Huggins and Stephen J. Cannell.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Rockford_Files_%28title_screen%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-sandman",
  "title": "The Sandman",
  "startYear": 1989,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Drama",
   "Horror"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Sandman is an American horror-fantasy drama television series based on the 1989–1996 comic book written by Neil Gaiman and published by DC Comics. The series was developed by Gaiman, David S. Goyer, and Allan Heinberg for the streaming service Netflix and is produced by DC Entertainment and Warner Bros. Television. Like the comic, The Sandman tells the story of Dream / Morpheus, the Sandman.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 5,
   "funny": 2,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 9
  },
  "keywords": [
   "gaiman",
   "dream",
   "dark fantasy",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Sandman_Netflix.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-secret-life-of-the-zoo",
  "title": "The Secret Life of the Zoo",
  "startYear": 2016,
  "endYear": 2021,
  "creator": null,
  "genres": [
   "Documentary",
   "Reality"
  ],
  "seasons": null,
  "episodes": 69,
  "status": "Ended",
  "network": "Channel 4",
  "rating": null,
  "description": "The Secret Life of the Zoo is a British documentary programme produced by Blast! Films on behalf of Channel 4. The series is filmed on location at Chester Zoo in the North West of England, and focuses on the behaviour of the animals at the zoo and their relationships with the keepers. The first five series were narrated by Olivia Colman.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "documentary",
   "reality",
   "channel 4",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Secret_Life_of_the_Zoo_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-shield",
  "title": "The Shield",
  "startYear": 2002,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "The Shield is an American crime drama television series created by Shawn Ryan, which aired on FX from March 12, 2002, to November 25, 2008, for seven seasons. It stars Michael Chiklis as Vic Mackey, the leader of a corrupt Los Angeles Police Department unit loosely based on the Rampart Division police scandal.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "corrupt cops",
   "la",
   "gritty",
   "fx"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/69/TheShieldTitle.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-simpsons",
  "title": "The Simpsons",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Simpsons is an American animated sitcom created by Matt Groening and developed by Groening, James L. Brooks and Sam Simon for the Fox Broadcasting Company. It is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 1,
   "epic": 2,
   "cozy": 8,
   "weird": 6
  },
  "keywords": [
   "springfield",
   "sitcom institution",
   "fox",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-sinner",
  "title": "The Sinner",
  "startYear": 1999,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Sinner is an American police procedural anthology television series developed by Derek Simonds for USA Network. It is named after Petra Hammesfahr's 1999 novel, which served as the basis for the first season. Bill Pullman stars as a police detective who investigates crimes committed by unlikely culprits and attempts to uncover their motivations.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "thriller",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/The_Sinner.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-smurfs",
  "title": "The Smurfs",
  "startYear": 1981,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Smurfs (originally broadcast as Smurfs and syndicated as Smurfs' Adventures) is an animated sitcom that originally aired on NBC from September 12, 1981 to December 2, 1989.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 4,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Smurfs_%281981_TV_series%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-son",
  "title": "The Son",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Western",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Son is an American Western drama television series based on the 2013 novel of the same name by Philipp Meyer that aired on AMC for two seasons. The show was created and developed by Meyer, Brian McGreevy, and Lee Shipman. Twenty episodes over two seasons aired from April 8, 2017, through June 29, 2019.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "western",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/TheSon-TVSeries-AMC-Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-sopranos",
  "title": "The Sopranos",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Sopranos is an American crime drama television series created by David Chase for HBO. The series follows Tony Soprano (James Gandolfini), a New Jersey Mafia boss. Suffering from panic attacks, he reluctantly begins seeing psychiatrist Dr. Jennifer Melfi (Lorraine Bracco), who encourages him to open up about his difficulties balancing his family life with his criminal activities.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 1,
   "funny": 4,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "mafia",
   "therapy",
   "family",
   "new jersey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/37/The_Sopranos_promotional_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-sound-of-magic",
  "title": "The Sound of Magic",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy"
  ],
  "seasons": 1,
  "episodes": 6,
  "status": "Running",
  "network": "Netflix",
  "rating": null,
  "description": "The Sound of Magic (Korean: 안나라수마나라; RR: Annarasumanara) is a 2022 South Korean television series based on the Naver webtoon Annarasumanara by Ha Il-kwon. It is directed by Kim Seong-yoon, written by Kim Min-jeong, and starring Ji Chang-wook, Choi Sung-eun, and Hwang In-youp.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 3,
   "epic": 10,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "fantasy",
   "netflix",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/The_Sound_of_Magic.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-strain",
  "title": "The Strain",
  "startYear": 2014,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Horror",
   "Fantasy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Strain is an American horror drama television series that aired on FX from July 13, 2014, to September 17, 2017. It was created by Guillermo del Toro and Chuck Hogan, based on their novel trilogy of the same name. Carlton Cuse served as executive producer and showrunner. Del Toro and Hogan wrote the pilot episode, \"Night Zero\", which del Toro directed.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 3,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "horror",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/The_Strain_2014_Intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-substitute-american-tv-program",
  "title": "The Substitute (American TV program)",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Family",
   "Reality"
  ],
  "seasons": 2,
  "episodes": 24,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Substitute is an American reality television program that aired on Nickelodeon from April 1, 2019 to February 25, 2021. The program features pranks and celebrities going undercover as substitute teachers to surprise students, with $25,000 donations being made to each school they visit. The series was renewed for a second season hosted by Juanpa Zurita.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 0,
   "romantic": 3,
   "epic": 3,
   "cozy": 9,
   "weird": 2
  },
  "keywords": [
   "family",
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/TheSubstituteS2Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-super-mario-bros-super-show",
  "title": "The Super Mario Bros. Super Show!",
  "startYear": 1989,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Super Mario Bros. Super Show! is an American live-action/animated television series that aired from September 4 to December 1, 1989, in syndication. The series is based on the video games Super Mario Bros. and Super Mario Bros. 2 by Japanese multinational video game company Nintendo and Shigeru Miyamoto, and is the first of three television series to be based upon the Mario video game series.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 3,
   "epic": 8,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Super_Mario_Bros_Super_Show_Title.PNG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-supervet-noel-fitzpatrick",
  "title": "The Supervet: Noel Fitzpatrick",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": "Channel 4",
  "rating": null,
  "description": "The Supervet: Noel Fitzpatrick (known as The Supervet from 2014 to 2019) is a Channel 4 television series following the work of Irish veterinary surgeon Noel Fitzpatrick and his team at Fitzpatrick Referrals in Eashing, Surrey. The series shows the work of Fitzpatrick and his team, who attempt to cure pets that might otherwise be beyond saving.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 0,
   "epic": 7,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "documentary",
   "reality",
   "channel 4",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-the-sympathizer",
  "title": "The Sympathizer",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "War",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Sympathizer (Vietnamese: Cảm tình viên) is a historical black comedy-drama television miniseries based on the 2015 Pulitzer Prize-winning novel of the same name by Viet Thanh Nguyen. The series was created by co-showrunners Park Chan-wook and Don McKellar, with Park directing the first three episodes. The series premiered on HBO on April 14, 2024, and is produced by A24 and Rhombus Media.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "war",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/37/The_Sympathizer_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-terminal-list",
  "title": "The Terminal List",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Terminal List is an American action thriller television series created by David DiGilio for Amazon Prime Video. It is based on the 2018 novel of the same name by Jack Carr. The series tells the story of a Navy SEAL who seeks to avenge the murder of his family. It stars Chris Pratt, Constance Wu, Taylor Kitsch, Riley Keough, Arlo Mertz, Jeanne Tripplehorn, and Tom Hopper.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 2,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "thriller",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Terminal_List.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-terror",
  "title": "The Terror",
  "startYear": null,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Horror",
   "Drama",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Terror is an American supernatural horror drama anthology television series developed for AMC. Each season is a stand-alone story with a different cast and mostly different crew, each set during a unique historical backdrop also featuring supernatural elements.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 10,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "arctic",
   "expedition",
   "anthology",
   "amc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/The-Terror-TV.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-time-tunnel",
  "title": "The Time Tunnel",
  "startYear": 1966,
  "endYear": 1967,
  "creator": "Irwin Allen",
  "genres": [
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": 30,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "The Time Tunnel is an American science-fiction television series written around a theme of time travel adventure; it starred James Darren and Robert Colbert. The show was creator-producer Irwin Allen's third science-fiction television series and was released by 20th Century Fox Television and broadcast on ABC. The show ran for one season of 30 episodes from September 9, 1966 to April 7, 1967.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/The_Time_Tunnel_titlecard.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-tracey-ullman-show",
  "title": "The Tracey Ullman Show",
  "startYear": 1987,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Tracey Ullman Show is an American television sketch comedy variety show starring Tracey Ullman. It debuted on Fox on April 5, 1987, as the network's second original primetime series, following Married... with Children, and ran for four seasons and 81 episodes until May 26, 1990. It was produced by Gracie Films in association with 20th Century Fox Television.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Tracey_Ullman_Show_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-traitors",
  "title": "The Traitors",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Reality",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Traitors (also known as The Traitors UK) is a British reality television series broadcast on BBC One, based on the Dutch series De Verraders. It was first broadcast on 29 November 2022 and is hosted by Claudia Winkleman.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "bluffing",
   "castle",
   "claudia winkleman",
   "bbc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/The_Traitors_UK_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-twilight-zone",
  "title": "The Twilight Zone",
  "startYear": 1959,
  "endYear": 1964,
  "creator": "Rod Serling",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Fantasy",
   "Thriller",
   "Drama"
  ],
  "seasons": 5,
  "episodes": 156,
  "status": "Ended",
  "network": "CBS",
  "rating": null,
  "description": "The Twilight Zone (marketed as Twilight Zone for its final two seasons) is an American anthology television series created and presented by Rod Serling, which ran for five seasons on CBS from October 2, 1959, to June 19, 1964.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "sci-fi",
   "cbs",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/09/The_Twilight_Zone_%281959_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-ultimate-fighter",
  "title": "The Ultimate Fighter",
  "startYear": 2005,
  "endYear": null,
  "creator": "Craig Piligian Frank Fertitta III Lorenzo Fertitta Dana White",
  "genres": [
   "Reality"
  ],
  "seasons": 34,
  "episodes": 150,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Ultimate Fighter is an American reality television series and mixed martial arts (MMA) competition produced by the Ultimate Fighting Championship (UFC) and Pilgrim Media Group is expected to air on Paramount+ in 2026. It previously aired for fourteen seasons on Spike TV.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "reality",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/11/The_Ultimate_Fighter_logo.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-umbrella-academy",
  "title": "The Umbrella Academy",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Drama",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "The Umbrella Academy is an American superhero comedy drama television series loosely based on the comic book series of the same name written by Gerard Way, illustrated by Gabriel Bá, and published by Dark Horse Comics.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 7,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 8
  },
  "keywords": [
   "adopted siblings",
   "apocalypse",
   "netflix",
   "quirky"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/86/The_Umbrella_Academy_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-undoing",
  "title": "The Undoing",
  "startYear": 2014,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Mystery",
   "Psychological Thriller",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Undoing is an American mystery psychological thriller television miniseries based on the 2014 novel You Should Have Known by Jean Hanff Korelitz. It was written and produced by David E. Kelley and directed by Susanne Bier. The miniseries stars Nicole Kidman and Hugh Grant and premiered on HBO on October 25, 2020.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "thriller",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Undoing.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-vietnam-war-film",
  "title": "The Vietnam War",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Historical Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Ken Burns and Lynn Novick's 18-hour documentary history of the Vietnam War, told through veterans, civilians, and officials from all sides. Definitive, patient, and devastating.",
  "vector": {
   "adrenaline": 3,
   "brainy": 10,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 9,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "ken burns",
   "history",
   "definitive",
   "pbs"
  ],
  "poster": "",
  "tier": "core"
 },
 {
  "id": "tv-the-wacky-world-of-tex-avery",
  "title": "The Wacky World of Tex Avery",
  "startYear": 1997,
  "endYear": 1997,
  "creator": "Robby London",
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Western",
   "Family"
  ],
  "seasons": 1,
  "episodes": 65,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "The Wacky World of Tex Avery (French: Le Monde fou de Tex Avery) is an animated television series created by Robby London and co-produced by DIC Productions, L.P., Les Studios Tex SARL, Milimetros, M6 and Telcima.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 10,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Wacky_World_of_Tex_Avery.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-walking-dead",
  "title": "The Walking Dead",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Drama",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Walking Dead (TWD) is an American post-apocalyptic horror drama television series developed by Frank Darabont, based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. Together, the show and the comic book series form the core of The Walking Dead franchise.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "zombies",
   "survival",
   "amc",
   "apocalypse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Walking_Dead_2010_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-weekenders",
  "title": "The Weekenders",
  "startYear": 2000,
  "endYear": 2001,
  "creator": "Doug Langdale",
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": 2,
  "episodes": 39,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "The Weekenders, also known as Disney's The Weekenders, is an American animated television series created by Doug Langdale that premiered on February 26, 2000, with the last episode airing on February 29, 2004, spanning two seasons. It centers on the weekend life of four 12-year-old 7th graders: Tino, Lor, Carver, and Tish.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/40/Disney%27s_The_Weekender%27s_Logo_%28Show%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-west-wing",
  "title": "The West Wing",
  "startYear": 1999,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-PG",
  "description": "The West Wing is an American political drama television series created by Aaron Sorkin that was originally broadcast on NBC from September 22, 1999, to May 14, 2006. The series is set primarily in the West Wing of the White House, where the Oval Office and offices of presidential senior personnel are located, during the fictional two-term Democratic administration of President Josiah Bartlet.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "politics",
   "white house",
   "sorkin",
   "idealism"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/9b/The_West_Wing_%28NBC_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-whispers",
  "title": "The Whispers",
  "startYear": 2015,
  "endYear": 2015,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Mystery",
   "Drama"
  ],
  "seasons": 1,
  "episodes": 13,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "The Whispers is an American science fiction drama television series created and co-executive produced by Soo Hugh with executive producers Steven Spielberg, Justin Falvey, Darryl Frank and Dawn Olmstead for ABC Studios. It is based loosely on the 1951 Ray Bradbury short story \"Zero Hour\" from The Illustrated Man.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 7
  },
  "keywords": [
   "sci-fi",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/37/The_Whispers_%28ABC_TV_series_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-wind-in-the-willows",
  "title": "The Wind in the Willows",
  "startYear": 1984,
  "endYear": 1990,
  "creator": "Cosgrove Hall",
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": 52,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "The Wind in the Willows is a British stop motion animated television series that was originally broadcast between 1984 and 1987, based on characters from Kenneth Grahame's 1908 novel The Wind in the Willows and following the 1983 feature-length pilot film. The series continues from where the film left off, and original voice cast members David Jason, Richard Pearson and Michael Hordern return.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 9,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/The_Wind_in_the_Willows_%28TV_series%29.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-wire",
  "title": "The Wire",
  "startYear": null,
  "endYear": null,
  "creator": "David Simon",
  "genres": [
   "Drama",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Wire is an American crime drama television series created and primarily written by American author and former police reporter David Simon for the cable network HBO. The series premiered on June 2, 2002, and ended on March 9, 2008, comprising 60 episodes over five seasons.",
  "vector": {
   "adrenaline": 4,
   "brainy": 10,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "baltimore",
   "institutions",
   "police",
   "realism"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Wire_logo.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-witcher",
  "title": "The Witcher",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "The Witcher is a fantasy drama television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series by Polish author Andrzej Sapkowski. Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg, and Princess Ciri.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 4,
   "funny": 3,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "geralt",
   "monsters",
   "netflix",
   "sword and sorcery"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/The_Witcher_Logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-the-woman-in-the-house-across-the-street-from-the-girl-in-the-window",
  "title": "The Woman in the House Across the Street from the Girl in the Window",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Comedy",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Woman in the House Across the Street from the Girl in the Window is a 2022 American miniseries created by Rachel Ramras, Hugh Davidson, and Larry Dorf. A dark comedy, satirizing the psychological thriller genre, it stars Kristen Bell, Michael Ealy, Tom Riley, Mary Holland, Cameron Britton, Shelley Hennig, and Samsara Yett.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 8,
   "funny": 5,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 1,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "horror",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Woman_in_the_House_Across_the_Street_from_the_Girl_in_the_Window.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-wonderfools",
  "title": "The Wonderfools",
  "startYear": 2026,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Comedy",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "The Wonderfools (Korean: 원더풀스) is a 2026 South Korean superhero comedy action adventure television series created by Kang Eun-kyung, written by Heo Da-joong, directed by Yoo In-shik, and starring Park Eun-bin, Cha Eun-woo, Kim Hae-sook, Choi Dae-hoon, Im Seong-jae, and Son Hyun-joo.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "superhero",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Wonderfools_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-the-x-files",
  "title": "The X-Files",
  "startYear": 1993,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Mystery",
   "Horror"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-14",
  "description": "The X-Files is an American science fiction drama television series created by Chris Carter. The original series aired from September 10, 1993, to May 19, 2002, on Fox, spanning nine seasons, with 202 episodes. A tenth season of six episodes ran from January to February 2016.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 6,
   "funny": 3,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 7
  },
  "keywords": [
   "fbi",
   "aliens",
   "conspiracy",
   "mulder and scully"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/The_X-Files_original_title_screen.webp?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-this-is-us",
  "title": "This Is Us",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Romance",
   "Family Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-14",
  "description": "This Is Us is an American drama television series created by Dan Fogelman that aired on NBC from September 20, 2016, to May 24, 2022. The series follows the lives and families of two parents and their three children in several different timeframes. It stars an ensemble cast featuring Milo Ventimiglia, Mandy Moore, Sterling K.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 10,
   "dark": 2,
   "romantic": 7,
   "epic": 4,
   "cozy": 7,
   "weird": 0
  },
  "keywords": [
   "family",
   "timelines",
   "emotional",
   "siblings"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Logo_This_Is_Us.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-thriller",
  "title": "Thriller",
  "startYear": 1960,
  "endYear": null,
  "creator": null,
  "genres": [
   "Horror",
   "Crime",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Thriller (also known as Boris Karloff's Thriller and Boris Karloff Presents) is an American anthology television series that aired during the 1960–61 and 1961–62 seasons on NBC. The show featured host Boris Karloff introducing a mix of macabre horror tales and suspense thrillers.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 7,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "horror",
   "crime",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Thriller_Title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-tiger-bunny",
  "title": "Tiger & Bunny",
  "startYear": 2011,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Superhero",
   "Comedy",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Tiger & Bunny (stylized in all caps) is a 2011 Japanese anime superhero television series produced by Sunrise and directed by Keiichi Sato. The screenplay was written by Masafumi Nishida with original character design by Masakazu Katsura. The series began its broadcast run in Japan on April 3, 2011, on Tokyo MX, followed by rebroadcasts on BS11 and MBS, and ended on September 17, 2011.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "animation",
   "superhero",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-tiger-king",
  "title": "Tiger King",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Crime"
  ],
  "seasons": 3,
  "episodes": 15,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Tiger King (subtitled in marketing as Tiger King: Murder, Mayhem, and Madness for its first season, Tiger King 2 for its second season and Tiger King: The Doc Antle Story for its third season) is an American true crime documentary television series about the life of former zookeeper and convicted felon Joe Exotic. The first season was released on Netflix on March 20, 2020.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 10
  },
  "keywords": [
   "true crime",
   "big cats",
   "chaos",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Tiger_King%2C_Murder%2C_Mayhem_and_Madness_publicity_image.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-timeless",
  "title": "Timeless",
  "startYear": 2016,
  "endYear": 2018,
  "creator": "{{Plainlist|*Eric Kripke",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": 2,
  "episodes": 28,
  "status": "Ended",
  "network": "NBC",
  "rating": null,
  "description": "Timeless is an American science fiction drama television series that premiered on NBC on October 3, 2016. It stars Abigail Spencer, Matt Lanter, and Malcolm Barrett as a team that attempts to stop a mysterious organization from changing the course of history through time travel.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "action",
   "nbc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8d/Timeless_%28TV%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-titans",
  "title": "Titans",
  "startYear": 2018,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Fantasy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Titans is an American superhero television series created by Akiva Goldsman, Geoff Johns, and Greg Berlanti. Based on the DC Comics superhero team Teen Titans, the series depicts a group of young heroes who join forces in their fight against evil.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Titans_%282018_TV_series%29_logos.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-trailer-park-boys",
  "title": "Trailer Park Boys",
  "startYear": 2001,
  "endYear": null,
  "creator": "Mike Clattenburg",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Trailer Park Boys is a Canadian mockumentary television sitcom, created by Mike Clattenburg, that began airing in 2001 as a continuation of his two short films, including 1995’s “The Cart Boy” and 1998’s “One Last Shot”. The show follows the misadventures of a group of trailer park residents, living in the fictional \"Sunnyvale Trailer Park\" in Dartmouth, Halifax, Nova Scotia.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 2,
   "epic": 1,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "comedy",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/20/Trailer_Park_Boys_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-treme",
  "title": "Treme",
  "startYear": 2010,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Treme ( trə-MAY) is an American drama television series created by David Simon and Eric Overmyer that aired on HBO. The series premiered on April 11, 2010, and concluded on December 29, 2013, comprising four seasons and 36 episodes.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/72/Treme-intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-true-detective",
  "title": "True Detective",
  "startYear": null,
  "endYear": null,
  "creator": "{{plainlist|",
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "True Detective is an American anthology crime drama television series created by Nic Pizzolatto for the premium cable network HBO. The series premiered on January 12, 2014, and each season of the series is structured as a self-contained narrative, employing new cast ensembles, and following various sets of characters and settings.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 5,
   "funny": 0,
   "heartwarming": 0,
   "dark": 10,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "anthology",
   "detectives",
   "occult",
   "bleak"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/True_Detective_2014_Intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-tuca-bertie",
  "title": "Tuca & Bertie",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Tuca & Bertie is an American adult animated sitcom created by cartoonist Lisa Hanawalt for Netflix. It began streaming on May 3, 2019. It stars Tiffany Haddish and Ali Wong, alongside Steven Yeun, with a supporting cast including John Early, Richard E. Grant, and Reggie Watts. The show's central characters are two anthropomorphic female birds: Tuca the toucan and Bertie the song thrush.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 1,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/Tuca_%26_Bertie_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-turbo-fast",
  "title": "Turbo Fast",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Turbo Fast is an American animated television series based on the 2013 animated film Turbo. Produced by DreamWorks Animation Television and animated by Titmouse, it was released exclusively on Netflix in the United States and in the 40 countries where Netflix offers its services at the time, but it became available worldwide via Netflix over time.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Turbo_FAST_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-two-and-a-half-men",
  "title": "Two and a Half Men",
  "startYear": 2003,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Two and a Half Men is an American television sitcom, created by Chuck Lorre and Lee Aronsohn, that aired for 12 seasons on CBS from September 22, 2003, to February 19, 2015. The series originally starred Charlie Sheen as Charlie Harper, a hedonistic jingle writer, alongside Jon Cryer as his uptight brother Alan, and Angus T. Jones as Alan's son Jake.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 7,
   "dark": 0,
   "romantic": 2,
   "epic": 2,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Two_and_a_Half_Men_-_title_screen_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ultra-galaxy-fight",
  "title": "Ultra Galaxy Fight",
  "startYear": 2019,
  "endYear": null,
  "creator": "Tsuburaya Productions",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": 13,
  "status": "Running",
  "network": "YouTube Tsuburaya Imagination (TDC)",
  "rating": null,
  "description": "Ultra Galaxy Fight (ウルトラギャラクシーファイト, Urutora Gyarakushī Faito) is a Japanese online miniseries produced by Tsuburaya Productions, based on the low-budget series Ultra Fight while being marketed for worldwide audiences through YouTube in both Japanese and English versions for viewers overseas.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "youtube tsuburaya imagination (tdc)",
   "series"
  ],
  "poster": "",
  "tier": "catalog"
 },
 {
  "id": "tv-ultraman-mebius",
  "title": "Ultraman Mebius",
  "startYear": 2006,
  "endYear": 2007,
  "creator": "Tsuburaya Productions",
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action",
   "Adventure"
  ],
  "seasons": null,
  "episodes": 50,
  "status": "Ended",
  "network": "JNN (CBC, TBS)",
  "rating": null,
  "description": "Ultraman Mebius (ウルトラマンメビウス, Urutoraman Mebiusu) is a Japanese television series produced by Tsuburaya Productions and Chubu-Nippon Broadcasting. It is the 15th entry (21st overall) and 40th anniversary production in the Ultra Series, which first began in 1966. It premiered on the Tokyo Broadcasting System on April 8, 2006.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "jnn (cbc, tbs)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/UltramanMebiusu.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-ultraman-orb",
  "title": "Ultraman Orb",
  "startYear": 2016,
  "endYear": 2016,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Superhero",
   "Action"
  ],
  "seasons": null,
  "episodes": 25,
  "status": "Ended",
  "network": "TXN (TV Tokyo)",
  "rating": null,
  "description": "Ultraman Orb (ウルトラマンオーブ, Urutoraman Ōbu) is a Japanese tokusatsu television series produced by Tsuburaya Productions and broadcast on TV Tokyo.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "superhero",
   "txn (tv tokyo)",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Ultraman_Orb_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-unbelievable",
  "title": "Unbelievable",
  "startYear": null,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Drama",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Unbelievable is an American true crime drama miniseries starring Toni Collette, Merritt Wever, and Kaitlyn Dever. It follows a woman who was charged with a crime for reporting she was raped after police believe she fabricated her account, and two female detectives who investigate a spate of similar attacks. The show was co-created by Susannah Grant, Ayelet Waldman, and Michael Chabon.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "true crime",
   "detectives",
   "miniseries",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Unbelievable_%28miniseries%29_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-unbreakable-kimmy-schmidt",
  "title": "Unbreakable Kimmy Schmidt",
  "startYear": 2015,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Unbreakable Kimmy Schmidt is an American sitcom created by Tina Fey and Robert Carlock, starring Ellie Kemper in the title role. It premiered on March 6, 2015, on Netflix and ran for four seasons, ending on January 25, 2019. An interactive special premiered on May 12, 2020.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 1,
   "funny": 10,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 4,
   "epic": 2,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Unbreakable_Kimmy_Schmidt.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-uncle-grandpa",
  "title": "Uncle Grandpa",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Fantasy",
   "Comedy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Uncle Grandpa is an American animated surreal comedy television series created by Peter Browngardt for Cartoon Network that ran from September 2, 2013, to June 30, 2017. It is based on Browngardt's animated short of the same name from The Cartoonstitute. Uncle Grandpa is also a spin-off of Secret Mountain Fort Awesome, which was in turn a spin-off of The Cartoonstitute short.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "animation",
   "fantasy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/36/Uncle_Grandpa_logotype.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-under-the-dome",
  "title": "Under the Dome",
  "startYear": 2013,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Mystery",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Under the Dome is an American science fiction mystery drama television series that premiered on CBS on June 24, 2013, and concluded on September 10, 2015. The series was developed by Brian K. Vaughan and loosely based on the 2009 novel by Stephen King.",
  "vector": {
   "adrenaline": 5,
   "brainy": 10,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Under_the_Dome_%28Amblin_Television%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-universal-basic-guys",
  "title": "Universal Basic Guys",
  "startYear": 2024,
  "endYear": null,
  "creator": "Adam Malamut & Craig Malamut",
  "genres": [
   "Animation",
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Universal Basic Guys is an American animated sitcom created by Adam and Craig Malamut that premiered on September 8, 2024, on Fox. The show centers on a group of South Jersey factory workers who are enrolled in a universal basic income pilot program when their jobs are taken over by AI-powered robots, and left with a monthly income and a lot of free time to get into trouble.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Universal_Basic_Guys.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-unreported-world",
  "title": "Unreported World",
  "startYear": 2000,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": 347,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Unreported World is a British foreign affairs programme made by ITN Productions and broadcast by Channel 4 in the United Kingdom, first broadcast on 8 September 2000. Over the course of the programme, reporters have travelled to dangerous locations all over the world in an attempt to uncover stories usually ignored by global media outlets.",
  "vector": {
   "adrenaline": 3,
   "brainy": 10,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Unreported_World.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-v",
  "title": "V",
  "startYear": 2009,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "V is an American science-fiction drama television series that aired for two seasons on ABC, from November 3, 2009, to March 15, 2011. A remake of the 1983 miniseries created by Kenneth Johnson, the new series chronicles the arrival on Earth of a technologically advanced alien species, which ostensibly comes in peace, but actually has sinister motives.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sci-fi",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a6/V_%282009_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-veep",
  "title": "Veep",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Veep is an American political satire comedy television series that aired on HBO from April 22, 2012, to May 12, 2019. The series was created by Armando Iannucci. The series follows Selina Meyer (Julia Louis-Dreyfus), the fictional Vice President of the United States, and her team as they attempt to make their mark and leave a legacy but often instead become mired in day-to-day political games.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 10,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "politics",
   "satire",
   "insults",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Veep_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-vegas",
  "title": "Vegas",
  "startYear": 2012,
  "endYear": null,
  "creator": "{{Plain list|",
  "genres": [
   "Crime",
   "Mystery",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Vegas is an American historical crime drama television series that ran on CBS from September 25, 2012 to May 10, 2013. The series starred Dennis Quaid and Michael Chiklis. The series was co-created by Las Vegas chronicler and Casino screenwriter Nicholas Pileggi, who also wrote the pilot. Vegas received a 22-episode full season on October 23, 2012. CBS later reduced the order to 21 episodes.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "crime",
   "mystery",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Vegas_tv_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-victorious",
  "title": "Victorious",
  "startYear": 2010,
  "endYear": null,
  "creator": "Dan Schneider",
  "genres": [
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Victorious is an American teen sitcom created by Dan Schneider that aired on Nickelodeon from March 27, 2010, to February 2, 2013. The series ran for four seasons and produced 57 episodes. The show follows aspiring singer Tori Vega, a teenager who enrolls at the performing-arts high school Hollywood Arts after unexpectedly taking her older sister Trina's place in a school showcase.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 1,
   "cozy": 9,
   "weird": 4
  },
  "keywords": [
   "comedy",
   "family",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/Victorious-logo2.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-voltron-legendary-defender",
  "title": "Voltron: Legendary Defender",
  "startYear": 2016,
  "endYear": 2018,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Animation",
   "Fantasy",
   "Action",
   "Adventure",
   "Family"
  ],
  "seasons": 8,
  "episodes": 78,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Voltron: Legendary Defender is an animated mecha television series produced by American companies DreamWorks Animation Television and World Events Productions and South Korean animation studio Mir for Netflix. It is a reboot of the Voltron franchise and the Japanese anime series Beast King GoLion.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 6
  },
  "keywords": [
   "sci-fi",
   "animation",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Voltron_-_Legendary_Defender_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-voyage-to-the-bottom-of-the-sea",
  "title": "Voyage to the Bottom of the Sea",
  "startYear": 1964,
  "endYear": 1968,
  "creator": "Irwin Allen",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "seasons": 4,
  "episodes": 110,
  "status": "Ended",
  "network": "ABC",
  "rating": null,
  "description": "Voyage to the Bottom of the Sea is an American science fiction television series based on the 1961 movie. Both were created by Irwin Allen, which enabled the film's sets, costumes, props, special effects models, and sometimes footage, to be used in the production of the television series.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "action",
   "abc",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Voyage_to_the_Bottom_of_the_Sea.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wacky-races",
  "title": "Wacky Races",
  "startYear": 1968,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Wacky Races is an American animated comedy television series produced by Hanna-Barbera Productions in association with Heatter-Quigley Productions. It aired on CBS as part of its Saturday-morning schedule from September 14, 1968, to January 4, 1969, and then reruns the next season.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/Wacky_Races_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wandavision",
  "title": "WandaVision",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Drama",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 2,
   "funny": 6,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 6,
   "epic": 5,
   "cozy": 3,
   "weird": 9
  },
  "keywords": [
   "marvel",
   "sitcom homage",
   "grief",
   "disney+"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/20/WandaVision_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-warrior",
  "title": "Warrior",
  "startYear": 2019,
  "endYear": null,
  "creator": "Jonathan Tropper",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Warrior (Chinese: 戰士) is an American martial arts crime drama television series that premiered on April 5, 2019, on Cinemax. It is based on an original concept and treatment by Bruce Lee, and is executive-produced by his daughter, Shannon Lee, and film director Justin Lin. Jonathan Tropper, known for the Cinemax original series Banshee, is the showrunner.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Warrior_%28Tv_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-watchmen",
  "title": "Watchmen",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Superhero",
   "Drama",
   "Sci-Fi"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Watchmen is a 2019 American superhero limited series created by Damon Lindelof for HBO. The series is written as a sequel to the 1986 DC Comics series Watchmen, created by Alan Moore and Dave Gibbons. Its ensemble cast includes Regina King, Don Johnson, Tim Blake Nelson, Yahya Abdul-Mateen II, Andrew Howard, Jacob Ming-Trent, Tom Mison, Sara Vickers, Dylan Schombing, Louis Gossett Jr.",
  "vector": {
   "adrenaline": 6,
   "brainy": 10,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "sequel",
   "hbo",
   "race and policing",
   "lindelof"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/38/Watchmen_TV_series_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-we-are-who-we-are",
  "title": "We Are Who We Are",
  "startYear": 2020,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "We Are Who We Are is a 2020 coming-of-age drama television miniseries co-created and directed by Luca Guadagnino for HBO and Sky Atlantic. A coming-of-age story set on a fictional U.S. military base in Chioggia, Italy, in 2016, the series follows two American teenagers, Fraser Wilson and Caitlin \"Harper\" Poythress, as they navigate sexual discovery and burgeoning identity.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/We_Are_Who_We_Are_Title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wednesday",
  "title": "Wednesday",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Fantasy",
   "Mystery"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-14",
  "description": "Wednesday is an American supernatural mystery comedy television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Luis Guzmán and Catherine Zeta-Jones portraying her parents in the series. Four episodes of each season were directed by Tim Burton, who serves as executive producer.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 3,
   "funny": 8,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 3,
   "weird": 8
  },
  "keywords": [
   "addams",
   "nevermore",
   "tim burton",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Wednesday_%28Netflix_TV_series%29_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-weinerville",
  "title": "Weinerville",
  "startYear": 1993,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Weinerville is an American variety television series that aired on Nickelodeon from July 11, 1993 to February 17, 1996. This series was based around a giant puppet stage that was designed to look like a city called Weinerville. It was created and hosted by Marc Weiner.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 8,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Weinervilletitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-welcome-to-wrexham",
  "title": "Welcome to Wrexham",
  "startYear": 2022,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Welcome to Wrexham is an American sports documentary television series that premiered on August 24, 2022, on FX. The series documents the events of Welsh association football club Wrexham A.F.C. after its purchase by new owners, Ryan Reynolds and Rob McElhenney. The series received critical acclaim, winning eleven Primetime Emmy Awards and two Critics' Choice Television Awards.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "documentary",
   "docuseries",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Welcome_to_Wrexham_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-westworld",
  "title": "Westworld",
  "startYear": 2016,
  "endYear": null,
  "creator": null,
  "genres": [
   "Sci-Fi",
   "Drama",
   "Western"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "Westworld is an American dystopian science fiction Western drama television series created by Jonathan Nolan and Lisa Joy that aired from 2016 to 2022 on HBO. It is based upon the 1973 film written and directed by Michael Crichton and loosely upon its 1976 sequel, Futureworld.",
  "vector": {
   "adrenaline": 7,
   "brainy": 10,
   "scary": 3,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "robots",
   "theme park",
   "consciousness",
   "hbo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/ba/WestworldLogo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-what-we-do-in-the-shadows",
  "title": "What We Do in the Shadows",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Comedy",
   "Horror",
   "Fantasy"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "What We Do in the Shadows is an American comedy horror mockumentary fantasy television series created by Jemaine Clement, first broadcast on FX on March 27, 2019, until concluding its run with the end of its sixth season on December 16, 2024.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 4,
   "funny": 10,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 2,
   "cozy": 6,
   "weird": 9
  },
  "keywords": [
   "vampires",
   "mockumentary",
   "staten island",
   "fx"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/What_We_Do_in_the_Shadows_Title_Card.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-when-life-gives-you-tangerines",
  "title": "When Life Gives You Tangerines",
  "startYear": 2025,
  "endYear": null,
  "creator": null,
  "genres": [
   "Romance"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "When Life Gives You Tangerines (Korean: 폭싹 속았수다; RR: Pokssak sogatsuda; Jeju for 'Thank You for Your Hard Work') is a 2025 South Korean romance slice-of-life television series written by Lim Sang-choon, directed by Kim Won-seok, and starring IU, Park Bo-gum, Moon So-ri, and Park Hae-joon. It was released on Netflix every Friday, from March 7, 2025, to March 28, 2025.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 10,
   "epic": 3,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "romance",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/When_Life_Gives_You_Tangerines_poster.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-when-they-see-us",
  "title": "When They See Us",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Historical Drama",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": "TV-MA",
  "description": "When They See Us is a 2019 American crime drama television miniseries created, co-written, and directed by Ava DuVernay for Netflix, that premiered in four parts on May 31, 2019.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 5,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "central park five",
   "true story",
   "injustice",
   "miniseries"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Title_Screen_for_When_They_See_Us.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-whiskey-cavalier",
  "title": "Whiskey Cavalier",
  "startYear": 2019,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Whiskey Cavalier is an American action comedy-drama television series, created by David Hemingson, that premiered on February 24, 2019. The full pilot episode debuted after the Oscars and was rebroadcast in the show’s regular time slot three nights later (February 27, 2019), on ABC. On May 12, 2019, ABC cancelled the series after one season, and the series finale aired on May 22, 2019.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 1,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "crime",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Whiskey_Cavalier_Intertitle.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wicked-city",
  "title": "Wicked City",
  "startYear": 2015,
  "endYear": null,
  "creator": null,
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Wicked City is an American procedural drama television series created by Steven Baigelman for the broadcast network ABC. The series aired from October 27, 2015, to December 15, 2015. and focused on two LAPD detectives (Jeremy Sisto and Gabriel Luna) as they search for a pair of romantically linked serial killers (Ed Westwick and Erika Christensen) terrorizing the Sunset Strip.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "crime",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1a/Wicked_City_ABC.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wild-wild-country",
  "title": "Wild Wild Country",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Documentary",
   "Crime"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "Wild Wild Country is a Netflix documentary series about the controversial Indian guru Bhagwan Shree Rajneesh (Osho), his one-time personal assistant Ma Anand Sheela, and their community of followers in the Rajneeshpuram community located in Wasco County, Oregon, US. It was released on Netflix on March 16, 2018, after premiering at the Sundance Film Festival.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "cult",
   "oregon",
   "rajneesh",
   "netflix"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/Wild_Wild_Country.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-willow",
  "title": "Willow",
  "startYear": 1988,
  "endYear": null,
  "creator": null,
  "genres": [
   "Fantasy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Willow is an American fantasy adventure television series based on and serving as a sequel to the 1988 film Willow. Warwick Davis, the original actor of Willow Ufgood in the 1988 film, reprised his role for the show. Val Kilmer was unable to reprise his role as Madmartigan, so his son Jack Kilmer voiced a cameo appearance of the character instead.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "fantasy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5b/Willow_%28TV_series%29_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-wipeout-2008-game-show",
  "title": "Wipeout (2008 game show)",
  "startYear": 2008,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Action",
   "Reality"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Wipeout is an American television game show that features contestants competing in (what was billed as) the \"World's Largest\" obstacle course which originally aired on ABC from June 24, 2008, to September 7, 2014. In 2021, the show was rebooted on TBS, with John Cena, Nicole Byer, and Camille Kostek as hosts.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 10,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 3,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Wipeout_2011_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-worlds-wildest-police-videos",
  "title": "World's Wildest Police Videos",
  "startYear": 1998,
  "endYear": 2001,
  "creator": "Paul Stojanovich",
  "genres": [
   "Crime",
   "Reality"
  ],
  "seasons": 4,
  "episodes": 56,
  "status": "Ended",
  "network": "Fox",
  "rating": null,
  "description": "World's Wildest Police Videos (shortened to Police Videos during its fourth season) is an American reality television series that ran on Fox from 1998 to 2001. In 2012, Spike announced that it had commissioned 13 new episodes with the revival of the original name and John Bunnell returning as host, which premiered on May 7, 2012, and ended on August 13, 2012.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "crime",
   "reality",
   "fox",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/World%27s_Wildest_Police_Videos.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-x-men-97",
  "title": "X-Men '97",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Superhero",
   "Action"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": null,
  "description": "X-Men '97 is an American animated television series created by Beau DeMayo for the streaming service Disney+, based on the Marvel Comics superhero team the X-Men. It is a revival of X-Men: The Animated Series (1992–1997) produced by Marvel Studios Animation, and continues the story of the X-Men from the earlier series.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 4
  },
  "keywords": [
   "marvel",
   "revival",
   "mutants",
   "disney+"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/6a/X-Men_%2797_logo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-xena-warrior-princess",
  "title": "Xena: Warrior Princess",
  "startYear": 1995,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Xena: Warrior Princess is an American sword-and-sorcery television series filmed in New Zealand, which aired in first-run syndication from September 4, 1995, to June 18, 2001. Critics have praised the series for its strong female protagonist, and it has acquired a strong cult following, attention in fandom, parody, and academia, and has influenced the direction of other television series.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "fantasy",
   "action",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/Xena_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-years-and-years",
  "title": "Years and Years",
  "startYear": 2019,
  "endYear": 2019,
  "creator": "Russell T Davies",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "seasons": null,
  "episodes": 6,
  "status": "Ended",
  "network": null,
  "rating": null,
  "description": "Years and Years is a dystopian science fiction drama television miniseries written by Russell T Davies. Taking place between 2019 and 2034, the six-part series follows the lives of the Lyons family, who witness increasingly tumultuous global affairs and the rise to power of Vivienne Rook, an outspoken British celebrity businesswoman turned populist politician whose controversial opinions divide…",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "sci-fi",
   "drama",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/Years_and_Years.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-yellowjackets",
  "title": "Yellowjackets",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Drama",
   "Horror",
   "Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "Yellowjackets is an American thriller drama television series created by Ashley Lyle and Bart Nickerson for Showtime. The series follows two primary storylines: the first involves a group of teenagers as they strive to survive in the wilderness after their plane crashes in 1996, while the second takes place 25 years later and focuses on the survivors' attempts to piece their lives back together.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 7,
   "funny": 2,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "plane crash",
   "dual timeline",
   "secrets",
   "showtime"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Yellowjackets_%28TV_series_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-yoohoo-friends",
  "title": "YooHoo & Friends",
  "startYear": 2012,
  "endYear": null,
  "creator": null,
  "genres": [
   "Animation",
   "Comedy",
   "Adventure",
   "Family"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "YooHoo & Friends is an American-Canadian animated series produced by Toonzone Studios, and is loosely based on the toyline of the same name by Aurora World.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "animation",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f1/YooHoo_%26_Friends_2012_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 },
 {
  "id": "tv-you",
  "title": "You",
  "startYear": null,
  "endYear": null,
  "creator": null,
  "genres": [
   "Thriller",
   "Drama",
   "Psychological Thriller"
  ],
  "seasons": null,
  "episodes": null,
  "status": null,
  "network": null,
  "rating": "TV-MA",
  "description": "You is an American psychological thriller television series based on the books by Caroline Kepnes. It was developed by Greg Berlanti and Sera Gamble, produced by Berlanti Productions, Alloy Entertainment, and A+E Studios, in association with Warner Horizon Television. The first season, based on the novel You, premiered on Lifetime in September 2018.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 4,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 5,
   "epic": 2,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "stalker",
   "obsession",
   "netflix",
   "narration"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ed/You_%28tv_logo%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "core"
 },
 {
  "id": "tv-z-nation",
  "title": "Z Nation",
  "startYear": 2014,
  "endYear": null,
  "creator": "{{Plainlist|",
  "genres": [
   "Horror",
   "Comedy",
   "Action",
   "Drama"
  ],
  "seasons": null,
  "episodes": null,
  "status": "Running",
  "network": null,
  "rating": null,
  "description": "Z Nation is an American zombie apocalypse horror comedy-drama television series created by Karl Schaefer and Craig Engler that aired on Syfy from 2014 to 2018, and was produced by The Asylum. The first season of 13 episodes premiered on September 12, 2014. The series ran for five seasons and concluded on December 28, 2018. Z Nation was filmed in the Spokane, Washington area.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 6,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 2,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "horror",
   "comedy",
   "series"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/Z_nation_title.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
  "tier": "catalog"
 }
];
const TOP_SERIES = [
 {
  "id": "tv-breaking-bad",
  "note": "The ceiling for TV drama — a good man rotting in real time, engineered like a trap."
 },
 {
  "id": "tv-the-sopranos",
  "note": "The show that invented prestige TV; therapy, family and the mob in one long American sigh."
 },
 {
  "id": "tv-the-wire",
  "note": "A novel for television about a city and every institution failing it. The critics' consensus pick."
 },
 {
  "id": "tv-dark",
  "note": "Netflix's German time-travel labyrinth — the most carefully plotted series ever made."
 },
 {
  "id": "tv-better-call-saul",
  "note": "A prequel that outran its parent: funnier, sadder and more precise than almost anything since."
 },
 {
  "id": "tv-chernobyl",
  "note": "Five episodes, no fat — dread, lies and the cost of truth, told perfectly."
 },
 {
  "id": "tv-true-detective",
  "note": "Season one is a standalone occult-noir masterpiece; the anthology keeps swinging."
 },
 {
  "id": "tv-fargo",
  "note": "The Coens' snowbound morality plays, retold fresh every season and nearly always superb."
 },
 {
  "id": "tv-the-office",
  "note": "The most rewatchable comedy ever made — cringe on the surface, all heart underneath."
 },
 {
  "id": "tv-fleabag",
  "note": "Two perfect seasons: filthy, funny and quietly devastating in twelve half-hours."
 },
 {
  "id": "tv-succession",
  "note": "Shakespeare in boardrooms — the sharpest dialogue of the streaming era."
 },
 {
  "id": "tv-arcane",
  "note": "Animation as high art: a sisters-and-cities tragedy that looks like nothing else."
 },
 {
  "id": "tv-avatar-the-last-airbender",
  "note": "A kids' show with the structure and soul of a great epic novel."
 },
 {
  "id": "tv-shogun",
  "note": "Feudal Japan rendered at blockbuster scale with a novelist's patience."
 },
 {
  "id": "tv-the-last-of-us",
  "note": "The video-game adaptation that reset the bar — survival horror with a breaking heart."
 },
 {
  "id": "tv-severance",
  "note": "The workplace dystopia of the moment; every episode ends on a hook you can't shake."
 },
 {
  "id": "tv-mad-men",
  "note": "Sixty-nine episodes of beautiful, bruising character study in a changing America."
 },
 {
  "id": "tv-planet-earth-ii",
  "note": "Nature documentary at its absolute peak — the iguana vs. snakes sequence alone earns its place."
 },
 {
  "id": "tv-ted-lasso",
  "note": "Kindness as a competitive strategy; the feel-good show that actually earns it."
 },
 {
  "id": "tv-stranger-things",
  "note": "The streaming era's defining blockbuster series — Spielberg heart, King dread."
 }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { SHOWS, TOP_SERIES, SHOW_AXES }; }
