const express = require("express")
const router = express.Router() //tacoRoutes


//tacos rout//

//router.get
let tacos = []

router.get("/", (req, res)=>{
    res.send("Get Tacos")
})

router.delete("/", (req, res)=>{
    res.send("delete Tacos")
})


//module.exports= router //tacoRoutes
