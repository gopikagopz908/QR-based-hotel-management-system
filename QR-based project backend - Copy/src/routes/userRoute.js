import express from 'express'
import { userLogin,otpVerify } from '../controller/userController.js'



const userRoute=express()


userRoute.post('/userLogin',userLogin)

userRoute.post('/otp/verify',otpVerify)


export default userRoute;    