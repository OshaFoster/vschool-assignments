const express = require ("express")
const app = express()
const uuid = require("uuid/v4");
const bodyParser = require("body-parser")


app.use(bodyParser.json())

let hunters =[

    {name: "jedi1", weapon: "sword", kills:6}
    {name: "jedi2", weapon: "gun", kills:8}
    {name: "jedi3", weapon: "big gun", kills:9}
]


app.get("/hunter", (req, res)=>{
    //based on the response based on the query Object
    // let hunterQ = hunters.filter((hunter)=>{
    //     for(let key in req.query){
    //         if(String(bounty[key]!==req.query[]){
    //             return false;
    //         })
    //     }
    //})
    res.send(hunters)

})
app.listen(8002, ()=>{
    console.log("server is running")
})
