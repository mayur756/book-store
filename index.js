const express = require('express');
const app = express();
const path =require('path');
const cors = require('cors');
const dbconnect = require('./config/db');
const userRouter = require('./routes/user.route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",userRouter);

// image
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(__dirname );

app.get('/',(req, res)=>{
    res.send("Welcome to the api");
})

app.listen(8090,()=>{
    console.log("listening on port 8090");
    dbconnect();
})