const possibleChoices = document.querySelectorAll('.choices-container img');
const resultContainer = document.getElementById('resultContainer');
const winsContainer = document.getElementById('wins');
const losesContainer = document.getElementById('loses');
const drawsContainer = document.getElementById('draws');
const gamesContainer = document.getElementById('games');
const accuracyContainer = document.getElementById('accuracy');
const showChoicesContainer = document.getElementById("showChoices");
const choices = ['rock', 'paper', 'scissors'];
const results = [
    ['YOU WIN!', 'green', 0],
    ['YOU LOSE!' , 'red', 0],
    ['ITS A DRAW', 'yellow', 0]
];

let userChoice;
let computerChoice;
let games = 0;
let playerImg = document.createElement("img");
let computerImg = document.createElement("img");
let versus = document.createElement("div");


const generateComputerChoice = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer Choice: " + computerChoice);
}

const showChoices = () => {
    
    playerImg.setAttribute("src",`images/${userChoice}.png`);
    playerImg.setAttribute("class","showImg");
    showChoicesContainer.appendChild(playerImg);
    versus.innerHTML = "VS";
    versus.setAttribute("class","versus");
    showChoicesContainer.appendChild(versus);
    computerImg.setAttribute("src",`images/${computerChoice}.png`);
    computerImg.setAttribute("class","showImg");
    showChoicesContainer.appendChild(computerImg);
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   generateComputerChoice();
   getResult();
   showChoices();
}))

const win = () => {
    resultContainer.innerHTML = results[0][0];
    resultContainer.style.color = results[0][1];
    winsContainer.innerHTML = ++results[0][2];
    games++;
    gamesContainer.innerHTML = games;
    let accuracy = Math.floor((results[0][2]*100)/games);
    accuracyContainer.innerHTML = accuracy + '%';
}
const lose = () => {
    resultContainer.innerHTML = results[1][0];
    resultContainer.style.color = results[1][1];
    losesContainer.innerHTML = ++results[1][2];
    games++;
    gamesContainer.innerHTML = games;
    let accuracy = Math.floor((results[0][2]*100)/games);
    accuracyContainer.innerHTML = accuracy + '%';
}
const draw = () => {
    resultContainer.innerHTML = results[2][0];
    resultContainer.style.color = results[2][1];
    drawsContainer.innerHTML = ++results[2][2];
    games++;
    gamesContainer.innerHTML = games;
    let accuracy = Math.floor((results[0][2]*100)/games);
    accuracyContainer.innerHTML = accuracy + '%';
}


const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
        win();
        break;

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
        lose();
        break;

        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
        draw();
        break;
  }
}