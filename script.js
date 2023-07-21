const root = document.documentElement; // Root element of the document
const toggleSwitch = document.querySelector("#checkbox"); // Dark/Light mode toggle checkbox
const toggleIcon = document.getElementById("toggle-icon"); // Icon for Dark/Light mode
const image1 = document.querySelector("#image1"); // First image element
const image2 = document.querySelector("#image2"); // Second image element
const image3 = document.querySelector("#image3"); // Third image element
const nav = document.querySelector("#nav"); // Navigation bar element
const textBox = document.querySelector(".text-box"); // Text box element

function darkMode() {
  // Function for Dark Mode styles
  nav.style.background = "rgba(0 0 0 / 50%)";
  textBox.style.background = "rgba(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  image1.src = "img/undraw_proud_coder_dark.svg";
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
}

function lightMode() {
  // Function for Light Mode styles
  nav.style.background = "rgba(255 255 255 / 50%)";
  textBox.style.background = "rgba(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.src = "img/undraw_proud_coder_light.svg";
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
}

function switchTheme(event) {
  // Function to toggle between Dark Mode and Light Mode
  if (event.target.checked) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "ligt");
    lightMode();
  }
}

// check local storage for Theme
const currentTheme = localStorage.getItem("theme");

if(currentTheme) root.setAttribute('data-theme' , currentTheme);
if (currentTheme === "dark") {
  toggleSwitch.checked = true;
  darkMode();
}

toggleSwitch.addEventListener("change", switchTheme); // Listen for the toggle switch change event
