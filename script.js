// =========================================================
// BACKGROUND MUSIC
// =========================================================

const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let musicStarted = false;

function startMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(() => {

            musicStarted = true;

            if (musicToggle) {
                musicToggle.textContent = "🎵";
                musicToggle.classList.add("music-playing");
            }

        })
        .catch(() => {

            console.log("Music waiting for user interaction.");

        });
}

function toggleMusic() {

    if (!backgroundMusic) return;

    if (backgroundMusic.paused) {

        backgroundMusic.play()
            .then(() => {

                musicStarted = true;

                musicToggle.textContent = "🎵";
                musicToggle.classList.add("music-playing");

            });

    } else {

        backgroundMusic.pause();

        musicToggle.textContent = "🔇";
        musicToggle.classList.remove("music-playing");
    }
}




// =========================================================
// OPENING → 11 YEARS
// =========================================================

function openStory() {
startMusic();
    document.getElementById("app").innerHTML = `
        <main class="story-page">
            <div class="story-orbit"></div>

            <section class="story-hero">

                <p class="story-small">
                    OUR STORY
                </p>

                <h1>
                    11 Years<br>
                    <span>of Us ❤️</span>
                </h1>

                <div class="heart-divider">
                    ─── ♡ ───
                </div>

                <p class="story-text">
                    Eleven years of memories, laughter,
                    adventures, challenges, and countless
                    moments that became our story.
                </p>

                <button onclick="chapter1()">
                    Begin Our Journey ♡
                </button>

            </section>
        </main>
    `;
}


// =========================================================
// CHAPTER 01
// =========================================================

function chapter1() {

    document.getElementById("app").innerHTML = `
        <main class="chapter-page">

            <div class="chapter-glow"></div>

            <section class="chapter">

                <div class="chapter-number">
                    CHAPTER 01
                </div>

                <h1>
                    How It<br>
                    <span>All Began ❤️</span>
                </h1>

                <div class="heart-line">
                    ♡ &nbsp; ♡ &nbsp; ♡
                </div>

                <p>
                    Before there were eleven years of memories,
                    there was simply <strong>us.</strong>
                </p>

                <p>
                    One moment became another,
                    another became memories,
                    and somehow those memories became
                    the life we've built together.
                </p>

                <button onclick="chapter2()">
                    Continue Our Story ♡
                </button>

            </section>
        </main>
    `;
}


// =========================================================
// CHAPTER 02
// =========================================================

// =========================================================
// CHAPTER 02
// =========================================================

// =========================================================
// CHAPTER 02 — PHOTO GALLERY
// =========================================================

const memoryPhotos = [
    "gallery/memory-01.jpg",
    "gallery/memory-02.jpg",
    "gallery/memory-03.jpg",
    "gallery/memory-04.jpg",
    "gallery/memory-05.jpg"
];

let currentMemory = 0;

function chapter2() {

    currentMemory = 0;

    document.getElementById("app").innerHTML = `
        <main class="chapter-two-page">

            <div class="memory-glow"></div>

            <section class="memory-chapter">

                <div class="chapter-number">
                    CHAPTER 02
                </div>

                <h1>
                    The Memories<br>
                    <span>We Made ❤️</span>
                </h1>

                <div class="photo-gallery">

                    <div class="photo-frame">

                        <img
                            id="memoryPhoto"
                            src="${memoryPhotos[0]}"
                            alt="Our memory"
                        >

                        <div class="photo-shine"></div>

                    </div>

                    <div class="photo-controls">

                        <button
                            class="gallery-arrow"
                            onclick="previousMemory()"
                            aria-label="Previous photo"
                        >
                            ♡
                        </button>

                        <div class="photo-counter">
                            <span id="photoNumber">01</span>
                            <span class="counter-line">/</span>
                            <span>05</span>
                        </div>

                        <button
                            class="gallery-arrow"
                            onclick="nextMemory()"
                            aria-label="Next photo"
                        >
                            ♥
                        </button>

                    </div>

                </div>

                <p class="memory-text">
                    Eleven years isn't just a number.
                    It's thousands of little moments —
                    the laughs, the adventures, the random
                    days, and everything in between.
                </p>

                <button onclick="chapter3()">
                    THERE'S MORE ♡
                </button>

            </section>

        </main>
    `;

    startMemorySlideshow();
}


