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

    likes: [{
       type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    comments: [{
       user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    commentedText: {
        type: String,
    },
    replies: [{
      repliedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      commentedText: {
        type: String
      },
    }]
  }],
    image: {
        type: String,
    }


}, { timestamps: true });

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;