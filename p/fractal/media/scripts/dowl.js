let selectedOS = null;
let selectedFormat = null;

const downloadBtn = document.getElementById("download-btn");
const downloadPopup = document.getElementById("download-popup");
const downloadActionBtn = document.getElementById("download-action-btn");

// Open popup
downloadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openDownloadPopup();
});

function openDownloadPopup() {
  downloadPopup.classList.add("active");
}

function closeDownloadPopup() {
  downloadPopup.classList.remove("active");
  resetSelection();
}

function resetSelection() {
  selectedOS = null;
  selectedFormat = null;
  document.querySelectorAll(".option-card").forEach((card) => {
    card.classList.remove("selected");
  });
  downloadActionBtn.disabled = true;
}

function selectOS(os) {
  selectedOS = os;
  updateSelection();
}

function selectFormat(format) {
  selectedFormat = format;
  updateSelection();
}

function updateSelection() {
  document
    .querySelectorAll(".options-row")[0]
    .querySelectorAll(".option-card")
    .forEach((card, index) => {
      const osValues = ["windows", "mac", "linux"];
      if (osValues[index] === selectedOS) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });

  document
    .querySelectorAll(".options-row")[1]
    .querySelectorAll(".option-card")
    .forEach((card, index) => {
      const formatValues = ["executable", "code"];
      if (formatValues[index] === selectedFormat) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });

  downloadActionBtn.disabled = !(selectedOS && selectedFormat);
}

downloadActionBtn.addEventListener("click", function () {
  if (selectedOS && selectedFormat) {
    const downloadURL = constructDownloadURL(selectedOS, selectedFormat);

    // Log the selection for debugging
    console.log(`Downloading for ${selectedOS} - ${selectedFormat}`);
    console.log(`URL: ${downloadURL}`);

    // Trigger download or redirect
    if (downloadURL) {
      window.location.href = downloadURL;
    }
    setTimeout(closeDownloadPopup, 500);
  }
});

function constructDownloadURL(os, format) {
  const baseURL =
    "https://github.com/NotYarazi/fractal/releases/download/0.8.0";

  // Map selections to file names or URLs
  const fileMap = {
    "windows-executable": `${baseURL}/FRACTAL-0.8.0-Setup.exe`,
    "windows-code": `https://github.com/NotYarazi/fractal/archive/refs/tags/0.8.0.zip`,
    "mac-executable": `${baseURL}/FRACTAL-0.8.0-arm64.dmg`,
    "mac-code": `https://github.com/NotYarazi/fractal/archive/refs/tags/0.8.0.zip`,
    "linux-executable": `${baseURL}/FRACTAL-0.8.0.AppImage`,
    "linux-code": `https://github.com/NotYarazi/fractal/archive/refs/tags/0.8.0.zip`,
  };

  return fileMap[`${os}-${format}`] || null;
}

// Close popup when clicking outside
downloadPopup.addEventListener("click", function (e) {
  if (e.target === downloadPopup) {
    closeDownloadPopup();
  }
});
