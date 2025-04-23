import { useState } from "react";
import axiosInstance from "../Api/axiosInstance";



function useVerify(){

  const[loading,setLoading]=useState(false)

  const verifyOtp=async(data)=>{
    setLoading(true)
   try {
    const res=await axiosInstance.post('/user/otp/verify',data)
    console.log(res.data)
   } catch (error) {
    console.log(error)
    
   }finally{
    setLoading(false)
   }
    }
    return {loading,verifyOtp}

}
export default useVerify;