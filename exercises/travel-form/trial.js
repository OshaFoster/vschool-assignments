document.getElementById("submit").addEventListener("click", function () {

	var firstName = document.myForm.firstname.value
	var LastName = document.myForm.lastname.value
	var personsAge = document.myForm.age.value
	var gender = document.myForm.gender.value
	var destination = document.myForm.destination.value


	var diet = document.myForm.restrictions

	var dietList = []

	for (var i = 0; i < diet.length; i++) {

		if (diet[i].checked) {

			dietList.push(diet[i].value)					


			console.log(dietList)

		}



	}

	var diet = document.myForm.restrictions

	var dietList = []

	for (var i = 0; i < diet.length; i++) {

		if (diet[i].checked) {

			dietList.push(diet[i].value)


			console.log(dietList)

		}



	}


	alert("Hello" + firstName + LastName + personsAge + gender + dietList)


});
