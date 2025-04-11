import express from 'express'
import { addProducts } from '../controller/productController.js' 
import { upload } from '../configuration/cloudinaryconfig.js';
const productRoute=express()

productRoute.post('',upload.single('image') ,addProducts)



export default productRoute;