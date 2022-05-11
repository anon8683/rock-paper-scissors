let compScore = 0;
let playerScore = 0;
let playerChoice = "";
// userName = getName();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const newGame = document.querySelector("#restart");
const body = document.querySelector("body");
const header3p = document.querySelector(".playerChose");
const header3 = document.querySelector(".compChose");
const winner = document.querySelector(".winner");

const playerScores = document.createElement("div");
const computerScore = document.createElement("div");

computerScore.classList.add("compScore");
playerScores.classList.add("playerScore");
body.appendChild(playerScores);
body.appendChild(computerScore);

computerScore.textContent = `Computer score: ${compScore}`;
playerScores.textContent = `Player score: ${playerScore}`;

// When newGame button is clicked, page reloads
newGame.addEventListener("click", startGame);

// Adds event listners to each button
// Could add forEach and use this.id to return choice
rock.addEventListener("click", function (e) {
  playerChoice = "Rock";
  playRound(computerPlay(), playerChoice);
  header3p.textContent = `You chose: ${playerChoice}`;
});
paper.addEventListener("click", function (e) {
  playerChoice = "Paper";
  playRound(computerPlay(), playerChoice);
  header3p.textContent = `You chose: ${playerChoice}`;
});
scissors.addEventListener("click", function (e) {
  playerChoice = "Scissors";
  playRound(computerPlay(), playerChoice);
  header3p.textContent = `You chose: ${playerChoice}`;
});

// Reloads the page to start a new game
function startGame() {
  location.reload();
}

function computerPlay() {
  choices = ["Rock", "Paper", "Scissors"];
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
  header3.textContent = `Computer chose: ${randomChoice}`;
  return randomChoice;
}

// Function to determine the winner based on choices.
// Compares choices to find a winner and increases score counter based on winner and returns a string of the winner

function playRound(comp, player) {
  if (comp === player) {
    winner.textContent = "It's a tie!";
    return "It's a tie!";
  } else if (comp === "Rock" && player === "Paper") {
    ++playerScore;
    playerScores.textContent = `Player score: ${playerScore}`;
    winner.textContent = "You win that round!";
    return "player";
  } else if (comp === "Rock" && player === "Scissors") {
    ++compScore;
    computerScore.textContent = `Computer score: ${compScore}`;
    winner.textContent = "Computer wins that round >:(";
    return "computer";
  } else if (comp === "Paper" && player === "Rock") {
    ++compScore;
    computerScore.textContent = `Computer score: ${compScore}`;
    winner.textContent = "Computer wins that round >:(";
    return "computer";
  } else if (comp === "Paper" && player === "Scissors") {
    ++playerScore;
    playerScores.textContent = `Player score: ${playerScore}`;
    winner.textContent = "You win that round!";
    return "player";
  } else if (comp === "Scissors" && player === "Rock") {
    ++playerScore;
    playerScores.textContent = `Player score: ${playerScore}`;
    winner.textContent = "You win that round!";
    return "player";
  } else if (comp === "Scissors" && player === "Paper") {
    ++compScore;
    computerScore.textContent = `Computer score: ${compScore}`;
    winner.textContent = "Computer wins that round >:(";
    return "computer";
  }
}
