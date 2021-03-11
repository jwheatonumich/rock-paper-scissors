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

function userPlay(){
    
    //Prompt user for their choice
    playerChoice = prompt("Please input rock, paper, or scissors")

    //Ignore upper-case characters in player selection
    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}

function inputValidation(input){
    choice = input
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = userPlay();
    };
    return choice;

}

//Inputs player selection and computer selection, returns string declaring winner
function playRound(computerSelection,playerSelection){

    //Define variable to store winner
    let winner;
    let output;

    //Determine who won
    switch(playerSelection){
        case "rock":
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

        case "paper":
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

        case "scissors":
            switch(computerSelection){
                case "rock":
                    winner = "computer"
                    output = "Rock beats paper. The computer wins."
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

    //Return the outcome of the round
    return output;

}

function game(){

    //Initialize variables
    let computerChoice;
    let playerChoice;
    let winner;
    let round = 1;

    while (round <= 5){

        //Store the computer's choice
        computerChoice = computerPlay();

        //Store the player's choice
        playerChoice = userPlay();

        //Validate the player made a valid choice, reprompt until they do
        playerChoice = inputValidation(playerChoice);

        //Determine the winner
        winner = playRound(computerChoice, playerChoice);

        //Display the winner
        console.log(winner);

        round ++;
    }
}