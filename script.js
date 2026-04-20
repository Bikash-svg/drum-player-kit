const btnA = document.querySelector('#a');
const btnS = document.querySelector('#s');
const btnD = document.querySelector('#d');
const btnF = document.querySelector('#f');
const btnG = document.querySelector('#g');
const btnH = document.querySelector('#h');
const btnJ = document.querySelector('#j');
const btnK = document.querySelector('#k');
const btnL = document.querySelector('#l');

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const keyDownAction = e.key;
    console.log("audioKey " + audio);
    audio.currentTime = 0;
    audio.play()
})

window.addEventListener("click", (e) => {
    const clickedBtn = e.target.id;
    console.log(clickedBtn);
})