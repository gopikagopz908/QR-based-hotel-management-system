import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import axiosInstance from '../../Api/axiosInstance';




// const statusColors = {
//   Completed: 'bg-green-200 text-green-800',
//   Preparing: 'bg-yellow-200 text-yellow-800',
//   Pending: 'bg-red-200 text-red-800',
// };

// const AdminOrdersPage = () => {
//   const [filterStatus, setFilterStatus] = useState('All');

//   const filteredOrders =
//     filterStatus === 'All'
//       ? dummyOrders
//       : dummyOrders.filter((order) => order.status === filterStatus);


//        const {
//           data=[],isLoading,isError,
//         }=useQuery({
//           queryKey:["order",],
//           queryFn:async()=>{
         
//             const response=await axiosInstance.get("/order/getAllOrders")
//             return response.data
//           }
//         })
//      console.log(data.order,"isssssss") 

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 text-red-800">All Orders</h1>

      {/* Status Filter */}
      {/* <div className="mb-4 flex gap-2">
        {['All', 'Pending', 'Preparing', 'Completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-1 rounded-full border ${
              filterStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div> */}

      {/* Orders Table */}
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-100  uppercase text-red-600">
//             <tr>
//               <th className="px-4 py-2">Order ID</th>
              

//               <th className="px-4 py-2">Items</th>
//               <th className="px-4 py-2">Payment</th>
//               <th className="px-4 py-2">Total</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.order?.map((order) => (
//               <tr key={order._id} className="border-b">
//                 <td className="px-4 py-2">{order._id}</td>
//                 <td className="px-4 py-2">
//                   {order.items.map((item, idx) => (
//                     <div key={idx}>
//                       {order.name} {item.quantity}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="px-4 py-2">{order.paymentMethod}</td>
//                 <td className="px-4 py-2 font-semibold">₹{order.total}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded-full [order.status] || 'bg-gray-200 text-gray-800'}`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {data?.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminOrdersPage;

const AdminOrdersPage = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const queryClient = useQueryClient();

  // Fetch all orders
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const response = await axiosInstance.get('/order/getAllOrders');
      return response.data;
    },
  });






  // Mutation for updating order status
  const { mutate: updateOrderStatus } = useMutation({
    mutationFn: async ({ orderId, newStatus }) => {
      const response = await axiosInstance.put(`/order/updateStatus/${orderId}`, {
        status: newStatus,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['order']); // Refetch orders on success
    },
    onError: (error) => {
      console.error('Failed to update status:', error);
    },
  });

  // Handle change
  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus({ orderId, newStatus });
  };

  // Apply filter
  const filteredOrders =
    filterStatus === 'All'
      ? data.order
      : data.order?.filter((order) => order.status === filterStatus);


      console.log(filteredOrders,"returnnnn")
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>

      {/* Status Filter Buttons */}
      <div className="mb-4 flex gap-2">
        {['All', 'Placed', 'ReadyToServe', 'Delivered'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-1 rounded-full border ${
              filterStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

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
          className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm transition transform hover:scale-105 
            ${
              order.status === "placed"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
        >
          Ready to Serve
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

export default AdminOrdersPage;
