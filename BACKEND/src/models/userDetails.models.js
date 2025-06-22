const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema(
  {
    avatar:{
      type:String,

    },
    banner:{
      type:String
    },
    name: {
      type: String,
      
    },
    email: {
      type: String,
     
    },
    phone: {
      type: Number,
    },
    dob: {
      type:String,
    },
    gender: {
      type: String,
    },
    skills: { type: String },
    bio: { type: String },
    aluminiStatus: { type: String },
    institute: { type: String },
    branch: { type: String },
    year: { type: Number },
    jobTitle: { type: String },
    company: { type: String },
    linkedin: { type: String },
    github: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    youtube: { type: String },
    facebook: { type: String },
    portfolio: { type: String },
  },
  { timestamps: true }
);

const UserDetails = new mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
