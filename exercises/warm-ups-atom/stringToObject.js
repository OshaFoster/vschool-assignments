
function stringToObject(url){
    let query = {};
     url = url.slice(url.indexOf("?") +1).split(/[=&]/);
    //use regex to split ito array
    if (url.length < 2) return {};
    for (let i=0;i<url.length; i+=2){
        query[url[i]] = url[i+1]
    }
//console.log(url)
    return query



}
console.log(stringToObject("http://localhost:8080/monkeys?color=black&species=howler"));

//slice out endpoint-
//
//




//function stringifyUrl(endpoint, query){
//
//
// let url = endpoint + "?";
// for(let key in query){
//     url+=`${key}=${query[key]}&`
// }
//
// return url.slice(0, -1)
//
// }
//
// console.log(stringifyUrl)
//
//
//
// // Example:
//
//
// let query = {
//   color: "black",
//   species: "howler"
// }
//
// for(let key in demo){
//     console.log(key)
//     console.log(demo[key])
// }
//
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);
//
// //returns "http://localhost:8080/monkeys?color=black&species=howler"
