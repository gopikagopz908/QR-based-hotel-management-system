import asyncHandler from "../Middlewares/asyncHandler.js";
import { staffLoginService } from "../Service/StaffService.js";
import CustomError from "../utils/customError.js";

export const staffLogin=asyncHandler(async(req,res)=>{
    const {email}=req.body;

    if(!email||!password){
        throw new CustomError("email and password is required")
    }

    const result=await staffLoginService(email)
     
    
})



