////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerAnswer;

function PlayerMove(move) {

    
    
   move = randomPlay();
   
    console.log(move);
    if (move === "rock"){
        playerAnswer = "rock";
        return "rock";
    }
    if (move === "paper"){
        playerAnswer = "paper";
        return "paper";
    }
    if (move === "scissors"){
        playerAnswer = "scissors";
        return "scissors";
    }
    
    else {
        getInput();
    }
    
    return move;
}

var computerAnswer;

function ComputerMove(move) {

    move = randomPlay();
    console.log(move);
    if (move === "rock") {
        computerAnswer = "rock";
        return "rock";
    }
    if (move === "paper") {
        computerAnswer = "paper";
        return "paper";
    }
    if (move === "scissors") {
        computerAnswer = "scissors";
        return "scissors";
    }
    
    else {
        getInput();
    }
    
    return move;
    
}

var playerWins = 0;
var computerWins = 0;
	
function getWinner(playerMove,computerMove) {
    var winner;
   
   if(playerAnswer == "rock" && computerAnswer == "scissors"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
   }
   else if(playerAnswer == "rock" && computerAnswer == "rock"){
	   winner = "tie";
	   
	   
   }
   else if(playerAnswer == "rock" && computerAnswer == "paper"){
	   winner = "computer";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
   }
   else if(playerAnswer == "paper" && computerAnswer == "scissors"){
	   winner = "computer";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
   }
   else if(playerAnswer == "paper" && computerAnswer == "rock"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
   }
   else if(playerAnswer == "paper" && computerAnswer == "paper"){
	   winner = "tie";
   }
   else if(playerAnswer == "scissors" && computerAnswer == "scissors"){
	   winner = "tie";
	   
   }
   else if(playerAnswer == "scissors" && computerAnswer == "rock"){
	   winner = "tie";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
   }
   else if(playerAnswer == "scissors" && computerAnswer == "paper"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
   }
   else {
	   getInput();
   }  
  
}

function playToFive() {
	
	PlayerMove();
	ComputerMove();
	getWinner();
 
    if(playerWins == 5){
		alert("Player Is The Winner");
		$('#message').text('Player Wins');
        computerWins = 0;
        playerWins = 0;
        
        
	}
	if(computerWins == 5){
		alert("Computer Is The Winner");
		$('#message').text('Computer Wins');
        computerWins = 0;
        playerWins = 0;
        
	}

}





