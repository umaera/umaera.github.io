let variables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let currentIndex = variables.indexOf(1);

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
        pfpElement.style.backgroundImage = 'url(nowifi.png)';
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
            setProfileImage('https://umaera.github.io/icons/pfp/umaera.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'UmaEra';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Creator';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 2:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/dhummy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'dhummy';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Developer and Animator';
            document.getElementById('profile').style.color = '#e06e6ee6';
            
            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 3:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/erica_zy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'erica_zy';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer and animator';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 4:
                document.getElementById('class').textContent = 'TeamEra';
                document.getElementById('class').style.color = '#ff004c';
                setProfileImage('https://umaera.github.io/icons/pfp/Insane.jpg');
                document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
                document.getElementById('name').textContent = 'Insane';
                document.getElementById('name').style.color = '#ff004c';
                document.getElementById('profile').textContent = 'Developer';
                document.getElementById('profile').style.color = '#e06e6ee6';
    
                document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
                document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
                break;
        case 5:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/shitist.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'ShiTist';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Animator';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 6:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/storm.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Storm';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Developer and designer';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 7:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/isis.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Isis';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        case 8:
            document.getElementById('class').textContent = 'TeamEra';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/abby.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'abby';
            document.getElementById('name').style.color = '#ff004c';
            document.getElementById('profile').textContent = 'Designer and Concept helper';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-red.png)';
            break;
        
        case 9:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/peixe.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'Peixe';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Designer and animator';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 10:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/devilwolf.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'DevilWolf';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Designer and Concept helper';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 11:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/low.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'L0W__';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Concept helper';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 12:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/dede07.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'Dede07';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Concept & UX helper';
            document.getElementById('profile').style.color = '#e06e6ee6';
        
            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
        break;
        case 13:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/jjcia689.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'JJCIA689';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Advisor and tester';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 14:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/nsei03.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'nsei_03';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Big Supporter';
            document.getElementById('profile').style.color = '#e06e6ee6';

            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 15:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/oida.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'oida';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'tester, code helper';
            document.getElementById('profile').style.color = '#e06e6ee6';
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        case 16:
            document.getElementById('class').textContent = 'Helpers';
            document.getElementById('class').style.color = '#504cbe';
            setProfileImage('https://umaera.github.io/icons/pfp/raxx.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #504cbe';
            document.getElementById('name').textContent = 'raxx';
            document.getElementById('name').style.color = '#504cbe';
            document.getElementById('profile').textContent = 'Designer';
            document.getElementById('profile').style.color = '#e06e6ee6';
    
            document.getElementById('right-arrow').style.backgroundImage = 'url(other/right-arrow-blue.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(other/left-arrow-blue.png)';
            break;
        default:
    }
}

updateDisplay();