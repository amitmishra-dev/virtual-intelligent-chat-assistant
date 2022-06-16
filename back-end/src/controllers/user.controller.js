const express = require('express');
const User=require('../models/user.model');

const router = express.Router();
/**
 * users get all api- to fetch all users 
 */
router.get('/',async (req,res)=>{
    const users = await User.find({});
    res.send(users);
})

/**
 * users can create post api- to create users 
 */
router.post('/create',async(req,res)=>{
    console.log("reuest came",req.body);
    let createdUser = await User.create(req.body);
    res.status(201).send(createdUser);
})

/**
 *  get user by their id  api- to fetch  user by their id
 */
router.get("/:id",async(req,res)=>{
    console.log(req.params._id);
    let users = await User.findById(req.params._id).lean().exec();
    res.status(200).send(users);
});

/**
 * users can login  api- to login  based on role
 */
router.post("/login",async(req,res)=>{
   let users = await User.find({currentRoles:{$in:[req.body.email]}}).lean().exec();
    console.log(users + "--"+ req.body.email); 
    var result =users.filter(el=>{ return (el.email==req.body.email)});
    res.status(200).send(result);
});


/**
 * update user by their id api- to modify data in users by their id
 */
router.patch("/:id",async(req,res)=>{
    console.log(req.params.id,+ "id" + "---"+ req.body.id + "user");
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
   // console.log(user, "user")
    return res.status(200).send(user)
})

/**
 * delete user by their id api - to delete a data by their id 
 */
router.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    let users = await User.findByIdAndDelete(req.params.id).lean().exec();
    res.status(202).send(users);
});
module.exports= router;
