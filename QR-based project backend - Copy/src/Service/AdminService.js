import QRCode from 'qrcode';
import Products from '../model/productModel.js';

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

  const skip = (page - 1) * limit; //calculates  howmany documents to skip
 
  const totalProducts = await Products.countDocuments(query); //total product count

  const products = await Products.find(query).skip(skip).limit(limit);
  return {
    products,
    totalProducts
  };
};


