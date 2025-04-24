import asyncHandler from "../Middlewares/asyncHandler.js";
import QRCode from 'qrcode'
import { STATUS } from "../utils/constant.js";
import Admin from "../model/adminModel.js";
import { generateToken } from "../utils/generateToken.js";
import Qrcode from "../model/qrcodeModel.js";
import { AdddStaffService, deleteStaffService, getAllProductService, StaffEditService } from "../Service/AdminService.js";
import CustomError from "../utils/customError.js";
import Staffs from "../model/StaffModel.js";
import Products from "../model/productModel.js";
// export const generateQRCode = asyncHandler(async (req, res) => {
//     const url = req.query.url || "https://your-restaurant.com/table/12";
//     const data = req.query.data || JSON.stringify({ table: "12", restaurant: "FitnessFoodie" });
  

//   const qrCodeDataURL = await generateQRCodeService(url, data);
//   return res.status(200).json({ qrCode: qrCodeDataURL });
// });



export const adminLogin=asyncHandler(async(req,res)=>{

const {email,password}=req.body;

if(!email || !password){
  return res.status(400).json({message:"email and password is required"})
}
const data={email,role:"admin"}
console.log(process.env.ADMIN_EMAIL,process.env.ADMIN_PASSWORD,"bdhdgeh")
if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){
  const token=await generateToken(data) 
  res.status(201).json({
    status:true,
    message:"Admin loged in ",
    token

  })
}else{
  res.status(400).json({
    status:false,
    message:"Inavalid user or credentials",
    token

  })
}


})








export const generateQRCode = asyncHandler(async (req, res) => {
  const { tableNo,capacity } = req.query;
  console.log(tableNo,capacity)
  // const baseUrl = "http://localhost:3000";
  const baseUrl="https://qr-based-hotel-management-system-nsa6-8mnvxh1l4.vercel.app/";
  // const baseUrl="https://www.flipkart.com/"

  // if (!tableNo||!capacity) {
  //   return res.status(400).json({ error: 'Please provide the "data" query parameter.' });
  // }

  const qrContent = `${baseUrl}?data=${encodeURIComponent(tableNo)}`;

  console.log(qrContent,"Table")

    const qrImageBuffer = await QRCode.toBuffer(qrContent);

    const base64Image = `data:image/png;base64,${qrImageBuffer.toString('base64')}`;
    const data=await Qrcode({tableNo,capacity,qrcode:base64Image})
   const response=await data.save()
   console.log(response)
    res.status(200).json({message:"qrcode generated",response });
 
  
});


export const getQrCode=asyncHandler(async(req,res)=>{
  const response=await Qrcode.find()
  res.status(200).json({message:" data fetched successfully",response})
})



 export const getAllProducts=asyncHandler(async(req,res)=>{
 
  const {category,search}=req.query;
  //properties are extracted from req.query and assigned to variable
  

  const{products,totalProducts}=await getAllProductService({
      category, 
      // page:parseInt(page,10),
      // limit:parseInt(limit,10),
      search,
  })
  if(products.length===0){
      res.status(200).json({
          status:STATUS.SUCCESS,
          message:'no products found'  //no products match the filter criteria
      })
  }else{
      res.status(200).json({
          status:STATUS.SUCCESS,
          products,
          totalProducts
      })
  }
});



export const getPaginatedProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default to page 1
    const limit = 10;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Products.find().skip(skip).limit(limit),
      Products.countDocuments()
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages,
      totalProducts: total
    });
  } catch (error) {
    console.error("Pagination Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};









// export const AddStaffs=asyncHandler(async(req,res)=>{

//   const data=req.body;
//   console.log(data,"bhhjb")


//   const file=req.file;

//   if(!data||!file){
//     return res.status(200).json({
//       message:"ivalid data"
//     })
//   }

//   const result=await AdddStaffService(data,file.path)
//   res.status(200).json({
//     message:"staff added successfully",
//     response:result

//   })

  

 

// })


export const AddStaffs=asyncHandler(async(req,res)=>{
  const   data=req.body;

  console.log(data,'addddd')


  // const file=req.file;

  if(!data){
   return res.status(400).json({
      message:"invalid data"
    })
  }


  const result=await AdddStaffService(data,)

  res.status(200).json({
    message:"staff added successfully",
    response:result

  })

})



export const editStaff=asyncHandler(async(req,res)=>{
  const data=req.body;
  const {id}=req.params;

  console.log(data,"bhehvevcge")

  if(!data||!id){
    throw new CustomError("invalid data or id ")
  }
  const result=await StaffEditService(data,id)  

  return res.status(200).json({
    message:"data edited successfully",
    result
   })

})



export const deleteStaff=asyncHandler(async(req,res)=>{

  const {id}=req.params;
  console.log(id,'delllll')
  if(!id){
    throw new CustomError("id not found",404)
  }
  const data=await deleteStaffService(id)
  res.status(200).json({
    status:STATUS.SUCCESS,
    message:"staff deleted successfully",
    data
  })
})


export const getStaffs=asyncHandler(async(req,res)=>{
    
  const staff=await Staffs.find()
  return res.status(200).json({
    message:"staff data fetched",
    staff
  })
})





export const getStaffById=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  const data=await Staffs.findById({_id:id})
  return res.status(200).json({
    message:"staff data fetched",
    data
  })
})