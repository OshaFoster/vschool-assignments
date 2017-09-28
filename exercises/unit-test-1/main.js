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


 function assert(actual, expected) {
 	if (actual !== expected) {
 		throw {
 			type: "Fail",
 			details: {
 				actual: actual,
 				expected: expected
 			}

 		}
 	} else {
 		console.log("Test passed.")

 	}

 }
 
 //assert(div(4, 2), 2)
 //assert(div(6, 4), 1.5)
 //assert(mult(5, 2), 10)
 //assert(add(4, 2), 4)



 function describe(message, testfunc) {

 	try {
 		testfunc();

 	} catch (err) {

 		console.log("Failed ", err);
 	}
 }


 describe("test calc", function () {

 			assert(add(2, 4), 6)
 			assert(div(6, 2), 3)
 			assert(mult(5, 5), 25)
 			assert(add(4, 2), 4)

 			});
