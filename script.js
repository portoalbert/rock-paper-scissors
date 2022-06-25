let playerSelection = "rock"
let computerSelection;
let choice;
let playerScore = 0;
let winner;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("player_score_display")
const computerScoreDisplay = document.getElementById("computer_score_display")
const resultDisplay = document.getElementById("result")
const computerImgDisplay = document.getElementById("computerbtn")


function computerPlay () {
  let x = Math.floor(Math.random() * 3)
   if (x == 0) {
    computerSelection = "rock";
    computerImgDisplay.setAttribute('src','img/rock.jpg')
   }
   else if (x == 1) {
    computerSelection = "paper";
    computerImgDisplay.setAttribute('src','img/paper.jpg')
   }
   else {
    computerSelection = "scissors";
    computerImgDisplay.setAttribute('src','img/scissors.jpg')
   }
}


function playerRock (){ 
  playerSelection = "rock"
  game();
}
function playerPaper (){ 
  playerSelection = "paper"
  game();
}
function playerScissors (){ 
  playerSelection = "scissors"
  game();
}

function playRound() {
   if (playerSelection == "rock" && computerSelection == "rock") {
    resultDisplay.innerHTML = "Tie"
     winner = "tie";
   }
   else if (playerSelection == "rock" && computerSelection == "paper") {
    resultDisplay.innerHTML = "You Lose"
    winner = "computer"
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultDisplay.innerHTML = "You Win"
    winner = "player"
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    resultDisplay.innerHTML = "You Win"
    winner = "player"
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    resultDisplay.innerHTML = "Tie"
    winner = "tie";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultDisplay.innerHTML = "You Lose"
    winner = "computer"
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultDisplay.innerHTML = "You Lose"
    winner = "computer"
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultDisplay.innerHTML = "You Win"
    winner = "player"
  }
  else if  (playerSelection == "scissors" && computerSelection == "scissors"){
    resultDisplay.innerHTML = "Tie"
    winner = "tie";
  }
}

function score (){
  if (winner === "player") {
  playerScore ++;
  playerScoreDisplay.innerHTML = playerScore;
  }
  else if (winner === "computer"){
    computerScore ++;
    computerScoreDisplay.innerHTML = computerScore;
  }
  winner = null;
  console.log("Your score is " + playerScore);
  console.log("Computer socre is " + computerScore);
}
function gameWinner(){
  if (playerScore > computerScore){
    resultDisplay.innerHTML = "Winner Winner Chicken Dinner"
  }
  else if (computerScore > playerScore){
    resultDisplay.innerHTML = "You are dogwater"
  }
  else {
    resultDisplay.innerHTML = "It's a tie"
  }
}
function game(){
  computerPlay();
  playRound();
  score();
  //gameWinner();
}