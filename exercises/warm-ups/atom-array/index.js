function sameDataType(arr){


 const result = [].concat(...arr);

const type = typeof result[0];

return  result.every((item) => {

    return type === typeof item;
})

}

console.log(sameDataType([['a', 'b', 'c'], ["d","d","a",]]))

// 
// const flattened = arr.reduce((prev, curr) =>{
//     return prev.concat(curr)
// },[])
