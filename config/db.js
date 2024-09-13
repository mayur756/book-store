const mongoose = require('mongoose');

const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/books");
    console.log("Connected to Mongo DB server successfully");
    
}

module.exports=dbconnect;