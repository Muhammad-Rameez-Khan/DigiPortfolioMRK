// script.js

// Function to toggle navigation menu on small screens
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Add event listeners
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

window.addEventListener('scroll', function() {
    // Your scroll event code
}, { passive: true });

