compScore = 0
playerScore = 0
userName = getName()

// Asks the user for their name and stores it in userName
function getName() {
    let name = prompt("Welcome to Rock, Paper, Scissors. Please enter your name:")
    return name;
}

// Makes a list of 3 choices and picks 1 at random.
function computerPlay() {

    choices = ["Rock", "Paper", "Scissors"]
    randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice;

}

// Asks user for their choice, converts string to lower case then first char of that string to uppercase.
function playerSelection() {
    userInput = prompt("Rock paper or scissors?")
    userInput = userInput.toLowerCase()
    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}
// Function to determine the winner based on choices.
// Compares choices to find a winner and increases score counter based on winner and returns a string of the winner
function playRound(comp, player) {
    if(comp === player) {
        return "It's a tie!"
    }
    else if(comp === "Rock" && player === "Paper") {
        ++playerScore
        return `${userName} wins! Paper beats rock.`
     }
     else if(comp === "Rock" && player === "Scissors") {
        ++compScore
        return "Computer wins! Rock beats scissors."
     }
     else if(comp === "Paper" && player === "Rock") {
        ++compScore
        return "Computer wins! Paper beats Rock."
     }
     else if(comp === "Paper" && player === "Scissors") {
        ++playerScore
        return `${userName} wins! Scissors beats Paper.`
     }
     else if(comp === "Scissors" && player === "Rock") {
        ++playerScore
        return `${userName} wins! Rock beats Scissors.`
     }
     else if(comp === "Scissors" && player === "Paper") {
        ++compScore
        return "Computer wins! Scissors beats Paper."
     }
}


function game() {
    // Calls the playRound() function 5 times
    for (let i = 0; i < 5; i++) {
    console.log(playRound(computerPlay(), playerSelection()))
    }
    // Prints final score from counters 
    console.log(`Final scores are: \n Computer: ${compScore}\n ${userName}: ${playerScore}`)

    // If else statements to determine who was the overall winner based on counter score.
    if(compScore === playerScore) {
        console.log("You both had the same score, it was a tie!")
    }
    else if(compScore > playerScore) {
        console.log("Computer wins the game.") 
    }
    else {
        console.log(`${userName} wins the game.`) 
    }
}

game()
