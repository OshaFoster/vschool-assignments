var readlineSync = require("readline-sync");

function GridLocation() {
	this.isX = isX;
	this.isHit = isHit;

}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;

}

var isXarray = [];

function zerosArray(size) {

	for (var i = 0; i < size; i++) {

		xArray = []


		for (var j = 0; j < size.length; j++) {

			var randomInt = function (min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			var isPoint = function () {
				var num = randomInt(1, 3)
				return num === 1;
			}

			var newX = new GridLocation(isPoint(), "isHit");
			
			xArray.push(GridLocation)
		}
		
		isXarray.push(xArray)
	}
	return isXarray;
}

zerosArray(4)

console.log(isXarray[0])
