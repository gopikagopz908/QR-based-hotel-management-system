import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbConnect from './src/dbconfig/dbConnect.js';
import productRoute from './src/routes/productRoute.js';
import orderRoute from './src/routes/orderRoute.js';
import errorHandler from './src/Middlewares/errorHandler.js';
const app=express()


dotenv.config();
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Allow cookies/auth headers
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/product",productRoute) ;
app.use("/api/order",orderRoute);
app.use(errorHandler)



export default app;