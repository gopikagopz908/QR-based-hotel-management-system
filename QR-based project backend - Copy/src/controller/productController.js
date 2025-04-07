import asyncHandler from "../Middlewares/asyncHandler.js";
import Products from "../model/productModel.js";

export const addProducts=asyncHandler(async(req,res)=>{

    const data=req.body;
    console.log(data,"gytrdfdsdsr")

    if(!data){     
        res.status(400).json({
        message:"Invalid data"
        })
    }
    const response=await Products(data);

     await response.save()

     res.status(200).json({
        message:"Products added succesfully",response
    })


 
})