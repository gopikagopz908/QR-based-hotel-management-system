import mongoose from "mongoose";


const staffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        require:true
        
    },
    role:{
        type:String,
        enum:['cheff','supplier'],
        required:true

    },

    phoneNo:{
        type:Number,
        
    },
    priority:{
        type:Number,
        default:1
    },
    isDelete:{
        type:Boolean,
        default:false
    }

})

const Staffs=mongoose.model('Staffs',staffSchema)

export default Staffs;