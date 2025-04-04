/* script.js */
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from propagating to document
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

// Close menu when clicking anywhere else on the document
document.addEventListener("click", (e) => {
  // Check if the mobile nav is active and click is outside of it
  if (
    mobileNav.classList.contains("active") &&
    !mobileNav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  }
});

// Add click event to mobile nav links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  });
});

// Prevent scroll from closing the menu by doing nothing on scroll events
document.addEventListener("scroll", () => {
  // This empty handler ensures the menu stays open while scrolling
});

// Optional: Prevent clicks inside mobile nav from closing the menu
// Uncomment if you want clicks inside the nav menu to not close it
/*
mobileNav.addEventListener("click", (e) => {
  e.stopPropagation();
});
*/
