let toggleDarkModeButton = document.getElementById("header__toggle-dark-mode");
let body = document.querySelector("body");
const n0 = 0;
const n1 = 1;
let state = 0;

function toggleDarkMode() {
    if (state === 0) {
        body.style.backgroundColor = "rgb(0,0,0)";
        body.style.color = "rgb(255,255,255)";
        state = 1;
    } else {
        body.style.backgroundColor = "rgb(255,255,255)";
        body.style.color = "rgb(0,0,0)";
        state = 0;
    }

}


toggleDarkModeButton.addEventListener("click", toggleDarkMode);

