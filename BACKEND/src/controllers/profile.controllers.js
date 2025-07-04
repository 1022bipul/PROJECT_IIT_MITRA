const { clean } = require("../middlewares/clean");
const User = require("../models/user.models");
const UserDetails = require("../models/userDetails.models");
const path = require("path");
require("dotenv").config();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const handlePostProfileData = async (req, res) => {
  try {
    console.log("hello");

    //getting email from middleware
    const email = res.user.userEmail;

    //define avatar and banner
    let avatarUrl = null;
    let bannerUrl = null;

    // checking for avatar
    if (req.files.avatar) {
      const profile = req.files.avatar[0].path;
      const cloudinaryAvatar = await cloudinary.uploader.upload(profile, {
        folder: "iitmitraGallery",
      });
      avatarUrl = cloudinaryAvatar.url;
    }

    //checking for banner
    if (req.files.banner) {
      const banner = req.files.banner[0].path;
      const cloudinaryBanner = await cloudinary.uploader.upload(banner, {
        folder: "iitmitraGallery",
      });
      bannerUrl = cloudinaryBanner.url;
    }

    //get json data
    const user = JSON.parse(req.body.userData);
    console.log(email);
    console.log(user);
    console.log(avatarUrl);
    console.log(bannerUrl);



   if(user.name){
     
      await User.updateOne(
        { email },
        {
          $set: {
            name:user.name
            
   }})}




    //finding user by email
    const userExist = await UserDetails.findOne({ email });

    //removing null value if user exist
    const updatedUser = clean(user);
    console.log(updatedUser);

    //if user exist than update
    if (userExist) {
      await UserDetails.updateOne(
        { email },
        {
          $set: {
            email,
            avatar: avatarUrl || userExist.avatar ,
            banner: bannerUrl || userExist.banner,
            ...updatedUser,
          },
        }
      );
    } // nahi to user create kar do
    else {
      console.log("new user");
      const newUser = await new UserDetails({
        email,
        avatar: avatarUrl,
        banner: bannerUrl,
        ...user,
      });
      await newUser.save();
    }

    res.status(200).json({
      message: "your details are saved",
      // ,avatarUrl:avatarUrl,bannerUrl:avatarUrl
    });
  } catch (error) {
    res.status(401).json({ message: "failed to save details" });
  }
};

module.exports = { handlePostProfileData };
