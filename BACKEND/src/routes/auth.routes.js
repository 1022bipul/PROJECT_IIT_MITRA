const express =require('express')
const {handleLogin,handleLogout,handleRegister} =require('../controllers/auth.controllers')
const { verifyToken } = require("../middlewares/verifyToken");




const router= express.Router()

/*
Register page logic
*/

router.post("/register",handleRegister)



/*
login page logic
*/

router.post("/login", handleLogin);




//logout
 router.get("/logout", verifyToken, handleLogout);



module.exports =router
