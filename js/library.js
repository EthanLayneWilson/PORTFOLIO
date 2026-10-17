const books = [

  
  {
    id: "being-and-time",
    title: "Being and Time",
    author: "Martin Heidegger"
  },
  {
    id: "storyteller",
    title: "The Storyteller",
    author: "Dave Grohl"
  },

  {
    id: "collection-volsunga-saga",
    title: "Völsunga Saga",
    author: "Anonymous",
    notes: `Write your thoughts here.`
},
{
    id: "collection-practical-stock-doctor",
    title: "The Practical Stock Doctor",
    author: "George Arthur Waterman",
    notes: `If you live on a ranch, this is your Bible.

An essential reference for animal care—one I'll return to time and again.`
  },
  
  {

    
    id: "ocarina-of-time",
    title: "The Legend of Zelda: Ocarina of Time",
    author: "Akira Himekawa"
  },
{
    id: "unidentified-book",
    title: "Thunder Mountain",
    author: "Zane Grey",
    notes: `Write your thoughts here.`
},
{
    id: "fly-fishing",
    title: "The Little Red Book of Fly Fishing",
    author: "Kirk Deeter and Charlie Meyers",
    cover: "images/books/redbook.png",
    notes: ""
},
  {
    id: "exactly-what-to-say-first",
    title: "Exactly What to Say: The Magic Words for Influence and Impact",
    author: "Phil M. Jones",
    cover: "images/books/exactly-what-to-say.png",
  },
  {
    id: "mysterious-stranger",
    title: "The Mysterious Stranger",
    author: "Mark Twain",
    cover: "images/books/mysterious-stranger.png",
  },
  {
    id: "second-lean",
    title: "2 Second Lean",
    author: "Paul Akers",
    cover: "images/books/2-second-lean.png",
  },
  {
    id: "twelve-rules",
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    cover: "images/books/12.png",
  },
  {
    id: "beyond-order",
    title: "Beyond Order: 12 More Rules for Life",
    author: "Jordan B. Peterson",
    cover: "images/books/12-2.png",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "images/books/atomic-habits.png",
  },
  {
    id: "principles",
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    cover: "images/books/principles.png",
  },
  {
    id: "unscaled",
    title: "Unscaled",
    author: "Hemant Taneja with Kevin Maney",
    cover: "images/books/unscaled.png",
  },
  {
    id: "never-split",
    title: "Never Split the Difference: Negotiating As If Your Life Depended On It",
    author: "Chris Voss with Tahl Raz",
    cover: "images/books/never-split.png",
  },
  {
    id: "daily-edge",
    title: "The Daily Edge",
    author: "David Horsager",
    cover: "images/books/daily-edge.png",
  },
  {
    id: "five-dysfunctions",
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    cover: "images/books/5-dysfunctions.png",
  },
  {
    id: "management-2024",
    title: "HBR’s 10 Must Reads on Management 2024",
    author: "Harvard Business Review",
    cover: "images/books/hbr.png",
  },
  {
    id: "managing-yourself",
    title: "HBR’s 10 Must Reads 2024: The Definitive Management Ideas of the Year",
    author: "Harvard Business Review",
    cover: "images/books/hbr-2.png",
  },
  {
    id: "carved-in-stone",
    title: "Character Carved in Stone: The 12 Core Virtues of West Point That Build Leaders and Produce Success",
    author: "Pat Williams and Jim Denney",
    cover: "images/books/cc.png",
  },
  {
    id: "tuesdays-with-morrie",
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    cover: "images/books/tuesdays.png",
  },
  {
    id: "last-lecture",
    title: "The Last Lecture",
    author: "Jeffrey Zaslow and Randy Pausch",
    cover: "images/books/the-last-lecture.png",
  },
  {
    id: "outsider",
    title: "The Odyssey",
    author: "Homer"
  },
  {
    id: "win-friends",
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie"
  },
  {
    id: "exactly-what-to-say-second",
    title: "Exactly What to Say",
    author: "Phil M. Jones"
  },
  {
    id: "nineteen-eighty-four",
    title: "1984",
    author: "George Orwell"
  },
  {
    id: "tiger-in-the-well",
    title: "The Tiger in the Well",
    author: "Philip Pullman"
  },
  {
    id: "wilderness-essays",
    title: "Wilderness Essays",
    author: "John Muir"
  },
  {
    id: "all-creatures",
    title: "All Creatures Great and Small",
    author: "James Herriot"
  }
  
];

document.querySelectorAll(".new-library-book").forEach((button) => {
  const id = button.dataset.book;

  if (books.some((book) => book.id === id)) return;

  books.push({
    id,
    title:
      button.dataset.title ||
      button.querySelector(".book-spine-title").textContent.trim(),
    author:
      button.querySelector(".book-spine-author").textContent.trim(),
    notes: "Personal notes coming soon.",
    connection: "Connections to the archive coming soon."
  });
});

