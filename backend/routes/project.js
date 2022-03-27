const route = require('express').Router();
const Project = require('../models/project');
const middleware = require('../middleware/middleware');

route.post('/addProjectPost', middleware, async (req, res) => {
    const {PostType,caption,image} = req.body;
    if(!PostType || !caption){
        return res.status(401).json({message:"Add All The Feilds"});
    }else {

        const project = Project({
            PostType,
            caption,
            image,
            postedBy:req.user._id
        });

        await project.save().then((s) => {
            console.log(s);
            res.status(201).json(s)
        })
    }
});

route.get('/getProjectPosts', async (req, res) => {
    try {
        await Project.find({})
          .populate("postedBy", "name email")
          .populate("comments.user", "name email")
          .populate("comments.replies.repliedBy" ,"name email")
            .sort("-createdAt")
            .then((s) => {
                res.status(201).json(s)
            })
    } catch (e) {

    }
});


route.delete('/deleteProject/:id', middleware, async (req, res) => {
    await Project.findOneAndDelete(req.params.id).then((s) => {
        res.status(201).json({
          success: true,
          message:"Project Post Deleted Successfully"
        })
    })
});


route.put('/likeProject/:id', middleware, async (req, res) => {
    await Project.findByIdAndUpdate(req.params.id, {
        $push: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});

route.put('/dislikeProject/:id', middleware, async (req, res) => {
    await Project.findByIdAndUpdate(req.params.id, {
        $pull: {
            likes:req.user._id
        }
    }).then((s) => {
        res.status(201).json({
            success:true
        })
    })
});

route.put('/project/comment/:id', middleware, async (req, res) => {
  console.log(req.body);
    try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
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


route.put('/project/comment/reply/:id', middleware, async (req, res) => {
  try {  
    const project = await Project.findById(req.params.id);
    
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