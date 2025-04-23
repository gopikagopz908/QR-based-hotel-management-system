import mongoose from "mongoose";
import asyncHandler from "../Middlewares/asyncHandler.js";
import CustomError from "../utils/customError.js";
import sendOtp from "../utils/otpverification/sendOtp.js";
import User from "../model/userModel.js";
import Otp from "../model/otpModel.js";
import {generateToken} from '../utils/generateToken.js'
export const userLogin = async (req, res) => {
 
    const { email, name } = req.body;
   
     if (!email || !name) {
       throw new CustomError("Email or name is missing");
     }
   
     const existingUser = await User.findOne({ email });   
     if(existingUser){
       const existingOtp = await Otp.findOne({ userId: existingUser._id });
       if(existingOtp){
         const deletedOtp = await Otp.deleteOne({ userId: existingUser._id });
       }
     }
   
   
     if (!existingUser) {
       const newUser = new User({ email, name });   
       await newUser.save();
    console.log(newUser._id,"iddd")
   
       await sendOtp(newUser._id, email);
     } else {
   
       await sendOtp(existingUser._id, email);
     }
   
     res.status(200).json({ message: "OTP sent successfully" });           
   };

   
   export const otpVerify = async (req, res) => {
    const { email, otp } = req.body;
  
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    const otpEntry = await Otp.findOne({ userId: user._id });
    console.log(otpEntry,"otpppppvvvv")
    if (!otpEntry) {
      return res.status(404).json({ message: "OTP not found or expired" });
    }
    
    if (otpEntry.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }      
  
    const now = new Date();
    if (otpEntry.expiresAt < now) {
      return res.status(400).json({ message: "OTP has expired" });
    }
  
    // Optional: delete the OTP after successful verification
    await Otp.deleteOne({ _id: otpEntry._id });
  
    const token = generateToken(user._id);
   
  res
  .cookie('token',token, { httpOnly: true, secure: false, maxAge: 3 * 24 * 60 * 60 * 1000, path: '/' })
    return res.status(200).json({
      message: "User verified successfully",
      user,
      token,
    });
  };