// =========================================================
// NEXT PHOTO
// =========================================================

function nextMemory() {

    currentMemory++;

    if (currentMemory >= memoryPhotos.length) {
        currentMemory = 0;
    }

    changeMemoryPhoto();
}


// =========================================================
// PREVIOUS PHOTO
// =========================================================

function previousMemory() {

    currentMemory--;

    if (currentMemory < 0) {
        currentMemory = memoryPhotos.length - 1;
    }

    changeMemoryPhoto();
}


// =========================================================
// CHANGE PHOTO
// =========================================================

function changeMemoryPhoto() {

    const photo = document.getElementById("memoryPhoto");
    const number = document.getElementById("photoNumber");

    if (!photo) return;

    photo.classList.remove("photo-changing");

    void photo.offsetWidth;

    photo.src = memoryPhotos[currentMemory];

    photo.classList.add("photo-changing");

    number.textContent =
        String(currentMemory + 1).padStart(2, "0");
}


// =========================================================
// AUTO SLIDESHOW
// =========================================================

let memoryTimer;

function startMemorySlideshow() {

    clearInterval(memoryTimer);

    memoryTimer = setInterval(() => {

        nextMemory();

    }, 5000);
}


// =========================================================
// CHAPTER 03
// =========================================================

function chapter3() {

    document.getElementById("app").innerHTML = `
        <main class="chapter-three-page">

            <div class="strength-glow"></div>

            <section class="strength-chapter">

                <div class="chapter-number">
                    CHAPTER 03
                </div>

                <h1>
                    Through The<br>
                    <span>Good & Bad ❤️</span>
                </h1>

                <p class="quote">
                    "We didn't have to be perfect.
                    We just had to keep choosing each other."
                </p>

                <div class="heart-divider">
                    ─── ♥ ───
                </div>

                <p>
                    There were beautiful days.
                    There were difficult ones too.
                </p>

                <p>
                    But through every chapter,
                    we kept finding our way back to each other.
                </p>

                <button onclick="nextChapterFour()">
                    KEEP GOING ♡
                </button>

            </section>
        </main>
    `;
}


// =========================================================
// CHAPTER 04
// =========================================================

function nextChapterFour() {

    document.getElementById("app").innerHTML = `
        <main class="chapter-four-page">

            <div class="forever-glow"></div>

            <section class="forever-chapter">

                <div class="chapter-number">
                    CHAPTER 04
                </div>

                <h1>
                    11 Years<br>
                    <span>Together ❤️</span>
                </h1>

                <div class="big-heart">
                    ♥
                </div>

                <p>
                    Eleven years later,
                    we're still writing our story.
                </p>

                <p>
                    And the best part?
                    <strong>We're not finished yet.</strong>
                </p>

                <button onclick="finalChapter()">
                    ONE LAST CHAPTER ♡
                </button>

            </section>
        </main>
    `;
}


// =========================================================
// FINAL CHAPTER
// =========================================================

function finalChapter() {

    document.getElementById("app").innerHTML = `
        <main class="final-page">

            <div class="final-glow"></div>

            <section class="final-chapter">

                <div class="final-heart">
                    ♥
                </div>

                <p class="final-small">
                    OUR STORY CONTINUES
                </p>

                <h1>
                    Forever<br>
                    <span>With You ❤️</span>
                </h1>

                <p class="final-text">
                    11 years down.<br>
                    A lifetime to go.
                </p>

                <div class="final-line">
                    ───── ♡ ─────
                </div>

                <p class="forever">
                    Happy Birthday, My Mahal.<br>
                    Here's to us. ❤️
                </p>

            </section>

        </main>
    `;
}