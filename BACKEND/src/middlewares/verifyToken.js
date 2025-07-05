const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken =(req,res,next) =>{
//    console.log(" token ",req.cookies)
//    console.log(" token ",req.cookies.token)
//    console.log(SECRET_KEY)

    try{
    console.log("fello")

        const isVerified = jwt.verify(req.cookies.token,SECRET_KEY);
        // console.log(isVerified)
        res.user=isVerified
        next();
    }catch(err){
        return res.status(401).json({msg: "Token is not valid"})
    }
}

module.exports = { verifyToken };
