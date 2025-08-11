/* ========== Reveal Elements on Scroll ========== */
document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(element => {
        const position = element.getBoundingClientRect();

        // If element is close to view, reveal it
        if (position.top < window.innerHeight - 100) {
            element.classList.add("visible");
        }
    });
});

/* ========== Smooth Scrolling for Navigation Links ========== */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Find the target section and scroll smoothly
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* ========== Typewriter Effect ========== */
const textToType = "Welcome to My Website"; // The sentence to type
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typewriter").textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Speed in ms
    }
}

// Start the typing effect after page load
window.onload = typeWriter;
