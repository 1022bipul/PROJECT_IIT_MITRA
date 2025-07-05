const ImgVideoUrl = require("../models/postUrl.models");
const User= require("../models/user.models");
const UserDetails=require('../models/userDetails.models')
//get user data 

const handlGetUserDetails =async(req,res)=>{
  try {
    console.log('user auth')
    const email=res.user.userEmail;
    console.log(email)
   
    const user=await User.findOne({email})
    console.log(user) 

    const userFullDetails= await UserDetails.findOne({email})
    console.log(userFullDetails) 

   
     res.status(200).json([user,userFullDetails])
  } catch (error) {
    res.status(500).json({message:'failed to save details'},error)
    
  }
  


}
const handleGetAllUserForSuggestion=async(req,res)=>{
 try {
    const email=res.user.userEmail;

   const allUser=await UserDetails.find()
   const filterUser=allUser.filter(item => item.email!=email)
   res.status(200).json(filterUser)
 } catch (error) {
   console.log(error)
 }
}

//finding one user
const handleGetOneUserProfile=async(req,res)=>{
  try {
   


    const userId =req.params.id;
   console.log("user ka id",userId)
   const user =await UserDetails.findById(userId)
    //  console.log(user)

     const email=user.email;
   const allPosts=await ImgVideoUrl.find({email})

    res.status(200).json({user,allPosts})
  } catch (error) {
   console.log(error) 
  }

}
//finding user searching 

const handleGetSearchreauslt=async(req,res)=>{
    const value=req.params.value
    const User=await UserDetails.find()
    const filterUser=User.filter((user)=>(user.name?.toLowerCase().includes(value)||user.email?.toLowerCase().includes(value)))

    res.status(200).json(filterUser)
}

module.exports={handlGetUserDetails,handleGetAllUserForSuggestion ,handleGetOneUserProfile,handleGetSearchreauslt}