import asyncHandler from "../Middlewares/asyncHandler.js";
import { addOrderService, verifyPaymentService } from "../Service/orderService.js";
import { STATUS } from "../utils/constant.js";

export const addOrder=asyncHandler(async(req,res)=>{
    // const userId=req.user._id;
    const{paymentMethod,items,total}=req.body;
  
   const {order,razorpayOrderId} =await addOrderService(paymentMethod,items,total)
   console.log(order,razorpayOrderId)

    res.status(200).json({
        status:STATUS.SUCCESS,
        message:"order placed successfully",
        order,
        razorpayOrderId
    })
})
export const verifyPayment = asyncHandler(async (req, res) => {
    const { paymentId, orderId } = req.body;
    try {
      const isPaymentVerified = await verifyPaymentService(paymentId, orderId);
  
      if (isPaymentVerified) {
        res.status(200).json({
          message: "Payment verified successfully",
        });
      } else {
        throw new CustomError("Payment verification failed", 400);
      }
    } catch (error) {
      console.error("Error in payment verification endpoint:", error);
      res.status(error.status || 500).json({
        message: "Something went wrong during payment verification.",
      });
    }
  });
  





