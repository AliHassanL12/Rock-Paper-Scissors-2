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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        console.log("Ultimate Showdown! It's a draw!");
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('You win! Rock beats scissors!');
        return playerScore++;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You win! Paper beats rock!')
        return playerScore++;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log("You win! Scissors beat Paper!");
        return playerScore++;
    }
    else{
        console.log(`You lose! ${playerSelection} does not beat ${computerSelection}!`);
        return computerScore++;
    }
}

/*
create function game();
create variable to count player score and pc score;
loop 5 times and play round until winner can be declared
*/

let playerScore = 0;
let computerScore = 0; 

function game(){
    console.log('May the 5 rounds begin! It is time to show your worth!');
    for (let i=0; i < 5; i++) {
        playerSelection = prompt('What will you choose now?');
        playRound(playerSelection, getComputerChoice());
    }
    if (playerScore > computerScore){
        console.log(`GAME OVER! It is the Player who wins with a score of ${playerScore}-${computerScore}!`);
    }
    else if (playerScore < computerScore){
        console.log(`GAME OVER! You lose.. decisive victory by AI ${computerScore}-${playerScore}!`);
    }
    else {
        console.log(`Fierce game! ${playerScore}-${computerScore}, it's a draw!`);
    }
}
game();