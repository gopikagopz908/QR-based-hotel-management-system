import React, { useEffect, useState } from 'react';
import useAddProduct from '../hooks/useAddproducts';
import useEditProduct from '../hooks/useEditProducts';
import useSingleproduct from '../hooks/useSingleproduct';

const AddFoodModal = ({ isOpen, onClose,ids }) => {

const{singleProduct,GetSingle}=useSingleproduct()


useEffect(() => {
  if (ids) {
    GetSingle(ids);
  }
}, [ids]);


console.log(singleProduct,"dddfffdddf")



  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: null,
    description: '',
    category: '',
  });



useEffect(() => {
  if (ids) {
    setFormData({
      name: singleProduct.name || '',
      price: singleProduct.price || '',
      image: singleProduct.image || null,
      description: singleProduct.description || '',
      category: singleProduct.category || '',
    });

    // Optional: set preview if editing
    if (singleProduct.image) {
      setPreview(singleProduct.image);
    }
  }
}, [singleProduct]);

const [preview, setPreview] = useState(null);
 const{loading,AddProduct}=useAddProduct()

 const {editProduct}=useEditProduct()
 


 

console.log(singleProduct,"singleee")


 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));

      // Show image preview
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const form = new FormData();
  form.append('name', formData.name);
  form.append('price', formData.price);
  form.append('description', formData.description);
  form.append('category', formData.category);
  form.append('image', formData.image); 
console.log(form,"formmm")
  if(!ids){
    console.log(formData,"gffgnfgn")
    AddProduct(form)
  }else{
editProduct(ids,form)
  }

    

  
  

    setFormData({
      name: '',
      price: '',
      image: null,
      description: '',
      category: '',
    });
    setPreview(null);
   onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative border-2 border-red-500">
        <h2 className="text-xl font-semibold mb-4 text-center text-red-700">Add Food Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-red-500 rounded-lg p-2"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-red-500 rounded-lg p-2"
            required
          />

           <div> 
            <label className="block mb-1 text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-red-500 rounded-lg p-2"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )} 
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-red-500 rounded-lg p-2"
          />



<div className="relative pointer-events-none">
  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="w-full border border-red-500 rounded-lg p-2 bg-white appearance-none pointer-events-auto"
    required
  >
    <option value="">Select Category</option>
    <option value="Veg">Veg</option>
    <option value="nonVeg">nonVeg</option>
    <option value="Drinks">Drinks</option>
    <option value="Desserts">Desserts</option>
  </select>
  <div className="absolute right-3 top-3 text-gray-500">
    ▼
  </div>
</div>




          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
