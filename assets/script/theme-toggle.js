let darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
const html = document.querySelector('html');
const toggleTheme = function() {
    darkMode = !darkMode
    let theme = darkMode ? "theme-dark" : "theme-light";
    localStorage.setItem("theme", theme);
    
    html.classList.remove(html.classList.toString() || "theme-default");
    html.classList.add(theme);
}

var storedTheme = localStorage.getItem("theme");
if (storedTheme)
{
    html.classList.add(storedTheme);
    darkMode = storedTheme === "theme-dark";
}

const toggleButton = document.getElementById("theme-toggle")
toggleButton.addEventListener('click', toggleTheme);
toggleButton.checked = darkMode;
