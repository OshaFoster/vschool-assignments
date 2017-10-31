const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 8088

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/issues", (err)=>{
    if(err)throw err;
    console.log("connected mongodb")
})

app.use("/issues", require("./routes/issues"));
app.use("/comments", require("./routes/comments"));
app.listen(port,()=>{
    console.log(`app is listening${port}`)
})
