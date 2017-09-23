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
		
		
	if (gameChoice === "a"){
		
		var findKey = readlineSync.question("There is a key under the mat or a key in the hole, which do you choose: mat or hole?")

	}else{ 
		
		re
	
	}
 }
		
//		
//	
//
//	}
//
//	console.log( "Spider in hole, your dead!")
//
//console.log("Good choice!")
//
//
//
//return;
// 
// 
// var y = parseInt(readlineSync.question("Enter y: "))-1;
// var x = parseInt(readlineSync.question("Enter y: "))-1;
//




