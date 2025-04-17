import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance";

function useSingleproduct() {
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);
  const GetSingle = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/product/:id");
      console.log(response.data.response);
      setSingleProduct(response.data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetSingle();
  }, []);
  return { loading, singleProduct };
}

export default useSingleproduct;
