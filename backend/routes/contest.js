const Contest = require('../models/contests');
const router = require('express').Router();

router.post('/addCoding', async (req, res) => {
    const newcontest = Contest(req.body);
    await newcontest.save();
    res.status(201).json({
        message: "Contest Saved"
    });
});

router.get('/getCoding', async (req, res) => {
    const date = new Date.now;
    console.log(date);
    await Contest.find({ contestAt: { $gt: { date } } }).then((s) => {
        res.status(201).json(s);
    });
});


module.exports = router;