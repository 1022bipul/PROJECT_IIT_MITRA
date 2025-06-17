const UserDetails = require("../models/userDetails.models");
const express= require('express');
const User = require('../models/user.models');




const router=express.Router()

//edit profile data
router.post('/details',async(req,res)=>{
  try {

    const userDetails=req.body;
    const details=new UserDetails(userDetails)
    await details.save();
    res.status(200).json({message:'your details are saved'})
  } catch (error) {
    res.status(401).json({message:'failed to save details'})
  }

})





module.exports = router