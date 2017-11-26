const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
//const path = require("path");

const port = process.env.PORT || 8088
app.use(express.static("build"))
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(path.join(_dirname, "src")))
app.use("/issues", require("./routes/issues"));
app.use("/comments", require("./routes/comments"));


mongoose.connect("mongodb://localhost/issues", (err)=>{
    if(err)throw err;
    console.log("connected mongodb")
})


app.listen(port,()=>{
    console.log(`app is listening${port}`)
})
