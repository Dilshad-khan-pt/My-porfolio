
const texts = ["About My Life", "About My Career", "About My Learning ", "About My Everything"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000; // Delay between current and next text

const dynamicTextElement = document.getElementById('dynamicText');

function type() {
    if (charIndex < texts[textIndex].length) {
        dynamicTextElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed + 500);
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', function() {
    if (texts.length) setTimeout(type, newTextDelay + 250);
});