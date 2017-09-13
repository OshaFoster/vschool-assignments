

function sum(x, y) {
	return x + y;
}
console.log(sum(2, 4));

//#2

function selectBiggestNumber(a, b, c) {         
	selectBiggestNumber = Math.max(a, b, c)
	return selectBiggestNumber;
}
 console.log(selectBiggestNumber(3, 6, 9));


//#3

var isEvenNumber = function (number) {
	if (number % 2 == 0) {
		return "Even!";
		
	} else {
		return "Odd!";
	}
};

console.log(isEvenNumber(44));


function stringParameter(string) {
	if (string.length <= 20) {
		return string.concat(stringParameter);
	}else if (string.length > 20) {
		return string.substring(0, string.length / 2 );
		
		}
}

console.log(stringParameter("This is a longish string"));





