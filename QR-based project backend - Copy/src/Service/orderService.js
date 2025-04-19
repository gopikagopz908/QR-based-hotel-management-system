import razorpayInstance from "../configuration/razorpay.js";
import Order from "../model/orderModel.js";
import Products from "../model/productModel.js";
import CustomError from "../utils/customError.js";

export const addOrderService = async (paymentMethod, items, total) => {
  const order = new Order({
    //   user: userId,
    items: [],

    paymentMethod,
    total,
  });
  
  for (let item of items) {
    const product = await Products.findById(item.productId);
    if (!product) {
      throw new CustomError(`Insufficient quantity for product: ${product}`);
    }

    order.items.push({ productId: item.productId, quantity: item.quantity });
  }

  if (paymentMethod === "razorpay") {
    const options = {
      amount: total,
      currency: "INR",
      receipt: `order_receipt_${order._id}`,
      payment_capture: 1,
    };

    //create order with rayzorpay
    try {
      const razorpayOrder = await razorpayInstance.orders.create(options);
      order.razorpayOrderId = razorpayOrder.id;

      await order.save();
    } catch (error) {
      console.log(error);
      throw new CustomError("Rayzorpay order creation failed");
    }
  }
  return { order, razorpayOrderId: order.razorpayOrderId };
};

export const verifyPaymentService = async (paymentId, razorpayOrderId) => {
    

  const order = await Order.findOne({ razorpayOrderId });
  
  if (!order || order.razorpayOrderId != razorpayOrderId) {
    throw new CustomError("order is not found", 404);
  }
  try {
    
    const paymentDetails = await razorpayInstance.payments.fetch(paymentId);
    if (paymentDetails.status === "captured") {
      order.razorpayPaymentStatus = "paid";
      order.status = "placed";
      await order.save();

      return true;
    } else {
      throw new CustomError("Payment verification failed");
    }
  } catch (error) {
    console.error("Error during payment verification:", error);
    throw new CustomError("Payment verification failed", 500);
  }
};


// export const showOrderService=async(id)=>{


// }