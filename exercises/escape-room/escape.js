var readlineSync = require('readline-sync');

var userName = readlineSync.question('Hi, whats your name? ');
console.log('Hi ' + userName);

var playGame = readlineSync.question('Would you like to play a game? yes, or no.');

if (playGame === "yes"){
	
	console.log("Great lets play esape room! You must get the key to open the door in order to escape.  ");
	
	
	}else if (playGame === "no"){

console.log("You've already lost!");
	
	return;
}

var gameChoice = readlineSync.question("What would you like to do first? a : find the key, b : open the door, c : put hand in hole?")

while (gameChoice === "a" || gameChoice === "b"){
		
		console.log("Good choice!")
	
	if (gameChoice === "a"){
		var haveKey = readlineSync.question("What would you like to do next? a : find the key, b : open the door, c : put hand in hole?")

	}
		
		
	
	return
	}

	console.log( "Spider in hole, your dead!")





