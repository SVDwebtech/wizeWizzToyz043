// Imports
import getCurrentYear from "./modules/currentYear.js";
import navbarLogic from "./modules/navbar.js";

// Get current year for copyright year
getCurrentYear();

// Load navbar logic
navbarLogic();

// slider
document.addEventListener('DOMContentLoaded', () => {
      console.log('The document is fully loaded and parsed.');
    
      const slides = document.querySelectorAll('.slider__img');
      const navBtns = document.querySelectorAll('.slider__btn');
      const dots = document.querySelectorAll('.slider__dot');
      let counterIndex = 0;
      const slideInterval = 6000;
      let sliderIntervalId;
    
      // Start automatic slider
      function startSlider() {
        sliderIntervalId = setInterval(() => {
          changeSlide(counterIndex + 1);
        }, slideInterval);
      }
    
      // Stop automatic slider
      function stopSlider() {
        clearInterval(sliderIntervalId);
      }
    
      // Change slide
      function changeSlide(newIndex) {
        slides[counterIndex].style.opacity = 0;
        dots[counterIndex].classList.remove('active');
    
        counterIndex = (newIndex + slides.length) % slides.length; // Wrap around slides
    
        slides[counterIndex].style.opacity = 1;
        dots[counterIndex].classList.add('active');
      }
    
      // Add event listeners to navigation buttons
      navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          stopSlider();
          changeSlide(counterIndex + (index === 0 ? -1 : 1));
          startSlider();
        });
      });
    
      // Initialize
      slides[counterIndex].style.opacity = 1;
      dots[counterIndex].classList.add('active');
      startSlider();
    });