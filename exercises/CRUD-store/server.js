const express = require("express");
const app = express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080

app.use(bodyParser.json());
mongoose.connect("mondodb://localhost/", (err)=>{
    if (err) throw err
})

app.use("/shoes", require("./routes/shoes"));

app.listen(port,()=>{
    console.log(`app is listening ${port}`)
})
