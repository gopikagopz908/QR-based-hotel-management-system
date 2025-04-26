import React, { useEffect, useState } from 'react';
import { StaffAdd, StaffEdit } from '../hooks/staffHooks';
import axiosInstance from '../Api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const AddStaffModal = ({  onClose,id,setId}) => {
  const [staff, setStaff] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    phoneNo: '',
    image: null,
  });
  // const { mutate, isSuccess, isError, error } = useAddStaff();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setStaff({ ...staff, image: files[0] });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  console.log(id,"idddd in modal")

 const {
      data=[],isLoading,isError
   }=useQuery({
      queryKey:["staff"],
      queryFn:async()=>{
      const response=await axiosInstance.get(`admin/getStaffById/${id}`)
        return response.data.data
      },
      enabled: !!id
   })

  useEffect(() => {
    if (data) {
 
      setStaff({
        name: data.name || '',
        email: data.email || '',
        password: data.password || '',
        role: data.role || '',
        phoneNo: data.phoneNo || '',
        image: null,
      });
    }
  }, [id]);
 
const handleSubmit = async(e) => {
e.preventDefault();
if(id){
await StaffEdit(staff,id)
}else{
 await StaffAdd(staff)
}
setId("")
onClose()
 };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative border-2 border-red-500">
      <h2 className="text-xl font-semibold mb-4 text-center text-red-700">Add Staff Member</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={staff.name}
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={staff.email}
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          
      <input
      name="password"
      type="password"
      placeholder="Password"
      value={staff.password}
      className="w-full border rounded p-2"
       onChange={handleChange}
      required
    />

    
  <select
  name="role"
  className="w-full border rounded p-2"
  onChange={handleChange}
  required
  defaultValue={staff.role}
  value={staff.role}
>
  <option value="" disabled>Select Role</option>
  <option value="cheff">Cheff</option>
  <option value="supplier">Supplier</option>
</select>

          <input
            name="phoneNo"
            type="tel"
            placeholder="Phone Number"
            value={staff.phoneNo}
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          {/* <input
            name="image"
            type="file"
            accept="image/*"
            className="w-full"
            onChange={handleChange}
            required
          /> */}
        
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-800 text-white rounded hover:bg-black"
            >
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffModal;
