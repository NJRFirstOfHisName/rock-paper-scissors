function getComputerChoice() {
    rps = Math.random() * 3;
    if (rps < 1) {
        return "rock"
    } else if (rps < 2) {
        return "paper"
    } else if (rps < 3) {
        return "scissors"
    } else {
        return "Invalid input, error in random function"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return("Computer has selected rock. Tie game!")
            } else if (computerSelection === "paper") {
                return("Computer has selected paper. You lose!")                
            } else {
                return("Computer has selected scissors. You win!")                
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return("Computer has selected rock. You win!")                
            } else if (computerSelection === "paper") {
                return("Computer has selected paper. Tie game!")               
            } else {
                return("Computer has selected scissors. You lose!")               
            }
        } else {
            if (computerSelection === "rock") {
                return("Computer has selected rock. You lose!")
            } else if (computerSelection === "paper") {
                return("Computer has selected paper. You win!")                
            } else {
                return("Computer has selected scissors. Tie game!")
            }
        }

    } else {
        playerSelection = prompt("Invalid entry, please try again.")
    }
}

let playerSelection = prompt("Enter your choice: rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));