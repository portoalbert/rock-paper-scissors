let playerSelection = "rock"
let computerSelection;


computerPlay();
playRound();

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

function playRound() {
   if (playerSelection == "rock" && computerSelection == "rock") {
     console.log("Rock on Rock. It's a tie!")
   }
   else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Rock on paper. You lose!")
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Rock on Scissors. You win!")
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Paper on rock. You win!")
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("Paper on Paper. It's a tie!")
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("paper on scissors. you lose!")
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("scissors on Rock. you lose")
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("scissors on paper. you win")
  }
  else if  (playerSelection == "scissors" && computerSelection == "scissors"){
    console.log("scissors on scissors. It's a tie")
  }
}

console.log(computerSelection)
console.log(playerSelection)
//console.log(playRound(playerSelection, computerSelection));