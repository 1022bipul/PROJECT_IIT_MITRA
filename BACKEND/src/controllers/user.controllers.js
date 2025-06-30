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
    const userId =req.userId

    
  } catch (error) {
    
  }

}

module.exports={handlGetUserDetails,handleGetAllUserForSuggestion ,handleGetOneUserProfile}