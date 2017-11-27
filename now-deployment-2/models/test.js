const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const testSchema = new Schema({
    test: {
        type: String,
        default: "Test"
    }
});

module.exports = mongoose.model("Test", testSchema);
