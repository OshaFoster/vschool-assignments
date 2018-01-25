// function count(str){
//     str= str.toLowerCase();
//     var obj ={};
//     for (var i=0; i<str.length; i++){
//         if (obj[str[i]]){
//             obj[str[i]]=obj[str[i]]+1;
//         }else{
//             obj[str[i]]=1
//         }
//     }
//     return obj;
// }
//
// console.log(count("shoebox"))

function count(str){
    str= str.toLowerCase();
    var obj ={};
    for (var i=0; i<str.length; i++){
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]] :1;
        }

    return obj;
}
console.log(count("shoebox"))
