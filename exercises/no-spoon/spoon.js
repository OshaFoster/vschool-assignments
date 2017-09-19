//var chair = {
//	color: "blue",
//	empty: true,
//	wheels: 5,
//	isAvailable: function () {
//		if (this.empty === true) {
//			return "Chair is available!"
//		}
//	}
//};
//console.log(chair.isAvailable());



//var remote = {
//	type:"air-conditioner", 
//	color:"white", 
//	buttons:20, 
//	turnOn: true,
//	isOn: function(){
//		
//		return "Its cool in here!";
//	}
//	
//};
//console.log(remote.isOn());


//
//var train = {
//	type: "Trax",
//	color: "white with stripes",
//	cars: 5,
//	doorsClosed: false,
//	trainGo: function () {
//
//		if (this.doorsClosed === true) {
//			return "All aboard!"
//		}
//		return "Waiting for doors to close."
//	}
//};
//
//console.log(train.trainGo())
//

//var person = {
//	name: "Adam",
//	dressed: true,
//	age: 28,
//	isHelping: function () {
//		if (this.name === "Adam" && this.dressed === true) {
//			return "Adam is helping"
//		}
//	}
//};
//
//console.log(person.isHelping())

//var bag = {
//	color: "black",
//	full: true,
//	size: "large",
//	straps: 2,
//	homework: function () {
//
//		if (this.full === true) {
//			
//			return "There is homework, sad face."
//
//		}
//	}
//};
//
//console.log(bag.homework())

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());