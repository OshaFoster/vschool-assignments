const chai = require("chai");
const assert = chai.assert;


const maps = require("../map.js")


describe('check double the nums', function (){
	
	it("should return true if nums are double", function(){
		assert.deepEqual(maps.numDouble([2, 3]), [4, 6]);
		assert.deepEqual(maps.numDouble([-1]), [-2]);
	})
}
	
		 
describe('num to string', function(){
	
	it("should take num and return string", function(){
		assert.equal(maps.numString([2]), ["2"]);
	})
	
})		 
		 
		 
describe('num to string', () => {
	
	it("should take num and return string", () => {
		assert.equal(maps.numString([2]), ["2"]);
	})	 
		 
		 
}








