// variables for hamburgerButton, navbarMenu and hamburger icon
const hamburgerButton = document.querySelector(".navbar__hamburger");
const navbarMenu = document.querySelector(".navbar__menu");
const icon = hamburgerButton.querySelector(".navbar__hamburger-icon");

// navbar logic to toggle between hamburger btn and navabar menu
const navbarLogic = () => {
      document.addEventListener("DOMContentLoaded", function() {
            hamburgerButton.addEventListener("click", function() {
                navbarMenu.classList.toggle("active");
                icon.classList.toggle("active");
            });
      });
}

// export navabarLogic funtion to app.js
export default navbarLogic;