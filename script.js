function getComputerChoice() {
    rps = Math.random() * 3;
    if (rps < 1) {
        return 'Rock'
    } else if (rps < 2) {
        return 'Paper'
    } else if (rps < 3) {
        return 'Scissors'
    } else {
        return 'Invalid input, error in random function'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                console.log("Computer has selected rock. Tie game!")
                return
            } else if (computerSelection === 'paper') {
                console.log("Computer has selected paper. You lose!")
                return
            } else {
                console.log("Computer has selected scissors. You win!")
                return
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log("Computer has selected rock. You win!")
                return
            } else if (computerSelection === 'paper') {
                console.log("Computer has selected paper. Tie game!")
                return
            } else {
                console.log("Computer has selected scissors. You lose!")
                return
            }
        } else {
            if (computerSelection === 'rock') {
                console.log("Computer has selected rock. You lose!")
                return
            } else if (computerSelection === 'paper') {
                console.log("Computer has selected paper. You win!")
                return
            } else {
                console.log("Computer has selected scissors. Tie game!")
                return
            }
        }

    } else {
        playerSelection = prompt("Invalid entry, please try again.")
    }
}

let playerSelection = prompt("Enter your choice: rock, paper, or scissors?").toLowerCase;
const computerSelection = getComputerChoice();

console.log(getComputerChoice());
playRound();