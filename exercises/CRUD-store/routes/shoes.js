const express = require("express");
const shoeRoutes = express();
const Shoes = require("../models/shoe")

shoeRoutes.get("/", (req, res)=>{
    Shoes.find((err, shoe)=>{
        if (err) res.status(500).send(err)
        return res.send(shoe)
    })
})

shoeRoutes.post("/", (req, res)=>{
    const shoe = new Shoes(req.body);
    shoe.save((err, shoe)=>{
        if (err) return res.status(500).send(err)
        return res.send(shoe);
    })
})

shoeRoutes.delete("/:id", (req, res)=>{
    Shoes.findByIdAndRemove(req.params.id, (err, shoe)=>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(response)
    })
})

shoeRoutes.put("/:id", (req, res)=>{
    Shoes.findById(req.params.id, (err, shoe)=> {
        if (err) return res.status(500).send(err)
        return res.status(200).send(shoe)
    })
})

module.exports = shoeRoutes
