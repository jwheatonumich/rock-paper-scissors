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

//Inputs player selection and computer selection, returns string declaring winner
function playRound(computerSelection,playerSelection){

    //Define variable to store winner
    let winner;

    //Ignore upper-case characters in player selection
    playerSelection = playerSelection.toLowerCase();

    //Determine who won
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    winner = "tie"
                    break;
                case "paper":
                    winner = "computer"
                    break;
                case "scissors":
                    winner = "player"
                    break;
            }
        break;

        case "paper":
            switch(computerSelection){
                case "rock":
                    winner = "player"
                    break;
        
                case "paper":
                    winner = "tie"
                    break;
        
                case "scissors":
                    winner = "computer"
                    break;
            }
        break;

        case "scissors":
            switch(computerSelection){
                case "rock":
                    winner = "computer"
                    break;
        
                case "paper":
                    winner = "player"
                    break;
        
                case "scissors":
                    winner = "tie"
                    break;
            }
        break;

    }

    //Return the outcome of the round
    return winner;

}