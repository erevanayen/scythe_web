console.log("I am running");
var offset = "0.3";

var themeToggle = true;
var hideToggle = true;
var counter = 0;
var limit = 5;

const logoEl = document.getElementById("logo");
const shadowEl = document.getElementById("logo_shadow");
const hiddenEl = document.getElementById("hidden");
const triggerEl = document.getElementById("trigger");

triggerEl.addEventListener("click", logoClick);

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

function logoClick() {
  if (hideToggle) {
    if (counter >= limit) {
      hiddenEl.style.color = `#EE00FF`;
      hideToggle = false;
    } else {
      counter += 1;
    }
  }
  slideElements();
}

function introAnim() {
  setTimeout(function () {
    slideElements();
  }, 500);
}

introAnim();
