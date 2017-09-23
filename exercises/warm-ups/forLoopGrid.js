//var grid = []
//
//var pushedArray = [];
//
//for (var i = 0; i <= 4; i++) {
//
//	grid.push([0]);
//
//	for (var j = 0; j < 1; j++) {
//
//		pushedArray.push(grid)
//	}
//
//
//}
//
//console.log(pushedArray);

function createArray(x,y) {

	var grid = [];

	for (var i = 0; i < x; i++) {
		
			grid.push([0]);
			
		var pushedArray = [];

		for (var j = 0; j < y; j++) {

			pushedArray.push(0);
		}
	}
	
	return grid;
	
}
 var grid = createArray(3,3);
 
 console.log(grid);
 
// 
//
// var y = parseInt(readlineSync.question("Enter y: "))-1;
// var x = parseInt(readlineSync.question("Enter y: "))-1;
//
//(grid[x][y]) = 1;
//
