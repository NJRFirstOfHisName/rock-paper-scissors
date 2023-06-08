function getComputerChoice() {
    rps = Math.random() * 3;
    if (rps < 1) {
        return "rock"
    } else if (rps < 2) {
        return "paper"
    } else if (rps < 3) {
        return "scissors"
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            div.textContent = "Computer has selected rock. Tie game!"
            return 0
        } else if (computerSelection === "paper") {
            div.textContent = "Computer has selected paper. You lose!"
            return 1
        } else {
            div.textContent = "Computer has selected scissors. You win!"
            return 2
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            div.textContent = "Computer has selected rock. You win!"
            return 2
        } else if (computerSelection === "paper") {
            div.textContent = "Computer has selected paper. Tie game!"
            return 0
        } else {
            div.textContent = "Computer has selected scissors. You lose!"
            return 1
        } 
    } else {
        if (computerSelection === "rock") {
            div.textContent = "Computer has selected rock. You lose!"
            return 1
        } else if (computerSelection === "paper") {
            div.textContent = "Computer has selected paper. You win!"
            return 2
        } else {
            div.textContent = "Computer has selected scissors. Tie game!"
            return 0
        }
    }
}

function game() {
    wins = 0
    losses = 0
    i = 0
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            result = playRound(button.id)
            i++
            if (result === 1) {
                losses++
            } else if (result === 2){
                wins++
            }
            div.textContent += "\r\nWins: " + wins + "\r\nLosses: " + losses
                if (wins === 5 || losses === 5) {
                    if (wins > losses) {
                        div.textContent += "\n You win the match!"
                        game()
                    } else {
                        div.textContent += "\n You lose the match."
                        game()
                    }
                    wins = 0
                    losses = 0
                    i = 0
            }
        })
    })

    // for (i = 0; i < 5; i = 5) {
    //     if (result === 1) {
    //         losses++
    //     } else if (result === 2){
    //         wins++
    //     }
    //     if (wins < losses) {
    //         div.textContent += "After " + (i+1) + " round(s) you are behind by " + (losses-wins);
    //     } else if (wins > losses) {
    //         div.textContent += "After " + (i+1) + " round(s) you are ahead by " + (wins-losses);
    //     } else {
    //         div.textContent += "After " + (i+1) + " round(s) you are tied!"
    //     }
    //     if ((wins-losses) > 2) {
    //         div.textContent += "You win the match!"
    //         i = 5
    //     } else if ((losses-wins) > 2) {
    //         div.textContent += "You lose the match."
    //         i = 5
    //     } else if (i === 4) {
    //         if (wins > losses) {
    //             div.textContent += "You've won the match!"
    //         } else if (wins < losses) {
    //             div.textContent += "You've lost the match!"
    //         } else {
    //             div.textContent += "The match has ended in a tie."
    //         }
    //     }
    // }
}

const div = document.createElement('div');
div.setAttribute('style', 'white-space: pre;')
container.appendChild(div);
const buttons = document.querySelectorAll('button');

game();