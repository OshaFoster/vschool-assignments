const express =require ('express');
const app = express()
const uuid = require ("uuid/v4")
const bodyParser = require ('body-parser')
const morgan = require("morgan")
const port = process.env.PORT || 8000
const utils = require("./utils")

app.use(bodyParser.json())
app.use(morgan("dev"))

app.use(utils.explosion)

app.get("/", (reg, res)=>{
    res.send("success")
})

app.listen(port, ()=>{
    console.log(`server is listen ${port}`)

})
