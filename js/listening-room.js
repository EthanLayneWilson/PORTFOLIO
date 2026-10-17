// Replace these fictional demo records with your own albums.
// Cover paths are relative to listening-room.html, NOT this JavaScript file.
// Keep the complete mockup composition visible without scrolling the page.
(() => {
  function fitListeningRoom() {
    const scene = document.getElementById('listening-scene');
    if (!scene) return;
    const width = document.documentElement.clientWidth;
    const height = window.innerHeight;
    scene.style.setProperty('--lr-scene-scale', Math.min(width / 1536, height / 1024));
  }
  fitListeningRoom();
  window.addEventListener('resize', fitListeningRoom);
  window.visualViewport?.addEventListener('resize', fitListeningRoom);
})();

const records = [

  {
    id: "emigrant",
    title: "Emigrant EP",
    artist: "Kishi Bashi",
    year: "2021",
    genre: "Folk / Bluegrass",
    releaseDate: "2021-04-02",
    vinylReleaseDate: "2021-05-21",
    label: "Joyful Noise Recordings",
    producer: "Kishi Bashi",

    cover: "images/vinyl/emigrant.png",
    runtime: "26min 11sec",
    signed: false,

    tracks: [
        "Cascades",
        "Wait for Springtime",
        "Early Morning Breeze",
        "Those Days Are Gone",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/emigrant-record.png",
        colorName: "Mountain Spring Clear"
    }
},

{
    id: "stranger-to-me",
    title: "Stranger to Me",
    artist: "The Black Lillies",
    year: "2018",
    genre: "Americana / Roots Rock",
    cover: "images/vinyl/stranger-to-me.png",
    runtime: "55min 32sec",
    signed: true,
    tracks: [
        "Ten Years",
        "Midnight Stranger",
        "Joy and Misery",
        "Third Place",
    ],
    notes: ``,
    vinyl: {
        image: "images/vinyl/stranger-to-me-record.png",
        colorName: "Clearwater Blue"
    }
},

{
    id: "taming-tongues",
    title: "Taming Tongues",
    artist: "Dens",
    year: "2020",
    genre: "Alternative Rock",
    cover: "images/vinyl/taming-tongues.png",
    runtime: "42min 09sec",
    signed: false,
    tracks: [
        "Wise",
        "They",
        "To",
        "Keep",
    ],
    notes: ``,
    vinyl: {
        image: "images/vinyl/taming-tongues-record.png",
        colorName: "Smoky Burgundy Brown"
    }
},

{
    id: "cold-hard-times",
    title: "Cold Hard Times",
    artist: "Joe Cannon",
    year: "1970",
    genre: "Acoustic",
    cover: "images/vinyl/cold-hard-times.png",
    runtime: "28min",
    signed: true,
    tracks: [
        "Warm Miami Sunshine",
    ],
    notes: `"To my best renter, Joe Cannon"

Best landlord ever.`,
    vinyl: {
        image: "images/vinyl/cold-hard-times-record.png",
        colorName: "Black"
    }
},

  {
    id: "obsidian",
    title: "Obsidian",
    artist: "Northlane",
    year: "2022",
    genre: "Metalcore",
    cover: "images/vinyl/obsidian.png",
    runtime: "56min 22sec",
    tracks: [
        "Clockwork",
        "Echo Chamber",
        "Plenty",
        "Is This a Test?",
        "Nova",
        "Inamorata",
        "Dark Solitaire"
    ],
    notes: ``,
    vinyl: {
        image: "images/vinyl/obsidian-record.png"
    }
},

{
    id: "goblin-hours",
    title: "GOBLIN HOURS",
    artist: "Bilmuri",
    year: "2022",
    genre: "Alternative Rock",
    cover: "images/vinyl/goblin-hours.png",
    tracks: ['ANABOLIC SPUDSMAN', 'HOGMANS DELIGHT', 'VASCULAR DEMI-GOTH'],
    notes: ``,
    vinyl: {
        image: "images/vinyl/goblin-hours-record.png"
    },
    runtime: "26min 5sec",     // Enter the album length, such as "38:24"
signed: true,    // Use false for unsigned records
},

{
    id: "a-thousand-suns",
    title: "A Thousand Suns",
    artist: "Linkin Park",
    year: "2010",
    genre: "Electronic / Experimental Rock",
    releaseDate: "2010-09-14",
    label: "Warner Bros. / Machine Shop",
    producers: ["Rick Rubin", "Mike Shinoda"],

    cover: "images/vinyl/a-thousand-suns.png",
    runtime: "47min 48sec",
    signed: false,

    tracks: [
        "Burning in the Skies",
        "Waiting for the End",
        "Blackout",
        "Iridescent",
        "The Catalyst",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/a-thousand-suns-record.png"
    }
},

{
    id: "minutes-to-midnight",
    title: "Minutes to Midnight",
    artist: "Linkin Park",
    year: "2007",
    genre: "Alternative Rock",
    cover: "images/vinyl/minutes-to-midnight.png",
    runtime: "Approx. 43min",
    signed: false,
    tracks: [
        "Leave Out All the Rest",
        "Bleed It Out",
        "Shadow of the Day",
        "What I've Done",
        "Valentine’s Day",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/minutes-to-midnight-record.png",
        colorName: "Black"
    }
},
  {
    id: "the-canyon",
    title: "The Canyon",
    artist: "The Used",
    year: "2017",
    genre: "Alternative Rock",
    cover: "images/vinyl/the-canyon.png",
    runtime: "79min",
    tracks: ['For You','Broken Windows', 'Funeral Post', 'Upper Falls', 'Over and Over Again'],
    notes: `Write your thoughts about this album here.`,
    vinyl: {
    image: "images/vinyl/the-canyon-record.png"
},
},

{
    id: "heartwork",
    title: "Heartwork (Deluxe)",
    artist: "The Used",
    year: "2021",
    genre: "Alternative Rock",
    cover: "images/vinyl/heartwork.png",
    runtime: "79min 24sec",
    signed: false,
    tracks: [
        "To Feel Something",
        "Night-Sea Journey",
        "The Brothers Karamazov",
        "River Stay",
        "Sing Out of Tune",
    ],
    notes: ``,
    vinyl: {
        image: "images/vinyl/heartwork-record.png",
        colorName: "Gold Marble"
    }
},

{
    id: "horizons",
    title: "HORIZONS",
    artist: "STARSET",
    year: "2021",
    genre: "Hard Rock",
    releaseDate: "2021-10-22",
    label: "Fearless Records",
    producers: ["Dustin Bates", "Joe Rickard"],

    cover: "images/vinyl/horizons.png",
    runtime: "70min 57sec",
    signed: true,

    tracks: [
        "THE BREACH",
        "OTHERWORLDLY",
        "EARTHRISE",
        "LEAVING THIS WORLD BEHIND",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/horizons-record.png"
    }
},

{
    id: "vessels",
    title: "Vessels",
    artist: "STARSET",
    year: "2017",
    genre: "Hard Rock",
    cover: "images/vinyl/vessels.png",
    runtime: "70min 26sec",
    signed: false,
    tracks: [
        "DIE FOR YOU",
        "Ricochet",
        "Starlight",
        "Monster",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/vessels-record.png",
        colorName: "Turquoise Marble"
    }
},

{
    id: "erase-me",
    title: "Erase Me",
    artist: "Underoath",
    year: "2018",
    genre: "Alternative Rock",
    cover: "images/vinyl/erase-me.png",
    runtime: "43min 46sec",
    signed: true,
    format: '6 × 7" box set',
    tracks: [
        "On My Teeth",
        "Wake Me",
        "ihateit",
        "I Gave Up",
    ],
    notes: `

`,
    vinyl: {
        image: "images/vinyl/erase-me-record.png",
        colorName: "Acid Green",
        size: '7"',
        rpm: 45
    }
},

{
    id: "when-youre-through-thinking-say-yes",
    title: "When You're Through Thinking, Say Yes",
    artist: "Yellowcard",
    year: "2011",
    genre: "Pop Punk",
    cover: "images/vinyl/y.png",
    runtime: "37min 9sec",
    signed: false,
    tracks: [
        "For You, and Your Denial",
        "Soundtrack",
        "Sing for Me",
        "See Me Smiling",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/y-record.png",
        colorName: "Black"
    }
},

{
    id: "yellowcard",
    title: "Yellowcard",
    artist: "Yellowcard",
    year: "2016",
    genre: "Alternative Rock",
    releaseDate: "2016-09-30",
    label: "Hopeless Records",
    producers: ["Neal Avron", "Ryan Key", "Ryan Mendez"],

    cover: "images/vinyl/yellowcard.png",
    runtime: "47min 53sec",
    signed: false,

    tracks: [
        "Rest in Peace",
        "A Place We Set Afire",
        "Leave a Light On",
        "The Hurt Is Gone",
        "Empty Street",
        "Savior's Robes",
        "Fields & Fences"
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/yellowcard-record.png"
    }
},

{
    id: "lost-souls",
    title: "Lost Souls",
    artist: "Caskets",
    year: "2021",
    genre: "Post-Hardcore",
    cover: "images/vinyl/lost-souls.png",
    runtime: "45min 36sec",
    signed: false,
    tracks: [
        "The Only Ones",
        "Glass Heart",
        "Hold Me Now",
        "Lost in Echoes",
        "Drowned in Emotion",
        "Nothing to Hide"
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/lost-souls-record.png",
        colorName: "Clear with Gold & Black Splatter"
    }
},

{
    id: "life-without-sound",
    title: "Life Without Sound",
    artist: "Cloud Nothings",
    year: "2017",
    genre: "Indie Rock",
    cover: "images/vinyl/life-without-sound.png",
    runtime: "37min 42sec",
    signed: false,
    tracks: [
        "Enter Entirely",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/life-without-sound-record.png",
        colorName: "Black"
    }
},

{
    id: "impera",
    title: "Impera",
    artist: "Ghost",
    year: "2022",
    genre: "Hard Rock",
    cover: "images/vinyl/impera.png",
    runtime: "46min 25sec",
    signed: false,
    tracks: [
        "Kaisarion",
        "Spillways",
        "Call Me Little Sunshine",
        "Watcher in the Sky",
        "Griftwood",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/impera-record.png",
        colorName: "Translucent Blue Marble"
    }
},

{
    id: "prequelle",
    title: "Prequelle",
    artist: "Ghost",
    year: "2018",
    genre: "Hard Rock",
    cover: "images/vinyl/prequelle.png",
    runtime: "Approx. 42min",
    signed: false,
    tracks: [
        "Faith",
        "Miasma",
        "Life Eternal"
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/prequelle-record.png",
        colorName: "Black"
    }
},

{
    id: "saint-cecilia",
    title: "Saint Cecilia EP",
    artist: "Foo Fighters",
    year: "2015",
    genre: "Alternative Rock",
    cover: "images/vinyl/sc.png",
    runtime: "Approx. 18min",
    signed: false,
    tracks: [
        "Saint Cecilia",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/sc-ep.png",
        colorName: "Black"
    }
},
{
    id: "echoes-silence-patience-and-grace",
    title: "Echoes, Silence, Patience & Grace",
    artist: "Foo Fighters",
    year: "2007",
    genre: "Alternative Rock",
    cover: "images/vinyl/ff.png",
    runtime: "51min 12sec",
    signed: false,
    tracks: [
        "The Pretender",
        "Long Road to Ruin",
        "Statues",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/ff-record.png",
        colorName: "Black"
    }
},

{
    id: "but-here-we-are",
    title: "But Here We Are",
    artist: "Foo Fighters",
    year: "2023",
    genre: "Alternative Rock",
    releaseDate: "2023-06-02",
    label: "Roswell Records / RCA Records",

    cover: "images/vinyl/but-here-we-are.png",
    runtime: "48min 08sec",
    signed: false,

    tracks: [
        "Rescued",
        "Under You",
        "Beyond Me",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/but-here-we-are-record.png",
        colorName: "White"
    }
},

{
    id: "see-whats-on-the-inside",
    title: "See What's on the Inside",
    artist: "Asking Alexandria",
    year: "2021",
    genre: "Hard Rock",
    releaseDate: "2021-10-01",
    label: "Better Noise Music",
    producer: "Matt Good",

    cover: "images/vinyl/see-whats-on-the-inside.png",
    runtime: "40min 02sec",
    signed: false,

    tracks: [
        "Alone Again",
        "Faded Out",
        "Never Gonna Learn",
        "You've Made It This Far",
        "See What's on the Inside",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/see-whats-on-the-inside-record.png",
        colorName: "Black"
    }
},

{
    id: "songs-of-death-and-resurrection",
    title: "Songs of Death and Resurrection",
    artist: "Demon Hunter",
    year: "2021",
    genre: "Acoustic",
    releaseDate: "2021-03-05",
    label: "Solid State Records",
    producers: ["Jeremiah Scott"],

    cover: "images/vinyl/songs-of-death-and-resurrection.png",
    runtime: "62min 39sec",
    signed: false,

    tracks: [
        "Dead Flowers",
        "The Heart of a Graveyard",
    ],

    notes: ``,

    vinyl: {
        image: "images/vinyl/songs-of-death-and-resurrection-record.png"
    }
},

{
    id: "fiddler-on-the-roof",
    title: "Fiddler on the Roof",
    artist: "Original Motion Picture Cast / John Williams",
    year: "1971",
    genre: "Classic",
    cover: "images/vinyl/fiddler.png",
    runtime: "60min 03sec",
    signed: false,
    tracks: [
        "If I Were a Rich Man",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/fiddler-record.png",
        colorName: "Black"
    }
},
{
    id: "la-boheme",
    title: "La Bohème",
    artist: "Giacomo Puccini / Sir Thomas Beecham",
    year: "1956",
    genre: "Classic",
    cover: "images/vinyl/La-Bohème.png",
    runtime: "Approx. 107min",
    signed: false,
    tracks: [
        "Act I",
        "Act II",
        "Act III",
        "Act IV"
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/La-Bohème-record.png",
        colorName: "Black"
    }
},
{
    id: "our-favorite-songs",
    title: "Our Favorite Songs",
    artist: "The Lennon Sisters",
    year: "1967",
    genre: "Classic",
    cover: "images/vinyl/our-favorite-songs.png",
    runtime: "Approx. 27min",
    signed: false,
    tracks: [
        "Where Have All the Flowers Gone",
        "If I Had My Way"
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/our-favorite-songs-record.png",
        colorName: "Black"
    }
},

{
    id: "honey-in-the-horn",
    title: "Honey in the Horn",
    artist: "Al Hirt",
    year: "1963",
    genre: "Classic",
    cover: "images/vinyl/honey-in-the-horn.png",
    runtime: "Approx. 29min",
    signed: false,
    tracks: [
        "I Can't Get Started",
        "Java",
        "Man with a Horn",
        "Tansy",
        "Night Theme",
        "Talkin' 'bout That River",
        "Fly Me to the Moon",
        "To Be in Love",
        "Al Di Là",
        "Malibu",
        "Theme from a Dream",
        "I'm Movin' On"
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/honey-in-the-horn-record.png",
        colorName: "Black"
    }
},
{
    id: "its-square-dance-time",
    title: "It's Square Dance Time!",
    artist: "Holler Hawkins and the Hayriders",
    year: "",
    genre: "Classic",
    cover: "images/vinyl/HH.png",
    runtime: "",
    signed: false,
    tracks: [],
    notes: "",
    vinyl: {
        image: "images/vinyl/HH-record.png",
        colorName: "Black"
    }
},

{
    id: "for-earth-below",
    title: "For Earth Below",
    artist: "Robin Trower",
    year: "1975",
    genre: "Classic",
    cover: "images/vinyl/for-earth-below.png",
    runtime: "Approx. 36min",
    signed: false,
    tracks: [
        "Alethea",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/for-earth-below-record.png",
        colorName: "Black"
    }
},

{
    id: "gettin-down-in-the-valley",
    title: "Gettin' Down... in the Valley",
    artist: "Joe Cannon",
    year: "",
    genre: "Acoustic",
    cover: "images/vinyl/jc.png",
    runtime: "",
    signed: false,
    tracks: [
        "Sun Valley Sally",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/jc-record.png",
        colorName: "Black"
    }
},
{
    id: "rocky",
    title: "Rocky (Original Motion Picture Score)",
    artist: "Bill Conti",
    year: "1976",
    genre: "Classic",
    cover: "images/vinyl/rocky.png",
    runtime: "Approx. 31min",
    signed: false,
    tracks: [
        "Philadelphia Morning",
        "Going the Distance",
        "Take You Back (Street Corner Song)",
        "You Take My Heart Away",
    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/rocky-record.png",
        colorName: "Black"
    }
},
{
    id: "lawrence-welk-in-concert",
    title: "In Concert",
    artist: "Lawrence Welk and His Musical Family",
    year: "1973",
    genre: "Classic",
    cover: "images/vinyl/LW.png",
    runtime: "",
    signed: false,
    tracks: [
        "Sunrise, Sunset",

    ],
    notes: "",
    vinyl: {
        image: "images/vinyl/LW-record.png",
        colorName: "Black"
    }
},


];

