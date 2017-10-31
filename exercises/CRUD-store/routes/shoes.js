const express = require("express");
const shoeRoutes = express.Router(); //router?
const Shoes = require("../models/shoe")

shoeRoutes.get("/", (req, res)=>{
    console.log("inside shoe route")
    Shoes.find((err, shoes)=>{            //query object from  add query to end of address
        //if (err) res.status(500).send(err)
        return res.send(shoes)
    });
});

shoeRoutes.post("/", (req, res)=>{
    let newShoe = new Shoes(req.body);
    newShoe.save((err, savedShoe)=>{
        if (err) return res.status(500).send(err)
        return res.send(savedShoe);
    })
})

// shoeRoutes.delete("/:id", (req, res)=>{
//     Shoes.findByIdAndRemove(req.params.id, (err, deletedShoe)=>{
//         if (err) return res.status(500).send(err)
//         return res.status(200).send(response)
//     })
// })
//
// shoeRoutes.put("/:id", (req, res)=>{
//     Shoes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, shoe)=> {
//         if (err) return res.status(500).send(err)
//         return res.status(200).send(shoe)
//     })
// })
//
// shoeRoutes.get("/:id", req, res)=>{
//     Shoes.findById(req.params.id, (err, foundShoe)=>{
//         if(err) return res.status(500).send(err)
//         return res.send(foundShoe)
//     })
// }

module.exports = shoeRoutes
