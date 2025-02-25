document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

