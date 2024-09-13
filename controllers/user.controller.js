const mongoose = require('mongoose');
const User = require('../model/user');
const multer=require('multer');

const get=async(req, res)=>{
    res.send("welcome book store api");
}
const getuser=async(req,res)=>{

    let data=await User.find();
    res.send(data);
}

const createuser=async(req,res)=>{
    console.log("req.body:", req.body);
    console.log("req.files:", req.file);
    let {title,author,category,publicationyear,price,quantity,description} = req.body;
    let profile;
    if(req.file){
        profile=req.file.path;
    }
    let user={
        title,
        author,
        category,
        publicationyear,
        price,
        quantity,
        description,
        profile,
    }
    let data=await User.create(user);
    res.send(data);
}

const updateuser=async(req,res)=>{
    let {id}=req.params;
    let data=await User.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
}

const deleteuser=async(req,res)=>{
    let {id}=req.params;
    let data=await User.findByIdAndDelete(id);
    res.send(data);
}


const storge=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})

const upload=multer({storage:storge});
module.exports={getuser,createuser,updateuser,deleteuser,upload,get}