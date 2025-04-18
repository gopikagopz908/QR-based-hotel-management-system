import React, { useState } from "react";
import AddStaffModal from "../components/staffModal";

const StaffTable = () => {
    const staffData = [
        {
          name: "John Doe",
          email: "john@example.com",
          password: "********",
          role: "Manager",
          phoneNo: "9876543210"
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          password: "********",
          role: "Chef",
          phoneNo: "9123456789"
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            password: "********",
            role: "Chef",
            phoneNo: "9123456789"
          },
          {
            name: "Jane Smith",
            email: "jane@example.com",
            password: "********",
            role: "Chef",
            phoneNo: "9123456789"
          },
          {
            name: "Jane Smith",
            email: "jane@example.com",
            password: "********",
            role: "Chef",
            phoneNo: "9123456789"
          }
      ];
      
      const[isModal,setModal]=useState(false)

      function openModal(){
        setModal(true)
      }
      function closeModal(){
        setModal(false)
      }
  return (
    <div className="overflow-x-auto mt-10 px-4 ">
        <div className="flex justify-end p-4">
        <button onClick={openModal}
          
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
            <th className="p-3 text-left">Password</th>
            <th className="p-3 text-left">Role</th>

            <th className="p-3 text-left">Phone No</th> 
            <th className="p-3 text-left">Actions</th>                                                                                      
                                                                                     
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3 font-bold">{index + 1}</td>
              <td className="p-3">{staff.name}</td>
              <td className="p-3">{staff.email}</td>
              <td className="p-3">{staff.password}</td>
              <td className="p-3">{staff.role}</td>
              <td className="p-3">{staff.phoneNo}</td>
              <td className="p-3">
                    <td className="flex space-x-2">
                      <button  className="bg-black text-white px-3 py-1 rounded text-xs">
                        Delete
                      </button>
                    </td>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModal && <AddStaffModal onClose={closeModal}/>}
    </div>
  );
};

export default StaffTable;
