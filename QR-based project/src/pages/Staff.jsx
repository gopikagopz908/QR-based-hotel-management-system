import React, { useState } from "react";
import AddStaffModal from "../components/staffModal";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";
import { StaffDelete } from "../hooks/staffHooks";
import { StaffEditService } from "../../../QR-based project backend - Copy/src/Service/AdminService";

const StaffTable = () => {
    
   
      
      const[isModal,setModal]=useState(false)

      const[id,setId]=useState('')

 
     
      const {
        data=[],isLoading,isError,refetch
        
      }=useQuery({
        queryKey:["staffs"],
        queryFn:async()=>{
       
          const response=await axiosInstance.get("/admin/getStaff")
          return response.data.staff
        }

      })

      function openModal(id){
        setId(id)
        setModal(true)
      }


      function closeModal(){
        console.log("success")
        refetch();
        setModal(false)
       
 }

      const handleDelete=(id)=>{
        StaffDelete(id)
        refetch()
      }
     
  return (
    <div className="overflow-x-auto mt-2 px-4 ">
        <div className="flex justify-end p-4">
        <button onClick={() => openModal()}
          
          className="bg-red-800  hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add Staffs
        </button>
        </div>
      <table className="table-auto w-full max-w-6xl mx-auto text-sm border rounded-md overflow-hidden shadow-md">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>

            <th className="p-3 text-left">Phone No</th> 
            <th className="p-3 text-left">Actions</th> 
            <th className="p-3 text-left"></th>                                                                                      
                                                                                     
                                                                                     
          </tr>
        </thead>
        <tbody>
          {data.map((staff, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3 font-bold">{index + 1}</td>
              <td className="p-3">{staff.name}</td>
              <td className="p-3">{staff.email}</td>
              <td className="p-3">{staff.role}</td>
              <td className="p-3">{staff.phoneNo}</td>
              <td className="p-3">
                    <td className="flex space-x-2">
                      <button onClick={()=>handleDelete(staff._id)}  className="bg-black text-white px-3 py-1 rounded text-xs">
                        Delete
                      </button>
                    </td>
                    </td>
                    <td className="p-3">
                    <td className="flex space-x-2">
                      <button onClick={()=>openModal(staff._id)}  className="bg-black text-white px-3 py-1 rounded text-xs">
                        Edit
                      </button>
                    </td>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModal && <AddStaffModal id={id} 
          onClose={() => setModal(false)}
          onSuccess={() => {
            refetch();
            setModal(false);
          }}

        />}
    </div>
  );
};

export default StaffTable;
