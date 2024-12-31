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

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "✨Bem-vindo(a) a 2025!✨";
        document.getElementById("gma").innerHTML = " ";
    }

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `
        <span>${days}</span>d
        <span>${hours}</span>h
        <span>${minutes}</span>m
        <span>${seconds}</span>s
    `;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Feliz Ano Novo!";
    }
}, 1000);

//  <span>${months}</span> meses         