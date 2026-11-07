/* Movie Night — dataset. Each movie carries a 0-10 taste vector on ten axes:
   adrenaline, brainy, scary, funny, heartwarming, dark, romantic, epic, cozy, weird.
   Poster URLs come from the Wikipedia API (verified live at build time);
   an empty poster means the UI draws an elegant generated cover instead. */
const MOVIE_AXES = ["adrenaline", "brainy", "scary", "funny", "heartwarming", "dark", "romantic", "epic", "cozy", "weird"];
const MOVIES = [
 {
  "id": "mad-max-fury-road",
  "title": "Mad Max: Fury Road",
  "year": 2015,
  "director": "George Miller",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "In a desert wasteland, Max joins Furiosa's daring escape from a tyrant who hoards water.",
  "vector": {
   "adrenaline": 10,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 9,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "desert",
   "chase",
   "survival",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
 },
 {
  "id": "john-wick",
  "title": "John Wick",
  "year": 2014,
  "director": "Chad Stahelski",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "A retired hitman is pulled back into the underworld after gangsters take the last gift from his wife.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "revenge",
   "hitman",
   "underworld",
   "stylish"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
 },
 {
  "id": "john-wick-chapter-4",
  "title": "John Wick: Chapter 4",
  "year": 2023,
  "director": "Chad Stahelski",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 169,
  "rating": "R",
  "description": "John Wick fights through Osaka, Berlin and Paris for a path out of the High Table's grip.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "duels",
   "assassins",
   "globetrotting",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg"
 },
 {
  "id": "die-hard",
  "title": "Die Hard",
  "year": 1988,
  "director": "John McTiernan",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "An off-duty New York cop becomes the only obstacle between terrorists and a Los Angeles skyscraper full of hostages.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "hostages",
   "skyscraper",
   "christmas",
   "one-man-army"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg"
 },
 {
  "id": "terminator-2-judgment-day",
  "title": "Terminator 2: Judgment Day",
  "year": 1991,
  "director": "James Cameron",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "A reprogrammed cyborg protects a teenage John Connor from a liquid-metal assassin sent from the future.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "time-travel",
   "robots",
   "chase",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/Terminator_2-Judgment_Day.png"
 },
 {
  "id": "the-matrix",
  "title": "The Matrix",
  "year": 1999,
  "director": "The Wachowskis",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "A hacker learns reality is a simulation and joins a rebellion fighting the machines that enslave humanity.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "simulation",
   "martial-arts",
   "philosophy",
   "cyberpunk"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png"
 },
 {
  "id": "mission-impossible-fallout",
  "title": "Mission: Impossible \u2013 Fallout",
  "year": 2018,
  "director": "Christopher McQuarrie",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 147,
  "rating": "PG-13",
  "description": "Ethan Hunt races to recover stolen plutonium while a CIA assassin shadows his every move.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "spies",
   "stunts",
   "double-cross",
   "race-against-time"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
 },
 {
  "id": "top-gun-maverick",
  "title": "Top Gun: Maverick",
  "year": 2022,
  "director": "Joseph Kosinski",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Maverick trains a new squad of pilots for a mission that forces him to face his past.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "jets",
   "mentor",
   "rivalry",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg"
 },
 {
  "id": "the-dark-knight",
  "title": "The Dark Knight",
  "year": 2008,
  "director": "Christopher Nolan",
  "genres": [
   "Action",
   "Crime",
   "Drama"
  ],
  "runtime": 152,
  "rating": "PG-13",
  "description": "Batman pushes his limits as the Joker plunges Gotham into chaos and moral compromise.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "superhero",
   "chaos",
   "sacrifice",
   "gotham"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
 },
 {
  "id": "gladiator",
  "title": "Gladiator",
  "year": 2000,
  "director": "Ridley Scott",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 155,
  "rating": "R",
  "description": "A betrayed Roman general fights through the arena to challenge the emperor who murdered his family.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "rome",
   "arena",
   "revenge",
   "honor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
 },
 {
  "id": "braveheart",
  "title": "Braveheart",
  "year": 1995,
  "director": "Mel Gibson",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 178,
  "rating": "R",
  "description": "William Wallace leads Scotland's rebellion against English rule after a personal tragedy.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "scotland",
   "rebellion",
   "battles",
   "freedom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e1/Braveheart_film_poster.png"
 },
 {
  "id": "the-raid",
  "title": "The Raid",
  "year": 2011,
  "director": "Gareth Evans",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "A rookie SWAT team must fight floor by floor through a crime lord's fortified apartment block.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "martial-arts",
   "swat",
   "tower",
   "relentless"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg"
 },
 {
  "id": "oldboy",
  "title": "Oldboy",
  "year": 2003,
  "director": "Park Chan-wook",
  "genres": [
   "Action",
   "Thriller",
   "Drama"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "Imprisoned for 15 years without explanation, a man is released and given five days to find his captor.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "revenge",
   "mystery",
   "twisty",
   "corridor-fight"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
 },
 {
  "id": "crouching-tiger-hidden-dragon",
  "title": "Crouching Tiger, Hidden Dragon",
  "year": 2000,
  "director": "Ang Lee",
  "genres": [
   "Action",
   "Romance",
   "Drama"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "Two warriors pursue a stolen sword while a young noblewoman chafes against the life arranged for her.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 4,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "wuxia",
   "sword",
   "longing",
   "honor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/Crouching_Tiger%2C_Hidden_Dragon_%28Chinese_poster%29.png"
 },
 {
  "id": "casino-royale",
  "title": "Casino Royale",
  "year": 2006,
  "director": "Martin Campbell",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "A newly licensed James Bond stakes his mission on a high-stakes poker game against a banker to terrorists.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "spies",
   "poker",
   "origin-story",
   "chase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Casino_Royale_%282006_film_poster%29.jpg"
 },
 {
  "id": "skyfall",
  "title": "Skyfall",
  "year": 2012,
  "director": "Sam Mendes",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Bond's loyalty to M is tested when a vengeful former agent targets MI6 itself.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "spies",
   "london",
   "past",
   "siege"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Skyfall_poster.jpg"
 },
 {
  "id": "leon-the-professional",
  "title": "L\u00e9on: The Professional",
  "year": 1994,
  "director": "Luc Besson",
  "genres": [
   "Action",
   "Crime",
   "Drama"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A solitary hitman reluctantly shelters a young girl whose family was murdered by a corrupt agent.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "hitman",
   "found-family",
   "new-york",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Leon-poster.jpg"
 },
 {
  "id": "heat",
  "title": "Heat",
  "year": 1995,
  "director": "Michael Mann",
  "genres": [
   "Action",
   "Crime",
   "Drama"
  ],
  "runtime": 170,
  "rating": "R",
  "description": "A meticulous thief and the detective hunting him discover how alike their obsessions have made them.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "heist",
   "los-angeles",
   "cat-and-mouse",
   "professionalism"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/Heatposter.jpg"
 },
 {
  "id": "speed",
  "title": "Speed",
  "year": 1994,
  "director": "Jan de Bont",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A bomb on a city bus will detonate if it drops below 50 miles per hour.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "bus",
   "bomb",
   "rescue",
   "relentless"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Speed_movie_poster.jpg"
 },
 {
  "id": "the-bourne-identity",
  "title": "The Bourne Identity",
  "year": 2002,
  "director": "Doug Liman",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "An amnesiac pulled from the sea discovers lethal skills and assassins determined to erase him.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "amnesia",
   "spies",
   "europe",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/49/The_Bourne_Identity_%282002%29_US_poster.jpg"
 },
 {
  "id": "the-bourne-ultimatum",
  "title": "The Bourne Ultimatum",
  "year": 2007,
  "director": "Paul Greengrass",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "Jason Bourne follows the last clues to his identity while the agency hunts him across three continents.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "conspiracy",
   "chase",
   "identity",
   "rooftops"
  ],
  "poster": ""
 },
 {
  "id": "taken",
  "title": "Taken",
  "year": 2008,
  "director": "Pierre Morel",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 90,
  "rating": "PG-13",
  "description": "A former operative tears through Paris's underworld to rescue his kidnapped daughter.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "rescue",
   "paris",
   "father",
   "relentless"
  ],
  "poster": ""
 },
 {
  "id": "atomic-blonde",
  "title": "Atomic Blonde",
  "year": 2017,
  "director": "David Leitch",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A British spy navigates double agents and brutal fights in Berlin days before the Wall falls.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "cold-war",
   "berlin",
   "double-agent",
   "neon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b5/Atomic_Blonde_poster.jpg"
 },
 {
  "id": "logan",
  "title": "Logan",
  "year": 2017,
  "director": "James Mangold",
  "genres": [
   "Action",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "An aging Wolverine escorts a young mutant to safety in a world where their kind is nearly gone.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "western",
   "aging",
   "found-family",
   "last-stand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg"
 },
 {
  "id": "iron-man",
  "title": "Iron Man",
  "year": 2008,
  "director": "Jon Favreau",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "Weapons maker Tony Stark builds a powered suit to escape captivity and reckon with his legacy.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "origin-story",
   "invention",
   "redemption"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg"
 },
 {
  "id": "guardians-of-the-galaxy",
  "title": "Guardians of the Galaxy",
  "year": 2014,
  "director": "James Gunn",
  "genres": [
   "Action",
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 121,
  "rating": "PG-13",
  "description": "A thief, an assassin, a raccoon and a tree become unlikely defenders of a powerful orb.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "space",
   "found-family",
   "heist",
   "soundtrack"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg"
 },
 {
  "id": "deadpool",
  "title": "Deadpool",
  "year": 2016,
  "director": "Tim Miller",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "A wisecracking mercenary hunts the man whose experiment healed him and ruined his face.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "superhero",
   "revenge",
   "meta",
   "fourth-wall"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png"
 },
 {
  "id": "black-panther",
  "title": "Black Panther",
  "year": 2018,
  "director": "Ryan Coogler",
  "genres": [
   "Action",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "T'Challa returns to Wakanda to claim the throne and confront a challenger with a claim of his own.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "wakanda",
   "kingship",
   "legacy",
   "superhero"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg"
 },
 {
  "id": "avengers-endgame",
  "title": "Avengers: Endgame",
  "year": 2019,
  "director": "Anthony and Joe Russo",
  "genres": [
   "Action",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 181,
  "rating": "PG-13",
  "description": "The surviving Avengers attempt a desperate time heist to undo Thanos's snap.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "superhero",
   "time-heist",
   "finale",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
 },
 {
  "id": "2001-a-space-odyssey",
  "title": "2001: A Space Odyssey",
  "year": 1968,
  "director": "Stanley Kubrick",
  "genres": [
   "Sci-Fi"
  ],
  "runtime": 149,
  "rating": "G",
  "description": "A voyage to Jupiter after the discovery of a mysterious monolith becomes a meditation on human evolution.",
  "vector": {
   "adrenaline": 6,
   "brainy": 10,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 8
  },
  "keywords": [
   "space",
   "ai",
   "monolith",
   "existential"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png"
 },
 {
  "id": "alien",
  "title": "Alien",
  "year": 1979,
  "director": "Ridley Scott",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "The crew of a commercial spacecraft answers a distress call and brings a lethal organism aboard.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "space",
   "creature",
   "isolation",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg"
 },
 {
  "id": "aliens",
  "title": "Aliens",
  "year": 1986,
  "director": "James Cameron",
  "genres": [
   "Action",
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "Ripley returns to LV-426 with colonial marines and finds the colony overrun.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 4,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "marines",
   "siege",
   "motherhood",
   "creatures"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg"
 },
 {
  "id": "blade-runner",
  "title": "Blade Runner",
  "year": 1982,
  "director": "Ridley Scott",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A detective hunts four escaped replicants in a rain-soaked, decaying Los Angeles of 2019.",
  "vector": {
   "adrenaline": 6,
   "brainy": 10,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "replicants",
   "noir",
   "identity",
   "rain"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png"
 },
 {
  "id": "blade-runner-2049",
  "title": "Blade Runner 2049",
  "year": 2017,
  "director": "Denis Villeneuve",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 164,
  "rating": "R",
  "description": "A young blade runner unearths a secret that sends him searching for Rick Deckard.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "replicants",
   "mystery",
   "identity",
   "visuals"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png"
 },
 {
  "id": "arrival",
  "title": "Arrival",
  "year": 2016,
  "director": "Denis Villeneuve",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A linguist recruited to communicate with visitors discovers their language reshapes her sense of time.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "language",
   "first-contact",
   "time",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg"
 },
 {
  "id": "interstellar",
  "title": "Interstellar",
  "year": 2014,
  "director": "Christopher Nolan",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 169,
  "rating": "PG-13",
  "description": "Explorers cross a wormhole seeking a new home for a humanity running out of food and time.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "space",
   "fathers-and-daughters",
   "relativity",
   "survival"
  ],
  "poster": ""
 },
 {
  "id": "inception",
  "title": "Inception",
  "year": 2010,
  "director": "Christopher Nolan",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 148,
  "rating": "PG-13",
  "description": "A thief who steals from dreams is hired to plant an idea instead \u2014 the one crime considered impossible.",
  "vector": {
   "adrenaline": 8,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "dreams",
   "heist",
   "layers",
   "guilt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
 },
 {
  "id": "gravity",
  "title": "Gravity",
  "year": 2013,
  "director": "Alfonso Cuar\u00f3n",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 91,
  "rating": "PG-13",
  "description": "Debris strands two astronauts in orbit, fighting for a way back to Earth.",
  "vector": {
   "adrenaline": 8,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "space",
   "survival",
   "isolation",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg"
 },
 {
  "id": "the-martian",
  "title": "The Martian",
  "year": 2015,
  "director": "Ridley Scott",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "Stranded alone on Mars, Mark Watney sciences his way toward survival until rescue is possible.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "mars",
   "survival",
   "ingenuity",
   "humor"
  ],
  "poster": ""
 },
 {
  "id": "ex-machina",
  "title": "Ex Machina",
  "year": 2014,
  "director": "Alex Garland",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "A programmer is invited to evaluate a humanoid AI whose charm may be her most dangerous feature.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "ai",
   "isolation",
   "manipulation",
   "ethics"
  ],
  "poster": ""
 },
 {
  "id": "her",
  "title": "Her",
  "year": 2013,
  "director": "Spike Jonze",
  "genres": [
   "Romance",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "A lonely letter writer falls for an operating system with a luminous, evolving mind.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 6,
   "epic": 5,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "ai",
   "loneliness",
   "intimacy",
   "future"
  ],
  "poster": ""
 },
 {
  "id": "eternal-sunshine-of-the-spotless-mind",
  "title": "Eternal Sunshine of the Spotless Mind",
  "year": 2004,
  "director": "Michel Gondry",
  "genres": [
   "Romance",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "After his ex erases him from her memory, Joel undergoes the same procedure and fights it from inside.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 5,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "memory",
   "breakup",
   "nonlinear",
   "longing"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png"
 },
 {
  "id": "back-to-the-future",
  "title": "Back to the Future",
  "year": 1985,
  "director": "Robert Zemeckis",
  "genres": [
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 116,
  "rating": "PG",
  "description": "Marty McFly is stranded in 1955 and must reunite his young parents before he fades away.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 7
  },
  "keywords": [
   "time-travel",
   "delorean",
   "fifties",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg"
 },
 {
  "id": "star-wars",
  "title": "Star Wars",
  "year": 1977,
  "director": "George Lucas",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 121,
  "rating": "PG",
  "description": "A farm boy, a smuggler and a princess join a rebellion against a planet-killing battle station.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "space-opera",
   "rebellion",
   "mentor",
   "quest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
 },
 {
  "id": "the-empire-strikes-back",
  "title": "The Empire Strikes Back",
  "year": 1980,
  "director": "Irvin Kershner",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 124,
  "rating": "PG",
  "description": "The Rebellion scatters as Luke trains with Yoda and Vader closes in on his friends.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "space-opera",
   "training",
   "revelation",
   "siege"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg"
 },
 {
  "id": "dune",
  "title": "Dune",
  "year": 2021,
  "director": "Denis Villeneuve",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 155,
  "rating": "PG-13",
  "description": "Paul Atreides travels to the desert planet Arrakis as great houses go to war over spice.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 10,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "desert",
   "prophecy",
   "politics",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
 },
 {
  "id": "dune-part-two",
  "title": "Dune: Part Two",
  "year": 2024,
  "director": "Denis Villeneuve",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 166,
  "rating": "PG-13",
  "description": "Paul unites with the Fremen and walks a path between love, vengeance and holy war.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "desert",
   "fremen",
   "destiny",
   "war"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
 },
 {
  "id": "avatar",
  "title": "Avatar",
  "year": 2009,
  "director": "James Cameron",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 162,
  "rating": "PG-13",
  "description": "A paraplegic Marine inhabits a Na'vi avatar and is torn between his mission and Pandora's people.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 10,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "pandora",
   "colonialism",
   "nature",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
 },
 {
  "id": "district-9",
  "title": "District 9",
  "year": 2009,
  "director": "Neill Blomkamp",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "A bureaucrat overseeing an alien slum is infected by alien technology and becomes the hunted.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 2,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "aliens",
   "johannesburg",
   "transformation",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/District_nine_ver2.jpg"
 },
 {
  "id": "children-of-men",
  "title": "Children of Men",
  "year": 2006,
  "director": "Alfonso Cuar\u00f3n",
  "genres": [
   "Sci-Fi",
   "Drama",
   "Thriller"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "In a world without children for 18 years, a disillusioned man must escort a miraculously pregnant woman to safety.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "dystopia",
   "miracle",
   "escort",
   "long-takes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/Children_of_men_ver4.jpg"
 },
 {
  "id": "e-t-the-extra-terrestrial",
  "title": "E.T. the Extra-Terrestrial",
  "year": 1982,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Family",
   "Drama"
  ],
  "runtime": 115,
  "rating": "PG",
  "description": "A gentle alien stranded on Earth befriends a young boy who helps him phone home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "friendship",
   "childhood",
   "suburbs",
   "wonder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg"
 },
 {
  "id": "close-encounters-of-the-third-kind",
  "title": "Close Encounters of the Third Kind",
  "year": 1977,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 135,
  "rating": "PG",
  "description": "An ordinary man's UFO encounter becomes an obsession drawing him toward a government rendezvous.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "ufo",
   "obsession",
   "first-contact",
   "wonder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Close_Encounters_of_the_Third_Kind_%281977%29_theatrical_poster.jpg"
 },
 {
  "id": "jurassic-park",
  "title": "Jurassic Park",
  "year": 1993,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Thriller"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A dinosaur theme park's preview tour goes wrong when the power \u2014 and the fences \u2014 fail.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "dinosaurs",
   "island",
   "hubris",
   "wonder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
 },
 {
  "id": "gattaca",
  "title": "Gattaca",
  "year": 1997,
  "director": "Andrew Niccol",
  "genres": [
   "Sci-Fi",
   "Drama",
   "Thriller"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "In a future ruled by genetics, a man borrows another's DNA to reach the stars.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "genetics",
   "identity",
   "space",
   "underdog"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/Gattaca_poster.jpg"
 },
 {
  "id": "minority-report",
  "title": "Minority Report",
  "year": 2002,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 145,
  "rating": "PG-13",
  "description": "A cop who arrests murderers before they act is himself accused of a future killing.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "precogs",
   "conspiracy",
   "chase",
   "free-will"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Minority_Report_Poster.jpg"
 },
 {
  "id": "looper",
  "title": "Looper",
  "year": 2012,
  "director": "Rian Johnson",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A hitman who kills people sent back in time faces his final target: his older self.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 6
  },
  "keywords": [
   "time-travel",
   "hitman",
   "sacrifice",
   "farm"
  ],
  "poster": ""
 },
 {
  "id": "tenet",
  "title": "Tenet",
  "year": 2020,
  "director": "Christopher Nolan",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 150,
  "rating": "PG-13",
  "description": "An operative learns to fight a war with time inverted, moving backward through his own mission.",
  "vector": {
   "adrenaline": 8,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 5
  },
  "keywords": [
   "time-inversion",
   "spies",
   "puzzle",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg"
 },
 {
  "id": "everything-everywhere-all-at-once",
  "title": "Everything Everywhere All at Once",
  "year": 2022,
  "director": "Daniel Kwan and Daniel Scheinert",
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Drama"
  ],
  "runtime": 139,
  "rating": "R",
  "description": "A laundromat owner must channel versions of herself across the multiverse to save her family.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 9
  },
  "keywords": [
   "multiverse",
   "family",
   "absurd",
   "heartfelt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg"
 },
 {
  "id": "psycho",
  "title": "Psycho",
  "year": 1960,
  "director": "Alfred Hitchcock",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "A secretary on the run stops at a lonely motel run by the soft-spoken Norman Bates.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "motel",
   "shower",
   "mother",
   "twist"
  ],
  "poster": ""
 },
 {
  "id": "halloween",
  "title": "Halloween",
  "year": 1978,
  "director": "John Carpenter",
  "genres": [
   "Horror"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "An escaped killer returns to his hometown on Halloween night, stalking babysitter Laurie Strode.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "slasher",
   "babysitter",
   "masked-killer",
   "suburbs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg"
 },
 {
  "id": "a-nightmare-on-elm-street",
  "title": "A Nightmare on Elm Street",
  "year": 1984,
  "director": "Wes Craven",
  "genres": [
   "Horror"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "A burned killer invades teenagers' dreams, where dying means dying for real.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "dreams",
   "slasher",
   "freddy",
   "sleep"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/A_Nightmare_on_Elm_Street_%281984%29_theatrical_poster.jpg"
 },
 {
  "id": "the-exorcist",
  "title": "The Exorcist",
  "year": 1973,
  "director": "William Friedkin",
  "genres": [
   "Horror"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Two priests battle to save a young girl possessed by an ancient entity.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "possession",
   "faith",
   "mother",
   "georgetown"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg"
 },
 {
  "id": "the-shining",
  "title": "The Shining",
  "year": 1980,
  "director": "Stanley Kubrick",
  "genres": [
   "Horror"
  ],
  "runtime": 146,
  "rating": "R",
  "description": "A writer's isolation at an empty hotel unravels into madness as his son sees what the building hides.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "hotel",
   "isolation",
   "madness",
   "twins"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg"
 },
 {
  "id": "the-thing",
  "title": "The Thing",
  "year": 1982,
  "director": "John Carpenter",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "An Antarctic crew discovers an organism that imitates its victims perfectly.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "antarctica",
   "paranoia",
   "imitation",
   "practical-effects"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Thing_%281982_film%29.png"
 },
 {
  "id": "scream",
  "title": "Scream",
  "year": 1996,
  "director": "Wes Craven",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "A masked killer who loves horror movies stalks a town still haunted by a murder a year before.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 7
  },
  "keywords": [
   "slasher",
   "meta",
   "ghostface",
   "whodunit"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Scream_%281996_film%29_poster.jpg"
 },
 {
  "id": "the-ring",
  "title": "The Ring",
  "year": 2002,
  "director": "Gore Verbinski",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "A journalist has seven days to solve a videotape that kills everyone who watches it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "curse",
   "videotape",
   "investigation",
   "well"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/Theringpostere.jpg"
 },
 {
  "id": "it-follows",
  "title": "It Follows",
  "year": 2014,
  "director": "David Robert Mitchell",
  "genres": [
   "Horror"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "After a date, a young woman is pursued by a shape-shifting entity only she can see.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "curse",
   "dread",
   "suburbs",
   "relentless"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/It_Follows_%28poster%29.jpg"
 },
 {
  "id": "hereditary",
  "title": "Hereditary",
  "year": 2018,
  "director": "Ari Aster",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "A family unravels after its secretive grandmother's death exposes a sinister inheritance.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "grief",
   "family",
   "ritual",
   "dread"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"
 },
 {
  "id": "get-out",
  "title": "Get Out",
  "year": 2017,
  "director": "Jordan Peele",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Chris's visit to his girlfriend's parents' estate turns from awkward to terrifying.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "hypnosis",
   "race",
   "estate",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
 },
 {
  "id": "us",
  "title": "Us",
  "year": 2019,
  "director": "Jordan Peele",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A family's beach vacation is invaded by their own doppelg\u00e4ngers in red jumpsuits.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "doppelgangers",
   "invasion",
   "tethered",
   "mirrors"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"
 },
 {
  "id": "a-quiet-place",
  "title": "A Quiet Place",
  "year": 2018,
  "director": "John Krasinski",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 90,
  "rating": "PG-13",
  "description": "A family survives in silence, hunted by creatures that track every sound.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "silence",
   "family",
   "creatures",
   "farm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png"
 },
 {
  "id": "midsommar",
  "title": "Midsommar",
  "year": 2019,
  "director": "Ari Aster",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 148,
  "rating": "R",
  "description": "A grieving couple's trip to a Swedish midsummer festival slides into ritual horror in broad daylight.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "cult",
   "sweden",
   "grief",
   "daylight"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Midsommar_%282019_film_poster%29.png"
 },
 {
  "id": "the-babadook",
  "title": "The Babadook",
  "year": 2014,
  "director": "Jennifer Kent",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 94,
  "rating": "Not Rated",
  "description": "A widow and her son are haunted by a storybook monster that feeds on her grief.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 6,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "grief",
   "storybook",
   "motherhood",
   "basement"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/The-Babadook-Poster.jpg"
 },
 {
  "id": "it",
  "title": "It",
  "year": 2017,
  "director": "Andy Muschietti",
  "genres": [
   "Horror"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "Seven outcast kids in Derry confront a clown-shaped evil that feeds on fear.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 5
  },
  "keywords": [
   "clown",
   "friendship",
   "derry",
   "coming-of-age"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
 },
 {
  "id": "the-conjuring",
  "title": "The Conjuring",
  "year": 2013,
  "director": "James Wan",
  "genres": [
   "Horror"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Paranormal investigators Ed and Lorraine Warren face their darkest case at a farmhouse in 1973.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "haunting",
   "warrens",
   "farmhouse",
   "exorcism"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg"
 },
 {
  "id": "insidious",
  "title": "Insidious",
  "year": 2010,
  "director": "James Wan",
  "genres": [
   "Horror"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "A boy slips into a coma and becomes a doorway for spirits from a realm called The Further.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "astral-projection",
   "coma",
   "demons",
   "haunting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg"
 },
 {
  "id": "barbarian",
  "title": "Barbarian",
  "year": 2022,
  "director": "Zach Cregger",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A double-booked rental house in Detroit hides something far worse in its basement.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "rental",
   "basement",
   "detroit",
   "twists"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Barbarian_2022_film_poster.png"
 },
 {
  "id": "talk-to-me",
  "title": "Talk to Me",
  "year": 2022,
  "director": "Danny and Michael Philippou",
  "genres": [
   "Horror"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Teens use an embalmed hand to summon spirits for ninety seconds at a time \u2014 until one session runs long.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 10,
   "funny": 0,
   "heartwarming": 1,
   "dark": 10,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "possession",
   "party-game",
   "grief",
   "australia"
  ],
  "poster": ""
 },
 {
  "id": "the-witch",
  "title": "The Witch",
  "year": 2015,
  "director": "Robert Eggers",
  "genres": [
   "Horror"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A Puritan family banished to the edge of a 1630s forest turns on itself as evil closes in.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "puritan",
   "forest",
   "goat",
   "paranoia"
  ],
  "poster": ""
 },
 {
  "id": "rosemary-s-baby",
  "title": "Rosemary's Baby",
  "year": 1968,
  "director": "Roman Polanski",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "A pregnant woman suspects her kindly neighbors have designs on her unborn child.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 6,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "pregnancy",
   "neighbors",
   "conspiracy",
   "new-york"
  ],
  "poster": ""
 },
 {
  "id": "jaws",
  "title": "Jaws",
  "year": 1975,
  "director": "Steven Spielberg",
  "genres": [
   "Horror",
   "Thriller",
   "Adventure"
  ],
  "runtime": 124,
  "rating": "PG",
  "description": "A police chief, a scientist and a shark hunter take to the sea after a great white terrorizes a beach town.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "shark",
   "beach-town",
   "boat",
   "summer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/40/Jaws_movie_poster.jpg"
 },
 {
  "id": "28-days-later",
  "title": "28 Days Later",
  "year": 2002,
  "director": "Danny Boyle",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A man wakes from a coma to a Britain emptied by a rage virus.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "virus",
   "london",
   "survivors",
   "infected"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e4/28_days_later.jpg"
 },
 {
  "id": "train-to-busan",
  "title": "Train to Busan",
  "year": 2016,
  "director": "Yeon Sang-ho",
  "genres": [
   "Horror",
   "Action",
   "Drama"
  ],
  "runtime": 118,
  "rating": "Not Rated",
  "description": "Passengers on a speeding train fight a zombie outbreak and their own selfishness.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 5,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "zombies",
   "train",
   "father-daughter",
   "korea"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg"
 },
 {
  "id": "let-the-right-one-in",
  "title": "Let the Right One In",
  "year": 2008,
  "director": "Tomas Alfredson",
  "genres": [
   "Horror",
   "Romance",
   "Drama"
  ],
  "runtime": 114,
  "rating": "R",
  "description": "A bullied boy befriends the strange girl next door, who only comes out at night.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 5,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 3,
   "epic": 4,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "vampire",
   "friendship",
   "snow",
   "bullying"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/Let_the_Right_One_In_%28Swedish%29.jpg"
 },
 {
  "id": "se7en",
  "title": "Se7en",
  "year": 1995,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Crime"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "Two detectives hunt a killer who stages murders around the seven deadly sins.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 5,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "serial-killer",
   "rain",
   "sins",
   "ending"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg"
 },
 {
  "id": "the-silence-of-the-lambs",
  "title": "The Silence of the Lambs",
  "year": 1991,
  "director": "Jonathan Demme",
  "genres": [
   "Thriller",
   "Horror",
   "Crime"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A young FBI trainee seeks Hannibal Lecter's insight to catch another killer before he strikes again.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 6,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "fbi",
   "lecter",
   "serial-killer",
   "interrogation"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"
 },
 {
  "id": "zodiac",
  "title": "Zodiac",
  "year": 2007,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 157,
  "rating": "R",
  "description": "A cartoonist's obsession with the Zodiac killer consumes his life as the case goes cold.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "true-crime",
   "obsession",
   "cipher",
   "san-francisco"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3a/Zodiac2007Poster.jpg"
 },
 {
  "id": "gone-girl",
  "title": "Gone Girl",
  "year": 2014,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 149,
  "rating": "R",
  "description": "When Amy Dunne vanishes on her anniversary, her husband becomes the prime suspect \u2014 and the story's least reliable narrator.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 4,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "marriage",
   "media",
   "missing-person",
   "twists"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg"
 },
 {
  "id": "shutter-island",
  "title": "Shutter Island",
  "year": 2010,
  "director": "Martin Scorsese",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "Two marshals investigate a disappearance at a hospital for the criminally insane as a storm cuts off the island.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 4,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "asylum",
   "storm",
   "delusion",
   "investigation"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg"
 },
 {
  "id": "prisoners",
  "title": "Prisoners",
  "year": 2013,
  "director": "Denis Villeneuve",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 153,
  "rating": "R",
  "description": "When his daughter vanishes, a father takes justice into his own hands while a detective chases every lead.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "kidnapping",
   "vigilante",
   "suburbs",
   "morality"
  ],
  "poster": ""
 },
 {
  "id": "sicario",
  "title": "Sicario",
  "year": 2015,
  "director": "Denis Villeneuve",
  "genres": [
   "Thriller",
   "Action",
   "Crime"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "An idealistic FBI agent joins a shadowy task force operating along the border's moral edge.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "cartel",
   "border",
   "task-force",
   "ambiguity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Sicario_poster.jpg"
 },
 {
  "id": "nightcrawler",
  "title": "Nightcrawler",
  "year": 2014,
  "director": "Dan Gilroy",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A driven young man muscles into L.A.'s freelance crime journalism, blurring the line between filming and staging disaster.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "media",
   "night",
   "ambition",
   "los-angeles"
  ],
  "poster": ""
 },
 {
  "id": "no-country-for-old-men",
  "title": "No Country for Old Men",
  "year": 2007,
  "director": "Joel and Ethan Coen",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A hunter who takes drug money is pursued across Texas by a killer who flips a coin for lives.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "coin-flip",
   "texas",
   "fate",
   "manhunt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg"
 },
 {
  "id": "parasite",
  "title": "Parasite",
  "year": 2019,
  "director": "Bong Joon Ho",
  "genres": [
   "Thriller",
   "Drama",
   "Comedy"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "A poor family schemes its way into a wealthy household's employ, one forged credential at a time.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 3,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "class",
   "infiltration",
   "house",
   "twists"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
 },
 {
  "id": "knives-out",
  "title": "Knives Out",
  "year": 2019,
  "director": "Rian Johnson",
  "genres": [
   "Thriller",
   "Comedy",
   "Crime"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "A famed detective untangles the death of a novelist whose family is a nest of lies and entitlement.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 3,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "whodunit",
   "family",
   "mansion",
   "inheritance"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1f/Knives_Out_poster.jpeg"
 },
 {
  "id": "the-prestige",
  "title": "The Prestige",
  "year": 2006,
  "director": "Christopher Nolan",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Two rival magicians sacrifice everything to out-illusion each other in Victorian London.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 4,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "magic",
   "rivalry",
   "obsession",
   "secrets"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg"
 },
 {
  "id": "memento",
  "title": "Memento",
  "year": 2000,
  "director": "Christopher Nolan",
  "genres": [
   "Thriller"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "An amnesiac hunts his wife's killer using Polaroids and tattoos, in a story told backwards.",
  "vector": {
   "adrenaline": 7,
   "brainy": 10,
   "scary": 6,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "amnesia",
   "nonlinear",
   "tattoos",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg"
 },
 {
  "id": "vertigo",
  "title": "Vertigo",
  "year": 1958,
  "director": "Alfred Hitchcock",
  "genres": [
   "Thriller",
   "Romance"
  ],
  "runtime": 128,
  "rating": "PG",
  "description": "An acrophobic detective hired to follow a friend's wife becomes obsessed with the woman he was meant to save.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "obsession",
   "san-francisco",
   "heights",
   "identity"
  ],
  "poster": ""
 },
 {
  "id": "rear-window",
  "title": "Rear Window",
  "year": 1954,
  "director": "Alfred Hitchcock",
  "genres": [
   "Thriller"
  ],
  "runtime": 112,
  "rating": "PG",
  "description": "A photographer confined to a wheelchair spies on his neighbors and becomes convinced one committed murder.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 6,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "voyeurism",
   "apartment",
   "suspense",
   "courtyard"
  ],
  "poster": ""
 },
 {
  "id": "north-by-northwest",
  "title": "North by Northwest",
  "year": 1959,
  "director": "Alfred Hitchcock",
  "genres": [
   "Thriller",
   "Action"
  ],
  "runtime": 136,
  "rating": "Not Rated",
  "description": "An ad man mistaken for a spy is chased across America by killers and the government alike.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "mistaken-identity",
   "chase",
   "crop-duster",
   "mount-rushmore"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/83/Northbynorthwest1.jpg"
 },
 {
  "id": "the-fugitive",
  "title": "The Fugitive",
  "year": 1993,
  "director": "Andrew Davis",
  "genres": [
   "Thriller",
   "Action"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Wrongly convicted of his wife's murder, Dr. Kimble escapes and hunts the one-armed man.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "manhunt",
   "marshal",
   "one-armed-man",
   "train-crash"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/The_Fugitive_movie.jpg"
 },
 {
  "id": "uncut-gems",
  "title": "Uncut Gems",
  "year": 2019,
  "director": "Josh and Benny Safdie",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "A New York jeweler juggles debts, bets and a rare opal in one escalating week of bad decisions.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "gambling",
   "new-york",
   "anxiety",
   "opal"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Uncut_Gems_poster.jpg"
 },
 {
  "id": "the-handmaiden",
  "title": "The Handmaiden",
  "year": 2016,
  "director": "Park Chan-wook",
  "genres": [
   "Thriller",
   "Romance",
   "Drama"
  ],
  "runtime": 145,
  "rating": "Not Rated",
  "description": "A pickpocket hired to serve a Japanese heiress becomes the pivot of a con with layers inside layers.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 4,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "con",
   "heiress",
   "korea",
   "desire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Handmaiden_film.png"
 },
 {
  "id": "whiplash",
  "title": "Whiplash",
  "year": 2014,
  "director": "Damien Chazelle",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "A young drummer endures a ruthless instructor who believes greatness is forged through cruelty.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "drums",
   "mentor",
   "obsession",
   "jazz"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg"
 },
 {
  "id": "the-shawshank-redemption",
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 142,
  "rating": "R",
  "description": "Imprisoned for a crime he says he didn't commit, Andy Dufresne builds a life of hope inside Shawshank.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 7,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "prison",
   "hope",
   "friendship",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
 },
 {
  "id": "the-godfather",
  "title": "The Godfather",
  "year": 1972,
  "director": "Francis Ford Coppola",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 175,
  "rating": "R",
  "description": "The aging head of a crime family transfers power as his reluctant youngest son is drawn into the business.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "mafia",
   "family",
   "power",
   "wedding"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
 },
 {
  "id": "the-godfather-part-ii",
  "title": "The Godfather Part II",
  "year": 1974,
  "director": "Francis Ford Coppola",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 202,
  "rating": "R",
  "description": "Michael consolidates power in the present while young Vito's rise unfolds in the past.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "mafia",
   "prequel",
   "betrayal",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg"
 },
 {
  "id": "schindler-s-list",
  "title": "Schindler's List",
  "year": 1993,
  "director": "Steven Spielberg",
  "genres": [
   "Drama"
  ],
  "runtime": 195,
  "rating": "R",
  "description": "A profiteering industrialist becomes an unlikely savior to the Jewish workers in his factory.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "holocaust",
   "rescue",
   "conscience",
   "krakow"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
 },
 {
  "id": "12-angry-men",
  "title": "12 Angry Men",
  "year": 1957,
  "director": "Sidney Lumet",
  "genres": [
   "Drama"
  ],
  "runtime": 96,
  "rating": "Not Rated",
  "description": "One juror stands between a teenage defendant and a unanimous guilty verdict.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "jury",
   "doubt",
   "one-room",
   "justice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"
 },
 {
  "id": "one-flew-over-the-cuckoo-s-nest",
  "title": "One Flew Over the Cuckoo's Nest",
  "year": 1975,
  "director": "Milo\u0161 Forman",
  "genres": [
   "Drama"
  ],
  "runtime": 133,
  "rating": "R",
  "description": "A convict faking madness rallies the patients of a psychiatric ward against its iron-fisted nurse.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "asylum",
   "rebellion",
   "nurse-ratched",
   "freedom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg"
 },
 {
  "id": "forrest-gump",
  "title": "Forrest Gump",
  "year": 1994,
  "director": "Robert Zemeckis",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 142,
  "rating": "PG-13",
  "description": "A kind-hearted Alabaman drifts through decades of American history, touching every life he meets.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "americana",
   "innocence",
   "jenny",
   "running"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
 },
 {
  "id": "the-green-mile",
  "title": "The Green Mile",
  "year": 1999,
  "director": "Frank Darabont",
  "genres": [
   "Drama"
  ],
  "runtime": 189,
  "rating": "R",
  "description": "Death-row guards witness miracles around a gentle prisoner accused of a terrible crime.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "prison",
   "miracles",
   "death-row",
   "compassion"
  ],
  "poster": ""
 },
 {
  "id": "good-will-hunting",
  "title": "Good Will Hunting",
  "year": 1997,
  "director": "Gus Van Sant",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "A janitor with a genius mind resists every attempt to make him use it, until a therapist matches his stubbornness.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "math",
   "therapy",
   "boston",
   "potential"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png"
 },
 {
  "id": "dead-poets-society",
  "title": "Dead Poets Society",
  "year": 1989,
  "director": "Peter Weir",
  "genres": [
   "Drama"
  ],
  "runtime": 128,
  "rating": "PG",
  "description": "An unorthodox teacher inspires prep-school boys to seize the day through poetry.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "poetry",
   "boarding-school",
   "mentor",
   "conformity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Dead_poets_society.png"
 },
 {
  "id": "the-social-network",
  "title": "The Social Network",
  "year": 2010,
  "director": "David Fincher",
  "genres": [
   "Drama"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "Facebook's founding becomes a story of friendship, betrayal and depositions.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "facebook",
   "harvard",
   "betrayal",
   "ambition"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"
 },
 {
  "id": "there-will-be-blood",
  "title": "There Will Be Blood",
  "year": 2007,
  "director": "Paul Thomas Anderson",
  "genres": [
   "Drama"
  ],
  "runtime": 158,
  "rating": "R",
  "description": "An oil prospector's hunger for wealth corrodes every bond, including the one with his son.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "oil",
   "greed",
   "frontier",
   "preacher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/There_Will_Be_Blood_Poster.jpg"
 },
 {
  "id": "moonlight",
  "title": "Moonlight",
  "year": 2016,
  "director": "Barry Jenkins",
  "genres": [
   "Drama"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "A portrait of Chiron across three chapters of life in Miami, searching for tenderness and self.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 9,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "coming-of-age",
   "miami",
   "identity",
   "three-chapters"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"
 },
 {
  "id": "the-king-s-speech",
  "title": "The King's Speech",
  "year": 2010,
  "director": "Tom Hooper",
  "genres": [
   "Drama"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A king who stammers works with an unconventional speech therapist as war approaches.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 9,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "monarchy",
   "stammer",
   "friendship",
   "radio"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/The_King%27s_Speech_poster.jpg"
 },
 {
  "id": "a-beautiful-mind",
  "title": "A Beautiful Mind",
  "year": 2001,
  "director": "Ron Howard",
  "genres": [
   "Drama"
  ],
  "runtime": 135,
  "rating": "PG-13",
  "description": "Mathematician John Nash's brilliance is shadowed by a conspiracy only he can see.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "math",
   "schizophrenia",
   "princeton",
   "love"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg"
 },
 {
  "id": "rocky",
  "title": "Rocky",
  "year": 1976,
  "director": "John G. Avildsen",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 120,
  "rating": "PG",
  "description": "A small-time Philadelphia boxer gets one shot at the heavyweight championship \u2014 and at self-respect.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "boxing",
   "underdog",
   "philadelphia",
   "training"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg"
 },
 {
  "id": "the-breakfast-club",
  "title": "The Breakfast Club",
  "year": 1985,
  "director": "John Hughes",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "Five mismatched students spend a Saturday detention discovering how much they share.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "detention",
   "high-school",
   "labels",
   "saturday"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/The_Breakfast_Club_poster.jpg"
 },
 {
  "id": "stand-by-me",
  "title": "Stand by Me",
  "year": 1986,
  "director": "Rob Reiner",
  "genres": [
   "Drama"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "Four friends hike to find a missing boy's body and cross the border out of childhood.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 9,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "friendship",
   "railroad",
   "summer",
   "growing-up"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Stand_By_Me_1986_American_Theatrical_Release_Poster.jpg"
 },
 {
  "id": "little-women",
  "title": "Little Women",
  "year": 2019,
  "director": "Greta Gerwig",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 135,
  "rating": "PG",
  "description": "The March sisters chase art, love and independence in post\u2013Civil War Massachusetts.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "sisters",
   "writing",
   "ambition",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Little_Women_%282019_film%29.jpeg"
 },
 {
  "id": "lady-bird",
  "title": "Lady Bird",
  "year": 2017,
  "director": "Greta Gerwig",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A Sacramento senior yearns for the East Coast while clashing with the mother who wants her close.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 5,
   "weird": 3
  },
  "keywords": [
   "mother-daughter",
   "sacramento",
   "senior-year",
   "ambition"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/61/Lady_Bird_poster.jpeg"
 },
 {
  "id": "call-me-by-your-name",
  "title": "Call Me by Your Name",
  "year": 2017,
  "director": "Luca Guadagnino",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "One Italian summer, a teenager falls for his father's research assistant.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "italy",
   "summer",
   "first-love",
   "peaches"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/CallMeByYourName2017.png"
 },
 {
  "id": "past-lives",
  "title": "Past Lives",
  "year": 2023,
  "director": "Celine Song",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "Childhood sweethearts reunite in New York decades after one emigrated from Seoul.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "reunion",
   "seoul",
   "new-york",
   "fate"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/Past_Lives_film_poster.png"
 },
 {
  "id": "the-holdovers",
  "title": "The Holdovers",
  "year": 2023,
  "director": "Alexander Payne",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 133,
  "rating": "R",
  "description": "A cranky teacher, a grieving cook and a stranded student spend a snowed-in Christmas break together.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 10,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 9,
   "weird": 4
  },
  "keywords": [
   "boarding-school",
   "christmas",
   "found-family",
   "1970s"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/62/Holdovers_film_poster.jpg"
 },
 {
  "id": "oppenheimer",
  "title": "Oppenheimer",
  "year": 2023,
  "director": "Christopher Nolan",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 180,
  "rating": "R",
  "description": "The triumph and fallout of J. Robert Oppenheimer, the man who led the Manhattan Project.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "atomic-bomb",
   "manhattan-project",
   "hearing",
   "ambition"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
 },
 {
  "id": "coda",
  "title": "CODA",
  "year": 2021,
  "director": "Sian Heder",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 111,
  "rating": "PG-13",
  "description": "The only hearing member of a deaf family discovers a gift for singing that pulls her toward a different life.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "deaf-family",
   "choir",
   "fishing",
   "coming-of-age"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Coda_poster.jpeg"
 },
 {
  "id": "groundhog-day",
  "title": "Groundhog Day",
  "year": 1993,
  "director": "Harold Ramis",
  "genres": [
   "Comedy",
   "Romance",
   "Fantasy"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "A cynical weatherman relives the same February day until he becomes someone worth spending it with.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 5,
   "epic": 4,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "time-loop",
   "small-town",
   "redemption",
   "february"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Groundhog_Day_%28movie_poster%29.jpg"
 },
 {
  "id": "superbad",
  "title": "Superbad",
  "year": 2007,
  "director": "Greg Mottola",
  "genres": [
   "Comedy"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "Two inseparable friends chase one legendary party before graduation splits them apart.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "high-school",
   "party",
   "friendship",
   "fake-id"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png"
 },
 {
  "id": "anchorman-the-legend-of-ron-burgundy",
  "title": "Anchorman: The Legend of Ron Burgundy",
  "year": 2004,
  "director": "Adam McKay",
  "genres": [
   "Comedy"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "San Diego's top newsman is threatened by an ambitious newswoman and his own magnificent ego.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "newsroom",
   "seventies",
   "rivalry",
   "jazz-flute"
  ],
  "poster": ""
 },
 {
  "id": "the-big-lebowski",
  "title": "The Big Lebowski",
  "year": 1998,
  "director": "Joel Coen",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "The Dude just wanted his rug back; mistaken identity drags him into a kidnapping plot.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 7,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 4
  },
  "keywords": [
   "dude",
   "bowling",
   "rug",
   "slacker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg"
 },
 {
  "id": "monty-python-and-the-holy-grail",
  "title": "Monty Python and the Holy Grail",
  "year": 1975,
  "director": "Terry Gilliam and Terry Jones",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "King Arthur's quest for the Grail, derailed by killer rabbits, taunting Frenchmen and budget cuts.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 5,
   "cozy": 6,
   "weird": 8
  },
  "keywords": [
   "arthur",
   "absurd",
   "british",
   "quest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Monty-Python-1975-poster.png"
 },
 {
  "id": "airplane",
  "title": "Airplane!",
  "year": 1980,
  "director": "Jim Abrahams, David Zucker and Jerry Zucker",
  "genres": [
   "Comedy"
  ],
  "runtime": 88,
  "rating": "PG",
  "description": "A traumatized ex-pilot must land a passenger jet after food poisoning fells the crew.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "parody",
   "airplane",
   "deadpan",
   "disaster"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/Airplane%21_%281980_film%29.jpg"
 },
 {
  "id": "ghostbusters",
  "title": "Ghostbusters",
  "year": 1984,
  "director": "Ivan Reitman",
  "genres": [
   "Comedy",
   "Sci-Fi",
   "Fantasy"
  ],
  "runtime": 105,
  "rating": "PG",
  "description": "Three fired parapsychologists start a ghost-removal business just as New York's hauntings explode.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "ghosts",
   "new-york",
   "start-up",
   "marshmallow-man"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png"
 },
 {
  "id": "ferris-bueller-s-day-off",
  "title": "Ferris Bueller's Day Off",
  "year": 1986,
  "director": "John Hughes",
  "genres": [
   "Comedy"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "Ferris plays hooky across Chicago while his principal wages a doomed campaign to catch him.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "hooky",
   "chicago",
   "parade",
   "fourth-wall"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg"
 },
 {
  "id": "home-alone",
  "title": "Home Alone",
  "year": 1990,
  "director": "Chris Columbus",
  "genres": [
   "Comedy",
   "Family"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "An eight-year-old left behind at Christmas booby-traps his house against two hapless burglars.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 3,
   "cozy": 10,
   "weird": 4
  },
  "keywords": [
   "christmas",
   "traps",
   "burglars",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg"
 },
 {
  "id": "mrs-doubtfire",
  "title": "Mrs. Doubtfire",
  "year": 1993,
  "director": "Chris Columbus",
  "genres": [
   "Comedy",
   "Drama",
   "Family"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "A divorced dad disguises himself as a British nanny to stay in his children's lives.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 2,
   "epic": 4,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "divorce",
   "disguise",
   "nanny",
   "fatherhood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/Mrs_Doubtfire.jpg"
 },
 {
  "id": "dumb-and-dumber",
  "title": "Dumb and Dumber",
  "year": 1994,
  "director": "Peter Farrelly",
  "genres": [
   "Comedy"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "Two sweet-natured dimwits road-trip to Aspen to return a briefcase full of ransom money.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "road-trip",
   "aspen",
   "friendship",
   "briefcase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/Dumbanddumber.jpg"
 },
 {
  "id": "elf",
  "title": "Elf",
  "year": 2003,
  "director": "Jon Favreau",
  "genres": [
   "Comedy",
   "Family",
   "Fantasy"
  ],
  "runtime": 97,
  "rating": "PG",
  "description": "A human raised by Santa's elves travels to New York to find his father \u2014 and spread Christmas cheer.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 3,
   "epic": 5,
   "cozy": 9,
   "weird": 5
  },
  "keywords": [
   "christmas",
   "new-york",
   "elf",
   "father-son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/Elf_movie.jpg"
 },
 {
  "id": "mean-girls",
  "title": "Mean Girls",
  "year": 2004,
  "director": "Mark Waters",
  "genres": [
   "Comedy"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A homeschooled newcomer infiltrates the Plastics and learns the jungle rules of high school.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 10,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "high-school",
   "plastics",
   "burn-book",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png"
 },
 {
  "id": "legally-blonde",
  "title": "Legally Blonde",
  "year": 2001,
  "director": "Robert Luketic",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 96,
  "rating": "PG-13",
  "description": "Elle Woods follows her ex to Harvard Law to win him back \u2014 and discovers she's the one worth winning.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 5,
   "epic": 2,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "harvard",
   "law-school",
   "underestimated",
   "pink"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png"
 },
 {
  "id": "school-of-rock",
  "title": "School of Rock",
  "year": 2003,
  "director": "Richard Linklater",
  "genres": [
   "Comedy",
   "Family"
  ],
  "runtime": 109,
  "rating": "PG-13",
  "description": "A failed rocker posing as a substitute teacher turns his class into a battle-of-the-bands act.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 3,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "rock",
   "teacher",
   "battle-of-the-bands",
   "kids"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg"
 },
 {
  "id": "hot-fuzz",
  "title": "Hot Fuzz",
  "year": 2007,
  "director": "Edgar Wright",
  "genres": [
   "Comedy",
   "Action",
   "Crime"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "London's best cop is exiled to a sleepy village where the accident rate is suspiciously fatal.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "village",
   "buddy-cop",
   "conspiracy",
   "action-parody"
  ],
  "poster": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c9/HotFuzzUKposter.jpg/330px-HotFuzzUKposter.jpg"
 },
 {
  "id": "shaun-of-the-dead",
  "title": "Shaun of the Dead",
  "year": 2004,
  "director": "Edgar Wright",
  "genres": [
   "Comedy",
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A slacker decides to win back his girlfriend and survive the zombie apocalypse from his local pub.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 4,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 2,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "zombies",
   "pub",
   "slacker",
   "london"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8d/Shaun_of_the_Dead_film_poster.jpg"
 },
 {
  "id": "the-grand-budapest-hotel",
  "title": "The Grand Budapest Hotel",
  "year": 2014,
  "director": "Wes Anderson",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A legendary concierge and his prot\u00e9g\u00e9 are framed for murder amid a battle over a family fortune.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 4
  },
  "keywords": [
   "hotel",
   "concierge",
   "capers",
   "storybook"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png"
 },
 {
  "id": "jojo-rabbit",
  "title": "Jojo Rabbit",
  "year": 2019,
  "director": "Taika Waititi",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 108,
  "rating": "PG-13",
  "description": "A Hitler Youth boy whose imaginary friend is Hitler discovers his mother is hiding a Jewish girl.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "satire",
   "imaginary-friend",
   "war",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Jojo_Rabbit_%282019%29_poster.jpg"
 },
 {
  "id": "booksmart",
  "title": "Booksmart",
  "year": 2019,
  "director": "Olivia Wilde",
  "genres": [
   "Comedy"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "Two overachievers try to cram four years of missed parties into one graduation-eve night.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 3,
   "epic": 2,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "graduation",
   "friendship",
   "party",
   "one-night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/Booksmart_%282019_film_poster%29.png"
 },
 {
  "id": "palm-springs",
  "title": "Palm Springs",
  "year": 2020,
  "director": "Max Barbakow",
  "genres": [
   "Comedy",
   "Romance",
   "Sci-Fi"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "Two wedding guests stuck in the same repeating day fall for each other between resets.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 6,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 4,
   "epic": 4,
   "cozy": 5,
   "weird": 6
  },
  "keywords": [
   "time-loop",
   "wedding",
   "desert",
   "romance"
  ],
  "poster": ""
 },
 {
  "id": "the-nice-guys",
  "title": "The Nice Guys",
  "year": 2016,
  "director": "Shane Black",
  "genres": [
   "Comedy",
   "Crime",
   "Action"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A luckless PI and a hired enforcer team up to find a missing girl in smoggy 1977 L.A.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "buddy",
   "los-angeles",
   "seventies",
   "missing-girl"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png"
 },
 {
  "id": "game-night",
  "title": "Game Night",
  "year": 2018,
  "director": "John Francis Daley and Jonathan Goldstein",
  "genres": [
   "Comedy",
   "Thriller"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A couples' game night turns real when one brother's 'murder mystery' is hijacked by actual criminals.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 2,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "game-night",
   "kidnapping",
   "couples",
   "comedy-thriller"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Game_Night_%28film%29.png"
 },
 {
  "id": "some-like-it-hot",
  "title": "Some Like It Hot",
  "year": 1959,
  "director": "Billy Wilder",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 121,
  "rating": "Not Rated",
  "description": "Two musicians who witness a mob hit hide out in an all-female band, in dresses.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 5,
   "epic": 2,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "jazz",
   "disguise",
   "mob",
   "florida"
  ],
  "poster": ""
 },
 {
  "id": "young-frankenstein",
  "title": "Young Frankenstein",
  "year": 1974,
  "director": "Mel Brooks",
  "genres": [
   "Comedy",
   "Horror"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "A descendant of Dr. Frankenstein insists it's 'Fronkensteen' \u2014 until he inherits the castle and the experiment.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 4,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 2,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "frankenstein",
   "parody",
   "castle",
   "black-and-white"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b5/Young_Frankenstein_movie_poster.jpg"
 },
 {
  "id": "casablanca",
  "title": "Casablanca",
  "year": 1942,
  "director": "Michael Curtiz",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A cynical expatriate in wartime Casablanca must choose between love and virtue when his lost love walks into his caf\u00e9.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "wartime",
   "sacrifice",
   "letters-of-transit",
   "classic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg"
 },
 {
  "id": "titanic",
  "title": "Titanic",
  "year": 1997,
  "director": "James Cameron",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 194,
  "rating": "PG-13",
  "description": "A penniless artist and an engaged aristocrat fall in love aboard a ship sailing toward ice.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "ship",
   "class",
   "sketch",
   "iceberg"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
 },
 {
  "id": "the-notebook",
  "title": "The Notebook",
  "year": 2004,
  "director": "Nick Cassavetes",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "An elderly man reads a young couple's summer love story to a woman who no longer remembers it.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "summer-love",
   "letters",
   "memory",
   "south"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"
 },
 {
  "id": "pride-prejudice",
  "title": "Pride & Prejudice",
  "year": 2005,
  "director": "Joe Wright",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 129,
  "rating": "PG",
  "description": "Elizabeth Bennet spars with the proud Mr. Darcy as both misjudge the other completely.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "austen",
   "regency",
   "wit",
   "estates"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg"
 },
 {
  "id": "before-sunrise",
  "title": "Before Sunrise",
  "year": 1995,
  "director": "Richard Linklater",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "Two strangers meet on a train and spend one Vienna night talking their way into love.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "vienna",
   "one-night",
   "conversation",
   "train"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg"
 },
 {
  "id": "when-harry-met-sally",
  "title": "When Harry Met Sally...",
  "year": 1989,
  "director": "Rob Reiner",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "Two friends spend twelve years arguing whether men and women can just be friends.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 8,
   "weird": 2
  },
  "keywords": [
   "friendship",
   "new-york",
   "delis",
   "new-years"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/WhenHarryMetSallyPoster.jpg"
 },
 {
  "id": "sleepless-in-seattle",
  "title": "Sleepless in Seattle",
  "year": 1993,
  "director": "Nora Ephron",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 105,
  "rating": "PG",
  "description": "A widowed father's radio confession draws a reporter across the country toward a man she's never met.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "radio",
   "seattle",
   "widower",
   "empire-state"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e1/Sleepless_in_seattle.jpg"
 },
 {
  "id": "notting-hill",
  "title": "Notting Hill",
  "year": 1999,
  "director": "Roger Michell",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A shy London bookshop owner falls for the world's most famous actress.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "bookshop",
   "fame",
   "london",
   "press"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/NottingHillRobertsGrant.jpg"
 },
 {
  "id": "pretty-woman",
  "title": "Pretty Woman",
  "year": 1990,
  "director": "Garry Marshall",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A wealthy businessman hires a Hollywood escort for a week and neither keeps it businesslike.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "beverly-hills",
   "makeover",
   "opera",
   "fairy-tale"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Pretty_woman_movie.jpg"
 },
 {
  "id": "crazy-rich-asians",
  "title": "Crazy Rich Asians",
  "year": 2018,
  "director": "Jon M. Chu",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "A professor discovers her boyfriend is Singapore royalty-adjacent \u2014 and his mother disapproves.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "singapore",
   "wedding",
   "family",
   "wealth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Crazy_Rich_Asians_poster.png"
 },
 {
  "id": "amelie",
  "title": "Am\u00e9lie",
  "year": 2001,
  "director": "Jean-Pierre Jeunet",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A whimsical Parisian waitress secretly improves strangers' lives while avoiding her own romance.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 7,
   "weird": 2
  },
  "keywords": [
   "paris",
   "whimsy",
   "montmartre",
   "schemes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg"
 },
 {
  "id": "in-the-mood-for-love",
  "title": "In the Mood for Love",
  "year": 2000,
  "director": "Wong Kar-wai",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 98,
  "rating": "PG",
  "description": "Two neighbors in 1960s Hong Kong, each betrayed by a spouse, fall into a love they refuse to consummate.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "hong-kong",
   "longing",
   "neighbors",
   "restraint"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/In_the_Mood_for_Love_movie.jpg"
 },
 {
  "id": "portrait-of-a-lady-on-fire",
  "title": "Portrait of a Lady on Fire",
  "year": 2019,
  "director": "C\u00e9line Sciamma",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A painter secretly commissioned to portray a bride-to-be falls for her subject on a remote Brittany island.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "painting",
   "brittany",
   "gaze",
   "memory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Portrait_of_a_Lady_on_Fire.jpg"
 },
 {
  "id": "the-shape-of-water",
  "title": "The Shape of Water",
  "year": 2017,
  "director": "Guillermo del Toro",
  "genres": [
   "Romance",
   "Fantasy",
   "Drama"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "A mute janitor at a Cold War lab falls in love with the amphibious creature imprisoned there.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 6,
   "epic": 5,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "creature",
   "cold-war",
   "silent-love",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/The_Shape_of_Water_%28film%29.png"
 },
 {
  "id": "about-time",
  "title": "About Time",
  "year": 2013,
  "director": "Richard Curtis",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "A young Brit learns the men in his family can time-travel, and uses it \u2014 carefully \u2014 for love and family.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "time-travel",
   "family",
   "weddings",
   "father-son"
  ],
  "poster": ""
 },
 {
  "id": "silver-linings-playbook",
  "title": "Silver Linings Playbook",
  "year": 2012,
  "director": "David O. Russell",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Two people rebuilding after breakdowns bond over a dance contest and an Eagles season.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "dance-contest",
   "recovery",
   "philadelphia",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/Silver_Linings_Playbook_Poster.jpg"
 },
 {
  "id": "brokeback-mountain",
  "title": "Brokeback Mountain",
  "year": 2005,
  "director": "Ang Lee",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "Two ranch hands fall in love one Wyoming summer and spend decades in its shadow.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "wyoming",
   "ranch",
   "secrecy",
   "longing"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Brokeback_mountain.jpg"
 },
 {
  "id": "moonrise-kingdom",
  "title": "Moonrise Kingdom",
  "year": 2012,
  "director": "Wes Anderson",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "Two twelve-year-old runaways plunge a New England island into a very organized search party.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "runaways",
   "island",
   "scouts",
   "young-love"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Moonrise_Kingdom_FilmPoster.jpeg"
 },
 {
  "id": "carol",
  "title": "Carol",
  "year": 2015,
  "director": "Todd Haynes",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A department-store clerk and an elegant older woman fall in love in 1950s New York.",
  "vector": {
   "adrenaline": 1,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 6,
   "weird": 1
  },
  "keywords": [
   "fifties",
   "road-trip",
   "glances",
   "new-york"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Carol_film_poster.jpg"
 },
 {
  "id": "goodfellas",
  "title": "Goodfellas",
  "year": 1990,
  "director": "Martin Scorsese",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 145,
  "rating": "R",
  "description": "Henry Hill's rise through the mob is as seductive as its fall is inevitable.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "mafia",
   "narrated",
   "heists",
   "excess"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg"
 },
 {
  "id": "the-departed",
  "title": "The Departed",
  "year": 2006,
  "director": "Martin Scorsese",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 151,
  "rating": "R",
  "description": "A mole in the police and an undercover cop in the mob hunt each other through Boston.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "mole",
   "boston",
   "undercover",
   "rats"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg"
 },
 {
  "id": "pulp-fiction",
  "title": "Pulp Fiction",
  "year": 1994,
  "director": "Quentin Tarantino",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 154,
  "rating": "R",
  "description": "Hitmen, a boxer, a briefcase and a very good milkshake collide in interlocking L.A. stories.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "hitmen",
   "nonlinear",
   "briefcase",
   "dialogue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
 },
 {
  "id": "reservoir-dogs",
  "title": "Reservoir Dogs",
  "year": 1992,
  "director": "Quentin Tarantino",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "After a heist goes wrong, the surviving criminals turn on each other hunting the rat.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "heist",
   "warehouse",
   "colors",
   "betrayal"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png"
 },
 {
  "id": "the-usual-suspects",
  "title": "The Usual Suspects",
  "year": 1995,
  "director": "Bryan Singer",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "A small-time con man tells a detective about Keyser S\u00f6ze \u2014 and nothing he says can be trusted.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "interrogation",
   "keyser-soze",
   "lineup",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg"
 },
 {
  "id": "l-a-confidential",
  "title": "L.A. Confidential",
  "year": 1997,
  "director": "Curtis Hanson",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "Three very different cops converge on corruption in 1950s Los Angeles.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "fifties",
   "corruption",
   "detectives",
   "hollywood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/LAconfidentialcvr.jpg"
 },
 {
  "id": "chinatown",
  "title": "Chinatown",
  "year": 1974,
  "director": "Roman Polanski",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "A private eye's adultery case unravels into water, power and one of cinema's darkest family secrets.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "private-eye",
   "water",
   "corruption",
   "los-angeles"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Chinatownposter1.jpg"
 },
 {
  "id": "scarface",
  "title": "Scarface",
  "year": 1983,
  "director": "Brian De Palma",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 170,
  "rating": "R",
  "description": "Cuban refugee Tony Montana claws to the top of Miami's cocaine empire and rots there.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "miami",
   "cocaine",
   "empire",
   "excess"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg"
 },
 {
  "id": "city-of-god",
  "title": "City of God",
  "year": 2002,
  "director": "Fernando Meirelles",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Two boys grow up in Rio's favelas \u2014 one becomes a gangster, the other a photographer.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "rio",
   "gangs",
   "photography",
   "coming-of-age"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg"
 },
 {
  "id": "the-irishman",
  "title": "The Irishman",
  "year": 2019,
  "director": "Martin Scorsese",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 209,
  "rating": "R",
  "description": "A hitman looks back on his years with Jimmy Hoffa and the price of loyalty.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "hoffa",
   "aging",
   "hitman",
   "regret"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/The_Irishman_poster.jpg"
 },
 {
  "id": "the-town",
  "title": "The Town",
  "year": 2010,
  "director": "Ben Affleck",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A Charlestown bank robber falls for a hostage from his last job as the FBI closes in.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "bank-robbery",
   "boston",
   "hostage",
   "crew"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/The_Town_Poster.jpg"
 },
 {
  "id": "hell-or-high-water",
  "title": "Hell or High Water",
  "year": 2016,
  "director": "David Mackenzie",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "Two brothers rob the banks that are foreclosing on their ranch while two Texas Rangers give chase.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "texas",
   "brothers",
   "foreclosure",
   "rangers"
  ],
  "poster": ""
 },
 {
  "id": "drive",
  "title": "Drive",
  "year": 2011,
  "director": "Nicolas Winding Refn",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A silent stunt driver moonlighting as a getaway wheelman protects the family next door.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "getaway",
   "neon",
   "silence",
   "violence"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg"
 },
 {
  "id": "baby-driver",
  "title": "Baby Driver",
  "year": 2017,
  "director": "Edgar Wright",
  "genres": [
   "Crime",
   "Action"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A getaway driver who scores his life to music plans one last job \u2014 his exit.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "music",
   "getaway",
   "heist",
   "atlanta"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Baby_Driver_poster.jpg"
 },
 {
  "id": "snatch",
  "title": "Snatch",
  "year": 2000,
  "director": "Guy Ritchie",
  "genres": [
   "Crime",
   "Comedy"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "A stolen diamond, bare-knuckle boxing and half of London's underworld collide at speed.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "diamond",
   "boxing",
   "london",
   "ensemble"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Snatch_ver4.jpg"
 },
 {
  "id": "in-bruges",
  "title": "In Bruges",
  "year": 2008,
  "director": "Martin McDonagh",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Two hitmen hide out in fairy-tale Bruges after a job goes wrong, awaiting orders.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "hitmen",
   "belgium",
   "guilt",
   "dark-comedy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ee/In_Bruges_poster.png"
 },
 {
  "id": "ocean-s-eleven",
  "title": "Ocean's Eleven",
  "year": 2001,
  "director": "Steven Soderbergh",
  "genres": [
   "Crime",
   "Comedy",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "Danny Ocean assembles eleven specialists to rob three Las Vegas casinos in one night.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "heist",
   "las-vegas",
   "crew",
   "style"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Ocean%27s_Eleven_2001_Poster.jpg"
 },
 {
  "id": "catch-me-if-you-can",
  "title": "Catch Me If You Can",
  "year": 2002,
  "director": "Steven Spielberg",
  "genres": [
   "Crime",
   "Drama",
   "Comedy"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Teen con artist Frank Abagnale Jr. cashes fake checks across America, one step ahead of the FBI.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "con-artist",
   "fbi",
   "pilot",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg"
 },
 {
  "id": "the-sting",
  "title": "The Sting",
  "year": 1973,
  "director": "George Roy Hill",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "runtime": 129,
  "rating": "PG",
  "description": "Two Depression-era grifters build an elaborate con to take down a mob banker.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "con",
   "ragtime",
   "chicago",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/a/aa/The_Sting_%281973_alt_poster%29.jpeg"
 },
 {
  "id": "toy-story",
  "title": "Toy Story",
  "year": 1995,
  "director": "John Lasseter",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 81,
  "rating": "G",
  "description": "Woody's status as Andy's favorite toy is threatened by a space ranger who thinks he's real.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 10,
   "dark": 1,
   "romantic": 2,
   "epic": 5,
   "cozy": 9,
   "weird": 4
  },
  "keywords": [
   "toys",
   "friendship",
   "jealousy",
   "pixar"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
 },
 {
  "id": "toy-story-3",
  "title": "Toy Story 3",
  "year": 2010,
  "director": "Lee Unkrich",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 103,
  "rating": "G",
  "description": "Andy leaves for college and his toys face a daycare ruled by a strawberry-scented tyrant.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "daycare",
   "goodbye",
   "escape",
   "growing-up"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg"
 },
 {
  "id": "finding-nemo",
  "title": "Finding Nemo",
  "year": 2003,
  "director": "Andrew Stanton",
  "genres": [
   "Animation",
   "Family"
  ],
  "runtime": 100,
  "rating": "G",
  "description": "A clownfish crosses the ocean to find his son, with a forgetful blue tang as his guide.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 10,
   "dark": 1,
   "romantic": 2,
   "epic": 6,
   "cozy": 9,
   "weird": 4
  },
  "keywords": [
   "ocean",
   "father-son",
   "dory",
   "journey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg"
 },
 {
  "id": "up",
  "title": "Up",
  "year": 2009,
  "director": "Pete Docter",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "A widower ties balloons to his house to reach Paradise Falls, with an earnest stowaway aboard.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "balloons",
   "widower",
   "adventure",
   "south-america"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg"
 },
 {
  "id": "inside-out",
  "title": "Inside Out",
  "year": 2015,
  "director": "Pete Docter",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "Inside Riley's mind, Joy and Sadness get lost on the far side of a childhood move.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "emotions",
   "childhood",
   "memory",
   "sadness"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
 },
 {
  "id": "coco",
  "title": "Coco",
  "year": 2017,
  "director": "Lee Unkrich",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 105,
  "rating": "PG",
  "description": "Miguel crosses into the Land of the Dead to find his idol and his family's real story.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 7,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "day-of-the-dead",
   "music",
   "family",
   "memory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
 },
 {
  "id": "soul",
  "title": "Soul",
  "year": 2020,
  "director": "Pete Docter",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "A jazz teacher who dies on his big break fights to return from the Great Before.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "jazz",
   "afterlife",
   "purpose",
   "new-york"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg"
 },
 {
  "id": "wall-e",
  "title": "WALL-E",
  "year": 2008,
  "director": "Andrew Stanton",
  "genres": [
   "Animation",
   "Family",
   "Sci-Fi"
  ],
  "runtime": 98,
  "rating": "G",
  "description": "A lone trash-compacting robot falls for a sleek probe droid and follows her into space.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "robot",
   "earth",
   "space",
   "silent-film"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg"
 },
 {
  "id": "spirited-away",
  "title": "Spirited Away",
  "year": 2001,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 125,
  "rating": "PG",
  "description": "Chihiro must work in a bathhouse for spirits to free her transformed parents.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 7,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "bathhouse",
   "spirits",
   "names",
   "ghibli"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
 },
 {
  "id": "my-neighbor-totoro",
  "title": "My Neighbor Totoro",
  "year": 1988,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 86,
  "rating": "G",
  "description": "Two sisters move to the countryside and befriend the gentle forest spirit Totoro.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 7,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "forest",
   "sisters",
   "childhood",
   "ghibli"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg"
 },
 {
  "id": "princess-mononoke",
  "title": "Princess Mononoke",
  "year": 1997,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Fantasy",
   "Drama"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "A prince caught between iron miners and forest gods seeks a cure for his curse.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 6,
   "weird": 5
  },
  "keywords": [
   "forest",
   "gods",
   "war",
   "environment"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png"
 },
 {
  "id": "your-name",
  "title": "Your Name",
  "year": 2016,
  "director": "Makoto Shinkai",
  "genres": [
   "Animation",
   "Romance",
   "Fantasy"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "A Tokyo boy and a small-town girl wake in each other's bodies as a comet approaches.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 4,
   "epic": 7,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "body-swap",
   "comet",
   "tokyo",
   "fate"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
 },
 {
  "id": "spider-man-into-the-spider-verse",
  "title": "Spider-Man: Into the Spider-Verse",
  "year": 2018,
  "director": "Bob Persichetti, Peter Ramsey and Rodney Rothman",
  "genres": [
   "Animation",
   "Action",
   "Comedy"
  ],
  "runtime": 117,
  "rating": "PG",
  "description": "Miles Morales meets Spider-heroes from across the multiverse and learns to wear the mask his way.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "multiverse",
   "miles",
   "comic-style",
   "mentor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png"
 },
 {
  "id": "spider-man-across-the-spider-verse",
  "title": "Spider-Man: Across the Spider-Verse",
  "year": 2023,
  "director": "Joaquim Dos Santos",
  "genres": [
   "Animation",
   "Action"
  ],
  "runtime": 140,
  "rating": "PG",
  "description": "Miles defies a society of Spider-people who insist his father's death is canon.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 1,
   "epic": 7,
   "cozy": 6,
   "weird": 6
  },
  "keywords": [
   "multiverse",
   "canon",
   "family",
   "cliffhanger"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg"
 },
 {
  "id": "the-lion-king",
  "title": "The Lion King",
  "year": 1994,
  "director": "Roger Allers and Rob Minkoff",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 88,
  "rating": "G",
  "description": "Exiled cub Simba must return to claim his place after his uncle's betrayal.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "savanna",
   "uncle",
   "circle-of-life",
   "shakespeare"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
 },
 {
  "id": "beauty-and-the-beast",
  "title": "Beauty and the Beast",
  "year": 1991,
  "director": "Gary Trousdale and Kirk Wise",
  "genres": [
   "Animation",
   "Family",
   "Romance",
   "Fantasy"
  ],
  "runtime": 84,
  "rating": "G",
  "description": "A bookish young woman trades places with her father in a cursed castle and sees past the Beast.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 4,
   "epic": 6,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "castle",
   "curse",
   "books",
   "ballroom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/Beauty_and_the_Beast_%281991_film%29_poster.jpg"
 },
 {
  "id": "aladdin",
  "title": "Aladdin",
  "year": 1992,
  "director": "Ron Clements and John Musker",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 90,
  "rating": "G",
  "description": "A street rat, a magic lamp and a wisecracking Genie collide with a princess and a vizier.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 6,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "genie",
   "lamp",
   "agrabah",
   "wishes"
  ],
  "poster": ""
 },
 {
  "id": "shrek",
  "title": "Shrek",
  "year": 2001,
  "director": "Andrew Adamson and Vicky Jenson",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 90,
  "rating": "PG",
  "description": "An ogre's rescue mission to save a princess becomes a fairy tale turned inside out.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 6,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "ogre",
   "fairy-tale",
   "donkey",
   "swamp"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg"
 },
 {
  "id": "how-to-train-your-dragon",
  "title": "How to Train Your Dragon",
  "year": 2010,
  "director": "Dean DeBlois and Chris Sanders",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 98,
  "rating": "PG",
  "description": "A Viking boy who can't kill dragons secretly befriends the one he shot down.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 10,
   "dark": 1,
   "romantic": 2,
   "epic": 7,
   "cozy": 9,
   "weird": 5
  },
  "keywords": [
   "dragons",
   "vikings",
   "friendship",
   "flight"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg"
 },
 {
  "id": "kung-fu-panda",
  "title": "Kung Fu Panda",
  "year": 2008,
  "director": "Mark Osborne and John Stevenson",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Action"
  ],
  "runtime": 92,
  "rating": "PG",
  "description": "An out-of-shape panda is improbably chosen as the Dragon Warrior.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 2,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "panda",
   "kung-fu",
   "chosen-one",
   "noodles"
  ],
  "poster": ""
 },
 {
  "id": "the-incredibles",
  "title": "The Incredibles",
  "year": 2004,
  "director": "Brad Bird",
  "genres": [
   "Animation",
   "Family",
   "Action"
  ],
  "runtime": 115,
  "rating": "PG",
  "description": "A retired superhero family dusts off the suits when Dad's secret missions draw a fan turned villain.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 7,
   "weird": 4
  },
  "keywords": [
   "superhero",
   "family",
   "retirement",
   "syndrome"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg"
 },
 {
  "id": "ratatouille",
  "title": "Ratatouille",
  "year": 2007,
  "director": "Brad Bird",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 111,
  "rating": "G",
  "description": "A rat with a chef's palate partners with a hapless Paris kitchen boy.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 5,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "paris",
   "cooking",
   "critic",
   "anyone-can-cook"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg"
 },
 {
  "id": "the-iron-giant",
  "title": "The Iron Giant",
  "year": 1999,
  "director": "Brad Bird",
  "genres": [
   "Animation",
   "Family",
   "Sci-Fi"
  ],
  "runtime": 86,
  "rating": "PG",
  "description": "A boy in 1957 Maine hides a gentle giant robot from a paranoid government agent.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "robot",
   "cold-war",
   "friendship",
   "superman"
  ],
  "poster": ""
 },
 {
  "id": "the-lego-movie",
  "title": "The Lego Movie",
  "year": 2014,
  "director": "Phil Lord and Christopher Miller",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "An ordinary construction worker is mistaken for the Special in a prophecy to stop Lord Business.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 5,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "lego",
   "prophecy",
   "creativity",
   "father-son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/The_Lego_Movie_poster.jpg"
 },
 {
  "id": "puss-in-boots-the-last-wish",
  "title": "Puss in Boots: The Last Wish",
  "year": 2022,
  "director": "Joel Crawford",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "Down to his last life, Puss races Death itself to the Wishing Star.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 1,
   "romantic": 2,
   "epic": 6,
   "cozy": 8,
   "weird": 5
  },
  "keywords": [
   "fairy-tale",
   "nine-lives",
   "death",
   "quest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg"
 },
 {
  "id": "the-lord-of-the-rings-the-fellowship-of-the-ring",
  "title": "The Lord of the Rings: The Fellowship of the Ring",
  "year": 2001,
  "director": "Peter Jackson",
  "genres": [
   "Fantasy",
   "Action",
   "Drama"
  ],
  "runtime": 178,
  "rating": "PG-13",
  "description": "A hobbit inherits a ring of power and joins eight companions to carry it toward the fire that made it.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "quest",
   "ring",
   "fellowship",
   "middle-earth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"
 },
 {
  "id": "the-lord-of-the-rings-the-two-towers",
  "title": "The Lord of the Rings: The Two Towers",
  "year": 2002,
  "director": "Peter Jackson",
  "genres": [
   "Fantasy",
   "Action",
   "Drama"
  ],
  "runtime": 179,
  "rating": "PG-13",
  "description": "The broken fellowship fights on as Rohan makes its stand at Helm's Deep.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "helm's-deep",
   "ents",
   "war",
   "middle-earth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Lord_Rings_Two_Towers.jpg"
 },
 {
  "id": "the-lord-of-the-rings-the-return-of-the-king",
  "title": "The Lord of the Rings: The Return of the King",
  "year": 2003,
  "director": "Peter Jackson",
  "genres": [
   "Fantasy",
   "Action",
   "Drama"
  ],
  "runtime": 201,
  "rating": "PG-13",
  "description": "Aragorn claims his crown while Frodo and Sam cross Mordor to end the Ring.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 4,
   "weird": 4
  },
  "keywords": [
   "mordor",
   "coronation",
   "finale",
   "middle-earth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg"
 },
 {
  "id": "raiders-of-the-lost-ark",
  "title": "Raiders of the Lost Ark",
  "year": 1981,
  "director": "Steven Spielberg",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 115,
  "rating": "PG",
  "description": "Archaeologist Indiana Jones races the Nazis to the Ark of the Covenant.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "ark",
   "nazis",
   "whip",
   "adventure"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg"
 },
 {
  "id": "indiana-jones-and-the-last-crusade",
  "title": "Indiana Jones and the Last Crusade",
  "year": 1989,
  "director": "Steven Spielberg",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "Indy teams with his scholarly father to find the Holy Grail before the Nazis do.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 8,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "grail",
   "father-son",
   "venice",
   "adventure"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Indiana_Jones_and_the_Last_Crusade.png"
 },
 {
  "id": "harry-potter-and-the-sorcerer-s-stone",
  "title": "Harry Potter and the Sorcerer's Stone",
  "year": 2001,
  "director": "Chris Columbus",
  "genres": [
   "Fantasy",
   "Family"
  ],
  "runtime": 152,
  "rating": "PG",
  "description": "A boy who thought he was ordinary learns he's a wizard and starts school at Hogwarts.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 3,
   "epic": 8,
   "cozy": 8,
   "weird": 6
  },
  "keywords": [
   "hogwarts",
   "magic-school",
   "friendship",
   "discovery"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg"
 },
 {
  "id": "the-wizard-of-oz",
  "title": "The Wizard of Oz",
  "year": 1939,
  "director": "Victor Fleming",
  "genres": [
   "Fantasy",
   "Family",
   "Musical"
  ],
  "runtime": 102,
  "rating": "G",
  "description": "A tornado carries Dorothy to Oz, where she follows the yellow brick road toward home.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 4,
   "epic": 8,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "oz",
   "yellow-brick-road",
   "witch",
   "technicolor"
  ],
  "poster": ""
 },
 {
  "id": "the-princess-bride",
  "title": "The Princess Bride",
  "year": 1987,
  "director": "Rob Reiner",
  "genres": [
   "Fantasy",
   "Romance",
   "Comedy",
   "Adventure"
  ],
  "runtime": 98,
  "rating": "PG",
  "description": "A grandfather reads of Westley, Buttercup, fencing, fighting and true love.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 4,
   "epic": 7,
   "cozy": 5,
   "weird": 5
  },
  "keywords": [
   "storybook",
   "fencing",
   "true-love",
   "inigo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Princess_bride.jpg"
 },
 {
  "id": "labyrinth",
  "title": "Labyrinth",
  "year": 1986,
  "director": "Jim Henson",
  "genres": [
   "Fantasy",
   "Family",
   "Musical"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "Sarah has thirteen hours to solve the Goblin King's labyrinth and rescue her baby brother.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 4,
   "epic": 8,
   "cozy": 7,
   "weird": 5
  },
  "keywords": [
   "goblin-king",
   "maze",
   "puppets",
   "bowie"
  ],
  "poster": ""
 },
 {
  "id": "the-neverending-story",
  "title": "The NeverEnding Story",
  "year": 1984,
  "director": "Wolfgang Petersen",
  "genres": [
   "Fantasy",
   "Family"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A bullied boy reading a magical book discovers Fantasia's fate is tied to his own.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 3,
   "epic": 8,
   "cozy": 7,
   "weird": 6
  },
  "keywords": [
   "book",
   "fantasia",
   "luckdragon",
   "imagination"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Neverendingstoryposter.jpg"
 },
 {
  "id": "pan-s-labyrinth",
  "title": "Pan's Labyrinth",
  "year": 2006,
  "director": "Guillermo del Toro",
  "genres": [
   "Fantasy",
   "Drama",
   "Horror"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "In postwar Spain, a girl escapes into a dark fairy tale as real-world cruelty closes in.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 3,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 3,
   "weird": 5
  },
  "keywords": [
   "fairy-tale",
   "spain",
   "faun",
   "war"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg"
 },
 {
  "id": "citizen-kane",
  "title": "Citizen Kane",
  "year": 1941,
  "director": "Orson Welles",
  "genres": [
   "Drama"
  ],
  "runtime": 119,
  "rating": "PG",
  "description": "A reporter pieces together the life of a publishing tycoon from one dying word: Rosebud.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "rosebud",
   "newspapers",
   "power",
   "puzzle"
  ],
  "poster": ""
 },
 {
  "id": "it-s-a-wonderful-life",
  "title": "It's a Wonderful Life",
  "year": 1946,
  "director": "Frank Capra",
  "genres": [
   "Drama",
   "Fantasy",
   "Family"
  ],
  "runtime": 130,
  "rating": "PG",
  "description": "A despairing man is shown by an angel how different Bedford Falls would be without him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 8,
   "weird": 4
  },
  "keywords": [
   "angel",
   "christmas",
   "small-town",
   "gratitude"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg"
 },
 {
  "id": "singin-in-the-rain",
  "title": "Singin' in the Rain",
  "year": 1952,
  "director": "Stanley Donen and Gene Kelly",
  "genres": [
   "Musical",
   "Comedy",
   "Romance"
  ],
  "runtime": 103,
  "rating": "G",
  "description": "Hollywood's silent era crashes into talkies, and one star's voice is a liability.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 1,
   "romantic": 7,
   "epic": 5,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "musical",
   "hollywood",
   "rain",
   "talkies"
  ],
  "poster": ""
 },
 {
  "id": "lawrence-of-arabia",
  "title": "Lawrence of Arabia",
  "year": 1962,
  "director": "David Lean",
  "genres": [
   "Drama",
   "Adventure"
  ],
  "runtime": 218,
  "rating": "PG",
  "description": "T.E. Lawrence unites Arab tribes against the Ottoman Empire and loses himself in the desert.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "desert",
   "epic",
   "identity",
   "war"
  ],
  "poster": ""
 },
 {
  "id": "the-apartment",
  "title": "The Apartment",
  "year": 1960,
  "director": "Billy Wilder",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 125,
  "rating": "Not Rated",
  "description": "A clerk lends his apartment to executives for affairs in hopes of promotion, until he falls for the elevator operator.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 5,
   "epic": 3,
   "cozy": 8,
   "weird": 3
  },
  "keywords": [
   "office",
   "loneliness",
   "christmas",
   "wilder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Apartment_%281960_poster%29.jpg"
 },
 {
  "id": "to-kill-a-mockingbird",
  "title": "To Kill a Mockingbird",
  "year": 1962,
  "director": "Robert Mulligan",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "Not Rated",
  "description": "Atticus Finch defends a Black man falsely accused in a Depression-era Southern town.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "trial",
   "conscience",
   "childhood",
   "south"
  ],
  "poster": ""
 },
 {
  "id": "the-sound-of-music",
  "title": "The Sound of Music",
  "year": 1965,
  "director": "Robert Wise",
  "genres": [
   "Musical",
   "Drama",
   "Family",
   "Romance"
  ],
  "runtime": 172,
  "rating": "G",
  "description": "A spirited governess brings music back to the von Trapp family as Austria falls under Nazi shadow.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 6,
   "epic": 5,
   "cozy": 7,
   "weird": 3
  },
  "keywords": [
   "austria",
   "singing",
   "governess",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Sound_of_music.jpg"
 },
 {
  "id": "west-side-story",
  "title": "West Side Story",
  "year": 1961,
  "director": "Robert Wise and Jerome Robbins",
  "genres": [
   "Musical",
   "Romance",
   "Drama"
  ],
  "runtime": 153,
  "rating": "Not Rated",
  "description": "Two New York gangs, one forbidden love: Romeo and Juliet retold in dance.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 6,
   "epic": 5,
   "cozy": 6,
   "weird": 3
  },
  "keywords": [
   "gangs",
   "dance",
   "new-york",
   "tragedy"
  ],
  "poster": ""
 },
 {
  "id": "sunset-boulevard",
  "title": "Sunset Boulevard",
  "year": 1950,
  "director": "Billy Wilder",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 110,
  "rating": "Not Rated",
  "description": "A faded silent-film star and a desperate screenwriter narrate their doom from a mansion on Sunset.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "hollywood",
   "noir",
   "delusion",
   "close-up"
  ],
  "poster": ""
 },
 {
  "id": "double-indemnity",
  "title": "Double Indemnity",
  "year": 1944,
  "director": "Billy Wilder",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 107,
  "rating": "Not Rated",
  "description": "An insurance salesman and a femme fatale plot her husband's profitable 'accident'.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 10,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "noir",
   "insurance",
   "murder-plot",
   "confession"
  ],
  "poster": ""
 },
 {
  "id": "the-maltese-falcon",
  "title": "The Maltese Falcon",
  "year": 1941,
  "director": "John Huston",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 100,
  "rating": "Not Rated",
  "description": "Sam Spade navigates liars, killers and a fortune in bird statuary.",
  "vector": {
   "adrenaline": 6,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 10,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "noir",
   "detective",
   "statuette",
   "the-stuff-dreams"
  ],
  "poster": ""
 },
 {
  "id": "the-third-man",
  "title": "The Third Man",
  "year": 1949,
  "director": "Carol Reed",
  "genres": [
   "Thriller",
   "Crime"
  ],
  "runtime": 93,
  "rating": "Not Rated",
  "description": "A writer arrives in postwar Vienna to find his friend Harry Lime officially dead and unofficially everywhere.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 5,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "vienna",
   "sewers",
   "zither",
   "black-market"
  ],
  "poster": ""
 },
 {
  "id": "seven-samurai",
  "title": "Seven Samurai",
  "year": 1954,
  "director": "Akira Kurosawa",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 207,
  "rating": "Not Rated",
  "description": "A farming village hires seven masterless samurai to defend its harvest from bandits.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "samurai",
   "village",
   "defense",
   "kurosawa"
  ],
  "poster": ""
 },
 {
  "id": "rashomon",
  "title": "Rashomon",
  "year": 1950,
  "director": "Akira Kurosawa",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 88,
  "rating": "Not Rated",
  "description": "Four witnesses tell four incompatible versions of the same crime in a forest.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "truth",
   "perspective",
   "forest",
   "trial"
  ],
  "poster": ""
 },
 {
  "id": "roman-holiday",
  "title": "Roman Holiday",
  "year": 1953,
  "director": "William Wyler",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 118,
  "rating": "Not Rated",
  "description": "A runaway princess tours Rome incognito with an American reporter who knows exactly who she is.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "rome",
   "princess",
   "vespa",
   "one-day"
  ],
  "poster": ""
 },
 {
  "id": "breakfast-at-tiffany-s",
  "title": "Breakfast at Tiffany's",
  "year": 1961,
  "director": "Blake Edwards",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 115,
  "rating": "Not Rated",
  "description": "Holly Golightly drifts through Manhattan parties, avoiding names, cats and commitment alike.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 6,
   "epic": 3,
   "cozy": 6,
   "weird": 2
  },
  "keywords": [
   "manhattan",
   "holly",
   "writer",
   "moon-river"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Breakfast_at_Tiffany%27s_%281961_poster%29.jpg"
 },
 {
  "id": "ben-hur",
  "title": "Ben-Hur",
  "year": 1959,
  "director": "William Wyler",
  "genres": [
   "Drama",
   "Adventure"
  ],
  "runtime": 212,
  "rating": "G",
  "description": "A betrayed Judean prince survives slavery to face his Roman betrayer in the chariot arena.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "chariots",
   "rome",
   "revenge",
   "epic"
  ],
  "poster": ""
 },
 {
  "id": "the-bridge-on-the-river-kwai",
  "title": "The Bridge on the River Kwai",
  "year": 1957,
  "director": "David Lean",
  "genres": [
   "Drama",
   "Adventure"
  ],
  "runtime": 161,
  "rating": "PG",
  "description": "British POWs build a bridge for their Japanese captors while commandos plan to blow it up.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "pow",
   "bridge",
   "pride",
   "burma"
  ],
  "poster": ""
 },
 {
  "id": "on-the-waterfront",
  "title": "On the Waterfront",
  "year": 1954,
  "director": "Elia Kazan",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 108,
  "rating": "Not Rated",
  "description": "An ex-boxer turned longshoreman must decide whether to testify against the mob that runs the docks.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "docks",
   "conscience",
   "contender",
   "corruption"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/e/ee/On_the_Waterfront_%281954_poster%29.jpg"
 },
 {
  "id": "saving-private-ryan",
  "title": "Saving Private Ryan",
  "year": 1998,
  "director": "Steven Spielberg",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 169,
  "rating": "R",
  "description": "After D-Day, a squad crosses war-torn France to bring one paratrooper home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "d-day",
   "squad",
   "normandy",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg"
 },
 {
  "id": "full-metal-jacket",
  "title": "Full Metal Jacket",
  "year": 1987,
  "director": "Stanley Kubrick",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "Marine recruits are dehumanized in boot camp, then shipped to Vietnam's killing fields.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "boot-camp",
   "vietnam",
   "drill-instructor",
   "duality"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
 },
 {
  "id": "apocalypse-now",
  "title": "Apocalypse Now",
  "year": 1979,
  "director": "Francis Ford Coppola",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 147,
  "rating": "R",
  "description": "A captain sails upriver into Cambodia to terminate a colonel who has gone entirely off the book.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "vietnam",
   "river",
   "madness",
   "colonel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Apocalypse_Now_poster.jpg"
 },
 {
  "id": "1917",
  "title": "1917",
  "year": 2019,
  "director": "Sam Mendes",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Two British soldiers cross enemy ground to stop 1,600 men walking into a trap, in one unbroken journey.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "one-shot",
   "wwi",
   "message",
   "race"
  ],
  "poster": ""
 },
 {
  "id": "dunkirk",
  "title": "Dunkirk",
  "year": 2017,
  "director": "Christopher Nolan",
  "genres": [
   "Drama",
   "Action",
   "Thriller"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "Soldiers, sailors and pilots converge on one beach and one week of survival.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "evacuation",
   "beach",
   "boats",
   "time"
  ],
  "poster": ""
 },
 {
  "id": "the-deer-hunter",
  "title": "The Deer Hunter",
  "year": 1978,
  "director": "Michael Cimino",
  "genres": [
   "Drama"
  ],
  "runtime": 183,
  "rating": "R",
  "description": "Steelworker friends are shattered by Vietnam and the rituals that follow them home.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 9,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 5,
   "weird": 2
  },
  "keywords": [
   "vietnam",
   "friendship",
   "russian-roulette",
   "homecoming"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/The_Deer_Hunter_poster.jpg"
 },
 {
  "id": "black-hawk-down",
  "title": "Black Hawk Down",
  "year": 2001,
  "director": "Ridley Scott",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 144,
  "rating": "R",
  "description": "A raid in Mogadishu becomes an overnight fight for survival when two helicopters fall.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "mogadishu",
   "rangers",
   "urban-combat",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_hawk_down_ver1.jpg"
 },
 {
  "id": "fury",
  "title": "Fury",
  "year": 2014,
  "director": "David Ayer",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "A Sherman tank crew pushes into collapsing Germany with a typist as its newest gunner.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "tank",
   "crew",
   "germany",
   "initiation"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/17/Fury_2014_poster.jpg"
 },
 {
  "id": "the-good-the-bad-and-the-ugly",
  "title": "The Good, the Bad and the Ugly",
  "year": 1966,
  "director": "Sergio Leone",
  "genres": [
   "Western",
   "Adventure"
  ],
  "runtime": 161,
  "rating": "R",
  "description": "Three gunmen race to a buried fortune across a Civil War landscape.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "gold",
   "civil-war",
   "standoff",
   "leone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg"
 },
 {
  "id": "unforgiven",
  "title": "Unforgiven",
  "year": 1992,
  "director": "Clint Eastwood",
  "genres": [
   "Western",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "A retired gunslinger takes one last bounty and finds the old violence waiting.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "bounty",
   "aging",
   "myth",
   "big-whiskey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Unforgiven_2.jpg"
 },
 {
  "id": "once-upon-a-time-in-the-west",
  "title": "Once Upon a Time in the West",
  "year": 1968,
  "director": "Sergio Leone",
  "genres": [
   "Western"
  ],
  "runtime": 165,
  "rating": "PG-13",
  "description": "A harmonica-playing stranger, a widow and a railroad converge on a water-rich patch of desert.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "railroad",
   "harmonica",
   "widow",
   "leone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Once_upon_a_Time_in_the_West.jpg"
 },
 {
  "id": "butch-cassidy-and-the-sundance-kid",
  "title": "Butch Cassidy and the Sundance Kid",
  "year": 1969,
  "director": "George Roy Hill",
  "genres": [
   "Western",
   "Crime",
   "Drama"
  ],
  "runtime": 110,
  "rating": "PG",
  "description": "Two charming outlaws flee a relentless posse all the way to Bolivia.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "outlaws",
   "bolivia",
   "bicycle",
   "posse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Butch_sundance_poster.jpg"
 },
 {
  "id": "django-unchained",
  "title": "Django Unchained",
  "year": 2012,
  "director": "Quentin Tarantino",
  "genres": [
   "Western",
   "Drama"
  ],
  "runtime": 165,
  "rating": "R",
  "description": "A freed slave and a bounty hunter set out to rescue Django's wife from a brutal plantation owner.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "bounty-hunter",
   "plantation",
   "rescue",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg"
 },
 {
  "id": "true-grit",
  "title": "True Grit",
  "year": 2010,
  "director": "Joel and Ethan Coen",
  "genres": [
   "Western",
   "Drama",
   "Adventure"
  ],
  "runtime": 110,
  "rating": "PG-13",
  "description": "A stubborn fourteen-year-old hires a drunken marshal to hunt her father's killer.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "marshal",
   "girl",
   "manhunt",
   "territory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ce/True_Grit_Poster.jpg"
 },
 {
  "id": "the-revenant",
  "title": "The Revenant",
  "year": 2015,
  "director": "Alejandro G. I\u00f1\u00e1rritu",
  "genres": [
   "Western",
   "Drama",
   "Adventure"
  ],
  "runtime": 156,
  "rating": "R",
  "description": "Mauled and left for dead, Hugh Glass crawls through a frozen wilderness toward the man who betrayed him.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "survival",
   "frontier",
   "bear",
   "revenge"
  ],
  "poster": ""
 },
 {
  "id": "the-hateful-eight",
  "title": "The Hateful Eight",
  "year": 2015,
  "director": "Quentin Tarantino",
  "genres": [
   "Western",
   "Thriller",
   "Drama"
  ],
  "runtime": 168,
  "rating": "R",
  "description": "A blizzard traps bounty hunters, outlaws and liars in one stagecoach lodge.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "blizzard",
   "lodge",
   "bounty",
   "paranoia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Hateful_Eight.jpg"
 }
];
const TOP20 = [
 {
  "rank": 1,
  "id": "the-shawshank-redemption",
  "note": "Hope, patiently engineered \u2014 the most rewatchable drama ever made."
 },
 {
  "rank": 2,
  "id": "the-godfather",
  "note": "The blueprint for every crime saga since: family, power, and the price of both."
 },
 {
  "rank": 3,
  "id": "the-dark-knight",
  "note": "A superhero film that plays like a crime epic and never lets up."
 },
 {
  "rank": 4,
  "id": "12-angry-men",
  "note": "Twelve men, one room, zero wasted minutes \u2014 proof story beats spectacle."
 },
 {
  "rank": 5,
  "id": "pulp-fiction",
  "note": "Dialogue as action; the coolest jigsaw in modern cinema."
 },
 {
  "rank": 6,
  "id": "the-lord-of-the-rings-the-return-of-the-king",
  "note": "The grandest finale ever filmed \u2014 every thread pays off."
 },
 {
  "rank": 7,
  "id": "the-empire-strikes-back",
  "note": "The sequel that deepened everything and ended on a cliffhanger for the ages."
 },
 {
  "rank": 8,
  "id": "spirited-away",
  "note": "Pure imagination with a beating heart; animation at its most magical."
 },
 {
  "rank": 9,
  "id": "parasite",
  "note": "A genre-shifting class thriller that keeps outsmarting you to the last frame."
 },
 {
  "rank": 10,
  "id": "casablanca",
  "note": "Old Hollywood perfection \u2014 every line earned its immortality."
 },
 {
  "rank": 11,
  "id": "the-matrix",
  "note": "It changed action, sci-fi and pop culture in a single bullet-time beat."
 },
 {
  "rank": 12,
  "id": "seven-samurai",
  "note": "The original ensemble epic; every team-up movie descends from this."
 },
 {
  "rank": 13,
  "id": "goodfellas",
  "note": "Three decades of mob life at a sprint \u2014 seductive, funny, terrifying."
 },
 {
  "rank": 14,
  "id": "it-s-a-wonderful-life",
  "note": "The rare classic that gets more moving every single year."
 },
 {
  "rank": 15,
  "id": "the-princess-bride",
  "note": "Fencing, fighting, torture, revenge, giants, monsters, chases, escapes, true love."
 },
 {
  "rank": 16,
  "id": "mad-max-fury-road",
  "note": "A two-hour chase that's also a masterclass in visual storytelling."
 },
 {
  "rank": 17,
  "id": "toy-story",
  "note": "It launched Pixar and still lands every joke and every feeling."
 },
 {
  "rank": 18,
  "id": "singin-in-the-rain",
  "note": "Joy, bottled \u2014 the most purely pleasurable musical ever made."
 },
 {
  "rank": 19,
  "id": "get-out",
  "note": "A horror debut that instantly entered the canon: smart, scary, essential."
 },
 {
  "rank": 20,
  "id": "coco",
  "note": "A luminous story about family and memory that leaves no eye dry."
 }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }
