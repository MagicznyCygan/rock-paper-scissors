const yourChoiceContainer = document.getElementById('user-choice');
const computerChoiceContainer = document.getElementById('computer-choice');
const resultContainer = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const section = document.querySelector('section');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   yourChoiceContainer.innerHTML = userChoice;
   generateComputerChoice();
   showResult();
   changeBackground();
   changeResultToText()
   section.classList.add("wrapper")
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        computerChoice = 'rock';
    } 
    if(randomNumber === 2){
        computerChoice = 'paper';
    } 
    if(randomNumber === 3){
        computerChoice = 'scissors';
    } 
    computerChoiceContainer.innerHTML = computerChoice;
}

function showResult() {
    if (computerChoice === userChoice) {
    result = 0;
    console.log(result);
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 1;
    console.log(result);
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 2;
    console.log(result);
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 1;
    console.log(result);
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 2;
    console.log(result);
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 1;
    console.log(result);
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 2;
    console.log(result);
  }
}
function changeBackground() {
    
    if(result == 0)
    {
        section.className = "";
        section.classList.add("draw")
    }
    if(result == 1)
    {
        section.className = "";
        section.classList.add("win")
    }
    if(result == 2)
    {
        section.className = "";
        section.classList.add("lose")
    }
}
function changeResultToText() {
  if (result === 0)
  {
      result = 'its a draw';
  }
  if (result === 1)
  {
      result = 'you win!';
  }
  if (result === 2)
  {
      result = 'you lose!';
  }
    resultContainer.innerHTML = result;
}
