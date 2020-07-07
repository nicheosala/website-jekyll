let button = document.querySelector(`#publicKeyButton`);

button.addEventListener(`click`, () => {
    document.querySelector(`#publicKeyText`).select();
    document.execCommand(`copy`);
    button.innerHTML = "Chiave pubblica copiata nella clipboard"
});