//
//var readlineSync = require('readline-sync');
//
//
//var dictionary ={};
//	
//}
//
//
//
//function NewWord(word, definition, inDictionary){
//	this.word = word;
//	this.definition = definition;
//	this.inDictoinary = inDictionary;
//	
//	
//}
//
//
////while( )
//   var addWord  = readlineSync.question("Enter a word: ")
//   
//   var addDefinition = readlineSync.question( "Enter the definition for " + addWord + ":")
//
// dictionary[addWord] = addDefinition

var readlineSync = require("readline-sync");

var wordResponse = "";
var definitionResponse = "";

var dictionary = {};

while (wordResponse !== "q" || definitionResponse !== "q") {
	var wordResponse = readlineSync.question("What word would you like to enter? ");
	wordResponse = wordResponse.toLowerCase();

	if (wordResponse === "q") {
		break
	};

	if (dictionary[wordResponse]) {

		//console.log(dictionary[wordResponse]);
		console.log("the def: " + wordResponse + "is" + dictionary[wordResponse]);

	} else {

		var definitionResponse = readlineSync.question("What's the definition to that word? ");
		definitionResponse = definitionResponse.toLowerCase();
		dictionary[wordResponse] = definitionResponse;

	}

}

//var readlineSync = require("readline-sync");
//
//var wordResponse = "";
//var definitionResponse = "";
//
//var dictionary = {};
//
//while (wordResponse !== "q" || definitionResponse !== "q"){
//    var wordResponse = readlineSync.question("What word would you like to enter? ");
//    
//    if (wordResponse === "q") {
//        break
//    };
//    
//    if (dictionary[wordResponse] === undefined){
//       var definitionResponse = readlineSync.question("What's the definition to that word? "); 
//       dictionary[wordResponse] = definitionResponse;
//    } else {
//        console.log(dictionary[wordResponse]);
//    }
//
//}
