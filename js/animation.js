document.addEventListener("DOMContentLoaded", function () {
    // Get current page path
    let currentLocation = window.location.pathname.split("/").pop();

    // Get all navbar links
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove("active");

        // Extract href filename from the link
        let linkPath = link.getAttribute("href").split("/").pop();

        // Check if the link matches the current page
        if (linkPath === currentLocation) {
            link.classList.add("active");
        }
    });
});
