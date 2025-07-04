import mongoose from "mongoose";
const {Schema,model,models}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    userName:{
        unique:true,
        type:String,
    },
    bio:{
        type:String,
    },
    profilePicture:{
        type:String,
    },
    profileBanner:{
        type:String,
    },
    razorpayId:{
        type:String,
    },
    razorpaySecret:{
        type:String,
    },
})

export default models.User || model("User", userSchema);