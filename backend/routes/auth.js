const User = require('../models/user');
const b = require('bcryptjs');
const jwt = require('jsonwebtoken');
const route = require('express').Router();
const crypto = require('crypto');
const { sendVerificationEmail, sendResetEmail } = require('../mailServices');

route.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(401).json({ message: "Please Add All The Feilds" });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: "User Already Exists"
            });
        }
        else {
            await b.hash(password, 8).then(async (p) => {
                
                const token = crypto.randomBytes(20).toString("hex");
                sendVerificationEmail(email, token);
                const newUser = new User({
                    name,
                    email,
                    password: p,
                    verifyEmailToken:token
                });
                await newUser.save().then((a) => {
                    res.status(201).json({
                        success: true,
                        message: "Signup Successfull,Please Verify your Email."
                    });
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
    console.log(req.body);
    if (!email || !password) {
        return res.status(422).json({success:false,message: "Please add email and password both" })
    }
        await User.findOne({ email })
            .then((SavedUser) => {
                if (!SavedUser) {
                    return res.status(201).json({ success: false, error: 'Invalid email or password' });
                }
                if (SavedUser.verified === false) {
                    return res.status(201).json({ success: false, error: 'Please Verify your Email' });
                }
                b.compare(password, SavedUser.password)
                    .then((doMatch) => {
                        if (doMatch) {
                            const token = jwt.sign({ _id: SavedUser._id }, process.env.JWT_SECRET);
                            console.log(token);
                            return res.status(201).json({ success: true, token });
                        } else {
                            return res.status(201).send({ success: false, error: 'Invalid email or password' })
                        }
                    })
                    .catch(err => {
                         res.status(422).json(err);
                    });
            });
    } catch (e) {
        res.status(422).json(e);
    }
});

route.post('/forgotPassword', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const t = crypto.randomBytes(20).toString("hex");
            user.resetPasswordToken = t;
            user.resetPasswordExpire = Date.now() + 10 * 10 * 600;
            await user.save();
            const passwordLink = `http://localhost:3000/resetPassword/${t}`;
            sendResetEmail(passwordLink,email);
            res.status(201).json({
                success: true,
                message: "Reset Password Link Sent"
            });
        } else {
             res.status(201).json({
                success: false,
                message: "Invalid Email"
            });
        }
    } catch (e) {
        res.status(401).json(e)
    }
});


route.post('/resetPassword/:token', async (req, res) => {
    const token = req.params.token;
    console.log(req.body);
    const { password } = req.body;
    console.log(req.body)
    const t = await User.findOne({
        $and: [{
            resetPasswordToken: token,
        }]
    });
    if (t) {
        const hashed = await b.hash(password, 8);
        await User.findOneAndUpdate({ email: t.email }, {
            password: hashed,
            resetPasswordToken:null,
            resetPasswordExpire: null
        });
        res.status(201).json({
            success:true,
            message: "Password Changed Successfully"
        })
    } else {
        res.status(201).json({
            success:false,
        })
    }
});


route.post('/verify', async (req, res) => {
    const token = req.body.token;
    const find = await User.findOne({ verifyEmailToken: token });
    if (find) {
        find.verified = true;
        find.verifyEmailToken = null;
        await find.save();
        return res.status(201).json({success:true, message: "User Verified Successfully" });
    }
    return res.status(201).json({success:false, message: "Invalid or Expired Token" });
});



module.exports = route;