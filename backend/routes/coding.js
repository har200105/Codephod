const Questions = require('../models/coding');
const route = require('express').Router();
const middleware = require('../middleware/middleware');


route.post('/addQuestion',middleware,async (req, res) => {

    const { Question, Companies, QuestionLink } = req.body;
    console.log(req.body);

    if (!QuestionLink || !Companies || !Question) {

        return res.status(401).json({ message: "Add All The Feilds" });

    } else {

        const ques = Questions({
            QuestionLink,
            Question,
            Companies,
            addedBy:req.user._id
        });
        await ques.save().then((s) => {
            console.log(s)
            res.status(201).json({isAdded:true})
        })
        
    }
});

route.get('/getQuestion', async (req, res) => {
    await Questions.find({})
    .populate("addedBy","name email _id")
    .then((s) => {
        console.log(s)
        res.status(201).json(s)
    })
});


module.exports = route;