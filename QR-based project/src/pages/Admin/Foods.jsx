import React, {  useState } from "react";
import AddFoodModal from "../../components/addEditModal";
import useDeleteProduct from "../../hooks/useDeleteproduct";
import Swal from 'sweetalert2';
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Api/axiosInstance";


const Foods = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // const [menu, setMenu] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setid] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
 const { deleteProduct } = useDeleteProduct();


const {
    data: menu = [], 
    isLoading, 
    isError,
    refetch
  } = useQuery({
    queryKey: ['pages', currentPage],
    queryFn: async () => {
      const response = await axiosInstance.get(`admin/pagination?page=${currentPage}`);
              setTotalPages(response.data.
          totalPages)
      return response.data;
    }
  });

  



  
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
    console.log("object")
    setid("");
    refetch()
};

const handleDelete=async(id)=>{
  console.log(id,"iddd")
await deleteProduct(id)
refetch();
}


  const categories = ["All", "Veg", "nonVeg", "Drinks", "Desserts"];

  return (
    <>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center overflow-hidden p-4">
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

      <div className="flex justify-end px-4 mt-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add Items
        </button>
      </div>

      {/* Table */}
      <div className=" mt-4 px-4 ">
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
            {menu?.products?.filter((item) => {
      if (activeCategory === "All") return true;
      return item.category === activeCategory;
    }).map((item, index) => {
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
                  <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleOpenmodal(item._id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-md shadow-md"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            Swal.fire({
                              title: 'Are you sure?',
                              text: "You won't be able to revert this!",
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonColor: '#d33',
                              cancelButtonColor: '#3085d6',
                              confirmButtonText: 'Yes, delete it!',
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(item._id);
                                
                               }
                            });
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-md shadow-md"
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
        onClose={() => handleClose()}
        ids={id}
      />
    </>
  );
};

export default Foods;
