const { error } = require("console");
const ImgVideoUrl = require("../models/postUrl.models");
const UserDetails = require("../models/userDetails.models");

const path = require("path");
// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const handleCreatePostImg = async (req, res) => {
 try {
     console.log(req.file);
     const email = res.user.userEmail;
   
     //get user id od userDetails
     const userDetail = await UserDetails.findOne({ email });
   
     const user = userDetail._id;
    //  if (!user) {
    //   return res.status(500).json({ error: "User not found" });
    //  }
     console.log("radhe radhe");
   
     console.log(user);
   
     console.log("email:", email);
   
     const { discription } = req.body;
     console.log(discription);
   
     const filePath = req.file.path;
     const cloudinaryRess = await cloudinary.uploader.upload(filePath, {
       folder: "iitmitraGallery",
     });
     const url = cloudinaryRess.url;
     const uploadInfo = new ImgVideoUrl({ email, discription, url, user });
     const uploadRes = await uploadInfo.save();
     console.log("clodinary res", cloudinaryRess);
     res
       .status(200)
       .json({ message: "Image Uploaded" })
       .json({ discription: discription, url: url });
 } catch (error) {
   res.status(500).json({error:"Fill out the profile details"})
 }
};

module.exports = { handleCreatePostImg };