(() => {
  const byId = id => document.getElementById(id);
  const cover = byId('album-cover');
  const filter = byId('crate-filter');
  const gallery = byId('cover-gallery');
  let selectedId = records[0]?.id;
  let active = records.slice();
  let touchStart = null;
  if (!records.length) {
    byId('album-title').textContent = 'Add your first record in js/listening-room.js';
    ['previous-album','next-album','previous-text','next-text'].forEach(id => byId(id).disabled = true);
    return;
  }

  function image(record) {
    const img = document.createElement('img');
    img.src = record.cover;
    img.alt = `${record.title} by ${record.artist} cover`;
    img.loading = 'lazy';
    img.addEventListener('error', () => { img.src = 'images/vinyl/missing-cover.svg'; }, { once: true });
    return img;
  }
  cover.addEventListener('error', () => {
    if (!cover.src.endsWith('/missing-cover.svg')) cover.src = 'images/vinyl/missing-cover.svg';
  });

  function select(id, animate = true) {
    const index = active.findIndex(r => r.id === id);
    if (index < 0) return;
    selectedId = id;
    const record = active[index];
    const disc = document.querySelector(".lr-vinyl");
const vinyl = record.vinyl || {};

disc.style.setProperty("--vinyl-color", vinyl.color || "#171716");
disc.style.setProperty("--vinyl-splatter", vinyl.splatter || "#ce3434");
disc.style.setProperty("--vinyl-label", vinyl.label || "#635334");
disc.style.setProperty("--vinyl-label-ink", vinyl.labelInk || "#d8bf88");

disc.dataset.design = vinyl.design || "solid";
disc.dataset.image = vinyl.image ? "true" : "false";

if (vinyl.image) {
    const imageURL = new URL(vinyl.image, document.baseURI).href;

    disc.style.setProperty(
        "--vinyl-image",
        `url("${imageURL}")`
    );
} else {
    disc.style.removeProperty("--vinyl-image");
}
    cover.src = record.cover;
    cover.alt = `${record.title} by ${record.artist} cover`;
const stage = byId("record-stage");
const card = document.querySelector(".lr-card");

if (animate) {
    stage.classList.remove("lr-changing");
    card?.classList.remove("lr-card-enter");

    void stage.offsetWidth;

    stage.classList.add("lr-changing");
    card?.classList.add("lr-card-enter");
}
    byId('album-title').textContent = record.title;
    byId('album-artist').textContent = record.artist;
    byId("album-runtime").textContent = record.runtime || "";
byId("album-runtime-field").hidden = !record.runtime;
byId("signed-sticker").hidden = record.signed !== true;
    byId('album-year').textContent = record.year || '';
    byId('album-tracks').textContent = (record.tracks || []).join(' · ') || 'Favorites coming soon.';
    byId('album-notes').textContent = record.notes || 'Thoughts coming soon.';
    byId('album-counter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(active.length).padStart(2, '0')}`;
    byId('demo-label').hidden = !record.demo;
    ['previous-album','next-album','previous-text','next-text'].forEach(id => byId(id).disabled = active.length < 2);
    renderCrate();
  }

  function step(delta) {
    const index = active.findIndex(r => r.id === selectedId);
    select(active[(index + delta + active.length) % active.length].id);
  }

  function renderCrate() {
    const root = byId('crate-sleeves');
    root.replaceChildren();
    const index = active.findIndex(r => r.id === selectedId);
    const count = Math.min(active.length, 5);
    const start = index - Math.floor(count / 2);
    for (let i = 0; i < count; i++) {
      const record = active[(start + i + active.length) % active.length];
      const button = document.createElement('button');
      button.className = 'lr-sleeve';
      button.setAttribute('aria-label', `View ${record.title} by ${record.artist}`);
      button.setAttribute('aria-pressed', String(record.id === selectedId));
      button.append(image(record));
      button.addEventListener('click', () => select(record.id));
      root.append(button);
    }
  }

  function renderGallery() {
    const query = byId('album-search').value.toLocaleLowerCase().trim();
    const matches = active.filter(r => `${r.title} ${r.artist}`.toLocaleLowerCase().includes(query));
    const grid = byId('gallery-grid');
    grid.replaceChildren();
    byId('gallery-empty').hidden = matches.length > 0;
    matches.forEach(record => {
      const button = document.createElement('button');
      button.className = 'lr-gallery-item';
      const title = document.createElement('strong'); title.textContent = record.title;
      const artist = document.createElement('span'); artist.textContent = record.artist;
      button.append(image(record), title, artist);
      button.addEventListener('click', () => { select(record.id); gallery.close(); });
      grid.append(button);
    });
  }

  [...new Set(records.map(r => r.genre).filter(Boolean))].forEach(genre => {
    const option = document.createElement('option'); option.value = genre; option.textContent = genre; filter.append(option);
  });
  filter.addEventListener('change', () => {
    active = records.filter(r => filter.value === 'all' || r.genre === filter.value);
    select(active.some(r => r.id === selectedId) ? selectedId : active[0].id);
  });
  ['previous-album','previous-text'].forEach(id => byId(id).addEventListener('click', () => step(-1)));
  ['next-album','next-text'].forEach(id => byId(id).addEventListener('click', () => step(1)));
  document.addEventListener('keydown', event => {
    if (gallery.open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); step(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  byId('record-stage').addEventListener('touchstart', event => {
    touchStart = { x:event.changedTouches[0].clientX, y:event.changedTouches[0].clientY };
  }, { passive:true });
  byId('record-stage').addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    touchStart = null;
  }, { passive:true });
  byId('view-all').addEventListener('click', () => {
    byId('album-search').value = ''; renderGallery(); gallery.showModal(); byId('album-search').focus();
  });
  byId('album-search').addEventListener('input', renderGallery);
  gallery.addEventListener('click', event => {
    if (event.target !== gallery) return;
    const box = gallery.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) gallery.close();
  });
  gallery.addEventListener('close', () => byId('view-all').focus());
  select(selectedId, false);
})();

/* Subtle floating dust */
(() => {
    const canvas = document.getElementById("lr-dust");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let particles = [];
    let frame = null;
    let previousTime = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;

        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const count = Math.min(
    800,
    Math.max(400, Math.round(width * height / 2500))
);

        particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: 0.4 + Math.random() * 1.1,
            speedX: 2 + Math.random() * 5,
            speedY: 1 + Math.random() * 3,
            opacity: 0.15 + Math.random() * 0.25,
            phase: Math.random() * Math.PI * 2
        }));
    }

    function draw(time) {
        const seconds = time / 1000;
        const delta = previousTime
            ? Math.min((time - previousTime) / 1000, 0.05)
            : 0;

        previousTime = time;
        ctx.clearRect(0, 0, width, height);

        for (const dust of particles) {
            dust.x += (
                dust.speedX +
                Math.sin(seconds * 0.25 + dust.phase) * 3
            ) * delta;

            dust.y -= dust.speedY * delta;

            if (dust.x > width + 5) dust.x = -5;
            if (dust.y < -5) dust.y = height + 5;

            /* Dust is brighter near the sunlit left side */
            const light = 0.35 + 0.65 * Math.max(
                0,
                1 - Math.abs(dust.x / width - 0.3) / 0.6
            );

            /* Rare glints, strongest where particles cross the sunlight */
const beamCenter = 0.3 + Math.sin(seconds * 0.08) * 0.04;

const inSunlight = Math.max(
    0,
    1 - Math.abs(dust.x / width - beamCenter) / 0.16
);

const glint = Math.pow(
    Math.max(0, Math.sin(seconds * 0.7 + dust.phase)),
    28
);

const shimmer =
    0.8 +
    Math.sin(seconds * 0.5 + dust.phase) * 0.2 +
    glint * inSunlight * 1.8;

            ctx.fillStyle =
                `rgba(255, 241, 207, ${
                    dust.opacity * light * shimmer
                })`;

            ctx.beginPath();
            ctx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        frame = requestAnimationFrame(draw);
    }

    function updateAnimation() {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previousTime = 0;

        if (!document.hidden && !reducedMotion.matches) {
            frame = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, width, height);
        }
    }

    resize();
    updateAnimation();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", updateAnimation);
    reducedMotion.addEventListener("change", updateAnimation);
})();

