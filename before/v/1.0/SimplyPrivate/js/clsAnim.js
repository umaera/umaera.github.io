function closeToIndex() {

    var p = document.querySelector('.closeP');

    if (p) {
        p.style.animation = 'closepmedia 2s ease-out';
    }

    setTimeout(function() {
        window.location.href = 'index.html';
      }, 1800);
  }