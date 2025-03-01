document.addEventListener("DOMContentLoaded", function() {
    function createFallingElement(className, count) {
        const container = document.getElementById(className);
        for (let i = 0; i < count; i++) {
            let element = document.createElement("div");
            element.className = className.slice(1);
            element.style.left = Math.random() * 100 + "vw";
            element.style.animationDuration = (Math.random() * 5 + 3) + "s";
            element.style.animationDelay = Math.random() * 5 + "s";
            container.appendChild(element);
        }
    }

    createFallingElement("stars", 50);
    createFallingElement("hearts", 15);
});
