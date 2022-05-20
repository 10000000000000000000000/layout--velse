// Lav en variabel, der refererer til body
const body = document.querySelector("body");

// Lav en variabel, der refererer til ".mode"

const mode = document.querySelector(".mode");

// Lav funktionen "darkMode", som
// a) toggle'r klassen "dark" vha. classList og
// b) ændrer teksten på toggle-knappen til hhv. "Dark mode" eller "Light mode" vha. en if/else-sætning

function darkmode() {
  body.classList.toggle("dark");
}
mode.addEventListener("click, darkmode");

// Lav et klik-event på toggle, der sætter funktionen darkMode i gang
