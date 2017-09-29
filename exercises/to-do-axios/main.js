document.getElementById("send").addEventListener("click", function(){
	
	var title = document.getElementById("title").value
	var price = document.getElementById("price").value
	var description = document.getElementById("description").value
	
	var newItem = {title:title, price:price, description:description};
	
	
	axios.post("https://api.vschool.io/osha/todo", newItem).then(function(response) {
		
		list.innerHTML += response.data.title
	});
});


axios.get("https://api.vschool.io/osha/todo").then(function(response) {
	
	var list = document.getElementById("list")
	
	for (var i =0; i <response.data.length; i++){
		
		list.innerHTML += "<l>" + response.data[i].title + "</l>"
//			
//			response.data[i].title =+ response.data
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


