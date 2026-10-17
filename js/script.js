// =========================
// DAY / NIGHT EDITION
// =========================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "night") {

    document.body.classList.add("night-mode");

    if (themeIcon) {
        themeIcon.textContent = "☀";
    }

} else {

    document.body.classList.remove("night-mode");

    if (themeIcon) {
        themeIcon.textContent = "☾";
    }

}

if (themeToggle && themeIcon) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("night-mode");

        if (document.body.classList.contains("night-mode")) {

            themeIcon.textContent = "☀";
            localStorage.setItem("theme", "night");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to day mode"
            );

        } else {

            themeIcon.textContent = "☾";
            localStorage.setItem("theme", "day");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to night mode"
            );

        }

    });

}



const dateElement = document.getElementById("current-date");

if (dateElement) {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    dateElement.textContent = formattedDate.toUpperCase();
}

// =========================
// DAILY QUOTE
// =========================

const quotes = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        quote: "Programs must be written for people to read.",
        author: "Harold Abelson"
    },
    {
        quote: "The function of good software is to make the complex appear simple.",
        author: "Grady Booch"
    },
    {
        quote: "Any fool can write code that a computer can understand.",
        author: "Martin Fowler"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    }
];

const quoteElement = document.getElementById("daily-quote");
const authorElement = document.getElementById("quote-author");

if (quoteElement && authorElement) {

    const today = new Date();

    // Create a number representing today's calendar date
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const difference = today - startOfYear;

    const dayOfYear = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    // Select a quote based on the day
    const quoteIndex = dayOfYear % quotes.length;

    quoteElement.textContent = quotes[quoteIndex].quote;
    authorElement.textContent = "— " + quotes[quoteIndex].author;
}

// =========================
// MUSIC PLAYER
// =========================

// =========================
// MUSIC PLAYER
// =========================

const playlist = [
    {
        title: "Song One",
        artist: "Artist Name",
        file: "audio/song1.mp3"
    },
    {
        title: "Song Two",
        artist: "Artist Name",
        file: "audio/song2.mp3"
    },
    {
        title: "Song Three",
        artist: "Artist Name",
        file: "audio/song3.mp3"
    }
];

const audio = document.getElementById("music-audio");

const playButton = document.getElementById("play-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

const musicTime = document.getElementById("music-time");

let currentTrack = 0;


// LOAD TRACK

function loadTrack(index) {

    const track = playlist[index];

    audio.src = track.file;

    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;

    musicTime.textContent = "0:00";
}


// PLAY

function playMusic() {

    audio.play();

    playButton.textContent = "❚❚";
    playButton.setAttribute("aria-label", "Pause music");

}


// PAUSE

function pauseMusic() {

    audio.pause();

    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play music");

}


// PLAY / PAUSE BUTTON

playButton.addEventListener("click", () => {

    if (audio.paused) {
        playMusic();
    } else {
        pauseMusic();
    }

});


// NEXT SONG

nextButton.addEventListener("click", () => {

    currentTrack++;

    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }

    loadTrack(currentTrack);

    playMusic();

});


// PREVIOUS SONG

prevButton.addEventListener("click", () => {

    currentTrack--;

    if (currentTrack < 0) {
        currentTrack = playlist.length - 1;
    }

    loadTrack(currentTrack);

    playMusic();

});


// AUTOMATICALLY PLAY NEXT SONG

audio.addEventListener("ended", () => {

    currentTrack++;

    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }

    loadTrack(currentTrack);

    playMusic();

});


// TIMER

audio.addEventListener("timeupdate", () => {

    const minutes = Math.floor(audio.currentTime / 60);

    const seconds = Math.floor(audio.currentTime % 60)
        .toString()
        .padStart(2, "0");

    musicTime.textContent = `${minutes}:${seconds}`;

});


// LOAD FIRST TRACK

loadTrack(currentTrack);

// =========================
// VOLUME CONTROL
// =========================

const volumeSlider = document.getElementById("volume-slider");

if (audio && volumeSlider) {

    // Start at 50% volume
    audio.volume = volumeSlider.value;

    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
    });

}

// =========================
// DEVELOPMENT DESK DATE
// =========================

const deskDate = document.getElementById("desk-date");

if (deskDate) {

    const today = new Date();

    const formattedDeskDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    deskDate.textContent = formattedDeskDate.toUpperCase();
}

// =========================
// PAGE SCROLL RAILS
// =========================
const pageRails = document.querySelectorAll(".page-rail");

let railDragging = false;
let activeRail = null;
let activeMarker = null;


/* ----------------------------------------
   UPDATE MARKERS WHEN NORMAL PAGE SCROLLS
   ---------------------------------------- */

