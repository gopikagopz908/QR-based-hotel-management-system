import QRCode from 'qrcode';
import Products from '../model/productModel.js';
import Staffs from '../model/StaffModel.js';
import CustomError from '../utils/customError.js';
import bcrypt from "bcryptjs";

// export const generateQRCodeService = async (url, data) => {
//   if (!url || !data) {
//     throw new Error('Both "url" and "data" are required.');
//   }

//   const qrContent = JSON.stringify({ url, data });
//   const qrCodeDataURL = await QRCode.toDataURL(qrContent);

//   return qrCodeDataURL;
// };

export const getAllProductService = async ({
  category,
  page = 1,
  limit = 10,
  search,
}) => {

  const query = { isDelete: false };

  if (category) {
    
   query.category = { $regex: `^${category}$`, $options: "i" }; 
  }   
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }

   const skip = (page - 1) * limit; 
 
  const totalProducts = await Products.countDocuments(query); 

  // const products = await Products.find(query).skip(skip).limit(limit);
  // const products = await Products.find(query);
  const products = await Products.aggregate([
    { $match: query },
    {
      $addFields: {
        hasCreatedAt: { $cond: [{ $ifNull: ["$createdAt", false] }, 1, 0] },
      },
    },
    {
      $sort: {
        hasCreatedAt: -1,      // First: items that have createdAt
        createdAt: -1,         // Then: sort by newest
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);
  
  return {
    products,
    totalProducts
  };
};











// export const AdddStaffService=async(data,imagePath)=>{
//   const{name,email,password,role,phoneNo}=data

//   const newStaff=new Staffs({
//      name,
//      password,
//      email,
//      phoneNo,
//      role,
//      image:imagePath

//   })
//   const savedStaff=await newStaff.save()
//   return savedStaff
// }



export const AdddStaffService=async(data)=>{
      
  const{name,password,email,phoneNo,role}=data

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newStaff=new Staffs({
    name,
    email,
    password:hash,
    // image:filepath,
    role,
    phoneNo
  })
   const savedStaff=newStaff.save()
   return savedStaff
}


export const StaffEditService=async(data,id)=>{

     const edit=await Staffs.findByIdAndUpdate({_id:id},{$set:{...data}},{new:true})
     console.log(edit,"editttttt")
  return edit
}

export const deleteStaffService=async(id)=>{

  const existingstaff=await Staffs.findById(id)

  if(!existingstaff){
    throw new CustomError("staff not found",404)
  }
  const response=await Staffs.findByIdAndDelete(
    id,
    {isDelete:true},
    {new:true}
)

console.log(response,"ressssponssss")
}