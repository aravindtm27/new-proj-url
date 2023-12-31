const mongoose = require("mongoose");
const shortid = require("short-id");


const shortUrlSchema = new mongoose.Schema({
    full:{
        type:String,
        required:true,
    },
    short:{
        type: String,
        required:true,
        default: shortid.generate,
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema);