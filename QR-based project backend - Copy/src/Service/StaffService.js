import bcrypt from "bcryptjs";
import Staffs from "../model/StaffModel.js"
import { generateToken } from "../utils/generateToken.js";


export const staffLoginService=async(email,password)=>{
   
    const data=await Staffs.findOne({email});
    if(!data){
     return  res.status(400).json({
        message:"no staff found"
      })
    }
    const isTrue=await bcrypt.compare(password,data.password);
    console.log(isTrue,"truuu")   
    let token;
    if(isTrue){
      token= await generateToken({email,password})
      console.log(token,"tokenn")
     return {token,role:data.role}
    }
   return token;
}



