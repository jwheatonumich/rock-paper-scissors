//Define global variables
let playerWinstreak = 0;
let computerWinstreak = 0;

//Randomly select rock, paper, or scissors for the computer opponent
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3+1);
    let choice;

    switch(randomNumber){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;

    }

    return choice;
}

//Determines player selection based on button ID, returns string declaring winner
function playRound(){

    //Define variable to store winner
    let winner;
    let output;

    //Determine player and computer's moves
    let computerSelection = computerPlay();
    let playerSelection = this.id;

    //Determine who won
    switch(playerSelection){
        case "rockButton":
            switch(computerSelection){
                case "rock":
                    winner = "tie"
                    output = "Both players chose rock. The game is a tie."
                    break;
                case "paper":
                    winner = "computer"
                    output = "Paper beats rock. The computer wins."
                    break;
                case "scissors":
                    winner = "player"
                    output = "Rock beats paper. You win."
                    break;
            }
        break;

        case "paperButton":
            switch(computerSelection){
                case "rock":
                    winner = "player"
                    output = "Paper beats rock. You win."
                    break;
        
                case "paper":
                    winner = "tie"
                    output = "Both players chose paper. The game is a tie"
                    break;
        
                case "scissors":
                    winner = "computer"
                    output = "Scissors bear paper. The computer wins."
                    break;
            }
        break;

        case "scissorsButton":
            switch(computerSelection){
                case "rock":
                    winner = "computer"
                    output = "Rock beats scissors. The computer wins."
                    break;
        
                case "paper":
                    winner = "player"
                    output = "Scissors beat paper. You win."
                    break;
        
                case "scissors":
                    winner = "tie"
                    output = "Both players chose scissors. The game is a tie."
                    break;
            }
        break;

    }

    if(winner === "player"){
        playerWinstreak ++;
    }else{
        computerWinstreak ++
    }

    if (playerWinstreak >=5){
        output += " You won 5 times!"
    } else if (computerWinstreak >=5){
        output += " The computer won 5 times!"
    }

    //Return the outcome of the round
    outputResults(output);

}

function outputResults(inputText){
    //Tell player who won
    outputObject = document.querySelector('#outputDiv');
    outputObject.textContent = inputText;

    //Update winstreaks
    scoreObject = document.querySelector('#score');
    scoreObject.innerHTML = "Player:" + playerWinstreak + "<br>Computer:"+computerWinstreak

}

//Find and store all buttons
let buttons = document.querySelectorAll('.playButton');
buttons.forEach((button) => {
    button.addEventListener('click',playRound)
})

