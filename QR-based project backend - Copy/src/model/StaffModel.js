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
    // password:{
    //     type:String,
        
    // },
    role:{
        type:String,
        enum:['cheff','supplier'],
        required:true

    },
    image:{
        type:String,
        required:true
    },
    isDelete:{
        type:Boolean,
        required:true
    }

})

const Staffs=mongoose.model('Staffs',staffSchema)

export default Staffs;