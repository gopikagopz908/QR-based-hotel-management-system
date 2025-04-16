import React, { useEffect, useState } from 'react'
import axiosInstance from '../Api/axiosInstance'

function useLogin() {
  const[loading,setLoading]=useState(false)
  const[login,SetLogin]=useState([])

  const Login=async()=>{
         setLoading(true)
      try {
        const response=await axiosInstance.post('/admin/login')
         login(response.data)
        
      } catch (error) {
        console.log(error)
        
      }finally{
        setLoading(true)

      }
  }
  useEffect(()=>{
     login()
  },[])
 return {loading,login}
}

export default useLogin;
