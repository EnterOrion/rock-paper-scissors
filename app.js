let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

alert(getComputerChoice());