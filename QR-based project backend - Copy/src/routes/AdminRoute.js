import express from 'express'
import { AddStaffs, adminLogin, deleteStaff, editStaff, generateQRCode, getPaginatedProducts, getQrCode, getStaffById, getStaffs } from '../controller/AdminController.js'
import { upload } from '../configuration/cloudinaryconfig.js'
import isAdmin from '../Middlewares/isAdmin.js'


const adminRoute=express()

adminRoute.post('/generateQRcode',generateQRCode)
adminRoute.get('/getQRcode',getQrCode)
adminRoute.post('/login',adminLogin)

//staff

adminRoute.post('/addStaff',isAdmin,AddStaffs)
adminRoute.put('/editStaff/:id',isAdmin,editStaff)


adminRoute.get('/getStaff',isAdmin,getStaffs)
adminRoute.get('/getStaffById/:id',isAdmin,getStaffById)

adminRoute.get('/pagination',isAdmin,getPaginatedProducts)

export default adminRoute;

