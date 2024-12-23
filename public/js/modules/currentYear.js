// variables for footer copyright year
const currentYearEl = document.querySelector('.currentYearEl');

// currentYear logic
const getCurrentYear = () => {
      currentYearEl.textContent = new Date().getFullYear();
}

// exports
export default getCurrentYear;
