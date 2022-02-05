const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({

    PostType: {
        type: String,
        enum: ["Share", "Proposal"]
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    caption: {
        type: String,
        required: true
    },

    likes:[{

    }],

    comments: [{

    }],

    image: {
        type: String,
    }


}, { timestamps: true });

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;