 var readlineSync = require("readline-sync");

 function add(a, b) {

 	return a + b;
 }

 function sub(a, b) {
 	return a - b;
 }

 function mult(a, b) {

 	return a * b;
 }

 function div(a, b) {

 	return a / b;

 }

 var input1 = parseInt(readlineSync.question("Enter your first number: "))
 var input2 = parseInt(readlineSync.question("Please enter your second number: "))
 var operator = (readlineSync.question("Please enter the operation to preform: add, sub, mult, div: "))

 function results() {
 	if (operator === "add") {

 		return add(input1, input2)
 	} else if (operator === "mult") {

 		return mult(input1, input2)


 	} else if (operator === "div") {

 		return div(input1, input2)

 	} else if (operator === "sub") {

 		return sub(input1, input2)
 	}
 }

 console.log(results());
