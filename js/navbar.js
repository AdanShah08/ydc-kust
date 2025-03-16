document.addEventListener("DOMContentLoaded", function () {
    // Navbar Active Link Highlighting
    let currentLocation = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        link.classList.remove("active");
        let linkPath = link.getAttribute("href").split("/").pop();
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
