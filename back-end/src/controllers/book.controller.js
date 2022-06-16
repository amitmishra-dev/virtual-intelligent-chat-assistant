const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

/**
 * users get all api- to fetch all books
 */
router.get("/",async(req,res)=>{
    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});

/**
 * users can create post api- to create books 
 */
router.post("/create",async(req,res)=>{
    let createBook=await Book.create(req.body);
    res.status(201).send(createBook);
})


/**
 *  get book by their id  api- to fetch  books by their id
 */
router.patch("/:id",async(req,res)=>{
    const bookUpdated = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(bookUpdated)
})

/**
 * update book by their id api- to modify data in books by their id
 */
router.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    let books = await Book.deleteOne({currentBook:{$in:[req.params.id]}}).lean().exec();
    res.status(202).send(books);
});

/**
 * get book by their id api - to fetch a data by their id 
 */
router.get("/:id",async(req,res)=>{
    console.log(req.params.id);
    let books = await Book.findById(req.params.id).lean().exec();
    res.status(200).send(books);
});

module.exports=router;