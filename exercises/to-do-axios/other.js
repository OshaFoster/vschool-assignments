document.getElementById("semd").addEventListener("click", function(){
	
	var title = document.getElementById("title").value
	var price = document.getElementById("price").value
	var description = documemt.getElementById("description").value
	
	var newItem = {title:title}, {price:price}, {description:description}
	
		var list = document.getElementById("listTitle")
		var proceList = documant.getElementById("listPrice")
		
		axios.post("https://api.vschool.io/osha/todo", newItem).then(function(response){
			
			
			list.innerHTML += response.data.title
			
			list.innerHTML += response.data.price
		});
	
	
});

axios.get("https://api.vschool.io/osha/todo").then(function(response){
	
	var list = document.getElementById("listTitle")
	
}
			