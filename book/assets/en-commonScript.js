// ------ Page Marker Update ------ //

const floatingDiv = document.getElementById('pageNumElement');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            floatingDiv.textContent = `Page: ${sectionId}`;
        }
    });
}, {
    threshold: 0.5,
});

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
    const scrollBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    if (scrollBottom) {
        floatingDiv.textContent = 'Final Page';
    } else {
        const currentSection = Array.from(sections).reverse().find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
        });
        
        if (currentSection) {
            const sectionId = currentSection.getAttribute('id');
            floatingDiv.textContent = `Page: ${sectionId}`;
        }
    }
});


// ------ Random Favicon System ------ //
const favicons = [
    '../../assets/icons/RedCircle.png',
    '../../assets/icons/OrangeCircle.png',
    '../../assets/icons/YellowCircle.png',
    '../../assets/icons/GreenCircle.png',
    '../../assets/icons/CyanCircle.png',
    '../../assets/icons/BlueCircle.png',
    '../../assets/icons/PurpleCircle.png',
    '../../assets/icons/VioletCircle.png',
    '../../assets/icons/FollyCircle.png',

    '../../assets/icons/RedSquare.png',
    '../../assets/icons/OrangeSquare.png',
    '../../assets/icons/YellowSquare.png',
    '../../assets/icons/GreenSquare.png',
    '../../assets/icons/CyanSquare.png',
    '../../assets/icons/BlueSquare.png',
    '../../assets/icons/PurpleSquare.png',
    '../../assets/icons/VioletSquare.png',
    '../../assets/icons/FollySquare.png',

    '../../assets/icons/RedTriangle.png',
    '../../assets/icons/OrangeTriangle.png',
    '../../assets/icons/YellowTriangle.png',
    '../../assets/icons/GreenTriangle.png',
    '../../assets/icons/CyanTriangle.png',
    '../../assets/icons/BlueTriangle.png',
    '../../assets/icons/PurpleTriangle.png',
    '../../assets/icons/VioletTriangle.png',
    '../../assets/icons/FollyTriangle.png',
];

const randomIcon = favicons[Math.floor(Math.random() * favicons.length)];
const newFavicon = document.createElement('link');
newFavicon.rel = 'icon';
newFavicon.type = 'image/png';
newFavicon.href = randomIcon;

const oldIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
oldIcons.forEach(icon => icon.remove());

document.head.appendChild(newFavicon);