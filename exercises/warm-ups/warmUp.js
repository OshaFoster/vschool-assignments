//function largestNum(arr){
//	
//	return arr.sort(function(a, b){return a-b}).pop();
//	
//}
//console.log(largestNum([5,6,3,7,5,9,4,33]));


//Write a function that takes an array of numbers and returns the largest

//
//function almostIncreasingSequence(sequence) {
//    const array = sequence.sort(function(a,b){return a-b})
//   const nextArray = []
//   const failArray =[]
//for (i=0; i<array.length; i++){
//   
//    if(array[i] === array[i+1] + 1 ){
//		
//       nextArray.push(array[i])
//           
//		console.log(nextArray)
//		
//       }else{
//		   failArray.push(array[i])
//	   }
//    }
//    
//    return failArray.length < 1
//}
//
//console.log(almostIncreasingSequence([1,2,3,6]))
//const array = ["this","is", "my","array"]
//function every(arr, func){
//	
//
// 	for (let i=0; i < arr.length; i++){
//		
//	}
//	
//		
//}
//	
//	
//}
//
//console.log(every())

//function divisibleThree(num){
//	
//	numDivisible = 0
//	//while(num > 1){
//	if (num % 3 === 0){
//		
//	numDivisible++
//		num = num/3
//		console.log(num)
//	}else if ((num +1) % 3===0){
//		num = (num + 1)/3
//		numDivisible++
//		consoloe.log(num)
//	}else if((num-1) % 3===0){
//		num =(num -1)/3
//		numDivisible++
//	}
//		
//	//}
//	
//	return numDivisible
//	
//}
//
//console.log(divisibleThree(6))


function gameOf3(num, count === 0){
	if(num === 1) return count;
	if(num % 3 === 0){
		count++
		return gameOf3(num/3, count);
	}else if((num -1) % 3 === 0){
		return gameOf3((num-1)/3, count)
	}else{
		return gameOf3(num+1/3, count)
	}
}


console.log(gameOf3(9))





//
//function wordsWith(arr,char) {
//	
//	var matches = [];
//	
//	for (i = 0; i < arr.length; i ++){
//		if(arr[i].indexOf(char) !== -1)
//			matches.push(arr[i]);
//	}
//	
//	console.log(matches);
//	return matches;
//	
//}
//
//wordsWith(["this", "tht","hug","box"], "h");
//

	//loop throus arr
	//if current word contains letter push to new arr
	//create new array 
	//retunr 
//2. Write a function that takes an array of words and a character and return each word that has that letter present
//

//function shapeArea(n) {
//var area = 1;
//    
//    for (var i = 1; i < n; i++){
//        area += 4 * i;
//		
//		console.log(area)
//		
//    }
//        
//    return area;
//}
//
//shapeArea(6)