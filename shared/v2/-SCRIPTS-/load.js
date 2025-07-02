window.addEventListener("load", () => {
      const overlay = document.getElementById("loading-overlay");
      overlay.classList.add("fade-out");

      setTimeout(() => {
        overlay.remove();
      }, 800);
});