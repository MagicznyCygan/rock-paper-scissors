const yourChoiceContainer = document.querySelector('#your-choice');
const computerChoiceContainer = document.querySelector('#computer-choice');
const resultContainer = document.querySelector('#result');

const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
   playerChoice = e.target.id;
   yourChoiceContainer.innerHTML = playerChoice;
   generateComputerChoice();
   showResult();

   console.log(result);
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        computerChoice = 'rock';
    } 
    if(randomNumber === 1){
        computerChoice = 'paper';
    } 
    if(randomNumber === 2){
        computerChoice = 'scissors';
    } 
    computerChoiceContainer.innerHTML = computerChoice;
}

function showResult() {
    if (playerChoice === computerChoice){
        result = 'its a draw!';
    }
    if (playerChoice === 'rock' && computerChoice === 'paper'){
        result = 'Computer Wins!';
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors'){
        result = 'Player Wins!';
    }

    if (playerChoice === 'paper' && computerChoice === 'scissors'){
        result = 'Computer Wins!';
    }
    if (playerChoice === 'paper' && computerChoice === 'rock'){
        result = 'Player Wins!';
    }

    if (playerChoice === 'scissors' && computerChoice === 'rock'){
        result = 'Computer Wins!';
    }
    if (playerChoice === 'scissors' && computerChoice === 'paper'){
        result = 'Player Wins!';
    }
    console.log(result);
    resultContainer.innerHTML = result;
}
