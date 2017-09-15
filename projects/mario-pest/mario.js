var totalGoomba = 0;
var totalCheep = 0;
var totalBob = 0;


document.getElementById("goomba-total").addEventListener("input", function () {
	var goombaCoins = parseInt(document.getElementById("goomba-price").innerHTML);
	var goombaTotal = parseInt(document.getElementById("goomba-total").value);
	totalGoomba = goombaCoins * goombaTotal;
	document.getElementById("total-goomba").innerHTML = totalGoomba;

});

document.getElementById("cheep-total").addEventListener("input", function () {
	var cheepCoins = parseInt(document.getElementById("cheep-price").innerHTML);
	var cheepTotal = parseInt(document.getElementById("cheep-total").value);
	totalCheep = cheepCoins * cheepTotal;
	document.getElementById("total-cheep").innerHTML = totalCheep;

});

document.getElementById("bob-total").addEventListener("input", function () {
	var bobCoins = parseInt(document.getElementById("bob-price").innerHTML);
	var bobTotal = parseInt(document.getElementById("bob-total").value);
	totalBob = bobCoins * bobTotal;
	document.getElementById("total-bob").innerHTML = totalBob;

});

document.getElementById("grand-total").addEventListener("click", function(){
		
	
	
	
	
	var grandTotal = totalBob + totalCheep + totalGoomba;
	document.getElementById("total-all").innerHTML = grandTotal;
	
})



//
//document.getElementById("add").addEventListener("click", function(){
//	var  addA = parseInt(document.getElementById("add-A").value);
//	var addB = parseInt(document.getElementById("add-B").value);
//	var addResult = addA + addB;
//	document.getElementById("add-result").innerHTML = addResult;
//});
