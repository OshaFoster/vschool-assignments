var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");


//describe("A calculator", function () {
//
//			it("should add two numbers", function () {
//
//				assert.equal(calculator.add(1, 1), 2); //conditions to fail
//
//
//			});
//
//			it("should subtract two numbers", function () {
//
//				assert.equal(calculator.sub(1, 1), 0); //conditions to fail
//
//
//			});
//
//
//			it("should multiply two numbers", function () {
//
//				assert.equal(calculator.mult(1, 1), 1); //conditions to fail
//
//
//			});
//
//
//			it("should divide two numbers", function () {
//
//				assert.equal(calculator.div(1, 1), 1); //conditions to fail
//
//
//			});
//});

var lastNums = require("../lastNums.js");

describe("compare numbers", function() {
	
	it("should tell if first and last num the same", function(){
		
		assert.isTrue(lastNums(23, 3),true);
		assert.isFalse(lastNums(2, 33),true);
		assert.equal(lastNums(2, 32),true);
		assert.equal(lastNums(2, -32),true);
		assert.equal(lastNums(112, -32),true);
	
	});
		
	
});





















