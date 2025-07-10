const User = require("../models/user.models");
const nodemailer = require("nodemailer");
const bcrypt=require('bcrypt');
const UserDetails = require("../models/userDetails.models");
const OtpVerify = require("../models/OtpVerify.model");
const {sendEmail}=require("../middlewares/Email.config")

//Email Verification
const handleEmailVerification=async(req,res)=>{
  try {
    const {email}=req.body;
   const  verificationCode=Math.floor(100000+Math.random()*900000).toString()
   

   sendEmail(email,verificationCode)
    const emailVerification= new OtpVerify({email,verificationCode})
    await emailVerification.save();
   res
      .status(201)
      .json({
        message:"otp generated successfully!",
        email:email,
        verificationCode:verificationCode
       
      });



  } catch (error) {
    console.log(error)
  }

}

//get your otp
const handleGetOtp=async(req,res)=>{


}


//Resiter user


const handleRegister= async (req, res) => {
  try {
    
    console.log("Request body:", req.body);
    const { name, email, password } = req.body;
    const user = new User({ name, email, password});
    const userDetails = new UserDetails({ name, email});
    await user.save();
    await userDetails.save();
    res
      .status(201)
      .json({
        message:"user registered successfully!",
        userId:user._id.toString(),
      });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};



//login user


const handleLogin= async (req, res) => {
  try {
    //finding user
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const passExist = await bcrypt.compare(password, user.password);
    if (!passExist) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    //storing jwt token in cookie
    const jwtToken = await user.generateToken();


    // console.log(jwtToken);
    res.cookie("token",jwtToken,
      {httpOnly:true,secure:true,sameSite:"None"});


    res.status(200).json({massage:" successfully login",token:jwtToken,error:"token error"});
    // console.log(user);


  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
};



//getting user token
const handleGetToken=async(req,res) =>{
  console.log("token",req.cookies.token)
    const jwtToken =await req.cookies.token; 

  if (!jwtToken) {
    return res.status(401).json({ message: "No token found" });
  }

  res.status(200).json({jwtToken:jwtToken})

}


// logout user


const handleLogout= (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out" });
}



module.exports={handleLogin,handleRegister,handleLogout,handleGetToken,handleEmailVerification,handleGetOtp}