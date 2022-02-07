const mongoose = require('mongoose');
const qaSchema = mongoose.Schema({

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    caption: {
        type: String,
        required: true
    },

    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    // comments: [{
    //     commentedBy:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"User"
    //     },
    //     comment:{
    //         type:String,
    //         required:true
    //     }
    // }]


}, { timestamps: true });

const QA = mongoose.model('Qa', qaSchema);
module.exports = QA;