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

    OrganizedOn:{
       type:String,
        required:true
    },

    workshopTitle: {
        type:String,
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