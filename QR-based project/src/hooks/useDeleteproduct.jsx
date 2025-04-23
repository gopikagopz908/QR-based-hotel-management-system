import React, {  useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useDeleteProduct() {
  const[loading,setLoading]=useState(false)
  // const[deleteProduct,SetdeleteProduct]=useState([])
  const DeleteProduct=async(id)=>{
    console.log(id,"idddddd")
         setLoading(true)
      try {
        const response=await axiosInstance.delete(`/product/deleteProduct/${id}`)
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
