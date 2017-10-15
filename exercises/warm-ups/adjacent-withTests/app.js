const inputArray = ["this", "is", "an", "arr ay", "that", "to", "test"]



function greatestAdjacent(arr) {
	
	//check the length of the elements
	//find the combination of three that is the longest

	const lengthArray = []
	
	for (let i =0; i<arr.length-2; i++){
		
		const arrayNew = []
		
		arrayNew.push(arr[i] , arr[i+1] , arr[i+2])
		
		
		console.log(arrayNew)
	}
	

}

console.log(greatestAdjacent(inputArray))



module.exports = greatestAdjacent;


