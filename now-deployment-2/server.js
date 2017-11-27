const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const settings = require("./settings");
const Test = require("./models/test.js");

mongoose.connect(settings.db, () => {
    console.log(`Connected to ${settings.db}`);
});

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client", "build")));

app.use(bodyParser.json());

app.post("/test", (req, res) => {
    const test = new Test(req.body);
    test.save((err, postedTest) => {
        if (err) return err;
        return res.send(postedTest);
    });
});

app.get("/test", (req, res) => {
    Test.findOne((err, foundTest) => {
        if (err) return err;
        return res.send(foundTest);
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(settings.port, () => {
    console.log(`[+] Listening on port ${settings.port}`);
});
