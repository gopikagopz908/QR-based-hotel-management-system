import React, { useState } from "react";

const ChefOrders = () => {
  const [orders, setOrders] = useState([
    {
      _id: "order1",
      items: [
        { name: "Grilled Chicken", quantity: 2 },
        { name: "Veg Salad", quantity: 1 },
      ],
      status: "Pending",
    },
    {
      _id: "order2",
      items: [
        { name: "Beef Fry", quantity: 3 },
        { name: "Chapati", quantity: 4 },
      ],
      status: "Pending",
    },
    {
      _id: "order3",
      items: [
        { name: "Protein Smoothie", quantity: 1 },
      ],
      status: "Prepared",
    },
  ]);

  const markAsPrepared = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, status: "Prepared" } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Chef Orders</h2>
      {orders.length === 0 ? (
        <p>No current orders</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-4 border rounded-md shadow-sm bg-white"
            >
              <h3 className="font-semibold">Order ID: {order._id}</h3>
              <ul className="mt-2 list-disc pl-5">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Qty: {item.quantity}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Status: <span className="font-medium">{order.status}</span>
              </p>
              {order.status !== "Prepared" && (
                <button
                  onClick={() => markAsPrepared(order._id)}
                  className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Mark as Prepared
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChefOrders;
