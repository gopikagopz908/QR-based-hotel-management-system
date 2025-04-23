import React, {  useState } from "react";
import axiosInstance from "../Api/axiosInstance";

function useSingleproduct() {
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);

  
  const GetSingle = async (id) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/product/${id}`);
      console.log(response,"ress");
      setSingleProduct(response.data.productOne);
      return response.data.productOne
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, singleProduct,GetSingle};
}

export default useSingleproduct;
