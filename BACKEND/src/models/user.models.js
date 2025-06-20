const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt= require("jsonwebtoken")






const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },

    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
   
   
},{timestamps:true})

userSchema.pre("save",async function hashingPassword(next) {
   const saltRounds=11
  const hashPassword=await bcrypt.hash(this.password,saltRounds)
  this.password=hashPassword
   console.log(hashPassword) 
   next();
})

userSchema.methods.generateToken =async function(){
   const SECRET_KEY=process.env.JWT_SECRET_KEY
    const userCrendentials={userId:this._id,userEmail:this.email}
    try {
       const token= jwt.sign(userCrendentials, SECRET_KEY ,{expiresIn:'30d'})
        return token
    } catch (error) {
        
        console.log("token creation failed")
        
    }
    
}

const User =new mongoose.model('user',userSchema)

module.exports=User
