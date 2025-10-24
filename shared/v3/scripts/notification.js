const CURRENT_NOTIFICATION_DATE = '2025-10-24';

function checkNotifications() {
    const lastNotificationDate = localStorage.getItem('lastNotificationDate');

    if (!lastNotificationDate || lastNotificationDate !== CURRENT_NOTIFICATION_DATE) {
        showNotificationBadge();
    } else {
        hideNotificationBadge();
    }
}

function showNotificationBadge() {
    const newsElement = document.querySelector('.navelement[title="News"]');
    if (newsElement) {
        let badge = newsElement.querySelector('.notification-badge');
        if (!badge) {
            badge = document.createElement('div');
            badge.className = 'notification-badge';
            newsElement.appendChild(badge);
        }
        const newsIcon = newsElement.querySelector('.navicon');
        if (newsIcon) {
            newsIcon.style.filter = 'brightness(1.5) saturate(1.5)';
        }
    }
}

function hideNotificationBadge() {
    const newsElement = document.querySelector('.navelement[title="News"]');
    if (newsElement) {
        const badge = newsElement.querySelector('.notification-badge');
        if (badge) {
            badge.remove();
        }
        const newsIcon = newsElement.querySelector('.navicon');
        if (newsIcon) {
            newsIcon.style.filter = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', checkNotifications);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkNotifications);
} else {
    checkNotifications();
}

// #################### //
localStorage.setItem('lastNotificationDate', CURRENT_NOTIFICATION_DATE);

const newsHeader = document.getElementById('newsHeader');
const topIsland = document.getElementById('topIsland');
const filterTabs = document.querySelectorAll('.filter-tab');
const islandFilters = document.querySelectorAll('.island-filter');
const newsItems = document.querySelectorAll('.news-item');

let lastScroll = 0;
const scrollThreshold = 200;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
        newsHeader.classList.add('scrolled');
        topIsland.classList.add('visible');
    } else {
        newsHeader.classList.remove('scrolled');
        topIsland.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;
        updateFilter(filter);

        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        islandFilters.forEach(f => {
            if (f.dataset.filter === filter) {
                f.classList.add('active');
            } else {
                f.classList.remove('active');
            }
        });
    });
});

islandFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const filterValue = filter.dataset.filter;
        updateFilter(filterValue);

        islandFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        filterTabs.forEach(t => {
            if (t.dataset.filter === filterValue) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    });
});

function updateFilter(filter) {
    newsItems.forEach(item => {
        const categories = item.dataset.category.split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
            item.style.display = 'flex';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
        }
    });
}