var myVar = setInterval(function(){ myTimer() }, 1000);

var countDown = 4

function myTimer() {
	
	
	document.getElementById("boom").innerHTML = countDown
	countDown--
	
	if (countDown === -1) {
		document.getElementById("boom").innerHTML = "End Of The World";
		clearInterval(myVar);
	}
	

    
	
	
}





//
//var myVar = setInterval(function(){ myTimer() }, 4000);
//
//function myTimer() {
//	
//
//    document.getElementById("boom").style.color= "red";
//	
//
//	var time
//	set interval updates every second 1000 subtract 1 from time
// change timer inner html
//if  time is 0 add message to document.get emelment 
//
//
//
//
//function countDown(){
//	
//	var num = 20;
// 
//	for (i = 0 ; i < 20;  i++ ){
//		
//		num --;
//		
//	   setInterval 1000
//	}
//	
//	
//}
//
//	console.log(countDown())