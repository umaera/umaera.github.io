// Example JavaScript to handle interactivity for sidebar and cards

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`${item.textContent.trim()} clicked!`);
        });
    });

    // Add hover effect or other interactions if needed
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
