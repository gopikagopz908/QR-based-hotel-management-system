import asyncHandler from "../Middlewares/asyncHandler.js";
import Products from "../model/productModel.js";
import { STATUS } from "../utils/constant.js";
import CustomError from "../utils/customError.js";


export const addProductService=async(data,imagePath)=>{
    const{name,category,description,price}=data

    const newProduct=new Products(
        {
            name,
            image:imagePath,
            category,
            description,
            price
        }
    ) 
     const savedProduct=await newProduct.save()
console.log(savedProduct,"saved products")
     return savedProduct;
}


export const editProductService=async(_id,updateItems)=>{
   const existing=await Products.findById(_id)

   if(!existing){
    throw new CustomError("product is unavailable",400)
   }

   const data=await Products.findByIdAndUpdate({_id,isDelete:false},{$set:{...updateItems}},{new:true})
   return data
}

export const deleteProductService=async(id)=>{
    const existingProduct=await Products.findById(id)
    if(!existingProduct){
        throw new CustomError("product not found",404)
    }
    return await Products.findByIdAndUpdate(
        id,
        {isDelete:true},
        {new:true}
    )
}


export const getProductByIdService=async(id)=>{
   const productDetails=await Products.findById(id)
   if(!productDetails){
    throw new CustomError("product not found",404)
   } 
   return productDetails;
}