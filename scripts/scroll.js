// Get the header element
const header = document.querySelector("header");

let prevScrollPos = window.pageYOffset;

// Function to handle scroll event
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos < 200) {
    // Scrolling up
    header.style.opacity = 1; // Show the header
  } else {
    // Scrolling down
    header.style.opacity = 0; // Hide the header
  }

  prevScrollPos = currentScrollPos;
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);
