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
    // image:{
    //     type:String,
        
    // },
    phoneNo:{
        type:Number,
        
    },
    isDelete:{
        type:Boolean,
        default:false
    }

})

const Staffs=mongoose.model('Staffs',staffSchema)

export default Staffs;