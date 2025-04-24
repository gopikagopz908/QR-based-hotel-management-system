import React, { useState } from 'react'
import axiosInstance from '../Api/axiosInstance';
import { useAuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export  const useStaffLogin = () => {
    const[loading,setLoading]=useState(false)
      const {setRole}=useAuthContext();
     const navigate=useNavigate()
    const StaffLogin=async(staffData)=>{
         setLoading(true)
        try {
            console.log("success")
            const response = await axiosInstance.post('/staff/staffLogin',staffData);
            console.log(response,"ressss")
            localStorage.setItem('role',response.data.role);
            setRole(response.data.role)
            if(response.status===201){
                navigate('/admin')
            }
             
            return response.data;
           
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
      
    }
   return{StaffLogin,loading} 
}

export default useStaffLogin
