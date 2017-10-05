var chai = require("chai");
var assert = chai.assert;

var isValidIp = require "../app"

describe("check Valid Ip", function () {

	it("should check if there are 3 decimals", function () {

		assert.equal(isValidIp('234.234.234.3'), true)
	})

	it("should determine if numbers betweeb decimals are between 0, 255", function () {

		assert.equal(isValidIp('23.255.33.150'), true)
	})

	it("should determine if numbers between decimals are between 0, 255", function () {

		assert.equal(isValidIp('23.255.33.260'), false)
	})
	

})
