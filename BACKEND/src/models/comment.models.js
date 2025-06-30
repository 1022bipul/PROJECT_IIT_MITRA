const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    comment:{
        type:String
    },
    email:{
        type:String   
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'UserDetails'
    }

},{timestamps:true})

const Comments=new mongoose.model("Comments",commentSchema)

module.exports = Comments;
