const express = require("express");
const shirtRoutes = express.Router();
const Shirt = require("../models/shirt")

shirtRoutes.get("/", (req, res)=>{
    //get shirts array from database
    Shirt.find((err, shirt)=>{
        if(err) return res.status(500).send(err)
        return res.send(shirt)
    })
})

shirtRoutes.post("/", (req, res)=>{
    const shirt = new Shirt(req.body);

    shirt.save((err, shirt)=>{
        if(err) return res.status(500).send(err)
        return res.send(shirt);
})



})

shirtRoutes.put("/:id", (req, res)=>{
    Shirt.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,shirt)=>{

    })
})
// shirtRoutes
// shirtRoutes



module.exports = shirtRoutes
