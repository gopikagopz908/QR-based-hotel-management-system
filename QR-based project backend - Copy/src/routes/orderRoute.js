import express from 'express'
import { addOrder, orderDetails, singleOrder, updateStatus, verifyPayment } from '../controller/orderController.js';
import authenticate from '../Middlewares/authHandler.js';
// import { showOrderService } from '../Service/orderService.js';
const orderRoute=express()

orderRoute.post('/addOrder',authenticate,addOrder);
orderRoute.post('/verifyPayment',verifyPayment);

orderRoute.get('/getAllOrders',orderDetails)
orderRoute.get('/singleOrder/:id',singleOrder)
// orderRoute.get('/showOrder',showOrderService)

orderRoute.patch('/orderStatus/:id',updateStatus)


export default orderRoute;