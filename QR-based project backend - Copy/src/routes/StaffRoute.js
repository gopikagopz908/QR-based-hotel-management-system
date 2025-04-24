import { staffLogin } from "../controller/staffController.js";
import express from 'express';


const StaffRoute=express()


StaffRoute.post("/staffLogin",staffLogin)



export default StaffRoute;