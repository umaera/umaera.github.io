const bgNum = 'bgNum';
const bgSwitcher = document.getElementById('bgSwitcher');

// Background images array
const bgImages = [
    '../images/bgs/pasa.webp',
    '../images/bgs/vibesky.jpg',
    '../images/bgs/pan_cityview.jpg',
    '../images/bgs/pan_forestview.jpg',
    '../images/bgs/rust.jpg',
    '../images/bgs/room_vines.webp',
    '../images/bgs/moony.jpg',
];

// Total number of backgrounds (automatically calculated)
const totalBgs = bgImages.length;

document.addEventListener("DOMContentLoaded", () => {
    // Initialize background
    if (!localStorage.getItem(bgNum)) {
        localStorage.setItem(bgNum, "1");
    }
    updateBackground();
});

bgSwitcher.addEventListener("click", () => {
    cycleBgNum();
    updateBackground();
});

function cycleBgNum() {
    let currentBg = parseInt(localStorage.getItem(bgNum)) || 1;
    let nextBg = currentBg + 1;
    
    // Loop back to 1 if we exceed the total number of backgrounds
    if (nextBg > totalBgs) {
        nextBg = 1;
    }
    
    localStorage.setItem(bgNum, nextBg.toString());
    bgSwitcher.textContent = `bg ${nextBg}`;
}

function updateBackground() {
    const currentBg = parseInt(localStorage.getItem(bgNum)) || 1;
    
    // Ensure currentBg is within valid range
    const validBg = Math.max(1, Math.min(currentBg, totalBgs));
    
    const imageUrl = bgImages[validBg - 1]; // Array is 0-indexed
    
    // Update CSS variable
    document.documentElement.style.setProperty('--bg-img', `url('${imageUrl}')`);
    
    // Update button text
    bgSwitcher.textContent = `Theme ${validBg}`;

    // Update localStorage if value was corrected
    if (validBg !== currentBg) {
        localStorage.setItem(bgNum, validBg.toString());
    }
}