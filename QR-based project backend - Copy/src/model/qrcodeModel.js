import mongoose from "mongoose";


const QrSchema=new mongoose.Schema({
    tableNo:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    qrcode:{
        type:String,
        required:true
    }
})

const Qrcode=mongoose.model("Qrcode",QrSchema)

export default Qrcode;