document.addEventListener("DOMContentLoaded", function () {
    // Get current page path without query parameters or hash fragments
    let currentLocation = window.location.pathname.split("/").pop().split("?")[0].split("#")[0];

    // If no file name (e.g., "example.com/"), default to "index.html"
    if (currentLocation === "" || currentLocation === "/") {
        currentLocation = "index.html";
    }

    // Get all navbar links
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove("active");

        // Extract only the filename from the href
        let linkPath = link.getAttribute("href").split("/").pop().split("?")[0].split("#")[0];

        // Check if the link matches the current page
        if (linkPath === currentLocation) {
            link.classList.add("active");
        }
    });

    // Spinner Hide and Announcement Modal Trigger
    setTimeout(function () {
        let spinner = document.getElementById("spinner");
        if (spinner) {
            spinner.classList.add("hide");
        }

        // Show Announcement Modal after Spinner Completes
        if (window.jQuery) {
            setTimeout(function () {
                $("#announcementModal").modal("show");
            }, 500); // Delay to ensure smooth transition
        } else {
            console.error("jQuery not loaded. Ensure Bootstrap and jQuery are included.");
        }
    }, 1000); // Spinner hides after 1 second
});
