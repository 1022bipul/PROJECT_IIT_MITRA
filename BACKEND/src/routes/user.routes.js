const express = require('express');
const router= express.Router()
const {handlGetUserDetails,handleGetAllUserForSuggestion ,handleGetOneUserProfile,handleGetSearchreauslt}=require('../controllers/user.controllers')
const { verifyToken } = require("../middlewares/verifyToken");


//user login and register details

router.get('/details',verifyToken ,handlGetUserDetails)

//all user for friend suggetions
router.get('/suggestion',verifyToken,handleGetAllUserForSuggestion)

//finding one user
router.get('/userprofile',verifyToken,handleGetOneUserProfile)

//searching user functionlity
router.get('/search/:value',verifyToken,handleGetSearchreauslt)


module.exports = router