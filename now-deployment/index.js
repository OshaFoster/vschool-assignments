const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose")

const settings = require("./settings")
const app = express();

app.use(bodyParser.json())

app.listen(settings.port, ()=>{
    console.log("Listening 8088")
})
