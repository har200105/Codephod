const Questions = require('../models/coding');
const route = require('express').Router();


route.post('/addQuestion', async (req, res) => {

    const { Question, Companies, QuestionLink } = req.body;

    if (!QuestionLink || !Companies || !Question) {
        return res.status(401).json({ message: "Add All The Feilds" });
    } else {
        const ques = Questions({
            QuestionLink,
            Question,
            Companies
        });
        await ques.save().then((s) => {
            res.status(201).json(s)
        })
    }
});

route.get('/getQuestion', async (req, res) => {
    await Questions.find({}).then((s) => {
        res.status(201).json(s)
    })
});


module.exports = route;