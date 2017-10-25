const express =require ('express');
const app = express()
const uuid = require ("uuid/v4")
const bodyParser = require ('body-parser')

app.use (bodyParser.json())
const bounty =[

    {
        firstName:"Jedi",
        lastName:"Super",
        living:true,
        type:"Sith",
        _id:" 4dad3d76-b9ab-48b1-860b-dfffcee71cb5"
    }
]

app.get("/bounty", (req, res)=>{

    res.send(bounty);
    console.log(bounty)
})

app.post("/bounty", (req, res)=>{
    req.body._id=uuid();
    bounty.push(req.body);
    res.send(bounty[bounty.length -1])

    console.log(bounty)


})

app.listen(8001, ()=>{
    console.log("server is running")
})
