
document.getElementById("add").addEventListener("click", function(){
	var  addA = parseInt(document.getElementById("add-A").value);
	var addB = parseInt(document.getElementById("add-B").value);
	var addResult = addA + addB;
	document.getElementById("add-result").innerHTML = addResult;
});	

document.getElementById("subtract").addEventListener("click", function(){
	var  subtractA = parseInt(document.getElementById("subtract-A").value);
	var subtractB = parseInt(document.getElementById("subtract-B").value);
	var subtractResult = subtractA - subtractB;
	document.getElementById("subtract-result").innerHTML = subtractResult;
});	

document.getElementById("multiply").addEventListener("click", function(){
	var  multiplyA = parseInt(document.getElementById("multiply-A").value);
	var multiplyB = parseInt(document.getElementById("multiply-B").value);
	var multiplyResult = multiplyA * multiplyB;
	document.getElementById("multiply-result").innerHTML = multiplyResult;
});	

