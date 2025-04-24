import express from 'express'
import { addOrder, orderDetails, singleOrder, verifyPayment } from '../controller/orderController.js';
import authenticate from '../Middlewares/authHandler.js';
// import { showOrderService } from '../Service/orderService.js';
const orderRoute=express()

orderRoute.post('/addOrder',authenticate,addOrder);
orderRoute.post('/verifyPayment',verifyPayment);

orderRoute.get('/getAllOrders',orderDetails)
orderRoute.get('/singleOrder/:id',singleOrder)
// orderRoute.get('/showOrder',showOrderService)



export default orderRoute;