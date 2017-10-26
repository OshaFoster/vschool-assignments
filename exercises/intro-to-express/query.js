let database=[
    {a: 1,b:2, c:3},
    {b: 1,b:2, c:3},
    {a: 2,b:2, c:9}
]


let query ={
    a:1,
    b:2
}

function filterDatabase(query, database){
    return database.filter((doc)=>{
        for(let key in query){
            if(doc[key]!== query[key]){
                return false
            }
        }
        return true
    })
}
