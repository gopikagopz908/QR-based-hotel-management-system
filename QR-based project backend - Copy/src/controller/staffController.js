import asyncHandler from "../Middlewares/asyncHandler.js";
import { staffLoginService } from "../Service/StaffService.js";
import CustomError from "../utils/customError.js";

export const staffLogin=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    if(!email||!password){ 
        throw new CustomError("email and password is required")
    }
    const {token,role}=await staffLoginService(email,password)
     

    res.status(200).json({
        message:"staff logined successfully",
        token,role
    })
    
})



