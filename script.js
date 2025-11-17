// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    // Logo click to scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        logo.style.cursor = 'pointer';
    }
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const sectionId = targetId.substring(1); // Remove the # symbol
            
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos comunicaremos contigo pronto.');
            this.reset();
        });
    }
    
    // Update active nav link on scroll
    let sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let scrollY = window.pageYOffset;
        const heroHeight = document.getElementById('home')?.offsetHeight || 0;
        
        // If we're in the hero section, remove all active states
        if (scrollY < heroHeight - 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            return;
        }
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const linkHref = link.getAttribute('href');
                    if (linkHref === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});

