import asyncHandler from "../Middlewares/asyncHandler.js";
import Products from "../model/productModel.js";
import { addProductService, deleteProductService, editProductService, getProductByIdService } from "../Service/ProductService.js";
import { STATUS } from "../utils/constant.js";
import CustomError from "../utils/customError.js";

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
console.log(data,"dataa")

    if(!data||!file){
        return res.status(400).json({
            message:"Invalid data or image file missing"
        })
    }
    const result=await addProductService(data,file.path);
    console.log(result,"resultt")
    res.status(200).json({
        message:"product added successfully",
        response:result
    })
})


// export const editProducts=asyncHandler(async(req,res)=>{

//     const id=req.params;
//     console.log(req.body,"gcgcgcgbodt")
//     const{updateItems}=req.body;

//     if(!_id){
//         throw new CustomError("product is not found",)
//     }
//     const editProduct=await editProductService(id,updateItems)

//     res.status(200).json({
//         status:STATUS.SUCCESS,
//         message:'product updated successfully',
//         editProduct   
//     })
// })
export const editProducts = asyncHandler(async (req, res) => {
    const data = req.body;
    const file = req.file;
    const { id } = req.params;
    if (!id || !data) {
        return res.status(400).json({
            message: "Product ID or data missing"
        });
    }

    const imagePath = file ? file.path : null;

    const result = await editProductService(id, data, imagePath);

    res.status(200).json({
        message: "Product updated successfully",
        response: result
    });
});


export const deleteProduct=asyncHandler(async(req,res)=>{
    const{id}=req.params
    if(!id){
        throw new CustomError("product is not found",404)
    }
    const deleteProduct=await deleteProductService(id)
    res.status(200).json({
        status:STATUS.SUCCESS,
        message:"product deleted successfully",
        deleteProduct

    })
})

export const singleProduct=asyncHandler(async(req,res)=>{
    const{id}=req.params;

    const productOne=await getProductByIdService(id)

    if(!productOne){
        throw new CustomError("Product not found",404)
    }
    res.status(200).json({
        status:STATUS.SUCCESS,
        productOne
    })
})