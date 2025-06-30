const express=require('express')
const { verifyToken } = require('../middlewares/verifyToken')
const { handleComments } = require('../controllers/comments.controllers')



const router=express.Router()





router.post('/user',verifyToken, handleComments)


module.exports=router 