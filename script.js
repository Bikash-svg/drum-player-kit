const requiredKey = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

const keyboardPlay = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}

const keyboardEffect = (e) => {
    const clickedKey = document.querySelector(`.drum-btn[data-key="${e.key}"]`)
    clickedKey.classList.add("drum-transition");
    setTimeout(() => {
        clickedKey.classList.remove("drum-transition")
    }, 150)
}

const btnPlay = (btn) => {
    const audio = document.querySelector(`audio[data-key="${btn}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}

addEventListener("click", (e) => {
    const btn = e.target.getAttribute("data-key");
    btnPlay(btn);
});

window.addEventListener("keydown", (e) => {
    if(!requiredKey.includes(e.key)) return;
    keyboardPlay(e);
    keyboardEffect(e);
});