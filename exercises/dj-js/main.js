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


document.addEventListener("keydown", function (event) {
	
	if (event.which === 89) {
		boxColor.style.backgroundColor = "yellow";
	} else if (event.which === 71) {
		boxColor.style.backgroundColor = "green";
	} else if (event.which === 66) {
		boxColor.style.backgroundColor = "blue";
	} else if (event.which === 79) {
		boxColor.style.backgroundColor = "orange";
	} else if (event.which === 82) {
		boxColor.style.backgroundColor = "red";
	} else if (event.which === 80) {
		boxColor.style.backgroundColor = "purple";
	}

});
