import User from "../model/userModel.js"
import CustomError from "../utils/customError.js"
import { generateToken } from "../utils/generateToken.js"

export const userLoginService=async(email,password)=>{


    const user=await User.findOne({email})

    if(!user){
        throw new CustomError('user not found')
    }

    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new CustomError('invalid credentials')
    }

}

export const otpVerify=async(req,res)=>{
    try {
      const {email,otp}=req.body;
    //  const response=await verifyOtp(email,otp)
      if(response.status==200){
      const user=await User.findOneAndUpdate({email},{$set:{verified:true}},{new:true}).select('-password -expirationDate -createdAt -__v ');
      console.log(user,"userrr")
      
      const token=await generateToken(user._id)
       return res.status(200).json({
        message: "user verified succesfully",
        user,
        token
      });
    
    
      }
      console.log(response)
    } catch (error) {
      console.log(error,'errr')
    }
    }
    