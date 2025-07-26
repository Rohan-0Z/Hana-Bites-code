// ==========================
// Hana Bites - Main Scripts
// ==========================

// ----- Responsive Navigation -----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 900) navLinks.classList.remove('open');
    });
});

// ----- Smooth Scrolling Navigation -----
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ----- Section Reveal on Scroll -----
function revealSections() {
    const sections = document.querySelectorAll('section');
    const windowH = window.innerHeight;
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < windowH - 80) {
            sec.classList.add('visible');
        } else {
            sec.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// ----- Feedback Form Interaction -----
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validation
    const name = document.getElementById('fb-name').value.trim();
    const email = document.getElementById('fb-email').value.trim();
    const rating = document.getElementById('fb-rating').value;
    const suggestion = document.getElementById('fb-suggestion').value.trim();
    if (!name || !email || !rating || !suggestion) {
        alert("Please fill out all fields and select a rating.");
        return;
    }
    // Confirmation & reset
    feedbackForm.reset();
    const btn = feedbackForm.querySelector('.feedback-submit');
    btn.textContent = "Thank You!";
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = "Submit Feedback";
        btn.disabled = false;
    }, 1700);
    alert('Thank you for your feedback, ' + name + '!');
});

// ----- Login Form Interaction -----
const loginForm = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const loginPassword = document.getElementById('login-password');
togglePassword.addEventListener('click', () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        togglePassword.style.color = "#ffb347";
    } else {
        loginPassword.type = "password";
        togglePassword.style.color = "";
    }
});
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }
    const btn = loginForm.querySelector('.login-submit');
    btn.textContent = "Logging in...";
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = "Login";
        btn.disabled = false;
        alert("Welcome back to Hana Bites!");
        loginForm.reset();
    }, 1200);
});

// ----- Active Link Highlighting -----
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 120;
    let found = false;
    sections.forEach(sec => {
        if (
            scrollPos >= sec.offsetTop &&
            scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
            document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector('.nav-link[href="#' + sec.id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
                found = true;
            }
        }
    });
    // Highlight Home if nothing else
    if (!found) {
        document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
    }
});

// ----- End of script.js -----