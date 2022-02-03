const route = require('express').Router();
const QA = require('../models/qa');
const middleware = require('../middleware/middleware');

route.post('/addQA', middleware, async (req, res) => {
    if (!caption) {
        res.status(401).json({ message: "Add Caption" });
    } else {

        const qa = QA({
            caption
        });

        await qa.save().then((s) => {
            res.status(201).json(s)
        })
    }
});

route.get('/getQA', async (req, res) => {
    try {
        await QA.find({}).sort("-createdAt").then((s) => {
            res.status(201).json(s)
        })
    } catch (e) {

    }
})

module.exports = route;