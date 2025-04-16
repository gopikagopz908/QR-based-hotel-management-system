import express from 'express'
import { addProducts, deleteProduct, editProducts } from '../controller/productController.js' 
import { upload } from '../configuration/cloudinaryconfig.js';
import { getAllProducts } from '../controller/AdminController.js';
const productRoute=express()

 productRoute.post('/',upload.single('image') ,addProducts)
 productRoute.get('/getProduct',getAllProducts)

productRoute.patch('/editProduct',upload.single('image'),editProducts)

productRoute.delete('/deleteProduct/:id',deleteProduct)

 
 export default productRoute;