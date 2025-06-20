const express= require('express');
const { verifyToken } = require("../middlewares/verifyToken");
const {handleCreatePostImg}=require('../controllers/upload.controllers')                                   
const multer=require('multer')
const path = require('path')


//storage

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null,file.fieldname +"-"+Date.now()+ path.extname(file.originalname))
  }
})
 const upload = multer({ storage: storage })
 

const router=express.Router()

// create post

router.post('/image',verifyToken,upload.single('image'),handleCreatePostImg)



module.exports = router

