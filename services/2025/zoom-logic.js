document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        if (event.key === 'b') {
            // Lógica para aumentar o zoom
            document.body.style.zoom = parseFloat(getComputedStyle(document.body).zoom) + 0.1;
        } else if (event.key === 'n') {
            // Lógica para diminuir o zoom
            document.body.style.zoom = parseFloat(getComputedStyle(document.body).zoom) - 0.1;
        }
    }
});