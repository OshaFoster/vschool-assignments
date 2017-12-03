var animals = [
    {name:"lily", species:"dog"},
    {name:"sunny", species:"dog"},
    {name:"honey", species:"cow"},
    {name:"marble", species:"cat"}
]

// var names = animals.map(function(animal) {
//     return animal.name
// })

var isDog = function(animal){
    return animal.species === "dog"
}
var dogs = animals.filter(isDog)
// var dogs = animals.filter((animal) => animal.species === "dog")

console.log(dogs)
