// navbar logic to toggle between hamburger btn and navabar menu
const navbarLogic = () => {
      document.addEventListener("DOMContentLoaded", function() {
            // variables for hamburgerButton, navbarMenu and hamburger icon
            const hamburgerButton = document.querySelector(".navbar__hamburger");
            const navbarMenu = document.querySelector(".navbar__menu");
            const navItems = document.querySelectorAll(".navbar__menu-item");
            const icon = hamburgerButton.querySelector(".navbar__hamburger-icon");
            hamburgerButton.addEventListener("click", function() {
                  navbarMenu.classList.toggle("active");
                  navbarMenu.classList.toggle("navbarMenuOpenAnimation");
                  let counter = 0;
                  for(let item of navItems) {
                        if (item.classList.contains("navItemMoveInAnimation")) {
                              item.classList.toggle("navItemMoveInAnimation");
                        } else {
                              counter = 200 + counter;
                              setTimeout(function() {
                                    item.classList.toggle("navItemMoveInAnimation");
                              }, (1500 + counter))
                        }
                  }
                  icon.classList.toggle("active");
            });
      });
}

// export navabarLogic funtion to app.js
export default navbarLogic;