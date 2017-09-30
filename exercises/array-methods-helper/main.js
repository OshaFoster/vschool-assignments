var cars = [  
    {make: "Ford", model: "E150", price: 10000, year:1975},
    {make: "Chevy", model: "Camaro", price: 20010, year:2006},
    {make: "Toyota", model: "Tacoma", price: 30900, year:2008},
    {make: "Ford", model: "Explorer", price: 9000, year:2010},
    {make: "Ford", model: "F250", price: 2400, year:1973},
]


var cars = ["truck", "van", "sedan"];

cars.forEach(function(car){
	
	console.log(car +"goes vroom");
})

var angryCars = [];

var angryCars = cars.map(function(car){
	
	angryCars.push(car.toUpperCase());
	
	console.log(angryCars);
})

var newCars = cars.filter(function(car){
	
	return car.year > 2005
			
});

console.log(newCars);

var coolVan = cars.find(function(car){
	
	return car.model === "E150"
})

console.log(coolVan);

var oneOrMore = cars.some(function(car){
	return cars.model === "E150"
})

console.log("There is one or more E150s");


var oneOrMore = cars.every(function(car){
	return cars.model !== "E150"
})

console.log("Not every car is an E150");


















