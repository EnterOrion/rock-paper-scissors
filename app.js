let options = ["rock", "paper", "scissors"];
let userChoice = prompt("Pick rock, paper, or scissors:");
userChoice = userChoice.toLowerCase();

if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    alert("Please reload the page and enter a valid choice!");
}


function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(userChoice, computerChoice)
{
    if (computerChoice == userChoice) {
        alert("Tie!");
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        alert("You lose, scissors beats paper!");
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        alert("You lose, rock beats scissors!");
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        alert("You lose, paper beats rock!");
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        alert("You win, scissors beats paper!");
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        alert("You win, rock beats scissors!");
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        alert("You win, paper beats rock!");
    }


}
playGame(userChoice, getComputerChoice());
