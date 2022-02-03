const middleware = require('../middleware/middleware');
const User = require('../models/user');
const route = require('express').Router();

route.get('/getUser/:id',async(req,res)=>{
    await User.findById(req.params.id).then((s)=>{
        res.status(201).json(s)
    })
});

route.put('/followUser/:id',middleware,async(req,res)=>{
});


route.put('/unFollowUser/:id',middleware,async(req,res)=>{
});


route.put('/editProfile',middleware,async(req,res)=>{

});


module.exports =  route;