import asyncHandler from "../Middlewares/asyncHandler";

export const addOrder=asyncHandler(async(req,res)=>{
    const userId=req.user._id;
    const{email,paymentMethod,date,total,items}=req.body;

    const{order,razorpayOrderId}=await addOrderService(email,paymentMethod,userId,items,date,total)
})




