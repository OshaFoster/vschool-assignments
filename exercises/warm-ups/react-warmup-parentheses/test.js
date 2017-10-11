var chai =require("chai");
var assert = chai.assert;

var checkParentheses = require("./app.js");

describe('A zen balanced parenthes', function (){
	
	it("should have equal open and closing ()", function(){
		
		assert.isTrue(checkParentheses('(())'))
		assert.isFalse(checkParentheses('((())'))
	})
	
	it ("should have an opening bracket before its mathcking closing bracket()", function())
	
		assert.isTrue(checkParentheses('(())'), true)
		assert.isFalse(checkParentheses('())'), false)
	})
	
	
	
	//npm install chai

///mocha //app.js