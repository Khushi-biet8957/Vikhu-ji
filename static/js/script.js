const reasonCards  = document.querySelectorAll('.reason-card');
reasonCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("open");

    });
});
const openLetterButton = document.getElementById("openLetter");
const loveLetter = document.getElementById("loveLetter");
openLetterButton.addEventListener("click", () => {
    loveLetter.hidden = !loveLetter.hidden;
    openLetterButton.textContent = loveLetter.hidden
        ? "Open Your Letter 💌"
        : "Close Your Letter 💗";

    if (!loveLetter.hidden) {
        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});
function createHearts(count = 20) {
    const container = document.getElementByID = d("hearts");
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = Math.random() > 0.5 ?
            "♥" : "♡";
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (14 + Math.random() * 24) + "px";
        heart.style.animationDelay = (Math.random() * 1.5) + "s";
        container.appendChild(heart);
        heart.addEventListener("animationend", () => {
            heart.remove();

        });

    }
}
const surpriseButton = document.getElementById("surpriseButton");
const finalMessage = document.getElementById("finalMessage");
surpriseButton.addEventListener("click", () => {
    finalMessage.hidden = false;
    surpriseButton.textContent = "Surprise Opened ❤️";
    surpriseButton.disabled = "true";
    createHearts(45);
    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});