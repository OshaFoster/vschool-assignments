var changeBox = document.getElementById("box");




changeBox.addEventListener("dblclick", function(){
	
	changeBox.style.border = "5px dotted gold"
})


document.addEventListener("mousewheel", function(){
	
	changeBox.style.height = "1000px"
})










//
//On hover - Change the box to a circle
//On mousedown - Change the box shadow
//On double click - Change the border thickness of the box
//On mouse wheel - Change the size of the box
