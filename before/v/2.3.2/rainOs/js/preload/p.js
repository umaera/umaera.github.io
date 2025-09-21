const tem = document.getElementById("terminal");

function atct(pt, pti) {
  return new Promise(resolve => {
    setTimeout(function () {
      tem.textContent += pt + "\n";
      tem.scrollTop = tem.scrollHeight;
      resolve();
    }, pti);
  });
}

async function al() {
  await atct("Startup RAIN", 10);
  await atct("expets:", 20);
  await atct("running on a web version of rain-os", 200);
  await atct("cerebelium v.40k and MemoryMage.zip as MemoryMage v.34k", 50);
  await atct("{{Cerebelium Upgraded to 1.1!}}", 50);
  await atct("running on +32bits (it does not matter) ", 50);
  await atct("min.RAM:0b | max.RAM: 2gb ", 50);
  await atct("sys.build: Rain (html/web)| build.id: 0.1.1 ", 50);
  await atct("---", 500);
  await atct("cannot find any user-plugins", 500);
  await atct("-----", 500);
  await atct("core plugins found!", 3000);
  await atct("plugins loaded:", 40);
  await atct("cerebelium.zip", 500);
  await atct("window.tweeks.json | better-paches.git", 5000);
  await atct("silent-eoc.zip | better-eoc.zip", 2600);
  await atct("smoothboot-1-9.zip | fastboot.rsys", 50);
  await atct("-----", 500);
  await atct("SBP is now controling EOC output", 500);
  await atct(":Starting EOC with SBP", 50);
  await atct("[EOC !info] building...", 10);
  await atct("[EOC !state] running on html app, cheking dependences...", 5000);
  await atct("[EOC !state !info] NEED LUNIAN.WEB TO RUN IN HTML", 50);
  await atct("[EOC !startup] starting EOC OPTIMIZATION..", 50);
  await atct("[EOC !startup][0%] starting EOC OPTIMIZATION..", 500);
  await atct("[EOC !startup][1%] starting EOC OPTIMIZATION..", 2000);
  await atct("[EOC !startup][65%] starting EOC OPTIMIZATION..", 10000);
  await atct("[EOC !startup][66%] starting EOC OPTIMIZATION..", 200);
  await atct("[EOC !startup][90%] starting EOC OPTIMIZATION..", 4000);
  await atct("[EOC !startup][90%] starting EOC OPTIMIZATION..", 2000);
  await atct("[EOC !startup] eoc is now optimizing", 20);
  await atct("loading initial setup", 20);
  await atct("loading users | loading boost mode with SBP", 2000);
  await atct("this cache is heavy, deleting or marking unused files... ", 7000);
  await atct("[-*-*-*-*-*SYSTEM CRASHED-*-*-*-*-*]", 6000);
  await atct("why:", 10);
  await atct("cause 1: some important plugin is not working and could not boot", 10);
  await atct("cause 2: the function of boot is not defined", 10);
  await atct("-", 10);
  await atct("most accurate: cause 2", 10);
  await atct("-", 10);
  await atct("how to help or do?:", 10);
  await atct("cause 1: delete or remove the plugin that is not working", 10);
  await atct("cause 2: remove the function of boot or create one", 10);
  await atct("-", 10);
  await atct("end of crash indications", 10);
  await atct("[-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*]", 10);
  await atct("I", 10);
}

al();

function sd() {
  window.scrollBy(0, 50);
}

setInterval(sd, 100);


