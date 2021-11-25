console.log("I am running");

var themeToggle = false;

const logoEl = document.getElementById("logo");

logoEl.addEventListener("click", changeTheme);

function changeTheme() {
  if (themeToggle) {
    // White logo
    logoEl.style.backgroundImage = `url("./scythe_v2/scythe_logo_est_color_2.svg")`;
  } else {
    // Color logo
    logoEl.style.backgroundImage = `url("./scythe_v2/scythe_logo_est_color.svg")`;
  }
  themeToggle = !themeToggle;
}

changeTheme();
