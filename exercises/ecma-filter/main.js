//function fiveAndGreaterOnly(arr){
//	
//	return arr.filter(function(item){
//		
//		return item > 5
//		
//	});
//}
//
//
//console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
//

//(parameter) => {
//	
//}

const fiveAndGreaterOnly = arr =>  arr.filter((item) => item > 5); 
	


console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

const evensOnly = arr =>  arr.filter((item) => item % 2 === 0);
	
	
console.log(evensOnly([3,6,8,2]));



const fiveCharactersAndLessOnly = arr => arr.filter((item) => item.length <= 5); 
					  
					


console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));



const peopleWhoBelongToTheIlluminati = arr => arr.filter(item => item.member);



console.log(peopleWhoBelongToTheIlluminati([  
  {
    name: "Angelina Jolie",
    member: true
  },{
    name: "Eric Jones",
    member: false
  },{
    name: "Paris Hilton",
    member: true
  },{
    name: "Kayne West",
    member: false
  },{
    name: "Bob Ziroll",
    member: true
  }
])

)


const ofAge = arr => arr.filter(item => item.age >= 16)



 console.log(ofAge([  
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
]))
//
//var func = x => x * x;                  
//// concise syntax, implied "return"
//
//var func = (x, y) => { return x + y; }; 
//// with block body, explicit "return" needed

