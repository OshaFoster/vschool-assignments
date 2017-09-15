var evilString = "This is my evil string";

function noDuplicates() {

	var evilStringArr = evilString.split("");//to array


	var finalArr = [];//new arrays
	var dupArr = [];

	for (i = 0; i < evilStringArr.length ; i++) { //itterates i
		
		var foundDuplicate = false				
		var currentChar = evilStringArr[i]			
		
		for (j = 0; j < finalArr.length; j++) { //itterates j

			if (currentChar === finalArr[j]) { //compares and pushes to dupArr 
				dupArr.push(currentChar)
				foundDuplicate = true
				break
			}
		}
		if (!foundDuplicate) {
			finalArr.push(currentChar)
		}

		//console.log("final: " + finalArr.join(""))
		//console.log("dup: " + dupArr.join(""))

	}
console.log(finalArr.join(""))
console.log(dupArr.join(""))
}



noDuplicates()