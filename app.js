let options = ["rock", "paper", "scissors"];


function getUserChoice() {
    let userChoice = document.getElementById("userChoice").value;
    console.log(userChoice);
    userChoice = userChoice.toLowerCase();
    //if (userChoice != "rock" || userChoice != "paper" || userChoice != "scissors") {
    //    alert("Please enter a valid choice!");
    //}
    //else {
    //     return userChoice
    //}
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

alert(getUserChoice());