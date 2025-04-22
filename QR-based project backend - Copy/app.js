import express from 'express';
import cookieParser from 'cookie-parser';
import productRoute from './src/routes/productRoute.js';
import orderRoute from './src/routes/orderRoute.js';
import adminRoute from './src/routes/AdminRoute.js';
import errorHandler from './src/Middlewares/errorHandler.js';
import morgan from 'morgan';
import cors from "cors"
import StaffRoute from './src/routes/StaffRoute.js';
import userRoute from './src/routes/userRoute.js';
const app=express()
app.use(express.json());
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Allow cookies/auth headers
  }));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors())
app.use("/api/product",productRoute) ;
app.use("/api/order",orderRoute);
app.use("/api/admin",adminRoute)

app.use("/api/staff",StaffRoute)

app.use('/api/user',userRoute)


app.use(errorHandler)



export default app;