const bgNum = 'bgNum';
const bgSwitcher = document.getElementById('bgSwitcher');

const bgImages = [
    '../images/bgs/pasa.webp',
    '../images/bgs/vibesky.jpg',
    '../images/bgs/pan_cityview.jpg',
    '../images/bgs/pan_forestview.jpg',
    '../images/bgs/rust.jpg',
    '../images/bgs/room_vines.webp',
    '../images/bgs/moony.jpg',
];

const totalBgs = bgImages.length;

document.addEventListener("DOMContentLoaded", () => {
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

    if (nextBg > totalBgs) {
        nextBg = 1;
    }
    
    localStorage.setItem(bgNum, nextBg.toString());
    bgSwitcher.textContent = `bg ${nextBg}`;
}

function updateBackground() {
    const currentBg = parseInt(localStorage.getItem(bgNum)) || 1
    const validBg = Math.max(1, Math.min(currentBg, totalBgs));
    const imageUrl = bgImages[validBg - 1];
    document.documentElement.style.setProperty('--bg-img', `url('${imageUrl}')`);

    bgSwitcher.textContent = `Theme ${validBg}`;

    if (validBg !== currentBg) {
        localStorage.setItem(bgNum, validBg.toString());
    }
}