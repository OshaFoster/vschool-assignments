var totalGoomba = 0;
var totalCheep = 0;
var totalBob = 0;


$("#goomba-total").on("input", function () {
	var goombaCoins = parseInt($("#goomba-price").html());
	var goombaTotal = parseInt($("#goomba-total").val());
	totalGoomba = goombaCoins * goombaTotal;
	$("#total-goomba").html(totalGoomba);	
	
});

$("#cheep-total").on("input", function () {
	var cheepCoins = parseInt($("#cheep-price").html());
	var cheepTotal = parseInt($("#cheep-total").val());
	totalCheep = cheepCoins * cheepTotal;
	$("#total-cheep").html(totalCheep) ;

});

$("#bob-total").on("input", function () {
	var bobCoins = parseInt($("#bob-price").html());
	var bobTotal = parseInt($("#bob-total").val());
	totalBob = bobCoins * bobTotal;
	$("#total-bob").html(totalBob) ;

});

$("#grand-total").on("click", function(){
	
	var grandTotal = totalBob + totalCheep + totalGoomba;
	$("#total-all").html(grandTotal) ;
	
})



//
//document.getElementById("add").on("click", function(){
//	var  addA = parseInt(document.getElementById("add-A").val();
//	var addB = parseInt(document.getElementById("add-B").value);
//	var addResult = addA + addB;
//	document.getElementById("add-result").innerHTML = addResult;
//});
