import React, { useState } from 'react';

const AddStaffModal = ({  onClose, onSubmit }) => {
  const [staff, setStaff] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    phoneNo: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setStaff({ ...staff, image: files[0] });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(staff); // Call parent handler with staff data
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
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          <select
  name="role"
  className="w-full border rounded p-2"
  onChange={handleChange}
  required
  defaultValue=""
>
  <option value="" disabled>Select Role</option>
  <option value="chef">Cheff</option>
  <option value="supplier">Supplier</option>
</select>

          <input
            name="phoneNo"
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded p-2"
            onChange={handleChange}
            required
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            className="w-full"
            onChange={handleChange}
            required
          />

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
