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
            image
        });

        await project.save().then((s) => {
            console.log(s);
            res.status(201).json(s)
        })

    }
    
});

route.get('/getProjectPosts', async (req, res) => {
    try {
        await Project.find({}).sort("-createdAt").then((s) => {
            res.status(201).json(s)
        })
    } catch (e) {

    }
})

module.exports = route;