// navbar logic to toggle between hamburger btn and navabar menu
const navbarLogic = () => {
      document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.navbar__hamburger');
            const menu = document.querySelector('.navbar__menu');
          
            hamburger.addEventListener('click', () => {
                  menu.classList.toggle('active');
                  hamburger.classList.toggle('active');
          
                  // Animate menu items on open
                  const menuItems = document.querySelectorAll('.navbar__menu-item');
                  if (menu.classList.contains('active')) {
                        menuItems.forEach((item, index) => {
                              item.style.animation = `navItemMoveIn 0.75s forwards ${index * 0.1}s`;
                        });
                  } else {
                        menuItems.forEach((item) => {
                              item.style.animation = ''; // Reset animation
                        });
                  }
            });
      });  
}

// export navabarLogic funtion to app.js
export default navbarLogic;