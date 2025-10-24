const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerDescription = document.getElementById('viewerDescription');
const imageCards = document.querySelectorAll('.image-card');

// Add click event to each image card
imageCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = card.querySelector('img');
        const description = card.getAttribute('data-description');
                
        viewerImage.src = img.src;
        viewerDescription.textContent = description;
        imageViewer.style.display = 'flex';
    });
});

// Close viewer when clicking outside the image
imageViewer.addEventListener('click', (e) => {
    if (e.target === imageViewer) {
        imageViewer.style.display = 'none';
    }
});

 // Prevent closing when clicking the image itself
viewerImage.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (imageViewer.style.display === 'flex') {
        if (e.key === 'Escape') {
            imageViewer.style.display = 'none';
        } else if (e.key === ' ') {
            e.preventDefault();
            window.open(viewerImage.src, '_blank');
        }
    }
});