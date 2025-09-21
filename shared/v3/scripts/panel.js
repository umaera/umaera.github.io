const sidepanel = 'sidepanel';
const tools = document.getElementById('tools');
const right = document.querySelectorAll('.right');
const left = document.querySelectorAll('.left');

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem(sidepanel)) {
        localStorage.setItem(sidepanel, "true");
        showpanel();
    }

    if (localStorage.getItem(sidepanel) === "true") {
        showpanel();
    } else {
        hidepanel();
    }
});

tools.addEventListener("click", () => {
    if (localStorage.getItem(sidepanel) === "true") {
        hidepanel();
    } else {
        showpanel();
    }
});

function showpanel() {
    localStorage.setItem(sidepanel, "true");
    right.forEach(el => {
        el.style.width = '';
    });
    left.forEach(el => {
        el.style.width = '';
    });
  tools.textContent = 'hide panel';
}

function hidepanel() {
    localStorage.setItem(sidepanel, "false");
    right.forEach(el => {
        el.style.width = '0%';
    });
    left.forEach(el => {
        el.style.width = '100%';
    });
    tools.textContent = 'show panel';
}

// === For mobile - dropdown === //
function setDropdownState(isOpen) {
    const dropdown = document.querySelector('.newsDropdown');
    const content = document.getElementById('newsDropdownContent');
    const arrow = document.querySelector('.dropdownArrow');

    if (isOpen) {
        content.classList.add('open');
        dropdown.classList.add('open');
        arrow.textContent = '▴';
    } else {
        content.classList.remove('open');
        dropdown.classList.remove('open');
        arrow.textContent = '▾';
    }
}

function toggleNewsDropdown() {
    const content = document.getElementById('newsDropdownContent');
    const isCurrentlyOpen = content.classList.contains('open');
    const newState = !isCurrentlyOpen;

    setDropdownState(newState);
    localStorage.setItem('sidepanel', newState.toString());
}


document.addEventListener('DOMContentLoaded', function() {
    const savedState = localStorage.getItem('sidepanel');
    const isOpen = savedState === 'true';
    setDropdownState(isOpen);
});