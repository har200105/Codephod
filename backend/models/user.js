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
    verified: {
        type: Boolean,
        default:false
    },
    isAdmin: {
        type: Boolean,
        default:false 
    },
    verifyEmailToken: String,
    forgetPasswordToken: String,
    forgetExpireToken:Date

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;