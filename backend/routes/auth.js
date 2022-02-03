const User = require('../models/user');
const b = require('bcryptjs');
const route = require('express').Router();

route.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(401).json({ message: "Please Add All The Feilds" });
        } else {
            await b.hash(password, 8).then(async (p) => {
                const newUser = new User({
                    name,
                    email,
                    password: p,
                })
                await newUser.save().then((a) => {
                    console.log(a)
                    const token = jwt.sign({ _id: a._id },process.env.JWT_SECRET, { expiresIn: "1d" });
                    const { _id, name, email } = a;
                    res.status(201).json({ _id, name, email, token });
                })
            })
        }
    }
    catch (err) {
        res.status(422).json(err);
    }
});

route.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ error: "Please add Email and Password Both" })
        }
        await User.findOne({ email: email })
            .then(SavedUser => {
                if (!SavedUser) {
                    return res.status(401).json({ error: "Invalid Data" })
                }
                b.compare(password, SavedUser.password)
                    .then(doMatch => {
                        if (doMatch) {
                            const token = jwt.sign({ _id: SavedUser._id }, process.env.JWT_SECRET)
                            const { _id, name, email, profilePicture } = SavedUser;
                            console.log(_id, name, email)
                            return res.status(201).json({ token, _id, name, email, profilePicture });
                        } else {
                            return res.status(401).json({ error: 'Invalid Email or Password' })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    } catch (e) {
        console.log(e);
    }
});


module.exports = route;