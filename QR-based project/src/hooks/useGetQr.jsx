import React, { useEffect, useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useGetQr() {
    const[loading,setLoading]=useState(false)
    const[list,setList]=useState([])
    const getQr=async()=>{
        setLoading(true)
        try {

    
            const response=await axiosInstance.get('/admin/getQRcode')
            console.log(response.data.response)
            setList(response.data.response)
              
          } catch (error) {
            console.log(error)
              
          }finally{
            setLoading(false)
          
          }

    }
    useEffect(()=>{
        getQr()
    },[])
    return {loading,list}
}

export default useGetQr
