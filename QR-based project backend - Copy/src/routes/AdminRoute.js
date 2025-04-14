import express from 'express'
import { generateQRCode } from '../controller/AdminController.js'


const adminRoute=express()

adminRoute.post('/generateQRcode',generateQRCode)

export default adminRoute
