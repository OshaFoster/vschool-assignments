var chai =require("chai");
var assert = chai.assert;

var isPalindrome = require("./app.js");

describe('checks palindrome', function (){
	
	it("should return false if not a palindrome", function(){
		
		assert.equal(isPalindrome('palindrome'), false)
	})
	
	it('should have the same charecters forward and backwords', function(){
		
		assert.equal(isPalindrome("racecar"), true)
	});
	
	it('should work if there is upper and lower case', function(){
		
		assert.equal(isPalindrome("RaCecar"), true)
	});
	
	it("shoule ignore spaces", function(){
		
		assert.equal(isPalindrome('race car!'))
	})
	
	it("shoule ignore special charecters", function(){
		
		assert.equal(isPalindrome('race car!'))
	})
})

//npm install chai

///mocha //app.js