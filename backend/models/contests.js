const mongoose = require('mongoose');


const contestSchema = mongoose.Schema({
    contestName: {
        type: String,
        required: true
    },
    contestAt: {
        type: Date,
        required: true
    },
    contestTiming: {
        type: String,
        required: true
    },
    contestDuration: {
        type: String,
        required: true
    },
    ratedFor: {
        type: String,
    },
}, { timestamps: true });



const Contests = mongoose.model("Contests", contestSchema);
module.exports = Contests;