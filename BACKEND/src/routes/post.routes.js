const express= require('express');
const { verifyToken } = require("../middlewares/verifyToken");
const {handleGetPostsUrls ,handleGetFeedUrls,handleDeletePost}=require('../controllers/post.controllers')

const router=express.Router()





//get post urls of a particular user for profile

router.get('/allurls',verifyToken,handleGetPostsUrls)



//get posts all urls for feed 
 router.get('/feed/urls',verifyToken,handleGetFeedUrls)

//delete post
 router.delete('/delete/:id',verifyToken,handleDeletePost)


module.exports=router
