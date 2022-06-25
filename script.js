let playerSelection = "rock"
let computerSelection;
let choice;
let playerScore = 0;
let winner;
let computerScore = 0;

game();

function computerPlay () {
  let x = Math.floor(Math.random() * 3)
   if (x == 0) {
    computerSelection = "rock";
   }
   else if (x == 1) {
    computerSelection = "paper";
   }
   else {
    computerSelection = "scissors";
   }
}

function playerPlay (){
  playerSelection = prompt("Type: Rock,Paper or Scissors","rock").toLocaleLowerCase();
 
}

function playRound() {
   if (playerSelection == "rock" && computerSelection == "rock") {
     console.log("Rock on Rock. It's a tie!")
     winner = "tie";
   }
   else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Rock on paper. You lose!")
    winner = "computer"
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Rock on Scissors. You win!")
    winner = "player"
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Paper on rock. You win!")
    winner = "player"
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("Paper on Paper. It's a tie!")
    winner = "tie";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("paper on scissors. you lose!")
    winner = "computer"
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("scissors on Rock. you lose")
    winner = "computer"
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("scissors on paper. you win")
    winner = "player"
  }
  else if  (playerSelection == "scissors" && computerSelection == "scissors"){
    console.log("scissors on scissors. It's a tie")
    winner = "tie";
  }
}

function score (){
  if (winner === "player") {
  playerScore ++;
  }
  else if (winner === "computer"){
    computerScore ++;
  }
  winner = null;
  console.log("Your score is " + playerScore);
  console.log("Computer socre is " + computerScore);
}
function gameWinner(){
  if (playerScore > computerScore){
    console.log("You win big time!")
  }
  else if (computerScore > playerScore){
    console.log("Big Loss Bigger Loser!")
  }
  else {
    console.log("Tie man try again")
  }
}
function game(){
  for (let i = 0; i < 5; i++) {
  computerPlay();
  playerPlay();
  playRound();
  score();
  }
  gameWinner();
}