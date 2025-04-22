import Otp from "../../model/otpModel.js"


const otpVerify=async(email,otp)=>{
    const otpRecord=await Otp.findOne({email})

    if(!otpRecord){
        return res.status(400).json({
            message:"otp not found for this email"
        })
    }
    if(otpRecord.otp!==otp){
        return {status:400,
            message:"inavalid otp"
        }
    }
    await Otp.deleteOne({email})
    return {status:200,
        message:'OTP verified successfully'
    }
}

export default otpVerify;