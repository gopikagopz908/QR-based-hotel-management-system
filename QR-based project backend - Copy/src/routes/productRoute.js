import express from 'express'
import { addProducts, deleteProduct, editProducts, singleProduct } from '../controller/productController.js' 
import { upload } from '../configuration/cloudinaryconfig.js';
import { getAllProducts } from '../controller/AdminController.js';
const productRoute=express()

 productRoute.post('/',upload.single('image') ,addProducts)
 productRoute.get('/getProduct',getAllProducts)

productRoute.patch('/editProduct/:id',upload.single('image'),editProducts)

productRoute.delete('/deleteProduct/:id',deleteProduct)

productRoute.get('/:id',singleProduct)

 
 export default productRoute;