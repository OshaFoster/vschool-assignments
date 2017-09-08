var fruit = ["banana", "apple", "orange", "watermelon"]; 

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//console.log("fruit: ", fruit);  
//console.log("vegetables: ", vegetables);  

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);

var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);


vegetables.lenght;
console.log(vegetables.length);

vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.slice(4,2);
console.log(food);

food.reverse();
console.log(food);

console.log(food.join(', '));




//
//Remove the first item from the fruit array.
//Find the index of "orange."
//Add that number to the end of the fruit array.
//Use the length property to find the length of the vegetable array. Log that to the console.
//Add that number to the end of the vegetable array.
//Put the two arrays together into one array. Fruit first. Call the new Array "food".
//Remove 2 elements from your new array starting at index 4 with one method.
//Reverse your array.
//Log your array as a string to the console.