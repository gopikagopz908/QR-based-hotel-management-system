import express from 'express'
import { addProducts } from '../controller/productController.js' 
const productRoute=express()

productRoute.post('',addProducts)



export default productRoute;