window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage;

    let access = localStorage.getItem('access');
    if (!access) {
    localStorage.setItem('access', 1);

    if (userLang.startsWith('pt')) {
        setTimeout(goPT, 5000);
    } else {
        setTimeout(goEN, 5000);
    }
    } else {

    access = parseInt(access) + 1;
    localStorage.setItem('stored access point:', access);
    console.log(`access point: ${access}`);
    }
}

function goPT() {
    window.location.href = '../welcome=pt.html'; 
}

function goEN() {
    window.location.href = '../welcome=en.html'; 
}