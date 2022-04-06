const route = require('express').Router();
const QA = require('../models/qa');
const middleware = require('../middleware/middleware');

route.post('/addQA', middleware, async (req, res) => {
  console.log(req.body)
    const {ques} = req.body;
    if (!ques) {
        res.status(401).json({ message: "Add Caption" });
    } else {
        const qa = QA({
            caption:ques,
            postedBy:req.user._id
        });
        await qa.save().then((s) => {
            res.status(201).json(s)
        })
    }
});

route.put('/likeQA/:id', middleware, async (req, res) => {
    await QA.findByIdAndUpdate(req.params.id, {
        $push: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});

route.put('/dislikeQA/:id', middleware, async (req, res) => {
    await QA.findByIdAndUpdate(req.params.id, {
        $pull: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});



route.get('/getQA', async (req, res) => {
    try {
        await QA.find({})
            .populate("postedBy", "name email")
            .sort({ "likes": -1 })
            .then((s) => {
                console.log(s)
                res.status(201).json(s)
            })
    } catch (e) {
    }
});


route.put('/likeQA/:id', middleware, async (req, res) => {
    await QA.findByIdAndUpdate(req.params.id, {
        $push: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});

route.put('/dislikeQA/:id', middleware, async (req, res) => {
    await QA.findByIdAndUpdate(req.params.id, {
        $pull: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});



route.delete('/deleteQA/:id', middleware, async (req, res) => {
    await QA.findOneAndDelete(req.params.id).then((s) => {
        res.status(201).json({
          success: true,
          message:"QA Deleted Successfully"
        })
    })
});


route.put('/qa/comment/:id', middleware, async (req, res) => {
  console.log(req.body);
    try {
    const project = await QA.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "QA not found",
      });
    }
      project.comments.push({
        user: req.user._id,
        commentedText: req.body.comment,
      });
      await project.save();
      return res.status(200).json({
        success: true,
        message: "Comment Added",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


route.put('/qa/comment/reply/:id', middleware, async (req, res) => {
  try {  
    const project = await QA.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (req.body.commentId === undefined) {
        return res.status(400).json({
          success: false,
          message: "Comment Id is Required",
        });
    }

    const obj = {
      repliedBy: req.user._id.toString(),
      commentedText: req.body.comment.toString()
    };
        project.comments.forEach((item, index) => {
          if (item._id.toString() === req.body.commentId.toString()) {
            item.replies.push(obj);
        }
      });
    
    await project.save();
      return res.status(201).json({
          success: true,
          message: "Reply Added",
      });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



module.exports = route;