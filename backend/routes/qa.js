const route = require('express').Router();
const QA = require('../models/qa');
const middleware = require('../middleware/middleware');

route.post('/addQA', middleware, async (req, res) => {
    
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

route.get('/getQA', async (req, res) => {
    try {
        await QA.find({})
        .populate("postedBy","name email")
        .sort("-createdAt")
        
        .then((s) => {
            console.log(s)
            res.status(201).json(s)
        })
    } catch (e) {

    }
})

module.exports = route;