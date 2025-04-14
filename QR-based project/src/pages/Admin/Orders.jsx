// import React, { useEffect, useState } from "react";


// const statusColors = {
//   completed: "bg-green-100 text-green-800",
//   preparing: "bg-yellow-100 text-yellow-800",
//   pending: "bg-red-100 text-red-800",
// };

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axiosInstance.get("/order/allOrders");
//         setOrders(res.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold text-center text-red-700 mb-8">📋 Admin Orders</h2>
//       <div className="overflow-x-auto rounded-xl shadow bg-white">
//         <table className="min-w-full text-left text-gray-800">
//           <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
//             <tr>
//               <th className="px-6 py-4">Image</th>
//               <th className="px-6 py-4">Food Name</th>
//               <th className="px-6 py-4">Price</th>
//               <th className="px-6 py-4">Quantity</th>
//               <th className="px-6 py-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.flatMap((order) =>
//               order.items.map((item, index) => (
//                 <tr key={`${order._id}-${index}`} className="border-b">
//                   <td className="px-6 py-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-14 h-14 rounded-lg object-cover"
//                     />
//                   </td>
//                   <td className="px-6 py-4 font-medium">{item.name}</td>
//                   <td className="px-6 py-4">₹{item.price}</td>
//                   <td className="px-6 py-4">{item.quantity}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`text-sm font-semibold px-3 py-1 rounded-full ${statusColors[order.status]}`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminOrders;
