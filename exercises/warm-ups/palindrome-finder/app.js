function isPalindrome(str) {
	
	
	
var newString = str.toLowerCase().split("").reverse().join('')

//console.log(newString)
	
	return str.toLowerCase() === newString
	
}

console.log(isPalindrome("Wow Cow"))
console.log(isPalindrome("abba"))


module.exports = isPalindrome;




