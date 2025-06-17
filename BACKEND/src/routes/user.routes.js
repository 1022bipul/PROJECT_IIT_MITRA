const express = require('express');
const router= express.Router()
const {handlGetUserDetails}=require('../controllers/user.controllers')
const { verifyToken } = require("../middlewares/verifyToken");


//user login and register details

router.get('/details',verifyToken ,handlGetUserDetails)


module.exports = router