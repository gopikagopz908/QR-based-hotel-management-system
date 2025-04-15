import React, { useState } from 'react';
import useGenerateQr from '../hooks/useGenerateQr';

const TableModal = ({ onClose }) => {
  const [capacity, setCapacity] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const {loading,generateQr}=useGenerateQr()


  const handleSubmit = async() => {
  const res=await generateQr(tableNumber,capacity) 
  
    setCapacity('');
    setTableNumber('');
    onClose();
    window.location.reload();
  };


  return (
    <div className="fixed inset-0 z-50  backdrop-blur-xs bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mx-4 sm:mx-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Table Info</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Table Number</label>
            <input
              type="number"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter table number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Capacity</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter seating capacity"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
