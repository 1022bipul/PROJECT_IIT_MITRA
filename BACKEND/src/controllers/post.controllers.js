
const ImgVideoUrl = require("../models/postUrl.models");

//get post urls for profile for particular user


const handleGetPostsUrls= async(req,res)=>{
  try {
    // console.log('user auth')
    const email=res.user.userEmail;
    // console.log(email)
   
    const user= await ImgVideoUrl.find({email})

    // console.log(user) 
   
     res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message:'failed to get urls details for profile'})
    
  }}


  const handleGetFeedUrls=async(req,res)=>{
    try{

  const posts=await ImgVideoUrl.find()
  .populate('user').sort({ createdAt: -1 }); 

     res.status(200).json(posts)


    }catch(error)
    {    
      res.status(500).json({message:'failed to get all urls details for feed'})

    }
  }

module.exports ={handleGetPostsUrls ,handleGetFeedUrls}