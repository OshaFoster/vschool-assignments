const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoesSchema = new Schema({

    style:{
        boot: Boolean,
        shoe: Boolean,
        sandle: Boolean
    },

    price: Number,
    colorOptions:[String],
    sizeOptions:[{
        type:Number,
        enum: [7,8,9,10,11,12]
    }]

})

module.exports = mongoose.model("Shoes", shoesSchema);
