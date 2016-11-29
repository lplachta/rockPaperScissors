$(function (){ //PageLoad Function
	console.log("Page load");
	let choices = ["rock", "paper", "scissors"];

	$("#rock").click(function(){ //The first of three button clicks where the player selects which one they want to play. 
		play(choices[0]); 		//Will respond when the user selects their respective option
	});
	$("#paper").click(function(){
		play(choices[1]);
	});
	$("#scissors").click(function(){
		play(choices[2]);
	});

	function play(playerChoice) { //The function that will allow the user to play the game
		let computerResult = getComputerResult();
		whoWon(playerChoice, choices[computerResult]);

	}

	function getComputerResult() { //This function will select a random option and will play as the computer
		return Math.floor(Math.random()*3);
	}

	function whoWon(playerChoice, computerChoice) { //Function to delcare the conditions of how to win for both the player and the computer
		console.log(playerChoice, computerChoice); //Also declares a function further down should the player and computer select the same option.
		if(playerChoice === "rock" && computerChoice === "scissors"){ //Victory conditions declared in if else statements
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "paper" && computerChoice === "rock"){
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "scissors" && computerChoice === "paper"){
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "rock" && computerChoice === "paper"){
			console.log("Computer wins");
			printResult(false, true, false);
		} else if (playerChoice === "paper" && computerChoice === "scissors"){
			console.log("Computer wins");
			printResult(false, true, false);
		} else if (playerChoice === "scissors" && computerChoice === "rock"){
			console.log("Computer wins");
			printResult(false, true, false);
		}  else {
			console.log("Its a draw, please play again");
			printResult(false, false, true);
		}

	}

	function printResult(playerWins, computerWins, draw){ //Displays the outcome of who won each round onto the HTML page
			let playerScore = parseInt ($("#playerScore").html());
			let computerScore = parseInt ($("#computerScore").html());
			if (playerWins) {
				playerScore++; 							//Will add one to the player's score should the player win a round
			 $("#playerScore").html(playerScore);
			 $("#winner").html("Player wins");
			} else if (computerWins) {
				computerScore++;						//Will add one to the computer's score should the computer win a round
			 $("#computerScore").html(computerScore);
			 $("#winner").html("Computer wins");
			} else {
				$("#winner").html("Its a draw"); //The outcome message should a draw situation occur
			}
	}
});