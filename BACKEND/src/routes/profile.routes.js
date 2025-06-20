const express= require('express');
const User = require('../models/user.models');
const { handlePostProfileData } = require('../controllers/profile.controllers');
const multer=require('multer');
const { verifyToken } = require('../middlewares/verifyToken');
const path=require('path')




const router=express.Router()

//storage

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null,file.fieldname +"-"+Date.now()+ path.extname(file.originalname))
  }
})
 const upload = multer({ storage: storage })
 

//edit profile data
router.post('/profile-data',verifyToken , upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
  ]), handlePostProfileData)





module.exports = router