const express = require("express");
const app = express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
//const morgan = require('morgan');
//const cors = require ("cors");          cors front end on differnt server
const port = process.env.PORT || 8080

//app.use(morgan("dev"));
//app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/shoes", (err)=>{
    if (err) throw err;
    console.log("connected mongoDB")
})


app.use("/shoes", require("./routes/shoes"));

app.listen(port,()=>{
    console.log(`app is listening ${port}`)
})
