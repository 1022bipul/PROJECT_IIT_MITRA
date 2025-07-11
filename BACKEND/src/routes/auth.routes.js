const express =require('express')
const {handleLogin,handleLogout,handleRegister,handleGetToken,handleEmailVerification} =require('../controllers/auth.controllers')
const { verifyToken } = require("../middlewares/verifyToken");




const router= express.Router()

/*
Register page logic
*/

router.post("/register",handleRegister)



//otp verify
router.post("/verifying",handleEmailVerification)



/*
login page logic
*/

router.post("/login", handleLogin);

//get token
router.get('/token',verifyToken,handleGetToken)


//logout
 router.get("/logout", verifyToken, handleLogout);



module.exports =router
