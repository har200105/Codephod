const middleware = require('../middleware/middleware');
const User = require('../models/user');
const route = require('express').Router();
const QA = require('../models/qa');
const Projects = require('../models/project');

route.get('/user', async (req, res) => {
    await User.findById(req.user._id).then((s) => {
        res.status(201).json(s)
    })
});


route.get('/getMyPosts', middleware, async (req, res) => {
    try {

        const projects = await Projects.find({ postedBy: req.user._id })
             .populate("postedBy", "name email")
          .populate("comments.user", "name email")
          .populate("comments.replies.repliedBy" ,"name email")
        // const qas = await QA.find({ postedBy: req.user._id })
        //     .populate("postedBy", "name email")
        //     .sort("-createdAt");;
        // console.log(projects.concat(...qas))
        // res.status(201).json(projects.concat(...qas));
        res.status(201).json(projects);
    } catch (e) {
        res.status(500).json(e);
    }
});

route.get('/getMyQA', middleware, async (req, res) => {
    try {
        const qas = await QA.find({ postedBy: req.user._id })
            .populate("postedBy", "name email")
          .populate("comments.user", "name email")
          .populate("comments.replies.repliedBy" ,"name email")
        res.status(201).json(qas);
    } catch (e) {
        res.status(500).json(e);
    }
});




route.get('/getUserProjects/:id', middleware, async (req, res) => {
    try {
        Projects.find({ postedBy: req.params.id })
        .populate("postedBy","name email")
        .sort("-createdAt")
        .then((s) => {
            res.status(201).json(s)
        })
    } catch (e) {
        console.log(e);
    }
});

// router.get("/timeline/all", async (req, res) => {
//     try {
//       const currentUser = await User.findById(req.body.userId);
//       const userPosts = await Post.find({ userId: currentUser._id });
//       const friendPosts = await Promise.all(
//         currentUser.followings.map((friendId) => {
//           return Post.find({ userId: friendId });
//         })
//       );
//       res.json(userPosts.concat(...friendPosts))
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



module.exports = route;