var readlineSync = require('readline-sync');


function Location(isShip, hit, display) {
	this.isShip = isShip;
	this.hit = hit;
	this.display = display;

}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
		// variable that creates random number between 1 and 5

}
var initialArray = [];


function shipArray(size) {

	for (var i = 0; i < size; i++) { //initial array

		var innerArray = []

		for (var j = 0; j < size; j++) {

			var trueFalse = function () {
				var num = randomInt(1, 3);

				return num === 1;
				//if 1, return true;
			}
			var newLocation = new Location(trueFalse(), "hit", "disply");

			innerArray.push(newLocation);

		}
		initialArray.push(innerArray);

	}
	return initialArray;
}


shipArray(10);

console.log(initialArray[0])

var hitCount = 0;

while (hitCount < 3) {
	


	var x = parseInt(readlineSync.question("Enter x coordinate 1-10: ")) - 1;

	var y = parseInt(readlineSync.question("Enter y coordinate 1-10: ")) - 1;

	var isHit = initialArray[x][y].isShip

	if (isHit) {
		
		hitCount++

		console.log("Hit")
		
		console.log("Number of hits: " + hitCount)
		
		
		

	} else {
		console.log("Miss, try again")
	}


	console.log(initialArray[x][y])

}

console.log(hitCount)







