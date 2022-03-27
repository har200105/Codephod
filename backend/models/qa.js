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
}, { timestamps: true });



const QA = mongoose.model('Qa', qaSchema);
module.exports = QA;