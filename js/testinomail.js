document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");

    function revealTestimonials() {
        const triggerBottom = window.innerHeight * 0.85; // Adjust trigger point

        testimonials.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealTestimonials);
    revealTestimonials(); // Run once on page load
});
