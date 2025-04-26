import express from 'express'
import { AddStaffs, adminLogin, deleteStaff, editStaff, generateQRCode, getPaginatedProducts, getQrCode, getStaffById, getStaffs } from '../controller/AdminController.js'
import { upload } from '../configuration/cloudinaryconfig.js'


const adminRoute=express()

adminRoute.post('/generateQRcode',generateQRCode)
adminRoute.get('/getQRcode',getQrCode)
adminRoute.post('/login',adminLogin)

//staff

adminRoute.post('/addStaff',AddStaffs)
adminRoute.put('/editStaff/:id',editStaff)
adminRoute.delete('/deleteStaff/:id',deleteStaff)


adminRoute.get('/getStaff',getStaffs)
adminRoute.get('/getStaffById/:id',getStaffById)

adminRoute.get('/pagination',getPaginatedProducts)

export default adminRoute;

