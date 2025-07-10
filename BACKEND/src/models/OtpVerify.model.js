const mongoose = require('mongoose')


const OtpVerifySchema= new mongoose.Schema({


    email:{
        type:String,
        required:true,

    },
 
    
    verificationCode:{
        type:String
    },
   isVerified:{type:Boolean,
        default:false
    },
   
},{timestamps:true})


const OtpVerify =new mongoose.model('OtpVerify',OtpVerifySchema)

module.exports=OtpVerify
