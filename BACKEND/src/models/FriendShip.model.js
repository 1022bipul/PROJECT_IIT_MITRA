const mongoose=require('mongoose')

const FriendRequestSchema = new mongoose.Schema({
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails', required: true },
        receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails', required: true },
        status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
       
    },{timestamps:true});
const FriendShip =new mongoose.model('FriendShip',FriendRequestSchema)

module.exports=FriendShip