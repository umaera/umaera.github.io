const userLang = navigator.language || navigator.userLanguage;
const agora = new Date();
let horas = agora.getHours();
const minutos = agora.getMinutes();
const p = horas >= 12 ? 'pm' : 'am';
horas = horas % 12 || 12; 
const mf = String(minutos).padStart(2, '0');

const messagesPT = [
  "Bem-vindo(a)!", "Olá coisa!", "", "Ora!", "Site estranho...", "olá de novo!",
  "👋🥰", "uh.. o que era suposto dizer?", "pouco relevante",  "argumentavel", "preguiça huh...", "rust > c++", 
  "zeva (Ou erica.zy) foi responsavel pelo design desde a versão 3.2",
  "abby é uma artista espanhola", "shiTist gosta de fazer mods de Minecraft", "Do9Era irá voltar", 
  "Rius tentou ser o SimplyPrivate que guardava dados", "Isis é uma artista fantastica, o desing da 3.6 foi carregado nas costas por ela"
  , "DHUMMY, SUA FANATICA POR SAPOSSSS", "erica teve a ideia de animar todos os elementos da existencia", "insane é insana", "insane tem esquisofrenia, isso é bom as vezes"
  , "6 portugueses, 1 espanhola e 2 russas", "batata frita com azeite NÃO É BOM", "storm, o membro mais quieto", "olha uma arvore!", "tema de natal: off", "abby tem 5 nomes digitais"
  , "✨Obrigada a todos✨", "+78mil views, crazy bro", "sabiam que o LOW__ gosta de undertale 🤨", "naku mihau, o destruidor de mundos", "naku mihau, o assanino"
  , "senso comum não é uma opção", "não desistas", "GitHub muito W", "typescript < JavaScript", "1+1 = 11", "sardinha", "HAHAHAHAHAHAHAHAHAHAH", "GET OU-"
  , "devilwolf, o idealista",  "shaders?", "plugins?", "chatGPT: como posso destruir o teu codigo? 😊", "*suspiro*"
  , `Sabias que são ${horas}:${mf} ${p}?`, "repetitivo.. nah", "burgerking ou mcdonald's?", "francês, idioma do amor", 
  "não são erros, são adições 😎", "para confundir o teu enimigo, tens de confundir a ti proprio", "português ≠ português", "duolingo é uma distração",
  "fumar é mau, juro, muito mau mesmo, não tentes, não continues, por favor", "esqueci que tenho uma depressão", "como cortar cebolas sem chorar?"
  , "python, mau mau", "python dá te emprego, mas não dos bons", "tenta", "bla bla bla, percebo-te", "como monetizar", "nunca verás um anuncio do simplyprivate, não prometo",
  "xit", "chatgpt ficou desempregado a partir da versão 3.3", "3.6.1.1.3.1.7.1.2.6.2.5.2.0.2.8.9cbe-", 'o "C" do "c3.6.1" é do modelo do software, Carbon 3.6.1', "caneca"
  , "Tens Iphone?", "repetitivo, nem por isso", "respeita quem te respeita", "e dormir? nada!", "reunião 2 vezes por semana"
  , "discord.gg/3QyCxyuxQh", "huh?", "ruca tem cancro 😨", "acredita no que quiseres",
  "questionavel..", "dinamico", "argumentavel", "não argumentavel", "deus?", "palavra mais dita em 2024: OH GOD", `<img src="https://cdn.discordapp.com/emojis/1106361211538378812.webp?size=2048">`
  , "parabens tiveste o azar de cair no texto de abertura mais longo, aprecia enquanto spamo o teu ecrã com simbolos desnecessariamente desnecessarios 🥰, (●'◡'●)( •̀ ω •́ )✧¯\_(ツ)_/¯(✿◠‿◠)(. ❛ ᴗ ❛.)(○｀ 3′○)(´･ω･`)?(•_•)(╯°□°）╯︵ ┻━┻(～￣▽￣)～(❁´◡`❁):-D(ˉ﹃ˉ)☜(ﾟヮﾟ☜)(⊙_⊙;)"
  , "Olha"
];

