/*

Create function called getComputerChoice;
MathRandom number 1-3;
if 1 choose rock;
if 2 choose paper;
if 3 choose scissors;

*/

function getComputerChoice(){
    randomNumber = Math.floor((Math.random() * 3) +1);
    switch(randomNumber){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

/* 
create function called playRound(playerSelection, computerSelection);
convert playerSelection toLowerCase;
if playerSelections equals to computerSelection
                output draw;
if playerSelection equals rock and computerSelection equals scissors
            return player wins
if playerSelection equals paper and computerSelection equals rock
            return player wins
if playerSelection equals scissors and computerSelection equals to paper
            return player wins
else the computer wins;
*/
let playerScore = 0;
let computerScore = 0; 

function playRound(playerSelection, computerSelection){
        if (playerScore < 5 && computerScore < 5){

            playerSelection = playerSelection.toLowerCase();

            if(playerSelection == computerSelection){
                document.getElementById('result').textContent = "Ultimate Showdown! It's a draw!"
        }
            else if(playerSelection == 'rock' && computerSelection == 'scissors'){
                document.getElementById('result').textContent = "You win! Rock beats scissors!"
                playerScore++;
                plyScore.textContent = `Player Score: ${playerScore}`;
        }
            else if(playerSelection == 'paper' && computerSelection == 'rock'){
                document.getElementById('result').textContent = "You win! Paper beats rock!"
                playerScore++;
                plyScore.textContent = `Player Score: ${playerScore}`;
        }
            else if(playerSelection == 'scissors' && computerSelection == 'paper'){
                document.getElementById('result').textContent = "You win! Scissors beat Paper!"
                playerScore++;
                plyScore.textContent = `Player Score: ${playerScore}`;
        }
            else {
                document.getElementById('result').textContent = `You lose! ${playerSelection} does not beat ${computerSelection}!`;
                computerScore++;
                CPScore.textContent = `Computer Score: ${computerScore}`;
        }
        
        }
        if (playerScore === 5 || computerScore === 5){
            if (playerScore === 5){
                document.getElementById('result').textContent = "Player wins!";
            }
            else {
                document.getElementById('result').textContent = "AI wins!";
            }
            playerScore = 0;
            computerScore = 0;
            plyScore.textContent = `Player Score: ${playerScore}`;
            CPScore.textContent = `Computer Score: ${computerScore}`;
        }
    }



const rock = document.createElement('button');
rock.textContent = 'Rock';
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'Paper';
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
document.body.appendChild(scissors);

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})

const div = document.createElement('div');
div.id = 'result';
div.textContent = 'None yet';
document.body.appendChild(div);

const plyScore = document.createElement('div');
plyScore.id = 'playerScore';
plyScore.textContent = `Player Score: ${playerScore}`;
document.body.appendChild(plyScore);

const CPScore = document.createElement('div');
CPScore.id = 'ComputerScore';
CPScore.textContent = `Computer Score: ${computerScore}`;
document.body.appendChild(CPScore);