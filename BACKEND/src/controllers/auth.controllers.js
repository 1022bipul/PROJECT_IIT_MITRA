const User = require("../models/user.models");
const bcrypt=require('bcrypt')

//Resiter user


const handleRegister= async (req, res) => {
  try {
    
    console.log("Request body:", req.body);
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    // const jwtToken = await user.generateToken();
    // console.log(jwtToken);
    // res.cookie("token",jwtToken,{httpOnly:true});
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
      {httpOnly:true,secure:false,sameSite:"lax"});


    res.status(200).json({massage:" successfully login",token:jwtToken,error:"token error"});
    // console.log(user);


  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
};




// logout user


const handleLogout= (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out" });
}



module.exports={handleLogin,handleRegister,handleLogout}