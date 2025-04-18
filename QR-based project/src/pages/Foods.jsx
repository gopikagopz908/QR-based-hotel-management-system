// import React, { useState } from "react";

// const Foods = () => {
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
//       description:
//         "Classic Italian pizza topped with fresh basil and cheese.",
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
//         "https://i.pinimg.com/474x/4e/54/18/4e5418327e8e1bcacdeda173e0143c4b.jpg",
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
//       description:
//         "Aromatic and richly spiced, Biryani is a royal dish made with fragrant basmati rice.",
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
//       description:
//         "Crispy veggie balls tossed in a tangy Indo-Chinese sauce.",
//       image:
//         "https://i.pinimg.com/736x/19/cf/e3/19cfe3d8cf5c73220ffe80885f63645c.jpg",
//     },
//     {
//       id: 15,
//       name: "South Indian Veg Thali",
//       price: 220,
//       category: "Veg",
//       description:
//         "Traditional thali with rice, sambar, rasam, poriyal, kootu, papad, and pickle.",
//       image:
//         "https://i.pinimg.com/736x/ae/fc/a3/aefca354bdbeb7b74b3d41e0857ec966.jpg",
//     },
//   ];

//   const categories = ["All", "Veg", "Non-Veg", "Drinks", "Desserts"];
//   const categoryColors = {
//     Veg: "",
//     "Non-Veg": "",
//     Drinks: "",
//     Desserts: "",
//     All: "",
//   };

//   const filteredItems =
//     activeCategory === "All"
//       ? menuItems
//       : menuItems.filter((item) => item.category === activeCategory);

//   return (
//     <>
//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mt-4">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`md:min-w-[150px] min-w-[100px] px-2 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
//               activeCategory === category
//                 ? "bg-red-800 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="flex justify-end  " >
//   <button className="bg-red-800 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded  ">
//     Add Items
//   </button>
// </div>

//       {/* Table Display */}
//       <div className="overflow-x-auto mt-10 px-4">
//         <table className="table-auto w-full max-w-6xl mx-auto text-sm border rounded-md overflow-hidden shadow-md">
//           <thead className="bg-red-800 text-white">
//             <tr>
//               <th className="p-3 text-left">No</th>
//               <th className="p-3 text-left">Image</th>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Category</th>
//               <th className="p-3 text-left">Description</th>
//               <th className="p-3 text-left">Price</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredItems.map((item, index) => {
//               const isSelected = selectedItems.some((i) => i.id === item.id);
//               return (
//                 <tr
//                   key={item.id}
//                   className={`border-b hover:bg-gray-100 transition ${
//                     isSelected ? "bg-red-100" : ""
//                   }`}
//                 >
//                   <td className="p-3 font-bold">{index + 1}</td>
//                   <td className="p-3">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-14 h-14 object-cover rounded"
//                     />
//                   </td>
//                   <td className="p-3 font-medium">{item.name}</td>
//                   <td className="p-3">
//                     <span
//                       className={`text-black text-xs  font-medium ${
//                         categoryColors[item.category] 
//                       }`}
//                     >
//                       {item.category}
//                     </span>
//                   </td>
//                   <td className="p-3 text-black font-medium">{item.description}</td>
//                   <td className="p-3 text-red-600 font-semibold">
//                     ₹{item.price}
//                   </td>
//                   {/* <td className="p-3">
//                     <button
//                       onClick={() => toggleSelect(item)}
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         isSelected
//                           ? "bg-red-600 text-white"
//                           : "bg-gray-200 text-gray-800"
//                       }`}
//                     >
//                       {isSelected ? "Selected" : "Select"}
//                     </button>
//                   </td> */}
//                   <td className="p-3">
//                   <div className="flex justify-center items-center space-x-2">

//                   <button
//                     onClick={() => console.log("Edit", item.id)}
//                     className="bg-black text-white text-xs font-semibold px-3 py-1 rounded items-center"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => console.log("Delete", item.id)}
//                     className="bg-black text-white text-xs font-semibold px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                   </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Foods;
import React, { useEffect, useState } from "react";
import AddFoodModal from "../components/addEditModal";
import axiosInstance from "../Api/axiosInstance";
import useDeleteProduct from "../hooks/useDeleteproduct";
 import Swal from 'sweetalert2';


const Foods = () => {



  const [activeCategory, setActiveCategory] = useState("All");
  const [menu, setMenu] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [id,setid]=useState("")

 const[isRender,setRender]=useState(false)

 const handleRender=()=>{
  setRender(!isRender)
 }

const{DeleteProduct}=useDeleteProduct()
useEffect(()=>{
  const fetchData=async()=>{
    try {
      const response=await axiosInstance.get("/product/getProduct")
      setMenu(response?.data?.products)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  },[isRender])

  // console.log(initialItems,"initiall")

  function handleOpenmodal(id){
    setid(id)
    setIsModalOpen(true)
  }


  const toggleSelect = (item) => {
    const isSelected = selectedItems.some((i) => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleAddFood = (newItem) => {
    const newId = menu.length + 1;
    const itemWithId = { id: newId, ...newItem };
    setMenu([...menu, itemWithId]);
  };

  const categories = ["All", "Veg", "nonVeg", "Drinks", "Desserts"];
  const filteredItems =
    activeCategory === "All"
      ? menu
      : menu.filter((item) => item.category === activeCategory);

const handleClose=()=>{
  setIsModalOpen(false);
  setid("")
}
 

  return (
    <>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`md:min-w-[150px] min-w-[100px] px-2 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
              activeCategory === category
                ? "bg-red-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-end px-4 mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add Items
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-10 px-4">
        <table className="table-auto w-full max-w-6xl mx-auto text-sm border rounded-md overflow-hidden shadow-md">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => {
              const isSelected = selectedItems.some((i) => i.id === item.id);
              return (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-gray-100 transition ${
                    isSelected ? "bg-red-100" : ""
                  }`}
                >
                  <td className="p-3 font-bold">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3 font-medium">{item.category}</td>
                  <td className="p-3 text-black">{item.description}</td>
                  {/* <td className="p-3 text-black">{item._id}</td> */}
                  <td className="p-3 text-red-600 font-semibold">
                    ₹{item.price}
                  </td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <button onClick={()=>handleOpenmodal(item._id)} className="bg-black text-white px-3 py-1 rounded text-xs">
                        Edit
                      </button>
                      {/* <button onClick={()=>DeleteProduct(item._id)} className="bg-black text-white px-3 py-1 rounded text-xs">
                        Delete
                      </button> */}
                      <button
  onClick={() => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteProduct(item._id);
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  }}
  className="bg-black text-white px-3 py-1 rounded text-xs"
>
  Delete
</button>


                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Item Modal */}
      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() =>handleClose(handleRender())}
        
       ids={id}
       
      />
     
    </>
  );
};

export default Foods;
