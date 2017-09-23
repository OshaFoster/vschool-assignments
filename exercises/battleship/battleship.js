var readlineSync = require('readline-sync');


function shipArray(size) {

	var width = [];

	for (var i = 0; i < size; i++) {


		var height = []

		for (var j = 0; j < size; j++) {

			height.push(0);

		}
	width.push(height);
	}
return width;
}

console.log(shipArray(10))









//
//
//
//function createArray(x,y) {
//
//	var grid = [];
//
//	for (var i = 0; i < x; i++) {
//		
//			grid.push([0]);
//			
//		var pushedArray = [];
//
//		for (var j = 0; j < y; j++) {
//
//			pushedArray.push(0);
//		}
//	}
//	
//	return grid;
//	
//}
// var grid = createArray(3,3);
// 
// console.log(grid);
