const keyboardPlay = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    // const keyDownAction = e.key;
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}

const btnPlay = (btn) => {
    const audio = document.querySelector(`audio[data-key="${btn}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}

addEventListener("click", (e) => {
    const btn = e.target.getAttribute("btn-data");
    btnPlay(btn);
});

window.addEventListener("keydown", (e) => {
    keyboardPlay(e);
});