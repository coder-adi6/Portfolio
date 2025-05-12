// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    skillBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = bar.style.getPropertyValue('width');
        }
    });
});
// Typing Effect
const typewriter = document.querySelector(".typewriter");
const words = ["a Coder", "a Developer", "a Designer" , "a CS Engineer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typewriter.textContent = currentWord.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Pause before typing next word
    } else {
        setTimeout(type, isDeleting ? 100 : 150); // Typing speed
    }
}
// Initialize typing effect
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


type();

// Back-to-Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Fade-in animations on scroll
const fadeIns = document.querySelectorAll('.fade-in');
const testimonials = document.querySelectorAll('.testimonial');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Observe all fade-in elements
fadeIns.forEach(fadeIn => observer.observe(fadeIn));
testimonials.forEach(testimonial => observer.observe(testimonial));

// Bouncing scroll arrow functionality
const scrollArrow = document.querySelector('.scroll-arrow');
scrollArrow.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
// Modal Functionality
const modal = document.getElementById("eventModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Data for Events
const eventsData = [
    {
        title: "Event Title 1",
        description: "Details about Event 1. This could include your achievements or memorable moments.",
        image: "event1.jpg",
    },
    {
        title: "Event Title 2",
        description: "Details about Event 2. Highlight key aspects of your participation.",
        image: "event2.jpg",
    },
];

// Open Modal
function openModal(index) {
    const event = eventsData[index - 1];
    modalImage.src = event.image;
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    modal.style.display = "none";
}

// Close Modal on Click Outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
