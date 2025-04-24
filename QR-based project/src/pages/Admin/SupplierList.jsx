import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import axiosInstance from '../../Api/axiosInstance';

const  SupplierList = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const queryClient = useQueryClient();

  // Fetch all orders
  const { data = [], isLoading, isError,refetch } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const response = await axiosInstance.get('/order/getAllOrders');
      return response.data;
    },
  });





  const { mutate: updateOrderStatus } = useMutation({
    mutationFn: async ({ orderId, newStatus }) => {
      const response = await axiosInstance.patch(`order/orderStatus/${orderId}`, {
        status: newStatus,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['order']); 
    },
    onError: (error) => {
      console.error('Failed to update status:', error);
    },
  });

  
  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus({ orderId, newStatus });
    refetch()
  };


  console.log(data,"dataaa")
  const filteredOrders =data.order?.filter((order) => order.status ==="readyToServe");


      console.log(filteredOrders,"returnnnn")
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>

      

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
            <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Payment</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders?.map((order) => (
      <tr
      key={order._id}
      className="border-b hover:bg-gray-50 transition duration-200"
    >
      <td className="px-4 py-4 align-top">
        <div className="space-y-1">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="text-gray-500 font-medium">{idx + 1}.</span>
              <span className="text-gray-800">{item.productId.name}</span>
              <span className="text-gray-600">× {item.quantity}</span>
            </div>
          ))}
        </div>
      </td>
    
      <td className="px-4 py-4 text-sm text-gray-700 capitalize">
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
          {order.paymentMethod}
        </span>
      </td>
    
      <td className="px-4 py-4 font-semibold text-green-600 text-sm">
        ₹{order.total}
      </td>
    
      <td className="px-4 py-4">
        <button
          onClick={() => handleStatusChange(order._id,"Delivered" )}
          className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm transition transform hover:scale-105 
            ${
              order.status === "Delivered"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-orange-500 hover:bg-orange-500 text-white"
            }`}
        >
          Delivered
        </button>
      </td>
    
     
    </tr>
    
            ))}
            {filteredOrders?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  SupplierList;
