

// import React, { useState } from "react";
// import Card from "./components/card/Card";
// import { useNavigate } from "react-router-dom";

// const Menu = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedItems, setSelectedItems] = useState([]);

//   const toggleSelect = (item) => {
//     const isSelected = selectedItems.some((i) => i.id === item.id);
//     if (isSelected) {
//       setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const menuItems = [
//     {
//       id: 1,
//       name: "Grilled Chicken",
//       price: 250,
//       category: "Non-Veg",
//       description: "Juicy, tender grilled chicken with aromatic spices.",
//       image:
//         "https://i.pinimg.com/736x/da/a6/32/daa632ed5f4af5cd01ef2ac136bb2ef0.jpg",
//     },
//     {
//       id: 2,
//       name: "Paneer Tikka",
//       price: 200,
//       category: "Veg",
//       description: "Marinated paneer cubes grilled to perfection.",
//       image:
//         "https://i.pinimg.com/736x/16/05/1f/16051fea26783e6d91f02877b0cc7404.jpg",
//     },
//     {
//       id: 3,
//       name: "Fish Fry",
//       price: 300,
//       category: "Non-Veg",
//       description: "Classic Italian pizza topped with fresh basil and cheese.",
//       image:
//         "https://i.pinimg.com/736x/fa/8c/96/fa8c96b97070b002f53e1c6f098291c6.jpg",
//     },
//     {
//       id: 4,
//       name: "Butter Chicken Pizza",
//       price: 350,
//       category: "Non-Veg",
//       description: "Rich and creamy tomato-based curry with tender chicken.",
//       image:
//         "https://i.pinimg.com/736x/e2/63/e5/e263e50bc39528becbd777a271e297af.jpg",
//     },
//     {
//       id: 5,
//       name: "Chocolate Brownie",
//       price: 150,
//       category: "Desserts",
//       description: "Warm, fudgy brownie topped with melted chocolate.",
//       image:
//         "https://i.pinimg.com/736x/99/50/c8/9950c8a0422da4d8afac124be6f2fdf9.jpg",
//     },
//     {
//       id: 6,
//       name: "Gulab Jamun",
//       price: 120,
//       category: "Desserts",
//       description: "Soft, spongy, and soaked in rich sugar syrup.",
//       image:
//         "https://i.pinimg.com/736x/e3/16/6d/e3166d18c10fc639b16fe3a1de8f9af9.jpg",
//     },
//     {
//       id: 7,
//       name: "Chicken Biriyani",
//       price: 200,
//       category: "Non-Veg",
//       description: "Aromatic and richly spiced, Biryani is a royal dish made with fragrant basmati rice.",
//       image:
//         "https://i.pinimg.com/736x/1a/59/f0/1a59f0e988c227075ce7a6e261f9f362.jpg",
//     },
//     {
//       id: 8,
//       name: "Cold Smoothie",
//       price: 120,
//       category: "Drinks",
//       description: "Chilled coffee with a smooth and creamy texture.",
//       image:
//         "https://i.pinimg.com/736x/3c/4e/6d/3c4e6d79f4525c4924f57b2db7e95433.jpg",
//     },
//     {
//       id: 9,
//       name: "Cold Coffee",
//       price: 120,
//       category: "Drinks",
//       description: "Chilled coffee with a smooth and creamy texture.",
//       image:
//         "https://i.pinimg.com/736x/a7/c2/55/a7c255c3e78d2d36e70a36f059e94eac.jpg",
//     },
//     {
//       id: 10,
//       name: "Noodles",
//       price: 150,
//       category: "Veg",
//       description: "Chilled noodles with eggs.",
//       image:
//         "https://i.pinimg.com/736x/8e/a1/38/8ea138d9fedca1f76cf4310b00e6c452.jpg",
//     },
//     {
//       id: 11,
//       name: "Veg Manchurian",
//       price: 180,
//       category: "Veg",
//       description: "Crispy veggie balls tossed in a tangy Indo-Chinese sauce.",
//       image:
//         "https://i.pinimg.com/736x/19/cf/e3/19cfe3d8cf5c73220ffe80885f63645c.jpg",
//     },
//     {
//       id: 15,
//       name: "South Indian Veg Thali",
//       price: 220,
//       category: "Veg",
//       description: "Traditional thali with rice, sambar, rasam, poriyal, kootu, papad, and pickle.",
//       image:
//         "https://i.pinimg.com/736x/ae/fc/a3/aefca354bdbeb7b74b3d41e0857ec966.jpg",
//     },

    
//   ];

//   const categories = ["All", "Veg", "Non-Veg", "Drinks", "Desserts"];

