function factorial (n) {
	var total = 1;
	for (var i = n; i> 0; i--){
		total *= i;
	}
	
	return total;
	
}
console.log(factorial(4));