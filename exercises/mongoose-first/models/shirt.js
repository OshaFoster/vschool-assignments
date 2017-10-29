const  mongoose =require("mongoose");
const Schema = mongoose.Schema;


const shirtSchema = new Schema({
    charecter:{
        type: String,
        required: true,
        lowercase: true  //converts to lowercase
    },

    price: Number,
    colorOptions:[String],
    sizeOptions:[String],
    sleeveless: {
        type: Boolean,
        default: true
    },
    fabric :{
        waterproof: Boolean,
        kind: String,
        glowInDark:{
            type: Boolean,
            default: true
        }
    }

})

module.exports = mongoose.model("Shirt", shirtSchema); //creates blueprint from draft
