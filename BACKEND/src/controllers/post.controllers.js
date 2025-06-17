const ImgVideoUrl = require("../models/postUrl.models");


const handleGetPostsUrls= async(req,res)=>{
  try {
    console.log('user auth')
    const email=res.user.userEmail;
    console.log(email)
   
    const user= await ImgVideoUrl.find({email})

    // console.log(user) 
   
     res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message:'failed to save 56 details'})
    
  }}

module.exports ={handleGetPostsUrls}