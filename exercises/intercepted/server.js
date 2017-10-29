const express =require("express")
const BodyParser = require ("body-parser")
//const uuid = require ("uuid/v4")
const app = express()
const morgan= require ("morgan")
const utils = require("./utils")
const port = process.env.PORT || 8004


app.use(BodyParser.json());
app.use(morgan("dev"))

app.use(utils.waveHello);
app.get("/", (req, res)=>{
    res.send("Waved!")
})

app.listen(port, ()=>{
    console.log("server is listening 8004")

})
