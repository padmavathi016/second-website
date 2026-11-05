// ==========================================
// INDIAN MUSIC ACADEMY - JAVASCRIPT
// ==========================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".course-card, .faculty-card, .program-card, .testimonial-card, .why-card"
);

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name")?.value.trim();
        const email = document.querySelector("#email")?.value.trim();
        const phone = document.querySelector("#phone")?.value.trim();
        const course = document.querySelector("#course")?.value;

        if (!name || !email || !phone || !course) {
            alert("Please fill in all required fields.");
            return;
        }

        const message = document.createElement("div");
        message.className = "success-message";

        message.innerHTML = `
            <h3>Thank you, ${name}! 🎵</h3>
            <p>
                Your enquiry for <strong>${course}</strong> has been received.
                Our academy team will contact you soon.
            </p>
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.classList.add("show");
        }, 100);

        contactForm.reset();
    });
}

// ==========================================
// HEADER SHADOW ON SCROLL
// ==========================================

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});


// ==========================================
// BUTTON CLICK EFFECT
// ==========================================

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.97)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});


// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});