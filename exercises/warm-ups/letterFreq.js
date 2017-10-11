//var phrase ='slimy smelly solution'
//
//var phraseArray = phrase.split('');
//
//console.log(phraseArray);
//
//
//
//var letterCount = {};
//
//
//phraseArray.forEach(function(letter) { letterCount[letter] = (letterCount[letter]||0)+1; });
//
//
//
//console.log(letterCount);
//
//
//filter func , , , 

function returnNcopies(str, n) {
	
	if (str.length < 3) {
		
		return str.repeat(n) 
		
		console.log(str)
		
	}else{
	
		  return  str.substr(0,4)  
		console.log(str.repeat(n))
	}
		
}

console.log(returnNcopies("this", 4))
console.log(returnNcopies("abba", 2))



//letterCount =p
//
//
//
//
////first turn phrase into array .slice(" ") 
//
////go through aray and count number of each letter
//
////

//
//
//Letter Frequency
//Find the frequency of all the letters in a given word or phrase, and print them to the console. Example: var phrase = 'slimy smelly solution'; Extra Credit Also output the original string with all duplicate letters removed. (i.e. slimy eoutn) Extra Extra Credit Display the list of letters in
//Written by
//----------------
//Robert Williams
//
//
//down vote
//Something like this:
//
//uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
//
//var  count = {}; 
//
//uniqueCount.forEach(function(i) { count[i] = (count[i]||0)+1;  });
//
//// count = {"a":3,"b":2,"c":2,"d":2,"e":2,"f":1,"g":1,"h":3}