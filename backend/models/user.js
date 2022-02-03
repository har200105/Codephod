const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ""
    }],

    avatar: {
        type: String,
        required: true
    },

    qas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Qa"
    }],

    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projects"
    }],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    followings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }]

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;