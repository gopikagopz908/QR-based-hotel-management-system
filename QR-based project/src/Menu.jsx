import React, { useState } from "react";
import Card from "./components/card/Card";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "./Api/axiosInstance";
 import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./Api/axiosInstance";
import CardSkeleton from "./components/skeleton/CardSkeleton";
import AddFoodModal from "./components/addEditModal";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
    const[reload,setReload]=useState("")
  const navigate = useNavigate();

  const toggleSelect = (item) => {
    console.log(selectedItems,"select in items")
    const isSelected = selectedItems.some((i) => i._id === item._id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i._id !== item._id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


   

  const categories = [{value:"",name:'All'},{ value:"Veg",name:'Veg'}, {value:"nonVeg",name:'Non-Veg'},
     {value:"Drinks",name:'Drinks'}, {value:"Desserts",name:'Desserts'}];
  const categoryColors = {
    Veg: "bg-green-500",

    "Non-Veg": "bg-yellow-500",
    Drinks: "bg-pink-500",
    Desserts: "bg-purple-500",
    All: "bg-red-500",
  };

  
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const {
    data=[],isLoading,isError
  }=useQuery({
    queryKey:["foods",reload,activeCategory],
    queryFn:async()=>{
   
      const response=await axiosInstance.get("/product/getProduct",{params:{category:activeCategory}})
      return response.data
    }
  })
  const {products=[],totalProducts=0}=data;



  return (
    <div className=" mt-8  md:mt-20 space-y-10 md:px-4 sm:px-8   h-full relative ">
<h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl  font-bold text-center text-gray-800 font-primary ">
🍽️ Our Menu
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-700 tracking-wide font-light text-center font-serif max-w-full sm:max-w-3xl mx-auto px-4">
  "We take every detail into account, bringing you the finest ingredients and flavors to craft an unforgettable dining experience".
</p>

 

      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`md:min-w-[100px] min-w-[100px] px-2 py-2 md:py-2 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base lg:text-base ${
              activeCategory === category.value
                ? "bg-red-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

<div className="w-full h-full flex  md:justify-center items-center    ">
<div className=" w-full  grid gap-y-4 md:gap-y-20 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:px-20 mb-5 md:mb-10  justify-items-center lg:mt-10 ">
      {isLoading?<CardSkeleton/> :isError || products.length===0?<h1>No data found</h1>
      
      :products?.map((item) => { 
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
  

      {/* {selectedItems.length > 0 && (
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 bg-white shadow-xl border rounded-2xl px-4 sm:px-8 py-4 md:h-52 w-3/4 sm:w-[90%] max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h2 className="font-medium text-gray-700 text-2xl sm:text-6xl">
              Selected Items: <span className="font-bold">{selectedItems.length}</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-6xl font-semibold">
              Total: ₹{total}
            </p>
          </div>
          <button
            className="bg-red-800 text-white px-4 py-2 lg:px-8 lg:py-8 rounded-full font-semibold hover:bg-red-700 transition text-lg sm:text-2xl lg:text-5xl font-primary"
            onClick={() => navigate("/orders", { state: { selectedItems, total } })}
          >
            Place Order
          </button>
        </div>
      )} */}
     
     {selectedItems.length > 0 && (
  <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 bg-white  shadow-xl border rounded-2xl px-4 sm:px-8 py-2 w-[80%] max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
    <div className="text-center sm:text-left">
      <h2 className="font-medium text-gray-700 text-xl sm:text-2xl md:text-3xl">
        Selected Items: <span className="font-bold">{selectedItems.length}</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl font-semibold">
        Total: ₹{total}
      </p>
    </div>
    <button
      className="bg-red-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-red-700 transition text-base sm:text-lg md:text-xl"
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
