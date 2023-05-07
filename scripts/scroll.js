// Get the header element
const header = document.querySelector("header");

let prevScrollPos = window.pageYOffset;

// Function to handle scroll event
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.style.opacity = 1; // Show the header
    console.log("scolling up");
  } else {
    // Scrolling down
    header.style.opacity = 0; // Hide the header
    console.log("scolling down");
  }

  prevScrollPos = currentScrollPos;
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);
