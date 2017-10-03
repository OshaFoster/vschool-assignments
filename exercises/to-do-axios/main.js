document.getElementById("send").addEventListener("click", function(){
	
	var title = document.getElementById("title").value
	var price = document.getElementById("price").value
	var description = document.getElementById("description").value
	
	var newItem = {title:title, price:price, description:description};
	
		var list = document.getElementById("listTitle")
		
	axios.post("https://api.vschool.io/osha/todo", newItem).then(function(response) {
		
		list.innerHTML +=  response.data.title 
		
		list.innerHTML +=  response.data.price 
	});
});


axios.get("https://api.vschool.io/osha/todo").then(function(response) {
	
	var list = document.getElementById("listTitle")
	
	for (var i =0; i <response.data.length; i++){
		
		list.innerHTML += response.data[i].title  
		
		list.innerHTML += "<ul>" + response.data[i].price + "</ul>" 
//			
			//response.data[i].title =+ response.data
//		
//		`string text ${expression} string text`
//		 //console.log(response.data[i].title);
		
	}
	});




//
//
//axios.get("https://api.vschool.io/osha/todo").then(function(response) {
//
//});
//


