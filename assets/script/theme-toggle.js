const html = document.querySelector('html');
let darkMode = localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode"))
         : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

const toggleTheme = function() {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode.toString());
    setTheme();
}

const setTheme = function() {
    html.classList.add(darkMode ? "theme-dark" : "theme-light");
    html.classList.remove(!darkMode ? "theme-dark" : "theme-light");
}

setTheme();
const toggleButton = document.getElementById("theme-toggle")
toggleButton.addEventListener('click', toggleTheme);
toggleButton.checked = darkMode;