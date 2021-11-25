console.log("I am running");

var themeToggle = true;

const logoEl = document.getElementById("logo");

logoEl.addEventListener("click", changeTheme);

function changeTheme() {
  if (themeToggle) {
    // White logo
    logoEl.style.backgroundImage = `url("./scythe_v2/scythe_logo_est.svg")`;
    logoEl.style.filter = `invert()`;
  } else {
    // Color logo
    logoEl.style.backgroundImage = `url("./scythe_v2/scythe_logo_est_color.svg")`;
    logoEl.style.filter = `none`;
  }
  themeToggle = !themeToggle;
}

changeTheme();
