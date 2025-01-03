// Variables for footer copyright year
const currentYearEl = document.querySelector('.currentYearEl');

// CurrentYear logic
const getCurrentYear = () => {
      currentYearEl.textContent = new Date().getFullYear();
}

// Export getCurrentYear function to app.js
export default getCurrentYear;
