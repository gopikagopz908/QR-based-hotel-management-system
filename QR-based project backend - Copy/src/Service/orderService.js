// import razorpayInstance from "../configuration/razorpay.js";
// import Order from "../model/orderModel.js";
// import Products from "../model/productModel.js";
// import CustomError from "../utils/customError.js";

// export const addOrderService = async (paymentMethod, products, total,userId) => {
//   const order = new Order({
//       user: userId,
//     products: [],

//     paymentMethod,
//     total,
//   });
  
//   for (let item of products) {
//     const product = await Products.findById(item);
//     if (!product) {
//       throw new CustomError(`Insufficient quantity for product: ${product}`);
//     }

//     order.items.push({ productId: item.productId, quantity: item.quantity });
//   }

//   if (paymentMethod === "razorpay") {
//     const options = {
//       amount: total,
//       currency: "INR",
//       receipt: `order_receipt_${order._id}`,
//       payment_capture: 1,
//     };

//     //create order with rayzorpay
//     try {
//       const razorpayOrder = await razorpayInstance.orders.create(options);
//       order.razorpayOrderId = razorpayOrder.id;

//       await order.save();
//     } catch (error) {
//       console.log(error);
//       throw new CustomError("Rayzorpay order creation failed");
//     }
//   }
//   return { order, razorpayOrderId: order.razorpayOrderId };
// };

// export const verifyPaymentService = async (paymentId, razorpayOrderId) => {
    

//   const order = await Order.findOne({ razorpayOrderId });
  
//   if (!order || order.razorpayOrderId != razorpayOrderId) {
//     throw new CustomError("order is not found", 404);
//   }
//   try {
    
//     const paymentDetails = await razorpayInstance.payments.fetch(paymentId);
//     if (paymentDetails.status === "captured") {
//       order.razorpayPaymentStatus = "paid";
//       order.status = "placed";
//       await order.save();

//       return true;
//     } else {
//       throw new CustomError("Payment verification failed");
//     }
//   } catch (error) {
//     console.error("Error during payment verification:", error);
//     throw new CustomError("Payment verification failed", 500);
//   }
// };


// export const showOrderService=async(id)=>{


// }


import mongoose from "mongoose";
import razorpayInstance from "../configuration/razorpay.js";
import Order from "../model/orderModel.js";
import Products from "../model/productModel.js";
import CustomError from "../utils/customError.js";

// export const addOrderService = async (paymentMethod, products, total, userId) => {

//   const order = new Order({
//     user: userId,
//     products: [],
//     items: [], // ✅ Make sure items array is initialized
//     paymentMethod,
//     total,
//   });

//   for (let item of products) {
//     const product = await Products.findById(item.productId);
//     if (!product) {
//       throw new CustomError(`Product not found: ${item.productId}`, 400);
//     }

//     order.items.push({
//       productId: item.productId,
//       quantity: item.quantity,
//     });
//   }

//   if (paymentMethod === "razorpay") {
//     const options = {
//       amount: total * 100, // ✅ Razorpay requires amount in paise
//       currency: "INR",
//       receipt: `order_receipt_${order._id}`,
//       payment_capture: 1,
//     };

//     try {
//       console.log("Creating Razorpay order with options:", options);
//       const razorpayOrder = await razorpayInstance.orders.create(options);
//       console.log("Razorpay order created:", razorpayOrder);

//       order.razorpayOrderId = razorpayOrder.id;

//       await order.save();
//     } catch (error) {
//       console.error("Razorpay order creation error:", error?.response?.data || error.message);
//       throw new CustomError("Razorpay order creation failed");
//     }
//   } else {
//     // If not razorpay, just save order directly
//     await order.save();
//   }

//   return {
//     order,
//     razorpayOrderId: order.razorpayOrderId,
//   };
// };



export const addOrderService = async (paymentMethod, products, total, userId) => {

  const order = new Order({
    user: userId,
    products: [],
    items: [], 
    paymentMethod,
    total,
  });
console.log(products,"prooo")
  for (let item of products) {
    const product = await Products.findById(item._id);
    if (!product) {
      throw new CustomError(`Product not found: ${item.productId}`, 400);
    }

    order.items.push({
      productId: item._id,
      quantity: item.quantity,
    });
  }
  
  if (paymentMethod === "razorpay") {



        const options = {
          amount: total * 100, // ✅ Razorpay requires amount in paise
          currency: "INR",
          receipt: `order_receipt_${order._id}`,
          payment_capture: 1,
        };
    
        try {
          console.log("Creating Razorpay order with options:", options);
          const razorpayOrder = await razorpayInstance.orders.create(options);
          console.log("Razorpay order created:", razorpayOrder);
    
          order.razorpayOrderId = razorpayOrder.id;
    
          await order.save();
        } catch (error) {
          console.error("Razorpay order creation error:", error?.response?.data || error.message);
          throw new CustomError("Razorpay order creation failed");
        }
      } else {
        // If not razorpay, just save order directly
        await order.save();
      }
    
      return {
        order,
        razorpayOrderId: order.razorpayOrderId,
      };


  return {
    order,
    razorpayOrderId: order.razorpayOrderId,
  };
};

















export const verifyPaymentService = async (paymentId, razorpayOrderId) => {
  const order = await Order.findOne({ razorpayOrderId });

  if (!order || order.razorpayOrderId !== razorpayOrderId) {
    throw new CustomError("Order not found", 404);
  }

  try {
    const paymentDetails = await razorpayInstance.payments.fetch(paymentId);
    console.log("Payment details from Razorpay:", paymentDetails);

    if (paymentDetails.status === "captured") {
      order.razorpayPaymentStatus = "paid";
      order.status = "placed";
      await order.save();

      return true;
    } else {
      throw new CustomError("Payment not captured");
    }
  } catch (error) {
    console.error("Error during payment verification:", error?.response?.data || error.message);
    throw new CustomError("Payment verification failed", 500);
  }
};



export const getAllOrderService = async () => {
  try {
    const orderData = await Order.find()
      .populate({
        path: "items.productId",
        model: "Products",
        select: "name url price"
      });

    return orderData;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};



export const updateStatusService = async (status, id) => {
  console.log("status:", status, "id:", id);

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid order ID format");
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { _id: id }, 
      { $set: { status: status } },
      { new: true }
    );

    if (!updatedOrder) {
      console.log("Order not found with the given ID");
      return null;
    }

    console.log(updatedOrder, "Updated Order");
    return updatedOrder;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};