const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title:{type:String},
    uid:{type:String},
    description:{type:String},
    genre:{type:String},
    author:{type:String},
    availabilityStatus:{type:String},
    lastBorrower:{type:String},
    borrowingAvailabilityStatus:{type:String}
},{
    versionKey:false,
    timestamps:true
});

const Book = mongoose.model("book",bookSchema);
module.exports=Book;