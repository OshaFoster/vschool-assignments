

function stringifyUrl(endpoint, query){


let url = endpoint + "?";
for(let key in query){
    url+=`${key}=${query[key]}&`
}

return url.slice(0, -1)

}

console.log(stringifyUrl)



// Example:


let query = {
  color: "black",
  species: "howler"
}

for(let key in demo){
    console.log(key)
    console.log(demo[key])
}
