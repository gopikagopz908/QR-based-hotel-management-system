import express from 'express'
import { userLogin } from '../controller/userController.js'
import { otpVerify } from '../Service/userService.js'


const userRoute=express()


userRoute.post('/userLogin',userLogin)

userRoute.post('/user/verify',otpVerify)


export default userRoute;