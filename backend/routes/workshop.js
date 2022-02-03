const route = require('express').Router();
const Workshop = require('../models/workshops');
const middleware = require('../middleware/middleware');

route.post('/addWorkshop', middleware, async (req, res) => {
    try {

    } catch (e) {
        const { image, OrganizedAt, OrganizedBy, OrganizedOn, details } = req.body;
        if (!OrganizedBy || !OrganizedAt || !Duration || !OrganizedOn || !details || !image) {
            res.status(401).json({ message: "Add All feilds" });
        } else {

            const qa = Workshop({
                image,
                OrganizedAt,
                OrganizedBy,
                OrganizedOn,
                details
            });

            await qa.save().then((s) => {
                res.status(201).json(s)
            })
        }
    }
});

route.get('/getWorkshops', async (req, res) => {
    try {
        await Workshop.find({}).sort("-createdAt").then((s) => {
            res.status(201).json(s)
        })
    } catch (e) {

    }
})

module.exports = route;