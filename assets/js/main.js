let toggleDarkModeButton = document.getElementById("header__toggle-dark-mode");
let body = document.querySelector("html");
let state = 0;

function toggleDarkMode() {
    if (state === 0) {
        body.style.backgroundColor = "rgb(3,0,46)";
        body.style.color = "rgb(255,255,255)";
        state = 1;
    } else {
        body.style.backgroundColor = "rgb(255,255,255)";
        body.style.color = "rgb(0,0,0)";
        state = 0;
    }
}

toggleDarkModeButton.addEventListener("click", toggleDarkMode);

