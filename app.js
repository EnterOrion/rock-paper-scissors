let options = ["rock", "paper", "scissors"];
let userData = 0;
let computerData = 0;

// Sets default of zero for the points per player
document.getElementById("userPoints").innerText = userData;
document.getElementById("computerPoints").innerText = computerData;

function increasePointUser() {
    userData = userData + 1;
    document.getElementById("userPoints").innerText = userData;
}

function increasePointComputer() {
    computerData = computerData + 1;
    document.getElementById("computerPoints").innerText = computerData;
}

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
    // Alerts the result of the round, unless one of the players wins
    if (computerChoice == userChoice) {
        alert ("Tie!");
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        increasePointComputer()
        if (document.getElementById("computerPoints").innerText == 5) {
            alert("Computer wins!")
            return;
        }
        alert ("You lose, scissors beats paper!");
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        increasePointComputer()
        if (document.getElementById("computerPoints").innerText == 5) {
            alert("Computer wins!")
            return;
        }
        alert ("You lose, rock beats scissors!");
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        increasePointComputer()
        if (document.getElementById("computerPoints").innerText == 5) {
            alert("Computer wins!")
            return;
        }
        alert ("You lose, paper beats rock!");
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        increasePointUser()
        if (document.getElementById("userPoints").innerText == 5) {
            alert("User wins!")
            return;
        }
        alert ("You win, scissors beats paper!");
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        increasePointUser()
        if (document.getElementById("userPoints").innerText == 5) {
            alert("User wins!")
            return;
        }
        alert ("You win, rock beats scissors!");
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        increasePointUser()
        if (document.getElementById("userPoints").innerText == 5) {
            alert("User wins!")
            return;
        }
        alert ("You win, paper beats rock!");
    }

}

function game() {
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        // play five rounds, winner announced at end of each round and at the end of game
        let round = playRound(getUserChoice(userChoice), getComputerChoice());
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