//   const filteredItems =
//     activeCategory === "All"
//       ? menuItems
//       : menuItems.filter((item) => item.category === activeCategory);

//   const categoryColors = {
//     Veg: "bg-green-500",
//     "Non-Veg": "bg-yellow-500",
//     Drinks: "bg-pink-500",
//     Desserts: "bg-purple-500",
//     All: "bg-red-500",
//   };

//   const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
//   const navigate=useNavigate()

//   return (
//     <div className=" mx-auto mt-40 space-y-24 bg-red-500">
//       <h1 className="text-8xl font-bold text-center text-gray-800 font-primary">
//         🍽️ Our Menu
//       </h1>
//       <p className="text-2xl text-gray-700 leading-relaxed tracking-wide font-light text-center font-poppins max-w-4xl mx-auto">
//         We take every detail into account, bringing you the finest ingredients
//         and flavors to craft an unforgettable dining experience.
//       </p>

//       <div className="flex items-center justify-center">
//         <div className="flex gap-4 flex-wrap justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`w-32 h-15 px-5 py-5 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-red-800 text-white"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
// <div className="bg-gray-200 w-full flex justify-center">
// <div className="bg-blue-600 w-2/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-12">
//         {filteredItems.map((item) => {
//           const isSelected = selectedItems.some((i) => i.id === item.id);
//           return (
//             <div
//               key={item.id}
//               className="cursor-pointer"
//               onClick={() => toggleSelect(item)}
//             >
//               <Card
//                 className={`bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 ${
//                   isSelected ? "ring-4 ring-red-400" : ""
//                 }`}
//                 image={item.image}
//                 name={item.name}
//                 price={item.price}
//                 description={item.description}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-40 object-cover rounded-lg mb-3"
//                 />
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {item.name}
//                 </h2>
//                 <span
//                   className={`inline-block text-white text-sm font-medium px-3 py-1 rounded-full mt-2 ${
//                     categoryColors[item.category] || "bg-gray-500"
//                   }`}
//                 >
//                   {item.category}
//                 </span>
//                 <p className="text-gray-600 text-sm mt-2">{item.description}</p>
//                 <p className="text-lg font-bold text-red-500 mt-3">
//                   ₹{item.price}
//                 </p>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
// </div>
  

//       {selectedItems.length > 0 && (
//         <div className="fixed left-1/2 transform -translate-x-1/2 bottom-24 z-50 bg-white shadow-lg border rounded-2xl px-8 py-4 w-full  max-w-7xl flex justify-between items-center">
//           <div>
//             <h2 className=" font-medium text-gray-700 text-4xl">
//               Selected Items:{" "}
//               <span className="font-bold text-4xl">{selectedItems.length}</span>
//             </h2>
//             <p className="text-sm text-gray-600">
//                <span className="font-semibold text-4xl">Total:₹{total}</span>
//             </p>
//           </div>
//           <button className="bg-red-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition text-4xl font-primary"
//           onClick={()=>navigate("/orders",{state:{selectedItems,total}})}>
//             Place Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;


