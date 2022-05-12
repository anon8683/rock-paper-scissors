const btn = document.querySelectorAll("button");
const youChose = document.querySelector(".player-choice");
const compChose = document.querySelector(".computer-choice");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const winner = document.querySelector(".round-winner");
const gameWinner = document.querySelector(".game-winner");
const new_game = document.querySelector("#new-game");

let playerChoice = "";
let compScore = 0;
let playerScore = 0;

// Adds a listener to each button
// If the button new-game is click, call newGame to reset.
// Else the button id clicked is == to playerchoice
// Playround is called
btn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (btn.id === "new-game") {
      newGame();
      return;
    }

    playerChoice = btn.id;
    playerChoice = playerChoice.toUpperCase().charAt(0) + playerChoice.slice(1);

    youChose.textContent = `You chose: ${playerChoice}`;
    playRound(playerChoice);
  })
);

// Calls checkWinner to determine winner of round
// Displays scores
// Checks if sccores are above 4, if they are, input buttons will be disabled
function playRound(playerChoice) {
  checkWinner(playerChoice);
  pScore.textContent = `Player score: ${playerScore}`;
  cScore.textContent = `Computer score: ${compScore}`;

  if (playerScore > 4) {
    gameWinner.textContent = "You won! Nice job.";
    new_game.classList.add("visible");

    disableButtons();
    //make new game visible
  }
  if (compScore > 4) {
    gameWinner.textContent = "Computer won, better luck next time.";
    new_game.classList.add("visible");

    disableButtons();
    //make new game visible
  }
}

// Resets the game to defaults
function newGame() {
  playerScore = 0;
  compScore = 0;
  pScore.textContent = `Player score: ${playerScore}`;
  cScore.textContent = `Computer score: ${compScore}`;
  youChose.textContent = "";
  compChose.textContent = "";
  winner.textContent = "";
  gameWinner.textContent = "";
  new_game.classList.remove("visible");

  enableButtons();
}

// Disables buttons
function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}
// Enables buttons
function enableButtons() {
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

//Logic function to determine winner
function checkWinner(player) {
  let computerChoice = computerSelection();

  compChose.textContent = `Computer chose: ${computerChoice}`;

  if (computerChoice === player) {
    winner.textContent = "It's a tie!";
    return "tie";
  } else if (computerChoice === "Rock" && player === "Paper") {
    playerScore++;
    winner.textContent = "You win that round! 😎";
    return 1;
  } else if (computerChoice === "Rock" && player === "Scissors") {
    compScore++;
    winner.textContent = "Computer wins that round 😡";
    return 2;
  } else if (computerChoice === "Paper" && player === "Rock") {
    compScore++;
    winner.textContent = "Computer wins that round 😡";
    return 2;
  } else if (computerChoice === "Paper" && player === "Scissors") {
    playerScore++;
    winner.textContent = "You win that round! 😎";
    return 1;
  } else if (computerChoice === "Scissors" && player === "Rock") {
    playerScore++;
    winner.textContent = "You win that round! 😎";
    return 1;
  } else if (computerChoice === "Scissors" && player === "Paper") {
    compScore++;
    winner.textContent = "Computer wins that round 😡";
    return 2;
  }
}

// Computer chooses randomly from choices[]
function computerSelection() {
  choices = ["Rock", "Paper", "Scissors"];
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}
