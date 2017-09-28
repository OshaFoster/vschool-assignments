//next time create id for form and grab by id 
//var firstName = travelForm.lastname.value  "travelForm is form ID"


document.getElementById("submit").addEventListener("click", function(){
	
var firstName = document.myForm.firstname.value	
var LastName = document.myForm.lastname.value	
var personsAge = document.myForm.age.value
var gender = document.myForm.gender.value

	
	var diet = document.myForm.restrictions
	
	var dietList = []

      for (var i = 0; i< diet.length; i++ ) {
		  
		if (diet[i].checked) {
			
			dietList.push(diet[i].value)
			
			
			console.log(dietList)
		
		}
		  
		  
		  
}
		
	var places = document.myForm.destination
	
	var placesList = []

      for (var i = 0; i< places.length; i++ ) {
		  
		if (places[i].checked) {
			
			placesList.push(places[i].value)
			
			
			console.log(placesList)
		
		}
		  
		  
		  
}
	
	
	alert("Full-name " + firstName + " " + LastName + "\n Age:" + personsAge + "\n Gender: " + gender + "\n Diet restrictions: " + dietList + "\n Destinations: " + placesList )
///this could be written using template literals

});
