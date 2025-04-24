import asyncHandler from "../Middlewares/asyncHandler.js";
import Order from "../model/orderModel.js";
import { addOrderService, getAllOrderService, verifyPaymentService } from "../Service/orderService.js";
import { STATUS } from "../utils/constant.js";

// export const addOrder=asyncHandler(async(req,res)=>{
//     const userId=req.user._id;
//     const{paymentMethod,items,total}=req.body;
//     console.log(items,"nhgydgyg")
  

  
//    const {order,razorpayOrderId} =await addOrderService(paymentMethod,items,total)
//    console.log(order,razorpayOrderId,"gopzzz")

//     res.status(200).json({
//         status:STATUS.SUCCESS,
//         message:"order placed successfully",
//         order,
//         razorpayOrderId
//     })
// })

export const addOrder=asyncHandler(async(req,res)=>{
 const userId=req.user.data;
 if(!userId){
  res.status(400).json({message:"Invalid User"})
 }
 const{paymentMethod,products,total}=req.body;
  const {order,razorpayOrderId} =await addOrderService(paymentMethod,products,total,userId)


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
  
// export const showOrders=asyncHandler(async(req,res)=>{
//   const userId=req.user._id;
//   const{page}=req.query;

//   const{orders,pagination}=await showOrderService(userId,parseInt(page,10)||1,10)
//   const message=orders.length?"orders retrieved successfully":"no orders found";
//   res.status(200).json({
//     status:STATUS.SUCCESS,
//     message,
//     orders,
//     pagination
//   })
// })




export const orderDetails=asyncHandler(async(req,res)=>{
  const orderList=await getAllOrderService()
  res.json({
      status:STATUS.SUCCESS,
      message:"order list....",
      order:orderList,

  })
})

// export const singleOrder=asyncHandler(async(req,res)=>{
//   const {id}=req.params;
  
//   const order=await Order.findOne({user:id})
  
//       .populate({
//           path: 'items.productId',

//         });
  
//   res.status(200).json({
//     status:STATUS.SUCCESS,
//     message:"order viewed successfully",
//     order


//   })
  
// })

export const singleOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate({
    path: 'items.productId',
    model: "Products",
  });

  if (!order) {
    return res.status(404).json({
      status: STATUS.FAIL,
      message: "Order not found",
    });
  }

  res.status(200).json({
    status: STATUS.SUCCESS,
    message: "Order viewed successfully",
    order,
  });
});
