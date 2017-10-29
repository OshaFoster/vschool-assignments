
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080

mongoose.connect("mongodb://localhost/shirts", (err)=>{
    if (err) throw err
})
app.use(bodyParser.json());



app.use("/shirts", require("./routes/shirts"))

app.listen(port,()=>{
    console.log(`app is listening ${port}`)
})


//server expresss app = experss()
//port
//mongoose require

//mongoose.connect("mongodb://localhost/shoes", (err) =>{
// if (err){
//     throw err
//console.log("connected")
// }
// })
