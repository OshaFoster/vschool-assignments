 var readlineSync = require("readline-sync");

var userName = readlineSync.question('What is your name? ');

console.log('Hi ' + userName.toUpperCase() + '!');

var numbersInString = readlineSync.question("Enter a sentance: ");

console.log("The length of your sentance is: " + numbersInString.length);

var anotherString = readlineSync.question("add to your sentance...");

console.log(numbersInString + " " + anotherString)

var halfAString = readlineSync.question("PLease enter a message with more then 20 charecters: ");

if (halfAString.length >= 20){
	
	console.log("This was the last half: " + halfAString.substring( halfAString.length / 2, halfAString.length))
	
}

var chosenStart = parseInt(readlineSync.question("Would you like me to start from somewhere else in your info? Choose a starting number between [0-50]"));


console.log( halfAString.substring(chosenStart, halfAString.length))