function updateScrollRails() {

    if (railDragging) return;

    const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    let scrollProgress = 0;

    if (scrollableHeight > 0) {
        scrollProgress = scrollTop / scrollableHeight;
    }

    scrollProgress = Math.max(
        0,
        Math.min(1, scrollProgress)
    );

    document
        .querySelectorAll(".rail-marker")
        .forEach((marker) => {

            marker.style.top =
                `${scrollProgress * 100}%`;

        });
}


/* ----------------------------------------
   SCROLL PAGE FROM MOUSE POSITION
   ---------------------------------------- */

function scrollFromRail(clientY) {

    if (!activeRail) return;

    const railRect =
        activeRail.getBoundingClientRect();

    let position =
        clientY - railRect.top;

    position = Math.max(
        0,
        Math.min(position, railRect.height)
    );

    const progress =
        position / railRect.height;


    /* Move BOTH markers */

    document
        .querySelectorAll(".rail-marker")
        .forEach((marker) => {

            marker.style.top =
                `${progress * 100}%`;

        });


    /* Scroll document */

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    window.scrollTo({
        top: scrollableHeight * progress,
        behavior: "auto"
    });
}


/* ----------------------------------------
   ENABLE DRAGGING
   ---------------------------------------- */

pageRails.forEach((rail) => {

    const marker =
        rail.querySelector(".rail-marker");

    if (!marker) return;


    /* Start drag */

    marker.addEventListener(
        "pointerdown",
        (event) => {

            event.preventDefault();

            railDragging = true;

            activeRail = rail;
            activeMarker = marker;

            marker.classList.add("dragging");

            marker.setPointerCapture(
                event.pointerId
            );

        }
    );


    /* Drag */

    marker.addEventListener(
        "pointermove",
        (event) => {

            if (!railDragging) return;

            scrollFromRail(event.clientY);

        }
    );


    /* Stop dragging */

    marker.addEventListener(
        "pointerup",
        (event) => {

            railDragging = false;

            marker.classList.remove("dragging");

            if (
                marker.hasPointerCapture(
                    event.pointerId
                )
            ) {

                marker.releasePointerCapture(
                    event.pointerId
                );

            }

            activeRail = null;
            activeMarker = null;

        }
    );


    marker.addEventListener(
        "pointercancel",
        () => {

            railDragging = false;

            marker.classList.remove("dragging");

            activeRail = null;
            activeMarker = null;

        }
    );

});


/* Normal scrolling */

window.addEventListener(
    "scroll",
    updateScrollRails,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateScrollRails
);


/* Initial position */

updateScrollRails();


// =========================
// POSTAGE ARCHIVE
// =========================

const stampCards =
    document.querySelectorAll(".stamp-card");

const stampModal =
    document.getElementById("stamp-modal");

const stampModalFront =
    document.getElementById("stamp-modal-front");

const stampModalBack =
    document.getElementById("stamp-modal-back");

const stampFlipper =
    document.getElementById("stamp-flipper");

const stampModalClose =
    document.getElementById("stamp-modal-close");


if (
    stampModal &&
    stampModalFront &&
    stampModalBack &&
    stampFlipper
) {

    // OPEN STAMP

    stampCards.forEach((card) => {

        card.addEventListener("click", () => {

            const frontImage =
                card.dataset.front;

            const backImage =
                card.dataset.back;


            stampModalFront.src =
                frontImage;

            stampModalBack.src =
                backImage;


            // Always open on front

            stampFlipper.classList.remove(
                "flipped"
            );


            stampModal.classList.add("open");

            stampModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        });

    });


    // FLIP

    function flipStamp() {

        stampFlipper.classList.toggle(
            "flipped"
        );

    }


    stampFlipper.addEventListener(
        "click",
        flipStamp
    );


    // KEYBOARD FLIP

    stampFlipper.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                flipStamp();

            }

        }
    );


    // CLOSE

    function closeStampModal() {

        stampModal.classList.remove("open");

        stampModal.setAttribute(
            "aria-hidden",
            "true"
        );

        stampFlipper.classList.remove(
            "flipped"
        );

        document.body.style.overflow = "";

    }


    if (stampModalClose) {

        stampModalClose.addEventListener(
            "click",
            closeStampModal
        );

    }


    // CLICK BACKDROP TO CLOSE

    stampModal.addEventListener(
        "click",
        (event) => {

            if (event.target === stampModal) {
                closeStampModal();
            }

        }
    );


    // ESCAPE TO CLOSE

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                stampModal.classList.contains("open")
            ) {

                closeStampModal();

            }

        }
    );

}