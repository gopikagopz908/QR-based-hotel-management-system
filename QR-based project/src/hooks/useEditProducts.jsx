import React, { useState } from 'react';
import axiosInstance from '../Api/axiosInstance';

function useEditProduct() {
  const [loading, setLoading] = useState(false);

  const editProduct = async (id, updatedData) => {
    console.log(id,"idddd")
    console.log(updatedData,'hgdyfdyeg')
    setLoading(true);
    
    try {
      const response = await axiosInstance.patch(`/product/editProduct/${id}`,updatedData);
      console.log('Product updated:', response.data);
    } catch (error) {   
      console.error('Error updating product:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, editProduct };
}

export default useEditProduct;
