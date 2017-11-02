

function findDifference(arr1, arr2){
    uniques =[]
        oneArray= [...arr1, ...arr2]
        sortedArr = oneArray.slice().sort()
for (let i=0; i<sortedArr.length; i++){

    if (sortedArr[i] !== sortedArr[i+1]){
        uniques.push(sortedArr[i])
    }
}
return uniques

}

console.log(findDifference([3,3,4], [3,3,4]))


function difference(arr1, arr2){
    
}
//
// function disemvowel(str){
//     let output ={
//         str:"",
//         vowels: ""
//     }
//     let vowels ="aeiou"
//
//     for(let i =0; i <str.length; i ++){
//         if(vowels.includes(str[i])){
//             output.vowels += str[i];
//         }else if (str[i].match){
//             continue
//         }else{
//             output.str += str[i]
//         }
//     }
//     return output
// }
//
//     console.log(disemvowel("Pickle Rick"))

//
// //greedy aproach
//
//
//
// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }
//
//
