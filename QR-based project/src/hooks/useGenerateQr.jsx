import React, { useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useGenerateQr() {
 const [loading,setLoading]=useState(false)
 const [data,setData]=useState("")
 const generateQr=async(tableNo,capacity)=>{
    setLoading(true)
    try{
        const response=await axiosInstance.post(`/admin/generateQRcode?tableNo=${tableNo}&capacity=${capacity}`)
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
