function duplicates(str){
	var uniques = "";
	for (var i = 0 i < str.lenght; i++){
		if (str.lastIndexOf(str[i])===str.IndexOf(str[])) {
			unique+= str[i];
		}
	}
	return uniques;
}
console.log(duplicates("racecar"));





function noDuplicates (string){
	var newArray= [];
	var duplicates [];
	for (var i = 0; i< string.length; i++){
		if(newArray.indexOf(string[i]) === -1){
			newArray.push(string[i]);
		}else{
			duplicates.push(string[i]);
		}
		
	}
	
	
	return {
		uniques: uniques.join(""),
		duplicates: duplicates.join('')
	}
}

var result = noDuplicates("this is mey noen stirng");

console.log(result.duplicates);
console.log(result.uniques);