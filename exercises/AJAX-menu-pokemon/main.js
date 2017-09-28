var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200){
		var jsonData = xhr.responseText;
		var data = JSON.parse(jsonData);
		
		console.log(data.objects["0"].pokemon)
			
		
function parsePokemon(){
	
	var myArray = data.objects["0"].pokemon;
	
	for (i =0; i < myArray.length; i ++){
		
		
		document.getElementById("names").innerHTML += "<h3>" + myArray[i].name + "</h3>"
		
//	console.log(myArray[i].name) 
//		
	}	
}

parsePokemon()	
	}
};

xhr.open("GET"," http://api.vschool.io:6543/pokemon.json", true);

xhr.send(); 






//
//		  document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
//        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
//        spaceshipurl = data.starships[0];
//        console.log(spaceshipurl);