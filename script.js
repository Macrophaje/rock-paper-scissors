function random(num) {
    return(Math.floor(Math.random() * Math.floor(num)));
}

function computerPlay() {
    switch(random(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Error";
    }
}

function playerPlay() {
    const choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (choice != null) {
        return choice;
    }
}

function win(playerSelection, computerSelection){
    alert("You Win! " + playerSelection + " beats " + computerSelection);
    return 1;
}

function lose(playerSelection, computerSelection) {
    alert("You Lose! " + computerSelection + " beats " + playerSelection);
    return 2;
}

function tie() {
    alert("Tie!")
    return 3;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return tie();
        } else if (computerSelection === "paper") {
            return lose(playerSelection, computerSelection);
        } else if (computerSelection === "scissors") {
            return win(playerSelection, computerSelection);
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return win(playerSelection, computerSelection);
        } else if (computerSelection === "paper") {
            return tie();
        } else if (computerSelection === "scissors") {
            return lose(playerSelection, computerSelection);
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return lose(playerSelection, computerSelection);
        } else if(computerSelection === "paper") {
            return win(playerSelection, computerSelection);
        } else if(computerSelection === "scissors") {
            return tie();
        }
    }
    return "Error: " + playerSelection + ", " + computerSelection;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for(let i = 0; i < 5; i++) {
        alert("Round " + (i+1));
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            playerPoints++;
        } else if (result === 2) {
            computerPoints++
        }
    }

    if (playerPoints > computerPoints) {
        return "You Win! " + playerPoints + " - " + computerPoints;
    } else if (playerPoints < computerPoints) {
        return "You Lose! " + playerPoints + " - " + computerPoints;
    } else {
        return "Tie! " + playerPoints + " - " + computerPoints;
    }
}

alert(game());