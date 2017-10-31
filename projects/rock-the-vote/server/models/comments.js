const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({

    poster:{
        type: String,
        required: true
    },

    comment: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("comments", commentsSchema);