const messagesEN = [
  "Welcome!", "Hello there!", "Greetings!", "Welcome back 💕", "Comfy here",
  "👋🥰", "We hope you enjoy!", "🤨", "not relevant", "wild huh", "lazyness huh", "pink underrated", "rust > c++", "help-me get better catch phrases"
  ,"what do i say?", "questionable", "zeva (or erica.zy) was responsable for the design when 3.2 got out", "abby is a spanish artist"
  , "rius browser try to be SimplyPrivate 😭", "shiTist likes to make Minecraft Mods", "Do9Era will be back", "Isis is an amazing artist, the 3.6 design was carried by her"
  , "easy to say", "DHUMMY, YOU FROG FANATIC!!", "erica had the idea to make EVERY SINGLE ELEMENT animated", "insane is insane", "insane has schizophrenia", "Nice Boys"
  , "christmas theme: off", "sometimes schizophrenia is good", "6 portuguese, 1 spanish and 2 russians", "water, drink water", "fries with olive oil IS NOT GOOD"
  , "storm is the quiest member", "look! a tree!", "naku mihau, the destroyer of worlds", "naku minhau, the killer", "✨thanks everyone✨", "oh, isn't that cool?"
  , "what about it?", "GET OU-", "+78 thousand views is crazy", "low__ is an undertale maniac", "1+1 = 11", "co (the fish)", "HAHAHHAHAHAHAHAHAHAHAHAHAHA"
  , "comum sense in not an option", "deviwolf, the idealist", "GitHub takes the W", "shaders?", "plugins?", "sus", "chatGPT: how can i destroy your code today? 🥰😍"
  , "*inhales*", `Sabias que são ${horas}:${mf} ${p}?`, "repetitive.. nah", "bla bla bla", "take the L", "burgerking or mcdonald's?"
  , "french, the love language", "how to cut onions without crying", "python, bad bad", "smoking is bad, like really bad, don't even try, quit that"
  , "don't even try if ain't feeling that", "chatGpt turns jobless in the version 3.3", "3.6.1.1.3.1.7.1.2.6.2.5.2.0.2.8.9c", "respect who respects you"
  , "have some icecream", "cup", "huh?", "belive what you want", "questionable...", "dinamic", "god?"
  , "most used words in 2024: OH GOD", "who cares?", "get the L to a dinner out", "to confuse your enemies, you must confuse yourself", 
  , "python gives a job, not the good one tho", "please", "i forgot i had a depression going on", "portuguese ≠ portuguese", "typescript < JavaScript"
  , "C > c++", "C# > C++", "java > python", "rust > python", "make a tierlist of the", "sleep more", "repetitive.. no way", "red cactus coming soon"
  , "don't eat rocks, humans not meant for that", "if you have depression, seek professional help, not me", "23,3%", "terra means earth and dirt at the same time in portuguese"
  , "november 2024 - peak statistics", "none of there phrases is useful, only on portuguese devices"
];

const messages = userLang.startsWith('pt') || userLang.startsWith('br') ? messagesPT : messagesEN;
const message = messages[Math.floor(Math.random() * messages.length)]; 

let i = 0;

function typemsg() {
    if (i < message.length) {
        document.getElementById("title").insertAdjacentHTML('beforeend', message.charAt(i));
        i++;
        i++;
        setTimeout(typemsg, 90);
    } else {
        setTimeout(after, 2000);
    }
}

function after() {
    if (userLang.startsWith('pt') || userLang.startsWith('br')) {
        goPT();
    } else {
        goEN();
    }
}

typemsg();

function goPT() {
    window.location.href = 'pt/'; 
}

function goEN() {
    window.location.href = 'en/'; 
}

