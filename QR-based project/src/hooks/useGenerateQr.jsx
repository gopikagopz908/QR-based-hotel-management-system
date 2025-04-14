import React, { useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useGenerateQr() {
 const [loading,setLoading]=useState(false)
 const [data,setData]=useState("")
 const generateQr=async(tableNo)=>{
    setLoading(true)
    try{
        const response=await axiosInstance.post(`/admin/generateQRcode?data=${tableNo}`)
        console.log(response?.data?.image,"ress")
         setData(response?.data?.image)
    }catch(error){
console.log(error)
    }finally{
        setLoading(false)
    }

 }

 return {generateQr,loading,data}
}

export default useGenerateQr
