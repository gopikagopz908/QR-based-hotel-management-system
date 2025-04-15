import express from 'express'
import { adminLogin, generateQRCode, getQrCode } from '../controller/AdminController.js'


const adminRoute=express()

adminRoute.post('/generateQRcode',generateQRCode)
adminRoute.get('/getQRcode',getQrCode)
adminRoute.post('/login',adminLogin)

export default adminRoute;
