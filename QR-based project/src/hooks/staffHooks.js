import axiosInstance from "../Api/axiosInstance";
// import { useMutation } from '@tanstack/react-query';


export const StaffAdd=async(staffData)=>{
    console.log("success")
    const response = await axiosInstance.post('/admin/addStaff',staffData);
    console.log(response,"ressss")
    return response.data;
}


export const StaffEdit=async(editdata,id)=>{
    const response=await axiosInstance.put(`/admin/editStaff/${id}`,editdata)
    return response.data;
}

export const StaffDelete=async(id)=>{
    const response=await axiosInstance.delete(`/admin/deleteStaff/${id}`)
    console.log(response,"dellllll")
    return response.data;
}







// export const useAddStaff = () => {
//     return useMutation(StaffAdd);
//   };
