
// BASE VARIABLES

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const ending = document.getElementById('bigContainer');

const goodEnding = document.createElement("img");
goodEnding.src = 'img/success.gif';
goodEnding.style.height = '400px';

const badEnding = document.createElement("img");
badEnding.src = 'img/fail.gif';
badEnding.style.height = '400px';

let humanScore = 0;
let terminatorScore = 0;

// PLAYER BUTTON CHOICES

rock.addEventListener('click', () => {
    playRound('rock', playTerminator());
});

paper.addEventListener('click', () => {
    playRound('paper', playTerminator());
});

scissors.addEventListener('click', () => {
    playRound('scissors', playTerminator());
});

// COMPUTER RANDOM CHOICE GENERATOR

function playTerminator() {

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return ("rock");

    } else if (randomNumber === 1) {
        return ("paper");

    } else {
        return ("scissors");
    }
}

// TRIGGERED BY EVENT LISTENERS TO ANNOUNCE ROUND WINNER

function playRound(humanChoice, terminatorChoice) {

    // WIN

    if (humanChoice === "rock" && terminatorChoice === "scissors") {
        document.querySelector("#announcement").textContent = "ROCK BEATS SCISSORS - YOU WIN";
        countVictory('human');
    } else if (humanChoice === "paper" && terminatorChoice === "rock") {
        document.querySelector("#announcement").textContent = "PAPER BEATS ROCK - YOU WIN";
        countVictory('human');
    } else if (humanChoice === "scissors" && terminatorChoice === "paper") {
        document.querySelector("#announcement").textContent = "SCISSORS BEAT PAPER - YOU WIN";
        countVictory('human');

    // LOSE

    } else if (humanChoice === "rock" && terminatorChoice === "paper") {
        document.querySelector("#announcement").textContent = "PAPER BEATS ROCK - YOU LOSE";
        countVictory('terminator');
    } else if (humanChoice === "paper" && terminatorChoice === "scissors") {
        document.querySelector("#announcement").textContent = "SCISSORS BEAT PAPER - YOU LOSE";
        countVictory('terminator');
    } else if (humanChoice === "scissors" && terminatorChoice === "rock") {
        document.querySelector("#announcement").textContent = "ROCK BEATS SCISSORS - YOU LOSE";
        countVictory('terminator');

    // DRAW

    } else if (humanChoice === "rock" && terminatorChoice === "rock") {
        document.querySelector("#announcement").textContent = "BOTH CHOSEN ROCK - DRAW";
    } else if (humanChoice === "paper" && terminatorChoice === "paper") {
        document.querySelector("#announcement").textContent = "BOTH CHOSEN PAPER - DRAW";
    } else if (humanChoice === "scissors" && terminatorChoice === "scissors") {
        document.querySelector("#announcement").textContent = "BOTH CHOSEN SCISSORS - DRAW";
    }
}

// VICTORY COUNTER FOR PLAYER AND COMPUTER

function countVictory(winner) {

    if (winner === 'human') {
        humanScore++;
        document.querySelector("#human").textContent += "X ";

    } else if (winner === 'terminator') {
        terminatorScore++;
        document.querySelector("#terminator").textContent += "X ";
    }
    checkEndgame();
}

// REPLACES USER INTERFACE WITH ENDING GIF

function checkEndgame() {

    if (humanScore === 5) {
        ending.innerHTML = '';
        ending.appendChild(goodEnding);
        document.querySelector('h2').textContent = "HUMANITY LIVES TO FIGHT ANOTHER DAY";
        document.querySelector('h2').setAttribute('style', 'color: #b3ff66');

    } else if (terminatorScore === 5) {
        ending.innerHTML = '';
        ending.appendChild(badEnding);
        document.querySelector('h2').textContent = "HUMANITY'S ANNIHILATION HAS BEGUN";
        document.querySelector('h2').setAttribute('style', 'color: #ff3333');
    }
}