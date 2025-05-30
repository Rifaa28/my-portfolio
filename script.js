// Mobile Menu Toggle
const menuIcon = document.querySelector('.bx-menu');
const closeIcon = document.querySelector('.bx-window-close');
const navbar = document.querySelector('.navbar');

// Function to check screen size and update menu visibility
function updateMenuVisibility() {
    if (window.innerWidth <= 768) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
        navbar.classList.remove('active');
    }
}

// Initial check
updateMenuVisibility();

// Update on window resize
window.addEventListener('resize', updateMenuVisibility);

// Show menu
menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

// Hide menu
closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
});

// Close menu when clicking on a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to your server
        // For now, we'll simulate a successful submission
        console.log('Form data:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('.text', {
    strings: ['Front end developer', 'Web Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
});