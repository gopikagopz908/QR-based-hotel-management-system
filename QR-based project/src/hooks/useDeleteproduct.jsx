import React, {  useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useDeleteProduct() {
  const[loading,setLoading]=useState(false)
  // const[deleteProduct,SetdeleteProduct]=useState([])
  const deleteProduct=async(id)=>{
    console.log(id,"idddddd in hook")
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

 return {loading,deleteProduct}
}

export default useDeleteProduct;