/* Background parallax and vinyl reflection */
(() => {
    const disc = document.querySelector(".lr-vinyl");

    if (disc && !disc.querySelector(".lr-vinyl-reflection")) {
        const reflection = document.createElement("div");
        reflection.className = "lr-vinyl-reflection";
        reflection.setAttribute("aria-hidden", "true");
        disc.append(reflection);
    }

    const body = document.body;
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = null;

    function moveBackground() {
        currentX += (targetX - currentX) * 0.045;
        currentY += (targetY - currentY) * 0.045;

        body.style.setProperty(
            "--lr-parallax-x",
            `${currentX.toFixed(2)}px`
        );

        body.style.setProperty(
            "--lr-parallax-y",
            `${currentY.toFixed(2)}px`
        );

        if (
            Math.abs(targetX - currentX) > 0.02 ||
            Math.abs(targetY - currentY) > 0.02
        ) {
            frame = requestAnimationFrame(moveBackground);
        } else {
            frame = null;
        }
    }

    function startMovement() {
        if (
            frame === null &&
            !reducedMotion.matches &&
            !document.hidden
        ) {
            frame = requestAnimationFrame(moveBackground);
        }
    }

    window.addEventListener("pointermove", event => {
        if (event.pointerType !== "mouse") return;
        if (reducedMotion.matches) return;

        /* Maximum movement: four pixels horizontally, three vertically */
        targetX = (event.clientX / window.innerWidth - 0.5) * -8;
        targetY = (event.clientY / window.innerHeight - 0.5) * -6;

        startMovement();
    }, { passive: true });

    document.documentElement.addEventListener("pointerleave", () => {
        targetX = 0;
        targetY = 0;
        startMovement();
    });

    function resetMovement() {
        if (frame !== null) cancelAnimationFrame(frame);

        frame = null;
        targetX = targetY = currentX = currentY = 0;

        body.style.setProperty("--lr-parallax-x", "0px");
        body.style.setProperty("--lr-parallax-y", "0px");
    }

    reducedMotion.addEventListener("change", resetMovement);
    document.addEventListener("visibilitychange", resetMovement);
})();

