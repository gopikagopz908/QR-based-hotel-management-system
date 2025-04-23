import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[{
        productId:{   
            type:mongoose.Types.ObjectId,
            ref:'product',
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }],
    
    paymentMethod:{
        type:String,
        required:true
    },
    razorpayOrderId:{
        type:String
    },
    total:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["placed","readyToServe","delivered"],
        default:"placed"
    }
},
    {
        timestamps:true,
    })

const Order=mongoose.model('Order',orderSchema)
export default Order;