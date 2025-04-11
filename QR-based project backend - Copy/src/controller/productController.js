import asyncHandler from "../Middlewares/asyncHandler.js";
import Products from "../model/productModel.js";
import { addProductService } from "../Service/ProductService.js";

// export const addProducts=asyncHandler(async(req,res)=>{

//     const data=req.body;
//     const {path}=req.file;

//     if(!data){     
//         res.status(400).json({
//         message:"Invalid data"
//         })
//     }
    
//     const { name,
        
//         category,
//         description,
//         price}=data;
     
//     const response=await Products({
//         name,
//         image:path,
//         category,
//         description,
//         price
//     });

//      await response.save()

//      res.status(200).json({
//         message:"Products added succesfully",response
//     })


 
// })


export const addProducts=asyncHandler(async(req,res)=>{
    const data=req.body;
    const file=req.file;

    if(!data||!file){
        return res.status(400).json({
            message:"Invalid data or image file missing"
        })
    }
    const result=await addProductService(data,file.path);
    res.status(200).json({
        message:"product added successfully",
        response:result
    })
})