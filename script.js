// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// Current Year in Footer
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} Advait Vora. All Rights Reserved.`;

}