function SessionCreate() {
  const VALID = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let SessionID = '';

  for (let i = 0; i < 128; i++) {
    const indiceAleatorio = Math.floor(Math.random() * VALID.length);
    SessionID += VALID.charAt(indiceAleatorio);
  }

  return SessionID;
}

const S_ID = SessionCreate();

// Exibe o SessionID no elemento h1
document.getElementById('ContSes').innerText = 'SessionID: ' + S_ID + 'SP_P:appdata/roaming/simplyprivate/Local%20State' + '.ALLW-KEY.RANDOM128';