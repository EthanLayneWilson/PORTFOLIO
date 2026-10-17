(() => {
    const dialog = document.getElementById("stamp-notes-dialog");
    if (!dialog) return;

    const flipper = dialog.querySelector(".stamp-notes-flipper");
    const image = document.getElementById("stamp-notes-image");
    const notes = document.getElementById("stamp-notes-text");
    const closeButton = dialog.querySelector(".stamp-notes-close");

    let selectedStamp = null;
    let flipTimer = null;

    function cancelAutoFlip() {
        window.clearTimeout(flipTimer);
        flipTimer = null;
    }

    document.querySelectorAll(".stamp-card").forEach((stamp) => {
        stamp.setAttribute("aria-haspopup", "dialog");
        stamp.setAttribute("aria-controls", dialog.id);

        stamp.addEventListener("click", () => {
            cancelAutoFlip();
            selectedStamp = stamp;

const frontURL = new URL(
    stamp.dataset.front,
    document.baseURI
).href;

flipper.style.setProperty(
    "--stamp-outline",
    `url("${frontURL}")`
);

function matchStampSize() {
    if (!image.naturalWidth || !image.naturalHeight) return;

    flipper.style.setProperty(
        "--stamp-ratio",
        image.naturalWidth / image.naturalHeight
    );
}

image.onload = matchStampSize;
image.src = frontURL;

if (image.complete) {
    matchStampSize();
}
            image.alt = stamp.querySelector("img")?.alt || "Stamp";

            notes.textContent =
                stamp.dataset.notes?.trim() ||
                "Personal notes coming soon.";

            /* Reset to the front before opening. */
            flipper.classList.remove("is-flipped");

            dialog.showModal();
            dialog.scrollTop = 0;

            /* Let the enlarged front appear, then reveal the notes. */
            flipTimer = window.setTimeout(() => {
                if (dialog.open) {
                    flipper.classList.add("is-flipped");
                }
            }, 1100);
        });
    });

    flipper.addEventListener("click", () => {
        cancelAutoFlip();
        flipper.classList.toggle("is-flipped");
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
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
        cancelAutoFlip();
        selectedStamp?.focus({ preventScroll: true });
    });
})();