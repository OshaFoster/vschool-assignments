var chai =require("chai");
var assert = chai.assert;

var greatestAdjacent = require("./app.js");

describe('check for greatest length of three adjacent strings', function (){
	
	it("should check for three greatest lengths", function(){
		
		assert.deepEqual(greatestAdjacent(['this','is','the','shoe']), ["this",'the','shoe'])
	})
	
	
	
	
