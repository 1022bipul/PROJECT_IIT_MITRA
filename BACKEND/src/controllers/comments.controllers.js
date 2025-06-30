const Comments = require("../models/comment.models");
const UserDetails = require("../models/userDetails.models");




const handleComments=async(req,res)=>{
    try {
        console.log ("hello")
        const email = res.user.userEmail;
        console.log(req.body)
        const {comment}=req.body;
        const userDetail = await UserDetails.findOne({ email });
       
        const user = userDetail._id;
       
        const userComment=new Comments({comment,email,user})
    
        await userComment.save()
        res.status(200).json({message:"comment sent backend"})
    } catch (error) {
        console.log(error)
    }

    
}

module.exports={handleComments}