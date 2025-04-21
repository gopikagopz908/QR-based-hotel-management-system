import express from 'express'
import { AddStaffs, adminLogin, deleteStaff, editStaff, generateQRCode, getQrCode } from '../controller/AdminController.js'
import { upload } from '../configuration/cloudinaryconfig.js'


const adminRoute=express()

adminRoute.post('/generateQRcode',generateQRCode)
adminRoute.get('/getQRcode',getQrCode)
adminRoute.post('/login',adminLogin)

//staff

adminRoute.post('/addStaff',upload.single('image'),AddStaffs)
adminRoute.patch('/editStaff/:id',editStaff)
adminRoute.delete('/deleteStaff/:id',deleteStaff)
export default adminRoute;
