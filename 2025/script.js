const targetDate = new Date("January 1, 2025 00:00:00").getTime();
const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

   const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));  
    const remainingTime = difference - months * (1000 * 60 * 60 * 24 * 30.44);
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `
        <span>${hours}</span>h
        <span>${minutes}</span>m
        <span>${seconds}</span>s
    `;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "00:00:00";
        if (userLang.startsWith('pt') || userLang.startsWith('br')) {
            document.getElementById('gma').textContent = '✨Bem-vindo(a) a 2025!✨';
        } else {
            document.getElementById('gma').textContent = '✨Welcome to 2025!✨';
        }
    }

}, 1000);

window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith('pt') || userLang.startsWith('br')) {
        document.getElementById('gma').textContent = 'para ✨2025✨';
    } else {
        document.getElementById('gma').textContent = 'to ✨2025✨';
    }
};
//  <span>${months}</span> meses              <span>${days}</span>d   