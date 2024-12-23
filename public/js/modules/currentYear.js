// variables for footer copyright year
const currentYearEl = document.querySelector('.currentYearEl');

// currentYear logic
const getCurrentYear = () => {
      currentYearEl.textContent = new Date().getFullYear();
}

// export getCurrentYear function to app.js
export default getCurrentYear;
