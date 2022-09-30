const mongoose=require('mongoose');

const dataSchema= new mongoose.Schema({

    "name":{
        type:String,
        required:true
    },
    "number":{
        type:Number,
        required:true
    },
    "token":{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("dataPort",dataSchema)