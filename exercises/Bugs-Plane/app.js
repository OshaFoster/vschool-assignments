var form = document.getElementById("form");
console.log(form)

var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = document.form.firstname.value; 	
    var lastName = document.form.lastname.value;
    var age = document.form.age.value;
    var gender = document.form.gender.value;
    var location = document.form["travel-location"].value;
	
	
    var diet = [];
	
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);


var thing = document.getElementById("blah nblabl")

//console.log(thing.firstname) returns null