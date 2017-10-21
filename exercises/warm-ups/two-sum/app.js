var twoSum = function(arr, target) {
	
 for(let i =0; i<arr.length; i ++){
	 let candidate = target -arr[i];
	 let index = arr.indexOf(candidate);
	 if(index !== i) return [i,index]
 }

    
};

console.log(twoSum())

moduls.export = twoSum

//
// for(let i =0; i<arr.length; i ++){
//	 let candidate = target -arr[i];
//	 let index = arr.indexOf(candidate);
//	 if(index !== i) return [i,index]
// }
//
//
//
//
//
//   const targetArray = []
//    for (let i = 0; i <nums.length; i++){
//	
//        if ((nums[i] + nums [i+1]) === target){
//           targetArray.push(i, (i+1))
//			return targetArray;
//        }
//    }