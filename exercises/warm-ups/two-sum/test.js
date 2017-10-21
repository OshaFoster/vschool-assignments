var chai =require("chai");
var assert = chai.assert;

var twoSum = require("../app.js");

//describe('adds to target', function (){
//	
//	it("should check sum of two nums equal target", function(){
//		
//		assert.equal(twoSum([4, 5]), 9)
//	})
	
	
	
	
	
	
const tests ={
	
	case0: {
		arr: [
			1,2,3
		],
		target: 4
	}
}	
	
	
describe('adds to target', function (){
	
	it("should return an array containing two indices that add to target", function(){
		
		assert.deepEqual(twoSum(test.case0.arr, tests.case0.target), [0,2]);
	})
	
	
	