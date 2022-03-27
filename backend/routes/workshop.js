const route = require('express').Router();
const Workshop = require('../models/workshops');
const middleware = require('../middleware/middleware');

route.post('/addWorkshop', middleware, async (req, res) => {
    try {
        console.log(req.body);
        const { OrganizedAt, OrganizedBy, OrganizedOn, details,workShopLink,workshopTitle } = req.body;
        if (!OrganizedBy || !OrganizedAt || !workShopLink || !OrganizedOn || !details) {
            res.status(401).json({ message: "Add All feilds" });
        } else {

            const workshop = Workshop({
                OrganizedAt,
                OrganizedBy,
                OrganizedOn,
                details,
                workshopTitle,
                workShopLink
            });

            await workshop.save().then((s) => {
                res.status(201).json(s)
            })
        }
    } catch (e) {
        res.status(500).json(e);
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