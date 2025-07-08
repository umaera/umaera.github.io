// Add typing effect to the title
const title = document.querySelector('.header h1');
const text = title.textContent;
title.textContent = '';
let i = 0;

// Create animated particles
function createParticles() {
    const particles = document.querySelector('.particles');
    const particleCount = 50;
            
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particles.appendChild(particle);
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all version groups
document.querySelectorAll('.version-group').forEach(group => {
    observer.observe(group);
});

// Add click effects to update cards
document.querySelectorAll('.update-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Add some interactivity to the timeline
document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.querySelector('.particles').style.transform = `translateY(${rate}px)`;
});

function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
        
setTimeout(typeWriter, 500);
// Initialize
createParticles();