let variables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let currentIndex = variables.indexOf(1);
var userLang = navigator.language || navigator.userLanguage;


function updateDisplay() {
    const currentValue = variables[currentIndex];
    document.getElementById("variable").innerText = currentValue;
    executeAction(currentValue);
}

function left() {
    currentIndex = (currentIndex - 1 + variables.length) % variables.length;
    updateDisplay();
}

function right() {
    currentIndex = (currentIndex + 1) % variables.length;
    updateDisplay();
}

function setProfileImage(url) {
    const pfpElement = document.getElementById('pfp');
    const tempImage = new Image();
    tempImage.src = url;
    tempImage.onload = () => {
        pfpElement.style.backgroundImage = `url(${url})`;
    };
    tempImage.onerror = () => {
        pfpElement.style.backgroundImage = 'url(credits/other/nowifi.png)';
        document.getElementById('name').textContent = 'error loading: no internet';
        document.getElementById('profile').textContent = '';
        setTimeout(() => {
            setProfileImage(url);
        }, 5000);
    };
}

function executeAction(value) {
    switch (value) {
        case 1:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/umaera.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'UmaEra';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Creator';
            document.getElementById('profile').style.color = '#ff6090';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

                if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                    document.getElementById('profile').textContent = 'Criadora';
                }

            break;
        case 2:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/dhummy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'dhummy';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Developer';
            document.getElementById('profile').style.color = '#ff6090';
            
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Programadora';
            }

            break;
        case 3:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/erica_zy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'erica_zy';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer and animator';
            document.getElementById('profile').style.color = '#ff6090';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Designer & animadora';
            }
            break;
        case 4:
                document.getElementById('class').textContent = 'TeamEra';
                document.getElementById('class').style.color = '#ff004c';
                setProfileImage('../icons/pfp/Insane.jpg');
                document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
                document.getElementById('name').textContent = 'Insane';
                document.getElementById('name').style.color = '#ff004c';
                document.getElementById('profile').textContent = 'Software developer';
                document.getElementById('profile').style.color = '#ff6090';
    
                document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
                document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

                if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                    document.getElementById('profile').textContent = 'Desenvolvedora de Software';
                }

                break;
        case 5:
                document.getElementById('class').textContent = 'TeamEra';
                document.getElementById('class').style.color = '#ff004c';
                setProfileImage('../icons/pfp/devilwolf.webp');
                document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
                document.getElementById('name').textContent = 'DevilWolf';
                document.getElementById('name').style.color = '#ff004c';
                document.getElementById('profile').textContent = 'Designer and Concept helper';
                document.getElementById('profile').style.color = '#ff6090';
        
                document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
                document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';
        
                if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                    document.getElementById('profile').textContent = 'Designer & Idealista';
                    document.getElementById('class').textContent = 'TeamEra';
                }
                    
            break;
        case 6:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/storm.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Storm';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Developer and designer';
            document.getElementById('profile').style.color = '#ff6090';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Programadora & Designer';
            } 

            break;
        case 7:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/isis.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Isis';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer';
            document.getElementById('profile').style.color = '#ff6090';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

            break;
        case 8:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('../icons/pfp/abby.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'abby';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer and Concept helper';
            document.getElementById('profile').style.color = '#ff6090';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-red.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Designer & Idealista';
            }
            break;
        case 9:
            document.getElementById('class').textContent = 'ex-developers';
            document.getElementById('class').style.color = '#ff6f00';
            setProfileImage('../icons/pfp/shitist.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px#ff6f00';
            document.getElementById('name').textContent = 'ShiTist';
            document.getElementById('name').style.color = '#ff6f00';
            document.getElementById('profile').textContent = 'Animator';
            document.getElementById('profile').style.color = '#ff6f00';
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-yellow.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-yellow.png)';
    
            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                 document.getElementById('profile').textContent = 'Animador';
            }
            break;
        case 10:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/peixe.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'Peixe';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Designer and animator';
            document.getElementById('profile').style.color = '#756cff';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Designer & Animador';
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break
        case 11:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/low.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'L0W__';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Concept helper';
            document.getElementById('profile').style.color = '#756cff';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Idealista';
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break;
        case 12:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/dede.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = '75tdede';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'UX helper';
            document.getElementById('profile').style.color = '#756cff';
        
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Revisor experiência utilizador';
                document.getElementById('class').textContent = 'Apoiantes';
            }

        break;
        case 13:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/jjcia689.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'JJCIA689';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Advisor and tester';
            document.getElementById('profile').style.color = '#756cff';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Revisor & testador';
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break;
        case 14:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/nsei03.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'nsei_03';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Big Supporter';
            document.getElementById('profile').style.color = '#756cff';

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Grande apoiante';
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break;
        case 15:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/oida.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'oida';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'teste and code helper';
            document.getElementById('profile').style.color = '#756cff';
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Testador & idealista de código';
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break;
        case 16:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/raxx.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'raxx';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Designer';
            document.getElementById('profile').style.color = '#756cff';
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('class').textContent = 'Apoiantes';
            }

            break;
        case 17:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/naku.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent= 'Naku Mihau';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Software architecture helper';
            document.getElementById('profile').style.color = '#756cff';

            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'Ajudante arquitetura software';
                document.getElementById('class').textContent = 'Destaque';
            }

            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';
    
        break;
        case 18:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('../icons/pfp/soupreto123.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent= 'soupreto123';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Cloud services developer';
            document.getElementById('profile').style.color = '#756cff';
    
            if (userLang.startsWith('pt') || userLang.startsWith('br')) {
                document.getElementById('profile').textContent = 'desenvolvedor serviços de cloud';
                document.getElementById('class').textContent = 'Destaque';
            }
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(credits/other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(credits/other/left-arrow-blue.png)';
        
        break;
        
        default:
    }
}

updateDisplay();