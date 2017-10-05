function numDouble(arr) {


	return arr.map(function (num) { ///return (arr.map(num => num * 2))

		 num * 2
	})

}

console.log(numDouble([2, 3, 4]))


function numString(arr) {            //return arr.map(String);

	return arr.map(function (str) {

		 str.toString()

	})
}


console.log(numString([2, 3, 4]))

function nameOnly(arr) {                
	return arr.map(function (names) {         /// return arr.map(names => names.name)

		 names.name
	})

}

console.log(


nameOnly([  
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]) 

)

function readyToPutInTheDom(arr){
	
	return arr.map(obj => {
		
		return`<h1>${obj.name}</h2> <h2>${obj.name}</h2>`
	})
}



module.exports = {
	
	numDouble,
	numS
	
}


	
