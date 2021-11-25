console.log("I am running");
var offset = "0.3";

var themeToggle = true;

const logoEl = document.getElementById("logo");
const shadowEl = document.getElementById("logo_shadow");

logoEl.addEventListener("click", slideElements);

function slideElements() {
  if (themeToggle) {
    // Slide top
    logoEl.style.top = `-${offset}vw`;
    shadowEl.style.top = `${offset}vw`;
    // Slide left
    logoEl.style.left = `-${offset}vw`;
    shadowEl.style.left = `${offset}vw`;
  } else {
    // Slide top
    logoEl.style.top = `0vw`;
    shadowEl.style.top = `0vw`;
    // Slide left
    logoEl.style.left = `0vw`;
    shadowEl.style.left = `0vw`;
  }
  themeToggle = !themeToggle;
}

function introAnim() {
  setTimeout(function () {
    slideElements();
  }, 500);
}

introAnim();
