document.getElementById("send").addEventListener("click", function(){
	
	var title = document.getElementById("title").value
	var price = document.getElementById("price").value
	var description = document.getElementById("description").value
	
	var newItem = {title:title, price:price, description:description};
	
		var list = document.getElementById("listTitle")
		var priceList =document.getElementById("listPrice")
		
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


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>ToDo</title>
	<link rel="stylesheet" href="style.css" class="css">
</head>

<body>
	<form id="add-todo" class="input">
		<header>
			<h1> Todo List </h1>
		</header>

		<div id="div1" class="div1">
			<p>This is my list of todo items</p>
			<input id="title" class="input" placeholder="title" >
			<input id="price" class="input" type="number" placeholder="cost" >
			<input id="description" class="input" placeholder="list item">
			
			<button id="send" type="button" >Append List</button>
			
			<div class="div2">
			<ul id="listTitle"> 
			</ul>
			<div>
			<ul id="listPrice">	
			</ul>
			</div>

		</div>
		</div>
	</form>
</body>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="main.js"></script>

</html>
