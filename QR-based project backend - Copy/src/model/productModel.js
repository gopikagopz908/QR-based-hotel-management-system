import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required:true,
   },
   description:{
    type:String,
    required:true,
   },
  
   category: {
    type: String,
    enum: ['nonVeg', 'Veg', 'Desserts', 'Drinks'], // Allowed categories
    required: true
  },
})

const Products=mongoose.model("Products",productSchema)

export default  Products