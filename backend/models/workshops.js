const mongoose = require('mongoose');
const questionSchema = mongoose.Schema({

    OrganizedBy:{
        type:String,
        required:true
    },

    OrganizedAt:{
        type:String,
        required:true
    },

    Duration:{
        type:String,
        required:true
    },

    OrganizedOn:{
        type:Date,
        required:true
    },

    details:{
        type:String,
        required:true
    },

    workShopLink:{
        type:String,
        required:true
    },


},{timestamps:true});

const Workshop = mongoose.model('Workshop',questionSchema);
module.exports =  Workshop;