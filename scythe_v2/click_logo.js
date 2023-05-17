let logoToggle = false;
const logoEl = document.getElementById("logo");

logoEl.addEventListener("click", logoClick);

function logoClick() {
  if (logoToggle) {
    logoEl.style.backgroundImage = `url("./scythe_v2/assets/80s_logo_yellow.png")`;
  } else {
    logoEl.style.backgroundImage = `url("./scythe_v2/assets/80s_logo_yellow_outline.png")`;
  }

  logoToggle = !logoToggle;
}
