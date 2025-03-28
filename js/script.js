// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             window.scrollTo({
//                 top: target.offsetTop - 70,
//                 behavior: 'smooth'
//             });
//         }
        
//         // Close mobile menu when link is clicked
//         const navbarCollapse = document.querySelector('.navbar-collapse');
//         if (navbarCollapse.classList.contains('show')) {
//             navbarCollapse.classList.remove('show');
//         }
//     });
// });

// // Back to top button functionality
// const backToTopButton = document.querySelector('.back-to-top');

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 300) {
//         backToTopButton.classList.add('active');
//     } else {
//         backToTopButton.classList.remove('active');
//     }
// });

// backToTopButton.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // Form submission
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         alert('Thank you for your message! I will get back to you soon.');
//         this.reset();
//     });
// }

// // Change navbar background on scroll
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });


// DOM Elements
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelector('.hamburger');
const contactForm = document.getElementById('contactForm');

// Toggle Navigation Menu
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Toggle hamburger animation
    if (hamburger.classList.contains('active')) {
        hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        hamburger.children[0].style.transform = 'none';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = 'none';
    }
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.children[0].style.transform = 'none';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = 'none';
    });
});

// Change header background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formElements = contactForm.elements;
        const name = formElements[0].value;
        const email = formElements[1].value;
        const subject = formElements[2].value;
        const message = formElements[3].value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
}

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.venture-card, .principle-card, .stat-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with opacity 0 for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.venture-card, .principle-card, .stat-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});