import React, { useState } from "react";
import Card from "./components/card/Card";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (item) => {
    const isSelected = selectedItems.some((i) => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "Grilled Chicken",
      price: 250,
      category: "Non-Veg",
      description: "Juicy, tender grilled chicken with aromatic spices.",
      image: "https://i.pinimg.com/736x/da/a6/32/daa632ed5f4af5cd01ef2ac136bb2ef0.jpg",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 200,
      category: "Veg",
      description: "Marinated paneer cubes grilled to perfection.",
      image: "https://i.pinimg.com/736x/16/05/1f/16051fea26783e6d91f02877b0cc7404.jpg",
    },
    {
      id: 3,
      name: "Fish Fry",
      price: 300,
      category: "Non-Veg",
      description: "Classic Italian pizza topped with fresh basil and cheese.",
      image: "https://i.pinimg.com/736x/fa/8c/96/fa8c96b97070b002f53e1c6f098291c6.jpg",
    },
    {
      id: 4,
      name: "Butter Chicken Pizza",
      price: 350,
      category: "Non-Veg",
      description: "Rich and creamy tomato-based curry with tender chicken.",
      image: "https://i.pinimg.com/736x/e2/63/e5/e263e50bc39528becbd777a271e297af.jpg",
    },
    {
      id: 5,
      name: "Chocolate Brownie",
      price: 150,
      category: "Desserts",
      description: "Warm, fudgy brownie topped with melted chocolate.",
      image: "https://i.pinimg.com/736x/99/50/c8/9950c8a0422da4d8afac124be6f2fdf9.jpg",
    },
    {
      id: 6,
      name: "Gulab Jamun",
      price: 120,
      category: "Desserts",
      description: "Soft, spongy, and soaked in rich sugar syrup.",
      image: "https://i.pinimg.com/736x/e3/16/6d/e3166d18c10fc639b16fe3a1de8f9af9.jpg",
    },
    {
      id: 7,
      name: "Chicken Biriyani",
      price: 200,
      category: "Non-Veg",
      description: "Aromatic and richly spiced, Biryani is a royal dish made with fragrant basmati rice.",
      image: "https://i.pinimg.com/736x/1a/59/f0/1a59f0e988c227075ce7a6e261f9f362.jpg",
    },
    {
      id: 8,
      name: "Cold Smoothie",
      price: 120,
      category: "Drinks",
      description: "Chilled coffee with a smooth and creamy texture.",
      image: "https://i.pinimg.com/736x/3c/4e/6d/3c4e6d79f4525c4924f57b2db7e95433.jpg",
    },
    {
      id: 9,
      name: "Cold Coffee",
      price: 120,
      category: "Drinks",
      description: "Chilled coffee with a smooth and creamy texture.",
      image: "https://i.pinimg.com/736x/a7/c2/55/a7c255c3e78d2d36e70a36f059e94eac.jpg",
    },
    {
      id: 10,
      name: "Noodles",
      price: 150,
      category: "Veg",
      description: "Chilled noodles with eggs.",
      image: "https://i.pinimg.com/736x/8e/a1/38/8ea138d9fedca1f76cf4310b00e6c452.jpg",
    },
    {
      id: 11,
      name: "Veg Manchurian",
      price: 180,
      category: "Veg",
      description: "Crispy veggie balls tossed in a tangy Indo-Chinese sauce.",
      image: "https://i.pinimg.com/736x/19/cf/e3/19cfe3d8cf5c73220ffe80885f63645c.jpg",
    },
    {
      id: 15,
      name: "South Indian Veg Thali",
      price: 220,
      category: "Veg",
      description: "Traditional thali with rice, sambar, rasam, poriyal, kootu, papad, and pickle.",
      image: "https://i.pinimg.com/736x/ae/fc/a3/aefca354bdbeb7b74b3d41e0857ec966.jpg",
    },
  ];

  const categories = ["All", "Veg", "Non-Veg", "Drinks", "Desserts"];
  const categoryColors = {
    Veg: "bg-green-500",
    "Non-Veg": "bg-yellow-500",
    Drinks: "bg-pink-500",
    Desserts: "bg-purple-500",
    All: "bg-red-500",
  };

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-24 space-y-16 md:px-4 sm:px-8   h-full relative ">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold text-center text-gray-800 font-primary">
🍽️ Our Menu
      </h1>
      <p className="text-base sm:text-lg md:text-2xl lg:text-4xl text-gray-700 leading-relaxed tracking-wide font-light text-center font-poppins max-w-6xl mx-auto">
        We take every detail into account, bringing you the finest ingredients and flavors to craft an unforgettable dining experience.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`md:min-w-[200px] min-w-[100px] px-5 py-2 md:py-4 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeCategory === category
                ? "bg-red-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}

<div className="w-full h-full flex  md:justify-center items-center  ">
<div className=" w-full md:max-w-3/5    grid gap-y-24 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-4   justify-items-center mt-48 ">
      {filteredItems.map((item) => {
            const isSelected = selectedItems.some((i) => i.id === item.id);
            return (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => toggleSelect(item)}
              >
                <Card
                  className={`bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 ${
                    isSelected ? "ring-4 ring-red-400" : ""
                  }`}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <span
                    className={`inline-block text-white text-sm font-medium px-3 py-1 rounded-full mt-2 ${
                      categoryColors[item.category] || "bg-gray-500"
                    }`}
                  >
                    {item.category}
                  </span>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  <p className="text-base sm:text-lg font-bold text-red-500 mt-3">
                    ₹{item.price}
                  </p>
                </Card>
              </div>
            );
          })}
       
      </div>
</div>
  

      {/* Floating Bottom Bar */}
      {selectedItems.length > 0 && (
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 bg-white shadow-xl border rounded-2xl px-4 sm:px-8 py-4 md:h-52 w-[95%] sm:w-[90%] max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h2 className="font-medium text-gray-700 text-2xl sm:text-3xl">
              Selected Items: <span className="font-bold">{selectedItems.length}</span>
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              Total: ₹{total}
            </p>
          </div>
          <button
            className="bg-red-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition text-lg sm:text-2xl font-primary"
            onClick={() => navigate("/orders", { state: { selectedItems, total } })}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
