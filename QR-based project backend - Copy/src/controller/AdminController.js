import asyncHandler from "../Middlewares/asyncHandler.js";
import { generateQRCodeService} from "../Service/AdminService.js";
import QRCode from 'qrcode'
import { STATUS } from "../utils/constant.js";
// export const generateQRCode = asyncHandler(async (req, res) => {
//     const url = req.query.url || "https://your-restaurant.com/table/12";
//     const data = req.query.data || JSON.stringify({ table: "12", restaurant: "FitnessFoodie" });
  

//   const qrCodeDataURL = await generateQRCodeService(url, data);
//   return res.status(200).json({ qrCode: qrCodeDataURL });
// });



export const generateQRCode = asyncHandler(async (req, res) => {
  const { data } = req.query;
  const baseUrl = "http://localhost:3000";

  if (!data) {
    return res.status(400).json({ error: 'Please provide the "data" query parameter.' });
  }

  const qrContent = `${baseUrl}/display?data=${encodeURIComponent(data)}`;

  try {
    const qrImageBuffer = await QRCode.toBuffer(qrContent);

    const base64Image = `data:image/png;base64,${qrImageBuffer.toString('base64')}`;

    res.status(200).json({ image: base64Image });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code', details: err.message });
  }
});



// export const getAllProducts=asyncHandler(async(req,res)=>{
//   console.log('hiii')
//   const {category,page=1,limit=10,search}=req.query;
//   //properties are extracted from req.query and assigned to variable
//   console.log(category)

//   const{products,pagination}=await getAllProductService({
//       category, 
//       page:parseInt(page,10),
//       limit:parseInt(limit,10),
//       search,
//   })
//   if(products.length===0){
//       res.status(200).json({
//           status:STATUS.SUCCESS,
//           message:'no products found'  //no products match the filter criteria
//       })
//   }else{
//       res.status(200).json({
//           status:STATUS.SUCCESS,
//           products,
//           pagination
//       })
//   }
// });
