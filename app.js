let options = ["rock", "paper", "scissors"];

function getUserChoice(userChoice) {
    // ensure user input is a valid choice
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        return;
    }
    else {
        return userChoice
    }
}


function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userChoice, computerChoice)
{
    if (computerChoice == userChoice) {
        return "Tie!"
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        return "You lose, scissors beats paper!"
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        return "You lose, rock beats scissors!"
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        return "You lose, paper beats rock!"
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        return "You win, scissors beats paper!"
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        return "You win, rock beats scissors!"
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        return "You win, paper beats rock!"
    }

}

function game() {
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        // play five rounds, winner announced at end of each round and at the end of game
        let round = playRound(getUserChoice(), getComputerChoice());
        if (round == "You win, paper beats rock!" || round == "You win, rock beats scissors!" || round ==
        "You win, scissors beats paper!") {
            alert (round);
            userPoints++;
        }
        else if (round == "You lose, paper beats rock!" || round == "You lose, rock beats scissors!" ||
        round == "You lose, scissors beats paper!") {
            alert (round);
            computerPoints++;
        }
        else {
            alert (round);
        }
     }

    if (userPoints > computerPoints) {
        alert ("You win!");
    }
    else if (computerPoints > userPoints) {
        alert ("You lose!");
    }
    else {
        alert ("Complete tie!");
    }
}

//game()