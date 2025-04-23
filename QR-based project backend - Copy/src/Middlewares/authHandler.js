import User from "../model/userModel.js";
import CustomError from "../utils/customError.js";
import { verifyToken } from "../utils/generateToken.js";


const authenticate=async(req,res,next)=>{

    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({isAuthenticated:false,message:"not autheticated"})
        }

        const decoded=verifyToken(token,process.env.JWT_SECRET_KEY)
        if(!decoded){
            throw new CustomError('invalid or expired access token',403)
        }
        req.user=decoded;   
        next()

    }catch(err){
        console.log(err)
        next(err)
    }
}

export default authenticate;