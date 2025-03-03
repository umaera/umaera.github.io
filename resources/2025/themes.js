
document.addEventListener("DOMContentLoaded", function () {
    var count25theme = "defaultTheme";

function updateTheme(){
    //a script will be here
    if (count25theme === "defaultTheme"){
        defaultTheme();
    }
    if (count25theme === "red"){
        redTheme();
    }
}

function defaultTheme(){
    document.getElementById('circle1').style.background = "linear-gradient(45deg, #ff007f, #ff00ff)";
    document.getElementById('circle2').style.background = "linear-gradient(45deg, #ff007f, #ff00ff)";
    document.getElementById('coutdown').style.backgroundColor = "#30303048";
    count25theme = "defaultTheme"
}

function redTheme(){
    document.getElementById('circle1').style.backgroundColor = "linear-gradient(45deg, #ff002f, #ff2200)";
    document.getElementById('circle2').style.backgroundColor = "linear-gradient(45deg, #ff002f, #ff2200)";
    document.getElementById('coutdown').style.backgroundColor = "#00000000";
    count25theme = "red";
}

    setInterval(updateTheme, 5000);

  });