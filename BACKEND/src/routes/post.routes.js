const express= require('express');
const { verifyToken } = require("../middlewares/verifyToken");
const {handleGetPostsUrls}=require('../controllers/post.controllers')

const router=express.Router()





//get post url of a user

router.get('/allurls',verifyToken,handleGetPostsUrls)

module.exports=router
