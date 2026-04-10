document.addEventListener("DOMContentLoaded", () => {
    // 1. Loader Logic
    // We simulate a minimum load time to show the beautiful loader,
    // combined with the actual window load event.
    let minTimePassed = false;
    let windowLoaded = false;

    setTimeout(() => {
        minTimePassed = true;
        hideLoader();
    }, 1200);

    window.addEventListener("load", () => {
        windowLoaded = true;
        hideLoader();
    });

    function hideLoader() {
        if (minTimePassed && windowLoaded) {
            document.body.classList.add("loaded");
        }
    }

    // fallback in case load event gets stuck
    setTimeout(() => {
        if (!document.body.classList.contains("loaded")) {
            document.body.classList.add("loaded");
        }
    }, 3000);

    // 2. Header Scroll Effect & Sticky WhatsApp Button
    const header = document.querySelector("header");
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    window.addEventListener("scroll", () => {
        // Sticky Header effect
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // WhatsApp Button visibility
        if (window.scrollY > 300) {
            whatsappBtn.classList.add("visible");
        } else {
            whatsappBtn.classList.remove("visible");
        }
    });

    // 3. Mobile Menu Toggle
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Change icon if using FontAwesome
            const icon = mobileBtn.querySelector("i");
            if(icon) {
                if(navLinks.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }

    // 4. Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
});
