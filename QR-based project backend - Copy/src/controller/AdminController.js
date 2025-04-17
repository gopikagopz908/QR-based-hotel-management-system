import asyncHandler from "../Middlewares/asyncHandler.js";
import QRCode from 'qrcode'
import { STATUS } from "../utils/constant.js";
import Admin from "../model/adminModel.js";
import { generateToken } from "../utils/generateToken.js";
import Qrcode from "../model/qrcodeModel.js";
import { getAllProductService } from "../Service/AdminService.js";
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
