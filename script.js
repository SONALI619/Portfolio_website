/* ══ MOBILE MENU: lock scroll when open ══ */
const toggle = document.getElementById('menu-toggle');
if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

/* ══ TYPING ANIMATION ══ */
const words = [
    "a Learner",
    "an EEE Student",
    "an Android Developer",
    "a Front-End Developer",
    "an IoT Enthusiast",
    "a Digital Marketer",
    "a Freelancer"
];

const typingText  = document.getElementById("typing-span");
let wordIndex     = 0;
let charIndex     = 0;
let isDeleting    = false;
const typeSpeed   = 100;
const eraseSpeed  = 60;
const pauseAfter  = 1400;

function type() {
    if (!typingText) return;
    const current = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, pauseAfter);
            return;
        }
    } else {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex  = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
            return;
        }
    }

    setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) type();
});

/* ══ NAV TAB SWITCHING ══ */
const navLinks = document.querySelectorAll(".navlink");
const sections = document.querySelectorAll(".content");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Update active nav
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        // Show matching section
        const tabName = link.dataset.tab;
        sections.forEach((sec) => {
            sec.classList.toggle("active", sec.id === tabName);
        });

        // Close mobile menu
        if (toggle && toggle.checked) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }
    });
});

/* ══ CONTACT FORM ══ */
function handleFormSubmit(e) {
    e.preventDefault();
    const msg = document.getElementById("form-success");
    if (msg) {
        msg.style.display = "block";
        e.target.reset();
        setTimeout(() => { msg.style.display = "none"; }, 5000);
    }
}
