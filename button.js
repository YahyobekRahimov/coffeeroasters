// Get the button element by its class
const barsIcon = document.querySelector('.bars-icon');

// Get the mobile menu element by its class
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle the "active" class on the mobile menu when the button is clicked
barsIcon.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
});
