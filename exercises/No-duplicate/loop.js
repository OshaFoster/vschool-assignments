//

var aString = "This string is a list of letters"


var splitString = aString.split("");

for( i = 0; i < splitString.length; i++){
	
  var stringArray2 = aString[i];
	
  console.log(stringArray2);
}




function firstOccur(string, a) {
	for (var i = 0; i < string.length; i++) {

		if (string.charAt(i) === a) {
			console.log(i) 
			return;
		}

	}
	return "Charecter is not found";
}
firstOccur("book", "r")


function findFortyTwo(arr) {
	for (var i = 0; i < arr.length; i++) {

		if (arr[i] === 42) {

			return;
		}

	}

console.log("Did not find 42!")
}

findFortyTwo([4, 6, 4, 4])





//Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
//
//Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.