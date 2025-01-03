// Imports
import getCurrentYear from "./modules/currentYear.js";
import navbarLogic from "./modules/navbar.js";
import { indicators, currentIndex, activateSlide, startSlider, stopSlider } from "./modules/slider.js"

// Get current year for copyright year
getCurrentYear();

// Load navbar logic
navbarLogic();

// Event listener for indicators in slider
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    stopSlider(); // Stop autoplay when user interacts
    activateSlide(index);
    currentIndex = index; // Update the current index
    startSlider(); // Restart autoplay
  });
});

// Initialize the slider
activateSlide(currentIndex);
startSlider();
