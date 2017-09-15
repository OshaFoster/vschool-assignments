
document.getElementById("add-todo").addEventListener("submit", function(event) {
			event.preventDefault();
	console.log({e:event.target});
	var newTodo = document.getElementById("new-todo-text");

			var list = document.getElementById("todo-list");
			list.innerHTML += "<li>" + newTodo.value + "</li>";

			newTodo.value = "";
			newTodo.focus();
});
