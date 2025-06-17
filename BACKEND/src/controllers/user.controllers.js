//get user data 

const User = require("../models/user.models");

const handlGetUserDetails =async(req,res)=>{
  try {
    console.log('user auth')
    const email=res.user.userEmail;
    console.log(email)
   
    const user= await User.findOne({email})
    const userFullDetails= await UserDetails.findOne({email})

    console.log(user) 
   
     res.status(200).json([user,userFullDetails])
  } catch (error) {
    res.status(402).json({message:'failed to save 56 details'})
    
  }
  


}

module.exports={handlGetUserDetails}