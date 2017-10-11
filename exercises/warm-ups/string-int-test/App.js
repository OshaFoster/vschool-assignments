function returnNcopies(str, n) {
	
	if (str.length < 3) {
		
		return str * n 
		
		console.log str
		
	}else{
	
		  return  str.substr(0,4) * n
		console.log str
	}
		
}

console.log(returnNcopies("this", 4))
console.log(returnNcopies("abba", 2))


//module.exports = returnNcopies;



function frontStr(str, n) {
	
	let newString = str.slice(0,3);
	
	return newString.repeat(n)
}

console.log(frontStr("hello", 5))

