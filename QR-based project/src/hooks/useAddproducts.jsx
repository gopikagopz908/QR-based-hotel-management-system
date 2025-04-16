import React, {  useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useAddProduct() {
  const[loading,setLoading]=useState(false)
  const[addProduct,SetaddProduct]=useState([])
  const AddProduct=async(data)=>{
         setLoading(true)
      try {
        const response=await axiosInstance.post('/product',data)
        console.log(response,"enfjrnrj")
      } catch (error) {
        console.log(error)
        
      }finally{
        setLoading(true)

      }
  }

 return {loading,AddProduct}
}

export default useAddProduct;
