import Products from "../model/productModel.js";


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

     return savedProduct;
}