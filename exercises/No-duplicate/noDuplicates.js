var evilString = "This is my evil string";

function noDuplicates() {

	var evilStringArr = evilString.split("");//to array


	var finalArr = [];//new arrays
	var dupArr = [];

	for (i = 0; i < evilStringArr.length ; i++) { //itterates i
		
		var foundDuplicate = false				
		var currentChar = evilStringArr[i]			
		
		for (j = 0; j < finalArr.length; j++) {

			if (currentChar === finalArr[j]) {
				dupArr.push(currentChar)
				foundDuplicate = true
				break
			}
		}
		if (!foundDuplicate) {
			finalArr.push(currentChar)
		}

		console.log("final: " + finalArr.join(""))
		console.log("dup: " + dupArr.join(""))

		//if (sortedArr[i + 1] == sortedArr[i]) {
		//finalArr.push(sortedArr[i]);
	}
console.log(finalArr.join(""))
console.log(dupArr.join(""))
}



noDuplicates()