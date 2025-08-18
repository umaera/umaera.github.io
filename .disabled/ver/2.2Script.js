function updateChronometer() {
    let now = new Date().getTime();
  
    let elapsedTime = now - startTime;
    
    let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    
 
    let timeString = "process time: ";
    
    if (days > 0) {
      timeString += `${days} day${days !== 1 ? 's' : ''} `;
    }
    if (hours > 0) {
      timeString += `${hours} hour${hours !== 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
      timeString += `${minutes} minute${minutes !== 1 ? 's' : ''} `;
    }
    if (seconds > 0 || elapsedTime < 1000) {
      timeString += `${seconds} second${seconds !== 1 ? 's' : ''}`;
    }
    
    document.getElementById("chro").textContent = timeString.trim();
  }
  
  let startTime;
  
  function startChronometer() {
    startTime = new Date().getTime(); 
    setInterval(updateChronometer, 1000);
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    startChronometer();
  });