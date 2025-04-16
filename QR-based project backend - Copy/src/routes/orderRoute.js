import express from 'express'
import { addOrder, verifyPayment } from '../controller/orderController.js';
// import { showOrderService } from '../Service/orderService.js';
const orderRoute=express()

orderRoute.post('/addOrder',addOrder);
orderRoute.post('/verifyPayment',verifyPayment);
// orderRoute.get('/showOrder',showOrderService)



export default orderRoute;