const redwallTitles = [
  "Redwall",
  "Mossflower",
  "Mattimeo",
  "Mariel of Redwall",
  "Salamandastron",
  "Martin the Warrior",
  "The Bellmaker",
  "Outcast of Redwall",
  "The Pearls of Lutra",
  "The Long Patrol",
  "Marlfox",
  "The Legend of Luke",
  "Lord Brocktree",
  "The Taggerung",
  "Triss",
  "Loamhedge",
  "Rakkety Tam",
  "High Rhulain",
  "Eulalia!",
  "Doomwyte",
  "The Sable Quean",
  "The Rogue Crew"
];

redwallTitles.forEach((title, index) => {
  books.push({
    id: `redwall-${String(index + 1).padStart(2, "0")}`,
    title,
    author: "Brian Jacques",
    notes:
      "Read. Part of my completed Redwall collection.",
    connection:
      "Personal reflections on this book coming soon."
  });
});

function initializeLibrary() {
  const dialog = document.getElementById("book-dialog");
  const cover = document.getElementById("book-dialog-cover");
  const title = document.getElementById("book-dialog-title");
  const author = document.getElementById("book-dialog-author");
  const cardTitle = document.getElementById("library-card-title");
  const cardAuthor = document.getElementById("library-card-author");

  if (!dialog || !cover || !title || !author) return;

  const booksById = new Map(
    books.map((book) => [book.id, book])
  );

  let selectedButton = null;

  document.querySelectorAll(".bookshelf .shelf-book").forEach((book) => {
    if (book.parentElement.classList.contains("book-slot")) return;

    const slot = document.createElement("div");
    slot.className = "book-slot";

    book.before(slot);
    slot.append(book);
  });

  document.querySelectorAll(".shelf-book[data-book]").forEach((button) => {
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "book-dialog");

    const book = booksById.get(button.dataset.book);
    if (!book) return;

    button.setAttribute(
      "aria-label",
      `Open ${book.title}${book.author ? ` by ${book.author}` : ""}`
    );

    button.addEventListener("click", () => {
      selectedButton = button;

      title.textContent = book.title;
      author.textContent = book.author || "";

      if (cardTitle) cardTitle.textContent = book.title;
      if (cardAuthor) cardAuthor.textContent = book.author || "";

      // Read the cover path from the shelf button or book data.
      const coverPath = button.dataset.cover || book.cover;

      cover.hidden = true;
      cover.removeAttribute("src");
      cover.alt = "";

      if (coverPath) {
        cover.alt = `${book.title} cover`;

        cover.onerror = () => {
          cover.hidden = true;
        };

        cover.src = coverPath;
        cover.hidden = false;
      }

      const cardNotes = document.getElementById("library-card-notes");

if (cardNotes) {
    cardNotes.textContent = book.notes || "Thoughts coming soon.";
}

      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;

    const bounds = dialog.getBoundingClientRect();

    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) dialog.close();
  });

  dialog.addEventListener("close", () => {
    selectedButton?.focus({ preventScroll: true });
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeLibrary,
    { once: true }
  );
} else {
  initializeLibrary();
}

(() => {
    function initializeWoodenShelves() {
        const bookshelf = document.getElementById("bookshelf");
        if (!bookshelf) return;

        let frame;

        function drawShelves() {
            bookshelf
                .querySelectorAll(".library-wood-shelf")
                .forEach(shelf => shelf.remove());

            // Use the slots your existing script creates.
            // Fall back to book buttons if slots aren't present.
            const slots = Array.from(bookshelf.children).filter(
                element => element.classList.contains("book-slot")
            );

            const items = slots.length
                ? slots
                : Array.from(bookshelf.children).filter(
                    element => element.classList.contains("shelf-book")
                );

            const bottoms = items
                .filter(item => item.getClientRects().length)
                .map(item => {
    const book = item.matches(".shelf-book")
        ? item
        : item.querySelector(".shelf-book");

    const element = book || item;

    let bottom = element.offsetHeight;
    let current = element;

    while (current && current !== bookshelf) {
        bottom += current.offsetTop;
        current = current.offsetParent;
    }

    return bottom;
})
                .sort((a, b) => a - b);

            const rows = [];

            bottoms.forEach(bottom => {
                const previous = rows[rows.length - 1];

                if (previous === undefined || bottom - previous > 8) {
                    rows.push(bottom);
                } else {
                    rows[rows.length - 1] = Math.max(previous, bottom);
                }
            });

const room = bookshelf.closest(".reading-room");
const roomBounds = room.getBoundingClientRect();
const shelfBounds = bookshelf.getBoundingClientRect();

rows.forEach(bottom => {
    const shelf = document.createElement("div");

    shelf.className = "library-wood-shelf";
    shelf.setAttribute("aria-hidden", "true");

    shelf.style.top = `${bottom}px`;

    /* Extend slightly underneath both side boards. */
    shelf.style.left =
        `${roomBounds.left - shelfBounds.left - 2}px`;

    shelf.style.right =
        `${shelfBounds.right - roomBounds.right - 2}px`;

    bookshelf.appendChild(shelf);
});
        }

        function scheduleUpdate() {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(drawShelves);
        }

        scheduleUpdate();

        window.addEventListener("resize", scheduleUpdate);

        new ResizeObserver(scheduleUpdate).observe(bookshelf);

        document.fonts.ready.then(scheduleUpdate);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeWoodenShelves,
            { once: true }
        );
    } else {
        initializeWoodenShelves();
    }
})();