/* Place the controls directly on the background's brass labels */
(() => {
    const category = document.querySelector(".lr-category-label");
    const viewAll = document.getElementById("view-all");

    if (!category || !viewAll) return;

    const controls = document.createElement("div");
    controls.className = "lr-background-controls";

    controls.append(category, viewAll);
    document.body.append(controls);
})();
/* Add albums you want to collect inside this array. */
const wishlistRecords = [
    {
        title: "Heaven and Earth EP",
        artist: "Arcane Roots",
        cover: "images/vinyl/heaven-and-earth.png"
    },
    {
        title: "Dissonants",
        artist: "Hands Like Houses",
        cover: "images/vinyl/dissonants.png"
    },
    {
        title: "Higher",
        artist: "Chris Stapleton",
        cover: "images/vinyl/higher.png"
    },
        {
        title: "The Alchemy Index",
        artist: "Thrice",
        cover: "images/vinyl/alchemy.png"
    },
            {
        title: "Primrose Path",
        artist: "Dream State",
        cover: "images/vinyl/primrose.png"
    },
    {
    title: "Time Time Time(I'm in the Palm of your Hand)",
    artist: "Yndling",
    cover: "images/vinyl/time-time-time.png"
},
];

(() => {
    function initializeWishlist() {
        const button = document.getElementById("view-wishlist");
        const dialog = document.getElementById("wishlist-gallery");
        const grid = document.getElementById("wishlist-grid");
        const empty = document.getElementById("wishlist-empty");

        if (!button || !dialog || !grid || !empty) return;

        function renderWishlist() {
            grid.replaceChildren();

            empty.hidden = wishlistRecords.length > 0;
            empty.textContent =
                "Your wishlist is waiting for its first record.";

            wishlistRecords.forEach((record) => {
                const item = document.createElement("article");
                item.className = "lr-gallery-item";

                const art = document.createElement("div");
                art.className = "lr-wishlist-art";
                art.textContent = "Cover coming soon";

                if (record.cover) {
                    const img = document.createElement("img");
                    img.src = record.cover;
                    img.alt = `${record.title} by ${record.artist} cover`;
                    img.loading = "lazy";

                    img.addEventListener("error", () => {
                        art.textContent = "Cover coming soon";
                    }, { once: true });

                    art.replaceChildren(img);
                }

                const title = document.createElement("strong");
                title.textContent = record.title;

                const artist = document.createElement("span");
                artist.textContent = record.artist;

                item.append(art, title, artist);
                grid.append(item);
            });
        }

        button.addEventListener("click", () => {
            renderWishlist();
            dialog.showModal();
        });

        dialog.addEventListener("click", (event) => {
            if (event.target !== dialog) return;

            const bounds = dialog.getBoundingClientRect();

            if (
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom
            ) {
                dialog.close();
            }
        });

        dialog.addEventListener("close", () => {
            button.focus({ preventScroll: true });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeWishlist,
            { once: true }
        );
    } else {
        initializeWishlist();
    }
})();