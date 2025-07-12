const express= require('express');
const { verifyToken } = require("../middlewares/verifyToken");
const {handleCreatePostImg ,handleCreatePostVideo}=require('../controllers/upload.controllers')                                   
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

router.post('/media',verifyToken,upload.single('media'),handleCreatePostImg)
// router.post('/video',verifyToken,upload.single('video'),handleCreatePostVideo)




module.exports = router

