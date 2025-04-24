// import User from "../model/userModel.js";
// import CustomError from "../utils/customError.js";
// import { verifyToken } from "../utils/generateToken.js";


// const authenticate=async(req,res,next)=>{

//     try{
//         const token=req.cookies.token;
//         if(!token){
//             return res.status(401).json({isAuthenticated:false,message:"not autheticated"})
//         }

//         const decoded=verifyToken(token,process.env.JWT_SECRET_KEY)
//         if(!decoded){
//             throw new CustomError('invalid or expired access token',403)
//         }
//         req.user=decoded;   
//         next()

//     }catch(err){
//         console.log(err)
//         next(err)
//     }
// }

// export default authenticate;



import User from "../model/userModel.js";
import CustomError from "../utils/customError.js";
import { verifyToken } from "../utils/generateToken.js";

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ isAuthenticated: false, message: "Not authenticated" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new CustomError("Invalid or expired access token", 403);
    }
console.log(decoded,"iddddd")
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Authentication error:", err);
    next(err);
  }
};

export default authenticate;
