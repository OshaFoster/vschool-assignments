const express = require( "express")
const hunterRoutes = express.Router();

let bounty =[

    {
        firstName:"Jedi",
        lastName:"Super",
        living:true,
        type:"Sith",
        _id:" 4dad3d76-b9ab-48b1-860b-dfffcee71cb5"
    }
]

hunterRoutes.get("/", (req, res)=>{

    res.send(bounty);
    console.log(bounty)
})

hunterRoutes.post("/", (req, res)=>{
    req.body._id=uuid();
    bounty.push(req.body);
    res.send(bounty[bounty.length -1])

    console.log(bounty)


})

hunterRoutes.delete("/:id", (req, res)=>{
    bounty = bounty.filter((bount)=>{
        return bount._id !==req.params.id
    })

    res.send({
        message: "Off the list"
    })
})

hunterRoutes.put("/:id", (req, res)=>{
    let putBounty= req.body
    bounty = bounty.map((bount)=>{
        if(bount._id === req.params.id){
            return putBounty= Object.assign(bount, putBounty);
        }else{
            return bount
        }
    })
    res.send(putBounty)
})
module.exports = hunterRoutes
