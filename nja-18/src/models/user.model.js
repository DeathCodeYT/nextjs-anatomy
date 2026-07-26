import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
})

export const UserModel = mongoose.model.user || mongoose.model('user',userSchema)

