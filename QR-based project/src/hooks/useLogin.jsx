import React, {  useState } from 'react'
import axiosInstance from '../Api/axiosInstance'
import {useAuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

function useLogin() {
  const[loading,setLoading]=useState(false)
  const[login,SetLogin]=useState([])
  const {setRole}=useAuthContext();
  const navigate=useNavigate()
  const Login=async(data)=>{
         setLoading(true)
      try {
        const response=await axiosInstance.post('/admin/login',data)
        console.log(response.data.status,"enfjrnrj")
        if(response.data.status){
          setRole("Admin")
          localStorage.setItem("role","Admin")
          navigate("/admin")
        }

       
        
      } catch (error) {
        console.log(error)
        
      }finally{
        setLoading(true)

      }
  }

 return {loading,Login}
}

export default useLogin;
