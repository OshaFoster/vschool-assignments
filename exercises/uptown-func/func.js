var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];





function everyOther(arr){
	
	var everyOtherLyric = [];
	for (i = 0; i <= lyrics.lenght; i += 2){
		
		everyOtherLyric.push(arr[i]);
	}
	console.log(everyOtherLyric.join(" "));
	
}
	

everyOther(lyrics);

