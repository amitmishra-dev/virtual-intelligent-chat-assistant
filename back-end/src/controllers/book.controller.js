const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

router.get("/",async(req,res)=>{
    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});
router.get("/getById/:bookId",async(req,res)=>{
    console.log(req.params.bookId);
    let books = await Book.findById(req.params.bookId).exec();
    res.status(200).send(books);
});

router.post("/create",async(req,res)=>{
    let createBook=await Book.create(req.body);
    res.status(201).send(createBook);
})

router.patch("/:id/update",async(req,res)=>{
    const bookUpdated = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(bookUpdated)
})

router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params.id);
    let books = await Book.deleteOne({currentBook:{$in:[req.params.id]}}).lean().exec();
    res.status(202).send(books);
});

module.exports=router;