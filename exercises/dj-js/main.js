var boxColor = document.getElementById("box");


boxColor.addEventListener("mouseover", function () {

	boxColor.style.backgroundColor = "blue";
})

boxColor.addEventListener("mousedown", function () {

	boxColor.style.backgroundColor = "red";

})

boxColor.addEventListener("mouseup", function () {

	boxColor.style.backgroundColor = "yellow";

})

boxColor.addEventListener("dblclick", function () {

	boxColor.style.backgroundColor = "green";

})
boxColor.addEventListener("mousewheel", function () {

	boxColor.style.backgroundColor = "orange";

})

boxColor.addEventListener("keypress", function (event) {
	

			boxColor.style.backgroundColor = "purple";
})