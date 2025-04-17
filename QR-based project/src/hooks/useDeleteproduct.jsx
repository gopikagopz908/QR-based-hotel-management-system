import React, {  useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useDeleteProduct() {
  const[loading,setLoading]=useState(false)
  const[deleteProduct,SetdeleteProduct]=useState([])
  const DeleteProduct=async(data)=>{
         setLoading(true)
      try {
        const response=await axiosInstance.post('/product/deleteProduct/:id',data)
        console.log(response,"enfjrnrj")
      } catch (error) {
        console.log(error)
        
      }finally{
        setLoading(true)

      }
  }

 return {loading,DeleteProduct}
}

export default useDeleteProduct;
