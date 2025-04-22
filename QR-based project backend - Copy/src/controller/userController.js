import mongoose from "mongoose";
import asyncHandler from "../Middlewares/asyncHandler.js";
import CustomError from "../utils/customError.js";
import sendOtp from "../utils/otpverification/sendOtp.js";
import User from "../model/userModel.js";
import Otp from "../model/otpModel.js";

export const userLogin=asyncHandler(async(req,res)=>{
    const{email,name}=req.body;
    if(!email||!name){
        throw new CustomError("email or password is missing")
    }
 const existOtp=await Otp.findOne({email})
console.log(existOtp,"existtotpp")
 if (!existingUser) {
    const newUser = new User({ email, name });
    await newUser.save();
} else {
  await sendOtp()
}



 const data=await sendOtp({id:savedUser._id,email})




})