const express = require('express');
const User=require('../models/user.model');

const router = express.Router();

router.get('/',async (req,res)=>{
    const users = await User.find({});
    res.send(users);
})

router.post('/create',async(req,res)=>{
    console.log("reuest came",req.body);
    let createdUser = await User.create(req.body);
    res.status(201).send(createdUser);
})

router.get("/getByRole/:role",async(req,res)=>{
    console.log(req.params.role);
    let users = await User.find({currentRoles:{$in:[req.params.role]}}).lean().exec();
    res.status(200).send(users);
});

router.patch("/:id/update",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(user)
})

router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params.id);
    let users = await User.deleteOne({currentUser:{$in:[req.params.id]}}).lean().exec();
    res.status(202).send(users);
});
module.exports= router;
