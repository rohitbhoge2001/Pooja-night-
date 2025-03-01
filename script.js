// Generate Falling Stars
function createStars() {
    const stars = document.getElementById("stars");
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        stars.appendChild(star);
    }
}

// Generate Floating Hearts
function createHearts() {
    const hearts = document.getElementById("hearts");
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 3 + "s";
        hearts.appendChild(heart);
    }
}

// Call Functions
createStars();
createHearts();
