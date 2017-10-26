const express =require ('express');
const app = express()
const uuid = require ("uuid/v4")
const bodyParser = require ('body-parser')

app.use (bodyParser.json())

app.use("/bounty", require("./routes/hunterRoutes"))

app.listen(8001, ()=>{
    console.log("server is running")
})
