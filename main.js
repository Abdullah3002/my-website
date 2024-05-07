document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("menu-active");
    });

    // Close the menu when a navigation link is clicked
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navbar.classList.remove("menu-active");
        });
    });
});
