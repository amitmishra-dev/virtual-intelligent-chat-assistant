const mongoose = require('mongoose');
const env=require('dotenv').config();


const connect = ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster-vica.aqex4pn.mongodb.net/vica?retryWrites=true&w=majority`)
}

module.exports=connect;