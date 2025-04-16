import express from 'express'
import { addOrder, verifyPayment } from '../controller/orderController.js';
const orderRoute=express()

orderRoute.post('/addOrder',addOrder);
 orderRoute.post('/verifyPayment',verifyPayment);



export default orderRoute;