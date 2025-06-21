//user move
let rock = document.getElementById("rock-B");
let paper = document.getElementById("paper-B");
let sissor = document.getElementById("sissor-B");
let comp=document.querySelector(".comp");
//computer move
function getcomp() {
    let randomVal = Math.random();
    if (randomVal > 0 && randomVal < (1 / 3)) {
        return "ROCK";

    }
    else if (randomVal > 1 / 3 && randomVal < (2 / 3)) {
        return "PAPER";
    }
    else {
        return "SISSOR";
    }
}

//user move
let userMove;
rock.addEventListener("click", () => {
    userMove = "ROCK";
    let computerMove = getcomp();
    comp.innerText=computerMove;
    rockfunc(userMove, computerMove);
});

paper.addEventListener("click", () => {
    userMove = "PAPER";
    let computerMove = getcomp();
    comp.innerText=computerMove;
    paperfunc(userMove, computerMove);
});

sissor.addEventListener("click", () => {
    userMove = "SISSOR";
    let computerMove = getcomp();
    comp.innerText=computerMove;
    sissorfunc(userMove, computerMove);
});


let result = document.querySelector(".result-B");
let userpoint = 0;
let computerpoint = 0;

//function
function rockfunc(userMove, computerMove) {
    console.log("rockfunc");
    if (userMove === computerMove) {
        result.innerText = "MATCH DRAW";


    } else if (userMove === "ROCK" && computerMove === "SISSOR") {
        result.innerText = "YOU WON";
        userpoint++;
    }
    else {
        result.innerText = "YOU LOOSE";
        computerpoint++;
    }
    console.log(userpoint, computerpoint);
    localStorage.setItem("USER-POINT", userpoint);
    localStorage.setItem("COMPUTER-POINT", computerpoint);
}

function paperfunc(userMove, computerMove) {
    if (userMove === computerMove) {
        result.innerText = "MATCH DRAW";
    } else if (userMove === "PAPER" && computerMove === "ROCK") {
        result.innerText = "YOU WON";
        userpoint++;
    } else {
        result.innerText = "YOU LOOSE";
        computerpoint++;
    }
    console.log(userpoint, computerpoint);
    localStorage.setItem("USER-POINT", userpoint);
    localStorage.setItem("COMPUTER-POINT", computerpoint);
}

function sissorfunc(userMove, computerMove) {
    if (userMove === computerMove) {
        result.innerText = "MATCH DRAW";
    } else if (userMove === "SISSOR" && computerMove === "PAPER") {
        result.innerText = "YOU WON";
        userpoint++;
    } else {
        result.innerText = "YOU LOOSE";
        computerpoint++;
    }
    console.log(userpoint, computerpoint);
    localStorage.setItem("USER-POINT", userpoint);
    localStorage.setItem("COMPUTER-POINT", computerpoint);
}

