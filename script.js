const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
        } else {
            entry.target.classList.remove("reveal-active");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});

function createHeart() {
    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.className = "fixed bottom-0 text-[#d97991] animate-floating-heart pointer-events-none";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";

    document.querySelector("main").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1000);