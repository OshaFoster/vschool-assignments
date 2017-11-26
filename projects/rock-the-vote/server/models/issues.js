const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({


    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    upvote:{
        required:true,
        default: 0,
        type: Number
    },
    downvote:{
        required:true,
        default: 0,
        type: Number
    }


})

module.exports = mongoose.model("issues", issueSchema);
