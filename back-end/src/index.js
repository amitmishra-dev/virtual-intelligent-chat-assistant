const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{   
   console.log(req.headers);
    next()
})
const userController = require('./controllers/user.controller');
const bookController = require('./controllers/book.controller');
app.use("/users",userController);
app.use("/books",bookController);

module.exports=app;