let title = document.querySelector("h3");

let started = false;
let gameSeq = [];
let userSeq = [];
let btnColors = ["red", "blue", "yellow", "green"];
let level = 0;

document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function btnClick() {
    btnFlash(this);
    let btn = this.getAttribute("id");
    userSeq.push(btn);
    if (userSeq[userSeq.length - 1] == gameSeq[userSeq.length - 1]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        title.innerHTML = `Game Over! Your Score was <b>${level - 1}</b> <br> Press Any Key To Start`;
        flashBackground();
        reset();
    }
}

function flashBackground() {
    document.querySelector('*').classList.add("flash-bg");
    document.querySelector("body").classList.add("flash-bg");
    document.querySelector("h3").classList.add("flash-bg");
    document.querySelector("h2").classList.add("flash-bg");
    document.querySelector(".box").classList.add("flash-bg");

    setTimeout(() => {
        document.querySelector('*').classList.remove("flash-bg");
        document.querySelector("body").classList.remove("flash-bg");
        document.querySelector("h3").classList.remove("flash-bg");
        document.querySelector("h2").classList.remove("flash-bg");
        document.querySelector(".box").classList.remove("flash-bg");
    }, 150);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function levelUp() {
    userSeq = [];
    level++;
    title.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random() * 4);
    let col = btnColors[idx];
    let btnElement = document.querySelector(`.${col}`);
    gameSeq.push(col);
    console.log(gameSeq);
    btnFlash(btnElement);
}

let btns = document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",btnClick);
}



