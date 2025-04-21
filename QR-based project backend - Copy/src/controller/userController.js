import mongoose from "mongoose";
import asyncHandler from "../Middlewares/asyncHandler";
import CustomError from "../utils/customError";

export const userLogin=asyncHandler(async(req,res)=>{
    const{email,password}=req.body;

    if(!email||!password){
        throw new CustomError("email or password is missing")
    }
    const data=await 
})