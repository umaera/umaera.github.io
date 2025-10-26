/* === Interactions === */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

const scrollArrow = document.querySelector('.ob-hero-scroll');
if (scrollArrow) {
	scrollArrow.addEventListener('click', () => {
		const featuresSection = document.getElementById('features');
		if (featuresSection) {
			featuresSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
}

const nav = document.querySelector('.ob-nav');
window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		nav.style.background = 'rgba(10, 10, 15, 0.95)';
	} else {
		nav.style.background = 'rgba(10, 10, 15, 0.8)';
	}
});

const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

document.querySelectorAll('.ob-feature-card').forEach((card, index) => {
	card.style.opacity = '0';
	card.style.transform = 'translateY(30px)';
	card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
	observer.observe(card);
});

document.querySelectorAll('.ob-preview-feature').forEach((feature, index) => {
	feature.style.opacity = '0';
	feature.style.transform = 'translateY(30px)';
	feature.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
	observer.observe(feature);
});

document.querySelectorAll('.ob-preview-gallery-item').forEach((item, index) => {
	item.style.opacity = '0';
	item.style.transform = 'translateY(30px)';
	item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
	observer.observe(item);
});
