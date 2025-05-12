document.addEventListener('DOMContentLoaded', function() {
    // Animazione background
    const immagineSfondo = document.querySelector('.background-image');
    immagineSfondo.onload = function() {
        immagineSfondo.classList.add('loaded');
    };

    // Animazione hero section
    setTimeout(() => {
        document.querySelector('.hero-section').classList.add('visible');
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-title').style.transform = 'translateY(0)';
        document.querySelector('.hero-text').style.opacity = '1';
        document.querySelector('.hero-text').style.transform = 'translateY(0)';
    }, 300);

    // Animazione sezioni al scroll
    function animateOnScroll() {
        const sections = document.querySelectorAll('.content-section, .timeline-item');
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerPoint) {
                section.classList.add('visible');
            }
        });
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});