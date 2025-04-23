
// import React, { useEffect, useState } from "react";
// import AddFoodModal from "../components/addEditModal";
// import axiosInstance from "../Api/axiosInstance";
// import useDeleteProduct from "../hooks/useDeleteproduct";
//  import Swal from 'sweetalert2';


// const Foods = () => {



//   const [activeCategory, setActiveCategory] = useState("All");
//   const [menu, setMenu] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//  const [id,setid]=useState("")

//  const[isRender,setRender]=useState(false)

//  const handleRender=()=>{
//   setRender(!isRender)
//  }

// const{DeleteProduct}=useDeleteProduct()
// useEffect(()=>{
//   const fetchData=async()=>{
//     try {
//       const response=await axiosInstance.get("/product/getProduct")
//       setMenu(response?.data?.products)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   fetchData()
//   },[isRender])

//   // console.log(initialItems,"initiall")

//   function handleOpenmodal(id){
//     setid(id)
//     setIsModalOpen(true)
//   }


//   const toggleSelect = (item) => {
//     const isSelected = selectedItems.some((i) => i.id === item.id);
//     if (isSelected) {
//       setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleAddFood = (newItem) => {
//     const newId = menu.length + 1;
//     const itemWithId = { id: newId, ...newItem };
//     setMenu([...menu, itemWithId]);
//   };

//   const categories = ["All", "Veg", "nonVeg", "Drinks", "Desserts"];
//   const filteredItems =
//     activeCategory === "All"
//       ? menu
//       : menu.filter((item) => item.category === activeCategory);

// const handleClose=()=>{
//   setIsModalOpen(false);
//   setid("")
// }
 

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

//       <div className="flex justify-end px-4 mt-4">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-red-800 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
//         >
//           Add Items
//         </button>
//       </div>

//       {/* Table */}
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
//               <th className="p-3 text-left">Actions</th>
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
//                   <td className="p-3 font-medium">{item.category}</td>
//                   <td className="p-3 text-black">{item.description}</td>
//                   {/* <td className="p-3 text-black">{item._id}</td> */}
//                   <td className="p-3 text-red-600 font-semibold">
//                     ₹{item.price}
//                   </td>
//                   <td className="p-3">
//                     <div className="flex space-x-2">
//                       <button onClick={()=>handleOpenmodal(item._id)} className="bg-black text-white px-3 py-1 rounded text-xs">
//                         Edit
//                       </button>
//                       {/* <button onClick={()=>DeleteProduct(item._id)} className="bg-black text-white px-3 py-1 rounded text-xs">
//                         Delete
//                       </button> */}
//                       <button
//   onClick={() => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "Do you want to delete this item?",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         DeleteProduct(item._id);
//         Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
//       }
//     });
//   }}
//   className="bg-black text-white px-3 py-1 rounded text-xs"
// >
//   Delete
// </button>


//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Item Modal */}
//       <AddFoodModal
//         isOpen={isModalOpen}
//         onClose={() =>handleClose(handleRender())}
        
//        ids={id}
       
//       />
     
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
  const [id, setid] = useState("");
  const [isRender, setRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalPages, setTotalPages] = useState(1);

  const { DeleteProduct } = useDeleteProduct();

  const handleRender = () => {
    setRender(!isRender);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/product/getProduct", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            category: activeCategory === "All" ? "" : activeCategory,
          },
        });
        setMenu(response.data.products);
        setTotalPages(Math.ceil(response.data.totalProducts / itemsPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isRender, activeCategory, currentPage]);

  function handleOpenmodal(id) {
    setid(id);
    setIsModalOpen(true);
  }

  const toggleSelect = (item) => {
    const isSelected = selectedItems.some((i) => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setid("");
  };

  const categories = ["All", "Veg", "nonVeg", "Drinks", "Desserts"];

  return (
    <>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
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
            {menu.map((item, index) => {
              const isSelected = selectedItems.some((i) => i.id === item.id);
              return (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-gray-100 transition ${
                    isSelected ? "bg-red-100" : ""
                  }`}
                >
                  <td className="p-3 font-bold">{(currentPage - 1) * itemsPerPage + index + 1}</td>
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
                  <td className="p-3 text-red-600 font-semibold">₹{item.price}</td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <button onClick={() => handleOpenmodal(item._id)} className="bg-black text-white px-3 py-1 rounded text-xs">Edit</button>
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
                              handleRender();
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

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-red-400 px-3 py-1 rounded disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="text-black font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-red-400 px-3 py-1 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      {/* Add Item Modal */}
      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => handleClose(handleRender())}
        ids={id}
      />
    </>
  );
};

export default Foods;
