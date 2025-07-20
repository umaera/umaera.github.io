// ---⭐ General Particles ⭐--- //
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        const isInteractive = Math.random() > 0.7;
        particle.className = isInteractive ? 'particle interactive' : 'particle normal';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * (isInteractive ? 12 : 6) + (isInteractive ? 6 : 2)) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';

        if (isInteractive) {
            particle.addEventListener('click', function(e) {
                e.stopPropagation();
                    // Create explosion of sparkles
                    for (let j = 0; j < 8; j++) {
                        setTimeout(() => {
                            createSparkle(
                                e.pageX + (Math.random() - 0.5) * 30,
                                e.pageY + (Math.random() - 0.5) * 30
                            );
                        }, j * 50);
                    }
                // Create glitch particles
                createGlitchParticles(e.pageX, e.pageY);
                        
                // Remove and recreate particle elsewhere
                setTimeout(() => {
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                }, 500);
            });
        }
                
    particlesContainer.appendChild(particle);
    }
}

// ---⭐ Rain Particles ⭐--- //
function createDigitalRain() {
    const rainContainer = document.getElementById('digitalRain');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            
    setInterval(() => {
        if (Math.random() > 0.8) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.textContent = chars[Math.floor(Math.random() * chars.length)];
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDelay = '0s';
            drop.style.animationDuration = (Math.random() * 2 + 2) + 's';
            rainContainer.appendChild(drop);

            setTimeout(() => {
                if (drop.parentNode) drop.remove();
            }, 4000);
        }
    }, 150);
}

// ---⭐ Glitch ⭐--- //
function createGlitchParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        const glitch = document.createElement('div');
        glitch.className = 'glitch-particle';
        glitch.style.left = x + 'px';
        glitch.style.top = y + 'px';
        glitch.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        glitch.style.animationDelay = (Math.random() * 0.5) + 's';
        document.body.appendChild(glitch);

        setTimeout(() => glitch.remove(), 1500);
    }
}

// ---⭐ Sparkle ⭐--- //
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
    sparkle.style.width = (Math.random() * 6 + 2) + 'px';
    sparkle.style.height = sparkle.style.width;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
}

