const mongoose=require("mongoose")


const imgVideoUrlSchema=new mongoose.Schema({
    email:{type:String,
        requuired:true
    },
    discription:{
        type:String,
    
    },
    url:{
        type:String,
        required:true
    },
    media:{
        type:String,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserDetails",
    }
    

},{timestamps:true})


const ImgVideoUrl = new mongoose.model("ImgVideoUrl", imgVideoUrlSchema);

module.exports = ImgVideoUrl;