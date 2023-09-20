// Get the button element by its class
const barsIcon = document.querySelector('.bars-icon');

// Get the mobile menu element by its class
const mobileMenu = document.querySelector('.mobile-menu');

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
}

// Toggle the "active" class on the mobile menu when the button is clicked
barsIcon.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the click event from reaching the document
  mobileMenu.classList.toggle('active');
});

// Add a click event listener to the document to close the mobile menu when clicking anywhere else
document.addEventListener('click', function(event) {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnBarsIcon = barsIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBarsIcon) {
    closeMobileMenu();
  }
});

// Prevent clicks inside the mobile menu from closing it
mobileMenu.addEventListener('click', function(event) {
  event.stopPropagation();
});

// Optionally, you can add an event listener to close the menu when the window is resized
window.addEventListener('resize', closeMobileMenu);
