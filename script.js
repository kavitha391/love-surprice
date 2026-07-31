// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const finalBtn = document.getElementById("finalBtn");

// Sections
const welcome = document.querySelector(".welcome");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const final = document.getElementById("final");

// Open Letter
startBtn.addEventListener("click", () => {
    welcome.classList.add("hidden");
    letter.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Open Gallery
nextBtn.addEventListener("click", () => {
    letter.classList.add("hidden");
    gallery.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Final Surprise
finalBtn.addEventListener("click", () => {
    gallery.classList.add("hidden");
    final.classList.remove("hidden");

    createHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Floating Hearts Effect
function createHearts() {

    for (let i = 0; i < 40; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "110vh";
            heart.style.transform =
                "translateX(" + (Math.random() * 300 - 150) + "px)";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6500);
    }
}

// Auto Hearts Every 8 Seconds
setInterval(createHearts, 8000);
