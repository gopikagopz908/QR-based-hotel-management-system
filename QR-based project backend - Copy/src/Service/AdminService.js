import QRCode from 'qrcode';
import Products from '../model/productModel.js';
import Staffs from '../model/StaffModel.js';
import CustomError from '../utils/customError.js';

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
  // page = 1,
  // limit = 10,
  search,
}) => {
  //sets default values for pagination
  const query = { isDelete: false };

  if (category) {
    //category filtering
   query.category = { $regex: `^${category}$`, $options: "i" }; //mongodbs regular exprsn
  }   
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }

  // const skip = (page - 1) * limit; //calculates  howmany documents to skip
 
  const totalProducts = await Products.countDocuments(query); //total product count

  // const products = await Products.find(query).skip(skip).limit(limit);
  const products = await Products.find(query);
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



export const AdddStaffService=async(data,filepath)=>{
      
  const{name,password,email,phoneNo,role}=data

  const newStaff=new Staffs({
    name,
    email,
    password,
    image:filepath,
    role
  })
   const savedStaff=newStaff.save()
   return savedStaff
}


export const StaffEditService=async(_id,...editItems)=>{

   const existing=await Staffs.findById(id)

   if(!existing){
    throw new CustomError("staff is unavailable",400)
   }

  const edit=await Staffs.findByIdAndUpdate({_id},{$set:{...editItems}},{new:true})
  return edit
}

export const deleteStaffService=async(id)=>{

  const existingstaff=await Staffs.findById(id)

  if(!existingstaff){
    throw new CustomError("staff not found",404)
  }
  const response=await Staffs.findByIdAndUpdate(
    id,
    {isDelete:true},
    {new:true}

  )
}