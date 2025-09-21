var open = false

function openmenu(){
    if (open === false){
        document.getElementById("menu").style.top = "90%";
        open = true;
    } else {
        document.getElementById("menu").style.top = "110%";
        open = false
    }
}