let options = ["rock", "paper", "scissors"];
let userChoice = prompt("Pick rock, paper, or scissors:");
userChoice = userChoice.toLowerCase();

if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    alert("Please reload the page and enter a valid choice!");
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



playGame(userChoice, getComputerChoice());
