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



var train = {
		type: "Trax",
		color: "white with stripes",
		cars: 5,
		doorsClosed: true,
		trainGo: function () {

			if (this.doorsClosed === true) {
				return "All aboard!"
			} 
				return "Waiting for doors to close."
			
		};

		console.log(train.trainGo())

		//var chair = {
		//	name: "Unkown"
		//
		//}
