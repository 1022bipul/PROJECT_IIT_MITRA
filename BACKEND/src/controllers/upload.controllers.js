const ImgVideoUrl = require("../models/postUrl.models");
const path =require('path')
// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET
    })

    
const handleCreatePostImg= async(req, res)=> {
    console.log(req.file) 
    const email=res.user.userEmail;
    console.log("email:" ,email) 

    const {discription}=req.body
    console.log(discription) 

    const filePath=req.file.path
    const cloudinaryRess=await cloudinary.uploader.upload(filePath,{folder:"iitmitraGallery"})
    const url=cloudinaryRess.url
    const uploadInfo=new ImgVideoUrl({email,discription,url})
    const uploadRes=await uploadInfo.save();
    console.log("clodinary res",cloudinaryRess)
    res.status(200)
    .json({discription:discription,url:url})
}

module.exports={handleCreatePostImg}