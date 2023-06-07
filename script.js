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

function playRound() {

    let playerSelection = prompt("Enter your choice: rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                console.log("Computer has selected rock. Tie game!")
                return 0
            } else if (computerSelection === "paper") {
                console.log("Computer has selected paper. You lose!")
                return 1
            } else {
                console.log("Computer has selected scissors. You win!")
                return 2
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("Computer has selected rock. You win!")
                return 2
            } else if (computerSelection === "paper") {
                console.log("Computer has selected paper. Tie game!")
                return 0
            } else {
                console.log("Computer has selected scissors. You lose!")
                return 1
            } 
        } else {
            if (computerSelection === "rock") {
                console.log("Computer has selected rock. You lose!")
                return 1
            } else if (computerSelection === "paper") {
                console.log("Computer has selected paper. You win!")
                return 2
            } else {
                console.log("Computer has selected scissors. Tie game!")
                return 0
            }
        }

    } else {
        playerSelection = prompt("Invalid entry, please try again.")
    }
}

function game() {
    wins = 0
    losses = 0;
    for (i = 0; i < 5; i++) {
        result = playRound()
        if (result === 1) {
            losses++
        } else if (result === 2){
            wins++
        }
        if (wins < losses) {
            console.log("After " + (i+1) + " round(s) you are behind by " + (losses-wins));
        } else if (wins > losses) {
            console.log("After " + (i+1) + " round(s) you are ahead by " + (wins-losses));
        } else {
            console.log("After " + (i+1) + " round(s) you are tied!")
        }
        if ((wins-losses) > 2) {
            console.log("You win the match!")
            i = 5
        } else if ((losses-wins) > 2) {
            console.log("You lose the match.")
            i = 5
        } else if (i === 4) {
            if (wins > losses) {
                console.log("You've won the match!")
            } else if (wins < losses) {
                console.log("You've lost the match!")
            } else {
                console.log("The match has ended in a tie.")
            }
        }
    }
}



game();