// Back-to-Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Bouncing scroll arrow functionality
const scrollArrow = document.querySelector('.scroll-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Hamburger Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLi = document.querySelectorAll('.nav-links li a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLi.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' }); // Activates when section is in the middle of the screen

sections.forEach(section => {
    if (section) {
        observer.observe(section);
    }
});

// Preloader removal
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing) {
    window.addEventListener('mousemove', (e) => {
        // Update dot position instantly
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        // Add a slight trailing delay to the ring for a fluid effect
        setTimeout(() => {
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
        }, 60);
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .nav-toggle, .scroll-arrow');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
}

// Particles.js Initialization for Hero Section
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": { "number": { "value": 70, "density": { "enable": true, "value_area": 800 } }, "color": { "value": ["#00ffff", "#ff00c8", "#39ff14"] }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });
}
