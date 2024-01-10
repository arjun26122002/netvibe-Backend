import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password : {
            type:String,
            required:true
        },
        firstname: {
            type:String,
            required:true 
        },
        lastname: {
            type:String,
            required:true
        },
        isAdmin : {
            type:Boolean,
            default:false,
        },
        ProfilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        followers:[] ,
        followings: []
    },
    {timestamps: true}
)

const UserModel = mongoose.model("users" , userSchema);

export default UserModel