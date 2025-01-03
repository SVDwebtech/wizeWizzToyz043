// JavaScript for the Slider
const slides = document.querySelectorAll('.slider__slide');
const indicators = document.querySelectorAll('.slider__indicator');
let currentIndex = 0;
let interval;

// Function to activate a specific slide
const activateSlide = (index) => {
  // Deactivate all slides and indicators
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  // Activate the current slide and indicator
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
};

// Function to go to the next slide
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  activateSlide(currentIndex);
};

// Function to set up the slider autoplay
const startSlider = () => {
  interval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
};

// Function to stop the slider autoplay
const stopSlider = () => {
  clearInterval(interval);
};

export { indicators, currentIndex, activateSlide, startSlider, stopSlider };