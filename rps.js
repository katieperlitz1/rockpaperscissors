console.log("Starting");

const options = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    return options[Math.floor(options.length * Math.random())];
}


function playRound(cc, pc){
    if (pc == cc){
        return "Tie";
    }
    else if (pc == "Rock" && cc == "Scissors"){
        return "Player Wins";
    }
    else if (pc == "Rock" && cc == "Paper"){
        return "Computer Wins";
    }
    else if (pc == "Paper" && cc == "Rock"){
        return "Player Wins";
    }
    else if (pc == "Paper" && cc == "Scissors"){
        return "Computer Wins";
    }
    else if (pc == "Scissors" && cc == "Rock"){
        return "Computer Wins";
    }
    else if (pc == "Scissors" && cc == "Paper"){
        return "Player Wins";
    }
}
let playerPoints = 0;
let computerPoints = 0;

function game(){
    for (let i = 0; i < 5; i++)
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        playerChoice = prompt("Enter Rock, Paper, or Scissors");
        let result = (playRound(computerChoice,playerChoice))
        if (result == "Player Wins"){
            playerPoints++;
        }
        else if (result == "Computer Wins"){
            computerPoints++;
        }
}

game()
console.log("Computer Points: " + computerPoints + " Player Points: " + playerPoints);

