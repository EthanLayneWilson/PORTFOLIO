/* Floating dust for the Reading Room. */
(() => {
    function initializeDust() {
        const canvas = document.getElementById("lr-dust");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        /* Adjust these values to customize the dust. */
const settings = {
    minimumParticles: 100,  // Increase for more dust
    maximumParticles: 200, // Maximum amount
    density: 81500,         // Lower number = more dust

    minimumRadius: 0.2,    // Smallest particle size
    maximumRadius: 1.5,    // Largest particle size

    minimumOpacity: 0.03, // Increase for brighter dust
    maximumOpacity: 0.4,

    horizontalSpeed: 2,    // Increase for faster sideways movement
    horizontalVariation: 5,
    upwardSpeed: 1,        // Increase for faster upward movement
    upwardVariation: 3,

    glintStrength: 1.1     // Increase for stronger sparkles
};

        let width = 0;
        let height = 0;
        let particles = [];
        let frame = null;
        let previousTime = 0;

        function resize() {
            const bounds = canvas.getBoundingClientRect();

            width = bounds.width;
            height = bounds.height;

            const pixelRatio = Math.min(
                window.devicePixelRatio || 1,
                1.5
            );

            canvas.width = Math.round(width * pixelRatio);
            canvas.height = Math.round(height * pixelRatio);

            ctx.setTransform(
                pixelRatio, 0,
                0, pixelRatio,
                0, 0
            );

            const count = Math.min(
                settings.maximumParticles,
                Math.max(
                    settings.minimumParticles,
                    Math.round(width * height / settings.density)
                )
            );

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,

                radius:
                    settings.minimumRadius +
                    Math.random() * (
                        settings.maximumRadius -
                        settings.minimumRadius
                    ),

                speedX:
                    settings.horizontalSpeed +
                    Math.random() * settings.horizontalVariation,

                speedY:
                    settings.upwardSpeed +
                    Math.random() * settings.upwardVariation,

                opacity:
                    settings.minimumOpacity +
                    Math.random() * (
                        settings.maximumOpacity -
                        settings.minimumOpacity
                    ),

                phase: Math.random() * Math.PI * 2
            }));

            previousTime = 0;
        }

        function draw(time) {
            frame = null;

            if (document.hidden || reducedMotion.matches) return;
            if (!width || !height) return;

            const seconds = time / 1000;

            const delta = previousTime
                ? Math.min((time - previousTime) / 1000, 0.05)
                : 0;

            previousTime = time;

            ctx.clearRect(0, 0, width, height);

            const beamCenter =
                0.3 + Math.sin(seconds * 0.08) * 0.04;

            for (const dust of particles) {
                dust.x += (
                    dust.speedX +
                    Math.sin(seconds * 0.25 + dust.phase) * 3
                ) * delta;

                dust.y -= dust.speedY * delta;

                if (dust.x > width + 5) dust.x = -5;
                if (dust.x < -5) dust.x = width + 5;
                if (dust.y < -5) dust.y = height + 5;

                /* Brighter near the warm light on the left. */
                const light = 0.35 + 0.65 * Math.max(
                    0,
                    1 - Math.abs(dust.x / width - 0.3) / 0.6
                );

                const inSunlight = Math.max(
                    0,
                    1 - Math.abs(
                        dust.x / width - beamCenter
                    ) / 0.16
                );

                /* Occasional soft glints in the sunlight. */
                const glint = Math.pow(
                    Math.max(
                        0,
                        Math.sin(seconds * 0.7 + dust.phase)
                    ),
                    28
                );

                const shimmer =
                    0.8 +
                    Math.sin(seconds * 0.5 + dust.phase) * 0.2 +
                    glint * inSunlight * settings.glintStrength;

                const opacity = Math.min(
                    1,
                    dust.opacity * light * shimmer
                );

                ctx.fillStyle = `rgba(255, 241, 207, ${opacity})`;

                ctx.beginPath();
                ctx.arc(
                    dust.x,
                    dust.y,
                    dust.radius,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }

            frame = requestAnimationFrame(draw);
        }

        function updateAnimation() {
            if (frame !== null) {
                cancelAnimationFrame(frame);
            }

            frame = null;
            previousTime = 0;

            if (
                !document.hidden &&
                !reducedMotion.matches &&
                width > 0 &&
                height > 0
            ) {
                frame = requestAnimationFrame(draw);
            } else {
                ctx.clearRect(0, 0, width, height);
            }
        }

        function handleResize() {
            resize();
            updateAnimation();
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        document.addEventListener(
            "visibilitychange",
            updateAnimation
        );

        reducedMotion.addEventListener(
            "change",
            handleResize
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeDust,
            { once: true }
        );
    } else {
        initializeDust();
    }
})();