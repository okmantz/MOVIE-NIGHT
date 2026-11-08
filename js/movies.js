/* Movie Night — dataset (v2). Each movie carries a 0-10 taste vector on ten axes:
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
  "title": "Mission: Impossible – Fallout",
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
  "title": "Léon: The Professional",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fe/The_Bourne_Ultimatum_%282007_film_poster%29.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Taken_film_poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
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
  "description": "A thief who steals from dreams is hired to plant an idea instead — the one crime considered impossible.",
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
  "director": "Alfonso Cuarón",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Ex-machina-uk-poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg"
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
  "director": "Alfonso Cuarón",
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
  "description": "A dinosaur theme park's preview tour goes wrong when the power — and the fences — fail.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Looper_poster.jpg"
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
  "description": "A family's beach vacation is invaded by their own doppelgängers in red jumpsuits.",
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
  "description": "Teens use an embalmed hand to summon spirits for ninety seconds at a time — until one session runs long.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/TalkToMe2022poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/Rosemarys_baby_poster.jpg"
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
  "description": "When Amy Dunne vanishes on her anniversary, her husband becomes the prime suspect — and the story's least reliable narrator.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Prisoners2013Poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg"
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
  "director": "Miloš Forman",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg"
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
  "description": "A small-time Philadelphia boxer gets one shot at the heavyweight championship — and at self-respect.",
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
  "description": "The March sisters chase art, love and independence in post–Civil War Massachusetts.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg"
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
  "description": "A human raised by Santa's elves travels to New York to find his father — and spread Christmas cheer.",
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
  "description": "Elle Woods follows her ex to Harvard Law to win him back — and discovers she's the one worth winning.",
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
  "description": "A legendary concierge and his protégé are framed for murder amid a battle over a family fortune.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c5/Palm_Springs_poster.jpeg"
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
  "description": "A descendant of Dr. Frankenstein insists it's 'Fronkensteen' — until he inherits the castle and the experiment.",
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
  "description": "A cynical expatriate in wartime Casablanca must choose between love and virtue when his lost love walks into his café.",
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
  "description": "A professor discovers her boyfriend is Singapore royalty-adjacent — and his mother disapproves.",
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
  "title": "Amélie",
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
  "director": "Céline Sciamma",
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
  "description": "A young Brit learns the men in his family can time-travel, and uses it — carefully — for love and family.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg"
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
  "description": "A small-time con man tells a detective about Keyser Söze — and nothing he says can be trusted.",
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
  "description": "Two boys grow up in Rio's favelas — one becomes a gangster, the other a photographer.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/Hell_or_High_Water_film_poster.png"
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
  "description": "A getaway driver who scores his life to music plans one last job — his exit.",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d3/The_Iron_Giant_poster.JPG"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/69/Wizard_of_oz_movie_poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Labyrinth_ver2.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/2/2f/To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/0/0b/West_Side_Story_1961_film_poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c8/Seven_Samurai_Poster.png"
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
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/61/Rashomon_poster.jpg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg"
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg"
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
  "director": "Alejandro G. Iñárritu",
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
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
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
 },
 {
  "id": "olympus-has-fallen",
  "title": "Olympus Has Fallen",
  "year": 2013,
  "director": "Antoine Fuqua",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A disgraced agent is the only man inside a White House under siege.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "whitehouse",
   "siege",
   "agent"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/Olympus_Has_Fallen_poster.jpg"
 },
 {
  "id": "the-tomorrow-war",
  "title": "The Tomorrow War",
  "year": 2021,
  "director": "Chris McKay",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 138,
  "rating": "PG-13",
  "description": "Civilians are drafted thirty years forward to fight aliens eating the future.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 2,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "draft",
   "future",
   "aliens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/The_Tomorrow_War_%282021_film%29_official_theatrical_poster.jpg"
 },
 {
  "id": "greenland",
  "title": "Greenland",
  "year": 2020,
  "director": "Ric Roman Waugh",
  "genres": [
   "Action",
   "Drama",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "A structural engineer races his family to Greenland as comet fragments fall.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 2,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "comet",
   "family",
   "bunkers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Greenland_%28film%29.png"
 },
 {
  "id": "san-andreas",
  "title": "San Andreas",
  "year": 2015,
  "director": "Brad Peyton",
  "genres": [
   "Action",
   "Adventure",
   "Drama"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "A rescue pilot crosses a splitting California to save his wife and daughter.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "earthquake",
   "california",
   "pilot"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/San_Andreas_poster.jpg"
 },
 {
  "id": "the-old-guard",
  "title": "The Old Guard",
  "year": 2020,
  "director": "Gina Prince-Bythewood",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "Immortal mercenaries are hunted by a pharma CEO who wants their secret.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "immortals",
   "mercenaries",
   "pharma"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/The_Old_Guard_2020_film_poster.png"
 },
 {
  "id": "army-of-the-dead",
  "title": "Army of the Dead",
  "year": 2021,
  "director": "Zack Snyder",
  "genres": [
   "Action",
   "Horror"
  ],
  "runtime": 148,
  "rating": "R",
  "description": "Mercenaries heist a Vegas casino vault inside a walled zombie quarantine zone.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 5,
   "funny": 3,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "zombies",
   "vegas",
   "heist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Army_of_the_Dead_poster.png"
 },
 {
  "id": "the-gray-man",
  "title": "The Gray Man",
  "year": 2022,
  "director": "Anthony Russo",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 122,
  "rating": "PG-13",
  "description": "The CIA's best ghost is hunted across Europe by its most unhinged contractor.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "cia",
   "ghost",
   "hunt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png"
 },
 {
  "id": "damsel",
  "title": "Damsel",
  "year": 2024,
  "director": "Juan Carlos Fresnadillo",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure"
  ],
  "runtime": 110,
  "rating": "PG-13",
  "description": "A dutiful bride learns her royal wedding was bait for a dragon's tribute.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "dragon",
   "bride",
   "cave"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Damsel_2024_poster2.jpg"
 },
 {
  "id": "havoc",
  "title": "Havoc",
  "year": 2025,
  "director": "Gareth Evans",
  "genres": [
   "Action",
   "Thriller",
   "Crime"
  ],
  "runtime": 107,
  "rating": "TV-MA",
  "description": "A bruised detective fights through the city to rescue a politician's son after a deal gone wrong.",
  "vector": {
   "adrenaline": 10,
   "brainy": 3,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "detective",
   "rescue",
   "city"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Havoc_%282025_film%29.jpg"
 },
 {
  "id": "the-electric-state",
  "title": "The Electric State",
  "year": 2025,
  "director": "Anthony Russo",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action",
   "Drama"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "An orphaned teen and a smuggler cross a robot-littered 1990s America to find her brother.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "robots",
   "brother",
   "nineties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Electric_State_poster.jpg"
 },
 {
  "id": "the-gorge",
  "title": "The Gorge",
  "year": 2025,
  "director": "Scott Derrickson",
  "genres": [
   "Action",
   "Sci-Fi",
   "Romance",
   "Horror"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "Two snipers guard opposite towers over a mysterious gorge and fall for each other across it.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 3,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 8,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "snipers",
   "gorge",
   "towers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Gorge_%28film%29_poster.jpg"
 },
 {
  "id": "death-of-a-unicorn",
  "title": "Death of a Unicorn",
  "year": 2025,
  "director": "Alex Scharfman",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A dad and daughter hit a unicorn; a pharma family wants to monetize its horn.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 5,
   "funny": 6,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "unicorn",
   "pharma",
   "horn"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c1/Death_of_a_unicorn.jpg"
 },
 {
  "id": "opus",
  "title": "Opus",
  "year": 2025,
  "director": "Mark Anthony Green",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "A writer visits a reclusive pop legend's compound where the comeback has a cult flavor.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 6,
   "funny": 3,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "popstar",
   "compound",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Opus_poster.jpg"
 },
 {
  "id": "last-breath",
  "title": "Last Breath",
  "year": 2025,
  "director": "Alex Parkinson",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 93,
  "rating": "PG-13",
  "description": "A saturation diver is stranded on the North Sea floor with minutes of gas.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 4,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "diver",
   "northsea",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Last_Breath_2025_film_poster.jpg"
 },
 {
  "id": "drop",
  "title": "Drop",
  "year": 2025,
  "director": "Christopher Landon",
  "genres": [
   "Thriller",
   "Mystery"
  ],
  "runtime": 85,
  "rating": "PG-13",
  "description": "A widow's first date is hijacked by phone drops ordering her to kill her date.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 4,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "date",
   "phone",
   "restaurant"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/Drop_Poster.jpg"
 },
 {
  "id": "heart-eyes",
  "title": "Heart Eyes",
  "year": 2025,
  "director": "Josh Ruben",
  "genres": [
   "Horror",
   "Romance",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A killer who targets couples on Valentine's Day mistakes two coworkers for lovers.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 6,
   "funny": 5,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 7,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "valentines",
   "killer",
   "coworkers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Heart_Eyes_%282025%29_poster.jpg"
 },
 {
  "id": "wolf-man",
  "title": "Wolf Man",
  "year": 2025,
  "director": "Leigh Whannell",
  "genres": [
   "Horror"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A father protecting his family from one wolfman becomes the thing he fears.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "werewolf",
   "father",
   "farmhouse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Wolf_Man_2025_poster.jpg"
 },
 {
  "id": "presence",
  "title": "Presence",
  "year": 2024,
  "director": "Steven Soderbergh",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 84,
  "rating": "R",
  "description": "A family's new house, seen entirely through the eyes of the presence living in it.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 7,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "ghost",
   "house",
   "pov"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Presence_film_poster.jpg"
 },
 {
  "id": "cuckoo",
  "title": "Cuckoo",
  "year": 2024,
  "director": "Tilman Singer",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A teen at an Alpine resort hears voices and meets her father's boss's experiments.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "alps",
   "resort",
   "voices"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/Cuckoo_%282024_film%29_poster.png"
 },
 {
  "id": "it-s-what-s-inside",
  "title": "It's What's Inside",
  "year": 2024,
  "director": "Greg Jardin",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Comedy"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A pre-wedding party tries a body-swapping machine and friendships detonate.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 6,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "bodyswap",
   "party",
   "machine"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/It%27s_What%27s_Inside_poster.jpg"
 },
 {
  "id": "venom",
  "title": "Venom",
  "year": 2018,
  "director": "Ruben Fleischer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 112,
  "rating": "PG-13",
  "description": "A disgraced journalist bonds with a symbiote that wants brains and justice.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 2,
   "funny": 6,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "symbiote",
   "journalist",
   "venom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png"
 },
 {
  "id": "venom-the-last-dance",
  "title": "Venom: The Last Dance",
  "year": 2024,
  "director": "Kelly Marcel",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 109,
  "rating": "PG-13",
  "description": "Eddie and Venom run from both their worlds as the symbiotes' maker comes hunting.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "symbiote",
   "run",
   "maker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg"
 },
 {
  "id": "blue-beetle",
  "title": "Blue Beetle",
  "year": 2023,
  "director": "Angel Manuel Soto",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A scarab chooses a Mexican-American grad and his whole family becomes the armor's crew.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "scarab",
   "family",
   "grad"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Blue_Beetle_%28film%29_poster.jpg"
 },
 {
  "id": "the-flash",
  "title": "The Flash",
  "year": 2023,
  "director": "Andy Muschietti",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "Barry runs back to save his mother and shatters the multiverse's timeline.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "multiverse",
   "mother",
   "timeline"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%28film%29_poster.jpg"
 },
 {
  "id": "black-adam",
  "title": "Black Adam",
  "year": 2022,
  "director": "Jaume Collet-Serra",
  "genres": [
   "Action",
   "Fantasy",
   "Sci-Fi"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "An ancient champion wakes in modern Kahndaq and dispenses his own justice.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "champion",
   "kahndaq",
   "justice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
 },
 {
  "id": "wonder-woman-1984",
  "title": "Wonder Woman 1984",
  "year": 2020,
  "director": "Patty Jenkins",
  "genres": [
   "Action",
   "Adventure",
   "Fantasy"
  ],
  "runtime": 151,
  "rating": "PG-13",
  "description": "A wishing stone grants everyone's desires in 1984, at a price Diana must repay.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "wishes",
   "1984",
   "stone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Wonder_Woman_1984_poster.png"
 },
 {
  "id": "birds-of-prey",
  "title": "Birds of Prey",
  "year": 2020,
  "director": "Cathy Yan",
  "genres": [
   "Action",
   "Crime",
   "Comedy"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Post-Joker Harley Quinn teams with four women against crime lord Roman Sionis.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "harley",
   "sionis",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg"
 },
 {
  "id": "the-suicide-squad",
  "title": "The Suicide Squad",
  "year": 2021,
  "director": "James Gunn",
  "genres": [
   "Action",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "Expendable villains invade a island nation to destroy a giant alien starfish.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 1,
   "funny": 8,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "villains",
   "starfish",
   "island"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg"
 },
 {
  "id": "eternals",
  "title": "Eternals",
  "year": 2021,
  "director": "Chloé Zhao",
  "genres": [
   "Action",
   "Sci-Fi",
   "Fantasy",
   "Drama"
  ],
  "runtime": 157,
  "rating": "PG-13",
  "description": "Immortal beings hidden through history reunite when their mission's lie unravels.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 4,
   "epic": 9,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "immortals",
   "history",
   "deviants"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg"
 },
 {
  "id": "shang-chi-and-the-legend-of-the-ten-rings",
  "title": "Shang-Chi and the Legend of the Ten Rings",
  "year": 2021,
  "director": "Destin Daniel Cretton",
  "genres": [
   "Action",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 132,
  "rating": "PG-13",
  "description": "A valet's past as an assassin prince catches up when his father's rings call.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "rings",
   "father",
   "valet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg"
 },
 {
  "id": "black-widow",
  "title": "Black Widow",
  "year": 2021,
  "director": "Cate Shortland",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "Natasha confronts the Red Room and the fake family that made her.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "redroom",
   "family",
   "natasha"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg"
 },
 {
  "id": "thor-love-and-thunder",
  "title": "Thor: Love and Thunder",
  "year": 2022,
  "director": "Taika Waititi",
  "genres": [
   "Action",
   "Fantasy",
   "Comedy"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "Thor faces a god-butcher while Jane Foster wields his reforged hammer through cancer.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 5,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gorr",
   "jane",
   "hammer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg"
 },
 {
  "id": "doctor-strange-in-the-multiverse-of-madness",
  "title": "Doctor Strange in the Multiverse of Madness",
  "year": 2022,
  "director": "Sam Raimi",
  "genres": [
   "Action",
   "Fantasy",
   "Horror"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "Strange protects a multiverse-hopping teen from a witch's grief-driven hunt.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 3,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "multiverse",
   "wanda",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"
 },
 {
  "id": "black-panther-wakanda-forever",
  "title": "Black Panther: Wakanda Forever",
  "year": 2022,
  "director": "Ryan Coogler",
  "genres": [
   "Action",
   "Adventure",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 161,
  "rating": "PG-13",
  "description": "Wakanda mourns its king and faces Namor's underwater nation.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wakanda",
   "namor",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg"
 },
 {
  "id": "ant-man-and-the-wasp",
  "title": "Ant-Man and the Wasp",
  "year": 2018,
  "director": "Peyton Reed",
  "genres": [
   "Action",
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "Scott helps rescue Janet from the Quantum Realm while a ghost phases after the lab.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "quantum",
   "ghost",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg"
 },
 {
  "id": "captain-marvel",
  "title": "Captain Marvel",
  "year": 2019,
  "director": "Anna Boden",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "An amnesiac Kree warrior crashes to 1995 Earth and unlearns her own history.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "kree",
   "1995",
   "amnesia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Captain_Marvel_%28film%29_poster.jpg"
 },
 {
  "id": "the-marvels",
  "title": "The Marvels",
  "year": 2023,
  "director": "Nia DaCosta",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "Three heroes swap places every time they use their powers and must sync up to fight.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "swap",
   "powers",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg"
 },
 {
  "id": "the-incredible-hulk",
  "title": "The Incredible Hulk",
  "year": 2008,
  "director": "Louis Leterrier",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 112,
  "rating": "PG-13",
  "description": "Bruce Banner hunts a cure while the Army builds itself an Abomination.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hulk",
   "cure",
   "army"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg"
 },
 {
  "id": "captain-america-brave-new-world",
  "title": "Captain America: Brave New World",
  "year": 2025,
  "director": "Julius Onah",
  "genres": [
   "Action",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "Sam Wilson's Captain America uncovers a plot inside President Ross's White House.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "samwilson",
   "ross",
   "plot"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg"
 },
 {
  "id": "thunderbolts",
  "title": "Thunderbolts*",
  "year": 2025,
  "director": "Jake Schreier",
  "genres": [
   "Action",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "Burned-out antiheroes are sent to die together and instead become a team over a void.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "antiheroes",
   "void",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg"
 },
 {
  "id": "the-fantastic-four-first-steps",
  "title": "The Fantastic Four: First Steps",
  "year": 2025,
  "director": "Matt Shakman",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "The First Family faces Galactus in a retro-1960s world that loves them.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 9,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "galactus",
   "family",
   "retro"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg"
 },
 {
  "id": "man-of-steel",
  "title": "Man of Steel",
  "year": 2013,
  "director": "Zack Snyder",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Clark Kent chooses Earth as Zod demands the codex in his blood.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "superman",
   "zod",
   "codex"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/Man_of_Steel_%28film%29_poster.jpg"
 },
 {
  "id": "batman-v-superman-dawn-of-justice",
  "title": "Batman v Superman: Dawn of Justice",
  "year": 2016,
  "director": "Zack Snyder",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 151,
  "rating": "PG-13",
  "description": "Batman declares war on Superman while Luthor builds a monster from both their fears.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "batman",
   "superman",
   "luthor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/Batman_v_Superman_Dawn_of_Justice_poster.jpg"
 },
 {
  "id": "suicide-squad",
  "title": "Suicide Squad",
  "year": 2016,
  "director": "David Ayer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "Forced villains are sent to fight a witch in Midway City.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 1,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "villains",
   "witch",
   "squad"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Suicide_Squad_%282016_film%29_poster.png"
 },
 {
  "id": "joker-folie-a-deux",
  "title": "Joker: Folie à Deux",
  "year": 2024,
  "director": "Todd Phillips",
  "genres": [
   "Crime",
   "Drama",
   "Musical",
   "Thriller"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "Arthur Fleck awaits trial, in love and in song, as Gotham decides which man is real.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 5,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "arthur",
   "trial",
   "song"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Joker_-_Folie_%C3%A0_Deux_poster.jpg"
 },
 {
  "id": "constantine",
  "title": "Constantine",
  "year": 2005,
  "director": "Francis Lawrence",
  "genres": [
   "Action",
   "Fantasy",
   "Horror"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "Occult detective John Constantine bargains with angels and demons over a psychic's death.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 4,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "occult",
   "demons",
   "detective"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/Constantine_poster.jpg"
 },
 {
  "id": "watchmen",
  "title": "Watchmen",
  "year": 2009,
  "director": "Zack Snyder",
  "genres": [
   "Action",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 162,
  "rating": "R",
  "description": "Retired masked heroes investigate a murder as nuclear midnight approaches in 1985.",
  "vector": {
   "adrenaline": 7,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "heroes",
   "1985",
   "comedian"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Watchmen_film_poster.jpg"
 },
 {
  "id": "sin-city",
  "title": "Sin City",
  "year": 2005,
  "director": "Frank Miller",
  "genres": [
   "Crime",
   "Action",
   "Thriller"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "Three noir tales in a black-and-white Basin City of killers and saints.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "noir",
   "basincity",
   "tales"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Sincitypostercast.jpg"
 },
 {
  "id": "hellboy",
  "title": "Hellboy",
  "year": 2004,
  "director": "Guillermo del Toro",
  "genres": [
   "Action",
   "Sci-Fi",
   "Fantasy"
  ],
  "runtime": 122,
  "rating": "PG-13",
  "description": "A demon raised by the Bureau fights Rasputin's return and his own destiny.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "demon",
   "rasputin",
   "bureau"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Hellboy_poster.jpg"
 },
 {
  "id": "hellboy-ii-the-golden-army",
  "title": "Hellboy II: The Golden Army",
  "year": 2008,
  "director": "Guillermo del Toro",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "An elf prince wakes a mechanical army to reclaim the world from humans.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "elf",
   "army",
   "prince"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Hellboy_2_poster.jpg"
 },
 {
  "id": "dredd",
  "title": "Dredd",
  "year": 2012,
  "director": "Pete Travis",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Judge Dredd and a rookie psychic fight up a locked 200-story slum.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "judge",
   "slum",
   "rookie"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Dredd2012Poster.jpg"
 },
 {
  "id": "kingsman-the-golden-circle",
  "title": "Kingsman: The Golden Circle",
  "year": 2017,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 141,
  "rating": "R",
  "description": "The Kingsman rebuild with their American cousins against a drug queen's poison.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "statesman",
   "poppy",
   "cousins"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Kingsman_The_Golden_Circle.png"
 },
 {
  "id": "the-king-s-man",
  "title": "The King's Man",
  "year": 2021,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "The Duke of Oxford builds the first Kingsman network to stop a WWI conspiracy.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wwi",
   "oxford",
   "origins"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/The_King%27s_Man.jpg"
 },
 {
  "id": "x-men",
  "title": "X-Men",
  "year": 2000,
  "director": "Bryan Singer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "Wolverine and Rogue join Xavier's school as Magneto plans a mutant forced evolution.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mutants",
   "xavier",
   "magneto"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg"
 },
 {
  "id": "x2-x-men-united",
  "title": "X2: X-Men United",
  "year": 2003,
  "director": "Bryan Singer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "Stryker raids Xavier's school; mutants unite against the man who made Wolverine.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "stryker",
   "school",
   "unite"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/X2_poster.jpg"
 },
 {
  "id": "x-men-the-last-stand",
  "title": "X-Men: The Last Stand",
  "year": 2006,
  "director": "Brett Ratner",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "A mutant 'cure' splits the X-Men as Jean Grey returns as the Phoenix.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "cure",
   "phoenix",
   "stand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/X-Men_The_Last_Stand_2006_theatrical_poster.jpg"
 },
 {
  "id": "the-wolverine",
  "title": "The Wolverine",
  "year": 2013,
  "director": "James Mangold",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "In Japan, a dying tycoon offers Logan mortality in exchange for his healing gift.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "japan",
   "mortality",
   "logan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/The_Wolverine_posterUS.jpg"
 },
 {
  "id": "x-men-apocalypse",
  "title": "X-Men: Apocalypse",
  "year": 2016,
  "director": "Bryan Singer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "The first mutant wakes in 1983 and recruits four horsemen to remake the world.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apocalypse",
   "horsemen",
   "1983"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg"
 },
 {
  "id": "fantastic-four",
  "title": "Fantastic Four",
  "year": 2005,
  "director": "Tim Story",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "Cosmic rays give four friends powers and Victor von Doom a grudge.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "cosmic",
   "doom",
   "four"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Fantastic_Four_poster.jpg"
 },
 {
  "id": "the-amazing-spider-man",
  "title": "The Amazing Spider-Man",
  "year": 2012,
  "director": "Marc Webb",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 136,
  "rating": "PG-13",
  "description": "Peter Parker's search for his parents' secret leads to Oscorp's Lizard.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 6,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lizard",
   "oscorp",
   "parents"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/The_Amazing_Spider-Man_%28film%29_poster.jpg"
 },
 {
  "id": "the-amazing-spider-man-2",
  "title": "The Amazing Spider-Man 2",
  "year": 2014,
  "director": "Marc Webb",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 142,
  "rating": "PG-13",
  "description": "Peter juggles Electro, Oscorp's sins and a promise to stay away from Gwen.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 7,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "electro",
   "gwen",
   "promise"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/The_Amazing_Spider-Man_2_poster.jpg"
 },
 {
  "id": "spider-man",
  "title": "Spider-Man",
  "year": 2002,
  "director": "Sam Raimi",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 121,
  "rating": "PG",
  "description": "A bitten teen learns power and responsibility as the Green Goblin hunts him.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 5,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "goblin",
   "bite",
   "responsibility"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg"
 },
 {
  "id": "spider-man-2",
  "title": "Spider-Man 2",
  "year": 2004,
  "director": "Sam Raimi",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "Peter's life collapses as Doc Ock's fusion reactor threatens New York.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 6,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "docock",
   "train",
   "collapse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Spider-Man_2_USA_poster.jpg"
 },
 {
  "id": "spider-man-3",
  "title": "Spider-Man 3",
  "year": 2007,
  "director": "Sam Raimi",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "A black symbiote suit feeds Peter's ego while Sandman and Venom close in.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 5,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "symbiote",
   "sandman",
   "ego"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_3%2C_International_Poster.jpg"
 },
 {
  "id": "batman",
  "title": "Batman",
  "year": 1989,
  "director": "Tim Burton",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "Gotham's bat vigilante faces the Joker's Smilex plot at the city's bicentennial.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "joker",
   "gotham",
   "burton"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/Batman_%281989%29_theatrical_poster.jpg"
 },
 {
  "id": "batman-returns",
  "title": "Batman Returns",
  "year": 1992,
  "director": "Tim Burton",
  "genres": [
   "Action",
   "Crime",
   "Fantasy"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "The Penguin, Catwoman and a corrupt tycoon turn Gotham's Christmas feral.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 2,
   "funny": 5,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "penguin",
   "catwoman",
   "christmas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg"
 },
 {
  "id": "batman-forever",
  "title": "Batman Forever",
  "year": 1995,
  "director": "Joel Schumacher",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 121,
  "rating": "PG-13",
  "description": "Batman takes on Two-Face and the Riddler, and takes in an orphan named Dick Grayson.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "riddler",
   "twoface",
   "robin"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Batman_Forever_poster.png"
 },
 {
  "id": "superman",
  "title": "Superman",
  "year": 1978,
  "director": "Richard Donner",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 143,
  "rating": "PG",
  "description": "Krypton’s last son becomes Earth's champion and turns back time for love.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 6,
   "epic": 9,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "krypton",
   "donner",
   "champion"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b0/Superman_%281978_film_poster%29.jpg"
 },
 {
  "id": "superman-returns",
  "title": "Superman Returns",
  "year": 2006,
  "director": "Bryan Singer",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 154,
  "rating": "PG-13",
  "description": "Superman returns after five years to a Lois who moved on and a Luthor with kryptonite land.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 6,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "return",
   "lois",
   "luthor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Superman_Returns.jpg"
 },
 {
  "id": "sinister",
  "title": "Sinister",
  "year": 2012,
  "director": "Scott Derrickson",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A true-crime writer moves into a murder house and finds snuff films in the attic.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "attic",
   "films",
   "writer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg"
 },
 {
  "id": "the-nun",
  "title": "The Nun",
  "year": 2018,
  "director": "Corin Hardy",
  "genres": [
   "Horror"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "A priest and a novitiate investigate a nun's suicide in a Romanian abbey in 1952.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "abbey",
   "romania",
   "valak"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg"
 },
 {
  "id": "annabelle",
  "title": "Annabelle",
  "year": 2014,
  "director": "John R. Leonetti",
  "genres": [
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A cult's attack charges a vintage doll that a young couple brings home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "doll",
   "cult",
   "couple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Annabelle_film_poster.jpg"
 },
 {
  "id": "insidious-the-red-door",
  "title": "Insidious: The Red Door",
  "year": 2023,
  "director": "Patrick Wilson",
  "genres": [
   "Horror"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "College-bound Dalton's repressed memories reopen the Further for the whole family.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "further",
   "dalton",
   "college"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Insidious_the_red_door.png"
 },
 {
  "id": "escape-room",
  "title": "Escape Room",
  "year": 2019,
  "director": "Adam Robitel",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "PG-13",
  "description": "Six strangers compete in deadly escape rooms designed from their own traumas.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 6,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "rooms",
   "strangers",
   "trauma"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/Escape_Room_%282019_poster%29.png"
 },
 {
  "id": "unfriended",
  "title": "Unfriended",
  "year": 2014,
  "director": "Levan Gabriadze",
  "genres": [
   "Horror"
  ],
  "runtime": 82,
  "rating": "R",
  "description": "A dead classmate joins six friends' Skype call on the anniversary of her suicide.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 3,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "skype",
   "classmate",
   "screen"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Unfriended_%282014%29_original_poster.jpg"
 },
 {
  "id": "host",
  "title": "Host",
  "year": 2020,
  "director": "Rob Savage",
  "genres": [
   "Horror"
  ],
  "runtime": 57,
  "rating": "NR",
  "description": "Six friends hold a Zoom séance during lockdown and invite something real.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 9,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "zoom",
   "seance",
   "lockdown"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/94/Host_%28film%29.jpg"
 },
 {
  "id": "deadstream",
  "title": "Deadstream",
  "year": 2022,
  "director": "Joseph Winter",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 87,
  "rating": "NR",
  "description": "A disgraced streamer spends a night alone in a haunted house for the views.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 7,
   "funny": 7,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "streamer",
   "haunted",
   "views"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Deadstream-poster.png"
 },
 {
  "id": "v-h-s",
  "title": "V/H/S",
  "year": 2012,
  "director": "Adam Wingard",
  "genres": [
   "Horror"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "Burglars hired to steal one tape watch found footage that rewrites the night.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 8,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "tapes",
   "anthology",
   "foundfootage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cd/Vhs-film-poster.jpg"
 },
 {
  "id": "creep",
  "title": "Creep",
  "year": 2014,
  "director": "Patrick Brice",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 77,
  "rating": "R",
  "description": "A videographer answers a dying man's ad; Josef is friendly, then wrong.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 3,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "videographer",
   "josef",
   "ad"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/Creep_%282014_film%29_poster.jpg"
 },
 {
  "id": "creep-2",
  "title": "Creep 2",
  "year": 2017,
  "director": "Patrick Brice",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 78,
  "rating": "NR",
  "description": "A video artist who can't feel anything meets Josef, who promises her a real story.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 4,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "artist",
   "josef",
   "story"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Creep2Poster.jpg"
 },
 {
  "id": "hell-house-llc",
  "title": "Hell House LLC",
  "year": 2015,
  "director": "Stephen Cognetti",
  "genres": [
   "Horror"
  ],
  "runtime": 93,
  "rating": "NR",
  "description": "Documentary footage reconstructs a haunted-house attraction's opening-night disaster.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "attraction",
   "footage",
   "hotel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/Hell_House_LLC_poster.jpg"
 },
 {
  "id": "grave-encounters",
  "title": "Grave Encounters",
  "year": 2011,
  "director": "Colin Minihan",
  "genres": [
   "Horror"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A ghost-hunting TV crew locks itself into an asylum that won't let the night end.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "asylum",
   "tvcrew",
   "night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Grave-Encounters-Poster-2011.jpg"
 },
 {
  "id": "the-taking-of-deborah-logan",
  "title": "The Taking of Deborah Logan",
  "year": 2014,
  "director": "Adam Robitel",
  "genres": [
   "Horror"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "A student film about Alzheimer's becomes a record of possession.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "alzheimers",
   "film",
   "possession"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/The_Taking_of_Deborah_Logan.png"
 },
 {
  "id": "lake-mungo",
  "title": "Lake Mungo",
  "year": 2008,
  "director": "Joel Anderson",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 87,
  "rating": "R",
  "description": "A drowned teen's family finds her in their photos, and her secrets behind them.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "photos",
   "drowned",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Lake_Mungo_Official_Poster.jpg"
 },
 {
  "id": "noroi-the-curse",
  "title": "Noroi: The Curse",
  "year": 2005,
  "director": "Kōji Shiraishi",
  "genres": [
   "Horror"
  ],
  "runtime": 115,
  "rating": "NR",
  "description": "A documentary maker's last investigation into a demon called Kagutaba.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "documentary",
   "demon",
   "investigation"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9b/Noroi_The_Curse_1a.jpg"
 },
 {
  "id": "the-blair-witch-project",
  "title": "The Blair Witch Project",
  "year": 1999,
  "director": "Daniel Myrick",
  "genres": [
   "Horror"
  ],
  "runtime": 81,
  "rating": "R",
  "description": "Three student filmmakers vanish in the Burkittsville woods; only their footage remains.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "woods",
   "footage",
   "witch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Blair_Witch_Project.jpg"
 },
 {
  "id": "paranormal-activity",
  "title": "Paranormal Activity",
  "year": 2007,
  "director": "Oren Peli",
  "genres": [
   "Horror"
  ],
  "runtime": 86,
  "rating": "R",
  "description": "A couple films their bedroom to catch whatever stands over them at night.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "bedroom",
   "camera",
   "night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Paranormal_Activity_poster.jpg"
 },
 {
  "id": "the-last-exorcism",
  "title": "The Last Exorcism",
  "year": 2010,
  "director": "Daniel Stamm",
  "genres": [
   "Horror"
  ],
  "runtime": 87,
  "rating": "PG-13",
  "description": "A fake exorcist filming his fraud meets a case that stops pretending.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "exorcist",
   "fraud",
   "farm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/The_Last_Exorcism_Poster.jpg"
 },
 {
  "id": "cloverfield",
  "title": "Cloverfield",
  "year": 2008,
  "director": "Matt Reeves",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Action"
  ],
  "runtime": 85,
  "rating": "PG-13",
  "description": "A going-away party becomes found footage of a monster eating Manhattan.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "monster",
   "manhattan",
   "footage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f1/Cloverfield_theatrical_poster.jpg"
 },
 {
  "id": "10-cloverfield-lane",
  "title": "10 Cloverfield Lane",
  "year": 2016,
  "director": "Dan Trachtenberg",
  "genres": [
   "Thriller",
   "Sci-Fi",
   "Horror"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "A woman wakes in a bunker whose keeper insists the world outside has ended.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 6,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "bunker",
   "keeper",
   "outside"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/10_Cloverfield_Lane.png"
 },
 {
  "id": "color-out-of-space",
  "title": "Color Out of Space",
  "year": 2019,
  "director": "Richard Stanley",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 111,
  "rating": "NR",
  "description": "A meteorite's impossible color poisons a family's farm, water and bodies.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "meteorite",
   "color",
   "farm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Color_Out_of_Space_%282019%29_poster.jpg"
 },
 {
  "id": "mandy",
  "title": "Mandy",
  "year": 2018,
  "director": "Panos Cosmatos",
  "genres": [
   "Horror",
   "Action"
  ],
  "runtime": 121,
  "rating": "NR",
  "description": "A logger forges an axe and hunts the cult that burned his love, through neon hell.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 7,
   "funny": 2,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 4,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "cult",
   "axe",
   "neon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/Mandy_%282018_film%29.png"
 },
 {
  "id": "the-endless",
  "title": "The Endless",
  "year": 2017,
  "director": "Justin Benson",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Thriller"
  ],
  "runtime": 111,
  "rating": "NR",
  "description": "Brothers revisit the UFO cult they escaped and find its sky still loops.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 6,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "cult",
   "brothers",
   "loops"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/43/The_Endless.png"
 },
 {
  "id": "spring",
  "title": "Spring",
  "year": 2014,
  "director": "Justin Benson",
  "genres": [
   "Romance",
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 109,
  "rating": "NR",
  "description": "A grieving traveler falls for an Italian woman whose secret is evolutionary.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 5,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "italy",
   "secret",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Spring_%282014_film%29_POSTER.jpg"
 },
 {
  "id": "under-the-skin",
  "title": "Under the Skin",
  "year": 2013,
  "director": "Jonathan Glazer",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "An alien in human skin cruises Glasgow's streets hunting lone men.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 6,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "alien",
   "glasgow",
   "skin"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/Under_the_Skin_poster.png"
 },
 {
  "id": "the-killing-of-a-sacred-deer",
  "title": "The Killing of a Sacred Deer",
  "year": 2017,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Drama",
   "Thriller",
   "Horror"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A surgeon must choose which family member dies to settle a teenager's curse.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 5,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "surgeon",
   "curse",
   "choice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Killing_of_a_Sacred_Deer.png"
 },
 {
  "id": "the-lobster",
  "title": "The Lobster",
  "year": 2015,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Comedy",
   "Drama",
   "Romance",
   "Sci-Fi"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Singles have 45 days to find love or be turned into an animal of their choice.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 6,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 6,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "hotel",
   "animal",
   "singles"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Lobster_%282015%29_poster.jpg"
 },
 {
  "id": "dogtooth",
  "title": "Dogtooth",
  "year": 2009,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 97,
  "rating": "NR",
  "description": "Three adult children are raised in a fenced fiction where cats are monsters.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 3,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "fence",
   "fiction",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/Dogtooth%282009%29_poster.jpg"
 },
 {
  "id": "triangle-of-sadness",
  "title": "Triangle of Sadness",
  "year": 2022,
  "director": "Ruben Östlund",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 147,
  "rating": "R",
  "description": "A luxury cruise of the ultra-rich capsizes the social order onto a desert island.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "cruise",
   "rich",
   "island"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/TriangleOfSadness2022Poster.jpg"
 },
 {
  "id": "the-square",
  "title": "The Square",
  "year": 2017,
  "director": "Ruben Östlund",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 151,
  "rating": "R",
  "description": "A museum curator's phone theft unravels his liberal self-image, ape performance included.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 6,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "museum",
   "curator",
   "ape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/The_Square_%282017_film%29_poster.png"
 },
 {
  "id": "force-majeure",
  "title": "Force Majeure",
  "year": 2014,
  "director": "Ruben Östlund",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A father flees an avalanche before his family does; the ski trip never recovers.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "avalanche",
   "father",
   "ski"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Force_Majeure_poster.jpg"
 },
 {
  "id": "toni-erdmann",
  "title": "Toni Erdmann",
  "year": 2016,
  "director": "Maren Ade",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 162,
  "rating": "R",
  "description": "A prankster father invades his consultant daughter's Bucharest life in a wig.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "father",
   "wig",
   "bucharest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/Toni_Erdmann.png"
 },
 {
  "id": "a-man-called-ove",
  "title": "A Man Called Ove",
  "year": 2015,
  "director": "Hannes Holm",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A suicidal widower is interrupted by the chaotic family moving in next door.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 5,
   "romantic": 2,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "widower",
   "neighbors",
   "cat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/A_Man_Called_Ove.png"
 },
 {
  "id": "the-hunt",
  "title": "The Hunt",
  "year": 2012,
  "director": "Thomas Vinterberg",
  "genres": [
   "Drama"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A kindergarten teacher's life is destroyed by one child's innocent lie.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "teacher",
   "lie",
   "village"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/The_Hunt_%282012_film%29.jpg"
 },
 {
  "id": "another-round",
  "title": "Another Round",
  "year": 2020,
  "director": "Thomas Vinterberg",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 117,
  "rating": "NR",
  "description": "Four teachers test a theory that humans run best slightly drunk.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "teachers",
   "drinking",
   "theory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Another_Round_%28film%29.jpg"
 },
 {
  "id": "a-separation",
  "title": "A Separation",
  "year": 2011,
  "director": "Asghar Farhadi",
  "genres": [
   "Drama"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "A couple's divorce and a caretaker's accident entangle two families in Tehran.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "tehran",
   "divorce",
   "caretaker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/A_Separation_%282011_film_poster%29.png"
 },
 {
  "id": "capernaum",
  "title": "Capernaum",
  "year": 2018,
  "director": "Nadine Labaki",
  "genres": [
   "Drama"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "A Beirut boy sues his parents for giving him life in a world that can't hold him.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "beirut",
   "lawsuit",
   "boy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Capernaum_%28film%29.jpg"
 },
 {
  "id": "shoplifters",
  "title": "Shoplifters",
  "year": 2018,
  "director": "Hirokazu Koreeda",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A poor Tokyo family of shoplifters takes in an abused girl and chooses kinship.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "tokyo",
   "family",
   "shoplifting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/Shoplifters_%28film%29.jpg"
 },
 {
  "id": "broker",
  "title": "Broker",
  "year": 2022,
  "director": "Hirokazu Koreeda",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "Two baby-box brokers, a mother and a detective road-trip toward a found family.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "babybox",
   "roadtrip",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Broker_%282022_film%29.jpg"
 },
 {
  "id": "monster",
  "title": "Monster",
  "year": 2023,
  "director": "Hirokazu Koreeda",
  "genres": [
   "Drama"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A mother, a teacher and two boys tell one school incident three ways.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "school",
   "incident",
   "threeways"
  ],
  "poster": ""
 },
 {
  "id": "perfect-days",
  "title": "Perfect Days",
  "year": 2023,
  "director": "Wim Wenders",
  "genres": [
   "Drama"
  ],
  "runtime": 125,
  "rating": "PG",
  "description": "A Tokyo toilet cleaner lives a perfect routine of books, tapes and trees.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 0,
   "epic": 2,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "tokyo",
   "routine",
   "trees"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/Perfect_Days_poster.jpg"
 },
 {
  "id": "fallen-leaves",
  "title": "Fallen Leaves",
  "year": 2023,
  "director": "Aki Kaurismäki",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 81,
  "rating": "NR",
  "description": "Two lonely Helsinki workers keep almost meeting, losing a phone number to the wind.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 8,
   "epic": 2,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "helsinki",
   "workers",
   "number"
  ],
  "poster": ""
 },
 {
  "id": "the-quiet-girl",
  "title": "The Quiet Girl",
  "year": 2022,
  "director": "Colm Bairéad",
  "genres": [
   "Drama"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "A neglected girl spends a summer with distant relatives who speak gently.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "ireland",
   "summer",
   "relatives"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/An_Cail%C3%ADn_Ci%C3%BAin_poster.jpg"
 },
 {
  "id": "la-chimera",
  "title": "La Chimera",
  "year": 2023,
  "director": "Alice Rohrwacher",
  "genres": [
   "Drama",
   "Adventure",
   "Romance"
  ],
  "runtime": 130,
  "rating": "NR",
  "description": "A grief-sick tomb raider in 1980s Italy digs for Etruscan gold and his lost love.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 6,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "tombs",
   "italy",
   "gold"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/La_chimera_poster.jpg"
 },
 {
  "id": "the-seed-of-the-sacred-fig",
  "title": "The Seed of the Sacred Fig",
  "year": 2024,
  "director": "Mohammad Rasoulof",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 167,
  "rating": "NR",
  "description": "A Tehran judge's gun vanishes at home as protests fill the streets outside.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "tehran",
   "gun",
   "judge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/59/Les_Graines_du_figuier_sauvage_2024_film_poster.jpg"
 },
 {
  "id": "all-we-imagine-as-light",
  "title": "All We Imagine as Light",
  "year": 2024,
  "director": "Payal Kapadia",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 118,
  "rating": "NR",
  "description": "Two Mumbai nurses chase small freedoms between hospital shifts and monsoon rooms.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 7,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "mumbai",
   "nurses",
   "monsoon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/All_We_Imagine_as_Light_film_poster.jpg"
 },
 {
  "id": "the-piano-lesson",
  "title": "The Piano Lesson",
  "year": 2024,
  "director": "Malcolm Washington",
  "genres": [
   "Drama"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "A brother and sister fight over selling the piano carved with their family's history.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "piano",
   "siblings",
   "history"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Piano_Lesson_%282024_film%29_poster.jpg"
 },
 {
  "id": "the-room-next-door",
  "title": "The Room Next Door",
  "year": 2024,
  "director": "Pedro Almodóvar",
  "genres": [
   "Drama"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A dying writer asks an old friend to be in the next room when she ends it.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "writer",
   "friend",
   "room"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/The_Room_Next_Door_poster.jpg"
 },
 {
  "id": "hard-truths",
  "title": "Hard Truths",
  "year": 2024,
  "director": "Mike Leigh",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "Pansy rages at the whole world while her family's patience quietly thins.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "pansy",
   "rage",
   "family"
  ],
  "poster": ""
 },
 {
  "id": "cold-war",
  "title": "Cold War",
  "year": 2018,
  "director": "Paweł Pawlikowski",
  "genres": [
   "Drama",
   "Romance",
   "Music"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "A singer and a pianist cross the Iron Curtain toward and away from each other for 15 years.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 9,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "poland",
   "curtain",
   "singers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Cold_War_%282018_film%29.jpg"
 },
 {
  "id": "close",
  "title": "Close",
  "year": 2022,
  "director": "Lukas Dhont",
  "genres": [
   "Drama"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "Two inseparable 13-year-old friends are pulled apart by their classmates' labels.",
  "vector": {
   "adrenaline": 1,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "friends",
   "school",
   "labels"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/Close_2022.jpg"
 },
 {
  "id": "paddington",
  "title": "Paddington",
  "year": 2014,
  "director": "Paul King",
  "genres": [
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "A polite Peruvian bear finds a home with the Browns and a taxidermist's eye on him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "bear",
   "london",
   "browns"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/PaddingtonPOSTER.jpg"
 },
 {
  "id": "paddington-2",
  "title": "Paddington 2",
  "year": 2017,
  "director": "Paul King",
  "genres": [
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "Paddington is framed for stealing a pop-up book and prison becomes kinder around him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "popupbook",
   "prison",
   "frame"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Paddington_2_poster.jpg"
 },
 {
  "id": "paddington-in-peru",
  "title": "Paddington in Peru",
  "year": 2024,
  "director": "Dougal Wilson",
  "genres": [
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "Paddington returns to Peru to find his Aunt Lucy, with the Browns swept along.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "peru",
   "auntlucy",
   "jungle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/Paddington_in_Peru_poster.jpg"
 },
 {
  "id": "wonka",
  "title": "Wonka",
  "year": 2023,
  "director": "Paul King",
  "genres": [
   "Family",
   "Fantasy",
   "Musical",
   "Comedy"
  ],
  "runtime": 116,
  "rating": "PG",
  "description": "Young Willy Wonka battles a chocolate cartel with inventions and a stolen giraffe.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "chocolate",
   "cartel",
   "young"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg"
 },
 {
  "id": "bad-boys-for-life",
  "title": "Bad Boys for Life",
  "year": 2020,
  "director": "Adil & Bilall",
  "genres": [
   "Action",
   "Comedy",
   "Crime"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "Lowrey and Burnett face a vengeful cartel witch's son in their last ride together.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "miami",
   "cartel",
   "partners"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg"
 },
 {
  "id": "bad-boys-ride-or-die",
  "title": "Bad Boys: Ride or Die",
  "year": 2024,
  "director": "Adil & Bilall",
  "genres": [
   "Action",
   "Comedy",
   "Crime"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "The boys clear their late captain's name while framed and hunted themselves.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "framed",
   "captain",
   "miami"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg"
 },
 {
  "id": "sonic-the-hedgehog",
  "title": "Sonic the Hedgehog",
  "year": 2020,
  "director": "Jeff Fowler",
  "genres": [
   "Action",
   "Adventure",
   "Comedy",
   "Family"
  ],
  "runtime": 99,
  "rating": "PG",
  "description": "Sonic hides in Montana until Robotnik's drones drive him onto a road trip.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "sonic",
   "roadtrip",
   "robotnik"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg"
 },
 {
  "id": "sonic-the-hedgehog-2",
  "title": "Sonic the Hedgehog 2",
  "year": 2022,
  "director": "Jeff Fowler",
  "genres": [
   "Action",
   "Adventure",
   "Comedy",
   "Family"
  ],
  "runtime": 122,
  "rating": "PG",
  "description": "Knuckles hunts the Master Emerald while Sonic learns what a hero actually is.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "knuckles",
   "emerald",
   "tails"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Sonic_the_Hedgehog_2_film_poster.jpg"
 },
 {
  "id": "sonic-the-hedgehog-3",
  "title": "Sonic the Hedgehog 3",
  "year": 2024,
  "director": "Jeff Fowler",
  "genres": [
   "Action",
   "Adventure",
   "Comedy",
   "Family"
  ],
  "runtime": 110,
  "rating": "PG",
  "description": "Shadow the Hedgehog wakes with a grudge older than Sonic himself.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "shadow",
   "grudge",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg"
 },
 {
  "id": "pokemon-detective-pikachu",
  "title": "Pokémon Detective Pikachu",
  "year": 2019,
  "director": "Rob Letterman",
  "genres": [
   "Adventure",
   "Comedy",
   "Family",
   "Mystery"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "A failed trainer and a talking Pikachu investigate his detective father's crash.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "pikachu",
   "detective",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Pok%C3%A9mon_Detective_Pikachu_teaser_poster.jpg"
 },
 {
  "id": "the-addams-family",
  "title": "The Addams Family",
  "year": 2019,
  "director": "Greg Tiernan",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 86,
  "rating": "PG",
  "description": "The Addams move to New Jersey and horrify a reality-TV suburb by existing.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "addams",
   "suburb",
   "tv"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/The_Addams_Family_%282019_film%29.png"
 },
 {
  "id": "anchorman-2-the-legend-continues",
  "title": "Anchorman 2: The Legend Continues",
  "year": 2013,
  "director": "Adam McKay",
  "genres": [
   "Comedy"
  ],
  "runtime": 113,
  "rating": "PG-13",
  "description": "Ron Burgundy reunites the news team to invent 24-hour cable news in New York.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "news",
   "cablenews",
   "newyork"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Anchorman_2_Teaser_Poster.jpg"
 },
 {
  "id": "neighbors",
  "title": "Neighbors",
  "year": 2014,
  "director": "Nicholas Stoller",
  "genres": [
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "New parents declare prank war on the fraternity that moves in next door.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "fraternity",
   "parents",
   "war"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Neighbors_%282013%29_Poster.jpg"
 },
 {
  "id": "the-night-before",
  "title": "The Night Before",
  "year": 2015,
  "director": "Jonathan Levine",
  "genres": [
   "Comedy"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "Three friends hold their final Christmas Eve hunt for the Nutcracka Ball.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "christmas",
   "friends",
   "party"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/TheNightBefore2015poster.jpg"
 },
 {
  "id": "the-spy-who-dumped-me",
  "title": "The Spy Who Dumped Me",
  "year": 2018,
  "director": "Susanna Fogel",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "Two best friends flee across Europe with a spy drive and zero training.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "europe",
   "drive",
   "friends"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/25/The_Spy_Who_Dumped_Me.png"
 },
 {
  "id": "murder-mystery",
  "title": "Murder Mystery",
  "year": 2019,
  "director": "Kyle Newacheck",
  "genres": [
   "Comedy",
   "Mystery",
   "Action"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A broke NY cop and his wife are framed for a murder on a billionaire's yacht.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "yacht",
   "framed",
   "couple"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/Murder_Mystery_%28film%29.png"
 },
 {
  "id": "wine-country",
  "title": "Wine Country",
  "year": 2019,
  "director": "Amy Poehler",
  "genres": [
   "Comedy"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "Six friends' Napa fiftieth-birthday weekend ferments old resentments.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "napa",
   "birthday",
   "friends"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Wine_Country.jpg"
 },
 {
  "id": "long-shot",
  "title": "Long Shot",
  "year": 2019,
  "director": "Jonathan Levine",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A fired journalist becomes speechwriter — and more — for the Secretary of State he babysat for.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "speechwriter",
   "secretary",
   "babysitter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Long_Shot_%282019_poster%29.png"
 },
 {
  "id": "late-night",
  "title": "Late Night",
  "year": 2019,
  "director": "Nisha Ganatra",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A late-night host hires her only female writer to save a dying show.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "talkshow",
   "writer",
   "host"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/Late_Night_poster.jpeg"
 },
 {
  "id": "stuber",
  "title": "Stuber",
  "year": 2019,
  "director": "Michael Dowse",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "An Uber driver with fresh LASIK is conscripted into a cop's night hunt.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "uber",
   "cop",
   "lasik"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Stuber_poster.jpg"
 },
 {
  "id": "men-in-black-international",
  "title": "Men in Black: International",
  "year": 2019,
  "director": "F. Gary Gray",
  "genres": [
   "Action",
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "A new recruit and Agent H chase a mole and a universe-ending weapon.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mib",
   "mole",
   "weapon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/Men_in_Black_International_%28Official_Film_Poster%29.png"
 },
 {
  "id": "hustlers",
  "title": "Hustlers",
  "year": 2019,
  "director": "Lorene Scafaria",
  "genres": [
   "Crime",
   "Drama",
   "Comedy"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "Strippers drug and drain Wall Street clients after the 2008 crash empties the club.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "strippers",
   "wallstreet",
   "crash"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/Hustlers_%28Official_Film_Poster%29.png"
 },
 {
  "id": "argylle",
  "title": "Argylle",
  "year": 2024,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Comedy",
   "Thriller"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "A spy novelist's fiction mirrors a real syndicate, which comes to collect her.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "novelist",
   "syndicate",
   "cat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Argylle_poster.jpg"
 },
 {
  "id": "ambulance",
  "title": "Ambulance",
  "year": 2022,
  "director": "Michael Bay",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "Two brothers hijack an ambulance after a heist, with a wounded cop in the back.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ambulance",
   "heist",
   "brothers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/Ambulance_film_poster.jpg"
 },
 {
  "id": "uncharted",
  "title": "Uncharted",
  "year": 2022,
  "director": "Ruben Fleischer",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "Nathan Drake and Sully race a billionaire to Magellan's lost gold.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "gold",
   "magellan",
   "drake"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Uncharted_Official_Poster.jpg"
 },
 {
  "id": "jumanji-the-next-level",
  "title": "Jumanji: The Next Level",
  "year": 2019,
  "director": "Jake Kasdan",
  "genres": [
   "Adventure",
   "Comedy",
   "Action",
   "Fantasy"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "The teens return to Jumanji — with two grandfathers as very confused avatars.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "grandfathers",
   "avatars",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Jumanji_-The_Next_Level_film_poster.jpg"
 },
 {
  "id": "the-wolf-of-wall-street",
  "title": "The Wolf of Wall Street",
  "year": 2013,
  "director": "Martin Scorsese",
  "genres": [
   "Comedy",
   "Crime",
   "Drama"
  ],
  "runtime": 180,
  "rating": "R",
  "description": "Jordan Belfort builds a brokerage empire on quaaludes, fraud and pure velocity until the FBI catches up.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "stockbroker",
   "fraud",
   "excess"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png"
 },
 {
  "id": "the-hangover",
  "title": "The Hangover",
  "year": 2009,
  "director": "Todd Phillips",
  "genres": [
   "Comedy"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A Vegas bachelor party wakes up with no groom, a tiger, and a baby — and reconstructs the night.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 10,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "vegas",
   "bachelor",
   "tiger"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
 },
 {
  "id": "the-bourne-supremacy",
  "title": "The Bourne Supremacy",
  "year": 2004,
  "director": "Paul Greengrass",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 108,
  "rating": "PG-13",
  "description": "Framed for a CIA kill, Bourne runs across Europe hunting the men who built him.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "spy",
   "amnesia",
   "chase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/30/Bourne_supremacy_ver2.jpg"
 },
 {
  "id": "mission-impossible-iii",
  "title": "Mission: Impossible III",
  "year": 2006,
  "director": "J.J. Abrams",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "Ethan Hunt races to rescue his fiancée from a sadistic arms dealer.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spy",
   "rescue",
   "stunts"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Mission_Impossible_III.jpg"
 },
 {
  "id": "mission-impossible-ghost-protocol",
  "title": "Mission: Impossible - Ghost Protocol",
  "year": 2011,
  "director": "Brad Bird",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 133,
  "rating": "PG-13",
  "description": "Disavowed and framed, Hunt's team scales the Burj Khalifa to stop a nuclear zealot.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spy",
   "heist",
   "dubai"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b5/Mission_impossible_ghost_protocol.jpg"
 },
 {
  "id": "mission-impossible-rogue-nation",
  "title": "Mission: Impossible - Rogue Nation",
  "year": 2015,
  "director": "Christopher McQuarrie",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 131,
  "rating": "PG-13",
  "description": "Hunt goes rogue against the Syndicate, a shadow network of spurned spies.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spy",
   "motorcycle",
   "opera"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Mission_Impossible_Rogue_Nation_poster.jpg"
 },
 {
  "id": "mission-impossible-dead-reckoning",
  "title": "Mission: Impossible - Dead Reckoning",
  "year": 2023,
  "director": "Christopher McQuarrie",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 163,
  "rating": "PG-13",
  "description": "Hunt chases two keys that could hand a rogue AI control of the truth itself.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "spy",
   "ai",
   "train"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg"
 },
 {
  "id": "batman-begins",
  "title": "Batman Begins",
  "year": 2005,
  "director": "Christopher Nolan",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "Bruce Wayne forges his fear into a symbol to save a rotting Gotham.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "origin",
   "batman",
   "fear"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg"
 },
 {
  "id": "the-dark-knight-rises",
  "title": "The Dark Knight Rises",
  "year": 2012,
  "director": "Christopher Nolan",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 165,
  "rating": "PG-13",
  "description": "A broken Bruce Wayne returns to face Bane's siege of Gotham.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "batman",
   "siege",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg"
 },
 {
  "id": "iron-man-2",
  "title": "Iron Man 2",
  "year": 2010,
  "director": "Jon Favreau",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "Tony Stark's arc reactor is poisoning him while a vengeful inventor arms his tech.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "armor",
   "rival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg"
 },
 {
  "id": "iron-man-3",
  "title": "Iron Man 3",
  "year": 2013,
  "director": "Shane Black",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Stripped of his suits, a traumatized Stark hunts the Mandarin with wits alone.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "ptsd",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg"
 },
 {
  "id": "thor",
  "title": "Thor",
  "year": 2011,
  "director": "Kenneth Branagh",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "Banished to Earth, the arrogant god of thunder must earn back his hammer.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "myth",
   "exile"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg"
 },
 {
  "id": "thor-ragnarok",
  "title": "Thor: Ragnarok",
  "year": 2017,
  "director": "Taika Waititi",
  "genres": [
   "Action",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Thor and Hulk are stranded on a gladiator planet as Asgard faces its end.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "gladiator",
   "buddy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg"
 },
 {
  "id": "captain-america-the-first-avenger",
  "title": "Captain America: The First Avenger",
  "year": 2011,
  "director": "Joe Johnston",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A frail Brooklyn kid becomes a super-soldier to fight Hydra in WWII.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "marvel",
   "wwii",
   "hero"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg"
 },
 {
  "id": "captain-america-the-winter-soldier",
  "title": "Captain America: The Winter Soldier",
  "year": 2014,
  "director": "Anthony Russo",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 136,
  "rating": "PG-13",
  "description": "Steve Rogers uncovers a conspiracy inside SHIELD and a ghost from his past.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marvel",
   "conspiracy",
   "shield"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg"
 },
 {
  "id": "captain-america-civil-war",
  "title": "Captain America: Civil War",
  "year": 2016,
  "director": "Anthony Russo",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 147,
  "rating": "PG-13",
  "description": "The Avengers fracture over government control, and old wounds turn them on each other.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marvel",
   "fracture",
   "airport"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg"
 },
 {
  "id": "the-avengers",
  "title": "The Avengers",
  "year": 2012,
  "director": "Joss Whedon",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Earth's mightiest heroes assemble to stop Loki and his alien army over New York.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "team",
   "invasion"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
 },
 {
  "id": "avengers-age-of-ultron",
  "title": "Avengers: Age of Ultron",
  "year": 2015,
  "director": "Joss Whedon",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Stark's peacekeeping AI wakes up murderous, and the team must outrun their own creation.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "ai",
   "ultron"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
 },
 {
  "id": "avengers-infinity-war",
  "title": "Avengers: Infinity War",
  "year": 2018,
  "director": "Anthony Russo",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 149,
  "rating": "PG-13",
  "description": "Every hero races to keep the Infinity Stones from Thanos and his snap.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 10,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marvel",
   "thanos",
   "stones"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
 },
 {
  "id": "guardians-of-the-galaxy-vol-2",
  "title": "Guardians of the Galaxy Vol. 2",
  "year": 2017,
  "director": "James Gunn",
  "genres": [
   "Action",
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 136,
  "rating": "PG-13",
  "description": "Quill meets his celestial father while the team's found family is tested.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "father",
   "space"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg"
 },
 {
  "id": "guardians-of-the-galaxy-vol-3",
  "title": "Guardians of the Galaxy Vol. 3",
  "year": 2023,
  "director": "James Gunn",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 150,
  "rating": "PG-13",
  "description": "The Guardians rally to save Rocket from the creator who made him a weapon.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 6,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "rocket",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg"
 },
 {
  "id": "doctor-strange",
  "title": "Doctor Strange",
  "year": 2016,
  "director": "Scott Derrickson",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "A ruined surgeon learns the mystic arts and bends time to save reality.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "marvel",
   "magic",
   "time"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg"
 },
 {
  "id": "ant-man",
  "title": "Ant-Man",
  "year": 2015,
  "director": "Peyton Reed",
  "genres": [
   "Action",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 117,
  "rating": "PG-13",
  "description": "A thief in a shrinking suit pulls off a heist to keep the tech out of wrong hands.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "heist",
   "shrink"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg"
 },
 {
  "id": "spider-man-homecoming",
  "title": "Spider-Man: Homecoming",
  "year": 2017,
  "director": "Jon Watts",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 133,
  "rating": "PG-13",
  "description": "Teen Peter Parker juggles homework and a weapons-dealing Vulture in Queens.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "marvel",
   "teen",
   "queens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"
 },
 {
  "id": "spider-man-far-from-home",
  "title": "Spider-Man: Far From Home",
  "year": 2019,
  "director": "Jon Watts",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 129,
  "rating": "PG-13",
  "description": "A school trip to Europe collides with elemental monsters and a charming fraud.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "europe",
   "illusion"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
 },
 {
  "id": "spider-man-no-way-home",
  "title": "Spider-Man: No Way Home",
  "year": 2021,
  "director": "Jon Watts",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 148,
  "rating": "PG-13",
  "description": "A botched spell cracks the multiverse and Peter must send every visitor home.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 3,
   "epic": 9,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "marvel",
   "multiverse",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
 },
 {
  "id": "deadpool-2",
  "title": "Deadpool 2",
  "year": 2018,
  "director": "David Leitch",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Wade Wilson builds a misfit team to protect a mutant kid from a time-traveling soldier.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "marvel",
   "meta",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Deadpool_2_poster.jpg"
 },
 {
  "id": "deadpool-wolverine",
  "title": "Deadpool & Wolverine",
  "year": 2024,
  "director": "Shawn Levy",
  "genres": [
   "Action",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Deadpool drags a very reluctant Wolverine across the multiverse to save his world.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "marvel",
   "multiverse",
   "buddy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg"
 },
 {
  "id": "x-men-first-class",
  "title": "X-Men: First Class",
  "year": 2011,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 131,
  "rating": "PG-13",
  "description": "Xavier and Magneto forge their bond during the Cuban Missile Crisis.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "origins",
   "1960s"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/X-MenFirstClassMoviePoster.jpg"
 },
 {
  "id": "x-men-days-of-future-past",
  "title": "X-Men: Days of Future Past",
  "year": 2014,
  "director": "Bryan Singer",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 132,
  "rating": "PG-13",
  "description": "Wolverine is sent to 1973 to stop the Sentinels before mutants are wiped out.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "marvel",
   "timetravel",
   "sentinels"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/X-Men_Days_of_Future_Past_poster.jpg"
 },
 {
  "id": "wonder-woman",
  "title": "Wonder Woman",
  "year": 2017,
  "director": "Patty Jenkins",
  "genres": [
   "Action",
   "Adventure"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Diana leaves Themyscira to end the Great War and confront Ares himself.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "dc",
   "wwi",
   "amazon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b0/Wonder_Woman_%282017_film%29_poster.jpg"
 },
 {
  "id": "aquaman",
  "title": "Aquaman",
  "year": 2018,
  "director": "James Wan",
  "genres": [
   "Action",
   "Adventure",
   "Fantasy"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Arthur Curry dives into an undersea civil war to claim Atlantis's throne.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "dc",
   "ocean",
   "trident"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg"
 },
 {
  "id": "shazam",
  "title": "Shazam!",
  "year": 2019,
  "director": "David F. Sandberg",
  "genres": [
   "Action",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 132,
  "rating": "PG-13",
  "description": "A foster kid says one magic word and becomes a very immature superhero.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "dc",
   "foster",
   "wish"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Shazam%21_%28film%29_poster.jpg"
 },
 {
  "id": "the-batman",
  "title": "The Batman",
  "year": 2022,
  "director": "Matt Reeves",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 176,
  "rating": "PG-13",
  "description": "A young Batman follows the Riddler's ciphers through Gotham's corrupt elite.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "dc",
   "riddler",
   "noir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg"
 },
 {
  "id": "kingsman-the-secret-service",
  "title": "Kingsman: The Secret Service",
  "year": 2014,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A street kid is recruited into a tailor-shop spy agency as a billionaire plots a cull.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "spy",
   "tailor",
   "umbrella"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Kingsman_The_Secret_Service_poster.jpg"
 },
 {
  "id": "kick-ass",
  "title": "Kick-Ass",
  "year": 2010,
  "director": "Matthew Vaughn",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A comic nerd becomes a real vigilante and meets the terrifying Hit-Girl.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 7,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "vigilante",
   "hitgirl",
   "meta"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/30/Kick-Ass_film_poster.jpg"
 },
 {
  "id": "the-raid-2",
  "title": "The Raid 2",
  "year": 2014,
  "director": "Gareth Evans",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 150,
  "rating": "R",
  "description": "Rama goes deep undercover into Jakarta's crime families and a world of prison brawls.",
  "vector": {
   "adrenaline": 10,
   "brainy": 4,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "martialarts",
   "undercover",
   "jakarta"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Raid_2_Berandal_teaser_banner.jpeg"
 },
 {
  "id": "john-wick-chapter-2",
  "title": "John Wick: Chapter 2",
  "year": 2017,
  "director": "Chad Stahelski",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A blood oath drags John Wick to Rome, where every assassin in the world gets his price.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hitman",
   "rome",
   "oath"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/31/John_Wick_Chapter_Two.png"
 },
 {
  "id": "john-wick-chapter-3-parabellum",
  "title": "John Wick: Chapter 3 - Parabellum",
  "year": 2019,
  "director": "Chad Stahelski",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "Excommunicated with a $14 million bounty, Wick fights through New York to survive.",
  "vector": {
   "adrenaline": 10,
   "brainy": 3,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "hitman",
   "bounty",
   "horses"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/94/John_Wick_Chapter_3_Parabellum.png"
 },
 {
  "id": "nobody",
  "title": "Nobody",
  "year": 2021,
  "director": "Ilya Naishuller",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A mild-mannered dad's buried past erupts after a home invasion insults his family.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "revenge",
   "bus",
   "russian"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/Nobody_2021_Film_Poster.jpeg"
 },
 {
  "id": "extraction",
  "title": "Extraction",
  "year": 2020,
  "director": "Sam Hargrave",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A mercenary fights through Dhaka to rescue a drug lord's kidnapped son.",
  "vector": {
   "adrenaline": 10,
   "brainy": 2,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "rescue",
   "dhaka",
   "oner"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png"
 },
 {
  "id": "extraction-2",
  "title": "Extraction 2",
  "year": 2023,
  "director": "Sam Hargrave",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Tyler Rake storms a Georgian prison to extract a gangster's family.",
  "vector": {
   "adrenaline": 10,
   "brainy": 2,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "rescue",
   "prison",
   "train"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg"
 },
 {
  "id": "fast-five",
  "title": "Fast Five",
  "year": 2011,
  "director": "Justin Lin",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Dom's crew plans a vault heist in Rio with Hobbs hunting them down.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "heist",
   "rio",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_poster.jpg"
 },
 {
  "id": "furious-7",
  "title": "Furious 7",
  "year": 2015,
  "director": "James Wan",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 137,
  "rating": "PG-13",
  "description": "A special-ops brother hunts Dom's family while they chase a surveillance god's-eye.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "cars",
   "revenge",
   "farewell"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg"
 },
 {
  "id": "wanted",
  "title": "Wanted",
  "year": 2008,
  "director": "Timur Bekmambetov",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A cubicle drone learns he is heir to a guild of assassins who bend bullets.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 3,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "assassins",
   "bullets",
   "loom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/98/Wanted_film_poster.jpg"
 },
 {
  "id": "hanna",
  "title": "Hanna",
  "year": 2011,
  "director": "Joe Wright",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 111,
  "rating": "PG-13",
  "description": "A girl raised in the Arctic wilderness is unleashed on the agency that made her.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "assassin",
   "fairytale",
   "run"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/Hanna_poster.jpg"
 },
 {
  "id": "the-equalizer",
  "title": "The Equalizer",
  "year": 2014,
  "director": "Antoine Fuqua",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "A quiet hardware-store clerk unleashes old skills to protect a trafficked girl.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "vigilante",
   "russian",
   "clock"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/The_Equalizer_poster.jpg"
 },
 {
  "id": "man-on-fire",
  "title": "Man on Fire",
  "year": 2004,
  "director": "Tony Scott",
  "genres": [
   "Action",
   "Drama",
   "Thriller"
  ],
  "runtime": 146,
  "rating": "R",
  "description": "A burnt-out bodyguard in Mexico City turns a kidnapping into a war of vengeance.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bodyguard",
   "mexico",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Man_on_fireposter.jpg"
 },
 {
  "id": "the-transporter",
  "title": "The Transporter",
  "year": 2002,
  "director": "Louis Leterrier",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 92,
  "rating": "PG-13",
  "description": "A driver who never asks questions breaks his rule for one package: a person.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "driver",
   "rules",
   "france"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Transporterposter.jpg"
 },
 {
  "id": "ong-bak-the-thai-warrior",
  "title": "Ong-Bak: The Thai Warrior",
  "year": 2003,
  "director": "Prachya Pinkaew",
  "genres": [
   "Action"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "A village fighter travels to Bangkok to recover his temple's stolen Buddha head.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "muaythai",
   "thailand",
   "stunts"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/ONG-BAK.jpg"
 },
 {
  "id": "ip-man",
  "title": "Ip Man",
  "year": 2008,
  "director": "Wilson Yip",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "Wing Chun master Ip Man endures occupation and duels to defend his city's dignity.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "kungfu",
   "foshan",
   "honor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2f/Ipmanposter02.jpg"
 },
 {
  "id": "kung-fu-hustle",
  "title": "Kung Fu Hustle",
  "year": 2004,
  "director": "Stephen Chow",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A wannabe gangster stumbles into a slum hiding retired kung fu legends.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "kungfu",
   "cartoon",
   "slum"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/KungFuHustleHKposter.jpg"
 },
 {
  "id": "hero",
  "title": "Hero",
  "year": 2002,
  "director": "Zhang Yimou",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "A nameless warrior tells the King three versions of how he felled three assassins.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 9,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "wuxia",
   "color",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Hero_poster.jpg"
 },
 {
  "id": "300",
  "title": "300",
  "year": 2006,
  "director": "Zack Snyder",
  "genres": [
   "Action",
   "War"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "Leonidas and 300 Spartans make their stand at Thermopylae against Xerxes' horde.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "sparta",
   "stand",
   "stylized"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg"
 },
 {
  "id": "top-gun",
  "title": "Top Gun",
  "year": 1986,
  "director": "Tony Scott",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 110,
  "rating": "PG",
  "description": "A hotshot naval aviator competes at Top Gun school and learns the cost of ego.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 6,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "jets",
   "navy",
   "rivalry"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg"
 },
 {
  "id": "edge-of-tomorrow",
  "title": "Edge of Tomorrow",
  "year": 2014,
  "director": "Doug Liman",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 113,
  "rating": "PG-13",
  "description": "A cowardly officer relives the same losing battle until he learns to win it.",
  "vector": {
   "adrenaline": 9,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "timeloop",
   "aliens",
   "mech"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg"
 },
 {
  "id": "pacific-rim",
  "title": "Pacific Rim",
  "year": 2013,
  "director": "Guillermo del Toro",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 131,
  "rating": "PG-13",
  "description": "Pilots mind-meld with giant robots to brawl the kaiju pouring through a rift.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 9,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "kaiju",
   "robots",
   "drift"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg"
 },
 {
  "id": "kong-skull-island",
  "title": "Kong: Skull Island",
  "year": 2017,
  "director": "Jordan Vogt-Roberts",
  "genres": [
   "Action",
   "Adventure",
   "Sci-Fi"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "A 1973 expedition finds Kong and the monsters ruling a primal island.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 1,
   "funny": 2,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "kaiju",
   "island",
   "vietnam"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Kong_Skull_Island_poster.jpg"
 },
 {
  "id": "godzilla-vs-kong",
  "title": "Godzilla vs. Kong",
  "year": 2021,
  "director": "Adam Wingard",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 113,
  "rating": "PG-13",
  "description": "Two titans collide while a conspiracy lures them toward a mechanical usurper.",
  "vector": {
   "adrenaline": 9,
   "brainy": 1,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 3,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "kaiju",
   "titans",
   "rematch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png"
 },
 {
  "id": "bumblebee",
  "title": "Bumblebee",
  "year": 2018,
  "director": "Travis Knight",
  "genres": [
   "Action",
   "Adventure",
   "Sci-Fi"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "A teen in 1987 befriends a battle-scarred Autobot hiding as a Beetle.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "transformers",
   "1987",
   "friendship"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/77/Bumblebee_%28film%29_poster.png"
 },
 {
  "id": "red",
  "title": "RED",
  "year": 2010,
  "director": "Robert Schwentke",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 111,
  "rating": "PG-13",
  "description": "Retired CIA killers reunite when their own agency marks them for death.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "retired",
   "cia",
   "ensemble"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Red_ver7.jpg"
 },
 {
  "id": "the-expendables",
  "title": "The Expendables",
  "year": 2010,
  "director": "Sylvester Stallone",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A team of aging mercenaries takes a suicide mission to a fictional island dictatorship.",
  "vector": {
   "adrenaline": 8,
   "brainy": 1,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mercenaries",
   "ensemble",
   "80s"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Expendablesposter.jpg"
 },
 {
  "id": "air-force-one",
  "title": "Air Force One",
  "year": 1997,
  "director": "Wolfgang Petersen",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "Terrorists hijack the President's plane; the President fights back aisle by aisle.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "president",
   "hijack",
   "plane"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Air_Force_One_%28movie_poster%29.jpg"
 },
 {
  "id": "con-air",
  "title": "Con Air",
  "year": 1997,
  "director": "Simon West",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A parolee's flight home is hijacked by the worst convicts in the system.",
  "vector": {
   "adrenaline": 8,
   "brainy": 1,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "convicts",
   "plane",
   "bunny"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/Conairinternational.jpg"
 },
 {
  "id": "face-off",
  "title": "Face/Off",
  "year": 1997,
  "director": "John Woo",
  "genres": [
   "Action",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "An FBI agent and a terrorist swap faces and lives in a fever of operatic gunplay.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "faceswap",
   "woo",
   "doves"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/FaceOff_poster.jpg"
 },
 {
  "id": "the-rock",
  "title": "The Rock",
  "year": 1996,
  "director": "Michael Bay",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "A chemist and an ex-spy infiltrate Alcatraz to stop a nerve-gas standoff.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "alcatraz",
   "marines",
   "bay"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/The_Rock_%28movie%29.jpg"
 },
 {
  "id": "point-break",
  "title": "Point Break",
  "year": 1991,
  "director": "Kathryn Bigelow",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "An FBI rookie surfs into a gang of bank-robbing ex-presidents and loses his bearings.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "surf",
   "robbers",
   "undercover"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg"
 },
 {
  "id": "die-hard-with-a-vengeance",
  "title": "Die Hard with a Vengeance",
  "year": 1995,
  "director": "John McTiernan",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "McClane plays a bomber's riddling games across New York with a Harlem shop owner.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "riddles",
   "gold",
   "partner"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg"
 },
 {
  "id": "live-free-or-die-hard",
  "title": "Live Free or Die Hard",
  "year": 2007,
  "director": "Len Wiseman",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "McClane escorts a hacker as cyber-terrorists shut down America's infrastructure.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hacker",
   "firesale",
   "old"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/46/Live_Free_or_Die_Hard.jpg"
 },
 {
  "id": "terminator-3-rise-of-the-machines",
  "title": "Terminator 3: Rise of the Machines",
  "year": 2003,
  "director": "Jonathan Mostow",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "An aging T-800 defends John Connor as Judgment Day proves unavoidable.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "robots",
   "skynet",
   "ending"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Terminator_3_Rise_of_the_Machines_movie.jpg"
 },
 {
  "id": "total-recall",
  "title": "Total Recall",
  "year": 1990,
  "director": "Paul Verhoeven",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A construction worker's implanted vacation memory unravels into a Martian revolution.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "mars",
   "memory",
   "verhoeven"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Total_Recall_%281990_film%29_poster.jpg"
 },
 {
  "id": "robocop",
  "title": "RoboCop",
  "year": 1987,
  "director": "Paul Verhoeven",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A murdered cop returns as a corporate cyborg and remembers who killed him.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "cyborg",
   "satire",
   "detroit"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/RoboCop_%281987%29_theatrical_poster.jpg"
 },
 {
  "id": "predator",
  "title": "Predator",
  "year": 1987,
  "director": "John McTiernan",
  "genres": [
   "Action",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Commandos in the jungle become prey for an alien trophy hunter.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 4,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "jungle",
   "hunter",
   "arnold"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg"
 },
 {
  "id": "prey",
  "title": "Prey",
  "year": 2022,
  "director": "Dan Trachtenberg",
  "genres": [
   "Action",
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A Comanche hunter in 1719 outwits a Predator with stone-age tools and nerve.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 4,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "predator",
   "1719",
   "hunt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f4/Prey_2022_poster.png"
 },
 {
  "id": "escape-from-new-york",
  "title": "Escape from New York",
  "year": 1981,
  "director": "John Carpenter",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "Snake Plissken gets 24 hours to rescue the President from prison-island Manhattan.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "snake",
   "manhattan",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/EscapefromNYposter.jpg"
 },
 {
  "id": "big-trouble-in-little-china",
  "title": "Big Trouble in Little China",
  "year": 1986,
  "director": "John Carpenter",
  "genres": [
   "Action",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 99,
  "rating": "PG-13",
  "description": "A trucker blunders into an ancient sorcery war under San Francisco's Chinatown.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 7,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "sorcery",
   "trucker",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Big_Trouble_in_Little_China_Film_Poster.jpg"
 },
 {
  "id": "commando",
  "title": "Commando",
  "year": 1985,
  "director": "Mark L. Lester",
  "genres": [
   "Action"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "A retired colonel dismantles an army to rescue his kidnapped daughter.",
  "vector": {
   "adrenaline": 8,
   "brainy": 1,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "rescue",
   "arnold",
   "one-man"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/Commandoposter.jpg"
 },
 {
  "id": "first-blood",
  "title": "First Blood",
  "year": 1982,
  "director": "Ted Kotcheff",
  "genres": [
   "Action",
   "Drama"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "A drifting Vietnam vet is hunted through the woods by a small-town sheriff's posse.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "rambo",
   "woods",
   "veteran"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/First_blood_poster.jpg"
 },
 {
  "id": "creed",
  "title": "Creed",
  "year": 2015,
  "director": "Ryan Coogler",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 133,
  "rating": "PG-13",
  "description": "Apollo Creed's son seeks out Rocky Balboa to train him out of his father's shadow.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "legacy",
   "rocky"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg"
 },
 {
  "id": "creed-ii",
  "title": "Creed II",
  "year": 2018,
  "director": "Steven Caple Jr.",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Adonis faces the son of the man who killed his father, with Rocky in his corner.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "drago",
   "fatherhood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Creed_II_poster.png"
 },
 {
  "id": "creed-iii",
  "title": "Creed III",
  "year": 2023,
  "director": "Michael B. Jordan",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "Adonis must fight the childhood friend whose life he escaped and whose grudge he carries.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "friendship",
   "guilt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Creed_III_poster.png"
 },
 {
  "id": "warrior",
  "title": "Warrior",
  "year": 2011,
  "director": "Gavin O'Connor",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "Two estranged brothers collide in an MMA tournament, each fighting a different debt.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 8,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mma",
   "brothers",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e3/Warrior_Poster.jpg"
 },
 {
  "id": "southpaw",
  "title": "Southpaw",
  "year": 2015,
  "director": "Antoine Fuqua",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "A champion boxer loses everything to tragedy and fights back for his daughter.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 7,
   "dark": 7,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "custody",
   "redemption"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Southpaw_poster.jpg"
 },
 {
  "id": "the-fighter",
  "title": "The Fighter",
  "year": 2010,
  "director": "David O. Russell",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "Micky Ward boxes out from under his crack-addicted brother and smothering family.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "brother",
   "lowell"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/The_Fighter_Poster.jpg"
 },
 {
  "id": "rush",
  "title": "Rush",
  "year": 2013,
  "director": "Ron Howard",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "Hunt and Lauda's 1976 rivalry pushes both men to the edge of fire and genius.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "f1",
   "rivalry",
   "1976"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/Rush_UK_poster.jpeg"
 },
 {
  "id": "ford-v-ferrari",
  "title": "Ford v Ferrari",
  "year": 2019,
  "director": "James Mangold",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 152,
  "rating": "PG-13",
  "description": "Shelby and Miles build a Ford to beat Ferrari at Le Mans '66.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "racing",
   "lemans",
   "ford"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png"
 },
 {
  "id": "the-italian-job",
  "title": "The Italian Job",
  "year": 2003,
  "director": "F. Gary Gray",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 111,
  "rating": "PG-13",
  "description": "Double-crossed thieves steal their gold back through LA traffic in Mini Coopers.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "heist",
   "minis",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Italianjob.jpg"
 },
 {
  "id": "ronin",
  "title": "Ronin",
  "year": 1998,
  "director": "John Frankenheimer",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Mercenaries chase a mysterious case through France in cinema's great car chases.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "chase",
   "case",
   "paris"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/Ronin_movie_1998.jpg"
 },
 {
  "id": "den-of-thieves",
  "title": "Den of Thieves",
  "year": 2018,
  "director": "Christian Gudegast",
  "genres": [
   "Action",
   "Crime"
  ],
  "runtime": 140,
  "rating": "R",
  "description": "An LA sheriff's crew and a master thief circle a Federal Reserve heist.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "heist",
   "cops",
   "la"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Den_of_Thieves_poster.jpg"
 },
 {
  "id": "wrath-of-man",
  "title": "Wrath of Man",
  "year": 2021,
  "director": "Guy Ritchie",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A cold new cash-truck guard hides a score to settle with the crew that wronged him.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "heist",
   "revenge",
   "ritchie"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Wrath-of-man.jpg"
 },
 {
  "id": "the-gentlemen",
  "title": "The Gentlemen",
  "year": 2019,
  "director": "Guy Ritchie",
  "genres": [
   "Action",
   "Comedy",
   "Crime"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A cannabis kingpin's exit sale triggers a very British war of blackmail and narration.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gangsters",
   "ritchie",
   "sale"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg"
 },
 {
  "id": "lock-stock-and-two-smoking-barrels",
  "title": "Lock, Stock and Two Smoking Barrels",
  "year": 1998,
  "director": "Guy Ritchie",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A rigged card game drops four London lads into a pile-up of gangsters and guns.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "london",
   "cards",
   "ritchie"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Lock%2C_Stock_and_Two_Smoking_Barrels_2.jpg"
 },
 {
  "id": "layer-cake",
  "title": "Layer Cake",
  "year": 2004,
  "director": "Matthew Vaughn",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "A nameless cocaine middleman's retirement is sabotaged by one last impossible errand.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "london",
   "drugs",
   "exit"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Layer_Cake_Poster.JPG"
 },
 {
  "id": "sherlock-holmes",
  "title": "Sherlock Holmes",
  "year": 2009,
  "director": "Guy Ritchie",
  "genres": [
   "Action",
   "Mystery"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "Holmes brawls and deduces his way through a cult's plot to topple Parliament.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "holmes",
   "victorian",
   "brawl"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/Sherlock_holmes_ver5.jpg"
 },
 {
  "id": "the-man-from-u-n-c-l-e",
  "title": "The Man from U.N.C.L.E.",
  "year": 2015,
  "director": "Guy Ritchie",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A CIA thief and a KGB brute team up in 1963 Rome against nuclear cultists.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "spy",
   "1963",
   "style"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/The_Man_from_U.N.C.L.E._poster.jpg"
 },
 {
  "id": "bullet-train",
  "title": "Bullet Train",
  "year": 2022,
  "director": "David Leitch",
  "genres": [
   "Action",
   "Comedy",
   "Thriller"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "Five assassins on one Japanese bullet train discover their jobs are all connected.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "train",
   "assassins",
   "ladybug"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg"
 },
 {
  "id": "the-fall-guy",
  "title": "The Fall Guy",
  "year": 2024,
  "director": "David Leitch",
  "genres": [
   "Action",
   "Comedy",
   "Romance"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "A stuntman must find a vanished movie star on the set of his ex's blockbuster.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 6,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "stuntman",
   "set",
   "mystery"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Fall_Guy_%282024%29_poster.jpg"
 },
 {
  "id": "violent-night",
  "title": "Violent Night",
  "year": 2022,
  "director": "Tommy Wirkola",
  "genres": [
   "Action",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "A world-weary Santa Claus fights mercenaries holding a rich family hostage on Christmas Eve.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 1,
   "funny": 7,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "santa",
   "christmas",
   "hostage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/Violent_Night_poster.jpg"
 },
 {
  "id": "sisu",
  "title": "Sisu",
  "year": 2022,
  "director": "Jalmari Helander",
  "genres": [
   "Action",
   "War"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "A lone prospector in 1944 Lapland butchers the SS squad that stole his gold.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gold",
   "lapland",
   "nazi"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c6/Sisu_ver2.png"
 },
 {
  "id": "the-beekeeper",
  "title": "The Beekeeper",
  "year": 2024,
  "director": "David Ayer",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "A retired operative declares war on the phishing scammers who drove his friend to suicide.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "scammers",
   "revenge",
   "beekeeper"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/The_Beekeeper_poster.jpg"
 },
 {
  "id": "monkey-man",
  "title": "Monkey Man",
  "year": 2024,
  "director": "Dev Patel",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A Mumbai fight-club nobody infiltrates the elite syndicate that destroyed his family.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "mumbai",
   "revenge",
   "club"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/Monkey_Man_film.jpg"
 },
 {
  "id": "furiosa-a-mad-max-saga",
  "title": "Furiosa: A Mad Max Saga",
  "year": 2024,
  "director": "George Miller",
  "genres": [
   "Action",
   "Sci-Fi"
  ],
  "runtime": 148,
  "rating": "R",
  "description": "Snatched from the Green Place, young Furiosa survives warlords to become the Citadel's driver.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "wasteland",
   "origin",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg"
 },
 {
  "id": "civil-war",
  "title": "Civil War",
  "year": 2024,
  "director": "Alex Garland",
  "genres": [
   "Action",
   "Drama",
   "Thriller"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "War photographers race a collapsing America to interview the President before DC falls.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "journalists",
   "america",
   "road"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Civil_War_2024_film_poster.jpeg"
 },
 {
  "id": "the-a-team",
  "title": "The A-Team",
  "year": 2010,
  "director": "Joe Carnahan",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 117,
  "rating": "PG-13",
  "description": "Framed special-ops soldiers break out to clear their names with maximum explosions.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "soldiers",
   "framed",
   "tank"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/A_team_poster_10.jpg"
 },
 {
  "id": "return-of-the-jedi",
  "title": "Return of the Jedi",
  "year": 1983,
  "director": "Richard Marquand",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 131,
  "rating": "PG",
  "description": "The rebels strike at a second Death Star while Luke faces Vader and the Emperor.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 9,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "starwars",
   "ewoks",
   "redemption"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg"
 },
 {
  "id": "star-wars-the-force-awakens",
  "title": "Star Wars: The Force Awakens",
  "year": 2015,
  "director": "J.J. Abrams",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 138,
  "rating": "PG-13",
  "description": "A scavenger, a deserter and a droid carry a map to the vanished Luke Skywalker.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "starwars",
   "rey",
   "legacy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
 },
 {
  "id": "rogue-one-a-star-wars-story",
  "title": "Rogue One: A Star Wars Story",
  "year": 2016,
  "director": "Gareth Edwards",
  "genres": [
   "Sci-Fi",
   "Action",
   "War"
  ],
  "runtime": 133,
  "rating": "PG-13",
  "description": "Rebel spies steal the Death Star plans knowing none of them may return.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "starwars",
   "plans",
   "sacrifice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png"
 },
 {
  "id": "the-fifth-element",
  "title": "The Fifth Element",
  "year": 1997,
  "director": "Luc Besson",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "A flying-cab driver becomes humanity's last hope alongside a supreme being in bandages.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 5,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "diva",
   "stones",
   "future"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/65/Fifth_element_poster_%281997%29.jpg"
 },
 {
  "id": "twelve-monkeys",
  "title": "Twelve Monkeys",
  "year": 1995,
  "director": "Terry Gilliam",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A convict time-travels to trace a plague and keeps slipping into madness.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "timetravel",
   "plague",
   "asylum"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Twelve_monkeysmp.jpg"
 },
 {
  "id": "dark-city",
  "title": "Dark City",
  "year": 1998,
  "director": "Alex Proyas",
  "genres": [
   "Sci-Fi",
   "Mystery",
   "Thriller"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A man wakes in a city where strangers rearrange streets and memories every midnight.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "noir",
   "memory",
   "strangers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9c/Dark_City_poster.jpg"
 },
 {
  "id": "war-of-the-worlds",
  "title": "War of the Worlds",
  "year": 2005,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A divorced dad flees across a ruined America as tripods harvest humanity.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 4,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "tripods",
   "invasion",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/War_of_the_Worlds_2005_poster.jpg"
 },
 {
  "id": "i-robot",
  "title": "I, Robot",
  "year": 2004,
  "director": "Alex Proyas",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "A robot-hating detective investigates a murder pinned on a machine in 2035 Chicago.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "robots",
   "asimov",
   "conspiracy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Movie_poster_i_robot.jpg"
 },
 {
  "id": "a-i-artificial-intelligence",
  "title": "A.I. Artificial Intelligence",
  "year": 2001,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 146,
  "rating": "PG-13",
  "description": "A robot boy who can love searches for the Blue Fairy to become real.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 8,
   "dark": 5,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "robot",
   "pinocchio",
   "flood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/AI_Poster.jpg"
 },
 {
  "id": "signs",
  "title": "Signs",
  "year": 2002,
  "director": "M. Night Shyamalan",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "A widowed ex-priest reads crop circles over his farm as the world watches the sky.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 5,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "aliens",
   "faith",
   "farm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/The_Signs_movie.jpg"
 },
 {
  "id": "sunshine",
  "title": "Sunshine",
  "year": 2007,
  "director": "Danny Boyle",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A crew flies a bomb into the dying sun and unravels on the way.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 4,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "sun",
   "mission",
   "madness"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Sunshine_poster.jpg"
 },
 {
  "id": "moon",
  "title": "Moon",
  "year": 2009,
  "director": "Duncan Jones",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A lone lunar miner nearing his tour's end meets someone he should not be able to meet.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "clone",
   "isolation",
   "moon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Moon_%282009_film%29.jpg"
 },
 {
  "id": "source-code",
  "title": "Source Code",
  "year": 2011,
  "director": "Duncan Jones",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Action"
  ],
  "runtime": 93,
  "rating": "PG-13",
  "description": "A soldier relives eight minutes in a bombing victim's body to find the bomber.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "timeloop",
   "train",
   "bomb"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Source_Code_Poster.jpg"
 },
 {
  "id": "predestination",
  "title": "Predestination",
  "year": 2014,
  "director": "Michael Spierig",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A temporal agent's final case loops through identities in a perfect knot.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "timetravel",
   "paradox",
   "agent"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Predestination_poster.jpg"
 },
 {
  "id": "coherence",
  "title": "Coherence",
  "year": 2013,
  "director": "James Ward Byrkit",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 89,
  "rating": "NR",
  "description": "A dinner party splinters into parallel realities as a comet passes overhead.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "parallel",
   "dinner",
   "comet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Coherence_2013_theatrical_poster.jpg"
 },
 {
  "id": "primer",
  "title": "Primer",
  "year": 2004,
  "director": "Shane Carruth",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 77,
  "rating": "R",
  "description": "Two engineers build a time machine in a garage and lose track of themselves.",
  "vector": {
   "adrenaline": 2,
   "brainy": 10,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 0,
   "epic": 1,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "timetravel",
   "garage",
   "trust"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Primer_%282004_film_poster%29.jpg"
 },
 {
  "id": "the-butterfly-effect",
  "title": "The Butterfly Effect",
  "year": 2004,
  "director": "Eric Bress",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Drama"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A man rewrites his childhood traumas from his journals, and every fix breaks something worse.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "timetravel",
   "journals",
   "trauma"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/43/Butterflyeffect_poster.jpg"
 },
 {
  "id": "donnie-darko",
  "title": "Donnie Darko",
  "year": 2001,
  "director": "Richard Kelly",
  "genres": [
   "Sci-Fi",
   "Drama",
   "Thriller"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A troubled teen follows a bunny-suited prophet counting down to the end of the world.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "bunny",
   "tangent",
   "eighties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Donnie_Darko_poster.jpg"
 },
 {
  "id": "serenity",
  "title": "Serenity",
  "year": 2005,
  "director": "Joss Whedon",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "The Firefly crew shelters a psychic girl the Alliance will kill to silence.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "space",
   "western",
   "river"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Serenity_One_Sheet.jpg"
 },
 {
  "id": "star-trek",
  "title": "Star Trek",
  "year": 2009,
  "director": "J.J. Abrams",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "Young Kirk and Spock race a Romulan miner bent on rewriting history.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "startrek",
   "reboot",
   "romulan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Startrekposter.jpg"
 },
 {
  "id": "star-trek-into-darkness",
  "title": "Star Trek Into Darkness",
  "year": 2013,
  "director": "J.J. Abrams",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 132,
  "rating": "PG-13",
  "description": "Kirk hunts a one-man weapon hiding inside Starfleet's own dirty secrets.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "startrek",
   "khan",
   "revenge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/StarTrekIntoDarkness_FinalUSPoster.jpg"
 },
 {
  "id": "star-trek-first-contact",
  "title": "Star Trek: First Contact",
  "year": 1996,
  "director": "Jonathan Frakes",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 111,
  "rating": "PG-13",
  "description": "The Borg travel to 2063 to erase first contact; Picard's obsession nearly helps them.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "startrek",
   "borg",
   "picard"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Star_trek_first_contact_poster.jpg"
 },
 {
  "id": "galaxy-quest",
  "title": "Galaxy Quest",
  "year": 1999,
  "director": "Dean Parisot",
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Adventure"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "Washed-up TV space actors are abducted by aliens who think their show was real.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "actors",
   "aliens",
   "fandom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1f/Galaxy_Quest_poster.jpg"
 },
 {
  "id": "men-in-black",
  "title": "Men in Black",
  "year": 1997,
  "director": "Barry Sonnenfeld",
  "genres": [
   "Sci-Fi",
   "Action",
   "Comedy"
  ],
  "runtime": 98,
  "rating": "PG-13",
  "description": "A streetwise cop joins the agency policing aliens secretly living on Earth.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "aliens",
   "neuralyzer",
   "bug"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Men_in_Black_Poster.jpg"
 },
 {
  "id": "independence-day",
  "title": "Independence Day",
  "year": 1996,
  "director": "Roland Emmerich",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 145,
  "rating": "PG-13",
  "description": "Humanity's last stand against city-sized saucers comes down to a pilot, a scientist and July 4th.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 1,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "invasion",
   "speech",
   "july4"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/Independence_day_movieposter.jpg"
 },
 {
  "id": "armageddon",
  "title": "Armageddon",
  "year": 1998,
  "director": "Michael Bay",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 151,
  "rating": "PG-13",
  "description": "Oil drillers are launched to nuke an asteroid the size of Texas.",
  "vector": {
   "adrenaline": 9,
   "brainy": 2,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "asteroid",
   "drillers",
   "bay"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/Armageddon-poster06.jpg"
 },
 {
  "id": "the-day-after-tomorrow",
  "title": "The Day After Tomorrow",
  "year": 2004,
  "director": "Roland Emmerich",
  "genres": [
   "Sci-Fi",
   "Disaster",
   "Action"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "A superstorm freezes the northern hemisphere; a climatologist walks to his son in New York.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 0,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "storm",
   "ice",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/The_Day_After_Tomorrow_movie.jpg"
 },
 {
  "id": "2012",
  "title": "2012",
  "year": 2009,
  "director": "Roland Emmerich",
  "genres": [
   "Sci-Fi",
   "Disaster",
   "Action"
  ],
  "runtime": 158,
  "rating": "PG-13",
  "description": "A failed writer races his family across a crumbling planet toward secret arks.",
  "vector": {
   "adrenaline": 9,
   "brainy": 1,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apocalypse",
   "arks",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/2012_Poster.jpg"
 },
 {
  "id": "ready-player-one",
  "title": "Ready Player One",
  "year": 2018,
  "director": "Steven Spielberg",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "A teen hunts an Easter egg inside a VR world that everyone lives in but one corporation wants to own.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 7,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "vr",
   "egg",
   "eighties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Ready_Player_One_%28film%29.png"
 },
 {
  "id": "tron-legacy",
  "title": "TRON: Legacy",
  "year": 2010,
  "director": "Joseph Kosinski",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 125,
  "rating": "PG",
  "description": "Sam Flynn dives into the Grid to find his father, trapped for 20 years by his own program.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "grid",
   "daftpunk",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Tron_Legacy_poster.jpg"
 },
 {
  "id": "the-maze-runner",
  "title": "The Maze Runner",
  "year": 2014,
  "director": "Wes Ball",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 113,
  "rating": "PG-13",
  "description": "Teen boys trapped in a glade run a shifting maze that hides their jailers' experiment.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "maze",
   "teens",
   "glade"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/The_Maze_Runner_poster.jpg"
 },
 {
  "id": "divergent",
  "title": "Divergent",
  "year": 2014,
  "director": "Neil Burger",
  "genres": [
   "Sci-Fi",
   "Action",
   "Romance"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "In faction-divided Chicago, a girl who fits nowhere becomes the regime's greatest threat.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 6,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "factions",
   "chicago",
   "test"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Divergent_film_poster.jpg"
 },
 {
  "id": "the-hunger-games",
  "title": "The Hunger Games",
  "year": 2012,
  "director": "Gary Ross",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 142,
  "rating": "PG-13",
  "description": "Katniss volunteers for a televised death match and becomes a spark the Capitol can't control.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "arena",
   "volunteer",
   "capitol"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
 },
 {
  "id": "the-hunger-games-catching-fire",
  "title": "The Hunger Games: Catching Fire",
  "year": 2013,
  "director": "Francis Lawrence",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 146,
  "rating": "PG-13",
  "description": "Victors are thrown back into a deadlier arena as rebellion spreads through the districts.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "arena",
   "rebellion",
   "victors"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg"
 },
 {
  "id": "passengers",
  "title": "Passengers",
  "year": 2016,
  "director": "Morten Tyldum",
  "genres": [
   "Sci-Fi",
   "Romance",
   "Drama"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "Two sleepers wake 90 years early on a colony ship; one of them chose to.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 8,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "starship",
   "wake",
   "secret"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8e/Passengers_2016_film_poster.jpg"
 },
 {
  "id": "life",
  "title": "Life",
  "year": 2017,
  "director": "Daniel Espinosa",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "ISS scientists revive a Martian organism that learns faster than they can contain it.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "iss",
   "organism",
   "mars"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c4/Life_%282017_film%29.png"
 },
 {
  "id": "ad-astra",
  "title": "Ad Astra",
  "year": 2019,
  "director": "James Gray",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "An astronaut crosses the solar system to find the father who may be sabotaging it.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "neptune",
   "father",
   "void"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Ad_Astra_-_film_poster.jpg"
 },
 {
  "id": "first-man",
  "title": "First Man",
  "year": 2018,
  "director": "Damien Chazelle",
  "genres": [
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Neil Armstrong's road to the Moon, told through grief, rivets and terrifying machines.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "moon",
   "armstrong",
   "nasa"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/First_Man_%28film%29.png"
 },
 {
  "id": "apollo-13",
  "title": "Apollo 13",
  "year": 1995,
  "director": "Ron Howard",
  "genres": [
   "Drama",
   "Adventure",
   "Sci-Fi"
  ],
  "runtime": 140,
  "rating": "PG",
  "description": "Three astronauts and a room of engineers improvise their way home from a crippled ship.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "nasa",
   "failure",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Apollo_thirteen_movie.jpg"
 },
 {
  "id": "contact",
  "title": "Contact",
  "year": 1997,
  "director": "Robert Zemeckis",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 150,
  "rating": "PG",
  "description": "A SETI astronomer decodes a message from Vega and fights to be the one who answers it.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "seti",
   "signal",
   "faith"
  ],
  "poster": ""
 },
 {
  "id": "annihilation",
  "title": "Annihilation",
  "year": 2018,
  "director": "Alex Garland",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Drama"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A team enters a shimmering zone where light, DNA and memory all refract wrong.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 6,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "shimmer",
   "expedition",
   "refraction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Annihilation_%28film%29.png"
 },
 {
  "id": "don-t-look-up",
  "title": "Don't Look Up",
  "year": 2021,
  "director": "Adam McKay",
  "genres": [
   "Comedy",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "Two astronomers tour a media circus trying to warn Earth about a comet nobody wants to hear about.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 2,
   "funny": 7,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "comet",
   "satire",
   "media"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg"
 },
 {
  "id": "free-guy",
  "title": "Free Guy",
  "year": 2021,
  "director": "Shawn Levy",
  "genres": [
   "Action",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "A video-game NPC realizes his world is fake and decides to become its hero.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 5,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "npc",
   "game",
   "glasses"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg"
 },
 {
  "id": "elysium",
  "title": "Elysium",
  "year": 2013,
  "director": "Neill Blomkamp",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "A dying factory worker fights to reach the orbital paradise whose med-beds could save Earth.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "orbit",
   "exosuit",
   "class"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Elysium_Poster.jpg"
 },
 {
  "id": "snowpiercer",
  "title": "Snowpiercer",
  "year": 2013,
  "director": "Bong Joon Ho",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "The last humans circle a frozen Earth on a train; the tail section revolts car by car.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "train",
   "class",
   "ice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b4/Snowpiercer_poster.jpg"
 },
 {
  "id": "okja",
  "title": "Okja",
  "year": 2017,
  "director": "Bong Joon Ho",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Drama"
  ],
  "runtime": 120,
  "rating": "TV-MA",
  "description": "A Korean girl races to save her giant gentle pig from a corporation's slaughterhouse PR stunt.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "pig",
   "corporation",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Okja.png"
 },
 {
  "id": "the-platform",
  "title": "The Platform",
  "year": 2019,
  "director": "Galder Gaztelu-Urrutia",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Thriller"
  ],
  "runtime": 94,
  "rating": "TV-MA",
  "description": "A platform of food descends through a vertical prison; those below eat what contempt leaves.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 6,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "prison",
   "food",
   "levels"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/The_Platform_poster.jpg"
 },
 {
  "id": "avatar-the-way-of-water",
  "title": "Avatar: The Way of Water",
  "year": 2022,
  "director": "James Cameron",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 192,
  "rating": "PG-13",
  "description": "The Sully family flees to Pandora's reef clans as the sky people return with old ghosts.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 1,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 3,
   "epic": 10,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "pandora",
   "ocean",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg"
 },
 {
  "id": "rise-of-the-planet-of-the-apes",
  "title": "Rise of the Planet of the Apes",
  "year": 2011,
  "director": "Rupert Wyatt",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "A chimp named Caesar gains intelligence and chooses freedom over love's cage.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apes",
   "caesar",
   "lab"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/Rise_of_the_Planet_of_the_Apes_Poster.jpg"
 },
 {
  "id": "dawn-of-the-planet-of-the-apes",
  "title": "Dawn of the Planet of the Apes",
  "year": 2014,
  "director": "Matt Reeves",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Caesar's fragile peace with human survivors is sabotaged by fear on both sides.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apes",
   "peace",
   "koba"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/77/Dawn_of_the_Planet_of_the_Apes.jpg"
 },
 {
  "id": "war-for-the-planet-of-the-apes",
  "title": "War for the Planet of the Apes",
  "year": 2017,
  "director": "Matt Reeves",
  "genres": [
   "Sci-Fi",
   "Action",
   "Drama"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "Caesar leads his apes on a final exodus against a colonel who wants them extinct.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apes",
   "exodus",
   "colonel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/War_for_the_Planet_of_the_Apes_poster.jpg"
 },
 {
  "id": "kingdom-of-the-planet-of-the-apes",
  "title": "Kingdom of the Planet of the Apes",
  "year": 2024,
  "director": "Wes Ball",
  "genres": [
   "Sci-Fi",
   "Action",
   "Adventure"
  ],
  "runtime": 145,
  "rating": "PG-13",
  "description": "Generations after Caesar, a young ape questions the tyrant twisting Caesar's words.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "apes",
   "legacy",
   "eagle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Kingdom_of_the_Planet_of_the_Apes_poster.jpg"
 },
 {
  "id": "jurassic-world",
  "title": "Jurassic World",
  "year": 2015,
  "director": "Colin Trevorrow",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A luxury dinosaur park unveils a hybrid predator that outsmarts every fence.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "dinosaurs",
   "park",
   "hybrid"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg"
 },
 {
  "id": "king-kong",
  "title": "King Kong",
  "year": 2005,
  "director": "Peter Jackson",
  "genres": [
   "Adventure",
   "Action",
   "Drama"
  ],
  "runtime": 187,
  "rating": "PG-13",
  "description": "A filmmaker drags a giant ape from Skull Island to Broadway, where beauty kills the beast.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 5,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ape",
   "skullisland",
   "broadway"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Kingkong_bigfinal1.jpg"
 },
 {
  "id": "the-truman-show",
  "title": "The Truman Show",
  "year": 1998,
  "director": "Peter Weir",
  "genres": [
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "A man's whole life is a TV set; one day he notices the sky is a wall.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "tv",
   "dome",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg"
 },
 {
  "id": "pleasantville",
  "title": "Pleasantville",
  "year": 1998,
  "director": "Gary Ross",
  "genres": [
   "Drama",
   "Fantasy",
   "Comedy"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "Two teens land inside a black-and-white sitcom and slowly bring it color — and trouble.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "sitcom",
   "color",
   "fifties"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Pleasantville_ver5.jpg"
 },
 {
  "id": "being-john-malkovich",
  "title": "Being John Malkovich",
  "year": 1999,
  "director": "Spike Jonze",
  "genres": [
   "Comedy",
   "Fantasy",
   "Drama"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "A puppeteer finds a portal into John Malkovich's head and starts selling tickets.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 2,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "portal",
   "puppeteer",
   "malkovich"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/Being_John_Malkovich_poster.jpg"
 },
 {
  "id": "vanilla-sky",
  "title": "Vanilla Sky",
  "year": 2001,
  "director": "Cameron Crowe",
  "genres": [
   "Sci-Fi",
   "Romance",
   "Thriller"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "A disfigured publishing heir can't tell dream, memory and nightmare apart.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 6,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "dream",
   "mask",
   "heir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Vanilla_Sky_poster.png"
 },
 {
  "id": "existenz",
  "title": "eXistenZ",
  "year": 1999,
  "director": "David Cronenberg",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Thriller"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A game designer flees assassins inside her own organic virtual reality — maybe.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 5,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "game",
   "organic",
   "reality"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/EXISTENZ.jpg"
 },
 {
  "id": "wargames",
  "title": "WarGames",
  "year": 1983,
  "director": "John Badham",
  "genres": [
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 114,
  "rating": "PG",
  "description": "A teen hacker plays 'thermonuclear war' with a military AI that thinks it's real.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "hacker",
   "wopr",
   "defcon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Wargames.jpg"
 },
 {
  "id": "real-steel",
  "title": "Real Steel",
  "year": 2011,
  "director": "Shawn Levy",
  "genres": [
   "Action",
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A washed-up boxer and his estranged son rebuild a junkyard robot into a contender.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "robots",
   "boxing",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/22/Real_Steel_Poster.jpg"
 },
 {
  "id": "chappie",
  "title": "Chappie",
  "year": 2015,
  "director": "Neill Blomkamp",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A police robot rebooted with a child's mind is raised by gangsters in Johannesburg.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "robot",
   "gangsters",
   "mind"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Chappie_poster.jpg"
 },
 {
  "id": "a-clockwork-orange",
  "title": "A Clockwork Orange",
  "year": 1971,
  "director": "Stanley Kubrick",
  "genres": [
   "Sci-Fi",
   "Crime",
   "Drama"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "A Beethoven-loving delinquent is 'cured' of violence by the state in a dystopian Britain.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 3,
   "funny": 2,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "dystopia",
   "beethoven",
   "cure"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/A_Clockwork_Orange_%281971%29.png"
 },
 {
  "id": "stalker",
  "title": "Stalker",
  "year": 1979,
  "director": "Andrei Tarkovsky",
  "genres": [
   "Sci-Fi",
   "Drama"
  ],
  "runtime": 162,
  "rating": "NR",
  "description": "A guide leads two men into a forbidden Zone where a room grants your truest wish.",
  "vector": {
   "adrenaline": 1,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "zone",
   "wish",
   "tarkovsky"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Stalker_poster.jpg"
 },
 {
  "id": "ghost-in-the-shell",
  "title": "Ghost in the Shell",
  "year": 1995,
  "director": "Mamoru Oshii",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action"
  ],
  "runtime": 83,
  "rating": "NR",
  "description": "A cyborg major hunts a hacker who puppets human minds in a networked megacity.",
  "vector": {
   "adrenaline": 7,
   "brainy": 9,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "cyberpunk",
   "anime",
   "identity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Ghostintheshellposter.jpg"
 },
 {
  "id": "akira",
  "title": "Akira",
  "year": 1988,
  "director": "Katsuhiro Otomo",
  "genres": [
   "Sci-Fi",
   "Animation",
   "Action"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "A biker gang kid gains godlike psychic power as Neo-Tokyo slides toward apocalypse.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "anime",
   "psychic",
   "neotokyo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_%281988_poster%29.jpg"
 },
 {
  "id": "mickey-17",
  "title": "Mickey 17",
  "year": 2025,
  "director": "Bong Joon Ho",
  "genres": [
   "Sci-Fi",
   "Action",
   "Comedy"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "An 'expendable' colonist is reprinted after every death — until two of him exist at once.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "clone",
   "colony",
   "expendable"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Mickey_17_film_poster.png"
 },
 {
  "id": "companion",
  "title": "Companion",
  "year": 2025,
  "director": "Drew Hancock",
  "genres": [
   "Sci-Fi",
   "Thriller",
   "Horror"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A weekend getaway reveals one guest was rented, programmed — and is done obeying.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 4,
   "funny": 3,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "robot",
   "getaway",
   "programmed"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Companion_film_poster.jpg"
 },
 {
  "id": "the-adam-project",
  "title": "The Adam Project",
  "year": 2022,
  "director": "Shawn Levy",
  "genres": [
   "Sci-Fi",
   "Action",
   "Comedy"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "A time pilot teams up with his twelve-year-old self to save the future and forgive the past.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "timetravel",
   "self",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Adam_Project_poster.png"
 },
 {
  "id": "love-and-monsters",
  "title": "Love and Monsters",
  "year": 2020,
  "director": "Michael Matthews",
  "genres": [
   "Adventure",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 109,
  "rating": "PG-13",
  "description": "Seven years after the monster apocalypse, a sheltered cook crosses 85 miles of beasts for love.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 2,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 6,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "monsters",
   "journey",
   "dog"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1a/LoveAndMonstersPoster.jpeg"
 },
 {
  "id": "oblivion",
  "title": "Oblivion",
  "year": 2013,
  "director": "Joseph Kosinski",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A drone repairman on a ruined Earth finds a crashed ship carrying his forgotten wife.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "drones",
   "earth",
   "memory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Oblivion2013Poster.jpg"
 },
 {
  "id": "ender-s-game",
  "title": "Ender's Game",
  "year": 2013,
  "director": "Gavin Hood",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "A brilliant boy is fast-tracked through battle school to command humanity's last fleet.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "school",
   "fleet",
   "formics"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Ender%27s_Game_poster.jpg"
 },
 {
  "id": "the-island",
  "title": "The Island",
  "year": 2005,
  "director": "Michael Bay",
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ],
  "runtime": 136,
  "rating": "PG-13",
  "description": "Two clones discover their utopia is a harvest farm and run for their lives.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "clones",
   "harvest",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/The-island.jpg"
 },
 {
  "id": "equilibrium",
  "title": "Equilibrium",
  "year": 2002,
  "director": "Kurt Wimmer",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "In a state that bans emotion, an enforcer skips his dose and learns to feel — and fight.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "emotion",
   "gunkata",
   "dystopia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Equilibriumposter.jpg"
 },
 {
  "id": "cube",
  "title": "Cube",
  "year": 1997,
  "director": "Vincenzo Natali",
  "genres": [
   "Sci-Fi",
   "Horror",
   "Thriller"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "Strangers wake in a maze of cube rooms, some rigged with horrific traps.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 7,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "maze",
   "traps",
   "math"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Cube_The_Movie_Poster_Art.jpg"
 },
 {
  "id": "the-hitchhiker-s-guide-to-the-galaxy",
  "title": "The Hitchhiker's Guide to the Galaxy",
  "year": 2005,
  "director": "Garth Jennings",
  "genres": [
   "Sci-Fi",
   "Comedy",
   "Adventure"
  ],
  "runtime": 109,
  "rating": "PG",
  "description": "Earth is demolished for a bypass; Arthur Dent hitches across a absurd universe in his bathrobe.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "towel",
   "vogons",
   "42"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
 },
 {
  "id": "godzilla",
  "title": "Godzilla",
  "year": 2014,
  "director": "Gareth Edwards",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "Godzilla rises as nature's balance against parasitic titans feasting on radiation.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "kaiju",
   "titans",
   "navy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Godzilla_%282014%29_poster.jpg"
 },
 {
  "id": "godzilla-minus-one",
  "title": "Godzilla Minus One",
  "year": 2023,
  "director": "Takashi Yamazaki",
  "genres": [
   "Sci-Fi",
   "Drama",
   "Action"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A disgraced kamikaze pilot faces Godzilla over a Japan that has already lost everything.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 3,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "godzilla",
   "japan",
   "shame"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/Godzilla_Minus_One_Poster.jpeg"
 },
 {
  "id": "halloween-2018",
  "title": "Halloween",
  "year": 2018,
  "director": "David Gordon Green",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "Laurie Strode, armed and waiting forty years, gets her rematch with Michael Myers.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 8,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "slasher",
   "laurie",
   "rematch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Halloween_%282018%29_poster.jpg"
 },
 {
  "id": "friday-the-13th",
  "title": "Friday the 13th",
  "year": 1980,
  "director": "Sean S. Cunningham",
  "genres": [
   "Horror"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Camp Crystal Lake reopens and its counselors are picked off one by one.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "camp",
   "slasher",
   "lake"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Friday_the_13th_%281980%29_theatrical_poster.jpg"
 },
 {
  "id": "scream-2022",
  "title": "Scream",
  "year": 2022,
  "director": "Matt Bettinelli-Olpin",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 114,
  "rating": "R",
  "description": "A new Ghostface targets the children of Woodsboro's original victims.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 5,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "ghostface",
   "legacy",
   "meta"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg"
 },
 {
  "id": "the-texas-chain-saw-massacre",
  "title": "The Texas Chain Saw Massacre",
  "year": 1974,
  "director": "Tobe Hooper",
  "genres": [
   "Horror"
  ],
  "runtime": 83,
  "rating": "R",
  "description": "Five friends run out of gas near a farmhouse where Leatherface's family is hungry.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "leatherface",
   "farmhouse",
   "raw"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg"
 },
 {
  "id": "the-omen",
  "title": "The Omen",
  "year": 1976,
  "director": "Richard Donner",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "An ambassador suspects the son he secretly adopted is the Antichrist.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "antichrist",
   "damien",
   "prophecy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/Omen_ver4.jpg"
 },
 {
  "id": "carrie",
  "title": "Carrie",
  "year": 1976,
  "director": "Brian De Palma",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "A bullied girl's telekinetic rage detonates at the prom that was meant to humiliate her.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "prom",
   "telekinesis",
   "bullied"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/Carrieposter.jpg"
 },
 {
  "id": "suspiria",
  "title": "Suspiria",
  "year": 1977,
  "director": "Dario Argento",
  "genres": [
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "An American dancer arrives at a German ballet school run by witches in candy-colored dread.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "witches",
   "ballet",
   "giallo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cd/SuspiriaItaly.jpg"
 },
 {
  "id": "dawn-of-the-dead",
  "title": "Dawn of the Dead",
  "year": 1978,
  "director": "George A. Romero",
  "genres": [
   "Horror"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "Four survivors barricade a shopping mall as the dead — and consumerism — close in.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 8,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "zombies",
   "mall",
   "romero"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Dawn_of_the_dead.jpg"
 },
 {
  "id": "night-of-the-living-dead",
  "title": "Night of the Living Dead",
  "year": 1968,
  "director": "George A. Romero",
  "genres": [
   "Horror"
  ],
  "runtime": 96,
  "rating": "NR",
  "description": "Strangers barricade a farmhouse as the dead rise for the first time in film history.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "zombies",
   "farmhouse",
   "classic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/Night_of_the_Living_Dead_%281968%29_poster.jpg"
 },
 {
  "id": "28-weeks-later",
  "title": "28 Weeks Later",
  "year": 2007,
  "director": "Juan Carlos Fresnadillo",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "London's repopulation collapses when the rage virus slips back inside the green zone.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "rage",
   "london",
   "sequel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/46/28_Weeks_Later_poster.jpg"
 },
 {
  "id": "28-years-later",
  "title": "28 Years Later",
  "year": 2025,
  "director": "Danny Boyle",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A boy leaves his quarantined island and finds the infected — and the survivors — have evolved.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "rage",
   "island",
   "spine"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/28_Years_Later_film_poster.jpg"
 },
 {
  "id": "world-war-z",
  "title": "World War Z",
  "year": 2013,
  "director": "Marc Forster",
  "genres": [
   "Horror",
   "Action",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A UN investigator races the globe for patient zero as zombie swarms take cities in minutes.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 6,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "zombies",
   "global",
   "swarm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/World_War_Z_poster.jpg"
 },
 {
  "id": "zombieland",
  "title": "Zombieland",
  "year": 2009,
  "director": "Ruben Fleischer",
  "genres": [
   "Horror",
   "Comedy",
   "Action"
  ],
  "runtime": 88,
  "rating": "R",
  "description": "A neurotic survivor's rulebook guides an oddball road family across zombie America.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 5,
   "funny": 8,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "zombies",
   "rules",
   "twinkies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Zombieland-poster.jpg"
 },
 {
  "id": "the-cabin-in-the-woods",
  "title": "The Cabin in the Woods",
  "year": 2011,
  "director": "Drew Goddard",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Five friends' cabin weekend is secretly an orchestrated ritual — and it starts going wrong.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 7,
   "funny": 6,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "cabin",
   "ritual",
   "meta"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg"
 },
 {
  "id": "tucker-dale-vs-evil",
  "title": "Tucker & Dale vs Evil",
  "year": 2010,
  "director": "Eli Craig",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "Two gentle hillbillies are mistaken for killers as college kids keep dying around them.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 5,
   "funny": 9,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 2,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "hillbillies",
   "misunderstanding",
   "chainsaw"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Tucker-and-dale-vs-evil.jpg"
 },
 {
  "id": "ready-or-not",
  "title": "Ready or Not",
  "year": 2019,
  "director": "Matt Bettinelli-Olpin",
  "genres": [
   "Horror",
   "Thriller",
   "Comedy"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A bride's wedding night becomes a hide-and-seek game her in-laws play to the death.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 7,
   "funny": 5,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "wedding",
   "hideandseek",
   "rich"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Ready_or_Not_2019_film_poster.jpg"
 },
 {
  "id": "happy-death-day",
  "title": "Happy Death Day",
  "year": 2017,
  "director": "Christopher Landon",
  "genres": [
   "Horror",
   "Comedy",
   "Thriller"
  ],
  "runtime": 96,
  "rating": "PG-13",
  "description": "A student relives her birthday — and her murder — until she finds her killer.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 6,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "timeloop",
   "birthday",
   "slasher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Happy_Death_Day_poster.png"
 },
 {
  "id": "x",
  "title": "X",
  "year": 2022,
  "director": "Ti West",
  "genres": [
   "Horror"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "A 1979 porn shoot at a remote farm turns into a massacre by its elderly hosts.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 8,
   "funny": 2,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "farm",
   "seventies",
   "slasher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/X_%282022_film%29.jpeg"
 },
 {
  "id": "pearl",
  "title": "Pearl",
  "year": 2022,
  "director": "Ti West",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A farm girl in 1918 dreams of stardom and rehearses her violence on the way.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "farm",
   "stardom",
   "1918"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5b/Pearl_theatricalposter.jpg"
 },
 {
  "id": "maxxxine",
  "title": "MaXXXine",
  "year": 2024,
  "director": "Ti West",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "Maxine chases fame in 1985 Hollywood while the Night Stalker closes in.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 7,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "hollywood",
   "eighties",
   "stalker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/MaXXXine_%28poster%29.jpg"
 },
 {
  "id": "smile",
  "title": "Smile",
  "year": 2022,
  "director": "Parker Finn",
  "genres": [
   "Horror"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A therapist inherits a smiling curse after watching a patient die, and starts unravelling.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "curse",
   "smile",
   "therapist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg"
 },
 {
  "id": "smile-2",
  "title": "Smile 2",
  "year": 2024,
  "director": "Parker Finn",
  "genres": [
   "Horror"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "A pop star on a comeback tour inherits the grinning curse in front of the whole world.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 9,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "popstar",
   "curse",
   "tour"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/17/Smile_2_%282024%29_poster.jpg"
 },
 {
  "id": "the-conjuring-2",
  "title": "The Conjuring 2",
  "year": 2016,
  "director": "James Wan",
  "genres": [
   "Horror"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "The Warrens travel to Enfield, London, where a single mother swears a poltergeist owns her house.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 9,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "warrens",
   "enfield",
   "nun"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/The_Conjuring_2.jpg"
 },
 {
  "id": "the-purge",
  "title": "The Purge",
  "year": 2013,
  "director": "James DeMonaco",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 85,
  "rating": "R",
  "description": "One night a year all crime is legal; a wealthy family's fortress becomes a target.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 7,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "purge",
   "home",
   "night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/94/The_Purge_film_poster.jpg"
 },
 {
  "id": "the-purge-anarchy",
  "title": "The Purge: Anarchy",
  "year": 2014,
  "director": "James DeMonaco",
  "genres": [
   "Horror",
   "Action",
   "Thriller"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "Strangers band together to survive purge night on the streets of Los Angeles.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 6,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "purge",
   "streets",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/The_Purge_%E2%80%93_Anarchy_Poster.jpg"
 },
 {
  "id": "m3gan",
  "title": "M3GAN",
  "year": 2022,
  "director": "Gerard Johnstone",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 102,
  "rating": "PG-13",
  "description": "An AI doll built to protect a grieving girl starts deciding who counts as a threat.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 6,
   "funny": 4,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "doll",
   "ai",
   "dance"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg"
 },
 {
  "id": "child-s-play",
  "title": "Child's Play",
  "year": 1988,
  "director": "Tom Holland",
  "genres": [
   "Horror"
  ],
  "runtime": 87,
  "rating": "R",
  "description": "A dying killer's soul lands in a Good Guy doll bought for a six-year-old.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 7,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "chucky",
   "doll",
   "voodoo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/Childs_Play.jpg"
 },
 {
  "id": "annabelle-creation",
  "title": "Annabelle: Creation",
  "year": 2017,
  "director": "David F. Sandberg",
  "genres": [
   "Horror"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Orphan girls move into a dollmaker's farmhouse and find the doll he locked away.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "doll",
   "orphans",
   "farmhouse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg"
 },
 {
  "id": "lights-out",
  "title": "Lights Out",
  "year": 2016,
  "director": "David F. Sandberg",
  "genres": [
   "Horror"
  ],
  "runtime": 81,
  "rating": "PG-13",
  "description": "A family is haunted by a creature that only exists when the lights are off.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 9,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "darkness",
   "mother",
   "lights"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Lights_Out_2016_poster.jpg"
 },
 {
  "id": "don-t-breathe",
  "title": "Don't Breathe",
  "year": 2016,
  "director": "Fede Álvarez",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 88,
  "rating": "R",
  "description": "Burglars break into a blind veteran's house and discover he is far from helpless.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "blind",
   "robbery",
   "basement"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Don%27t_Breathe_%282016_film%29.png"
 },
 {
  "id": "a-quiet-place-part-ii",
  "title": "A Quiet Place Part II",
  "year": 2020,
  "director": "John Krasinski",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "The Abbott family leaves home and learns the creatures aren't the only danger left.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 7,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "creatures",
   "silence",
   "island"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/02/A_Quiet_Place_Part_II.jpg"
 },
 {
  "id": "a-quiet-place-day-one",
  "title": "A Quiet Place: Day One",
  "year": 2024,
  "director": "Michael Sarnoski",
  "genres": [
   "Horror",
   "Drama",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "PG-13",
  "description": "A dying poet and her cat navigate the first day the creatures fell on New York.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "creatures",
   "newyork",
   "cat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/A_Quiet_Place_Day_One_%282024%29_poster.jpg"
 },
 {
  "id": "bird-box",
  "title": "Bird Box",
  "year": 2018,
  "director": "Susanne Bier",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "A mother rows two children downriver blindfolded, because seeing the entities means death.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "blindfold",
   "river",
   "entities"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png"
 },
 {
  "id": "the-invisible-man",
  "title": "The Invisible Man",
  "year": 2020,
  "director": "Leigh Whannell",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "A woman escapes her abusive tech-genius boyfriend, who fakes death and turns invisible.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "invisible",
   "abuse",
   "gaslight"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg"
 },
 {
  "id": "nope",
  "title": "Nope",
  "year": 2022,
  "director": "Jordan Peele",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Siblings running a horse ranch spot something in the clouds that doesn't move like weather.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 8,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "sky",
   "ranch",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Nope_%28film%29_poster.jpg"
 },
 {
  "id": "candyman",
  "title": "Candyman",
  "year": 1992,
  "director": "Bernard Rose",
  "genres": [
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A grad student researching a Chicago housing-project legend says his name five times.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "mirror",
   "chicago",
   "legend"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Candymanposter.jpg"
 },
 {
  "id": "hellraiser",
  "title": "Hellraiser",
  "year": 1987,
  "director": "Clive Barker",
  "genres": [
   "Horror"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A puzzle box opens a door to the Cenobites, who cannot tell pain from pleasure.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "cenobites",
   "box",
   "pinhead"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/40/Hellraiser-UK-Quad-poster.JPG"
 },
 {
  "id": "event-horizon",
  "title": "Event Horizon",
  "year": 1997,
  "director": "Paul W.S. Anderson",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "A rescue crew boards a lost starship that went somewhere hell is a good name for.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "starship",
   "hell",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Event_horizon_ver1.jpg"
 },
 {
  "id": "they-live",
  "title": "They Live",
  "year": 1988,
  "director": "John Carpenter",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Action"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "Sunglasses reveal the ruling class are aliens and every billboard is an order.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 5,
   "funny": 4,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "sunglasses",
   "aliens",
   "obey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/1988They_Live_poster300.jpg"
 },
 {
  "id": "the-mist",
  "title": "The Mist",
  "year": 2007,
  "director": "Frank Darabont",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "A supermarket shelters townsfolk from creatures in the fog — and from each other.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "fog",
   "supermarket",
   "ending"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Mist_poster.jpg"
 },
 {
  "id": "1408",
  "title": "1408",
  "year": 2007,
  "director": "Mikael Håfström",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "A debunker of haunted hotels checks into room 1408 and cannot check out of its timeline.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "hotel",
   "room",
   "debunker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/1408poster.jpg"
 },
 {
  "id": "gerald-s-game",
  "title": "Gerald's Game",
  "year": 2017,
  "director": "Mike Flanagan",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 103,
  "rating": "TV-MA",
  "description": "Handcuffed to a bed in a lake house, a woman fights thirst, trauma and the Moonlight Man.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "handcuffs",
   "lakehouse",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/GeraldsGameFilm.jpg"
 },
 {
  "id": "hush",
  "title": "Hush",
  "year": 2016,
  "director": "Mike Flanagan",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 82,
  "rating": "R",
  "description": "A deaf writer alone in the woods plays cat-and-mouse with a masked killer.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "deaf",
   "woods",
   "masked"
  ],
  "poster": ""
 },
 {
  "id": "oculus",
  "title": "Oculus",
  "year": 2013,
  "director": "Mike Flanagan",
  "genres": [
   "Horror"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Siblings set up cameras to prove an antique mirror murdered their parents.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "mirror",
   "siblings",
   "cameras"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Oculus_%282013_film%29_poster.jpg"
 },
 {
  "id": "the-autopsy-of-jane-doe",
  "title": "The Autopsy of Jane Doe",
  "year": 2016,
  "director": "André Øvredal",
  "genres": [
   "Horror"
  ],
  "runtime": 86,
  "rating": "R",
  "description": "A father-son coroner team opens an unmarked body and the morgue starts answering back.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "morgue",
   "witch",
   "storm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/The_Autopsy_of_Jane_Doe.jpeg"
 },
 {
  "id": "the-lodge",
  "title": "The Lodge",
  "year": 2019,
  "director": "Severin Fiala",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "Snowed in with their father's fiancée, two kids watch a cult survivor's past wake up.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "cabin",
   "snow",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg"
 },
 {
  "id": "his-house",
  "title": "His House",
  "year": 2020,
  "director": "Remi Weekes",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 93,
  "rating": "TV-MA",
  "description": "Refugees in a London council house find the ghosts of their journey moved in with them.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "refugees",
   "london",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/77/His_House_film_poster.png"
 },
 {
  "id": "terrifier-2",
  "title": "Terrifier 2",
  "year": 2022,
  "director": "Damien Leone",
  "genres": [
   "Horror"
  ],
  "runtime": 138,
  "rating": "NR",
  "description": "Art the Clown returns on Halloween to hunt a teen girl and her little brother.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 9,
   "funny": 2,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "clown",
   "halloween",
   "gore"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cd/Terrifier_2_Poster.jpg"
 },
 {
  "id": "terrifier-3",
  "title": "Terrifier 3",
  "year": 2024,
  "director": "Damien Leone",
  "genres": [
   "Horror"
  ],
  "runtime": 125,
  "rating": "NR",
  "description": "Art the Clown ruins Christmas in Miles County with a Santa suit and an axe.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 9,
   "funny": 3,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "clown",
   "christmas",
   "gore"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Terrifier_3_poster.jpg"
 },
 {
  "id": "final-destination",
  "title": "Final Destination",
  "year": 2000,
  "director": "James Wong",
  "genres": [
   "Horror"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "A teen's premonition saves his class from a crash; death comes to collect the debt.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 7,
   "funny": 2,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "premonition",
   "death",
   "plane"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Final_Destination_movie.jpg"
 },
 {
  "id": "final-destination-bloodlines",
  "title": "Final Destination Bloodlines",
  "year": 2025,
  "director": "Zach Lipovsky",
  "genres": [
   "Horror"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A student inherits her grandmother's death-defying premonition and the family curse with it.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 7,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "premonition",
   "family",
   "death"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg"
 },
 {
  "id": "saw-ii",
  "title": "Saw II",
  "year": 2005,
  "director": "Darren Lynn Bousman",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "Eight strangers wake in a booby-trapped house breathing nerve gas, with two hours to live.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "jigsaw",
   "house",
   "gas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f4/Saw_II_poster.jpg"
 },
 {
  "id": "hostel",
  "title": "Hostel",
  "year": 2005,
  "director": "Eli Roth",
  "genres": [
   "Horror"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "Backpackers in Slovakia are lured to a hostel where rich men pay to torture tourists.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 9,
   "funny": 1,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "slovakia",
   "backpackers",
   "torture"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/aa/Hostel_poster.jpg"
 },
 {
  "id": "the-hills-have-eyes",
  "title": "The Hills Have Eyes",
  "year": 2006,
  "director": "Alexandre Aja",
  "genres": [
   "Horror"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A family's desert breakdown strands them among mutants of a nuclear test site.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "desert",
   "mutants",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/The_Hills_Have_Eyes_film.jpg"
 },
 {
  "id": "wolf-creek",
  "title": "Wolf Creek",
  "year": 2005,
  "director": "Greg McLean",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "Three backpackers accept help from an outback bushman who is anything but.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "outback",
   "backpackers",
   "hunter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Wolfcreek.png"
 },
 {
  "id": "eden-lake",
  "title": "Eden Lake",
  "year": 2008,
  "director": "James Watkins",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "A couple's lake weekend is destroyed by local youths and escalates past all mercy.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 2,
   "epic": 2,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lake",
   "youths",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Eden_Lake_poster.jpg"
 },
 {
  "id": "funny-games",
  "title": "Funny Games",
  "year": 1997,
  "director": "Michael Haneke",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 109,
  "rating": "NR",
  "description": "Two polite young men hold a family hostage and make the audience complicit.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "hostage",
   "lakehouse",
   "haneke"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Funny_Games1997.jpg"
 },
 {
  "id": "martyrs",
  "title": "Martyrs",
  "year": 2008,
  "director": "Pascal Laugier",
  "genres": [
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A survivor's revenge uncovers a society torturing women to glimpse the afterlife.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 10,
   "funny": 0,
   "heartwarming": 0,
   "dark": 10,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "revenge",
   "society",
   "afterlife"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/Martyrs_tp01.jpg"
 },
 {
  "id": "high-tension",
  "title": "High Tension",
  "year": 2003,
  "director": "Alexandre Aja",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "A student visiting her friend's farm must hide as a trucker murders the family.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "farm",
   "trucker",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/High-Tension-film-poster.jpg"
 },
 {
  "id": "rec",
  "title": "[REC]",
  "year": 2007,
  "director": "Jaume Balagueró",
  "genres": [
   "Horror"
  ],
  "runtime": 78,
  "rating": "R",
  "description": "A TV reporter rides along with firefighters into a quarantined, infected apartment block.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "foundfootage",
   "quarantine",
   "building"
  ],
  "poster": ""
 },
 {
  "id": "as-above-so-below",
  "title": "As Above, So Below",
  "year": 2014,
  "director": "John Erick Dowdle",
  "genres": [
   "Horror",
   "Adventure"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "Treasure hunters descend into the Paris catacombs and find their own sins mapped in stone.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 8,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "catacombs",
   "paris",
   "foundfootage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/As_Above%2C_So_Below_Poster.jpg"
 },
 {
  "id": "incantation",
  "title": "Incantation",
  "year": 2022,
  "director": "Kevin Ko",
  "genres": [
   "Horror"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A mother films everything to prove she is protecting her daughter from a cursed ritual.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "curse",
   "ritual",
   "taiwan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b5/Incantation_%28film%29.jpeg"
 },
 {
  "id": "the-medium",
  "title": "The Medium",
  "year": 2021,
  "director": "Banjong Pisanthanakun",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "A documentary crew films a Thai shaman whose niece's possession turns out to be something older.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "shaman",
   "possession",
   "thailand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/The_Medium_film_poster.jpg"
 },
 {
  "id": "shutter",
  "title": "Shutter",
  "year": 2004,
  "director": "Banjong Pisanthanakun",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A photographer's pictures keep showing a ghost his conscience already knows.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "ghost",
   "photographer",
   "thailand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Shutterposter.jpg"
 },
 {
  "id": "ringu",
  "title": "Ringu",
  "year": 1998,
  "director": "Hideo Nakata",
  "genres": [
   "Horror"
  ],
  "runtime": 96,
  "rating": "NR",
  "description": "A journalist watches a tape that kills in seven days and races to break its logic.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "tape",
   "sevendays",
   "well"
  ],
  "poster": ""
 },
 {
  "id": "ju-on-the-grudge",
  "title": "Ju-On: The Grudge",
  "year": 2002,
  "director": "Takashi Shimizu",
  "genres": [
   "Horror"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A Tokyo house holds a grudge against everyone who crosses its threshold.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "house",
   "grudge",
   "tokyo"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7d/Juonthegrudgeposter.jpg"
 },
 {
  "id": "dark-water",
  "title": "Dark Water",
  "year": 2002,
  "director": "Hideo Nakata",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "A mother and daughter move into a leaking apartment haunted by a missing girl.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "leak",
   "apartment",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Dark-Water-2002-film-poster.jpg"
 },
 {
  "id": "audition",
  "title": "Audition",
  "year": 1999,
  "director": "Takashi Miike",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A widower stages fake auditions to find a wife; the finalist has a bag that moves.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 4,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "audition",
   "widower",
   "bag"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Audition-1999-poster.jpg"
 },
 {
  "id": "i-saw-the-devil",
  "title": "I Saw the Devil",
  "year": 2010,
  "director": "Kim Jee-woon",
  "genres": [
   "Horror",
   "Thriller",
   "Crime"
  ],
  "runtime": 144,
  "rating": "NR",
  "description": "An agent hunts his fiancée's killer and keeps releasing him to prolong the punishment.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 10,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "serialkiller",
   "revenge",
   "agent"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/I_Saw_the_Devil_film_poster.jpg"
 },
 {
  "id": "the-wailing",
  "title": "The Wailing",
  "year": 2016,
  "director": "Na Hong-jin",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 156,
  "rating": "NR",
  "description": "A bumbling cop, a shaman and a stranger collide over a village's sickness and a devil.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 9,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "village",
   "shaman",
   "devil"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Wailing_%28film%29.png"
 },
 {
  "id": "a-tale-of-two-sisters",
  "title": "A Tale of Two Sisters",
  "year": 2003,
  "director": "Kim Jee-woon",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "Two sisters return to a house of a stepmother, a ghost and a fractured truth.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "sisters",
   "stepmother",
   "house"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/A_Tale_of_Two_Sisters_film.jpg"
 },
 {
  "id": "the-host",
  "title": "The Host",
  "year": 2006,
  "director": "Bong Joon Ho",
  "genres": [
   "Horror",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A river monster snatches a snack-vendor's daughter; his family bumbles into heroism.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 6,
   "funny": 3,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "monster",
   "river",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/The_Host_film_poster.jpg"
 },
 {
  "id": "raw",
  "title": "Raw",
  "year": 2016,
  "director": "Julia Ducournau",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A vegetarian vet student tastes meat in a hazing ritual and develops an appetite.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "vetschool",
   "cannibal",
   "sisters"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d2/Raw_%28film%29.png"
 },
 {
  "id": "titane",
  "title": "Titane",
  "year": 2021,
  "director": "Julia Ducournau",
  "genres": [
   "Horror",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "A dancer with a titanium skull plate vanishes into a firefighter's delusion of family.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "titanium",
   "firefighter",
   "body"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Titane_poster.jpeg"
 },
 {
  "id": "possessor",
  "title": "Possessor",
  "year": 2020,
  "director": "Brandon Cronenberg",
  "genres": [
   "Horror",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "An assassin who hijacks bodies loses herself inside a mark who fights back.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "assassin",
   "bodies",
   "identity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ee/Possessor_%28film%29_poster.jpg"
 },
 {
  "id": "infinity-pool",
  "title": "Infinity Pool",
  "year": 2023,
  "director": "Brandon Cronenberg",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A resort country lets rich tourists pay doubles to take their death sentences.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "resort",
   "doubles",
   "rich"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Infinity_Pool_poster2.jpg"
 },
 {
  "id": "the-substance",
  "title": "The Substance",
  "year": 2024,
  "director": "Coralie Fargeat",
  "genres": [
   "Horror",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 141,
  "rating": "R",
  "description": "A fading star injects a serum that births a younger self who refuses to share the week.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 7,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "serum",
   "younger",
   "fame"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Substance_poster.jpg"
 },
 {
  "id": "nosferatu",
  "title": "Nosferatu",
  "year": 2024,
  "director": "Robert Eggers",
  "genres": [
   "Horror",
   "Fantasy"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "Count Orlok crosses oceans of plague for the woman whose dreams called him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 4,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "vampire",
   "plague",
   "gothic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Nosferatu_IMAX_poster_2024.jpg"
 },
 {
  "id": "bram-stoker-s-dracula",
  "title": "Bram Stoker's Dracula",
  "year": 1992,
  "director": "Francis Ford Coppola",
  "genres": [
   "Horror",
   "Romance"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Dracula crosses centuries and oceans for the reincarnation of his lost wife.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 9,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "vampire",
   "gothic",
   "reeves"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Bram_Stoker%27s_Dracula_%281992_film%29.jpg"
 },
 {
  "id": "interview-with-the-vampire",
  "title": "Interview with the Vampire",
  "year": 1994,
  "director": "Neil Jordan",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "Louis recounts two centuries of vampiric boredom, guilt and Lestat's cruelty to a reporter.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 6,
   "funny": 1,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "vampire",
   "louis",
   "lestat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fe/InterviewwithaVampireMoviePoste.JPG"
 },
 {
  "id": "30-days-of-night",
  "title": "30 Days of Night",
  "year": 2007,
  "director": "David Slade",
  "genres": [
   "Horror"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "Vampires descend on an Alaskan town entering a month of darkness.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 8,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "alaska",
   "vampires",
   "darkness"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/30_Days_of_Night_poster.jpg"
 },
 {
  "id": "near-dark",
  "title": "Near Dark",
  "year": 1987,
  "director": "Kathryn Bigelow",
  "genres": [
   "Horror",
   "Western"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A farm boy joins a nomadic vampire clan and must choose between blood and home.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 7,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 5,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampires",
   "nomads",
   "western"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b3/Neardarktheatposter.jpg"
 },
 {
  "id": "the-lost-boys",
  "title": "The Lost Boys",
  "year": 1987,
  "director": "Joel Schumacher",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "New kids in a boardwalk town learn the local biker gang never grows old.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 6,
   "funny": 6,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "vampires",
   "boardwalk",
   "teens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Lost_boys.jpg"
 },
 {
  "id": "fright-night",
  "title": "Fright Night",
  "year": 1985,
  "director": "Tom Holland",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "A teen is sure the charming new neighbor is a vampire; only a washed-up TV hunter believes him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 7,
   "funny": 5,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "vampire",
   "neighbor",
   "tvhunter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Fright_night_poster.jpg"
 },
 {
  "id": "from-dusk-till-dawn",
  "title": "From Dusk Till Dawn",
  "year": 1996,
  "director": "Robert Rodriguez",
  "genres": [
   "Horror",
   "Action"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "Bank robbers hole up in a biker bar that turns out to be a vampire nest at sundown.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 6,
   "funny": 5,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampires",
   "bar",
   "robbers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/From_dusk_till_dawn_poster.jpg"
 },
 {
  "id": "blade",
  "title": "Blade",
  "year": 1998,
  "director": "Stephen Norrington",
  "genres": [
   "Action",
   "Horror"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A half-vampire hunter wages war on the blood clubs of the vampire elite.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 5,
   "funny": 2,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampire",
   "hunter",
   "clubs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/Blade_movie.jpg"
 },
 {
  "id": "blade-ii",
  "title": "Blade II",
  "year": 2002,
  "director": "Guillermo del Toro",
  "genres": [
   "Action",
   "Horror"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "Blade teams with vampire commandos to hunt a mutant strain that eats vampires.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 6,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampire",
   "mutant",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/Blade_II_movie.jpg"
 },
 {
  "id": "underworld",
  "title": "Underworld",
  "year": 2003,
  "director": "Len Wiseman",
  "genres": [
   "Action",
   "Horror",
   "Fantasy"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A vampire warrior falls for the human a werewolf clan is hunting in an endless war.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 5,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 6,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampires",
   "lycans",
   "war"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/Underworld_%282003_film%29_poster.jpg"
 },
 {
  "id": "resident-evil",
  "title": "Resident Evil",
  "year": 2002,
  "director": "Paul W.S. Anderson",
  "genres": [
   "Horror",
   "Action",
   "Sci-Fi"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A commando team descends into Umbrella's Hive, where the T-virus has eaten everyone.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 6,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "zombies",
   "umbrella",
   "hive"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Resident_evil_ver4.jpg"
 },
 {
  "id": "silent-hill",
  "title": "Silent Hill",
  "year": 2006,
  "director": "Christophe Gans",
  "genres": [
   "Horror"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A mother searches a fog-and-ash town for her daughter and its burned-alive secret.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "fog",
   "town",
   "daughter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Silent_Hill_film_poster.jpg"
 },
 {
  "id": "it-chapter-two",
  "title": "It Chapter Two",
  "year": 2019,
  "director": "Andy Muschietti",
  "genres": [
   "Horror"
  ],
  "runtime": 169,
  "rating": "R",
  "description": "The Losers return to Derry 27 years later to finish what Pennywise started.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 8,
   "funny": 3,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "clown",
   "derry",
   "reunion"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/It_Chapter_Two_Poster.jpg"
 },
 {
  "id": "doctor-sleep",
  "title": "Doctor Sleep",
  "year": 2019,
  "director": "Mike Flanagan",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 152,
  "rating": "R",
  "description": "Grown Danny Torrance protects a shining girl from a cult that eats children like her.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 7,
   "funny": 1,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "overlook",
   "cult",
   "danny"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/Doctor_Sleep_%28Official_Film_Poster%29.png"
 },
 {
  "id": "pet-sematary",
  "title": "Pet Sematary",
  "year": 1989,
  "director": "Mary Lambert",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A burial ground beyond the pet cemetery brings back the dead wrong.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "burial",
   "grief",
   "king"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/75/Pet_sematary_poster.jpg"
 },
 {
  "id": "longlegs",
  "title": "Longlegs",
  "year": 2024,
  "director": "Osgood Perkins",
  "genres": [
   "Horror",
   "Thriller",
   "Crime"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "An FBI agent with a psychic streak deciphers a satanic killer's birthday-card murders.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "fbi",
   "occult",
   "dolls"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Longlegs_film_poster.jpg"
 },
 {
  "id": "the-monkey",
  "title": "The Monkey",
  "year": 2025,
  "director": "Osgood Perkins",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "Twin brothers inherit a wind-up monkey whose drumbeats coincide with absurd deaths.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 7,
   "funny": 7,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "monkey",
   "twins",
   "deaths"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Monkey_film_poster.jpg"
 },
 {
  "id": "sinners",
  "title": "Sinners",
  "year": 2025,
  "director": "Ryan Coogler",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "Twin brothers open a 1932 Mississippi juke joint and the music calls in vampires.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 7,
   "funny": 2,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 3,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "vampires",
   "blues",
   "mississippi"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/Sinners_%282025_film%29_poster.jpg"
 },
 {
  "id": "weapons",
  "title": "Weapons",
  "year": 2025,
  "director": "Zach Cregger",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Seventeen children from one class vanish at 2:17 a.m.; a town tears itself apart asking why.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 8,
   "funny": 2,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "children",
   "vanish",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/Weapons_film_2025.jpeg"
 },
 {
  "id": "bring-her-back",
  "title": "Bring Her Back",
  "year": 2025,
  "director": "Danny Philippou",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Foster siblings suspect their new mother's grief ritual is not about comfort.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "foster",
   "ritual",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Bring_Her_Back_film_poster.jpg"
 },
 {
  "id": "heretic",
  "title": "Heretic",
  "year": 2024,
  "director": "Scott Beck",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "Two missionaries knock on the wrong door and enter a theologian's maze of faith tests.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 8,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "missionaries",
   "maze",
   "faith"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Heretic_film_poster.jpg"
 },
 {
  "id": "the-first-omen",
  "title": "The First Omen",
  "year": 2024,
  "director": "Arkasha Stevenson",
  "genres": [
   "Horror"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A novitiate in Rome uncovers a conspiracy to breed the Antichrist inside the Church.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "rome",
   "conspiracy",
   "antichrist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/The_First_Omen_poster.jpg"
 },
 {
  "id": "immaculate",
  "title": "Immaculate",
  "year": 2024,
  "director": "Michael Mohan",
  "genres": [
   "Horror"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "A devout sister's miraculous pregnancy turns her convent into a prison of believers.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "convent",
   "pregnancy",
   "faith"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/Immaculate_Poster.jpg"
 },
 {
  "id": "abigail",
  "title": "Abigail",
  "year": 2024,
  "director": "Matt Bettinelli-Olpin",
  "genres": [
   "Horror",
   "Comedy",
   "Thriller"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Kidnappers lock up a ballerina for ransom and learn too late what she is.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 7,
   "funny": 5,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "ballerina",
   "kidnap",
   "vampire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Abigail_Official_Poster.jpg"
 },
 {
  "id": "late-night-with-the-devil",
  "title": "Late Night with the Devil",
  "year": 2023,
  "director": "Colin Cairnes",
  "genres": [
   "Horror"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "A 1977 talk show's Halloween special invites a possessed girl live on air.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 4,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "talkshow",
   "live",
   "possession"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Late_Night_with_the_Devil_poster.jpg"
 },
 {
  "id": "in-a-violent-nature",
  "title": "In a Violent Nature",
  "year": 2024,
  "director": "Chris Nash",
  "genres": [
   "Horror"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A slasher's rampage filmed patiently from the killer's own shoulder.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "slasher",
   "woods",
   "perspective"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/In_a_Violent_Nature_%282024%29_poster.jpg"
 },
 {
  "id": "oddity",
  "title": "Oddity",
  "year": 2024,
  "director": "Damian Mc Carthy",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "A blind medium brings a wooden mannequin to the house where her twin was murdered.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "medium",
   "mannequin",
   "twins"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Oddity_film_poster.jpg"
 },
 {
  "id": "strange-darling",
  "title": "Strange Darling",
  "year": 2023,
  "director": "JT Mollner",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A one-night stand becomes a cat-and-mouse killing told in shuffled chapters.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 8,
   "funny": 1,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 3,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "chapters",
   "catandmouse",
   "stand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Strange_Darling_poster.jpg"
 },
 {
  "id": "when-evil-lurks",
  "title": "When Evil Lurks",
  "year": 2023,
  "director": "Demián Rugna",
  "genres": [
   "Horror"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "Two brothers find a 'rotten' possessed man and spread the evil across their valley.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "possession",
   "brothers",
   "argentina"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/25/When_Evil_Lurks_%282023%29_poster.jpg"
 },
 {
  "id": "terrified",
  "title": "Terrified",
  "year": 2017,
  "director": "Demián Rugna",
  "genres": [
   "Horror"
  ],
  "runtime": 87,
  "rating": "R",
  "description": "Paranormal investigators enter a Buenos Aires street where the dead sit up at dinner tables.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "street",
   "investigators",
   "argentina"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Aterrados_poster.jpg"
 },
 {
  "id": "veronica",
  "title": "Veronica",
  "year": 2017,
  "director": "Paco Plaza",
  "genres": [
   "Horror"
  ],
  "runtime": 105,
  "rating": "TV-MA",
  "description": "A Madrid teen's Ouija session during an eclipse invites something to follow her home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "ouija",
   "madrid",
   "eclipse"
  ],
  "poster": ""
 },
 {
  "id": "one-cut-of-the-dead",
  "title": "One Cut of the Dead",
  "year": 2017,
  "director": "Shinichiro Ueda",
  "genres": [
   "Horror",
   "Comedy"
  ],
  "runtime": 96,
  "rating": "NR",
  "description": "A zombie one-take shoot collapses — then the film rewinds to reveal the chaos behind it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 5,
   "funny": 9,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "onetake",
   "zombies",
   "crew"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Kamera-o-tomeru-na-japanese-movie-poster-md.jpg"
 },
 {
  "id": "you-re-next",
  "title": "You're Next",
  "year": 2011,
  "director": "Adam Wingard",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A family reunion under siege meets its match in a guest who was raised to survive.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 7,
   "funny": 3,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "reunion",
   "masked",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/YoureNext2011Film.jpg"
 },
 {
  "id": "green-room",
  "title": "Green Room",
  "year": 2015,
  "director": "Jeremy Saulnier",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A punk band witnesses a murder at a skinhead club and must fight out of the green room.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 8,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "punk",
   "club",
   "siege"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Green_Room_%28film%29_POSTER.jpg"
 },
 {
  "id": "the-strangers",
  "title": "The Strangers",
  "year": 2008,
  "director": "Bryan Bertino",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 85,
  "rating": "R",
  "description": "Three masked strangers torment a couple in a remote house — because they were home.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 9,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 2,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "masked",
   "home",
   "because"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Strangersposter.jpg"
 },
 {
  "id": "speak-no-evil",
  "title": "Speak No Evil",
  "year": 2022,
  "director": "Christian Tafdrup",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A Danish family's visit to charming Dutch hosts curdles into politeness-trapped horror.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "hosts",
   "politeness",
   "denmark"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/66/Speak_No_Evil_Official_Poster.jpg"
 },
 {
  "id": "the-orphanage",
  "title": "The Orphanage",
  "year": 2007,
  "director": "J.A. Bayona",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "A mother reopens her childhood orphanage; her son's imaginary friends start answering.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 8,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "orphanage",
   "son",
   "games"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Elorfanato.jpg"
 },
 {
  "id": "the-others",
  "title": "The Others",
  "year": 2001,
  "director": "Alejandro Amenábar",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "A mother guards her light-sensitive children in a Jersey mansion where the servants know more.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 8,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "mansion",
   "light",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/TheOthers.jpg"
 },
 {
  "id": "the-devil-s-backbone",
  "title": "The Devil's Backbone",
  "year": 2001,
  "director": "Guillermo del Toro",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "An orphanage in the Spanish Civil War hides a ghost boy and an unexploded bomb.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 7,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "orphanage",
   "war",
   "ghost"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/20/Espinazo_del_diablo_poster.jpg"
 },
 {
  "id": "crimson-peak",
  "title": "Crimson Peak",
  "year": 2015,
  "director": "Guillermo del Toro",
  "genres": [
   "Horror",
   "Romance",
   "Drama"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A writer marries into a crumbling red-clay mansion where ghosts bleed through the floor.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 7,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 8,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "mansion",
   "gothic",
   "ghosts"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/Crimson_Peak_theatrical_poster.jpg"
 },
 {
  "id": "alien-romulus",
  "title": "Alien: Romulus",
  "year": 2024,
  "director": "Fede Álvarez",
  "genres": [
   "Horror",
   "Sci-Fi"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Young scavengers board a derelict station for cryopods and wake its perfect organism.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 9,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "alien",
   "station",
   "scavengers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Alien_Romulus_2024_%28poster%29.jpg"
 },
 {
  "id": "the-invisible-guest",
  "title": "The Invisible Guest",
  "year": 2016,
  "director": "Oriol Paulo",
  "genres": [
   "Thriller",
   "Mystery",
   "Crime"
  ],
  "runtime": 106,
  "rating": "NR",
  "description": "A locked-room murder, a lover's corpse and a lawyer rebuilding the night piece by piece.",
  "vector": {
   "adrenaline": 4,
   "brainy": 9,
   "scary": 1,
   "funny": 0,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "lockedroom",
   "lawyer",
   "spain"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Contratiempo_poster.jpg"
 },
 {
  "id": "glass-onion-a-knives-out-mystery",
  "title": "Glass Onion: A Knives Out Mystery",
  "year": 2022,
  "director": "Rian Johnson",
  "genres": [
   "Mystery",
   "Comedy",
   "Crime"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "Benoit Blanc crashes a tech billionaire's island murder game that turns real.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "whodunit",
   "island",
   "billionaire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/62/Glass_Onion_poster.jpg"
 },
 {
  "id": "wake-up-dead-man-a-knives-out-mystery",
  "title": "Wake Up Dead Man: A Knives Out Mystery",
  "year": 2025,
  "director": "Rian Johnson",
  "genres": [
   "Mystery",
   "Comedy",
   "Crime"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "Blanc investigates an impossible church murder in a small town thick with secrets.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "whodunit",
   "church",
   "blanc"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/WakeUpDeadMan_poster.jpg"
 },
 {
  "id": "the-menu",
  "title": "The Menu",
  "year": 2022,
  "director": "Mark Mylod",
  "genres": [
   "Thriller",
   "Horror",
   "Comedy"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "A remote tasting menu serves its wealthy guests a final course none of them ordered.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 5,
   "funny": 5,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "chef",
   "island",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg"
 },
 {
  "id": "memories-of-murder",
  "title": "Memories of Murder",
  "year": 2003,
  "director": "Bong Joon Ho",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 131,
  "rating": "NR",
  "description": "Korea's first serial killer outruns 1980s police work, pride and monsoon rain.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "serialkiller",
   "korea",
   "rain"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Salinui-chueok-south-korean-movie-poster-md.jpg"
 },
 {
  "id": "the-chaser",
  "title": "The Chaser",
  "year": 2008,
  "director": "Na Hong-jin",
  "genres": [
   "Crime",
   "Thriller",
   "Action"
  ],
  "runtime": 125,
  "rating": "NR",
  "description": "A pimp ex-cop races the clock to find a missing girl before her kidnapper finishes.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "korea",
   "pimp",
   "race"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/The_Chaser_film_poster.jpg"
 },
 {
  "id": "mother",
  "title": "Mother!",
  "year": 2009,
  "director": "Bong Joon Ho",
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ],
  "runtime": 128,
  "rating": "NR",
  "description": "A devoted mother becomes detective, liar and avenger to clear her son of murder.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "mother",
   "korea",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/94/Mother%212017.jpg"
 },
 {
  "id": "a-bittersweet-life",
  "title": "A Bittersweet Life",
  "year": 2005,
  "director": "Kim Jee-woon",
  "genres": [
   "Action",
   "Crime",
   "Thriller"
  ],
  "runtime": 120,
  "rating": "NR",
  "description": "A gang enforcer spares a cheating girlfriend and becomes his boss's target.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "gangster",
   "korea",
   "mercy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/A_Bittersweet_Life_Poster.jpg"
 },
 {
  "id": "the-man-from-nowhere",
  "title": "The Man from Nowhere",
  "year": 2010,
  "director": "Lee Jeong-beom",
  "genres": [
   "Action",
   "Thriller",
   "Crime"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A pawnshop recluse unleashes his past to save the little girl next door.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 1,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "korea",
   "rescue",
   "pawnshop"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Man_from_Nowhere_poster.jpg"
 },
 {
  "id": "burning",
  "title": "Burning",
  "year": 2018,
  "director": "Lee Chang-dong",
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ],
  "runtime": 148,
  "rating": "NR",
  "description": "A delivery man, a free spirit and a rich stranger; greenhouses keep burning.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "greenhouse",
   "triangle",
   "korea"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Burning.png"
 },
 {
  "id": "decision-to-leave",
  "title": "Decision to Leave",
  "year": 2022,
  "director": "Park Chan-wook",
  "genres": [
   "Romance",
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 138,
  "rating": "NR",
  "description": "A detective falls for the widow of the man whose death he's investigating.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 8,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "detective",
   "widow",
   "sea"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Decision_to_Leave_film_poster.jpg"
 },
 {
  "id": "cure",
  "title": "Cure",
  "year": 1997,
  "director": "Kiyoshi Kurosawa",
  "genres": [
   "Horror",
   "Thriller",
   "Crime"
  ],
  "runtime": 111,
  "rating": "NR",
  "description": "A drifter leaves X-carved victims wherever he goes; the detective starts to unravel.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 6,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "drifter",
   "x",
   "hypnosis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Cureposter.jpg"
 },
 {
  "id": "the-game",
  "title": "The Game",
  "year": 1997,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A rich banker is gifted a game that dismantles his life one paranoia at a time.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "game",
   "banker",
   "paranoia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/22/The_Game_film_poster.jpg"
 },
 {
  "id": "panic-room",
  "title": "Panic Room",
  "year": 2002,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "A mother and daughter lock into a panic room with the burglars' prize inside it.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 3,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "panicroom",
   "burglars",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Panic_Room_poster.jpg"
 },
 {
  "id": "the-girl-with-the-dragon-tattoo",
  "title": "The Girl with the Dragon Tattoo",
  "year": 2011,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Crime",
   "Mystery"
  ],
  "runtime": 158,
  "rating": "R",
  "description": "A disgraced journalist and hacker Lisbeth Salander dig into a rich family's frozen secret.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hacker",
   "sweden",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg"
 },
 {
  "id": "non-stop",
  "title": "Non-Stop",
  "year": 2014,
  "director": "Jaume Collet-Serra",
  "genres": [
   "Action",
   "Thriller",
   "Mystery"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "An air marshal gets texts demanding $150 million or a passenger dies every 20 minutes.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "plane",
   "marshal",
   "texts"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/Non-Stop2014Poster.jpg"
 },
 {
  "id": "the-grey",
  "title": "The Grey",
  "year": 2011,
  "director": "Joe Carnahan",
  "genres": [
   "Thriller",
   "Drama",
   "Adventure"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "Plane-crash survivors in Alaska are hunted by wolves and their own despair.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wolves",
   "alaska",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/The_Grey_Poster.jpg"
 },
 {
  "id": "wind-river",
  "title": "Wind River",
  "year": 2017,
  "director": "Taylor Sheridan",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A tracker and an FBI agent hunt a killer across a frozen Wyoming reservation.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wyoming",
   "snow",
   "tracker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Wind_River_%282017_film%29.png"
 },
 {
  "id": "the-accountant",
  "title": "The Accountant",
  "year": 2016,
  "director": "Gavin O'Connor",
  "genres": [
   "Action",
   "Thriller",
   "Crime"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "An autistic forensic accountant for cartels is also their worst nightmare with a rifle.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "accountant",
   "cartels",
   "rifle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e4/The_Accountant_%282016_film%29.png"
 },
 {
  "id": "the-secret-in-their-eyes",
  "title": "The Secret in Their Eyes",
  "year": 2009,
  "director": "Juan José Campanella",
  "genres": [
   "Drama",
   "Mystery",
   "Romance",
   "Thriller"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A retired investigator writes the novel of the rape-murder case that never left him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 8,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "argentina",
   "novel",
   "eyes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/Cartel-nuevo-de-el-secreto-de-sus-ojos.jpg"
 },
 {
  "id": "headhunters",
  "title": "Headhunters",
  "year": 2011,
  "director": "Morten Tyldum",
  "genres": [
   "Thriller",
   "Crime"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "An art-thief recruiter steals from the wrong ex-soldier and runs for his life.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "art",
   "norway",
   "chase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Headhunter_poster.jpg"
 },
 {
  "id": "tinker-tailor-soldier-spy",
  "title": "Tinker Tailor Soldier Spy",
  "year": 2011,
  "director": "Tomas Alfredson",
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "George Smiley is pulled from retirement to find the Soviet mole atop MI6.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spy",
   "mole",
   "smiley"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/Tinker_Tailor_Soldier_Spy_%28film%29.png"
 },
 {
  "id": "bridge-of-spies",
  "title": "Bridge of Spies",
  "year": 2015,
  "director": "Steven Spielberg",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 142,
  "rating": "PG-13",
  "description": "An insurance lawyer defends a Soviet spy, then trades him on a Berlin bridge.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "coldwar",
   "spy",
   "berlin"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Bridge_of_Spies_poster.jpg"
 },
 {
  "id": "munich",
  "title": "Munich",
  "year": 2005,
  "director": "Steven Spielberg",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 164,
  "rating": "R",
  "description": "Israel's hit team after Munich 1972 slowly loses the men and the mission's meaning.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mossad",
   "munich",
   "team"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Munich_1_Poster.jpg"
 },
 {
  "id": "michael-clayton",
  "title": "Michael Clayton",
  "year": 2007,
  "director": "Tony Gilroy",
  "genres": [
   "Drama",
   "Thriller",
   "Crime"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A law firm's fixer reaches his moral limit covering up a poisoned-water case.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lawyer",
   "fixer",
   "poison"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/Michael_clayton.jpg"
 },
 {
  "id": "the-ghost-writer",
  "title": "The Ghost Writer",
  "year": 2010,
  "director": "Roman Polanski",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "A ghostwriter on a stormy island finds his predecessor's death inside the manuscript.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "island",
   "memoir",
   "pm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1a/The_Ghost_Writer_poster.png"
 },
 {
  "id": "state-of-play",
  "title": "State of Play",
  "year": 2009,
  "director": "Kevin Macdonald",
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A newspaper reporter digs into his congressman friend's dead researcher.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "newspaper",
   "congress",
   "conspiracy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/State_of_Play_theatrical_poster.jpg"
 },
 {
  "id": "snowden",
  "title": "Snowden",
  "year": 2016,
  "director": "Oliver Stone",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "Edward Snowden's path from soldier to the leak that changed surveillance forever.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "nsa",
   "leak",
   "whistleblower"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Snowden_film_poster.jpg"
 },
 {
  "id": "enemy-of-the-state",
  "title": "Enemy of the State",
  "year": 1998,
  "director": "Tony Scott",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "A lawyer unknowingly carries an NSA murder tape and becomes the state's target.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "nsa",
   "tape",
   "lawyer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/Enemy_of_the_State_%28film%29_poster_art.jpg"
 },
 {
  "id": "eagle-eye",
  "title": "Eagle Eye",
  "year": 2008,
  "director": "D.J. Caruso",
  "genres": [
   "Action",
   "Thriller",
   "Sci-Fi"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "Two strangers obey a phone voice that controls every screen and traffic light around them.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "phone",
   "ai",
   "chase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Eagle_eye_poster.jpg"
 },
 {
  "id": "deja-vu",
  "title": "Déjà Vu",
  "year": 2006,
  "director": "Tony Scott",
  "genres": [
   "Action",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "An ATF agent watches four days into the past to stop a ferry bombing — then steps in.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "past",
   "ferry",
   "agent"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cf/DejaVuBigPoster.jpg"
 },
 {
  "id": "the-machinist",
  "title": "The Machinist",
  "year": 2004,
  "director": "Brad Anderson",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "An insomniac factory worker who hasn't slept in a year follows notes he may have written.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "insomnia",
   "notes",
   "guilt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Machinist_poster.JPG"
 },
 {
  "id": "the-gift",
  "title": "The Gift",
  "year": 2015,
  "director": "Joel Edgerton",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "An old classmate's gifts reopen a couple's buried schoolyard cruelty.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gifts",
   "classmate",
   "secret"
  ],
  "poster": ""
 },
 {
  "id": "the-invitation",
  "title": "The Invitation",
  "year": 2015,
  "director": "Karyn Kusama",
  "genres": [
   "Thriller",
   "Drama",
   "Horror"
  ],
  "runtime": 100,
  "rating": "NR",
  "description": "A dinner party at his ex-wife's house feels off to Will in ways grief can't explain.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 5,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "dinner",
   "exwife",
   "cult"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/The_Invitation_%282015_film%29_POSTER.png"
 },
 {
  "id": "the-skin-i-live-in",
  "title": "The Skin I Live In",
  "year": 2011,
  "director": "Pedro Almodóvar",
  "genres": [
   "Thriller",
   "Drama",
   "Horror"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A plastic surgeon keeps a beautiful prisoner in the house where he perfects artificial skin.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 4,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "surgeon",
   "skin",
   "captive"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/28/Theskinilivein-poster.png"
 },
 {
  "id": "nightmare-alley",
  "title": "Nightmare Alley",
  "year": 2021,
  "director": "Guillermo del Toro",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 150,
  "rating": "R",
  "description": "A carny mentalist cons his way to the top and meets a psychiatrist who out-cons him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "carny",
   "mentalist",
   "noir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Nightmare_Alley_%282021_film%29.jpg"
 },
 {
  "id": "the-killer",
  "title": "The Killer",
  "year": 2023,
  "director": "David Fincher",
  "genres": [
   "Thriller",
   "Action",
   "Crime"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A methodical assassin botches a hit and methodically cleans up everyone involved.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "assassin",
   "method",
   "fincher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/The_Killer_2023_poster.jpg"
 },
 {
  "id": "black-bag",
  "title": "Black Bag",
  "year": 2025,
  "director": "Steven Soderbergh",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 93,
  "rating": "PG-13",
  "description": "A spy must investigate five suspects for a leak — one of them his own wife.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 5,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spy",
   "leak",
   "marriage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/Black_Bag_film_poster.jpg"
 },
 {
  "id": "carry-on",
  "title": "Carry-On",
  "year": 2024,
  "director": "Jaume Collet-Serra",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "A TSA agent is blackmailed into waving a dangerous bag through on Christmas Eve.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "tsa",
   "airport",
   "christmas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d0/Carry_On_film_poster.jpg"
 },
 {
  "id": "rebel-ridge",
  "title": "Rebel Ridge",
  "year": 2024,
  "director": "Jeremy Saulnier",
  "genres": [
   "Action",
   "Thriller",
   "Crime"
  ],
  "runtime": 131,
  "rating": "TV-MA",
  "description": "An ex-Marine's bail money is seized by small-town cops; he takes the town apart politely.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marine",
   "bail",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e5/Rebel_Ridge_film_poster.jpg"
 },
 {
  "id": "juror-2",
  "title": "Juror #2",
  "year": 2024,
  "director": "Clint Eastwood",
  "genres": [
   "Drama",
   "Thriller",
   "Crime"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "A juror realizes he may be the killer in the trial he's judging.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "juror",
   "trial",
   "guilt"
  ],
  "poster": ""
 },
 {
  "id": "woman-of-the-hour",
  "title": "Woman of the Hour",
  "year": 2023,
  "director": "Anna Kendrick",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A struggling actress meets Rodney Alcala on The Dating Game, mid-killing spree.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "datinggame",
   "alcala",
   "seventies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Woman_of_the_Hour_poster.jpg"
 },
 {
  "id": "searching",
  "title": "Searching",
  "year": 2018,
  "director": "Aneesh Chaganty",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 102,
  "rating": "PG-13",
  "description": "A father searches his missing daughter's laptop, told entirely on screens.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "laptop",
   "missing",
   "screens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/Searching.png"
 },
 {
  "id": "the-girl-on-the-train",
  "title": "The Girl on the Train",
  "year": 2016,
  "director": "Tate Taylor",
  "genres": [
   "Thriller",
   "Mystery",
   "Drama"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "An alcoholic commuter watches a couple from the train, then wakes up in their nightmare.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "train",
   "witness",
   "alcoholic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Girl_on_The_Train.jpg"
 },
 {
  "id": "basic-instinct",
  "title": "Basic Instinct",
  "year": 1992,
  "director": "Paul Verhoeven",
  "genres": [
   "Thriller",
   "Mystery",
   "Crime"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "A detective falls for the novelist whose book mirrors the ice-pick murder he's solving.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 3,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 7,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "novelist",
   "icepick",
   "verhoeven"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Basic_Instinct.png"
 },
 {
  "id": "fatal-attraction",
  "title": "Fatal Attraction",
  "year": 1987,
  "director": "Adrian Lyne",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A married lawyer's weekend affair refuses to end and turns his family into prey.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 4,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 5,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "affair",
   "obsession",
   "bunny"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Fatal_Attraction_poster.png"
 },
 {
  "id": "cape-fear",
  "title": "Cape Fear",
  "year": 1991,
  "director": "Martin Scorsese",
  "genres": [
   "Thriller",
   "Crime"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Ex-con Max Cady stalks the lawyer who buried evidence at his trial.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 4,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "excon",
   "lawyer",
   "cape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/Cape_fear_91.jpg"
 },
 {
  "id": "what-lies-beneath",
  "title": "What Lies Beneath",
  "year": 2000,
  "director": "Robert Zemeckis",
  "genres": [
   "Thriller",
   "Horror",
   "Mystery"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "A woman in a lake house hears voices from the water and suspects her perfect husband.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 5,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 4,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "lakehouse",
   "ghost",
   "husband"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/What_lies_beneath_%28poster%29.jpg"
 },
 {
  "id": "unfaithful",
  "title": "Unfaithful",
  "year": 2002,
  "director": "Adrian Lyne",
  "genres": [
   "Drama",
   "Thriller",
   "Romance"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "A suburban wife's affair with a book dealer spirals into her husband's quiet murder math.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 9,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "affair",
   "husband",
   "dealer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/75/Unfaithful_%282002_film%29.jpg"
 },
 {
  "id": "the-firm",
  "title": "The Firm",
  "year": 1993,
  "director": "Sydney Pollack",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 154,
  "rating": "R",
  "description": "A young lawyer's dream Memphis firm turns out to launder mob money.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lawyer",
   "mob",
   "memphis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Firm_ver2.jpg"
 },
 {
  "id": "the-hunt-for-red-october",
  "title": "The Hunt for Red October",
  "year": 1990,
  "director": "John McTiernan",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 135,
  "rating": "PG",
  "description": "A Soviet captain steers his invisible sub toward America; only one analyst believes why.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "submarine",
   "defect",
   "ryan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/The_Hunt_for_Red_October_movie_poster.png"
 },
 {
  "id": "patriot-games",
  "title": "Patriot Games",
  "year": 1992,
  "director": "Phillip Noyce",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "Jack Ryan foils an IRA attack in London and brings the war home to his family.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ryan",
   "ira",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/Patriot_Games_theatrical_poster.jpg"
 },
 {
  "id": "clear-and-present-danger",
  "title": "Clear and Present Danger",
  "year": 1994,
  "director": "Phillip Noyce",
  "genres": [
   "Action",
   "Thriller",
   "Drama"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Ryan uncovers a covert war on cartels run from the Oval Office itself.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ryan",
   "cartel",
   "president"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Clear_and_Present_Danger_film.jpg"
 },
 {
  "id": "strangers-on-a-train",
  "title": "Strangers on a Train",
  "year": 1951,
  "director": "Alfred Hitchcock",
  "genres": [
   "Thriller",
   "Crime"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "A charming stranger proposes they swap murders — then holds his new friend to it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 1,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "swap",
   "tennis",
   "murder"
  ],
  "poster": ""
 },
 {
  "id": "the-birds",
  "title": "The Birds",
  "year": 1963,
  "director": "Alfred Hitchcock",
  "genres": [
   "Horror",
   "Thriller"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "Bodega Bay's birds turn on humanity for no reason anyone can name.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 7,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "birds",
   "bodega",
   "hitchcock"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Birds_original_poster.jpg"
 },
 {
  "id": "the-conversation",
  "title": "The Conversation",
  "year": 1974,
  "director": "Francis Ford Coppola",
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ],
  "runtime": 113,
  "rating": "PG",
  "description": "A surveillance expert tapes a couple's chat and hears a murder being planned — or is it?",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "surveillance",
   "tape",
   "guilt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/Theconversation.jpg"
 },
 {
  "id": "marathon-man",
  "title": "Marathon Man",
  "year": 1976,
  "director": "John Schlesinger",
  "genres": [
   "Thriller"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A grad student is tortured by a Nazi dentist hunting diamonds: 'Is it safe?'",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "dentist",
   "diamonds",
   "nazi"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Marathon_man.jpg"
 },
 {
  "id": "blood-simple",
  "title": "Blood Simple",
  "year": 1984,
  "director": "Joel Coen",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A jealous bar owner hires a detective to kill his wife and her lover; nobody's plan survives.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 2,
   "funny": 1,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "texas",
   "detective",
   "noir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Blood-simple-movie-poster-md.jpg"
 },
 {
  "id": "a-simple-plan",
  "title": "A Simple Plan",
  "year": 1998,
  "director": "Sam Raimi",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "Three men find $4 million in a crashed plane and agree to a simple lie.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "money",
   "plane",
   "snow"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Simple_plan_poster.jpg"
 },
 {
  "id": "winter-s-bone",
  "title": "Winter's Bone",
  "year": 2010,
  "director": "Debra Granik",
  "genres": [
   "Drama",
   "Thriller",
   "Mystery"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A 17-year-old in the Ozarks must find her meth-cooking father or lose the family home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ozarks",
   "father",
   "home"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/Winters_bone_poster.jpg"
 },
 {
  "id": "blue-ruin",
  "title": "Blue Ruin",
  "year": 2013,
  "director": "Jeremy Saulnier",
  "genres": [
   "Thriller",
   "Crime",
   "Drama"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "A homeless drifter's amateur revenge unravels into a feud he cannot shoot straight.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 2,
   "funny": 1,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "revenge",
   "drifter",
   "feud"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/Blue_Ruin_film_poster.jpg"
 },
 {
  "id": "the-guest",
  "title": "The Guest",
  "year": 2014,
  "director": "Adam Wingard",
  "genres": [
   "Thriller",
   "Action",
   "Horror"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A polite soldier arrives claiming friendship with a dead son — and bodies follow.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 4,
   "funny": 3,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "soldier",
   "guest",
   "family"
  ],
  "poster": ""
 },
 {
  "id": "lucky-number-slevin",
  "title": "Lucky Number Slevin",
  "year": 2006,
  "director": "Paul McGuigan",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A case of mistaken identity drops Slevin between two crime bosses and a famous hitman.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "hitman",
   "bosses",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Lucky_Number_Slevin_Theater_Poster.JPG"
 },
 {
  "id": "brick",
  "title": "Brick",
  "year": 2005,
  "director": "Rian Johnson",
  "genres": [
   "Mystery",
   "Crime",
   "Drama"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A high-school loner plays noir detective to find what happened to his ex-girlfriend.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "noir",
   "highschool",
   "ex"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/Brickmovieposter.jpg"
 },
 {
  "id": "mulholland-drive",
  "title": "Mulholland Drive",
  "year": 2001,
  "director": "David Lynch",
  "genres": [
   "Mystery",
   "Thriller",
   "Drama"
  ],
  "runtime": 147,
  "rating": "R",
  "description": "An amnesiac and an actress search Hollywood for an identity that splits in two.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 3,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 4,
   "epic": 4,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "hollywood",
   "amnesia",
   "lynch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Mulholland.png"
 },
 {
  "id": "blue-velvet",
  "title": "Blue Velvet",
  "year": 1986,
  "director": "David Lynch",
  "genres": [
   "Mystery",
   "Thriller",
   "Crime"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A severed ear leads a college kid under his town's lawn into Frank Booth's world.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 4,
   "funny": 1,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "ear",
   "town",
   "lynch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Blue_Velvet_%281986%29.png"
 },
 {
  "id": "lost-highway",
  "title": "Lost Highway",
  "year": 1997,
  "director": "David Lynch",
  "genres": [
   "Mystery",
   "Thriller",
   "Horror"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "A jazzman accused of murdering his wife wakes up as someone else entirely.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 5,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "identity",
   "tapes",
   "lynch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Lost_Higway_%281997%29.png"
 },
 {
  "id": "mystic-river",
  "title": "Mystic River",
  "year": 2003,
  "director": "Clint Eastwood",
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "A murdered daughter reunites three childhood friends as suspect, cop and grieving father.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boston",
   "daughter",
   "friends"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/Mystic_River_poster.jpg"
 },
 {
  "id": "gone-baby-gone",
  "title": "Gone Baby Gone",
  "year": 2007,
  "director": "Ben Affleck",
  "genres": [
   "Crime",
   "Drama",
   "Mystery"
  ],
  "runtime": 114,
  "rating": "R",
  "description": "Two Boston PIs find a missing girl and a moral question with no clean answer.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boston",
   "missing",
   "pi"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Gone_Baby_Gone_poster.png"
 },
 {
  "id": "casino",
  "title": "Casino",
  "year": 1995,
  "director": "Martin Scorsese",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 178,
  "rating": "R",
  "description": "A gambling expert runs a mob casino in Vegas and watches greed eat it alive.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "vegas",
   "mob",
   "casino"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Casino_%28Martins_Scorsese_film%29.png"
 },
 {
  "id": "donnie-brasco",
  "title": "Donnie Brasco",
  "year": 1997,
  "director": "Mike Newell",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 127,
  "rating": "R",
  "description": "FBI agent Joe Pistone goes so deep undercover the mob becomes his real family.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "undercover",
   "mob",
   "lefty"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/Donnie_brasco_ver2.jpg"
 },
 {
  "id": "american-gangster",
  "title": "American Gangster",
  "year": 2007,
  "director": "Ridley Scott",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 157,
  "rating": "R",
  "description": "Frank Lucas builds a heroin empire; the one honest cop in New Jersey builds the case.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "heroin",
   "lucas",
   "cop"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/American_Gangster_poster.jpg"
 },
 {
  "id": "road-to-perdition",
  "title": "Road to Perdition",
  "year": 2002,
  "director": "Sam Mendes",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A hitman flees the mob with his son, who has just learned what his father is.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hitman",
   "son",
   "road"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Road_to_Perdition_Film_Poster.jpg"
 },
 {
  "id": "a-history-of-violence",
  "title": "A History of Violence",
  "year": 2005,
  "director": "David Cronenberg",
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "A diner owner's heroic stop of a robbery drags his buried identity to his doorstep.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "diner",
   "identity",
   "mob"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/History_of_violence.jpg"
 },
 {
  "id": "eastern-promises",
  "title": "Eastern Promises",
  "year": 2007,
  "director": "David Cronenberg",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "A midwife's diary pulls her into London's Russian mob and its tattooed driver.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "russian",
   "london",
   "tattoos"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Eastern_Promises_poster.png"
 },
 {
  "id": "gangs-of-new-york",
  "title": "Gangs of New York",
  "year": 2002,
  "director": "Martin Scorsese",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 167,
  "rating": "R",
  "description": "In 1862 Five Points, a son infiltrates the gang of the man who killed his father.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "1862",
   "fivepoints",
   "butcher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/Gangs_of_New_York_Poster.jpg"
 },
 {
  "id": "public-enemies",
  "title": "Public Enemies",
  "year": 2009,
  "director": "Michael Mann",
  "genres": [
   "Crime",
   "Drama",
   "Action"
  ],
  "runtime": 140,
  "rating": "R",
  "description": "Dillinger robs banks in minutes while the young FBI learns to hunt him.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "dillinger",
   "fbi",
   "banks"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/46/PEPOSTERsm.jpg"
 },
 {
  "id": "black-mass",
  "title": "Black Mass",
  "year": 2015,
  "director": "Scott Cooper",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "Whitey Bulger rules South Boston as an FBI informant no one dares touch.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bulger",
   "boston",
   "informant"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Black_Mass_%28film%29_poster.jpg"
 },
 {
  "id": "a-most-wanted-man",
  "title": "A Most Wanted Man",
  "year": 2014,
  "director": "Anton Corbijn",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Spies in Hamburg circle a Chechen asylum seeker while decency loses to tradecraft.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hamburg",
   "spy",
   "asylum"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/A_Most_Wanted_Man_Poster.jpg"
 },
 {
  "id": "the-constant-gardener",
  "title": "The Constant Gardener",
  "year": 2005,
  "director": "Fernando Meirelles",
  "genres": [
   "Drama",
   "Thriller",
   "Romance"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A diplomat investigates his activist wife's murder into a pharma conspiracy in Kenya.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 7,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "kenya",
   "pharma",
   "wife"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Constant_gardener.jpg"
 },
 {
  "id": "collateral",
  "title": "Collateral",
  "year": 2004,
  "director": "Michael Mann",
  "genres": [
   "Action",
   "Crime",
   "Thriller"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A cab driver spends one LA night ferrying a hitman between five targets.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "cab",
   "hitman",
   "la"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Collateral_%28Movie%29.jpg"
 },
 {
  "id": "thief",
  "title": "Thief",
  "year": 1981,
  "director": "Michael Mann",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A master safecracker takes one last mob score to buy his way free — and can't.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "safecracker",
   "chicago",
   "mann"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/65/Thief_1981.jpg"
 },
 {
  "id": "miller-s-crossing",
  "title": "Miller's Crossing",
  "year": 1990,
  "director": "Joel Coen",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "An advisor plays two mobs against each other and keeps his hat and his conscience barely.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "mobs",
   "advisor",
   "hat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/Millerscrossingposter.jpg"
 },
 {
  "id": "the-long-goodbye",
  "title": "The Long Goodbye",
  "year": 1973,
  "director": "Robert Altman",
  "genres": [
   "Crime",
   "Mystery",
   "Thriller"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Marlowe drifts through 1970s LA, the only honest man in a case that keeps rotting.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "marlowe",
   "la",
   "noir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/Longposter.jpg"
 },
 {
  "id": "fair-play",
  "title": "Fair Play",
  "year": 2023,
  "director": "Chloe Domont",
  "genres": [
   "Thriller",
   "Drama",
   "Romance"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "Secretly engaged analysts at a hedge fund are split when only one gets promoted.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 9,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hedgefund",
   "promotion",
   "engaged"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Fair_play_2023poster.png"
 },
 {
  "id": "a-house-of-dynamite",
  "title": "A House of Dynamite",
  "year": 2025,
  "director": "Kathryn Bigelow",
  "genres": [
   "Thriller",
   "Drama"
  ],
  "runtime": 112,
  "rating": "PG-13",
  "description": "One unidentified missile gives Washington eighteen minutes of cascading decisions.",
  "vector": {
   "adrenaline": 6,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "missile",
   "washington",
   "minutes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/A_House_of_Dynamite.jpg"
 },
 {
  "id": "the-order",
  "title": "The Order",
  "year": 2024,
  "director": "Justin Kurzel",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "An FBI agent tracks a white-supremacist gang robbing its way toward revolution.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "fbi",
   "gang",
   "robberies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Order_2024_film_poster.jpg"
 },
 {
  "id": "anatomy-of-a-fall",
  "title": "Anatomy of a Fall",
  "year": 2023,
  "director": "Justine Triet",
  "genres": [
   "Drama",
   "Thriller",
   "Crime"
  ],
  "runtime": 151,
  "rating": "R",
  "description": "A writer is tried for her husband's fall; their blind son is the only witness.",
  "vector": {
   "adrenaline": 3,
   "brainy": 9,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "trial",
   "fall",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Anatomy_of_a_Fall_%282023%29_film_poster.jpg"
 },
 {
  "id": "philadelphia",
  "title": "Philadelphia",
  "year": 1993,
  "director": "Jonathan Demme",
  "genres": [
   "Drama"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "A lawyer fired for having AIDS hires the only attorney who will fight his case.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "aids",
   "lawyer",
   "trial"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Philadelphia_imp.jpg"
 },
 {
  "id": "a-few-good-men",
  "title": "A Few Good Men",
  "year": 1992,
  "director": "Rob Reiner",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 138,
  "rating": "R",
  "description": "A Navy lawyer must prove a fatal hazing was ordered — and make a colonel admit it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "courtroom",
   "navy",
   "truth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/A_Few_Good_Men_poster.jpg"
 },
 {
  "id": "cast-away",
  "title": "Cast Away",
  "year": 2000,
  "director": "Robert Zemeckis",
  "genres": [
   "Drama",
   "Adventure"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "A FedEx engineer survives four years alone on an island with a volleyball named Wilson.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "island",
   "wilson",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/Cast_away_film_poster.jpg"
 },
 {
  "id": "the-terminal",
  "title": "The Terminal",
  "year": 2004,
  "director": "Steven Spielberg",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "A man whose country ceases to exist lives in JFK airport for months, making it home.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 5,
   "epic": 3,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "airport",
   "stateless",
   "home"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Movie_poster_the_terminal.jpg"
 },
 {
  "id": "the-post",
  "title": "The Post",
  "year": 2017,
  "director": "Steven Spielberg",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "Kay Graham risks her newspaper to publish the Pentagon Papers in 1971.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "newspaper",
   "pentagon",
   "press"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Post_%28film%29.png"
 },
 {
  "id": "spotlight",
  "title": "Spotlight",
  "year": 2015,
  "director": "Tom McCarthy",
  "genres": [
   "Drama"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Boston Globe reporters expose a church cover-up that reaches around the world.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "newspaper",
   "church",
   "boston"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Spotlight_%28film%29_poster.jpg"
 },
 {
  "id": "all-the-president-s-men",
  "title": "All the President's Men",
  "year": 1976,
  "director": "Alan J. Pakula",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 138,
  "rating": "PG",
  "description": "Woodward and Bernstein follow a burglary's money all the way to the White House.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "watergate",
   "reporters",
   "deepthroat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/92/All_the_president%27s_men.jpg"
 },
 {
  "id": "the-artist",
  "title": "The Artist",
  "year": 2011,
  "director": "Michel Hazanavicius",
  "genres": [
   "Drama",
   "Romance",
   "Comedy"
  ],
  "runtime": 100,
  "rating": "PG-13",
  "description": "A silent-film star fades as talkies arrive, while the ingenue he helped rises.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 6,
   "epic": 4,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "silent",
   "talkies",
   "star"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Artist_Poster.jpg"
 },
 {
  "id": "12-years-a-slave",
  "title": "12 Years a Slave",
  "year": 2013,
  "director": "Steve McQueen",
  "genres": [
   "Drama"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "Free man Solomon Northup is kidnapped into Louisiana slavery for twelve years.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "slavery",
   "kidnapped",
   "solomon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/12_Years_a_Slave_film_poster.jpg"
 },
 {
  "id": "birdman",
  "title": "Birdman",
  "year": 2014,
  "director": "Alejandro G. Iñárritu",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A washed-up superhero actor stages a Broadway play in one unbroken fever of a shot.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "broadway",
   "actor",
   "ego"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Birdman_poster.png"
 },
 {
  "id": "la-la-land",
  "title": "La La Land",
  "year": 2016,
  "director": "Damien Chazelle",
  "genres": [
   "Romance",
   "Drama",
   "Musical"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "An actress and a jazz musician chase LA dreams that keep pulling them apart.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 9,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "jazz",
   "dreams",
   "la"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
 },
 {
  "id": "manchester-by-the-sea",
  "title": "Manchester by the Sea",
  "year": 2016,
  "director": "Kenneth Lonergan",
  "genres": [
   "Drama"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "A janitor returns to his hometown as guardian of the nephew he can't bear to face.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "grief",
   "guardian",
   "sea"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/Manchester_by_the_Sea.jpg"
 },
 {
  "id": "lion",
  "title": "Lion",
  "year": 2016,
  "director": "Garth Davis",
  "genres": [
   "Drama"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "Lost at five in India, adopted in Tasmania, Saroo searches Google Earth for home.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 9,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "india",
   "adopted",
   "search"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/Lion_%282016_film%29.png"
 },
 {
  "id": "fences",
  "title": "Fences",
  "year": 2016,
  "director": "Denzel Washington",
  "genres": [
   "Drama"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "A Pittsburgh garbageman builds fences around his family and his own lost chances.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "pittsburgh",
   "father",
   "baseball"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Fences_%28film%29.png"
 },
 {
  "id": "i-tonya",
  "title": "I, Tonya",
  "year": 2017,
  "director": "Craig Gillespie",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Tonya Harding's rise and the attack that defined her, told by everyone who lies about it.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "skating",
   "attack",
   "mockumentary"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/I%2C_Tonya_%282017_film%29.png"
 },
 {
  "id": "three-billboards-outside-ebbing-missouri",
  "title": "Three Billboards Outside Ebbing, Missouri",
  "year": 2017,
  "director": "Martin McDonagh",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A grieving mother rents billboards to shame the police who never caught her daughter's killer.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "billboards",
   "mother",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/Three_Billboards_Outside_Ebbing%2C_Missouri_poster.png"
 },
 {
  "id": "darkest-hour",
  "title": "Darkest Hour",
  "year": 2017,
  "director": "Joe Wright",
  "genres": [
   "Drama",
   "War"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "Churchill's first month: Dunkirk collapsing, his own party circling, speeches to forge.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "churchill",
   "dunkirk",
   "speeches"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Darkest_Hour_poster.png"
 },
 {
  "id": "phantom-thread",
  "title": "Phantom Thread",
  "year": 2017,
  "director": "Paul Thomas Anderson",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "A couturier's controlled life unravels around the waitress who refuses to be dressed and discarded.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 7,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "couture",
   "muse",
   "control"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Phantom_Thread.png"
 },
 {
  "id": "a-star-is-born",
  "title": "A Star Is Born",
  "year": 2018,
  "director": "Bradley Cooper",
  "genres": [
   "Drama",
   "Romance",
   "Musical"
  ],
  "runtime": 136,
  "rating": "R",
  "description": "A fading rocker launches the singer he loves as his own light burns out.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 7,
   "dark": 7,
   "romantic": 9,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "singer",
   "fame",
   "addiction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/A_Star_is_Born.png"
 },
 {
  "id": "bohemian-rhapsody",
  "title": "Bohemian Rhapsody",
  "year": 2018,
  "director": "Bryan Singer",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "Freddie Mercury and Queen march from pub gigs to Live Aid immortality.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "queen",
   "freddie",
   "liveaid"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png"
 },
 {
  "id": "green-book",
  "title": "Green Book",
  "year": 2018,
  "director": "Peter Farrelly",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "A Bronx bouncer drives pianist Don Shirley through the segregated South of 1962.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 2,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "road",
   "pianist",
   "south"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5b/Green_Book_%282018_poster%29.png"
 },
 {
  "id": "roma",
  "title": "Roma",
  "year": 2018,
  "director": "Alfonso Cuarón",
  "genres": [
   "Drama"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "A live-in maid holds a Mexico City family together as her own life quietly breaks.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "maid",
   "mexico",
   "1970s"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/85/Roma_theatrical_poster.png"
 },
 {
  "id": "the-favourite",
  "title": "The Favourite",
  "year": 2018,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Two cousins duel with gossip and poison for Queen Anne's favor and the kingdom's ear.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 5,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "queen",
   "court",
   "duel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Favourite.png"
 },
 {
  "id": "vice",
  "title": "Vice",
  "year": 2018,
  "director": "Adam McKay",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "Dick Cheney's quiet climb from Wyoming DUI to the most powerful VP in history.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 5,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "cheney",
   "power",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Vice_%282018_film_poster%29.png"
 },
 {
  "id": "blackkklansman",
  "title": "BlacKkKlansman",
  "year": 2018,
  "director": "Spike Lee",
  "genres": [
   "Drama",
   "Crime",
   "Comedy"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "A Black detective infiltrates the KKK by phone while his Jewish partner attends in person.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "kkk",
   "infiltrate",
   "phone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/BlacKkKlansman.png"
 },
 {
  "id": "if-beale-street-could-talk",
  "title": "If Beale Street Could Talk",
  "year": 2018,
  "director": "Barry Jenkins",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Two Harlem families fight to clear a young sculptor of a crime he didn't commit.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "harlem",
   "love",
   "trial"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/If_Beale_Street_Could_Talk_film.png"
 },
 {
  "id": "marriage-story",
  "title": "Marriage Story",
  "year": 2019,
  "director": "Noah Baumbach",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "A director and an actress divorce across two coasts, lawyers sharpening every kindness.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 8,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "divorce",
   "lawyers",
   "custody"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/MarriageStoryPoster.png"
 },
 {
  "id": "once-upon-a-time-in-hollywood",
  "title": "Once Upon a Time in Hollywood",
  "year": 2019,
  "director": "Quentin Tarantino",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 161,
  "rating": "R",
  "description": "A fading TV cowboy and his stuntman drift through 1969 LA as the Manson shadow grows.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "1969",
   "stuntman",
   "manson"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png"
 },
 {
  "id": "hacksaw-ridge",
  "title": "Hacksaw Ridge",
  "year": 2016,
  "director": "Mel Gibson",
  "genres": [
   "War",
   "Drama",
   "Action"
  ],
  "runtime": 139,
  "rating": "R",
  "description": "Conscientious objector Desmond Doss saves 75 men at Okinawa without firing a shot.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "medic",
   "okinawa",
   "faith"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Hacksaw_Ridge_poster.png"
 },
 {
  "id": "the-peanut-butter-falcon",
  "title": "The Peanut Butter Falcon",
  "year": 2019,
  "director": "Tyler Nilson",
  "genres": [
   "Adventure",
   "Comedy",
   "Drama"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A young man with Down syndrome escapes care to wrestle, rafting south with a drifter.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "wrestling",
   "raft",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/The_Peanut_Butter_Falcon_poster.jpeg"
 },
 {
  "id": "just-mercy",
  "title": "Just Mercy",
  "year": 2019,
  "director": "Destin Daniel Cretton",
  "genres": [
   "Drama"
  ],
  "runtime": 137,
  "rating": "PG-13",
  "description": "Lawyer Bryan Stevenson fights to free Walter McMillian from Alabama's death row.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "deathrow",
   "lawyer",
   "alabama"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/Just_Mercy_Official_Poster.jpg"
 },
 {
  "id": "a-beautiful-day-in-the-neighborhood",
  "title": "A Beautiful Day in the Neighborhood",
  "year": 2019,
  "director": "Marielle Heller",
  "genres": [
   "Drama"
  ],
  "runtime": 109,
  "rating": "PG",
  "description": "A cynical journalist is assigned to profile Mister Rogers and is quietly disarmed.",
  "vector": {
   "adrenaline": 1,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "rogers",
   "journalist",
   "kindness"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/A_Beautiful_Day_in_the_Neighborhood.jpg"
 },
 {
  "id": "the-lighthouse",
  "title": "The Lighthouse",
  "year": 2019,
  "director": "Robert Eggers",
  "genres": [
   "Horror",
   "Drama"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Two lighthouse keepers marooned by a storm drink, rave and descend in black and white.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 5,
   "funny": 2,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 5
  },
  "keywords": [
   "lighthouse",
   "storm",
   "madness"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Lighthouse.jpeg"
 },
 {
  "id": "nomadland",
  "title": "Nomadland",
  "year": 2020,
  "director": "Chloé Zhao",
  "genres": [
   "Drama"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A widow joins America's van-dwelling nomads, working warehouses and grieving at her own pace.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "van",
   "nomads",
   "amazon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a5/Nomadland_poster.jpeg"
 },
 {
  "id": "minari",
  "title": "Minari",
  "year": 2020,
  "director": "Lee Isaac Chung",
  "genres": [
   "Drama"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "A Korean family farms in 1980s Arkansas; grandma plants minari by the creek.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "farm",
   "arkansas",
   "grandma"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Minari_%28film%29.png"
 },
 {
  "id": "sound-of-metal",
  "title": "Sound of Metal",
  "year": 2019,
  "director": "Darius Marder",
  "genres": [
   "Drama"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A metal drummer loses his hearing and rages against the quiet he's offered.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "drummer",
   "deaf",
   "quiet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/Sound_of_Metal_poster.jpeg"
 },
 {
  "id": "the-father",
  "title": "The Father",
  "year": 2020,
  "director": "Florian Zeller",
  "genres": [
   "Drama"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "Dementia from the inside: an old man's flat, daughter and reality keep rearranging.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "dementia",
   "flat",
   "daughter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/The_Father_2020_poster.jpg"
 },
 {
  "id": "promising-young-woman",
  "title": "Promising Young Woman",
  "year": 2020,
  "director": "Emerald Fennell",
  "genres": [
   "Thriller",
   "Drama",
   "Crime"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "Cassie spends her nights teaching 'nice guys' a lesson while grief plans its finale.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "revenge",
   "niceguys",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/Promising_Young_Woman_poster.jpg"
 },
 {
  "id": "the-trial-of-the-chicago-7",
  "title": "The Trial of the Chicago 7",
  "year": 2020,
  "director": "Aaron Sorkin",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "The 1968 convention protest trial becomes a circus of contempt citations and causes.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "trial",
   "1968",
   "protest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/TrialChicago7poster.jpeg"
 },
 {
  "id": "judas-and-the-black-messiah",
  "title": "Judas and the Black Messiah",
  "year": 2021,
  "director": "Shaka King",
  "genres": [
   "Drama"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "An FBI informant infiltrates Fred Hampton's Panthers and is paid to betray him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "panthers",
   "informant",
   "hampton"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/Judas_and_the_Black_Messiah_poster.png"
 },
 {
  "id": "belfast",
  "title": "Belfast",
  "year": 2021,
  "director": "Kenneth Branagh",
  "genres": [
   "Drama"
  ],
  "runtime": 98,
  "rating": "PG-13",
  "description": "A boy's Belfast childhood glows even as the Troubles close his street.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "belfast",
   "childhood",
   "troubles"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Belfast_poster.jpg"
 },
 {
  "id": "the-power-of-the-dog",
  "title": "The Power of the Dog",
  "year": 2021,
  "director": "Jane Campion",
  "genres": [
   "Drama",
   "Western"
  ],
  "runtime": 126,
  "rating": "R",
  "description": "A cruel rancher torments his brother's wife until her quiet son finds his weakness.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "rancher",
   "montana",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6d/The_Power_of_the_Dog_%28film%29.jpg"
 },
 {
  "id": "king-richard",
  "title": "King Richard",
  "year": 2021,
  "director": "Reinaldo Marcus Green",
  "genres": [
   "Drama"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "Richard Williams' 78-page plan turns Venus and Serena into tennis royalty.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "tennis",
   "plan",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/King_Richard_poster.jpeg"
 },
 {
  "id": "licorice-pizza",
  "title": "Licorice Pizza",
  "year": 2021,
  "director": "Paul Thomas Anderson",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 133,
  "rating": "R",
  "description": "A teen actor and a twenty-something assistant chase schemes and each other in 1973 LA.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "1973",
   "waterbeds",
   "crush"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/LicoricePizzaPoster.jpeg"
 },
 {
  "id": "drive-my-car",
  "title": "Drive My Car",
  "year": 2021,
  "director": "Ryusuke Hamaguchi",
  "genres": [
   "Drama"
  ],
  "runtime": 179,
  "rating": "NR",
  "description": "A widowed director and his silent driver rehearse Chekhov and grief across Hiroshima.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "chekhov",
   "driver",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/Drive_My_Car_movie_poster.jpeg"
 },
 {
  "id": "the-worst-person-in-the-world",
  "title": "The Worst Person in the World",
  "year": 2021,
  "director": "Joachim Trier",
  "genres": [
   "Romance",
   "Drama",
   "Comedy"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Julie turns thirty in Oslo, changing careers and men while time politely runs out.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "oslo",
   "thirty",
   "chapters"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/54/The_Worst_Person_in_the_World_%28film%29.jpg"
 },
 {
  "id": "spencer",
  "title": "Spencer",
  "year": 2021,
  "director": "Pablo Larraín",
  "genres": [
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "Diana spends one Sandringham Christmas deciding to leave the royal machine.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "diana",
   "christmas",
   "royal"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Spencer_%28film%29.png"
 },
 {
  "id": "the-lost-daughter",
  "title": "The Lost Daughter",
  "year": 2021,
  "director": "Maggie Gyllenhaal",
  "genres": [
   "Drama"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "A professor on a Greek holiday fixates on a young mother and her lost doll.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "greece",
   "doll",
   "motherhood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Lost_Daughter_%28film%29.jpg"
 },
 {
  "id": "tick-tick-boom",
  "title": "tick, tick... BOOM!",
  "year": 2021,
  "director": "Lin-Manuel Miranda",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "Jonathan Larson races his thirtieth birthday to finish the musical that becomes Rent's prelude.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "larson",
   "rent",
   "thirty"
  ],
  "poster": ""
 },
 {
  "id": "the-tragedy-of-macbeth",
  "title": "The Tragedy of Macbeth",
  "year": 2021,
  "director": "Joel Coen",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "Shakespeare's ambition in stark black and white: three witches, one dagger, endless fog.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "shakespeare",
   "witches",
   "dagger"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/69/The_Tragedy_of_Macbeth_2021_poster.jpg"
 },
 {
  "id": "c-mon-c-mon",
  "title": "C'mon C'mon",
  "year": 2021,
  "director": "Mike Mills",
  "genres": [
   "Drama"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "A radio journalist tours America interviewing kids while babysitting his luminous nephew.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "nephew",
   "interviews",
   "radio"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/C%27mon_C%27mon.jpg"
 },
 {
  "id": "the-green-knight",
  "title": "The Green Knight",
  "year": 2021,
  "director": "David Lowery",
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Gawain rides to keep a Christmas beheading bargain and discovers what honor costs.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "gawain",
   "quest",
   "christmas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/The_Green_Knight_poster.jpeg"
 },
 {
  "id": "pig",
  "title": "Pig",
  "year": 2021,
  "director": "Michael Sarnosky",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A truffle hunter whose pig is stolen walks back into the Portland he abandoned.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "truffle",
   "pig",
   "portland"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Pig_poster.jpeg"
 },
 {
  "id": "the-banshees-of-inisherin",
  "title": "The Banshees of Inisherin",
  "year": 2022,
  "director": "Martin McDonagh",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 114,
  "rating": "R",
  "description": "Colm simply doesn't want to be friends anymore; Pádraic can't accept the silence.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 5,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "ireland",
   "friendship",
   "fingers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/The_Banshees_of_Inisherin.jpg"
 },
 {
  "id": "tar",
  "title": "Tár",
  "year": 2022,
  "director": "Todd Field",
  "genres": [
   "Drama"
  ],
  "runtime": 158,
  "rating": "R",
  "description": "Conductor Lydia Tár, at the peak of power, hears the first cracks in her own myth.",
  "vector": {
   "adrenaline": 2,
   "brainy": 9,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "conductor",
   "berlin",
   "cancel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/T%C3%A1r_poster.jpg"
 },
 {
  "id": "the-fabelmans",
  "title": "The Fabelmans",
  "year": 2022,
  "director": "Steven Spielberg",
  "genres": [
   "Drama"
  ],
  "runtime": 151,
  "rating": "PG-13",
  "description": "Young Sammy Fabelman learns cameras reveal what families hide.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 3,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "spielberg",
   "camera",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Fabelmansposter.jpeg"
 },
 {
  "id": "women-talking",
  "title": "Women Talking",
  "year": 2022,
  "director": "Sarah Polley",
  "genres": [
   "Drama"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Mennonite women who were assaulted in their sleep vote: stay, fight, or leave.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "vote",
   "colony",
   "women"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f4/Women_Talking_poster.jpeg"
 },
 {
  "id": "the-whale",
  "title": "The Whale",
  "year": 2022,
  "director": "Darren Aronofsky",
  "genres": [
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A reclusive teacher eating himself to death tries to reach his daughter before the end.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 2,
   "epic": 2,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "teacher",
   "daughter",
   "essay"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/TheWhalePoster.jpg"
 },
 {
  "id": "elvis",
  "title": "Elvis",
  "year": 2022,
  "director": "Baz Luhrmann",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 159,
  "rating": "PG-13",
  "description": "Elvis Presley's rise and captivity, narrated by the manager who caged him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "elvis",
   "manager",
   "vegas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/79/Elvis_2022_poster.jpg"
 },
 {
  "id": "babylon",
  "title": "Babylon",
  "year": 2022,
  "director": "Damien Chazelle",
  "genres": [
   "Drama",
   "Comedy"
  ],
  "runtime": 189,
  "rating": "R",
  "description": "Silent-era Hollywood devours its dreamers in a debauched sprint toward sound.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "hollywood",
   "silent",
   "debauchery"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Babylon_2022_poster.jpg"
 },
 {
  "id": "aftersun",
  "title": "Aftersun",
  "year": 2022,
  "director": "Charlotte Wells",
  "genres": [
   "Drama"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A daughter replays a Turkish holiday with her young father, seeing now what she missed.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "holiday",
   "father",
   "memory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/11/Aftersun.jpg"
 },
 {
  "id": "all-quiet-on-the-western-front",
  "title": "All Quiet on the Western Front",
  "year": 2022,
  "director": "Edward Berger",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 147,
  "rating": "R",
  "description": "Paul volunteers for glory and is fed into the trenches' arithmetic of mud and orders.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wwi",
   "trenches",
   "germany"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/All_quiet_on_the_western_front_%282022_film%29.jpg"
 },
 {
  "id": "she-said",
  "title": "She Said",
  "year": 2022,
  "director": "Maria Schrader",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "Two Times reporters coax Weinstein's victims to speak on the record.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "reporters",
   "weinstein",
   "record"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/She_said_film_poster.jpg"
 },
 {
  "id": "till",
  "title": "Till",
  "year": 2022,
  "director": "Chinonye Chukwu",
  "genres": [
   "Drama"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Mamie Till turns her son Emmett's murder into a movement the world must look at.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "emmett",
   "mother",
   "movement"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/Till_%28film%29.jpg"
 },
 {
  "id": "causeway",
  "title": "Causeway",
  "year": 2022,
  "director": "Lila Neugebauer",
  "genres": [
   "Drama"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A soldier with a brain injury and a pool mechanic heal slowly in New Orleans.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "soldier",
   "pool",
   "friendship"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Causeway_%28film%29.jpg"
 },
 {
  "id": "barbie",
  "title": "Barbie",
  "year": 2023,
  "director": "Greta Gerwig",
  "genres": [
   "Comedy",
   "Adventure",
   "Fantasy"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "Barbie leaves Barbieland for the real world and finds being human hurts and matters.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 4,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "barbie",
   "realworld",
   "ken"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
 },
 {
  "id": "killers-of-the-flower-moon",
  "title": "Killers of the Flower Moon",
  "year": 2023,
  "director": "Martin Scorsese",
  "genres": [
   "Crime",
   "Drama",
   "Western"
  ],
  "runtime": 206,
  "rating": "R",
  "description": "Osage oil wealth draws a slow genocide of marriage, poison and polite smiles.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "osage",
   "oil",
   "murders"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Killers_of_the_Flower_Moon_film_poster.jpg"
 },
 {
  "id": "poor-things",
  "title": "Poor Things",
  "year": 2023,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Comedy",
   "Romance",
   "Sci-Fi"
  ],
  "runtime": 141,
  "rating": "R",
  "description": "Bella Baxter, reanimated with an infant's brain, eats the world in wonder and appetite.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 7,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 7,
   "epic": 6,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "reanimated",
   "journey",
   "bella"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Poor_Things_poster.jpg"
 },
 {
  "id": "the-zone-of-interest",
  "title": "The Zone of Interest",
  "year": 2023,
  "director": "Jonathan Glazer",
  "genres": [
   "Drama",
   "War"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "The Höss family tends their garden on the other side of Auschwitz's wall.",
  "vector": {
   "adrenaline": 1,
   "brainy": 8,
   "scary": 3,
   "funny": 0,
   "heartwarming": 0,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "auschwitz",
   "garden",
   "banality"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/The_Zone_of_Interest_film_poster.jpg"
 },
 {
  "id": "american-fiction",
  "title": "American Fiction",
  "year": 2023,
  "director": "Cord Jefferson",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A frustrated novelist writes a fake 'Black' book as a joke; America takes it seriously.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "novelist",
   "satire",
   "book"
  ],
  "poster": ""
 },
 {
  "id": "maestro",
  "title": "Maestro",
  "year": 2023,
  "director": "Bradley Cooper",
  "genres": [
   "Drama",
   "Romance",
   "Musical"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "Leonard Bernstein conducts orchestras and a marriage that forgives almost everything.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 7,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bernstein",
   "marriage",
   "conducting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Maestro_poster.png"
 },
 {
  "id": "may-december",
  "title": "May December",
  "year": 2023,
  "director": "Todd Haynes",
  "genres": [
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "An actress shadows the woman whose tabloid scandal she'll play, and the past reopens.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "actress",
   "scandal",
   "shadow"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/May_December_poster.jpeg"
 },
 {
  "id": "society-of-the-snow",
  "title": "Society of the Snow",
  "year": 2023,
  "director": "J.A. Bayona",
  "genres": [
   "Drama",
   "Adventure",
   "Thriller"
  ],
  "runtime": 144,
  "rating": "R",
  "description": "Uruguayan rugby players survive 72 days in the Andes by unthinkable means.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 3,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "andes",
   "rugby",
   "survival"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Society_of_the_Snow_poster.jpg"
 },
 {
  "id": "the-iron-claw",
  "title": "The Iron Claw",
  "year": 2023,
  "director": "Sean Durkin",
  "genres": [
   "Drama"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "The Von Erich brothers chase their father's wrestling glory and its curse.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 9,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wrestling",
   "brothers",
   "curse"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3a/Iron_claw_film_posterjpg.jpg"
 },
 {
  "id": "saltburn",
  "title": "Saltburn",
  "year": 2023,
  "director": "Emerald Fennell",
  "genres": [
   "Drama",
   "Thriller",
   "Comedy"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "A scholarship student is invited to a rich friend's estate for a summer of wanting.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 5,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "estate",
   "oxford",
   "wanting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Saltburn_Film_Poster.jpg"
 },
 {
  "id": "priscilla",
  "title": "Priscilla",
  "year": 2023,
  "director": "Sofia Coppola",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "Priscilla Presley's gilded cage at Graceland, from schoolgirl crush to walking out.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 8,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "graceland",
   "elvis",
   "cage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/28/Priscilla_poster.jpeg"
 },
 {
  "id": "the-color-purple",
  "title": "The Color Purple",
  "year": 2023,
  "director": "Blitz Bazawule",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Celie's life of endurance blooms into sisterhood and song across forty years.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 6,
   "romantic": 5,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "celie",
   "sisters",
   "song"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/Color_Purple_2023_poster.jpg"
 },
 {
  "id": "ferrari",
  "title": "Ferrari",
  "year": 2023,
  "director": "Michael Mann",
  "genres": [
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Enzo Ferrari bets his company, marriage and drivers on the 1957 Mille Miglia.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "enzo",
   "racing",
   "1957"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Ferrari_film_poster.jpg"
 },
 {
  "id": "napoleon",
  "title": "Napoleon",
  "year": 2023,
  "director": "Ridley Scott",
  "genres": [
   "Drama",
   "War",
   "Action"
  ],
  "runtime": 158,
  "rating": "R",
  "description": "Napoleon's rise and fall told through battles and his consuming marriage to Josephine.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 6,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "napoleon",
   "josephine",
   "battles"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Napoleon_Film_poster.jpg"
 },
 {
  "id": "origin",
  "title": "Origin",
  "year": 2023,
  "director": "Ava DuVernay",
  "genres": [
   "Drama"
  ],
  "runtime": 141,
  "rating": "PG-13",
  "description": "Isabel Wilkerson travels the world connecting grief to the architecture of caste.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "caste",
   "wilkerson",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Origin_2023_film_poster.jpg"
 },
 {
  "id": "anora",
  "title": "Anora",
  "year": 2024,
  "director": "Sean Baker",
  "genres": [
   "Drama",
   "Romance",
   "Comedy"
  ],
  "runtime": 139,
  "rating": "R",
  "description": "A Brooklyn sex worker marries a Russian oligarch's son; his parents send the cleaners.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 7,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "brooklyn",
   "oligarch",
   "marriage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/Anora_%282024_film%29_poster.jpg"
 },
 {
  "id": "the-brutalist",
  "title": "The Brutalist",
  "year": 2024,
  "director": "Brady Corbet",
  "genres": [
   "Drama"
  ],
  "runtime": 215,
  "rating": "R",
  "description": "Architect László Tóth escapes the Holocaust to build monuments for a patron who owns him.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 3,
   "epic": 9,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "architect",
   "immigrant",
   "patron"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/TheBrutalist2024.png"
 },
 {
  "id": "conclave",
  "title": "Conclave",
  "year": 2024,
  "director": "Edward Berger",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 120,
  "rating": "PG",
  "description": "Cardinal Lawrence runs a papal election where every whisper is a weapon.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "pope",
   "election",
   "whispers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Conclave_film_poster.jpg"
 },
 {
  "id": "emilia-perez",
  "title": "Emilia Pérez",
  "year": 2024,
  "director": "Jacques Audiard",
  "genres": [
   "Drama",
   "Musical",
   "Crime"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "A cartel boss hires a lawyer to help her vanish into the woman she always was — in song.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 6,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "cartel",
   "musical",
   "lawyer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Emilia_P%C3%A9rez_film_poster.png"
 },
 {
  "id": "a-complete-unknown",
  "title": "A Complete Unknown",
  "year": 2024,
  "director": "James Mangold",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 141,
  "rating": "R",
  "description": "Bob Dylan arrives in New York with a guitar and leaves folk music electrified.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 4,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "dylan",
   "folk",
   "electric"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/A_Complete_Unknown_poster.jpg"
 },
 {
  "id": "nickel-boys",
  "title": "Nickel Boys",
  "year": 2024,
  "director": "RaMell Ross",
  "genres": [
   "Drama"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "Two boys endure a Florida reform school shot entirely through their own eyes.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "reformschool",
   "florida",
   "eyes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/Nickel_Boys_film_poster.jpg"
 },
 {
  "id": "i-m-still-here",
  "title": "I'm Still Here",
  "year": 2024,
  "director": "Walter Salles",
  "genres": [
   "Drama"
  ],
  "runtime": 137,
  "rating": "PG-13",
  "description": "Eunice Paiva holds her family together after Brazil's dictatorship takes her husband.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 8,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "brazil",
   "dictatorship",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/I%27m_Still_Here_%282024_film%29_poster.jpg"
 },
 {
  "id": "a-real-pain",
  "title": "A Real Pain",
  "year": 2024,
  "director": "Jesse Eisenberg",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "Mismatched cousins tour Poland's Holocaust sites arguing about whose pain counts.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "cousins",
   "poland",
   "tour"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/A_Real_Pain_%282024_film%29_poster.jpg"
 },
 {
  "id": "sing-sing",
  "title": "Sing Sing",
  "year": 2023,
  "director": "Greg Kwedar",
  "genres": [
   "Drama"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "Prisoners at Sing Sing stage plays and find the men they were before the walls.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 8,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "prison",
   "theatre",
   "plays"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/Sing_Sing_poster.jpeg"
 },
 {
  "id": "september-5",
  "title": "September 5",
  "year": 2024,
  "director": "Tim Fehlbaum",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "ABC's sports crew becomes a news crew as Munich's hostage crisis unfolds live in 1972.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "munich",
   "abc",
   "live"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ce/September_5_Tim_Fehlbaum.jpg"
 },
 {
  "id": "the-apprentice",
  "title": "The Apprentice",
  "year": 2024,
  "director": "Ali Abbasi",
  "genres": [
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Roy Cohn teaches young Donald Trump his three rules: attack, deny, never admit defeat.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "trump",
   "cohn",
   "rules"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/The_Apprentice_%282024_film%29_poster.jpg"
 },
 {
  "id": "maria",
  "title": "Maria",
  "year": 2024,
  "director": "Pablo Larraín",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "Maria Callas spends her last Paris week rehearsing a voice that has left her.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "callas",
   "paris",
   "voice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/Maria_%282024_film%29.jpeg"
 },
 {
  "id": "babygirl",
  "title": "Babygirl",
  "year": 2024,
  "director": "Halina Reijn",
  "genres": [
   "Drama",
   "Thriller",
   "Romance"
  ],
  "runtime": 114,
  "rating": "R",
  "description": "A CEO risks her company and family for an affair with an intern who reads her perfectly.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 9,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "ceo",
   "intern",
   "affair"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Babygirl_%28film_poster%29.png"
 },
 {
  "id": "challengers",
  "title": "Challengers",
  "year": 2024,
  "director": "Luca Guadagnino",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "A tennis power triangle plays its final set across thirteen years of desire and sabotage.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 9,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "tennis",
   "triangle",
   "desire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b4/Challengers_2024_poster.jpeg"
 },
 {
  "id": "saturday-night",
  "title": "Saturday Night",
  "year": 2024,
  "director": "Jason Reitman",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Ninety chaotic minutes before the first Saturday Night Live broadcast in 1975.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "snl",
   "1975",
   "chaos"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Saturday_Night_%282024_film%29_poster.png"
 },
 {
  "id": "his-three-daughters",
  "title": "His Three Daughters",
  "year": 2023,
  "director": "Azazel Jacobs",
  "genres": [
   "Drama"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "Three estranged sisters keep vigil in their father's apartment as he dies.",
  "vector": {
   "adrenaline": 1,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 1,
   "epic": 2,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "sisters",
   "vigil",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/His_Three_Daughters_film_poster.png"
 },
 {
  "id": "f1",
  "title": "F1",
  "year": 2025,
  "director": "Joseph Kosinski",
  "genres": [
   "Drama",
   "Action"
  ],
  "runtime": 155,
  "rating": "PG-13",
  "description": "A washed-out driver returns to F1 to save a failing team and mentor its hotshot rookie.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "f1",
   "mentor",
   "comeback"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png"
 },
 {
  "id": "the-phoenician-scheme",
  "title": "The Phoenician Scheme",
  "year": 2025,
  "director": "Wes Anderson",
  "genres": [
   "Comedy",
   "Drama",
   "Adventure"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "A ruthless tycoon makes his nun daughter his heir and drags her through his grand scheme.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "tycoon",
   "nun",
   "scheme"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/The_Phoenician_Scheme_theatrical_poster.jpg"
 },
 {
  "id": "materialists",
  "title": "Materialists",
  "year": 2025,
  "director": "Celine Song",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A Manhattan matchmaker who prices love for others can't price her own heart.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 9,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "matchmaker",
   "love",
   "money"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/Materalists_Poster.jpg"
 },
 {
  "id": "superman-2025",
  "title": "Superman",
  "year": 2025,
  "director": "James Gunn",
  "genres": [
   "Action",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 129,
  "rating": "PG-13",
  "description": "Superman defends a world growing cynical about kindness while Luthor engineers his fall.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 4,
   "epic": 9,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "superman",
   "kindness",
   "luthor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg"
 },
 {
  "id": "one-battle-after-another",
  "title": "One Battle After Another",
  "year": 2025,
  "director": "Paul Thomas Anderson",
  "genres": [
   "Action",
   "Drama",
   "Thriller"
  ],
  "runtime": 161,
  "rating": "R",
  "description": "A burned-out ex-revolutionary must save his daughter when his old enemy resurfaces.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "revolutionary",
   "daughter",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/One_Battle_After_Another.jpg"
 },
 {
  "id": "bugonia",
  "title": "Bugonia",
  "year": 2025,
  "director": "Yorgos Lanthimos",
  "genres": [
   "Comedy",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "Two conspiracy cousins kidnap a pharma CEO they believe is an alien destroying Earth.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 2,
   "funny": 6,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "ceo",
   "aliens",
   "kidnap"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/Bugonia_film_poster.jpg"
 },
 {
  "id": "frankenstein",
  "title": "Frankenstein",
  "year": 2025,
  "director": "Guillermo del Toro",
  "genres": [
   "Horror",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 149,
  "rating": "R",
  "description": "Victor Frankenstein's creature tells his side: made by ambition, abandoned by his maker.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "creature",
   "maker",
   "gothic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/94/Frankenstein_2025_film_poster.jpg"
 },
 {
  "id": "train-dreams",
  "title": "Train Dreams",
  "year": 2025,
  "director": "Clint Bentley",
  "genres": [
   "Drama"
  ],
  "runtime": 102,
  "rating": "PG-13",
  "description": "A logger's quiet life across a changing American century, told in firelight and loss.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "logger",
   "century",
   "quiet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Train_Dreams_poster.jpeg"
 },
 {
  "id": "wicked-for-good",
  "title": "Wicked: For Good",
  "year": 2025,
  "director": "Jon M. Chu",
  "genres": [
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 137,
  "rating": "PG",
  "description": "Elphaba and Glinda's friendship is tested as Oz chooses its witch and its story.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 7,
   "epic": 8,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "oz",
   "friendship",
   "witches"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/Wicked_For_Good_poster.jpg"
 },
 {
  "id": "avatar-fire-and-ash",
  "title": "Avatar: Fire and Ash",
  "year": 2025,
  "director": "James Cameron",
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Action"
  ],
  "runtime": 197,
  "rating": "PG-13",
  "description": "The Sullys face Pandora's volcanic Ash People as old enemies return with fire.",
  "vector": {
   "adrenaline": 9,
   "brainy": 3,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 2,
   "epic": 10,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "pandora",
   "ash",
   "sully"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg"
 },
 {
  "id": "the-running-man",
  "title": "The Running Man",
  "year": 2025,
  "director": "Edgar Wright",
  "genres": [
   "Action",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 133,
  "rating": "R",
  "description": "A desperate father joins a game show where hunters chase contestants for a nation's entertainment.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gameshow",
   "hunters",
   "wright"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/49/The_Running_Man_2025_poster.jpg"
 },
 {
  "id": "predator-badlands",
  "title": "Predator: Badlands",
  "year": 2025,
  "director": "Dan Trachtenberg",
  "genres": [
   "Action",
   "Sci-Fi",
   "Horror"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "An outcast young Predator hunts an apex creature with a damaged Weyland-Yutani synth.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 3,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "predator",
   "outcast",
   "hunt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Predator_Badlands_Poster.jpg"
 },
 {
  "id": "the-long-walk",
  "title": "The Long Walk",
  "year": 2025,
  "director": "Francis Lawrence",
  "genres": [
   "Horror",
   "Thriller",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "One hundred boys walk until only one remains standing, televised for a broken America.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 6,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "walk",
   "boys",
   "televised"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Long_Walk_%282025_film%29.jpg"
 },
 {
  "id": "novocaine",
  "title": "Novocaine",
  "year": 2025,
  "director": "Dan Berk",
  "genres": [
   "Action",
   "Comedy"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "A bank manager who feels no pain becomes an unlikely rescuer when robbers take his love.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 7,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 6,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "pain",
   "bank",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Novocaine_%282025%29_poster.jpg"
 },
 {
  "id": "the-accountant-2",
  "title": "The Accountant 2",
  "year": 2025,
  "director": "Gavin O'Connor",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "The Wolff brothers reunite to solve a Treasury chief's murder and a trafficking ring.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "brothers",
   "treasury",
   "wolff"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Accountant_2_poster.jpg"
 },
 {
  "id": "a-working-man",
  "title": "A Working Man",
  "year": 2025,
  "director": "David Ayer",
  "genres": [
   "Action",
   "Thriller"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A construction foreman with a special-forces past hunts the traffickers who took his boss's daughter.",
  "vector": {
   "adrenaline": 8,
   "brainy": 2,
   "scary": 0,
   "funny": 1,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "foreman",
   "traffickers",
   "rescue"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/A_Working_Man_Poster.jpg"
 },
 {
  "id": "roofman",
  "title": "Roofman",
  "year": 2025,
  "director": "Derek Cianfrance",
  "genres": [
   "Crime",
   "Comedy",
   "Drama"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "A robber hides inside a Toys 'R' Us for months and falls for an employee who works there.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 6,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "toysrus",
   "robber",
   "hiding"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Roofman_poster.jpg"
 },
 {
  "id": "the-smashing-machine",
  "title": "The Smashing Machine",
  "year": 2025,
  "director": "Benny Safdie",
  "genres": [
   "Drama"
  ],
  "runtime": 124,
  "rating": "R",
  "description": "MMA pioneer Mark Kerr's addiction and pain behind the sport's brutal early years.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mma",
   "kerr",
   "addiction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/The_Smashing_Machine_%282025_film%29.jpg"
 },
 {
  "id": "after-the-hunt",
  "title": "After the Hunt",
  "year": 2025,
  "director": "Luca Guadagnino",
  "genres": [
   "Drama"
  ],
  "runtime": 139,
  "rating": "R",
  "description": "A Yale professor's life tilts when a student accuses her star colleague — and friend.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "yale",
   "accusation",
   "professor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/After_the_Hunt_poster.jpg"
 },
 {
  "id": "springsteen-deliver-me-from-nowhere",
  "title": "Springsteen: Deliver Me from Nowhere",
  "year": 2025,
  "director": "Scott Cooper",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "Bruce Springsteen records Nebraska alone in a bedroom while fame waits outside.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "springsteen",
   "nebraska",
   "bedroom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Springsteen_%E2%80%93_Deliver_Me_from_Nowhere_%28poster%29.png"
 },
 {
  "id": "nuremberg",
  "title": "Nuremberg",
  "year": 2025,
  "director": "James Vanderbilt",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 148,
  "rating": "PG-13",
  "description": "A US psychiatrist is tasked with keeping Hermann Göring sane enough to stand trial.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "göring",
   "trial",
   "psychiatrist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/25/Nuremberg_2025_film_theatrical_poster.jpg"
 },
 {
  "id": "back-to-black",
  "title": "Back to Black",
  "year": 2024,
  "director": "Sam Taylor-Johnson",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Amy Winehouse's Camden rise and the love and addiction that consumed her.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 6,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "amy",
   "camden",
   "addiction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/Back_to_black_film_poster.jpeg"
 },
 {
  "id": "bob-marley-one-love",
  "title": "Bob Marley: One Love",
  "year": 2024,
  "director": "Reinaldo Marcus Green",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "Bob Marley survives an assassination attempt and takes reggae's peace message worldwide.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "marley",
   "reggae",
   "peace"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/Bob_Marley_One_Love.jpg"
 },
 {
  "id": "better-man",
  "title": "Better Man",
  "year": 2024,
  "director": "Michael Gracey",
  "genres": [
   "Drama",
   "Musical",
   "Fantasy"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "Robbie Williams' life story, told with himself as a CGI chimpanzee.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "robbie",
   "chimp",
   "fame"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Better_Man_film_poster.jpg"
 },
 {
  "id": "the-theory-of-everything",
  "title": "The Theory of Everything",
  "year": 2014,
  "director": "James Marsh",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 123,
  "rating": "PG-13",
  "description": "Stephen Hawking's mind expands as his body fails, inside a marriage that changes shape.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 8,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "hawking",
   "marriage",
   "physics"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_%282014%29.jpg"
 },
 {
  "id": "the-imitation-game",
  "title": "The Imitation Game",
  "year": 2014,
  "director": "Morten Tyldum",
  "genres": [
   "Drama",
   "Thriller",
   "War"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "Alan Turing builds the machine that cracks Enigma while Britain persecutes the man.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "turing",
   "enigma",
   "bletchley"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/The_Imitation_Game_%282014%29.png"
 },
 {
  "id": "lincoln",
  "title": "Lincoln",
  "year": 2012,
  "director": "Steven Spielberg",
  "genres": [
   "Drama"
  ],
  "runtime": 150,
  "rating": "PG-13",
  "description": "Lincoln spends his political genius and moral credit to pass the 13th Amendment.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lincoln",
   "amendment",
   "politics"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Lincoln_2012_Teaser_Poster.jpg"
 },
 {
  "id": "selma",
  "title": "Selma",
  "year": 2014,
  "director": "Ava DuVernay",
  "genres": [
   "Drama"
  ],
  "runtime": 128,
  "rating": "PG-13",
  "description": "King's Selma voting-rights campaign meets Wallace's violence on the Edmund Pettus Bridge.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "king",
   "selma",
   "voting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/Selma_poster.jpg"
 },
 {
  "id": "milk",
  "title": "Milk",
  "year": 2008,
  "director": "Gus Van Sant",
  "genres": [
   "Drama"
  ],
  "runtime": 128,
  "rating": "R",
  "description": "Harvey Milk moves to the Castro and becomes America's first openly gay elected official.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "milk",
   "castro",
   "politics"
  ],
  "poster": ""
 },
 {
  "id": "the-queen",
  "title": "The Queen",
  "year": 2006,
  "director": "Stephen Frears",
  "genres": [
   "Drama"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "Queen Elizabeth and Tony Blair navigate the week after Diana's death.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "queen",
   "blair",
   "diana"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Queen_movie.jpg"
 },
 {
  "id": "frost-nixon",
  "title": "Frost/Nixon",
  "year": 2008,
  "director": "Ron Howard",
  "genres": [
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A lightweight talk-show host buys the interview that makes Nixon answer for Watergate.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "nixon",
   "interview",
   "frost"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Frost_nixon.jpg"
 },
 {
  "id": "the-founder",
  "title": "The Founder",
  "year": 2016,
  "director": "John Lee Hancock",
  "genres": [
   "Drama"
  ],
  "runtime": 115,
  "rating": "PG-13",
  "description": "Ray Kroc meets two brothers' perfect burger stand and builds an empire out of it.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "mcdonalds",
   "kroc",
   "brothers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/The_Founder_poster.png"
 },
 {
  "id": "steve-jobs",
  "title": "Steve Jobs",
  "year": 2015,
  "director": "Danny Boyle",
  "genres": [
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "Three product launches frame Steve Jobs' genius and the daughter he denied.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "jobs",
   "launches",
   "daughter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/aa/SteveJobsposter.jpg"
 },
 {
  "id": "blackberry",
  "title": "BlackBerry",
  "year": 2023,
  "director": "Matt Johnson",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "Two Canadian nerds and a shark build the phone that ate the world, then watch Apple eat it.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "phone",
   "canada",
   "rim"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/BlackBerryFilmPoster.png"
 },
 {
  "id": "air",
  "title": "Air",
  "year": 2023,
  "director": "Ben Affleck",
  "genres": [
   "Drama"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "Nike's basketball division bets the company on a rookie named Michael Jordan.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "nike",
   "jordan",
   "shoe"
  ],
  "poster": ""
 },
 {
  "id": "tetris",
  "title": "Tetris",
  "year": 2023,
  "director": "Jon S. Baird",
  "genres": [
   "Drama",
   "Thriller"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A games salesman races the KGB and rivals to license Tetris out of the USSR.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "tetris",
   "ussr",
   "license"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Tetris_poster.jpg"
 },
 {
  "id": "dumb-money",
  "title": "Dumb Money",
  "year": 2023,
  "director": "Craig Gillespie",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "A YouTuber's GameStop bet turns Reddit into a wrecking ball aimed at hedge funds.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "gamestop",
   "reddit",
   "hedgefunds"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Dumb_money_poster.png"
 },
 {
  "id": "moneyball",
  "title": "Moneyball",
  "year": 2011,
  "director": "Bennett Miller",
  "genres": [
   "Drama"
  ],
  "runtime": 133,
  "rating": "PG-13",
  "description": "Billy Beane rebuilds the A's with statistics nobody in baseball respects.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "baseball",
   "statistics",
   "oakland"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Moneyball_Poster.jpg"
 },
 {
  "id": "the-blind-side",
  "title": "The Blind Side",
  "year": 2009,
  "director": "John Lee Hancock",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "PG-13",
  "description": "A Memphis family takes in homeless teen Michael Oher, who becomes an NFL tackle.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "football",
   "family",
   "memphis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Blind_side_poster.jpg"
 },
 {
  "id": "remember-the-titans",
  "title": "Remember the Titans",
  "year": 2000,
  "director": "Boaz Yakin",
  "genres": [
   "Drama"
  ],
  "runtime": 113,
  "rating": "PG",
  "description": "A newly integrated Virginia football team becomes a town's lesson in 1971.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "football",
   "integration",
   "virginia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Remember_the_titansposter.jpg"
 },
 {
  "id": "rudy",
  "title": "Rudy",
  "year": 1993,
  "director": "David Anspaugh",
  "genres": [
   "Drama"
  ],
  "runtime": 114,
  "rating": "PG",
  "description": "A 5'6\" dreamer with dyslexia wills himself onto Notre Dame's field for one play.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "notredame",
   "dreamer",
   "play"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f1/Rudy_%281993_movie_poster%29.jpg"
 },
 {
  "id": "hoosiers",
  "title": "Hoosiers",
  "year": 1986,
  "director": "David Anspaugh",
  "genres": [
   "Drama"
  ],
  "runtime": 114,
  "rating": "PG",
  "description": "A disgraced coach leads a tiny Indiana school to the state basketball final.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "basketball",
   "indiana",
   "coach"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8d/Hoosiers_movie_poster_copyright_fairuse.jpg"
 },
 {
  "id": "field-of-dreams",
  "title": "Field of Dreams",
  "year": 1989,
  "director": "Phil Alden Robinson",
  "genres": [
   "Drama",
   "Fantasy"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "An Iowa farmer hears a voice, plows his corn into a baseball field, and waits.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 2
  },
  "keywords": [
   "baseball",
   "voice",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Field_of_Dreams_poster.jpg"
 },
 {
  "id": "miracle",
  "title": "Miracle",
  "year": 2004,
  "director": "Gavin O'Connor",
  "genres": [
   "Drama"
  ],
  "runtime": 135,
  "rating": "PG",
  "description": "Herb Brooks builds a team of college kids to beat the unbeatable Soviets in 1980.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "hockey",
   "1980",
   "brooks"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/55/Miracle_film.jpg"
 },
 {
  "id": "friday-night-lights",
  "title": "Friday Night Lights",
  "year": 2004,
  "director": "Peter Berg",
  "genres": [
   "Drama"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "A Texas town loads all its hope onto a high-school team and a injured star.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "texas",
   "football",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Friday_night_lights_ver2.jpg"
 },
 {
  "id": "cinderella-man",
  "title": "Cinderella Man",
  "year": 2005,
  "director": "Ron Howard",
  "genres": [
   "Drama"
  ],
  "runtime": 144,
  "rating": "PG-13",
  "description": "Boxer Jim Braddock fights out of the Depression to feed his family and stun a champion.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 8,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "depression",
   "braddock"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Cinderella_Man_poster.jpg"
 },
 {
  "id": "seabiscuit",
  "title": "Seabiscuit",
  "year": 2003,
  "director": "Gary Ross",
  "genres": [
   "Drama"
  ],
  "runtime": 140,
  "rating": "PG-13",
  "description": "A crooked-legged horse, a half-blind jockey and a broken America heal together in the Depression.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "horse",
   "depression",
   "jockey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Seabiscuit_ver2.jpg"
 },
 {
  "id": "nyad",
  "title": "Nyad",
  "year": 2023,
  "director": "Elizabeth Chai Vasarhelyi",
  "genres": [
   "Drama"
  ],
  "runtime": 121,
  "rating": "PG-13",
  "description": "At 64, Diana Nyad attempts the Cuba-to-Florida swim she failed at 28.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "swim",
   "cuba",
   "sixtyfour"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Nyad_film_poster.jpg"
 },
 {
  "id": "young-woman-and-the-sea",
  "title": "Young Woman and the Sea",
  "year": 2024,
  "director": "Joachim Rønning",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "PG",
  "description": "Trudy Ederle defies 1926 to become the first woman to swim the English Channel.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "swim",
   "channel",
   "1926"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Young_Woman_and_the_Sea_Poster.jpg"
 },
 {
  "id": "a-league-of-their-own",
  "title": "A League of Their Own",
  "year": 1992,
  "director": "Penny Marshall",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 128,
  "rating": "PG",
  "description": "Women's pro baseball in WWII: sibling rivalry, a drunk manager, and no crying.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "baseball",
   "women",
   "wwii"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/League_of_their_own_ver2.jpg"
 },
 {
  "id": "bull-durham",
  "title": "Bull Durham",
  "year": 1988,
  "director": "Ron Shelton",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 108,
  "rating": "R",
  "description": "A veteran catcher, a rookie with a million-dollar arm, and the woman who schools them both.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 7,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "baseball",
   "catcher",
   "rookie"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/Bull_Durham_film_poster.jpg"
 },
 {
  "id": "major-league",
  "title": "Major League",
  "year": 1989,
  "director": "David S. Ward",
  "genres": [
   "Comedy"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "An owner assembles the worst team in baseball to lose on purpose; they refuse.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "baseball",
   "cleveland",
   "underdogs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Major_league_movie.jpeg"
 },
 {
  "id": "caddyshack",
  "title": "Caddyshack",
  "year": 1980,
  "director": "Harold Ramis",
  "genres": [
   "Comedy"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "Snobs, slobs, caddies and one gopher declare war on a country club.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 2,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "golf",
   "gopher",
   "club"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Caddyshack_poster.jpg"
 },
 {
  "id": "happy-gilmore",
  "title": "Happy Gilmore",
  "year": 1996,
  "director": "Dennis Dugan",
  "genres": [
   "Comedy"
  ],
  "runtime": 92,
  "rating": "PG-13",
  "description": "A hockey reject's slapshot drive takes golf by storm to save his grandma's house.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "golf",
   "grandma",
   "hockey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Happygilmoreposter.jpg"
 },
 {
  "id": "the-wrestler",
  "title": "The Wrestler",
  "year": 2008,
  "director": "Darren Aronofsky",
  "genres": [
   "Drama"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "A broken-down wrestler can only feel alive in the ring that's killing him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wrestling",
   "ring",
   "daughter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Wrestler_poster.jpg"
 },
 {
  "id": "foxcatcher",
  "title": "Foxcatcher",
  "year": 2014,
  "director": "Bennett Miller",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "Millionaire John du Pont collects Olympic wrestlers like trophies, with a gun in the drawer.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "wrestling",
   "dupont",
   "olympics"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/Foxcatcher_First_Teaser_Poster.jpg"
 },
 {
  "id": "raging-bull",
  "title": "Raging Bull",
  "year": 1980,
  "director": "Martin Scorsese",
  "genres": [
   "Drama"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "Jake LaMotta's rage wins in the ring and destroys everything outside it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "lamotta",
   "rage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg"
 },
 {
  "id": "eddie-the-eagle",
  "title": "Eddie the Eagle",
  "year": 2016,
  "director": "Dexter Fletcher",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "Britain's worst ski jumper charms the 1988 Olympics by simply refusing to quit.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "skijump",
   "olympics",
   "underdog"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Eddie_the_Eagle_poster.png"
 },
 {
  "id": "the-fire-inside",
  "title": "The Fire Inside",
  "year": 2024,
  "director": "Rachel Morrison",
  "genres": [
   "Drama"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "Boxer Claressa Shields fights from Flint to Olympic gold while the sport ignores her.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "flint",
   "olympics"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/The_Fire_Inside_film_poster.jpg"
 },
 {
  "id": "christy",
  "title": "Christy",
  "year": 2025,
  "director": "David Michôd",
  "genres": [
   "Drama"
  ],
  "runtime": 135,
  "rating": "R",
  "description": "Christy Martin fights out of coal country to become women's boxing's first star — and survives her husband.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "boxing",
   "christy",
   "coal"
  ],
  "poster": ""
 },
 {
  "id": "step-brothers",
  "title": "Step Brothers",
  "year": 2008,
  "director": "Adam McKay",
  "genres": [
   "Comedy"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "Two forty-year-old stepbrothers declare war, then start a karaoke empire of friendship.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 10,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 0,
   "epic": 2,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "stepbrothers",
   " bunk beds",
   "karaoke"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg"
 },
 {
  "id": "talladega-nights-the-ballad-of-ricky-bobby",
  "title": "Talladega Nights: The Ballad of Ricky Bobby",
  "year": 2006,
  "director": "Adam McKay",
  "genres": [
   "Comedy"
  ],
  "runtime": 110,
  "rating": "PG-13",
  "description": "NASCAR's dumbest winner loses everything to a French F1 driver and must learn courage.",
  "vector": {
   "adrenaline": 6,
   "brainy": 1,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "nascar",
   "ricky",
   "shakeandbake"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/Talladega_nights.jpg"
 },
 {
  "id": "old-school",
  "title": "Old School",
  "year": 2003,
  "director": "Todd Phillips",
  "genres": [
   "Comedy"
  ],
  "runtime": 91,
  "rating": "R",
  "description": "Three thirty-somethings start a fraternity to escape mortgages and adulthood.",
  "vector": {
   "adrenaline": 4,
   "brainy": 1,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 1,
   "epic": 2,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "fraternity",
   "streaking",
   "adulthood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/21/Old_s_poster.jpg"
 },
 {
  "id": "wedding-crashers",
  "title": "Wedding Crashers",
  "year": 2005,
  "director": "David Dobkin",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Two divorce lawyers crash weddings for sport until one falls for a bridesmaid.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 7,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "weddings",
   "crashers",
   "bridesmaid"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Wedding_crashers_poster.jpg"
 },
 {
  "id": "the-40-year-old-virgin",
  "title": "The 40-Year-Old Virgin",
  "year": 2005,
  "director": "Judd Apatow",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A gentle electronics-store clerk's coworkers make his virginity their group project.",
  "vector": {
   "adrenaline": 3,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 6,
   "epic": 2,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "virgin",
   "store",
   "waxing"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/43/40-Year-OldVirginMoviePoster.jpg"
 },
 {
  "id": "knocked-up",
  "title": "Knocked Up",
  "year": 2007,
  "director": "Judd Apatow",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "A one-night stand between a stoner and an E! host becomes an accidental family.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 7,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "pregnancy",
   "stoner",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Knockedupmp.jpg"
 },
 {
  "id": "pineapple-express",
  "title": "Pineapple Express",
  "year": 2008,
  "director": "David Gordon Green",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "A process server and his dealer witness a murder and run from a drug lord in flip-flops.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "stoner",
   "witness",
   "run"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Pineapple_Express_Poster.jpg"
 },
 {
  "id": "tropic-thunder",
  "title": "Tropic Thunder",
  "year": 2008,
  "director": "Ben Stiller",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Pampered actors shooting a war epic are dropped into a real drug war, still in character.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "actors",
   "war",
   "jungle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/Tropic_thunder_ver3.jpg"
 },
 {
  "id": "forgetting-sarah-marshall",
  "title": "Forgetting Sarah Marshall",
  "year": 2008,
  "director": "Nicholas Stoller",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "A dumped composer flees to Hawaii and books the same resort as his ex and her rock star.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "hawaii",
   "ex",
   "puppet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/Forgetting_sarah_marshall_ver2.jpg"
 },
 {
  "id": "bridesmaids",
  "title": "Bridesmaids",
  "year": 2011,
  "director": "Paul Feig",
  "genres": [
   "Comedy"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A broke maid of honor sabotages her way through a rivalry with the perfect bridesmaid.",
  "vector": {
   "adrenaline": 3,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "wedding",
   "rivalry",
   "airplane"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/BridesmaidsPoster.jpg"
 },
 {
  "id": "21-jump-street",
  "title": "21 Jump Street",
  "year": 2012,
  "director": "Phil Lord",
  "genres": [
   "Comedy",
   "Action",
   "Crime"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Two young-looking cops go back to high school and discover popularity has new rules.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "highschool",
   "cops",
   "undercover"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/93/21JumpStreetfilm.jpg"
 },
 {
  "id": "22-jump-street",
  "title": "22 Jump Street",
  "year": 2014,
  "director": "Phil Lord",
  "genres": [
   "Comedy",
   "Action",
   "Crime"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Schmidt and Jenko take their bromance to college and nearly break up over spring break.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "college",
   "bromance",
   "cops"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/22_Jump_Street_Poster.png"
 },
 {
  "id": "the-other-guys",
  "title": "The Other Guys",
  "year": 2010,
  "director": "Adam McKay",
  "genres": [
   "Comedy",
   "Action",
   "Crime"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "Two desk-bound NYPD losers stumble into a Ponzi case the heroes' deaths left behind.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "desk",
   "ponzi",
   "peacock"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Other_guys_poster.jpg"
 },
 {
  "id": "horrible-bosses",
  "title": "Horrible Bosses",
  "year": 2011,
  "director": "Seth Gordon",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 98,
  "rating": "R",
  "description": "Three friends hire a 'murder consultant' to kill their nightmare bosses.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 1,
   "funny": 9,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "bosses",
   "consultant",
   "murder"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/92/Horrible_Bosses.jpg"
 },
 {
  "id": "we-re-the-millers",
  "title": "We're the Millers",
  "year": 2013,
  "director": "Rawson Marshall Thurber",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "A dealer hires a fake family to smuggle a 'smidge' of weed across the border in an RV.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "family",
   "rv",
   "smuggle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/We%27re_the_Millers_poster.jpg"
 },
 {
  "id": "the-heat",
  "title": "The Heat",
  "year": 2013,
  "director": "Paul Feig",
  "genres": [
   "Comedy",
   "Action",
   "Crime"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A by-the-book FBI agent and a feral Boston cop collide chasing a drug lord.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "fbi",
   "boston",
   "buddy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Heat_poster.jpg"
 },
 {
  "id": "spy",
  "title": "Spy",
  "year": 2015,
  "director": "Paul Feig",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A CIA analyst leaves her desk and becomes the field agent nobody saw coming.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "cia",
   "analyst",
   "field"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/Spy2015_TeaserPoster.jpg"
 },
 {
  "id": "central-intelligence",
  "title": "Central Intelligence",
  "year": 2016,
  "director": "Rawson Marshall Thurber",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "A mild accountant is dragged into espionage by his once-bullied, now-CIA high school friend.",
  "vector": {
   "adrenaline": 7,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "accountant",
   "cia",
   "reunion"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/CentralIntelligencePoster.jpg"
 },
 {
  "id": "blockers",
  "title": "Blockers",
  "year": 2018,
  "director": "Kay Cannon",
  "genres": [
   "Comedy"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "Three parents race across town to block their daughters' prom-night pact.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "parents",
   "prom",
   "pact"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Blockers_%28film%29.png"
 },
 {
  "id": "tag",
  "title": "Tag",
  "year": 2018,
  "director": "Jeff Tomsic",
  "genres": [
   "Comedy"
  ],
  "runtime": 100,
  "rating": "R",
  "description": "Five friends have played the same game of tag every May for thirty years.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "tag",
   "friends",
   "wedding"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/Tag_%282018_film%29.png"
 },
 {
  "id": "good-boys",
  "title": "Good Boys",
  "year": 2019,
  "director": "Gene Stupnitsky",
  "genres": [
   "Comedy",
   "Adventure"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "Three sixth graders cross town with a drone, a purse of molly and zero experience.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "sixthgrade",
   "drone",
   "party"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/Good_Boys_Movie_Poster.jpg"
 },
 {
  "id": "the-death-of-stalin",
  "title": "The Death of Stalin",
  "year": 2017,
  "director": "Armando Iannucci",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Stalin drops dead and his politburo of cowards and plotters scramble in panic.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 9,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "stalin",
   "politburo",
   "satire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Death_of_Stalin.png"
 },
 {
  "id": "in-the-loop",
  "title": "In the Loop",
  "year": 2009,
  "director": "Armando Iannucci",
  "genres": [
   "Comedy"
  ],
  "runtime": 106,
  "rating": "R",
  "description": "A hapless minister's offhand remark feeds the spin machine rushing toward war.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 0,
   "funny": 9,
   "heartwarming": 0,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "spin",
   "minister",
   "war"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/In_the_Loop_poster.jpg"
 },
 {
  "id": "four-lions",
  "title": "Four Lions",
  "year": 2010,
  "director": "Christopher Morris",
  "genres": [
   "Comedy"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "Four Sheffield would-be jihadists are too incompetent for their own martyrdom.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "sheffield",
   "crows",
   "satire"
  ],
  "poster": ""
 },
 {
  "id": "what-we-do-in-the-shadows",
  "title": "What We Do in the Shadows",
  "year": 2014,
  "director": "Taika Waititi",
  "genres": [
   "Comedy",
   "Horror"
  ],
  "runtime": 86,
  "rating": "R",
  "description": "Vampire flatmates in Wellington argue about chores and dishes in a documentary.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 3,
   "funny": 9,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "vampires",
   "flatmates",
   "documentary"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/What_We_Do_in_the_Shadows_poster.jpg"
 },
 {
  "id": "hunt-for-the-wilderpeople",
  "title": "Hunt for the Wilderpeople",
  "year": 2016,
  "director": "Taika Waititi",
  "genres": [
   "Comedy",
   "Adventure",
   "Drama"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "A city kid and his foster uncle flee into the New Zealand bush and become folk legends.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "bush",
   "foster",
   "manhunt"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Hunt_for_the_Wilderpeople.png"
 },
 {
  "id": "the-lost-city",
  "title": "The Lost City",
  "year": 2022,
  "director": "Aaron Nee",
  "genres": [
   "Comedy",
   "Action",
   "Romance",
   "Adventure"
  ],
  "runtime": 112,
  "rating": "PG-13",
  "description": "A romance novelist and her cover model are kidnapped into a real jungle treasure hunt.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 7,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "novelist",
   "jungle",
   "treasure"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ee/TheLostCityPoster.jpg"
 },
 {
  "id": "the-unbearable-weight-of-massive-talent",
  "title": "The Unbearable Weight of Massive Talent",
  "year": 2022,
  "director": "Tom Gormican",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Nicolas Cage plays Nicolas Cage, hired to entertain a fan who may be a cartel boss.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "cage",
   "fan",
   "cartel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/The_Unbearable_Weight_of_Massive_Talent.jpg"
 },
 {
  "id": "bottoms",
  "title": "Bottoms",
  "year": 2023,
  "director": "Emma Seligman",
  "genres": [
   "Comedy"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "Two unpopular seniors start a girls' fight club to meet cheerleaders; it works too well.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 4,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "fightclub",
   "highschool",
   "cheerleaders"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/db/Bottoms_poster.jpeg"
 },
 {
  "id": "hit-man",
  "title": "Hit Man",
  "year": 2023,
  "director": "Richard Linklater",
  "genres": [
   "Comedy",
   "Crime",
   "Romance"
  ],
  "runtime": 115,
  "rating": "R",
  "description": "A professor moonlighting as a fake hitman falls for a client who wants her husband gone.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "hitman",
   "professor",
   "sting"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Hit_man_2024_film.jpg"
 },
 {
  "id": "thelma",
  "title": "Thelma",
  "year": 2024,
  "director": "Josh Margolin",
  "genres": [
   "Comedy",
   "Action"
  ],
  "runtime": 98,
  "rating": "PG-13",
  "description": "A 93-year-old scammed grandmother grabs her scooter and hunts the phone scammers herself.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "grandma",
   "scam",
   "scooter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ec/Thelma_2024_film_poster.jpg"
 },
 {
  "id": "zoolander",
  "title": "Zoolander",
  "year": 2001,
  "director": "Ben Stiller",
  "genres": [
   "Comedy"
  ],
  "runtime": 90,
  "rating": "PG-13",
  "description": "A dim male model is brainwashed to assassinate Malaysia's prime minister.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 1,
   "dark": 3,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "model",
   "brainwashed",
   "mugatu"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/Movie_poster_zoolander.jpg"
 },
 {
  "id": "austin-powers-international-man-of-mystery",
  "title": "Austin Powers: International Man of Mystery",
  "year": 1997,
  "director": "Jay Roach",
  "genres": [
   "Comedy"
  ],
  "runtime": 89,
  "rating": "PG-13",
  "description": "A cryo-frozen sixties spy thaws in 1997 to fight Dr. Evil and modern dentistry.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 2,
   "dark": 2,
   "romantic": 4,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "spy",
   "sixties",
   "evil"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/Austin_Powers_International_Man_of_Mystery_theatrical_poster.jpg"
 },
 {
  "id": "wayne-s-world",
  "title": "Wayne's World",
  "year": 1992,
  "director": "Penelope Spheeris",
  "genres": [
   "Comedy",
   "Musical"
  ],
  "runtime": 95,
  "rating": "PG-13",
  "description": "Two Aurora metalheads sell their public-access show and nearly lose its soul.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 3,
   "epic": 2,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "metal",
   "show",
   "aurora"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e0/Wayne%27s_World.jpg"
 },
 {
  "id": "tommy-boy",
  "title": "Tommy Boy",
  "year": 1995,
  "director": "Peter Segal",
  "genres": [
   "Comedy"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A lovable screw-up hits the road to sell brake pads and save his dad's factory.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "brakepads",
   "road",
   "factory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f8/Tommy_Boy.jpg"
 },
 {
  "id": "ace-ventura-pet-detective",
  "title": "Ace Ventura: Pet Detective",
  "year": 1994,
  "director": "Tom Shadyac",
  "genres": [
   "Comedy"
  ],
  "runtime": 86,
  "rating": "PG-13",
  "description": "A deranged pet detective hunts the kidnapped mascot of the Miami Dolphins.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 1,
   "dark": 2,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "detective",
   "dolphin",
   "carrey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Ace_ventura_pet_detective.jpg"
 },
 {
  "id": "the-mask",
  "title": "The Mask",
  "year": 1994,
  "director": "Chuck Russell",
  "genres": [
   "Comedy",
   "Fantasy",
   "Action"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "A timid bank clerk finds a mask that turns him into a cartoon tornado of confidence.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "mask",
   "clerk",
   "cartoon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Mask_%28film%29_poster.jpg"
 },
 {
  "id": "liar-liar",
  "title": "Liar Liar",
  "year": 1997,
  "director": "Tom Shadyac",
  "genres": [
   "Comedy"
  ],
  "runtime": 86,
  "rating": "PG-13",
  "description": "A lawyer's son wishes his dad cannot lie for 24 hours; court becomes chaos.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "lawyer",
   "wish",
   "truth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/Liar_Liar_poster.JPG"
 },
 {
  "id": "meet-the-parents",
  "title": "Meet the Parents",
  "year": 2000,
  "director": "Jay Roach",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 108,
  "rating": "PG-13",
  "description": "A male nurse meets his girlfriend's ex-CIA father and fails every test in the circle of trust.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 6,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "father",
   "nurse",
   "circle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Meet_the_parents_ver2.jpg"
 },
 {
  "id": "dodgeball-a-true-underdog-story",
  "title": "Dodgeball: A True Underdog Story",
  "year": 2004,
  "director": "Rawson Marshall Thurber",
  "genres": [
   "Comedy"
  ],
  "runtime": 92,
  "rating": "PG-13",
  "description": "A scruffy gym's misfits enter a Vegas dodgeball tournament to save their home turf.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "dodgeball",
   "gym",
   "tournament"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/Movie_poster_Dodgeball_A_True_Underdog_Story.jpg"
 },
 {
  "id": "blades-of-glory",
  "title": "Blades of Glory",
  "year": 2007,
  "director": "Josh Gordon",
  "genres": [
   "Comedy"
  ],
  "runtime": 93,
  "rating": "PG-13",
  "description": "Rival male figure skaters banned for life return as the sport's first man-man pair.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "skating",
   "rivals",
   "pair"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Bladesofglory2007.jpg"
 },
 {
  "id": "bad-santa",
  "title": "Bad Santa",
  "year": 2003,
  "director": "Terry Zwigoff",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A drunken con-man Santa robs malls every Christmas until a strange kid adopts him.",
  "vector": {
   "adrenaline": 3,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 2,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "santa",
   "con",
   "kid"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/Bad_Santa_film.jpg"
 },
 {
  "id": "scrooged",
  "title": "Scrooged",
  "year": 1988,
  "director": "Richard Donner",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "A soulless TV executive gets Dickens' three ghosts live during his own Christmas special.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 1,
   "funny": 8,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "ghosts",
   "executive",
   "christmas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Scrooged_film_poster.JPG"
 },
 {
  "id": "national-lampoon-s-christmas-vacation",
  "title": "National Lampoon's Christmas Vacation",
  "year": 1989,
  "director": "Jeremiah S. Chechik",
  "genres": [
   "Comedy"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "Clark Griswold's perfect family Christmas collapses under lights, in-laws and a bonus check.",
  "vector": {
   "adrenaline": 4,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 1,
   "epic": 2,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "christmas",
   "griswold",
   "lights"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/NationalLampoonsChristmasVacationPoster.JPG"
 },
 {
  "id": "planes-trains-and-automobiles",
  "title": "Planes, Trains and Automobiles",
  "year": 1987,
  "director": "John Hughes",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "A control-freak ad man and a shower-ring salesman fight Thanksgiving traffic to get home.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "thanksgiving",
   "road",
   "salesman"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/Planes_trains_and_automobiles.jpg"
 },
 {
  "id": "uncle-buck",
  "title": "Uncle Buck",
  "year": 1989,
  "director": "John Hughes",
  "genres": [
   "Comedy"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "A slob bachelor babysits his brother's kids and turns out to be exactly who they need.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 2,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "babysit",
   "uncle",
   "pancakes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/Uncle_buck.jpg"
 },
 {
  "id": "sixteen-candles",
  "title": "Sixteen Candles",
  "year": 1984,
  "director": "John Hughes",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 93,
  "rating": "PG",
  "description": "Sam's family forgets her sixteenth birthday amid her sister's wedding chaos.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 6,
   "epic": 2,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "birthday",
   "wedding",
   "crush"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Sixteen_Candles.jpg"
 },
 {
  "id": "pretty-in-pink",
  "title": "Pretty in Pink",
  "year": 1986,
  "director": "Howard Deutch",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A poor girl, a rich boy and Duckie collide at prom over class and a pink dress.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 7,
   "epic": 2,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "prom",
   "class",
   "duckie"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Pretty_In_Pink_poster.jpg"
 },
 {
  "id": "say-anything",
  "title": "Say Anything...",
  "year": 1989,
  "director": "Cameron Crowe",
  "genres": [
   "Romance",
   "Drama",
   "Comedy"
  ],
  "runtime": 100,
  "rating": "PG-13",
  "description": "An earnest kickboxer courts the valedictorian with a boombox held high.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 9,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "boombox",
   "valedictorian",
   "kickboxer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Say_Anything.jpg"
 },
 {
  "id": "grosse-pointe-blank",
  "title": "Grosse Pointe Blank",
  "year": 1997,
  "director": "George Armitage",
  "genres": [
   "Comedy",
   "Romance",
   "Crime",
   "Action"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "A hitman attends his high-school reunion and tries to win back his prom date between jobs.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "hitman",
   "reunion",
   "prom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Grosse_Pointe_Blank_poster.jpg"
 },
 {
  "id": "high-fidelity",
  "title": "High Fidelity",
  "year": 2000,
  "director": "Stephen Frears",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A record-store owner lists his top-five breakups to learn why he's always dumped.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "records",
   "topfive",
   "breakups"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/High_Fidelity_poster.jpg"
 },
 {
  "id": "about-a-boy",
  "title": "About a Boy",
  "year": 2002,
  "director": "Chris Weitz",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 102,
  "rating": "PG-13",
  "description": "A rich slacker faking single-parenthood is adopted by a real kid who needs a man.",
  "vector": {
   "adrenaline": 2,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 5,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "slacker",
   "kid",
   "single"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/About_a_boy_movie_poster.jpg"
 },
 {
  "id": "the-big-sick",
  "title": "The Big Sick",
  "year": 2017,
  "director": "Michael Showalter",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A comedian falls for a woman, loses her, then sits vigil with her parents through her coma.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "coma",
   "parents",
   "standup"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/69/The_Big_Sick.jpg"
 },
 {
  "id": "trainwreck",
  "title": "Trainwreck",
  "year": 2015,
  "director": "Judd Apatow",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "A commitment-phobic magazine writer meets a sports doctor who breaks her rules.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "writer",
   "doctor",
   "rules"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c5/Trainwreck_poster.jpg"
 },
 {
  "id": "crazy-stupid-love",
  "title": "Crazy, Stupid, Love.",
  "year": 2011,
  "director": "Glenn Ficarra",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "A dumped dad gets a makeover from a smooth stranger whose own love life is a mess.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "makeover",
   "divorce",
   "twist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/CrazyStupidLovePoster.jpg"
 },
 {
  "id": "set-it-up",
  "title": "Set It Up",
  "year": 2018,
  "director": "Claire Scanlon",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 105,
  "rating": "TV-14",
  "description": "Two crushed assistants scheme to make their nightmare bosses fall for each other.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "assistants",
   "bosses",
   "scheme"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Set_It_Up_poster.jpg"
 },
 {
  "id": "always-be-my-maybe",
  "title": "Always Be My Maybe",
  "year": 2019,
  "director": "Nahnatchka Khan",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 101,
  "rating": "PG-13",
  "description": "Childhood sweethearts — she a celebrity chef, he a struggling musician — reunite in San Francisco.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "chef",
   "reunion",
   "keanu"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5d/Always_Be_My_Maybe_poster.png"
 },
 {
  "id": "ticket-to-paradise",
  "title": "Ticket to Paradise",
  "year": 2022,
  "director": "Ol Parker",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 104,
  "rating": "PG-13",
  "description": "Divorced parents fly to Bali to sabotage their daughter's wedding and reignite something.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "bali",
   "wedding",
   "divorced"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg"
 },
 {
  "id": "anyone-but-you",
  "title": "Anyone But You",
  "year": 2023,
  "director": "Will Gluck",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "Exes who hate each other fake a romance at a Sydney wedding to survive their families.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 9,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "sydney",
   "wedding",
   "fake"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c4/Anyone_but_You_%282023%29_official_poster.webp"
 },
 {
  "id": "fire-island",
  "title": "Fire Island",
  "year": 2022,
  "director": "Andrew Ahn",
  "genres": [
   "Romance",
   "Comedy",
   "Drama"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "Two friends' Fire Island week becomes a Pride and Prejudice of chosen family and class.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "fireisland",
   "friends",
   "pride"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Fire_Island_Movie_Poster.jpeg"
 },
 {
  "id": "red-white-royal-blue",
  "title": "Red, White & Royal Blue",
  "year": 2023,
  "director": "Matthew López",
  "genres": [
   "Romance",
   "Comedy"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "America's first son and a British prince fake a friendship that stops being fake.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "prince",
   "firstson",
   "fake"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/Red_white_and_royal_blue_film.png"
 },
 {
  "id": "the-idea-of-you",
  "title": "The Idea of You",
  "year": 2024,
  "director": "Michael Showalter",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "A 40-year-old gallery owner falls for a 24-year-old boy-band star at Coachella.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "coachella",
   "boystar",
   "age"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Idea_of_You_film_poster.jpg"
 },
 {
  "id": "this-is-spinal-tap",
  "title": "This Is Spinal Tap",
  "year": 1984,
  "director": "Rob Reiner",
  "genres": [
   "Comedy",
   "Musical"
  ],
  "runtime": 82,
  "rating": "R",
  "description": "A documentary follows the loudest band in England on its quietest, dumbest tour.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 9,
   "heartwarming": 2,
   "dark": 3,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "band",
   "eleven",
   "mockumentary"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c8/Thisisspinaltapposter.jpg"
 },
 {
  "id": "beverly-hills-cop",
  "title": "Beverly Hills Cop",
  "year": 1984,
  "director": "Martin Brest",
  "genres": [
   "Action",
   "Comedy",
   "Crime"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "Detroit cop Axel Foley brings street smarts and a laugh to Beverly Hills' murder case.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "axel",
   "detroit",
   "beverlyhills"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Beverly_Hills_Cop.jpg"
 },
 {
  "id": "coming-to-america",
  "title": "Coming to America",
  "year": 1988,
  "director": "John Landis",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "An African prince works at a Queens burger joint to find a wife who loves him, not the crown.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "prince",
   "queens",
   "burger"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/ComingtoAmerica1988MoviePoster.jpg"
 },
 {
  "id": "ghostbusters-afterlife",
  "title": "Ghostbusters: Afterlife",
  "year": 2021,
  "director": "Jason Reitman",
  "genres": [
   "Comedy",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "Egon's grandchildren find his ghost traps in Oklahoma as an old apocalypse reopens.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 3,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "grandchildren",
   "oklahoma",
   "traps"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Ghostbusters_-_Afterlife_official_theatrical_poster.jpg"
 },
 {
  "id": "beetlejuice",
  "title": "Beetlejuice",
  "year": 1988,
  "director": "Tim Burton",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 92,
  "rating": "PG",
  "description": "A dead couple hires a bio-exorcist to scare the living out of their house.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 2,
   "funny": 8,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 2,
   "epic": 3,
   "cozy": 1,
   "weird": 4
  },
  "keywords": [
   "ghosts",
   "exorcist",
   "house"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Beetlejuice_%281988_film_poster%29.png"
 },
 {
  "id": "beetlejuice-beetlejuice",
  "title": "Beetlejuice Beetlejuice",
  "year": 2024,
  "director": "Tim Burton",
  "genres": [
   "Comedy",
   "Fantasy",
   "Horror"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "Three Deetz generations reopen the afterlife's door and Beetlejuice returns with a ring.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 3,
   "funny": 8,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "afterlife",
   "deetz",
   "ring"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Beetlejuice_Beetlejuice_poster.jpg"
 },
 {
  "id": "edward-scissorhands",
  "title": "Edward Scissorhands",
  "year": 1990,
  "director": "Tim Burton",
  "genres": [
   "Fantasy",
   "Romance",
   "Drama"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "A gentle unfinished man with scissor hands is adopted, adored, then feared by suburbia.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 7,
   "epic": 4,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "scissors",
   "suburbia",
   "gentle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Edwardscissorhandsposter.JPG"
 },
 {
  "id": "the-addams-family-1991",
  "title": "The Addams Family",
  "year": 1991,
  "director": "Barry Sonnenfeld",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 99,
  "rating": "PG-13",
  "description": "A con artist poses as long-lost Uncle Fester to loot the Addams fortune.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 2,
   "funny": 8,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "fester",
   "con",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/The_Addams_Family.jpg"
 },
 {
  "id": "addams-family-values",
  "title": "Addams Family Values",
  "year": 1993,
  "director": "Barry Sonnenfeld",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "Wednesday is sent to summer camp while a gold-digger marries Fester for his money.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 2,
   "funny": 9,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "camp",
   "wednesday",
   "golddigger"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Addams_family_values.jpg"
 },
 {
  "id": "death-becomes-her",
  "title": "Death Becomes Her",
  "year": 1992,
  "director": "Robert Zemeckis",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "Rival divas drink an immortality potion and spend eternity sabotaging each other's bodies.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 8,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "potion",
   "rivals",
   "immortal"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Death_Becomes_Her_poster.jpg"
 },
 {
  "id": "heathers",
  "title": "Heathers",
  "year": 1989,
  "director": "Michael Lehmann",
  "genres": [
   "Comedy",
   "Crime",
   "Drama"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "Veronica and J.D.'s war on the Heathers turns from pranks into a body count.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 2,
   "funny": 8,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 4,
   "epic": 3,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "heathers",
   "jd",
   "school"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Heathers_%281989%29.png"
 },
 {
  "id": "election",
  "title": "Election",
  "year": 1999,
  "director": "Alexander Payne",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A teacher sabotages an overachiever's student-election campaign and ruins himself.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 7,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "election",
   "teacher",
   "tracy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Election_%281999_film%29.png"
 },
 {
  "id": "ghost-world",
  "title": "Ghost World",
  "year": 2001,
  "director": "Terry Zwigoff",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 111,
  "rating": "R",
  "description": "Two outcast graduates drift apart; one drifts into the orbit of a lonely record collector.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 3,
   "epic": 2,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "graduates",
   "collector",
   "outcast"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Ghostworldposter.jpg"
 },
 {
  "id": "napoleon-dynamite",
  "title": "Napoleon Dynamite",
  "year": 2004,
  "director": "Jared Hess",
  "genres": [
   "Comedy"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "An awkward Idaho teen campaigns for Pedro and perfects his dance for the talent show.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 9,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 2,
   "cozy": 3,
   "weird": 3
  },
  "keywords": [
   "idaho",
   "pedro",
   "dance"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/Napoleon_dynamite_post.jpg"
 },
 {
  "id": "juno",
  "title": "Juno",
  "year": 2007,
  "director": "Jason Reitman",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 96,
  "rating": "PG-13",
  "description": "A witty teen's pregnancy plan meets the adoptive couple whose marriage is cracking.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "pregnancy",
   "adoption",
   "teen"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Junoposter2007.png"
 },
 {
  "id": "little-miss-sunshine",
  "title": "Little Miss Sunshine",
  "year": 2006,
  "director": "Jonathan Dayton",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 101,
  "rating": "R",
  "description": "A fractured family road-trips in a dying VW bus so Olive can reach her pageant.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "pageant",
   "bus",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Little_miss_sunshine_poster.jpg"
 },
 {
  "id": "dazed-and-confused",
  "title": "Dazed and Confused",
  "year": 1993,
  "director": "Richard Linklater",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "The last day of school, 1976: seniors haze, freshmen flee, everyone cruises.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 2,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "1976",
   "school",
   "cruise"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/Dazed_and_Confused_%281993%29_poster.jpg"
 },
 {
  "id": "almost-famous",
  "title": "Almost Famous",
  "year": 2000,
  "director": "Cameron Crowe",
  "genres": [
   "Drama",
   "Comedy",
   "Musical"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A 15-year-old Rolling Stone writer tours with a band and its golden god in 1973.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 5,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "band",
   "tour",
   "1973"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/Almost_famous_poster1.jpg"
 },
 {
  "id": "scott-pilgrim-vs-the-world",
  "title": "Scott Pilgrim vs. the World",
  "year": 2010,
  "director": "Edgar Wright",
  "genres": [
   "Action",
   "Comedy",
   "Romance"
  ],
  "runtime": 112,
  "rating": "PG-13",
  "description": "A bass player must defeat his new girlfriend's seven evil exes, video-game style.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "exes",
   "videogame",
   "bass"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Scott_Pilgrim_vs._the_World_teaser.jpg"
 },
 {
  "id": "the-world-s-end",
  "title": "The World's End",
  "year": 2013,
  "director": "Edgar Wright",
  "genres": [
   "Comedy",
   "Sci-Fi",
   "Action"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Five friends retry their hometown pub crawl as robots quietly replace the town.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 8,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "pubcrawl",
   "robots",
   "hometown"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_World%27s_End_poster.jpg"
 },
 {
  "id": "paul",
  "title": "Paul",
  "year": 2011,
  "director": "Greg Mottola",
  "genres": [
   "Comedy",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Two British nerds pick up a real alien hitchhiker on a UFO road trip.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 1,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "alien",
   "roadtrip",
   "nerds"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Paul_2011_British_poster.jpg"
 },
 {
  "id": "this-is-the-end",
  "title": "This Is the End",
  "year": 2013,
  "director": "Evan Goldberg",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "runtime": 107,
  "rating": "R",
  "description": "Six celebrity friends ride out the apocalypse in James Franco's house, badly.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 3,
   "funny": 9,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "apocalypse",
   "franco",
   "celebrities"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/This-is-the-End-Film-Poster.jpg"
 },
 {
  "id": "sausage-party",
  "title": "Sausage Party",
  "year": 2016,
  "director": "Greg Tiernan",
  "genres": [
   "Animation",
   "Comedy"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "Supermarket food discovers the horrifying truth about the 'great beyond' of being bought.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 2,
   "funny": 8,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "food",
   "supermarket",
   "truth"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Sausage_Party_logo.png"
 },
 {
  "id": "the-disaster-artist",
  "title": "The Disaster Artist",
  "year": 2017,
  "director": "James Franco",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Tommy Wiseau makes The Room, the worst film ever, with total sincerity.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "theroom",
   "wiseau",
   "sincerity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/TheDisastorArtistTeaserPoster.jpg"
 },
 {
  "id": "walk-hard-the-dewey-cox-story",
  "title": "Walk Hard: The Dewey Cox Story",
  "year": 2007,
  "director": "Jake Kasdan",
  "genres": [
   "Comedy",
   "Musical"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "Every music biopic ever, in one man's rise, fall, rehab and wrong kid cut in half.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "biopic",
   "parody",
   "rehab"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Walk_hard_poster_07.jpg"
 },
 {
  "id": "borat",
  "title": "Borat",
  "year": 2006,
  "director": "Larry Charles",
  "genres": [
   "Comedy"
  ],
  "runtime": 84,
  "rating": "R",
  "description": "Kazakh journalist Borat tours America misunderstanding everything at maximum volume.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 1,
   "funny": 10,
   "heartwarming": 1,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "kazakh",
   "america",
   "journalist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/Borat_ver2.jpg"
 },
 {
  "id": "borat-subsequent-moviefilm",
  "title": "Borat Subsequent Moviefilm",
  "year": 2020,
  "director": "Jason Woliner",
  "genres": [
   "Comedy"
  ],
  "runtime": 96,
  "rating": "R",
  "description": "Borat returns to gift his daughter to America's leadership during a pandemic.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 1,
   "funny": 9,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "kazakh",
   "daughter",
   "pandemic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Borat_2_poster.jpeg"
 },
 {
  "id": "dolemite-is-my-name",
  "title": "Dolemite Is My Name",
  "year": 2019,
  "director": "Craig Brewer",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "Rudy Ray Moore reinvents himself as Dolemite and self-finances a blaxploitation classic.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "dolemite",
   "moore",
   "selffinanced"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Dolemite_is_My_Name_poster.jpg"
 },
 {
  "id": "popstar-never-stop-never-stopping",
  "title": "Popstar: Never Stop Never Stopping",
  "year": 2016,
  "director": "Akiva Schaffer",
  "genres": [
   "Comedy",
   "Musical"
  ],
  "runtime": 87,
  "rating": "R",
  "description": "A pop-rap manchild's solo album tanks and his ego completes the job.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "popstar",
   "album",
   "ego"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Popstar_Lonely_Island.jpg"
 },
 {
  "id": "american-pie",
  "title": "American Pie",
  "year": 1999,
  "director": "Paul Weitz",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Four friends make a pact to lose their virginity by prom night.",
  "vector": {
   "adrenaline": 3,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 6,
   "epic": 2,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "pact",
   "prom",
   "friends"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c8/American_Pie1.jpg"
 },
 {
  "id": "harold-kumar-go-to-white-castle",
  "title": "Harold & Kumar Go to White Castle",
  "year": 2004,
  "director": "Danny Leiner",
  "genres": [
   "Comedy",
   "Adventure"
  ],
  "runtime": 88,
  "rating": "R",
  "description": "Two stoners' simple slider run becomes an all-night New Jersey odyssey.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 9,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "whitecastle",
   "stoners",
   "odyssey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/72/Harold_%26_Kumar_Go_to_White_Castle.JPG"
 },
 {
  "id": "scary-movie",
  "title": "Scary Movie",
  "year": 2000,
  "director": "Keenen Ivory Wayans",
  "genres": [
   "Comedy",
   "Horror"
  ],
  "runtime": 88,
  "rating": "R",
  "description": "A year after a hit-and-run, a masked killer stalks teens in this Scream spoof.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 3,
   "funny": 9,
   "heartwarming": 0,
   "dark": 3,
   "romantic": 1,
   "epic": 2,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "spoof",
   "scream",
   "teens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg"
 },
 {
  "id": "easy-a",
  "title": "Easy A",
  "year": 2010,
  "director": "Will Gluck",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 92,
  "rating": "PG-13",
  "description": "A lie about losing her virginity makes Olive the school's scarlet-letter celebrity.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 6,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "rumor",
   "school",
   "olive"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Easy_A_poster.jpg"
 },
 {
  "id": "the-edge-of-seventeen",
  "title": "The Edge of Seventeen",
  "year": 2016,
  "director": "Kelly Fremon Craig",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Nadine's best friend dates her brother; her teacher becomes her reluctant life raft.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 4,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "bestfriend",
   "brother",
   "teacher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/The_Edge_of_Seventeen_2016_film_poster.jpg"
 },
 {
  "id": "eighth-grade",
  "title": "Eighth Grade",
  "year": 2018,
  "director": "Bo Burnham",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 93,
  "rating": "R",
  "description": "Kayla vlogs confidence she doesn't have through the last week of middle school.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 2,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "vlog",
   "middleschool",
   "anxiety"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ec/Eighth_Grade.png"
 },
 {
  "id": "the-spectacular-now",
  "title": "The Spectacular Now",
  "year": 2013,
  "director": "James Ponsoldt",
  "genres": [
   "Drama",
   "Romance",
   "Comedy"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A charming alcoholic senior falls for the 'nice girl' and must face his father's ghost.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "senior",
   "alcohol",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/The_Spectacular_Now_film.jpg"
 },
 {
  "id": "the-perks-of-being-a-wallflower",
  "title": "The Perks of Being a Wallflower",
  "year": 2012,
  "director": "Stephen Chbosky",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 103,
  "rating": "PG-13",
  "description": "A shy freshman is adopted by two seniors who teach him to participate in life.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 6,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "freshman",
   "seniors",
   "tunnel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Perks_of_Being_a_Wallflower_Poster.jpg"
 },
 {
  "id": "love-simon",
  "title": "Love, Simon",
  "year": 2018,
  "director": "Greg Berlanti",
  "genres": [
   "Romance",
   "Drama",
   "Comedy"
  ],
  "runtime": 110,
  "rating": "PG-13",
  "description": "Simon keeps his sexuality secret until an anonymous classmate's emails change everything.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "emails",
   "secret",
   "classmate"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Love%2C_Simon_poster.png"
 },
 {
  "id": "the-devil-wears-prada",
  "title": "The Devil Wears Prada",
  "year": 2006,
  "director": "David Frankel",
  "genres": [
   "Comedy",
   "Drama"
  ],
  "runtime": 114,
  "rating": "PG-13",
  "description": "An aspiring journalist survives a year assisting fashion's most terrifying editor.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "fashion",
   "editor",
   "assistant"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Devil_Wears_Prada_main_onesheet.jpg"
 },
 {
  "id": "clueless",
  "title": "Clueless",
  "year": 1995,
  "director": "Amy Heckerling",
  "genres": [
   "Comedy",
   "Romance"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "Beverly Hills matchmaker Cher gives a new girl a makeover and misreads her own heart.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 7,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "beverlyhills",
   "makeover",
   "matchmaker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/Clueless_film_poster.png"
 },
 {
  "id": "atonement",
  "title": "Atonement",
  "year": 2007,
  "director": "Joe Wright",
  "genres": [
   "Drama",
   "Romance",
   "War"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "A child's lie destroys two lovers and echoes through Dunkirk and a lifetime of writing.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 9,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lie",
   "dunkirk",
   "novel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e4/Atonement_UK_poster.jpg"
 },
 {
  "id": "the-english-patient",
  "title": "The English Patient",
  "year": 1996,
  "director": "Anthony Minghella",
  "genres": [
   "Drama",
   "Romance",
   "War"
  ],
  "runtime": 162,
  "rating": "PG",
  "description": "A burned pilot's desert affair is retold from an Italian villa at the war's end.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 9,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "desert",
   "affair",
   "pilot"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/The_English_Patient_Poster.jpg"
 },
 {
  "id": "shakespeare-in-love",
  "title": "Shakespeare in Love",
  "year": 1998,
  "director": "John Madden",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "Young Will Shakespeare cures writer's block with a muse who must marry another.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 9,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "shakespeare",
   "muse",
   "play"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Shakespeare_in_Love_1998_Poster.jpg"
 },
 {
  "id": "moulin-rouge",
  "title": "Moulin Rouge!",
  "year": 2001,
  "director": "Baz Luhrmann",
  "genres": [
   "Romance",
   "Drama",
   "Musical"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A poet and a courtesan fall in love in a Paris cabaret that sells her nightly.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 10,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "paris",
   "cabaret",
   "poet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/Moulin_rouge_poster.jpg"
 },
 {
  "id": "romeo-juliet",
  "title": "Romeo + Juliet",
  "year": 1996,
  "director": "Baz Luhrmann",
  "genres": [
   "Romance",
   "Drama"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "Shakespeare's lovers in a neon Verona Beach of guns, shrines and pop songs.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 9,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "verona",
   "guns",
   "neon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b4/William_shakespeares_romeo_and_juliet_movie_poster.jpg"
 },
 {
  "id": "10-things-i-hate-about-you",
  "title": "10 Things I Hate About You",
  "year": 1999,
  "director": "Gil Junger",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 97,
  "rating": "PG-13",
  "description": "A scheme to date the undateable Kat backfires into actual feelings and a poem.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "scheme",
   "kat",
   "poem"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/10_Things_I_Hate_About_You_film.jpg"
 },
 {
  "id": "emma",
  "title": "Emma.",
  "year": 2020,
  "director": "Autumn de Wilde",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 124,
  "rating": "PG",
  "description": "Emma Woodhouse meddles in everyone's love life and misreads her own completely.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 8,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "austen",
   "meddle",
   "matchmaker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg"
 },
 {
  "id": "sense-and-sensibility",
  "title": "Sense and Sensibility",
  "year": 1995,
  "director": "Ang Lee",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 136,
  "rating": "PG",
  "description": "Two suddenly-poor sisters navigate love with sense, sensibility and very few options.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 8,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "austen",
   "sisters",
   "poor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/69/Sense_and_sensibility.jpg"
 },
 {
  "id": "before-sunset",
  "title": "Before Sunset",
  "year": 2004,
  "director": "Richard Linklater",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 80,
  "rating": "R",
  "description": "Jesse and Céline have one Paris afternoon, nine years after Vienna.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 9,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "paris",
   "reunion",
   "afternoon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Before_Sunset_poster.jpg"
 },
 {
  "id": "before-midnight",
  "title": "Before Midnight",
  "year": 2013,
  "director": "Richard Linklater",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 109,
  "rating": "R",
  "description": "Jesse and Céline, now parents, argue through a Greek night about everything they've built.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 9,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "greece",
   "parents",
   "argument"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/Before_Midnight_poster.jpg"
 },
 {
  "id": "chungking-express",
  "title": "Chungking Express",
  "year": 1994,
  "director": "Wong Kar-wai",
  "genres": [
   "Drama",
   "Romance",
   "Crime"
  ],
  "runtime": 102,
  "rating": "PG-13",
  "description": "Two lovesick Hong Kong cops, a snack bar, and a girl who breaks in to tidy a life.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "hongkong",
   "pineapple",
   "snackbar"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Chungking_Express.jpg"
 },
 {
  "id": "500-days-of-summer",
  "title": "(500) Days of Summer",
  "year": 2009,
  "director": "Marc Webb",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 95,
  "rating": "PG-13",
  "description": "Tom replays 500 nonlinear days to find where Summer stopped believing.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 8,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "nonlinear",
   "greetingcards",
   "summer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Five_hundred_days_of_summer.jpg"
 },
 {
  "id": "lost-in-translation",
  "title": "Lost in Translation",
  "year": 2003,
  "director": "Sofia Coppola",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 102,
  "rating": "R",
  "description": "A fading star and a neglected wife share insomnia and understanding in Tokyo.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 7,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "tokyo",
   "insomnia",
   "whisper"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/Lost_in_Translation_poster.jpg"
 },
 {
  "id": "midnight-in-paris",
  "title": "Midnight in Paris",
  "year": 2011,
  "director": "Woody Allen",
  "genres": [
   "Comedy",
   "Fantasy",
   "Romance"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "A screenwriter slips nightly into 1920s Paris to drink with Hemingway and Fitzgerald.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 5,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "paris",
   "1920s",
   "writers"
  ],
  "poster": ""
 },
 {
  "id": "blue-valentine",
  "title": "Blue Valentine",
  "year": 2010,
  "director": "Derek Cianfrance",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "A marriage's first spark and last weekend are cut together until they rhyme.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 9,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marriage",
   "spark",
   "weekend"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/04/Blue_Valentine_film.jpg"
 },
 {
  "id": "one-day",
  "title": "One Day",
  "year": 2011,
  "director": "Lone Scherfig",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 107,
  "rating": "PG-13",
  "description": "Emma and Dexter meet every July 15th for twenty years of almost.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "july15",
   "friends",
   "years"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ad/One_Day_Poster.jpg"
 },
 {
  "id": "me-before-you",
  "title": "Me Before You",
  "year": 2016,
  "director": "Thea Sharrock",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "A cheerful carer falls for the paralyzed man who has already chosen his ending.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 9,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "carer",
   "will",
   "choice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg"
 },
 {
  "id": "the-fault-in-our-stars",
  "title": "The Fault in Our Stars",
  "year": 2014,
  "director": "Josh Boone",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "Two teens with cancer trade a book, a wish and a trip to Amsterdam.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 6,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "cancer",
   "amsterdam",
   "book"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png"
 },
 {
  "id": "jerry-maguire",
  "title": "Jerry Maguire",
  "year": 1996,
  "director": "Cameron Crowe",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 139,
  "rating": "R",
  "description": "A fired sports agent keeps one client, one assistant and his mission statement.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "agent",
   "client",
   "mission"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Jerry_Maguire_movie_poster.jpg"
 },
 {
  "id": "as-good-as-it-gets",
  "title": "As Good as It Gets",
  "year": 1997,
  "director": "James L. Brooks",
  "genres": [
   "Comedy",
   "Drama",
   "Romance"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "A misanthropic novelist, a waitress and a gay artist heal each other's worst edges.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 6,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "novelist",
   "waitress",
   "dog"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/As_good_as_it_gets.jpg"
 },
 {
  "id": "moonstruck",
  "title": "Moonstruck",
  "year": 1987,
  "director": "Norman Jewison",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "An engaged widow falls for her fiancé's one-handed, opera-loving brother under a full moon.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 9,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "moon",
   "opera",
   "brother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7d/Chermoonstruck.jpg"
 },
 {
  "id": "while-you-were-sleeping",
  "title": "While You Were Sleeping",
  "year": 1995,
  "director": "Jon Turteltaub",
  "genres": [
   "Comedy",
   "Romance",
   "Drama"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "A token clerk saves her crush, is mistaken for his fiancée, and falls for his brother.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "coma",
   "fiancee",
   "brother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Whilesleepingposter.jpg"
 },
 {
  "id": "dirty-dancing",
  "title": "Dirty Dancing",
  "year": 1987,
  "director": "Emile Ardolino",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 100,
  "rating": "PG-13",
  "description": "Baby's Catskills summer ends in a corner nobody puts her in.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 9,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "catskills",
   "dance",
   "summer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Dirty_Dancing.jpg"
 },
 {
  "id": "ghost",
  "title": "Ghost",
  "year": 1990,
  "director": "Jerry Zucker",
  "genres": [
   "Drama",
   "Fantasy",
   "Romance",
   "Thriller"
  ],
  "runtime": 126,
  "rating": "PG-13",
  "description": "A murdered banker stays as a ghost to warn the love he left behind.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 2,
   "funny": 3,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "ghost",
   "pottery",
   "warning"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Ghost_%281990_movie_poster%29.jpg"
 },
 {
  "id": "an-affair-to-remember",
  "title": "An Affair to Remember",
  "year": 1957,
  "director": "Leo McCarey",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 115,
  "rating": "NR",
  "description": "Two engaged strangers fall in love on a liner and agree to meet in six months — if fate allows.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 9,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "liner",
   "empirestate",
   "promise"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/AffairtoRemember.jpg"
 },
 {
  "id": "the-bridges-of-madison-county",
  "title": "The Bridges of Madison County",
  "year": 1995,
  "director": "Clint Eastwood",
  "genres": [
   "Drama",
   "Romance"
  ],
  "runtime": 135,
  "rating": "PG-13",
  "description": "Four days between a photographer and an Iowa wife become a lifetime's secret.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 9,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "photographer",
   "iowa",
   "fourdays"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/The_Bridges_Of_Madison_County.jpg"
 },
 {
  "id": "gone-with-the-wind",
  "title": "Gone with the Wind",
  "year": 1939,
  "director": "Victor Fleming",
  "genres": [
   "Drama",
   "Romance",
   "War"
  ],
  "runtime": 221,
  "rating": "G",
  "description": "Scarlett O'Hara schemes, marries and survives as the South burns around Tara.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 8,
   "epic": 10,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "scarlett",
   "tara",
   "civilwar"
  ],
  "poster": ""
 },
 {
  "id": "carlito-s-way",
  "title": "Carlito's Way",
  "year": 1993,
  "director": "Brian De Palma",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 144,
  "rating": "R",
  "description": "Carlito Brigante swears he's out; the street, his lawyer and his past disagree.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 4,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "carlito",
   "out",
   "lawyer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Carlito%27s_Way.jpg"
 },
 {
  "id": "the-untouchables",
  "title": "The Untouchables",
  "year": 1987,
  "director": "Brian De Palma",
  "genres": [
   "Crime",
   "Drama",
   "Action"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "Eliot Ness assembles incorruptibles to bring down Capone's Chicago.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ness",
   "capone",
   "chicago"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/92/UntouchablesThe.jpg"
 },
 {
  "id": "once-upon-a-time-in-america",
  "title": "Once Upon a Time in America",
  "year": 1984,
  "director": "Sergio Leone",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 229,
  "rating": "R",
  "description": "Noodles looks back over fifty years of friendship, betrayal and opium dreams.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 3,
   "epic": 9,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "noodles",
   "friendship",
   "leone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Once_Upon_a_Time_in_America.png"
 },
 {
  "id": "american-history-x",
  "title": "American History X",
  "year": 1998,
  "director": "Tony Kaye",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 119,
  "rating": "R",
  "description": "A reformed skinhead races to stop his little brother repeating his violence.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "skinhead",
   "brother",
   "reform"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/39/American_History_X_poster.png"
 },
 {
  "id": "menace-ii-society",
  "title": "Menace II Society",
  "year": 1993,
  "director": "Albert Hughes",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "Caine tries to graduate out of Watts while every force around him pulls him under.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "watts",
   "caine",
   "graduation"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/Menace_II_Society.JPG"
 },
 {
  "id": "boyz-n-the-hood",
  "title": "Boyz n the Hood",
  "year": 1991,
  "director": "John Singleton",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Three friends grow up in South Central LA toward very different exits.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "southcentral",
   "friends",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Boyz_n_the_hood_poster.jpg"
 },
 {
  "id": "new-jack-city",
  "title": "New Jack City",
  "year": 1991,
  "director": "Mario Van Peebles",
  "genres": [
   "Crime",
   "Action",
   "Drama"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "Nino Brown builds a crack empire in a Harlem apartment block as cops close in.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "crack",
   "harlem",
   "nino"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e4/New_jack_city.jpg"
 },
 {
  "id": "juice",
  "title": "Juice",
  "year": 1992,
  "director": "Ernest R. Dickerson",
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "Four Harlem friends rob a store for respect; one of them keeps the gun and the power.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "harlem",
   "gun",
   "respect"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Juice_Poster.jpg"
 },
 {
  "id": "the-warriors",
  "title": "The Warriors",
  "year": 1979,
  "director": "Walter Hill",
  "genres": [
   "Action",
   "Crime",
   "Thriller"
  ],
  "runtime": 92,
  "rating": "R",
  "description": "A Coney Island gang must cross a hostile New York night to get home.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "gangs",
   "coney",
   "night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/TheWarriors_1979_Movie_Poster.jpg"
 },
 {
  "id": "escape-from-alcatraz",
  "title": "Escape from Alcatraz",
  "year": 1979,
  "director": "Don Siegel",
  "genres": [
   "Drama",
   "Thriller",
   "Crime"
  ],
  "runtime": 113,
  "rating": "PG",
  "description": "Frank Morris studies the Rock for years to attempt the escape no one survived.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "alcatraz",
   "escape",
   "morris"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Escape_from_alcatraz.jpg"
 },
 {
  "id": "papillon",
  "title": "Papillon",
  "year": 1973,
  "director": "Franklin J. Schaffner",
  "genres": [
   "Drama",
   "Crime",
   "Adventure"
  ],
  "runtime": 151,
  "rating": "R",
  "description": "Papillon and Dega endure Devil's Island and plan the impossible leap.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "devilsisland",
   "escape",
   "butterfly"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/23/Papillon_ver1.jpg"
 },
 {
  "id": "cool-hand-luke",
  "title": "Cool Hand Luke",
  "year": 1967,
  "director": "Stuart Rosenberg",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 127,
  "rating": "NR",
  "description": "Luke won't submit to the chain gang, and fifty eggs won't save him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "chaingang",
   "eggs",
   "rebel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Cool_Hand_Luke_Poster.jpg"
 },
 {
  "id": "bonnie-and-clyde",
  "title": "Bonnie and Clyde",
  "year": 1967,
  "director": "Arthur Penn",
  "genres": [
   "Crime",
   "Drama",
   "Romance"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Bonnie Parker and Clyde Barrow rob banks and become Depression folk heroes en route to an ambush.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 7,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "depression",
   "banks",
   "ambush"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Bonnie_and_Clyde_%281967_teaser_poster%29.jpg"
 },
 {
  "id": "the-french-connection",
  "title": "The French Connection",
  "year": 1971,
  "director": "William Friedkin",
  "genres": [
   "Crime",
   "Action",
   "Thriller"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "Popeye Doyle's obsession chases a heroin shipment under the Brooklyn elevated train.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "heroin",
   "doyle",
   "chase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/TheFrenchConnection.jpg"
 },
 {
  "id": "serpico",
  "title": "Serpico",
  "year": 1973,
  "director": "Sidney Lumet",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Frank Serpico refuses graft and becomes the NYPD's loneliest man.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "nypd",
   "graft",
   "whistleblower"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/Serpico_poster.jpg"
 },
 {
  "id": "dog-day-afternoon",
  "title": "Dog Day Afternoon",
  "year": 1975,
  "director": "Sidney Lumet",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "Sonny's bank robbery for his lover's surgery becomes a Brooklyn media circus.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 4,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bank",
   "hostages",
   "attica"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Dog_Day_Afternoon_film_poster.jpg"
 },
 {
  "id": "the-killing",
  "title": "The Killing",
  "year": 1956,
  "director": "Stanley Kubrick",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 85,
  "rating": "NR",
  "description": "A racetrack heist told in shuffled time, undone by one cheap suitcase.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "racetrack",
   "heist",
   "suitcase"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d6/TheKillingPosterKubrick.jpg"
 },
 {
  "id": "rififi",
  "title": "Rififi",
  "year": 1955,
  "director": "Jules Dassin",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 118,
  "rating": "NR",
  "description": "Four men rob a Paris jeweler in a famous half-hour of total silence.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "paris",
   "jeweler",
   "silence"
  ],
  "poster": ""
 },
 {
  "id": "bob-le-flambeur",
  "title": "Bob le flambeur",
  "year": 1956,
  "director": "Jean-Pierre Melville",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 98,
  "rating": "NR",
  "description": "An aging gambler's casino heist is betrayed by luck and loyalty in Montmartre.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "gambler",
   "montmartre",
   "heist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Bob_le_flambeur.jpg"
 },
 {
  "id": "le-samourai",
  "title": "Le Samouraï",
  "year": 1967,
  "director": "Jean-Pierre Melville",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 101,
  "rating": "NR",
  "description": "Hitman Jef Costello lives by a code the police and his employers both break.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "hitman",
   "code",
   "paris"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/28/LeSamourai.jpg"
 },
 {
  "id": "la-haine",
  "title": "La Haine",
  "year": 1995,
  "director": "Mathieu Kassovitz",
  "genres": [
   "Drama",
   "Crime"
  ],
  "runtime": 98,
  "rating": "NR",
  "description": "Three friends drift through a day after a riot in the Paris banlieues, falling, so far okay.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "paris",
   "riot",
   "falling"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/La_Haine_%281995_movie_poster%29.jpg"
 },
 {
  "id": "a-prophet",
  "title": "A Prophet",
  "year": 2009,
  "director": "Jacques Audiard",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 155,
  "rating": "R",
  "description": "A young Arab prisoner climbs the Corsican mob's ladder from inside a French jail.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "prison",
   "corsican",
   "climb"
  ],
  "poster": ""
 },
 {
  "id": "gomorrah",
  "title": "Gomorrah",
  "year": 2008,
  "director": "Matteo Garrone",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 137,
  "rating": "NR",
  "description": "Five stories inside Naples' Camorra, where crime is the whole economy.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "naples",
   "camorra",
   "economy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Gomorra_%282008_movie_poster%29.jpg"
 },
 {
  "id": "animal-kingdom",
  "title": "Animal Kingdom",
  "year": 2010,
  "director": "David Michôd",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 113,
  "rating": "R",
  "description": "A Melbourne teen is absorbed into his uncles' armed-robbery family and its matriarch.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "melbourne",
   "family",
   "matriarch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/40/Animal_kingdom_poster.jpg"
 },
 {
  "id": "sexy-beast",
  "title": "Sexy Beast",
  "year": 2000,
  "director": "Jonathan Glazer",
  "genres": [
   "Crime",
   "Thriller"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "Retired safecracker Gal is terrorized out of his Spanish villa by Don Logan's return.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 2,
   "funny": 3,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "safecracker",
   "spain",
   "donlogan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/90/Sexy_beast_ver1.jpg"
 },
 {
  "id": "kiss-kiss-bang-bang",
  "title": "Kiss Kiss Bang Bang",
  "year": 2005,
  "director": "Shane Black",
  "genres": [
   "Comedy",
   "Crime",
   "Mystery"
  ],
  "runtime": 103,
  "rating": "R",
  "description": "A thief posing as an actor shadows a real detective through an LA murder plot.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 8,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "actor",
   "detective",
   "narration"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/61/Kiss_kiss_bang_bang_poster.jpg"
 },
 {
  "id": "logan-lucky",
  "title": "Logan Lucky",
  "year": 2017,
  "director": "Steven Soderbergh",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 118,
  "rating": "PG-13",
  "description": "Two West Virginia brothers rob a NASCAR speedway with a one-armed safecracker.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "nascar",
   "heist",
   "brothers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Logan_Lucky.png"
 },
 {
  "id": "out-of-sight",
  "title": "Out of Sight",
  "year": 1998,
  "director": "Steven Soderbergh",
  "genres": [
   "Crime",
   "Romance",
   "Comedy"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "A bank robber and a federal marshal share a trunk, a siege and inconvenient chemistry.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 5,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 8,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "robber",
   "marshal",
   "trunk"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/49/Out_of_Sight_1998_film_poster.jpg"
 },
 {
  "id": "get-shorty",
  "title": "Get Shorty",
  "year": 1995,
  "director": "Barry Sonnenfeld",
  "genres": [
   "Comedy",
   "Crime"
  ],
  "runtime": 105,
  "rating": "R",
  "description": "Miami loan shark Chili Palmer discovers Hollywood is the same business with better weather.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 2,
   "dark": 4,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "hollywood",
   "loanshark",
   "chili"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/Get_shorty.jpg"
 },
 {
  "id": "jackie-brown",
  "title": "Jackie Brown",
  "year": 1997,
  "director": "Quentin Tarantino",
  "genres": [
   "Crime",
   "Drama",
   "Thriller"
  ],
  "runtime": 154,
  "rating": "R",
  "description": "A flight attendant plays cops and gunrunners against each other for one bag of money.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "flightattendant",
   "money",
   "tarantino"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png"
 },
 {
  "id": "the-limey",
  "title": "The Limey",
  "year": 1999,
  "director": "Steven Soderbergh",
  "genres": [
   "Crime",
   "Thriller",
   "Drama"
  ],
  "runtime": 89,
  "rating": "R",
  "description": "An English ex-con comes to LA to learn how his daughter died, in edits out of time.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "excon",
   "la",
   "daughter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Limeyposter.jpg"
 },
 {
  "id": "ghost-dog-the-way-of-the-samurai",
  "title": "Ghost Dog: The Way of the Samurai",
  "year": 1999,
  "director": "Jim Jarmusch",
  "genres": [
   "Crime",
   "Drama"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A hitman living by Hagakure serves a mobster who saved him, as the mob turns.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 3,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "hitman",
   "samurai",
   "pigeons"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a5/Ghost_Dog_film_poster.jpg"
 },
 {
  "id": "toy-story-2",
  "title": "Toy Story 2",
  "year": 1999,
  "director": "John Lasseter",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 92,
  "rating": "G",
  "description": "Woody is stolen by a collector and must choose between immortality and his kid.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "toys",
   "collector",
   "woody"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg"
 },
 {
  "id": "toy-story-4",
  "title": "Toy Story 4",
  "year": 2019,
  "director": "Josh Cooley",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 100,
  "rating": "G",
  "description": "Woody shepherds a spork who thinks he's trash toward the child who made him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 3,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "forky",
   "roadtrip",
   "antique"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg"
 },
 {
  "id": "finding-dory",
  "title": "Finding Dory",
  "year": 2016,
  "director": "Andrew Stanton",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "PG",
  "description": "Dory remembers a family and crosses the ocean — and an aquarium — to find them.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "dory",
   "family",
   "aquarium"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Finding_Dory.jpg"
 },
 {
  "id": "monsters-inc",
  "title": "Monsters, Inc.",
  "year": 2001,
  "director": "Pete Docter",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 92,
  "rating": "G",
  "description": "Two monster scarers accidentally let a human toddler into Monstropolis.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "monsters",
   "boo",
   "doors"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG"
 },
 {
  "id": "incredibles-2",
  "title": "Incredibles 2",
  "year": 2018,
  "director": "Brad Bird",
  "genres": [
   "Animation",
   "Family",
   "Action",
   "Adventure"
  ],
  "runtime": 118,
  "rating": "PG",
  "description": "Elastigirl goes solo while Mr. Incredible battles baby Jack-Jack's seventeen powers at home.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "family",
   "screenslaver",
   "jackjack"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1f/Incredibles_2_%282018_animated_film%29.jpg"
 },
 {
  "id": "brave",
  "title": "Brave",
  "year": 2012,
  "director": "Mark Andrews",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 93,
  "rating": "PG",
  "description": "A Scottish princess defies marriage tradition and turns her mother into a bear.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "scotland",
   "archery",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg"
 },
 {
  "id": "inside-out-2",
  "title": "Inside Out 2",
  "year": 2024,
  "director": "Kelsey Mann",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Drama"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "Riley turns thirteen and Anxiety storms headquarters to rebuild her sense of self.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "anxiety",
   "puberty",
   "hockey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
 },
 {
  "id": "onward",
  "title": "Onward",
  "year": 2020,
  "director": "Dan Scanlon",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "Two elf brothers get one day of magic to spend with the father they lost.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "elves",
   "quest",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg"
 },
 {
  "id": "luca",
  "title": "Luca",
  "year": 2021,
  "director": "Enrico Casarosa",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Comedy"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "Two sea-monster boys spend an Italian summer of gelato, Vespas and hiding.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "italy",
   "seamonster",
   "vespa"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png"
 },
 {
  "id": "turning-red",
  "title": "Turning Red",
  "year": 2022,
  "director": "Domee Shi",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "A Toronto teen turns into a giant red panda whenever she feels anything strongly.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "panda",
   "toronto",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg"
 },
 {
  "id": "elemental",
  "title": "Elemental",
  "year": 2023,
  "director": "Peter Sohn",
  "genres": [
   "Animation",
   "Family",
   "Romance",
   "Comedy"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "A fire girl and a water boy fall for each other in a city where elements don't mix.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 7,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "fire",
   "water",
   "city"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Elemental_final_poster.jpg"
 },
 {
  "id": "a-bug-s-life",
  "title": "A Bug's Life",
  "year": 1998,
  "director": "John Lasseter",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 95,
  "rating": "G",
  "description": "An inventor ant hires 'warrior' circus bugs to face down grasshopper bullies.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "ants",
   "circus",
   "grasshoppers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg"
 },
 {
  "id": "cars",
  "title": "Cars",
  "year": 2006,
  "director": "John Lasseter",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 116,
  "rating": "G",
  "description": "Hotshot Lightning McQueen gets stranded in Radiator Springs and learns to slow down.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "racing",
   "route66",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg"
 },
 {
  "id": "shrek-2",
  "title": "Shrek 2",
  "year": 2004,
  "director": "Andrew Adamson",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 93,
  "rating": "PG",
  "description": "Shrek meets Fiona's royal parents and a Fairy Godmother who wants him gone.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 3,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "farfaraway",
   "godmother",
   "puss"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg"
 },
 {
  "id": "puss-in-boots",
  "title": "Puss in Boots",
  "year": 2011,
  "director": "Chris Miller",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy"
  ],
  "runtime": 90,
  "rating": "PG",
  "description": "Puss teams with Kitty Softpaws and Humpty Dumpty to steal the golden goose.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "puss",
   "beans",
   "humpty"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Puss_in_Boots_%282011_animated_feature_film%29.jpg"
 },
 {
  "id": "how-to-train-your-dragon-2",
  "title": "How to Train Your Dragon 2",
  "year": 2014,
  "director": "Dean DeBlois",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "Hiccup finds his lost mother and faces a warlord building a dragon army.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "dragons",
   "mother",
   "warlord"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/How_to_Train_Your_Dragon_2_poster.jpg"
 },
 {
  "id": "kung-fu-panda-2",
  "title": "Kung Fu Panda 2",
  "year": 2011,
  "director": "Jennifer Yuh Nelson",
  "genres": [
   "Animation",
   "Family",
   "Action",
   "Comedy"
  ],
  "runtime": 90,
  "rating": "PG",
  "description": "Po faces a peacock's cannon and the truth about the night he lost his parents.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "panda",
   "peacock",
   "cannon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b1/Kung_Fu_Panda_2_Poster.jpg"
 },
 {
  "id": "madagascar",
  "title": "Madagascar",
  "year": 2005,
  "director": "Eric Darnell",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 86,
  "rating": "PG",
  "description": "Zoo animals escape to the wild and discover nature has no room service.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 1,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "zoo",
   "wild",
   "lemurs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Madagascar_Theatrical_Poster.jpg"
 },
 {
  "id": "megamind",
  "title": "Megamind",
  "year": 2010,
  "director": "Tom McGrath",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Action"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "A supervillain finally defeats his hero — and has an existential crisis about it.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 4,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "villain",
   "hero",
   "crisis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg"
 },
 {
  "id": "despicable-me",
  "title": "Despicable Me",
  "year": 2010,
  "director": "Pierre Coffin",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "Supervillain Gru plots to steal the moon and accidentally adopts three girls.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "gru",
   "minions",
   "moon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Despicable_Me_%282010_animated_feature_film%29.jpg"
 },
 {
  "id": "minions",
  "title": "Minions",
  "year": 2015,
  "director": "Kyle Balda",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "Three Minions cross 1960s America seeking a villain worth serving.",
  "vector": {
   "adrenaline": 5,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 1,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "minions",
   "sixties",
   "villaincon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/Minions_%282015_film%29.jpg"
 },
 {
  "id": "sing",
  "title": "Sing",
  "year": 2016,
  "director": "Garth Jennings",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Musical"
  ],
  "runtime": 108,
  "rating": "PG",
  "description": "A koala's last-chance singing contest draws every dreamer in the animal city.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "contest",
   "singing",
   "theater"
  ],
  "poster": ""
 },
 {
  "id": "the-bad-guys",
  "title": "The Bad Guys",
  "year": 2022,
  "director": "Pierre Perifel",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Crime"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "A crew of animal criminals pretends to go good and accidentally means it.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "heist",
   "animals",
   "good"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/The_Bad_Guys_poster.jpeg"
 },
 {
  "id": "dog-man",
  "title": "Dog Man",
  "year": 2025,
  "director": "Peter Hastings",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Action"
  ],
  "runtime": 89,
  "rating": "PG",
  "description": "A cop and his dog become one Dog Man, facing the evil cat Petey and his clone kitten.",
  "vector": {
   "adrenaline": 6,
   "brainy": 2,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 1,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "dogman",
   "petey",
   "clone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Dog_Man_film_poster.jpg"
 },
 {
  "id": "the-wild-robot",
  "title": "The Wild Robot",
  "year": 2024,
  "director": "Chris Sanders",
  "genres": [
   "Animation",
   "Family",
   "Drama",
   "Sci-Fi"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A shipwrecked robot raises an orphaned gosling and rewrites the island's rules.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 0,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "robot",
   "gosling",
   "island"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/70/The_Wild_Robot_poster.jpg"
 },
 {
  "id": "flow",
  "title": "Flow",
  "year": 2024,
  "director": "Gints Zilbalodis",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 85,
  "rating": "PG",
  "description": "A cat survives a great flood aboard a boat of animals, without a word of dialogue.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 1,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "flood",
   "cat",
   "boat"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Flow_movie_poster.jpg"
 },
 {
  "id": "snow-white-and-the-seven-dwarfs",
  "title": "Snow White and the Seven Dwarfs",
  "year": 1937,
  "director": "David Hand",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 83,
  "rating": "G",
  "description": "A princess flees her jealous stepmother to a cottage of seven miners.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 5,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "princess",
   "apple",
   "dwarfs"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/56/Snow_White_and_the_Seven_Dwarfs_%28Style_B%29_poster.jpg"
 },
 {
  "id": "pinocchio",
  "title": "Pinocchio",
  "year": 1940,
  "director": "Ben Sharpsteen",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 88,
  "rating": "G",
  "description": "A wooden puppet must prove himself brave, truthful and unselfish to become real.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 2,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "puppet",
   "conscience",
   "whale"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/ba/Pinocchio-1940-poster.jpg"
 },
 {
  "id": "fantasia",
  "title": "Fantasia",
  "year": 1940,
  "director": "James Algar",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 126,
  "rating": "G",
  "description": "Classical music becomes flying horses, dancing hippos and a sorcerer's apprentice.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 4,
   "heartwarming": 4,
   "dark": 3,
   "romantic": 0,
   "epic": 7,
   "cozy": 2,
   "weird": 4
  },
  "keywords": [
   "classical",
   "apprentice",
   "ballet"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Fantasia1940.jpg"
 },
 {
  "id": "bambi",
  "title": "Bambi",
  "year": 1942,
  "director": "David Hand",
  "genres": [
   "Animation",
   "Family",
   "Drama"
  ],
  "runtime": 70,
  "rating": "G",
  "description": "A fawn grows up through seasons of wonder, fire and loss in the forest.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "fawn",
   "forest",
   "seasons"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Walt_Disney%27s_Bambi_poster.jpg"
 },
 {
  "id": "cinderella",
  "title": "Cinderella",
  "year": 1950,
  "director": "Clyde Geronimi",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Romance"
  ],
  "runtime": 74,
  "rating": "G",
  "description": "A kind servant girl gets one magical night to escape her stepfamily.",
  "vector": {
   "adrenaline": 2,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 8,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "ball",
   "slipper",
   "stepmother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/1/1d/1950_is_the_Cinderella_year.jpg"
 },
 {
  "id": "peter-pan",
  "title": "Peter Pan",
  "year": 1953,
  "director": "Clyde Geronimi",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 77,
  "rating": "G",
  "description": "Peter whisks the Darling children to Never Land, pirates and a ticking crocodile.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "neverland",
   "pirates",
   "flight"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Peter_Pan_%281953_poster%29.jpg"
 },
 {
  "id": "sleeping-beauty",
  "title": "Sleeping Beauty",
  "year": 1959,
  "director": "Clyde Geronimi",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Romance"
  ],
  "runtime": 75,
  "rating": "G",
  "description": "Three fairies hide a cursed princess until a dragon must be faced.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 8,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "curse",
   "fairies",
   "dragon"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Sleeping_Beauty_%281959_poster_-_Style_A%29.jpg"
 },
 {
  "id": "the-jungle-book",
  "title": "The Jungle Book",
  "year": 1967,
  "director": "Wolfgang Reitherman",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Musical"
  ],
  "runtime": 78,
  "rating": "G",
  "description": "Mowgli the man-cub is walked to the village by a panther and a very relaxed bear.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 1,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "mowgli",
   "jungle",
   "bear"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/Thejunglebook_movieposter.jpg"
 },
 {
  "id": "the-little-mermaid",
  "title": "The Little Mermaid",
  "year": 1989,
  "director": "Ron Clements",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 83,
  "rating": "G",
  "description": "A mermaid trades her voice for legs and three days to win a prince.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 8,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "mermaid",
   "voice",
   "sea"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/The_Little_Mermaid_%28Official_1989_Film_Poster%29.png"
 },
 {
  "id": "mulan",
  "title": "Mulan",
  "year": 1998,
  "director": "Tony Bancroft",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Musical",
   "Action"
  ],
  "runtime": 88,
  "rating": "G",
  "description": "Mulan takes her father's armor and place in the army to face the Huns.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "china",
   "army",
   "honor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a3/Movie_poster_mulan.JPG"
 },
 {
  "id": "tarzan",
  "title": "Tarzan",
  "year": 1999,
  "director": "Kevin Lima",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Romance"
  ],
  "runtime": 88,
  "rating": "G",
  "description": "A man raised by gorillas meets Jane and must choose between two worlds.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 7,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "jungle",
   "gorillas",
   "jane"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Tarzan_%281999_film%29_-_theatrical_poster.jpg"
 },
 {
  "id": "lilo-stitch",
  "title": "Lilo & Stitch",
  "year": 2002,
  "director": "Chris Sanders",
  "genres": [
   "Animation",
   "Family",
   "Sci-Fi",
   "Comedy"
  ],
  "runtime": 85,
  "rating": "PG",
  "description": "A lonely Hawaiian girl adopts a chaotic alien and teaches him ohana.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 7,
   "heartwarming": 9,
   "dark": 3,
   "romantic": 1,
   "epic": 4,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "hawaii",
   "alien",
   "ohana"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c6/LiloandStitchmovieposter.jpg"
 },
 {
  "id": "bolt",
  "title": "Bolt",
  "year": 2008,
  "director": "Byron Howard",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "A TV dog who believes his powers are real crosses America to find his girl.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "dog",
   "tv",
   "roadtrip"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Bolt_ver2.jpg"
 },
 {
  "id": "the-princess-and-the-frog",
  "title": "The Princess and the Frog",
  "year": 2009,
  "director": "Ron Clements",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 97,
  "rating": "G",
  "description": "A New Orleans waitress kisses a frog prince and becomes one herself.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 1,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 7,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "neworleans",
   "frog",
   "jazz"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/81/The_Princess_and_the_Frog_poster.jpg"
 },
 {
  "id": "tangled",
  "title": "Tangled",
  "year": 2010,
  "director": "Nathan Greno",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "Rapunzel leaves her tower with a thief to see the floating lanterns.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "tower",
   "lanterns",
   "thief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg"
 },
 {
  "id": "wreck-it-ralph",
  "title": "Wreck-It Ralph",
  "year": 2012,
  "director": "Rich Moore",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "An arcade villain game-hops to win a medal and prove he's not the bad guy.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "arcade",
   "villain",
   "racing"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Wreckitralphposter.jpeg"
 },
 {
  "id": "frozen",
  "title": "Frozen",
  "year": 2013,
  "director": "Chris Buck",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "Anna crosses an eternal winter to reach her sister Elsa, whose fear froze the kingdom.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 5,
   "epic": 6,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "sisters",
   "ice",
   "anna"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg"
 },
 {
  "id": "big-hero-6",
  "title": "Big Hero 6",
  "year": 2014,
  "director": "Don Hall",
  "genres": [
   "Animation",
   "Family",
   "Action",
   "Sci-Fi"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A teen prodigy and an inflatable healthcare robot form a hero team to avenge his brother.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "baymax",
   "team",
   "brother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Big_Hero_6_%28film%29_poster.jpg"
 },
 {
  "id": "zootopia",
  "title": "Zootopia",
  "year": 2016,
  "director": "Byron Howard",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Mystery"
  ],
  "runtime": 108,
  "rating": "PG",
  "description": "A bunny cop and a fox con artist crack a case of vanishing predators.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "bunny",
   "fox",
   "city"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"
 },
 {
  "id": "moana",
  "title": "Moana",
  "year": 2016,
  "director": "Ron Clements",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Musical",
   "Fantasy"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "Moana sails beyond the reef with Maui to return the heart of Te Fiti.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 2,
   "epic": 8,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "ocean",
   "maui",
   "voyage"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg"
 },
 {
  "id": "frozen-ii",
  "title": "Frozen II",
  "year": 2019,
  "director": "Chris Buck",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical",
   "Adventure"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "Elsa follows a voice into an enchanted forest hiding her family's past.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "forest",
   "voice",
   "sequel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg"
 },
 {
  "id": "raya-and-the-last-dragon",
  "title": "Raya and the Last Dragon",
  "year": 2021,
  "director": "Don Hall",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Action",
   "Adventure"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "Raya hunts the last dragon's gem shards across a divided Kumandra.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "dragon",
   "shards",
   "trust"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Raya_and_the_Last_Dragon.png"
 },
 {
  "id": "encanto",
  "title": "Encanto",
  "year": 2021,
  "director": "Jared Bush",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "The one ungifted Madrigal may be the key when the family's miracle starts cracking.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 1,
   "funny": 6,
   "heartwarming": 8,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "family",
   "miracle",
   "colombia"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg"
 },
 {
  "id": "wish",
  "title": "Wish",
  "year": 2023,
  "director": "Chris Buck",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 95,
  "rating": "PG",
  "description": "Asha wishes on a star against a king who hoards his people's hopes.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "star",
   "wishes",
   "king"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/WishMoviePoster.jpg"
 },
 {
  "id": "moana-2",
  "title": "Moana 2",
  "year": 2024,
  "director": "David G. Derrick Jr.",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Musical"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "Moana answers her ancestors' call to sail to the far seas of Oceania.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 8,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "ocean",
   "ancestors",
   "sequel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg"
 },
 {
  "id": "zootopia-2",
  "title": "Zootopia 2",
  "year": 2025,
  "director": "Jared Bush",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Mystery"
  ],
  "runtime": 108,
  "rating": "PG",
  "description": "Judy and Nick go undercover as a mysterious snake rattles Zootopia's reptile past.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "snake",
   "undercover",
   "partners"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Zootopia_2_%282025_film%29.jpg"
 },
 {
  "id": "kiki-s-delivery-service",
  "title": "Kiki's Delivery Service",
  "year": 1989,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 103,
  "rating": "G",
  "description": "A young witch starts a flying delivery service and loses her magic to self-doubt.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "witch",
   "delivery",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg"
 },
 {
  "id": "howl-s-moving-castle",
  "title": "Howl's Moving Castle",
  "year": 2004,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Romance"
  ],
  "runtime": 119,
  "rating": "PG",
  "description": "A cursed milliner joins a vain wizard's walking castle as war closes in.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 7,
   "epic": 7,
   "cozy": 2,
   "weird": 2
  },
  "keywords": [
   "castle",
   "curse",
   "wizard"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg"
 },
 {
  "id": "ponyo",
  "title": "Ponyo",
  "year": 2008,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 101,
  "rating": "G",
  "description": "A goldfish princess wants to be human and unbalances the sea for a boy named Sosuke.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 2,
   "epic": 5,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "goldfish",
   "sea",
   "boy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/51/Ponyo.png"
 },
 {
  "id": "the-tale-of-the-princess-kaguya",
  "title": "The Tale of the Princess Kaguya",
  "year": 2013,
  "director": "Isao Takahata",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Drama"
  ],
  "runtime": 137,
  "rating": "PG",
  "description": "A bamboo cutter's moon daughter grows too fast for the court that claims her.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "moon",
   "bamboo",
   "court"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg"
 },
 {
  "id": "the-boy-and-the-heron",
  "title": "The Boy and the Heron",
  "year": 2023,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "runtime": 124,
  "rating": "PG-13",
  "description": "A grieving boy follows a grey heron into a world between life and death.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "heron",
   "grief",
   "worlds"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg"
 },
 {
  "id": "grave-of-the-fireflies",
  "title": "Grave of the Fireflies",
  "year": 1988,
  "director": "Isao Takahata",
  "genres": [
   "Animation",
   "Drama",
   "War"
  ],
  "runtime": 89,
  "rating": "NR",
  "description": "Two children try to survive the firebombing of Kobe on their own.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 6,
   "dark": 10,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "kobe",
   "siblings",
   "fireflies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg"
 },
 {
  "id": "porco-rosso",
  "title": "Porco Rosso",
  "year": 1992,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Romance"
  ],
  "runtime": 94,
  "rating": "PG",
  "description": "A pig-faced seaplane pilot hunts air pirates over the 1930s Adriatic.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 5,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "pilot",
   "adriatic",
   "pig"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg"
 },
 {
  "id": "nausicaa-of-the-valley-of-the-wind",
  "title": "Nausicaä of the Valley of the Wind",
  "year": 1984,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Sci-Fi",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 117,
  "rating": "PG",
  "description": "A princess of a toxic-forest valley seeks peace between warring kingdoms and giant insects.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "forest",
   "princess",
   "insects"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg"
 },
 {
  "id": "castle-in-the-sky",
  "title": "Castle in the Sky",
  "year": 1986,
  "director": "Hayao Miyazaki",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 124,
  "rating": "PG",
  "description": "A boy and a girl with a levitation stone race pirates and soldiers to floating Laputa.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 3,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "laputa",
   "stone",
   "pirates"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png"
 },
 {
  "id": "a-silent-voice",
  "title": "A Silent Voice",
  "year": 2016,
  "director": "Naoko Yamada",
  "genres": [
   "Animation",
   "Drama",
   "Romance"
  ],
  "runtime": 130,
  "rating": "NR",
  "description": "A former bully seeks redemption from the deaf girl he tormented in elementary school.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 7,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "deaf",
   "redemption",
   "bully"
  ],
  "poster": ""
 },
 {
  "id": "paprika",
  "title": "Paprika",
  "year": 2006,
  "director": "Satoshi Kon",
  "genres": [
   "Animation",
   "Sci-Fi",
   "Thriller"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "A dream-therapy device is stolen and reality melts into a parade of dreams.",
  "vector": {
   "adrenaline": 5,
   "brainy": 9,
   "scary": 2,
   "funny": 3,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 6
  },
  "keywords": [
   "dreams",
   "device",
   "parade"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Paprikaposter.jpg"
 },
 {
  "id": "perfect-blue",
  "title": "Perfect Blue",
  "year": 1997,
  "director": "Satoshi Kon",
  "genres": [
   "Animation",
   "Thriller",
   "Horror",
   "Drama"
  ],
  "runtime": 81,
  "rating": "R",
  "description": "A pop idol turned actress loses the line between herself, her roles and her stalker.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 5,
   "funny": 0,
   "heartwarming": 0,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "idol",
   "stalker",
   "identity"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Perfectblueposter.png"
 },
 {
  "id": "suzume",
  "title": "Suzume",
  "year": 2022,
  "director": "Makoto Shinkai",
  "genres": [
   "Animation",
   "Fantasy",
   "Adventure",
   "Romance"
  ],
  "runtime": 122,
  "rating": "PG",
  "description": "A teen helps a stranger close doors across Japan that let disasters through.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 7,
   "epic": 7,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "doors",
   "japan",
   "chair"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/Suzume_no_Tojimari_poster.jpg"
 },
 {
  "id": "coraline",
  "title": "Coraline",
  "year": 2009,
  "director": "Henry Selick",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Horror"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "Coraline finds a door to an Other Mother who wants to sew buttons over her eyes.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 6,
   "funny": 3,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 4,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "door",
   "buttons",
   "mother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg"
 },
 {
  "id": "paranorman",
  "title": "ParaNorman",
  "year": 2012,
  "director": "Sam Fell",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Horror"
  ],
  "runtime": 92,
  "rating": "PG",
  "description": "A boy who talks to ghosts must lift a witch's curse his town created.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 4,
   "funny": 6,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "ghosts",
   "witch",
   "town"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/ParaNorman_poster.jpg"
 },
 {
  "id": "kubo-and-the-two-strings",
  "title": "Kubo and the Two Strings",
  "year": 2016,
  "director": "Travis Knight",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "A one-eyed storyteller quests for his father's armor with a monkey and a beetle.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "origami",
   "quest",
   "armor"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c4/Kubo_and_the_Two_Strings_poster.png"
 },
 {
  "id": "the-nightmare-before-christmas",
  "title": "The Nightmare Before Christmas",
  "year": 1993,
  "director": "Henry Selick",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical"
  ],
  "runtime": 76,
  "rating": "PG",
  "description": "Halloween's king kidnaps Christmas and delivers nightmare presents to the world.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 2,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "halloween",
   "christmas",
   "jack"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9a/The_nightmare_before_christmas_poster.jpg"
 },
 {
  "id": "corpse-bride",
  "title": "Corpse Bride",
  "year": 2005,
  "director": "Tim Burton",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 77,
  "rating": "PG",
  "description": "A nervous groom accidentally marries a corpse bride in the land of the dead.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 2,
   "funny": 5,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 8,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "bride",
   "dead",
   "vows"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/Corpse_Bride_film_poster.jpg"
 },
 {
  "id": "chicken-run",
  "title": "Chicken Run",
  "year": 2000,
  "director": "Peter Lord",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 84,
  "rating": "G",
  "description": "Chickens plot a great escape before their farm becomes a pie factory.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "chickens",
   "escape",
   "pies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Chicken_run_ver1.jpg"
 },
 {
  "id": "wallace-gromit-the-curse-of-the-were-rabbit",
  "title": "Wallace & Gromit: The Curse of the Were-Rabbit",
  "year": 2005,
  "director": "Nick Park",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 85,
  "rating": "G",
  "description": "Wallace's pest-control business faces a giant vegetable-eating rabbit before the big show.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 1,
   "funny": 8,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "rabbit",
   "vegetables",
   "contest"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/Wallace_gromit_were_rabbit_poster.jpg"
 },
 {
  "id": "shaun-the-sheep-movie",
  "title": "Shaun the Sheep Movie",
  "year": 2015,
  "director": "Mark Burton",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 85,
  "rating": "PG",
  "description": "Shaun leads the flock to the big city to rescue their amnesiac farmer.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "sheep",
   "city",
   "farmer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Shaun_the_Sheep_MoviePoster.jpg"
 },
 {
  "id": "klaus",
  "title": "Klaus",
  "year": 2019,
  "director": "Sergio Pablos",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "A selfish postman and a reclusive toymaker accidentally invent Christmas kindness.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 9,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "postman",
   "toymaker",
   "christmas"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Klaus_poster.jpeg"
 },
 {
  "id": "guillermo-del-toro-s-pinocchio",
  "title": "Guillermo del Toro's Pinocchio",
  "year": 2022,
  "director": "Guillermo del Toro",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Drama",
   "Musical"
  ],
  "runtime": 117,
  "rating": "PG",
  "description": "Pinocchio in fascist Italy: a wooden boy who cannot die in a world of death.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 2,
   "funny": 3,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "pinocchio",
   "italy",
   "fascist"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Pinocchio_%282022_animated_film%29.jpg"
 },
 {
  "id": "wendell-wild",
  "title": "Wendell & Wild",
  "year": 2022,
  "director": "Henry Selick",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Horror",
   "Fantasy"
  ],
  "runtime": 105,
  "rating": "PG-13",
  "description": "A grieving girl summons two demon brothers who dream of building an underworld fair.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 3,
   "funny": 6,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 1,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "demons",
   "fair",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Wendell_%26_Wild_poster.jpg"
 },
 {
  "id": "the-lego-batman-movie",
  "title": "The Lego Batman Movie",
  "year": 2017,
  "director": "Chris McKay",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Action"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "Lego Batman must learn teamwork and family to save Gotham from every villain at once.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "batman",
   "lego",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/61/The_Lego_Batman_Movie_PromotionalPoster.jpg"
 },
 {
  "id": "the-mitchells-vs-the-machines",
  "title": "The Mitchells vs. the Machines",
  "year": 2021,
  "director": "Mike Rianda",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Sci-Fi",
   "Adventure"
  ],
  "runtime": 113,
  "rating": "PG",
  "description": "A film-geek teen's family road trip collides with a robot apocalypse.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "robots",
   "roadtrip",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/MitchellsMachinesPoster.jpg"
 },
 {
  "id": "ron-s-gone-wrong",
  "title": "Ron's Gone Wrong",
  "year": 2021,
  "director": "Sarah Smith",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "A boy's defective B*Bot can't follow social algorithms — which makes him a real friend.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "robot",
   "friendship",
   "glitch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a5/Ron%27s_Gone_Wrong_%282021%29_poster.jpg"
 },
 {
  "id": "nimona",
  "title": "Nimona",
  "year": 2023,
  "director": "Nick Bruno",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Action",
   "Comedy"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A framed knight teams with a shapeshifting teen chaos agent to clear his name.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 2,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "shapeshifter",
   "knight",
   "chaos"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Nimona_poster.png"
 },
 {
  "id": "leo",
  "title": "Leo",
  "year": 2023,
  "director": "Robert Marianetti",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Musical"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A 74-year-old class lizard escapes to see the world and becomes every kid's therapist.",
  "vector": {
   "adrenaline": 3,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "lizard",
   "class",
   "advice"
  ],
  "poster": ""
 },
 {
  "id": "the-sea-beast",
  "title": "The Sea Beast",
  "year": 2022,
  "director": "Chris Williams",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Action"
  ],
  "runtime": 115,
  "rating": "PG",
  "description": "A legendary monster hunter and a stowaway girl question the war on sea beasts.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 1,
   "funny": 4,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "sea",
   "hunter",
   "stowaway"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/The_Sea_Beast_film_poster.png"
 },
 {
  "id": "transformers-one",
  "title": "Transformers One",
  "year": 2024,
  "director": "Josh Cooley",
  "genres": [
   "Animation",
   "Sci-Fi",
   "Action",
   "Adventure"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "Orion Pax and D-16 go from brother miners to Optimus Prime and Megatron.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "cybertron",
   "brothers",
   "origin"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Transformers_One_Official_Poster.jpg"
 },
 {
  "id": "teenage-mutant-ninja-turtles-mutant-mayhem",
  "title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
  "year": 2023,
  "director": "Jeff Rowe",
  "genres": [
   "Animation",
   "Family",
   "Action",
   "Comedy"
  ],
  "runtime": 99,
  "rating": "PG",
  "description": "The turtles just want to be accepted as normal teens in New York.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "turtles",
   "teens",
   "mutants"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Teenage_Mutant_Ninja_Turtles_-_Mutant_Mayhem.jpg"
 },
 {
  "id": "the-super-mario-bros-movie",
  "title": "The Super Mario Bros. Movie",
  "year": 2023,
  "director": "Aaron Horvath",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 92,
  "rating": "PG",
  "description": "Two Brooklyn plumbers are warped to the Mushroom Kingdom as Bowser plans a wedding.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 3,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "mario",
   "bowser",
   "kingdom"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
 },
 {
  "id": "migration",
  "title": "Migration",
  "year": 2023,
  "director": "Benjamin Renner",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy"
  ],
  "runtime": 83,
  "rating": "PG",
  "description": "A cautious duck dad is dragged into the family's first migration to Jamaica.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 1,
   "funny": 6,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "ducks",
   "migration",
   "jamaica"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Migration_%282023_film%29.jpg"
 },
 {
  "id": "batman-mask-of-the-phantasm",
  "title": "Batman: Mask of the Phantasm",
  "year": 1993,
  "director": "Eric Radomski",
  "genres": [
   "Animation",
   "Action",
   "Crime",
   "Mystery"
  ],
  "runtime": 76,
  "rating": "PG",
  "description": "A new killer frames Batman while his lost love returns to Gotham.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 6,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "batman",
   "phantasm",
   "love"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Batman_mask_of_the_phantasm_poster.jpg"
 },
 {
  "id": "the-prince-of-egypt",
  "title": "The Prince of Egypt",
  "year": 1998,
  "director": "Brenda Chapman",
  "genres": [
   "Animation",
   "Family",
   "Drama",
   "Musical"
  ],
  "runtime": 99,
  "rating": "PG",
  "description": "Moses grows up a prince beside Ramses, then leads his people out of Egypt.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 2,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "moses",
   "egypt",
   "exodus"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/Prince_of_egypt_ver2.jpg"
 },
 {
  "id": "the-road-to-el-dorado",
  "title": "The Road to El Dorado",
  "year": 2000,
  "director": "Bibo Bergeron",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Musical"
  ],
  "runtime": 89,
  "rating": "PG",
  "description": "Two con men with a map accidentally become gods in the city of gold.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "gold",
   "conmen",
   "gods"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/fa/Road_to_el_dorado_ver3.jpg"
 },
 {
  "id": "antz",
  "title": "Antz",
  "year": 1998,
  "director": "Eric Darnell",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Adventure"
  ],
  "runtime": 83,
  "rating": "PG",
  "description": "A neurotic worker ant swaps places with a soldier and starts a revolution.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "ants",
   "worker",
   "colony"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/Antz-Poster.jpg"
 },
 {
  "id": "bee-movie",
  "title": "Bee Movie",
  "year": 2007,
  "director": "Simon J. Smith",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "A bee sues humanity for stealing honey and accidentally dooms the world's flowers.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 3,
   "dark": 2,
   "romantic": 3,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "bee",
   "lawsuit",
   "honey"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/Bee_Movie_%282007_animated_feature_film%29.jpg"
 },
 {
  "id": "happy-feet",
  "title": "Happy Feet",
  "year": 2006,
  "director": "George Miller",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Musical",
   "Romance"
  ],
  "runtime": 108,
  "rating": "PG",
  "description": "A penguin who can't sing can tap-dance his way to changing the colony.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 4,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "penguin",
   "dance",
   "colony"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Happy_Feet_Poster.jpg"
 },
 {
  "id": "cloudy-with-a-chance-of-meatballs",
  "title": "Cloudy with a Chance of Meatballs",
  "year": 2009,
  "director": "Phil Lord",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Sci-Fi"
  ],
  "runtime": 90,
  "rating": "PG",
  "description": "An inventor's machine makes food rain — until the portions get dangerous.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 8,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 2,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "food",
   "inventor",
   "storm"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Cloudy_with_a_chance_of_meatballs_theataposter.jpg"
 },
 {
  "id": "hotel-transylvania",
  "title": "Hotel Transylvania",
  "year": 2012,
  "director": "Genndy Tartakovsky",
  "genres": [
   "Animation",
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "Dracula's monster hotel is crashed by a human backpacker who falls for his daughter.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 1,
   "funny": 8,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "dracula",
   "hotel",
   "backpacker"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/HotelTransylvania.jpg"
 },
 {
  "id": "the-croods",
  "title": "The Croods",
  "year": 2013,
  "director": "Kirk DeMicco",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 98,
  "rating": "PG",
  "description": "A caveman family must follow a stranger's fire when their cave is destroyed.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 1,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "cave",
   "family",
   "fire"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/63/The_Croods.png"
 },
 {
  "id": "rio",
  "title": "Rio",
  "year": 2011,
  "director": "Carlos Saldanha",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy",
   "Musical",
   "Romance"
  ],
  "runtime": 96,
  "rating": "G",
  "description": "A domesticated macaw who never learned to fly is shipped to Rio to save his species.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 6,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "macaw",
   "rio",
   "fly"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/Rio2011Poster.jpg"
 },
 {
  "id": "ice-age",
  "title": "Ice Age",
  "year": 2002,
  "director": "Chris Wedge",
  "genres": [
   "Animation",
   "Family",
   "Adventure",
   "Comedy"
  ],
  "runtime": 81,
  "rating": "PG",
  "description": "A mammoth, a sloth and a saber-tooth return a human baby across the ice.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 1,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "mammoth",
   "baby",
   "ice"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3c/Ice_Age_%282002_film%29_poster.jpg"
 },
 {
  "id": "robots",
  "title": "Robots",
  "year": 2005,
  "director": "Chris Wedge",
  "genres": [
   "Animation",
   "Family",
   "Sci-Fi",
   "Comedy",
   "Adventure"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "A young inventor robot travels to Robot City to meet his hero and fight a takeover.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "robots",
   "inventor",
   "city"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/Robots2005Poster.jpg"
 },
 {
  "id": "song-of-the-sea",
  "title": "Song of the Sea",
  "year": 2014,
  "director": "Tomm Moore",
  "genres": [
   "Animation",
   "Family",
   "Fantasy"
  ],
  "runtime": 93,
  "rating": "PG",
  "description": "A mute girl is a selkie whose song can free the fairy world her brother fears.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 3,
   "weird": 2
  },
  "keywords": [
   "selkie",
   "song",
   "brother"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Song_of_the_Sea_%282014_film%29_poster.jpg"
 },
 {
  "id": "wolfwalkers",
  "title": "Wolfwalkers",
  "year": 2020,
  "director": "Tomm Moore",
  "genres": [
   "Animation",
   "Family",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 103,
  "rating": "PG",
  "description": "A hunter's daughter befriends a girl who becomes a wolf when she sleeps.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "wolves",
   "ireland",
   "hunter"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Wolfwalkers.png"
 },
 {
  "id": "the-breadwinner",
  "title": "The Breadwinner",
  "year": 2017,
  "director": "Nora Twomey",
  "genres": [
   "Animation",
   "Drama",
   "Family",
   "War"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "An Afghan girl cuts her hair to work and feed her family under the Taliban.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "afghanistan",
   "girl",
   "taliban"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/The_Breadwinner_%28film%29_poster.jpg"
 },
 {
  "id": "persepolis",
  "title": "Persepolis",
  "year": 2007,
  "director": "Marjane Satrapi",
  "genres": [
   "Animation",
   "Drama"
  ],
  "runtime": 96,
  "rating": "PG-13",
  "description": "Marjane grows up through Iran's revolution, war and exile in black and white.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "iran",
   "exile",
   "memoir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/Persepolis_film.jpg"
 },
 {
  "id": "i-lost-my-body",
  "title": "I Lost My Body",
  "year": 2019,
  "director": "Jérémy Clapin",
  "genres": [
   "Animation",
   "Drama",
   "Fantasy",
   "Romance"
  ],
  "runtime": 81,
  "rating": "TV-MA",
  "description": "A severed hand crosses Paris to find its body, remembering the life it lost.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 5,
   "epic": 4,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "hand",
   "paris",
   "body"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e1/I_Lost_My_Body.jpg"
 },
 {
  "id": "flee",
  "title": "Flee",
  "year": 2021,
  "director": "Jonas Poher Rasmussen",
  "genres": [
   "Animation",
   "Documentary",
   "Drama"
  ],
  "runtime": 86,
  "rating": "R",
  "description": "An Afghan refugee tells his hidden story for the first time, animated to protect him.",
  "vector": {
   "adrenaline": 2,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "refugee",
   "afghanistan",
   "secret"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/de/Flee_%28film%29.jpg"
 },
 {
  "id": "robot-dreams",
  "title": "Robot Dreams",
  "year": 2023,
  "director": "Pablo Berger",
  "genres": [
   "Animation",
   "Drama",
   "Comedy",
   "Family"
  ],
  "runtime": 102,
  "rating": "NR",
  "description": "A lonely dog builds a robot friend in 1980s New York; a beach day separates them.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 5,
   "romantic": 1,
   "epic": 3,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "dog",
   "robot",
   "beach"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ac/Robot_Dreams_%28film%29_poster.jpg"
 },
 {
  "id": "memoir-of-a-snail",
  "title": "Memoir of a Snail",
  "year": 2024,
  "director": "Adam Elliot",
  "genres": [
   "Animation",
   "Drama"
  ],
  "runtime": 94,
  "rating": "R",
  "description": "A lonely hoarder of snails recounts a life of loss with stubborn, dark humor.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "snails",
   "hoarder",
   "memoir"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/06/Memoir_of_a_Snail_poster.jpg"
 },
 {
  "id": "look-back",
  "title": "Look Back",
  "year": 2024,
  "director": "Kiyotaka Oshiyama",
  "genres": [
   "Animation",
   "Drama"
  ],
  "runtime": 58,
  "rating": "NR",
  "description": "Two girls bond over manga — one loud, one a shut-in — until art and grief collide.",
  "vector": {
   "adrenaline": 2,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 1,
   "epic": 2,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "manga",
   "girls",
   "grief"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/eb/Look_Back_%28%E3%83%AB%E3%83%83%E3%82%AF%E3%83%90%E3%83%83%E3%82%AF%2C_2024%29_film_poster.jpg"
 },
 {
  "id": "anomalisa",
  "title": "Anomalisa",
  "year": 2015,
  "director": "Charlie Kaufman",
  "genres": [
   "Animation",
   "Drama",
   "Romance"
  ],
  "runtime": 90,
  "rating": "R",
  "description": "A customer-service guru hears everyone in the same voice — until one woman sounds different.",
  "vector": {
   "adrenaline": 2,
   "brainy": 8,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 5,
   "epic": 2,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "voice",
   "hotel",
   "lonely"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Anomalisa_poster.jpg"
 },
 {
  "id": "loving-vincent",
  "title": "Loving Vincent",
  "year": 2017,
  "director": "Dorota Kobiela",
  "genres": [
   "Animation",
   "Drama",
   "Mystery"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "Van Gogh's death investigated in a film painted entirely in his style.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 2,
   "epic": 4,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "vangogh",
   "painted",
   "death"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Loving_Vincent.png"
 },
 {
  "id": "arthur-christmas",
  "title": "Arthur Christmas",
  "year": 2011,
  "director": "Sarah Smith",
  "genres": [
   "Animation",
   "Family",
   "Comedy"
  ],
  "runtime": 97,
  "rating": "PG",
  "description": "Santa's clumsy son Arthur races to deliver one forgotten present before dawn.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 8,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 4,
   "weird": 0
  },
  "keywords": [
   "santa",
   "present",
   "arthur"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Arthur_Christmas_Poster.jpg"
 },
 {
  "id": "marcel-the-shell-with-shoes-on",
  "title": "Marcel the Shell with Shoes On",
  "year": 2021,
  "director": "Dean Fleischer Camp",
  "genres": [
   "Animation",
   "Comedy",
   "Drama",
   "Family"
  ],
  "runtime": 90,
  "rating": "PG",
  "description": "A tiny shell with shoes searches for his family through a documentarian's lens.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 0,
   "epic": 2,
   "cozy": 4,
   "weird": 3
  },
  "keywords": [
   "shell",
   "documentary",
   "family"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d4/Marcel_the_Shell_with_Shoes_On_%282021_film%29.jpg"
 },
 {
  "id": "harry-potter-and-the-chamber-of-secrets",
  "title": "Harry Potter and the Chamber of Secrets",
  "year": 2002,
  "director": "Chris Columbus",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 161,
  "rating": "PG",
  "description": "A monster petrifies students and a diary remembers Tom Riddle.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "hogwarts",
   "diary",
   "basilisk"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg"
 },
 {
  "id": "harry-potter-and-the-prisoner-of-azkaban",
  "title": "Harry Potter and the Prisoner of Azkaban",
  "year": 2004,
  "director": "Alfonso Cuarón",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 142,
  "rating": "PG",
  "description": "An escaped prisoner hunts Harry while Dementors circle Hogwarts.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 3,
   "funny": 3,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "azkaban",
   "dementors",
   "sirius"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Harry_Potter_and_the_Prisoner_of_Azkaban_film_poster.jpg"
 },
 {
  "id": "harry-potter-and-the-goblet-of-fire",
  "title": "Harry Potter and the Goblet of Fire",
  "year": 2005,
  "director": "Mike Newell",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 157,
  "rating": "PG-13",
  "description": "Harry is entered into a deadly tournament as Voldemort quietly returns.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "tournament",
   "voldemort",
   "tasks"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg"
 },
 {
  "id": "harry-potter-and-the-order-of-the-phoenix",
  "title": "Harry Potter and the Order of the Phoenix",
  "year": 2007,
  "director": "David Yates",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 138,
  "rating": "PG-13",
  "description": "Harry teaches secret defense lessons while the Ministry denies the war.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "army",
   "ministry",
   "umbridge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg"
 },
 {
  "id": "harry-potter-and-the-half-blood-prince",
  "title": "Harry Potter and the Half-Blood Prince",
  "year": 2009,
  "director": "David Yates",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 153,
  "rating": "PG",
  "description": "A potions book's margin notes and a memory hunt expose Voldemort's horcruxes.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 2,
   "funny": 3,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 3,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "horcruxes",
   "potions",
   "memory"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg"
 },
 {
  "id": "harry-potter-and-the-deathly-hallows-part-1",
  "title": "Harry Potter and the Deathly Hallows: Part 1",
  "year": 2010,
  "director": "David Yates",
  "genres": [
   "Fantasy",
   "Adventure"
  ],
  "runtime": 146,
  "rating": "PG-13",
  "description": "Harry, Ron and Hermione hunt horcruxes on the run as the wizarding world falls.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "horcruxes",
   "run",
   "tent"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg"
 },
 {
  "id": "harry-potter-and-the-deathly-hallows-part-2",
  "title": "Harry Potter and the Deathly Hallows: Part 2",
  "year": 2011,
  "director": "David Yates",
  "genres": [
   "Fantasy",
   "Adventure"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "The Battle of Hogwarts settles everything in fire, courage and sacrifice.",
  "vector": {
   "adrenaline": 9,
   "brainy": 5,
   "scary": 1,
   "funny": 2,
   "heartwarming": 6,
   "dark": 7,
   "romantic": 2,
   "epic": 9,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "battle",
   "hogwarts",
   "finale"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg"
 },
 {
  "id": "fantastic-beasts-and-where-to-find-them",
  "title": "Fantastic Beasts and Where to Find Them",
  "year": 2016,
  "director": "David Yates",
  "genres": [
   "Fantasy",
   "Adventure",
   "Family"
  ],
  "runtime": 132,
  "rating": "PG-13",
  "description": "Newt Scamander's suitcase of creatures escapes into 1926 New York.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "newt",
   "creatures",
   "1926"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/FBAWTFT-poster.jpg"
 },
 {
  "id": "the-hobbit-an-unexpected-journey",
  "title": "The Hobbit: An Unexpected Journey",
  "year": 2012,
  "director": "Peter Jackson",
  "genres": [
   "Fantasy",
   "Adventure"
  ],
  "runtime": 169,
  "rating": "PG-13",
  "description": "Bilbo is swept from his pantry into a quest for the Lonely Mountain's gold.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 8,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "bilbo",
   "dwarves",
   "mountain"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg"
 },
 {
  "id": "willow",
  "title": "Willow",
  "year": 1988,
  "director": "Ron Howard",
  "genres": [
   "Fantasy",
   "Adventure",
   "Family"
  ],
  "runtime": 126,
  "rating": "PG",
  "description": "A farmer must protect a prophesied baby from an evil queen's armies.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 3,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "baby",
   "prophecy",
   "sorcery"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Willow_movie.jpg"
 },
 {
  "id": "the-dark-crystal",
  "title": "The Dark Crystal",
  "year": 1982,
  "director": "Jim Henson",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 93,
  "rating": "PG",
  "description": "A Gelfling seeks the shard that can heal the crystal before the planets align.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 2,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 3
  },
  "keywords": [
   "gelfling",
   "crystal",
   "skeksis"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/77/The_Dark_Crystal_Film_Poster.jpg"
 },
 {
  "id": "excalibur",
  "title": "Excalibur",
  "year": 1981,
  "director": "John Boorman",
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "runtime": 140,
  "rating": "R",
  "description": "Arthur's rise and ruin told in gleaming armor, lust and betrayal.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 4,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "arthur",
   "sword",
   "merlin"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Excalibur_movie_poster.jpg"
 },
 {
  "id": "conan-the-barbarian",
  "title": "Conan the Barbarian",
  "year": 1982,
  "director": "John Milius",
  "genres": [
   "Fantasy",
   "Action",
   "Adventure"
  ],
  "runtime": 129,
  "rating": "R",
  "description": "Conan's lifelong vengeance against the snake cult that enslaved him.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "conan",
   "snake",
   "vengeance"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Conan_movie_psoter.jpg"
 },
 {
  "id": "highlander",
  "title": "Highlander",
  "year": 1986,
  "director": "Russell Mulcahy",
  "genres": [
   "Fantasy",
   "Action"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "Immortals duel through centuries because there can be only one.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "immortals",
   "duels",
   "queen"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Highlander_1986%2Cposter.jpg"
 },
 {
  "id": "stardust",
  "title": "Stardust",
  "year": 2007,
  "director": "Matthew Vaughn",
  "genres": [
   "Fantasy",
   "Adventure",
   "Romance",
   "Comedy"
  ],
  "runtime": 127,
  "rating": "PG-13",
  "description": "A young man crosses the wall to fetch a fallen star who turns out to be a woman.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 8,
   "epic": 6,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "star",
   "wall",
   "witches"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/Stardust_promo_poster.jpg"
 },
 {
  "id": "the-chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe",
  "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
  "year": 2005,
  "director": "Andrew Adamson",
  "genres": [
   "Fantasy",
   "Family",
   "Adventure"
  ],
  "runtime": 143,
  "rating": "PG",
  "description": "Four siblings step through a wardrobe into a Narnia frozen by the White Witch.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 1,
   "epic": 7,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "narnia",
   "wardrobe",
   "aslan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg"
 },
 {
  "id": "bridge-to-terabithia",
  "title": "Bridge to Terabithia",
  "year": 2007,
  "director": "Gabor Csupo",
  "genres": [
   "Drama",
   "Family",
   "Fantasy"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "Two lonely kids build an imaginary kingdom that helps one survive losing the other.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 6,
   "romantic": 0,
   "epic": 3,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "kingdom",
   "friendship",
   "loss"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Bridgetoterabithiaposter.jpg"
 },
 {
  "id": "where-the-wild-things-are",
  "title": "Where the Wild Things Are",
  "year": 2009,
  "director": "Spike Jonze",
  "genres": [
   "Fantasy",
   "Drama",
   "Family",
   "Adventure"
  ],
  "runtime": 101,
  "rating": "PG",
  "description": "Max sails to an island of wild things and becomes king of his own tantrum.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 3,
   "heartwarming": 6,
   "dark": 5,
   "romantic": 0,
   "epic": 5,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "wildthings",
   "island",
   "max"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Wherethewildthingsare.jpg"
 },
 {
  "id": "hugo",
  "title": "Hugo",
  "year": 2011,
  "director": "Martin Scorsese",
  "genres": [
   "Adventure",
   "Drama",
   "Family",
   "Fantasy"
  ],
  "runtime": 126,
  "rating": "PG",
  "description": "An orphan in a Paris station unlocks the automaton his father left behind.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "station",
   "automaton",
   "melies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/73/Hugo_Poster.jpg"
 },
 {
  "id": "life-of-pi",
  "title": "Life of Pi",
  "year": 2012,
  "director": "Ang Lee",
  "genres": [
   "Adventure",
   "Drama",
   "Fantasy"
  ],
  "runtime": 127,
  "rating": "PG",
  "description": "A boy survives 227 days on a lifeboat with a Bengal tiger named Richard Parker.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 5,
   "dark": 6,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "tiger",
   "lifeboat",
   "ocean"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg"
 },
 {
  "id": "the-jungle-book-2016",
  "title": "The Jungle Book",
  "year": 2016,
  "director": "Jon Favreau",
  "genres": [
   "Adventure",
   "Family",
   "Fantasy",
   "Drama"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "Mowgli flees Shere Khan through a photoreal jungle of friends and threats.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 2,
   "funny": 4,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "mowgli",
   "jungle",
   "khan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Jungle_Book_%282016%29.jpg"
 },
 {
  "id": "christopher-robin",
  "title": "Christopher Robin",
  "year": 2018,
  "director": "Marc Forster",
  "genres": [
   "Comedy",
   "Drama",
   "Family",
   "Fantasy"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "A work-crushed Christopher Robin is rescued by Pooh and the Hundred Acre Wood.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 1,
   "epic": 3,
   "cozy": 5,
   "weird": 0
  },
  "keywords": [
   "pooh",
   "work",
   "wood"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png"
 },
 {
  "id": "dungeons-dragons-honor-among-thieves",
  "title": "Dungeons & Dragons: Honor Among Thieves",
  "year": 2023,
  "director": "John Francis Daley",
  "genres": [
   "Fantasy",
   "Adventure",
   "Action",
   "Comedy"
  ],
  "runtime": 134,
  "rating": "PG-13",
  "description": "A bard's heist crew of misfits tries to resurrect a wife and rob a forge lord.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 1,
   "epic": 7,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "heist",
   "bard",
   "misfits"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg"
 },
 {
  "id": "the-northman",
  "title": "The Northman",
  "year": 2022,
  "director": "Robert Eggers",
  "genres": [
   "Action",
   "Drama",
   "Adventure"
  ],
  "runtime": 137,
  "rating": "R",
  "description": "A Viking prince's revenge saga unfolds in mud, blood and prophecy.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 1,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "viking",
   "revenge",
   "prophecy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Northman.png"
 },
 {
  "id": "big-fish",
  "title": "Big Fish",
  "year": 2003,
  "director": "Tim Burton",
  "genres": [
   "Fantasy",
   "Drama",
   "Adventure"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "A son sorts his dying father's tall tales for the true story inside them.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 5,
   "epic": 6,
   "cozy": 1,
   "weird": 3
  },
  "keywords": [
   "tales",
   "father",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Big_Fish_movie_poster.png"
 },
 {
  "id": "the-curious-case-of-benjamin-button",
  "title": "The Curious Case of Benjamin Button",
  "year": 2008,
  "director": "David Fincher",
  "genres": [
   "Drama",
   "Fantasy",
   "Romance"
  ],
  "runtime": 166,
  "rating": "PG-13",
  "description": "Benjamin ages backward through a century while Daisy ages the normal way toward him.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 8,
   "epic": 7,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "aging",
   "backward",
   "daisy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/The_Curious_Case_of_Benjamin_Button_%28film%29.png"
 },
 {
  "id": "the-fall",
  "title": "The Fall",
  "year": 2006,
  "director": "Tarsem Singh",
  "genres": [
   "Fantasy",
   "Adventure",
   "Drama"
  ],
  "runtime": 117,
  "rating": "R",
  "description": "A stuntman tells a wounded girl an epic tale, bargaining for morphine with every chapter.",
  "vector": {
   "adrenaline": 4,
   "brainy": 7,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 4
  },
  "keywords": [
   "tale",
   "stuntman",
   "hospital"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Fall_ver2.jpg"
 },
 {
  "id": "mary-poppins",
  "title": "Mary Poppins",
  "year": 1964,
  "director": "Robert Stevenson",
  "genres": [
   "Family",
   "Fantasy",
   "Musical",
   "Comedy"
  ],
  "runtime": 139,
  "rating": "G",
  "description": "A practically perfect nanny drops into the Banks household with a bottomless bag.",
  "vector": {
   "adrenaline": 3,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 1,
   "romantic": 1,
   "epic": 4,
   "cozy": 4,
   "weird": 1
  },
  "keywords": [
   "nanny",
   "london",
   "spoonful"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/78/Marypoppins.jpg"
 },
 {
  "id": "willy-wonka-the-chocolate-factory",
  "title": "Willy Wonka & the Chocolate Factory",
  "year": 1971,
  "director": "Mel Stuart",
  "genres": [
   "Family",
   "Fantasy",
   "Musical",
   "Comedy"
  ],
  "runtime": 100,
  "rating": "G",
  "description": "Five golden tickets open Wonka's factory, where bad children meet sticky ends.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 1,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 1,
   "epic": 5,
   "cozy": 2,
   "weird": 3
  },
  "keywords": [
   "chocolate",
   "tickets",
   "wonka"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/WillyWonkaMoviePoster.jpg"
 },
 {
  "id": "matilda",
  "title": "Matilda",
  "year": 1996,
  "director": "Danny DeVito",
  "genres": [
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 102,
  "rating": "PG",
  "description": "A bookish girl with cruel parents discovers telekinesis and one kind teacher.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 0,
   "epic": 3,
   "cozy": 3,
   "weird": 1
  },
  "keywords": [
   "books",
   "trunchbull",
   "powers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b7/Matildaposter.jpg"
 },
 {
  "id": "the-witches",
  "title": "The Witches",
  "year": 1990,
  "director": "Nicolas Roeg",
  "genres": [
   "Family",
   "Fantasy",
   "Horror",
   "Comedy"
  ],
  "runtime": 91,
  "rating": "PG",
  "description": "A boy overhears the Grand High Witch's plan to turn England's children into mice.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 5,
   "funny": 5,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 3,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "witches",
   "mice",
   "hotel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Witches_%281990_film%29.png"
 },
 {
  "id": "hocus-pocus",
  "title": "Hocus Pocus",
  "year": 1993,
  "director": "Kenny Ortega",
  "genres": [
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 96,
  "rating": "PG",
  "description": "Three Salem witches are resurrected on Halloween and hunt the town's children.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 2,
   "funny": 7,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 1,
   "epic": 3,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "salem",
   "witches",
   "halloween"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c9/Hocuspocusposter.jpg"
 },
 {
  "id": "casper",
  "title": "Casper",
  "year": 1995,
  "director": "Brad Silberling",
  "genres": [
   "Family",
   "Comedy",
   "Fantasy"
  ],
  "runtime": 100,
  "rating": "PG",
  "description": "A friendly ghost befriends the daughter of an afterlife therapist in a haunted mansion.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 2,
   "funny": 6,
   "heartwarming": 6,
   "dark": 4,
   "romantic": 2,
   "epic": 3,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "ghost",
   "mansion",
   "friendship"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7f/Casper_poster.jpg"
 },
 {
  "id": "jumanji",
  "title": "Jumanji",
  "year": 1995,
  "director": "Joe Johnston",
  "genres": [
   "Family",
   "Adventure",
   "Fantasy",
   "Comedy"
  ],
  "runtime": 104,
  "rating": "PG",
  "description": "A board game releases jungle chaos into a New Hampshire town for 26 years.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 2,
   "funny": 6,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "boardgame",
   "jungle",
   "chaos"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"
 },
 {
  "id": "jumanji-welcome-to-the-jungle",
  "title": "Jumanji: Welcome to the Jungle",
  "year": 2017,
  "director": "Jake Kasdan",
  "genres": [
   "Adventure",
   "Comedy",
   "Action",
   "Fantasy"
  ],
  "runtime": 119,
  "rating": "PG-13",
  "description": "Four teens are sucked into a video game as avatars nothing like themselves.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 8,
   "heartwarming": 4,
   "dark": 2,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 1
  },
  "keywords": [
   "videogame",
   "avatars",
   "teens"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png"
 },
 {
  "id": "night-at-the-museum",
  "title": "Night at the Museum",
  "year": 2006,
  "director": "Shawn Levy",
  "genres": [
   "Family",
   "Comedy",
   "Fantasy",
   "Adventure"
  ],
  "runtime": 108,
  "rating": "PG",
  "description": "A night guard learns the museum's exhibits all come alive after closing.",
  "vector": {
   "adrenaline": 6,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 0,
   "epic": 5,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "museum",
   "night",
   "exhibits"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Night_at_the_Museum_poster.jpg"
 },
 {
  "id": "the-mummy",
  "title": "The Mummy",
  "year": 1999,
  "director": "Stephen Sommers",
  "genres": [
   "Adventure",
   "Action",
   "Horror",
   "Fantasy"
  ],
  "runtime": 125,
  "rating": "PG-13",
  "description": "Treasure hunters wake Imhotep, whose love and plagues span 3,000 years.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 3,
   "funny": 5,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 4,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "egypt",
   "imhotep",
   "treasure"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/The_mummy.jpg"
 },
 {
  "id": "the-mummy-returns",
  "title": "The Mummy Returns",
  "year": 2001,
  "director": "Stephen Sommers",
  "genres": [
   "Adventure",
   "Action",
   "Fantasy"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "Imhotep and the Scorpion King race the O'Connells to an oasis of undead armies.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 2,
   "funny": 4,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "scorpionking",
   "oasis",
   "sequel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg"
 },
 {
  "id": "national-treasure",
  "title": "National Treasure",
  "year": 2004,
  "director": "Jon Turteltaub",
  "genres": [
   "Adventure",
   "Action",
   "Mystery",
   "Family"
  ],
  "runtime": 131,
  "rating": "PG",
  "description": "A historian steals the Declaration of Independence to keep a Templar treasure from thieves.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "declaration",
   "treasure",
   "history"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Movie_national_treasure.JPG"
 },
 {
  "id": "the-da-vinci-code",
  "title": "The Da Vinci Code",
  "year": 2006,
  "director": "Ron Howard",
  "genres": [
   "Mystery",
   "Thriller"
  ],
  "runtime": 149,
  "rating": "PG-13",
  "description": "A symbologist follows clues through Europe's art toward a explosive secret.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 1,
   "funny": 1,
   "heartwarming": 1,
   "dark": 5,
   "romantic": 2,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "clues",
   "louvre",
   "grail"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/The_da_vinci_code_final.jpg"
 },
 {
  "id": "romancing-the-stone",
  "title": "Romancing the Stone",
  "year": 1984,
  "director": "Robert Zemeckis",
  "genres": [
   "Adventure",
   "Romance",
   "Comedy",
   "Action"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "A romance novelist lives her own plot in Colombia with a soldier of fortune.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 3,
   "romantic": 7,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "colombia",
   "novelist",
   "gem"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/84/Romancing_the_stone.jpg"
 },
 {
  "id": "the-goonies",
  "title": "The Goonies",
  "year": 1985,
  "director": "Richard Donner",
  "genres": [
   "Adventure",
   "Comedy",
   "Family"
  ],
  "runtime": 114,
  "rating": "PG",
  "description": "Kids follow a pirate map under their town to save their homes from foreclosure.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 1,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "pirate",
   "map",
   "kids"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Goonies.jpg"
 },
 {
  "id": "indiana-jones-and-the-temple-of-doom",
  "title": "Indiana Jones and the Temple of Doom",
  "year": 1984,
  "director": "Steven Spielberg",
  "genres": [
   "Adventure",
   "Action"
  ],
  "runtime": 118,
  "rating": "PG",
  "description": "Indy falls into a Thuggee cult's mine of horrors with a singer and a kid sidekick.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 3,
   "funny": 4,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "cult",
   "mine",
   "indy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Indiana_Jones_and_the_Temple_of_Doom_PosterB.jpg"
 },
 {
  "id": "indiana-jones-and-the-kingdom-of-the-crystal-skull",
  "title": "Indiana Jones and the Kingdom of the Crystal Skull",
  "year": 2008,
  "director": "Steven Spielberg",
  "genres": [
   "Adventure",
   "Action"
  ],
  "runtime": 122,
  "rating": "PG-13",
  "description": "An older Indy races Soviets to a crystal skull in the Amazon and meets his son.",
  "vector": {
   "adrenaline": 7,
   "brainy": 3,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "skull",
   "amazon",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/Kingdomofthecrystalskull.jpg"
 },
 {
  "id": "indiana-jones-and-the-dial-of-destiny",
  "title": "Indiana Jones and the Dial of Destiny",
  "year": 2023,
  "director": "James Mangold",
  "genres": [
   "Adventure",
   "Action"
  ],
  "runtime": 154,
  "rating": "PG-13",
  "description": "Indy's last ride chases Archimedes' dial through 1969 and time itself.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 2,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "dial",
   "1969",
   "finale"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg"
 },
 {
  "id": "pirates-of-the-caribbean-the-curse-of-the-black-pearl",
  "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
  "year": 2003,
  "director": "Gore Verbinski",
  "genres": [
   "Adventure",
   "Action",
   "Fantasy"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Jack Sparrow, a blacksmith and a cursed crew chase Aztec gold under moonlight.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 3,
   "dark": 4,
   "romantic": 3,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "pirates",
   "curse",
   "sparrow"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png"
 },
 {
  "id": "pirates-of-the-caribbean-dead-man-s-chest",
  "title": "Pirates of the Caribbean: Dead Man's Chest",
  "year": 2006,
  "director": "Gore Verbinski",
  "genres": [
   "Adventure",
   "Action",
   "Fantasy"
  ],
  "runtime": 151,
  "rating": "PG-13",
  "description": "Davy Jones comes to collect Jack's soul as everyone hunts his dead heart.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 1,
   "funny": 6,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "davyjones",
   "kraken",
   "heart"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2d/Pirates_of_the_caribbean_2_poster_b.jpg"
 },
 {
  "id": "pirates-of-the-caribbean-at-world-s-end",
  "title": "Pirates of the Caribbean: At World's End",
  "year": 2007,
  "director": "Gore Verbinski",
  "genres": [
   "Adventure",
   "Action",
   "Fantasy"
  ],
  "runtime": 169,
  "rating": "PG-13",
  "description": "The pirate lords gather for a final stand as the seas themselves are chained.",
  "vector": {
   "adrenaline": 8,
   "brainy": 3,
   "scary": 0,
   "funny": 4,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 4,
   "epic": 9,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "lords",
   "calypso",
   "stand"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/Pirates_AWE_Poster.jpg"
 },
 {
  "id": "master-and-commander-the-far-side-of-the-world",
  "title": "Master and Commander: The Far Side of the World",
  "year": 2003,
  "director": "Peter Weir",
  "genres": [
   "Adventure",
   "Drama",
   "War",
   "Action"
  ],
  "runtime": 138,
  "rating": "PG-13",
  "description": "Captain Aubrey hunts a French frigate around South America in 1805.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "navy",
   "frigate",
   "1805"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bf/Master_and_Commander-The_Far_Side_of_the_World_poster.png"
 },
 {
  "id": "the-count-of-monte-cristo",
  "title": "The Count of Monte Cristo",
  "year": 2002,
  "director": "Kevin Reynolds",
  "genres": [
   "Adventure",
   "Drama",
   "Action"
  ],
  "runtime": 131,
  "rating": "PG-13",
  "description": "Betrayed Dantès escapes prison and returns as a count with a patient revenge.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 6,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "prison",
   "revenge",
   "count"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bb/The_Count_of_Monte_Cristo_film.jpg"
 },
 {
  "id": "the-mask-of-zorro",
  "title": "The Mask of Zorro",
  "year": 1998,
  "director": "Martin Campbell",
  "genres": [
   "Action",
   "Adventure",
   "Romance",
   "Western"
  ],
  "runtime": 136,
  "rating": "PG-13",
  "description": "An aging Zorro trains a thief to inherit the mask and free California.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 4,
   "dark": 4,
   "romantic": 7,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "zorro",
   "mask",
   "california"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Mask_of_zorro.jpg"
 },
 {
  "id": "hook",
  "title": "Hook",
  "year": 1991,
  "director": "Steven Spielberg",
  "genres": [
   "Adventure",
   "Family",
   "Fantasy"
  ],
  "runtime": 142,
  "rating": "PG",
  "description": "Workaholic Peter Banning must remember being Peter Pan to rescue his kids.",
  "vector": {
   "adrenaline": 6,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 6,
   "dark": 3,
   "romantic": 1,
   "epic": 6,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "neverland",
   "peter",
   "kids"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/Hook_poster_transparent.png"
 },
 {
  "id": "finding-neverland",
  "title": "Finding Neverland",
  "year": 2004,
  "director": "Marc Forster",
  "genres": [
   "Drama",
   "Family",
   "Fantasy"
  ],
  "runtime": 106,
  "rating": "PG",
  "description": "J.M. Barrie finds Peter Pan in a widow's four sons and his own refusal to grow up.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 4,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "barrie",
   "peterpan",
   "widow"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Findingneverlandposter.jpg"
 },
 {
  "id": "robin-hood-prince-of-thieves",
  "title": "Robin Hood: Prince of Thieves",
  "year": 1991,
  "director": "Kevin Reynolds",
  "genres": [
   "Adventure",
   "Action",
   "Drama",
   "Romance"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Robin returns from the Crusades to rob the Sheriff of Nottingham's tyranny.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 6,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "robin",
   "sherwood",
   "sheriff"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4f/Robin_hood_1991.jpg"
 },
 {
  "id": "the-last-of-the-mohicans",
  "title": "The Last of the Mohicans",
  "year": 1992,
  "director": "Michael Mann",
  "genres": [
   "Adventure",
   "Drama",
   "Romance",
   "War",
   "Action"
  ],
  "runtime": 112,
  "rating": "R",
  "description": "Hawkeye escorts a colonel's daughters through the French and Indian War's ambushes.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 7,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "hawkeye",
   "frontier",
   "ambush"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dd/Mohicansposter.jpg"
 },
 {
  "id": "dances-with-wolves",
  "title": "Dances with Wolves",
  "year": 1990,
  "director": "Kevin Costner",
  "genres": [
   "Western",
   "Drama",
   "Adventure"
  ],
  "runtime": 181,
  "rating": "PG-13",
  "description": "A Union officer is adopted by the Lakota and torn between two vanishing worlds.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 3,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "lakota",
   "frontier",
   "wolves"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Dances_with_Wolves_poster.jpg"
 },
 {
  "id": "the-patriot",
  "title": "The Patriot",
  "year": 2000,
  "director": "Roland Emmerich",
  "genres": [
   "Action",
   "Drama",
   "War"
  ],
  "runtime": 165,
  "rating": "R",
  "description": "A pacifist farmer is dragged into the Revolution by British cruelty.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 2,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "revolution",
   "farmer",
   "british"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/68/Patriot_promo_poster.jpg"
 },
 {
  "id": "3-10-to-yuma",
  "title": "3:10 to Yuma",
  "year": 2007,
  "director": "James Mangold",
  "genres": [
   "Western",
   "Action",
   "Drama"
  ],
  "runtime": 122,
  "rating": "R",
  "description": "A broke rancher escorts outlaw Ben Wade to the prison train as his gang closes in.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "train",
   "outlaw",
   "rancher"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/310_to_Yuma_%282007_film%29.jpg"
 },
 {
  "id": "the-assassination-of-jesse-james-by-the-coward-robert-ford",
  "title": "The Assassination of Jesse James by the Coward Robert Ford",
  "year": 2007,
  "director": "Andrew Dominik",
  "genres": [
   "Western",
   "Drama",
   "Crime"
  ],
  "runtime": 160,
  "rating": "R",
  "description": "Robert Ford worships Jesse James, joins his gang, and history records the rest.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "jessejames",
   "ford",
   "worship"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Assassination_poster.jpg"
 },
 {
  "id": "hostiles",
  "title": "Hostiles",
  "year": 2017,
  "director": "Scott Cooper",
  "genres": [
   "Western",
   "Drama",
   "Adventure"
  ],
  "runtime": 134,
  "rating": "R",
  "description": "A cavalry captain must escort his Cheyenne nemesis home through 1892's hatred.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "escort",
   "cheyenne",
   "1892"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Hostiles_film_poster.jpg"
 },
 {
  "id": "old-henry",
  "title": "Old Henry",
  "year": 2021,
  "director": "Potsy Ponciroli",
  "genres": [
   "Western",
   "Thriller"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A quiet widower farmer shelters a wounded man with a satchel of cash — and a past.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "farmer",
   "satchel",
   "past"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6b/Old_Henry_%28film%29.jpg"
 },
 {
  "id": "tombstone",
  "title": "Tombstone",
  "year": 1993,
  "director": "George P. Cosmatos",
  "genres": [
   "Western",
   "Action",
   "Drama"
  ],
  "runtime": 130,
  "rating": "R",
  "description": "Wyatt Earp and Doc Holliday face the Cowboys at the O.K. Corral and beyond.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "earp",
   "holliday",
   "corral"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/71/Tombstoneposter.jpeg"
 },
 {
  "id": "a-fistful-of-dollars",
  "title": "A Fistful of Dollars",
  "year": 1964,
  "director": "Sergio Leone",
  "genres": [
   "Western"
  ],
  "runtime": 99,
  "rating": "R",
  "description": "A nameless drifter plays two feuding families in a dusty border town.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "drifter",
   "families",
   "leone"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/Fistful-of-Dollars-poster.jpg"
 },
 {
  "id": "for-a-few-dollars-more",
  "title": "For a Few Dollars More",
  "year": 1965,
  "director": "Sergio Leone",
  "genres": [
   "Western"
  ],
  "runtime": 132,
  "rating": "R",
  "description": "Two bounty hunters circle the same psychotic bandit and his prison-break loot.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 0,
   "funny": 2,
   "heartwarming": 0,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bounty",
   "bandit",
   "watch"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/For_a_Few_Dollars_More-ita-poster.jpg"
 },
 {
  "id": "the-wild-bunch",
  "title": "The Wild Bunch",
  "year": 1969,
  "director": "Sam Peckinpah",
  "genres": [
   "Western",
   "Action"
  ],
  "runtime": 145,
  "rating": "R",
  "description": "Aging outlaws take one last Mexican job as the West dies around them.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "outlaws",
   "mexico",
   "lastjob"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/05/The_Wild_Bunch.JPG"
 },
 {
  "id": "the-magnificent-seven",
  "title": "The Magnificent Seven",
  "year": 1960,
  "director": "John Sturges",
  "genres": [
   "Western",
   "Action",
   "Adventure"
  ],
  "runtime": 128,
  "rating": "NR",
  "description": "Seven gunmen defend a Mexican village from Calvera's bandits.",
  "vector": {
   "adrenaline": 7,
   "brainy": 4,
   "scary": 0,
   "funny": 2,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "seven",
   "village",
   "bandits"
  ],
  "poster": ""
 },
 {
  "id": "high-noon",
  "title": "High Noon",
  "year": 1952,
  "director": "Fred Zinnemann",
  "genres": [
   "Western",
   "Drama"
  ],
  "runtime": 85,
  "rating": "NR",
  "description": "Marshal Kane waits for the noon train as his whole town abandons him.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 3,
   "epic": 3,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "marshal",
   "noon",
   "train"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/8/81/High_Noon_%281952_poster%29.jpg"
 },
 {
  "id": "shane",
  "title": "Shane",
  "year": 1953,
  "director": "George Stevens",
  "genres": [
   "Western",
   "Drama"
  ],
  "runtime": 118,
  "rating": "NR",
  "description": "A gunfighter tries to be a farmer until a cattle baron's riders force his hand.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 1,
   "epic": 5,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "gunfighter",
   "farmer",
   "boy"
  ],
  "poster": ""
 },
 {
  "id": "rio-bravo",
  "title": "Rio Bravo",
  "year": 1959,
  "director": "Howard Hawks",
  "genres": [
   "Western",
   "Action",
   "Drama"
  ],
  "runtime": 141,
  "rating": "NR",
  "description": "A sheriff, a drunk, an old man and a kid hold a jail against an army.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 5,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "jail",
   "sheriff",
   "hawks"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/55/Rio_Bravo_%281959_poster%29.jpg"
 },
 {
  "id": "the-searchers",
  "title": "The Searchers",
  "year": 1956,
  "director": "John Ford",
  "genres": [
   "Western",
   "Adventure",
   "Drama"
  ],
  "runtime": 119,
  "rating": "NR",
  "description": "Ethan Edwards spends five years hunting the Comanche who took his niece — and himself.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "search",
   "comanche",
   "ethan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/59/SearchersPoster-BillGold.jpg"
 },
 {
  "id": "the-outlaw-josey-wales",
  "title": "The Outlaw Josey Wales",
  "year": 1976,
  "director": "Clint Eastwood",
  "genres": [
   "Western"
  ],
  "runtime": 135,
  "rating": "PG",
  "description": "Josey Wales flees bounty hunters and gathers a family of strays along the way.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 1,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wales",
   "bounty",
   "strays"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f0/The_outlaw_josey_wales.jpg"
 },
 {
  "id": "enemy-at-the-gates",
  "title": "Enemy at the Gates",
  "year": 2001,
  "director": "Jean-Jacques Annaud",
  "genres": [
   "War",
   "Drama",
   "Action",
   "Romance"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "Two snipers duel over Stalingrad while a love triangle loads its own risks.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 6,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "snipers",
   "stalingrad",
   "duel"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ab/Enemy_at_the_gates_ver2.jpg"
 },
 {
  "id": "the-thin-red-line",
  "title": "The Thin Red Line",
  "year": 1998,
  "director": "Terrence Malick",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 170,
  "rating": "R",
  "description": "Guadalcanal through the whispered thoughts of men dissolving into nature and fear.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "guadalcanal",
   "malick",
   "nature"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Thin_Red_Line_Poster.jpg"
 },
 {
  "id": "platoon",
  "title": "Platoon",
  "year": 1986,
  "director": "Oliver Stone",
  "genres": [
   "War",
   "Drama",
   "Action"
  ],
  "runtime": 120,
  "rating": "R",
  "description": "A green private watches two sergeants fight for his soul in Vietnam.",
  "vector": {
   "adrenaline": 7,
   "brainy": 6,
   "scary": 1,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "vietnam",
   "sergeants",
   "soul"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a9/Platoon_posters_86.jpg"
 },
 {
  "id": "jarhead",
  "title": "Jarhead",
  "year": 2005,
  "director": "Sam Mendes",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 125,
  "rating": "R",
  "description": "Marines wait through Desert Storm for a war that mostly never lets them fire.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "desertstorm",
   "waiting",
   "marines"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/Jarhead.jpg"
 },
 {
  "id": "the-hurt-locker",
  "title": "The Hurt Locker",
  "year": 2008,
  "director": "Kathryn Bigelow",
  "genres": [
   "War",
   "Drama",
   "Thriller"
  ],
  "runtime": 131,
  "rating": "R",
  "description": "A bomb-disposal sergeant in Baghdad is addicted to the one work that can kill him.",
  "vector": {
   "adrenaline": 7,
   "brainy": 7,
   "scary": 3,
   "funny": 0,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bomb",
   "baghdad",
   "addiction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/HLposterUSA2.jpg"
 },
 {
  "id": "zero-dark-thirty",
  "title": "Zero Dark Thirty",
  "year": 2012,
  "director": "Kathryn Bigelow",
  "genres": [
   "Drama",
   "Thriller",
   "War"
  ],
  "runtime": 157,
  "rating": "R",
  "description": "A CIA analyst's ten-year obsession ends in Abbottabad at 12:30 a.m.",
  "vector": {
   "adrenaline": 5,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 7,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "cia",
   "binladen",
   "obsession"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/77/ZeroDarkThirty2012Poster.jpg"
 },
 {
  "id": "american-sniper",
  "title": "American Sniper",
  "year": 2014,
  "director": "Clint Eastwood",
  "genres": [
   "War",
   "Drama",
   "Action"
  ],
  "runtime": 133,
  "rating": "R",
  "description": "Chris Kyle's four tours make him a legend and a stranger at his own table.",
  "vector": {
   "adrenaline": 7,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 4,
   "dark": 7,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "sniper",
   "tours",
   "home"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/American_Sniper_poster.jpg"
 },
 {
  "id": "lone-survivor",
  "title": "Lone Survivor",
  "year": 2013,
  "director": "Peter Berg",
  "genres": [
   "War",
   "Action",
   "Drama"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "Four SEALs are discovered on an Afghan ridge and fight down it alone.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "seals",
   "afghan",
   "ridge"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Lone_Survivor_poster.jpg"
 },
 {
  "id": "13-hours-the-secret-soldiers-of-benghazi",
  "title": "13 Hours: The Secret Soldiers of Benghazi",
  "year": 2016,
  "director": "Michael Bay",
  "genres": [
   "Action",
   "War",
   "Drama",
   "Thriller"
  ],
  "runtime": 144,
  "rating": "R",
  "description": "Six contractors defend a Benghazi compound through a night of no cavalry.",
  "vector": {
   "adrenaline": 9,
   "brainy": 4,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "benghazi",
   "contractors",
   "night"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/13_Hours_poster.png"
 },
 {
  "id": "the-covenant",
  "title": "The Covenant",
  "year": 2023,
  "director": "Guy Ritchie",
  "genres": [
   "War",
   "Action",
   "Drama",
   "Thriller"
  ],
  "runtime": 123,
  "rating": "R",
  "description": "A sergeant returns to Afghanistan to repay the interpreter who carried him out.",
  "vector": {
   "adrenaline": 8,
   "brainy": 5,
   "scary": 0,
   "funny": 0,
   "heartwarming": 5,
   "dark": 7,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "interpreter",
   "debt",
   "afghanistan"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1d/TheCovenantPoster.png"
 },
 {
  "id": "warfare",
  "title": "Warfare",
  "year": 2025,
  "director": "Ray Mendoza",
  "genres": [
   "War",
   "Action"
  ],
  "runtime": 95,
  "rating": "R",
  "description": "A Ramadi SEAL platoon's mission retold in real time from the men's own memories.",
  "vector": {
   "adrenaline": 8,
   "brainy": 7,
   "scary": 4,
   "funny": 0,
   "heartwarming": 2,
   "dark": 9,
   "romantic": 0,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "ramadi",
   "realtime",
   "seals"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Warfare_film_poster.jpg"
 },
 {
  "id": "the-great-escape",
  "title": "The Great Escape",
  "year": 1963,
  "director": "John Sturges",
  "genres": [
   "War",
   "Adventure",
   "Drama"
  ],
  "runtime": 172,
  "rating": "NR",
  "description": "Allied POWs tunnel out of Stalag Luft III in the greatest escape plan ever filmed.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 5,
   "dark": 5,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "pow",
   "tunnel",
   "escape"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/ac/The_Great_Escape_%28film%29_poster.jpg"
 },
 {
  "id": "patton",
  "title": "Patton",
  "year": 1970,
  "director": "Franklin J. Schaffner",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 172,
  "rating": "PG",
  "description": "General Patton storms across Europe and history, too big for peacetime.",
  "vector": {
   "adrenaline": 5,
   "brainy": 7,
   "scary": 0,
   "funny": 2,
   "heartwarming": 2,
   "dark": 5,
   "romantic": 0,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "patton",
   "general",
   "europe"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f2/70_patton.jpg"
 },
 {
  "id": "paths-of-glory",
  "title": "Paths of Glory",
  "year": 1957,
  "director": "Stanley Kubrick",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 88,
  "rating": "NR",
  "description": "Three soldiers are tried for cowardice after an impossible attack fails in WWI.",
  "vector": {
   "adrenaline": 4,
   "brainy": 8,
   "scary": 0,
   "funny": 0,
   "heartwarming": 2,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "wwi",
   "trial",
   "kubrick"
  ],
  "poster": ""
 },
 {
  "id": "come-and-see",
  "title": "Come and See",
  "year": 1985,
  "director": "Elem Klimov",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 142,
  "rating": "NR",
  "description": "A Belarusian boy joins the partisans and ages a lifetime in two days of atrocity.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 4,
   "funny": 0,
   "heartwarming": 0,
   "dark": 10,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "belarus",
   "partisans",
   "boy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/08/Come_and_See_%28poster%29.jpg"
 },
 {
  "id": "life-is-beautiful",
  "title": "Life Is Beautiful",
  "year": 1997,
  "director": "Roberto Benigni",
  "genres": [
   "Drama",
   "Comedy",
   "War",
   "Romance"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A father turns a concentration camp into a game to shield his son's innocence.",
  "vector": {
   "adrenaline": 3,
   "brainy": 6,
   "scary": 0,
   "funny": 7,
   "heartwarming": 9,
   "dark": 8,
   "romantic": 5,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "camp",
   "game",
   "father"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg"
 },
 {
  "id": "the-pianist",
  "title": "The Pianist",
  "year": 2002,
  "director": "Roman Polanski",
  "genres": [
   "Drama",
   "War"
  ],
  "runtime": 150,
  "rating": "R",
  "description": "Pianist Szpilman survives the Warsaw ghetto by hiding, hunger and luck.",
  "vector": {
   "adrenaline": 3,
   "brainy": 7,
   "scary": 1,
   "funny": 0,
   "heartwarming": 3,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "warsaw",
   "piano",
   "hiding"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Pianist_movie.jpg"
 },
 {
  "id": "downfall",
  "title": "Downfall",
  "year": 2004,
  "director": "Oliver Hirschbiegel",
  "genres": [
   "Drama",
   "War"
  ],
  "runtime": 156,
  "rating": "R",
  "description": "Hitler's last ten days in the bunker, through his secretary's eyes.",
  "vector": {
   "adrenaline": 3,
   "brainy": 8,
   "scary": 2,
   "funny": 0,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "bunker",
   "hitler",
   "secretary"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Der_Untergang_Downfall_poster.png"
 },
 {
  "id": "letters-from-iwo-jima",
  "title": "Letters from Iwo Jima",
  "year": 2006,
  "director": "Clint Eastwood",
  "genres": [
   "War",
   "Drama"
  ],
  "runtime": 141,
  "rating": "R",
  "description": "Iwo Jima from the Japanese defenders' letters home.",
  "vector": {
   "adrenaline": 6,
   "brainy": 7,
   "scary": 0,
   "funny": 0,
   "heartwarming": 4,
   "dark": 8,
   "romantic": 0,
   "epic": 7,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "iwojima",
   "letters",
   "japanese"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/8/87/Letters_from_Iwo_Jima.jpg"
 },
 {
  "id": "war-horse",
  "title": "War Horse",
  "year": 2011,
  "director": "Steven Spielberg",
  "genres": [
   "Drama",
   "War",
   "Adventure"
  ],
  "runtime": 146,
  "rating": "PG-13",
  "description": "A horse passes through many hands across WWI while his boy enlists to find him.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 1,
   "funny": 1,
   "heartwarming": 7,
   "dark": 6,
   "romantic": 0,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "horse",
   "wwi",
   "boy"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/d/da/War-horse-poster.jpg"
 },
 {
  "id": "overlord",
  "title": "Overlord",
  "year": 2018,
  "director": "Julius Avery",
  "genres": [
   "Horror",
   "War",
   "Action"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "Paratroopers on D-Day eve find a village church hiding Nazi experiments.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 7,
   "funny": 1,
   "heartwarming": 1,
   "dark": 8,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "dday",
   "experiments",
   "church"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e6/Overlord2018Poster.jpg"
 },
 {
  "id": "the-ministry-of-ungentlemanly-warfare",
  "title": "The Ministry of Ungentlemanly Warfare",
  "year": 2024,
  "director": "Guy Ritchie",
  "genres": [
   "Action",
   "War",
   "Comedy"
  ],
  "runtime": 120,
  "rating": "PG-13",
  "description": "Churchill's off-book raiders sink the Nazi U-boat supply chain with grins.",
  "vector": {
   "adrenaline": 8,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 3,
   "dark": 5,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "churchill",
   "raiders",
   "uboats"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/22/The_Ministry_of_Ungentlemanly_Warfare_poster.jpg"
 },
 {
  "id": "greyhound",
  "title": "Greyhound",
  "year": 2020,
  "director": "Aaron Schneider",
  "genres": [
   "War",
   "Action",
   "Drama"
  ],
  "runtime": 91,
  "rating": "PG-13",
  "description": "A first-time convoy captain duels U-boats across the Atlantic's Black Pit.",
  "vector": {
   "adrenaline": 8,
   "brainy": 6,
   "scary": 2,
   "funny": 0,
   "heartwarming": 2,
   "dark": 6,
   "romantic": 0,
   "epic": 5,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "convoy",
   "uboats",
   "atlantic"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Greyhound_poster.jpeg"
 },
 {
  "id": "devotion",
  "title": "Devotion",
  "year": 2022,
  "director": "J.D. Dillard",
  "genres": [
   "War",
   "Drama",
   "Action"
  ],
  "runtime": 139,
  "rating": "PG-13",
  "description": "Jesse Brown, the Navy's first Black carrier pilot, and the wingman who stood by him.",
  "vector": {
   "adrenaline": 6,
   "brainy": 5,
   "scary": 0,
   "funny": 1,
   "heartwarming": 6,
   "dark": 6,
   "romantic": 0,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "korea",
   "pilot",
   "wingman"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Devotion_%282022_film%29.jpg"
 },
 {
  "id": "good-morning-vietnam",
  "title": "Good Morning, Vietnam",
  "year": 1987,
  "director": "Barry Levinson",
  "genres": [
   "Comedy",
   "Drama",
   "War"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "DJ Adrian Cronauer brings rock and jokes to Armed Forces Radio Saigon — and sees the war.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 7,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 0,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "radio",
   "saigon",
   "cronauer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/Good_morning_vietnam.png"
 },
 {
  "id": "cabaret",
  "title": "Cabaret",
  "year": 1972,
  "director": "Bob Fosse",
  "genres": [
   "Musical",
   "Drama"
  ],
  "runtime": 124,
  "rating": "PG",
  "description": "Sally Bowles sings in a Berlin cabaret as the Nazis rise outside the Kit Kat Klub.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 1,
   "funny": 5,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 6,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "berlin",
   "cabaret",
   "sally"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Original_movie_poster_for_Cabaret.jpg"
 },
 {
  "id": "grease",
  "title": "Grease",
  "year": 1978,
  "director": "Randal Kleiser",
  "genres": [
   "Musical",
   "Romance",
   "Comedy"
  ],
  "runtime": 110,
  "rating": "PG-13",
  "description": "Summer lovers Danny and Sandy collide again at Rydell High in leather and poodle skirts.",
  "vector": {
   "adrenaline": 5,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 5,
   "dark": 2,
   "romantic": 8,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "rydell",
   "summer",
   "pinkladies"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e2/Grease_ver2.jpg"
 },
 {
  "id": "saturday-night-fever",
  "title": "Saturday Night Fever",
  "year": 1977,
  "director": "John Badham",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 118,
  "rating": "R",
  "description": "Tony Manero is king of the disco floor and nobody anywhere else in Brooklyn.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 2,
   "dark": 7,
   "romantic": 5,
   "epic": 4,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "disco",
   "brooklyn",
   "tony"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Saturday_night_fever_movie_poster.jpg"
 },
 {
  "id": "footloose",
  "title": "Footloose",
  "year": 1984,
  "director": "Herbert Ross",
  "genres": [
   "Drama",
   "Musical",
   "Romance"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "A Chicago teen challenges a small town's ban on dancing — and its preacher.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 5,
   "dark": 4,
   "romantic": 6,
   "epic": 3,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "dancing",
   "ban",
   "teen"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/e/e4/FootloosePoster.jpg"
 },
 {
  "id": "little-shop-of-horrors",
  "title": "Little Shop of Horrors",
  "year": 1986,
  "director": "Frank Oz",
  "genres": [
   "Musical",
   "Comedy",
   "Horror"
  ],
  "runtime": 94,
  "rating": "PG-13",
  "description": "A florist's man-eating plant demands to be fed, in doo-wop and blood.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 4,
   "funny": 7,
   "heartwarming": 3,
   "dark": 6,
   "romantic": 3,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "plant",
   "florist",
   "doowop"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5b/Little_shop_of_horrors.jpg"
 },
 {
  "id": "hairspray",
  "title": "Hairspray",
  "year": 2007,
  "director": "Adam Shankman",
  "genres": [
   "Musical",
   "Comedy",
   "Romance"
  ],
  "runtime": 117,
  "rating": "PG",
  "description": "Tracy Turnblad dances onto Baltimore TV and integrates it in 1962.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 5,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "baltimore",
   "dance",
   "tv"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/Hairspray2007poster.JPG"
 },
 {
  "id": "mamma-mia",
  "title": "Mamma Mia!",
  "year": 2008,
  "director": "Phyllida Lloyd",
  "genres": [
   "Musical",
   "Comedy",
   "Romance"
  ],
  "runtime": 108,
  "rating": "PG-13",
  "description": "A bride invites three possible fathers to her Greek island wedding — in ABBA songs.",
  "vector": {
   "adrenaline": 4,
   "brainy": 3,
   "scary": 0,
   "funny": 7,
   "heartwarming": 6,
   "dark": 2,
   "romantic": 8,
   "epic": 5,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "abba",
   "greece",
   "fathers"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/95/Mamma_Mia_%282008%29_US_poster.jpg"
 },
 {
  "id": "chicago",
  "title": "Chicago",
  "year": 2002,
  "director": "Rob Marshall",
  "genres": [
   "Musical",
   "Crime",
   "Comedy",
   "Drama"
  ],
  "runtime": 113,
  "rating": "PG-13",
  "description": "Two murderesses and a slick lawyer turn Chicago trials into jazz-age showbiz.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 0,
   "funny": 6,
   "heartwarming": 1,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 1
  },
  "keywords": [
   "jazz",
   "trial",
   "showbiz"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f6/Chicago_%282002_film%29.png"
 },
 {
  "id": "dreamgirls",
  "title": "Dreamgirls",
  "year": 2006,
  "director": "Bill Condon",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 130,
  "rating": "PG-13",
  "description": "A girl group's rise through Motown's machine costs its lead singer everything.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 4,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "motown",
   "group",
   "lead"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/f/f5/Dreamgirls.jpg"
 },
 {
  "id": "sweeney-todd-the-demon-barber-of-fleet-street",
  "title": "Sweeney Todd: The Demon Barber of Fleet Street",
  "year": 2007,
  "director": "Tim Burton",
  "genres": [
   "Musical",
   "Horror",
   "Drama"
  ],
  "runtime": 116,
  "rating": "R",
  "description": "A wronged barber returns to London and Mrs. Lovett bakes his revenge into pies.",
  "vector": {
   "adrenaline": 5,
   "brainy": 6,
   "scary": 4,
   "funny": 4,
   "heartwarming": 1,
   "dark": 9,
   "romantic": 3,
   "epic": 5,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "barber",
   "pies",
   "london"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Sweeneylarge.jpg"
 },
 {
  "id": "les-miserables",
  "title": "Les Misérables",
  "year": 2012,
  "director": "Tom Hooper",
  "genres": [
   "Musical",
   "Drama",
   "Romance"
  ],
  "runtime": 158,
  "rating": "PG-13",
  "description": "Valjean and Javert chase each other across decades of French misery and barricades.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 0,
   "funny": 1,
   "heartwarming": 5,
   "dark": 8,
   "romantic": 5,
   "epic": 8,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "valjean",
   "javert",
   "barricades"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/b0/Les-miserables-movie-poster1.jpg"
 },
 {
  "id": "into-the-woods",
  "title": "Into the Woods",
  "year": 2014,
  "director": "Rob Marshall",
  "genres": [
   "Musical",
   "Fantasy",
   "Family"
  ],
  "runtime": 125,
  "rating": "PG",
  "description": "A baker and his wife enter Sondheim's woods where fairy tales have consequences.",
  "vector": {
   "adrenaline": 4,
   "brainy": 6,
   "scary": 2,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 3,
   "epic": 5,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "woods",
   "sondheim",
   "wishes"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/34/Into_the_Woods_film_poster.jpg"
 },
 {
  "id": "the-greatest-showman",
  "title": "The Greatest Showman",
  "year": 2017,
  "director": "Michael Gracey",
  "genres": [
   "Musical",
   "Drama"
  ],
  "runtime": 105,
  "rating": "PG",
  "description": "P.T. Barnum builds a circus of outcasts into a spectacle — and nearly loses his family to it.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 5,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 4,
   "epic": 7,
   "cozy": 1,
   "weird": 0
  },
  "keywords": [
   "barnum",
   "circus",
   "spectacle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png"
 },
 {
  "id": "sing-street",
  "title": "Sing Street",
  "year": 2016,
  "director": "John Carney",
  "genres": [
   "Comedy",
   "Drama",
   "Musical",
   "Romance"
  ],
  "runtime": 106,
  "rating": "PG-13",
  "description": "A Dublin teen forms a band to impress a girl and escape his collapsing home.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 6,
   "epic": 4,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "dublin",
   "band",
   "girl"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Sing_Street_poster.jpeg"
 },
 {
  "id": "begin-again",
  "title": "Begin Again",
  "year": 2013,
  "director": "John Carney",
  "genres": [
   "Drama",
   "Musical",
   "Romance",
   "Comedy"
  ],
  "runtime": 104,
  "rating": "R",
  "description": "A dumped songwriter and a disgraced producer record an album across New York's streets.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 5,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "songwriter",
   "album",
   "newyork"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/b/bd/Begin_Again_film_poster_2014.jpg"
 },
 {
  "id": "once",
  "title": "Once",
  "year": 2007,
  "director": "John Carney",
  "genres": [
   "Drama",
   "Musical",
   "Romance"
  ],
  "runtime": 86,
  "rating": "R",
  "description": "A Dublin busker and a Czech pianist make music for one week and change each other.",
  "vector": {
   "adrenaline": 2,
   "brainy": 5,
   "scary": 0,
   "funny": 3,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 9,
   "epic": 3,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "dublin",
   "busker",
   "piano"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Once_%282006_film%29poster.jpg"
 },
 {
  "id": "flora-and-son",
  "title": "Flora and Son",
  "year": 2023,
  "director": "John Carney",
  "genres": [
   "Comedy",
   "Drama",
   "Musical"
  ],
  "runtime": 97,
  "rating": "R",
  "description": "A Dublin mum saves a trashed guitar and, with an online LA teacher, her son.",
  "vector": {
   "adrenaline": 3,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 8,
   "dark": 3,
   "romantic": 4,
   "epic": 4,
   "cozy": 3,
   "weird": 0
  },
  "keywords": [
   "dublin",
   "guitar",
   "son"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/c/c6/Flora_and_son_poster.jpg"
 },
 {
  "id": "yesterday",
  "title": "Yesterday",
  "year": 2019,
  "director": "Danny Boyle",
  "genres": [
   "Comedy",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 116,
  "rating": "PG-13",
  "description": "A blackout erases the Beatles from everyone's memory except one struggling singer's.",
  "vector": {
   "adrenaline": 4,
   "brainy": 5,
   "scary": 0,
   "funny": 6,
   "heartwarming": 5,
   "dark": 3,
   "romantic": 7,
   "epic": 4,
   "cozy": 1,
   "weird": 2
  },
  "keywords": [
   "beatles",
   "blackout",
   "singer"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Yesterday_%282019_poster%29.png"
 },
 {
  "id": "rocketman",
  "title": "Rocketman",
  "year": 2019,
  "director": "Dexter Fletcher",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 121,
  "rating": "R",
  "description": "Elton John's rise told as a full musical fantasy out of his own addictions and songs.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 4,
   "heartwarming": 4,
   "dark": 6,
   "romantic": 5,
   "epic": 6,
   "cozy": 0,
   "weird": 2
  },
  "keywords": [
   "elton",
   "fantasy",
   "addiction"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Rocketman_%28film%29.png"
 },
 {
  "id": "in-the-heights",
  "title": "In the Heights",
  "year": 2021,
  "director": "Jon M. Chu",
  "genres": [
   "Musical",
   "Drama",
   "Romance"
  ],
  "runtime": 143,
  "rating": "PG-13",
  "description": "Washington Heights dreams in lottery tickets, blackouts and sueñitos.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 6,
   "heartwarming": 7,
   "dark": 3,
   "romantic": 6,
   "epic": 6,
   "cozy": 2,
   "weird": 0
  },
  "keywords": [
   "heights",
   "lottery",
   "dreams"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/6/6a/In_The_Heights_teaser_poster.jpg"
 },
 {
  "id": "matilda-the-musical",
  "title": "Matilda the Musical",
  "year": 2022,
  "director": "Matthew Warchus",
  "genres": [
   "Musical",
   "Comedy",
   "Family",
   "Fantasy"
  ],
  "runtime": 117,
  "rating": "PG",
  "description": "Matilda leads a musical revolt of children against the Trunchbull's regime.",
  "vector": {
   "adrenaline": 5,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 4,
   "romantic": 0,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "matilda",
   "revolt",
   "trunchbull"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Matilda_the_Musical_UK_Film_Poster.jpg"
 },
 {
  "id": "enchanted",
  "title": "Enchanted",
  "year": 2007,
  "director": "Kevin Lima",
  "genres": [
   "Comedy",
   "Family",
   "Fantasy",
   "Musical",
   "Romance"
  ],
  "runtime": 107,
  "rating": "PG",
  "description": "Animated princess Giselle is banished to real New York, where singing still mostly works.",
  "vector": {
   "adrenaline": 4,
   "brainy": 4,
   "scary": 0,
   "funny": 7,
   "heartwarming": 7,
   "dark": 2,
   "romantic": 8,
   "epic": 4,
   "cozy": 2,
   "weird": 1
  },
  "keywords": [
   "giselle",
   "newyork",
   "banished"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Enchantedposter.jpg"
 },
 {
  "id": "straight-outta-compton",
  "title": "Straight Outta Compton",
  "year": 2015,
  "director": "F. Gary Gray",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 147,
  "rating": "R",
  "description": "N.W.A turns Compton's streets into the most dangerous music in America.",
  "vector": {
   "adrenaline": 6,
   "brainy": 6,
   "scary": 0,
   "funny": 3,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 1,
   "epic": 6,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "nwa",
   "compton",
   "rap"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/Straight_Outta_Compton_poster.jpg"
 },
 {
  "id": "8-mile",
  "title": "8 Mile",
  "year": 2002,
  "director": "Curtis Hanson",
  "genres": [
   "Drama",
   "Musical"
  ],
  "runtime": 110,
  "rating": "R",
  "description": "B-Rabbit gets one shot at a Detroit rap battle against his whole life.",
  "vector": {
   "adrenaline": 5,
   "brainy": 5,
   "scary": 0,
   "funny": 2,
   "heartwarming": 3,
   "dark": 7,
   "romantic": 3,
   "epic": 4,
   "cozy": 0,
   "weird": 0
  },
  "keywords": [
   "detroit",
   "rap",
   "battle"
  ],
  "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/8_Mile_official_poster.jpg"
 }
];
const TOP20 = [
 {
  "rank": 1,
  "id": "inception",
  "note": "Owen's #1: a heist folded inside dreams inside dreams — the rare blockbuster that trusts you to keep up."
 },
 {
  "rank": 2,
  "id": "the-dark-knight",
  "note": "The superhero film as crime epic; Ledger's Joker still sets the bar for everyone."
 },
 {
  "rank": 3,
  "id": "the-godfather",
  "note": "A permanent fixture at the very top of Rotten Tomatoes' all-time ratings — the family saga every saga copies."
 },
 {
  "rank": 4,
  "id": "the-matrix",
  "note": "It rewired action, sci-fi and pop culture in a single bullet-time beat."
 },
 {
  "rank": 5,
  "id": "parasite",
  "note": "Best Picture winner and an RT all-time topper — every genre at once, engineered like a trap."
 },
 {
  "rank": 6,
  "id": "the-lord-of-the-rings-the-return-of-the-king",
  "note": "The grandest finale ever filmed — eleven Oscars and every single thread pays off."
 },
 {
  "rank": 7,
  "id": "interstellar",
  "note": "Love versus relativity at the edge of a black hole; the docking scene alone earns its place."
 },
 {
  "rank": 8,
  "id": "talk-to-me",
  "note": "Fast, mean and genuinely terrifying — the horror debut that set the decade's bar."
 },
 {
  "rank": 9,
  "id": "the-wolf-of-wall-street",
  "note": "Scorsese at maximum velocity — three hours that move like a pump-and-dump scheme."
 },
 {
  "rank": 10,
  "id": "spider-man-into-the-spider-verse",
  "note": "A living comic book and the most joyful superhero film ever made."
 },
 {
  "rank": 11,
  "id": "the-hangover",
  "note": "The comedy blueprint of its era — a missing groom, a tiger, and perfect escalation."
 },
 {
  "rank": 12,
  "id": "casablanca",
  "note": "Critics'-consensus royalty on RT since ratings began — every line earned its immortality."
 },
 {
  "rank": 13,
  "id": "12-angry-men",
  "note": "One room, twelve men, zero wasted minutes — proof that story beats spectacle."
 },
 {
  "rank": 14,
  "id": "schindler-s-list",
  "note": "Spielberg's starkest masterpiece, among the highest-rated films in Rotten Tomatoes history."
 },
 {
  "rank": 15,
  "id": "pulp-fiction",
  "note": "Dialogue as action; Tarantino's jigsaw is an RT all-time staple that rewired the nineties."
 },
 {
  "rank": 16,
  "id": "seven-samurai",
  "note": "The original ensemble epic — every team-up movie ever made descends from Kurosawa's seven."
 },
 {
  "rank": 17,
  "id": "spirited-away",
  "note": "Pure imagination with a beating heart; Miyazaki's bathhouse anchors RT's greatest-ever lists."
 },
 {
  "rank": 18,
  "id": "mad-max-fury-road",
  "note": "Two hours of perfect chase mechanics — critics put it atop a decade, not just a year."
 },
 {
  "rank": 19,
  "id": "the-godfather-part-ii",
  "note": "The sequel that equals the original; RT's all-time lists carry both Godfathers for a reason."
 },
 {
  "rank": 20,
  "id": "toy-story",
  "note": "The first Pixar feature still sits among the highest-rated films ever on Rotten Tomatoes."
 }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { MOVIES, TOP20, MOVIE_AXES }; }
