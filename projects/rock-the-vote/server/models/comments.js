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
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }
})

module.exports = mongoose.model("Comments", commentsSchema);
