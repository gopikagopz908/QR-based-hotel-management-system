

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Orders = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const initialItems = state?.selectedItems?.map((item) => ({
//     ...item,
//     quantity: item.quantity || 1,
//   })) || [];

//   const [items, setItems] = useState(initialItems);

//   const increaseQty = (id) => {
//     const updated = items.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setItems(updated);
//   };

//   const decreaseQty = (id) => {
//     const updated = items.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setItems(updated);
//   };

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto mt-20 px-6 pb-20">
//       <h1 className="text-5xl font-bold mb-28 text-center text-red-800 font-poppins">
//         🧾 Your Order Summary
//       </h1>

//       {items.length === 0 ? (
//         <p className="text-center text-xl text-gray-600">No items selected.</p>
//       ) : (
//         <div className="space-y-10">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl shadow-xl p-10 flex gap-8 items-center justify-between relative transition-all duration-300 hover:scale-[1.01]"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-50 h-50 object-cover rounded-2xl border-2 border-gray-200 shadow-sm"
//               />

//               <div className="flex-1 space-y-2">
//                 <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
//                 <p className="text-gray-500 text-lg">{item.description}</p>
//                 <p className="text-4xl text-red-600 font-semibold">
//                   ₹{item.price}
//                 </p>
//               </div>

//               <div className="flex items-center gap-6">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="w-12 h-12 rounded-full bg-gray-200 text-3xl font-bold hover:bg-gray-300 transition"
//                 >
//                   −
//                 </button>
//                 <span className="text-2xl font-semibold">{item.quantity}</span>
//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="w-12 h-12 rounded-full bg-gray-200 text-3xl font-bold hover:bg-gray-300 transition"
//                 >
//                   +
//                 </button>
//               </div>

//               <div className="absolute bottom-5 right-6 text-3xl font-bold text-black-600">
//              Total ₹{item.price * item.quantity}
//               </div>
//             </div>
//           ))}

// <div className="mt-14 flex justify-between items-center bg-gray-100 rounded-2xl shadow-md px-8 py-6 w-full max-w-5xl mx-auto">
//   <div className="text-3xl font-bold text-red-700">
//     Total: ₹{total}
//   </div>
//   <button
//     onClick={() => alert("Proceeding to payment...")}
//     className="bg-red-800 text-white text-xl font-semibold px-8 py-5 rounded-full hover:bg-red-700 transition"
//   >
//     Pay Now
//   </button>
// </div>

//         </div>
//       )}

//       <div className="flex justify-center mt-16">
//         <button
//           onClick={() => navigate("/menu")}
//           className="bg-black text-white px-10 py-4 rounded-full text-2xl font-semibold hover:bg-red-700 transition"
//         >
//           Back to Menu
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Orders = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialItems =
    state?.selectedItems?.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    })) || [];

  const [items, setItems] = useState(initialItems);

  const increaseQty = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className=" mx-auto mt-20 px-4 pb-20 bg-gray-200 ">
      <h1 className="text-4xl sm:text-5xl  lg:text-8xl font-bold mb-20 text-center text-red-800 font-poppins">
        🧾 Your Order Summary
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No items selected.</p>
      ) : (
        <div className="space-y-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col sm:flex-row justify-between gap-6 items-center transition-all duration-300 hover:scale-[1.01] 
              w-full sm:w-[90%] md:w-[80%] lg:w-[60%]  mx-auto"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-48 h-auto lg:w-80 object-cover rounded-2xl border-2 border-gray-200 shadow-sm"
              />

              {/* Info */}
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h2 className="text-2xl lg:text-6xl sm:text-3xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-base sm:text-lg lg:text-2xl">{item.description}</p>
                <p className="text-2xl  sm:text-4xl lg:text-6xl text-red-600 font-semibold">₹{item.price}</p>
              </div>

              {/* Quantity + Total */}
              <div className="flex flex-col sm:items-end items-center gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-200 text-2xl sm:text-3xl lg:text-6xl font-bold hover:bg-gray-300 transition"
                  >
                    −
                  </button>
                  <span className="text-xl sm:text-2xl lg:text-6xl font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-200 text-2xl sm:text-3xl lg:text-6xl font-bold hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
                <div className="text-xl sm:text-2xl lg:text-6xl font-bold text-black">
                Total : ₹{item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="mt-14 flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-2xl shadow-md px-6 sm:px-10 py-6 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto gap-4">
            <div className="text-2xl sm:text-3xl lg:text-7xl font-bold text-red-700">
              Total: ₹{total}
            </div>
            <button
              onClick={() => alert("Proceeding to payment...")}
              className="bg-red-800 text-white text-lg sm:text-xl  lg:text-6xl font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:bg-red-700 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}

      {/* Back to Menu Button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => navigate("/menu")}
          className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-xl sm:text-2xl lg:text-4xl font-semibold hover:bg-red-700 transition"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Orders;
