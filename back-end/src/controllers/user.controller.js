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

router.get("/:id",async(req,res)=>{
    console.log(req.params._id);
    let users = await User.findById(req.params._id).lean().exec();
    res.status(200).send(users);
});

router.post("/login",async(req,res)=>{
  
   
    let users = await User.find({currentRoles:{$in:[req.body.email]}}).lean().exec();
    console.log(users + "--"+ req.body.email); 
    var result =users.filter(el=>{ return (el.email.trim()==req.body.email)});
    res.status(200).send(result);
});

router.patch("/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(user)
})

router.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    let users = await User.findByIdAndDelete(req.params.id).lean().exec();
    res.status(202).send(users);
});
module.exports= router;
