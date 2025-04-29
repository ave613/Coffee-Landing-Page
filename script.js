// Back to Top Button
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;

    // Show button when user has scrolled 80% of the page
    if ((scrolled / scrollTotal) > 0.8) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
};

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Navbar Toggle Functionality
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',    
    duration: 1000,      
    delay: 200,         
    reset: false       
});

// Reveal sections
sr.reveal('.about-text', {origin: 'left', delay: 100});
sr.reveal('.about-image', {origin: 'right', delay: 100});
sr.reveal('.product h1', {origin: 'top', delay: 50});
sr.reveal('.item', {interval: 50});  
sr.reveal('.features h2', {origin: 'top', delay: 50});
sr.reveal('.feature-item', {interval: 50});
sr.reveal('.testimonial-card', {interval: 100}); 
sr.reveal('.newsletter-content', {delay: 100});
sr.reveal('.faq-item', {interval: 50});
sr.reveal('.blog-card', {interval: 100});
sr.reveal('.contact-item', {interval: 100});