var readlineSync = require('readline-sync');


function Location(isShip, hit, display) {
	this.isShip = isShip;
	this.hit = hit;
	this.display = display;

}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;

}
var initialArray = [];


function shipArray(size) {

	for (var i = 0; i < size; i++) { //initial array

		var innerArray = []

		for (var j = 0; j < size; j++) {

			var randomInt = function (min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			// variable that creates random number between 1 and 5
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

//console.log(initialArray[0])

var hitCount = 0;

while (hitCount < 3) {
	


	var x = parseInt(readlineSync.question("Enter x: ")) - 1;

	var y = parseInt(readlineSync.question("Enter y: ")) - 1;

	var isHit = initialArray[x][y].isShip

	if (isHit) {
		
		
	
		hitCount++

		console.log("\n***** Hit ***\n")
		
		console.log(hitCount)
		
		

	} else {
		console.log("Miss ")
	}


	console.log(initialArray[x][y])

}

console.log(hitCount)



//var readlineSync = require('readline-sync');
//
//
//function shipArray(size) {
//
//	var initialArray = [];
//
//	for (var i = 0; i < size; i++) { //initial array
//
//
//		var innerArray = []
//
//		for (var j = 0; j < size; j++) {  //inner array
//
//			innerArray.push(0);
//
//		}
//	initialArray.push(innerArray);
//	}
//return initialArray;
//}
//
//console.log(shipArray(10))
//
//
//
//
//function Location(isShip, hit, display) {
//	this.isShip = isShip;
//	this.hit = hit;
//	this.display = display;
//
//}
//



//This isnt working -----------------
//function createArray(x,y) {
//
//	var grid = [];
//
//	for (var i = 0; i < x; i++) {
//		
//			grid.push([0]);
//		console.log(grid)
//			
//		var pushedArray = [];
//
//		for (var j = 0; j < y; j++) {
//
//			pushedArray.push(0);
//			console.log(grid)
//		}
//	}
//	
//	return grid;
//	
//}
// var grid = createArray(3,3);
// 
// console.log(grid);----------------------


//
//var train = {
//	type: "Trax",
//	color: "white with stripes",
//	cars: 5,
//	doorsClosed: false,
//	trainGo: function () {
//
//		if (this.doorsClosed === true) {
//			return "All aboard!"
//		}
//		return "Waiting for doors to close."
//	}
//};
//
//console.log(train.trainGo())
//
//
//
//var newLocation = new Location(true, "hit", "disply");
//
//for (var i = 0; i < innerArray.length; i++) {
//
//	innerArray.push(newLocation);
//}
