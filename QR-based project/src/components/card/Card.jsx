// import React from 'react'

// const Card = ({image,name,price,description}) => {
  
//   return (
//     <div className=' relative border border-[#DBDFD0] h-[400px] w-[300px] shadow-sm flex flex-col justify-between items-center  rounded-4xl hover:skew-x-6 hover:skew-y-3 hover:transition-all'>
//  <img src={image} className='h-[200px] w-[200px]  absolute top-[-40px] hover:rotate-90' alt="food" />
// <div className='text-center mt-54'>
//  <p className="text-lg font-bold text-red-500 ">₹{price}</p >
//  <h2 className="text-xl font-semibold ">{name}</h2>
//  <div className='text-center'>{description}</div>
// </div> 

//     </div>
//   )
// }

// export default Card

// import React from "react";

// const Card = ({ image, name, price, description }) => {
//   return (
//     <div className="relative border border-gray-300 h-[400px] w-[300px] shadow-lg flex flex-col justify-between items-center rounded-3xl bg-white 
//     hover:scale-105 hover:shadow-2xl hover:transition-transform ">
      
      
//       <img
//         src={image}
//         className="h-[200px] w-[200px] absolute top-[-40px] transition-transform duration-300 "
//         alt={name}
//       />
      
      
//       <div className="text-center mt-54 p-4">
//         <p className="text-lg font-bold text-red-500">₹{price}</p>
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default Card;
// import React, { useState } from "react";

// const Card = ({ image, name, price, description }) => {
//   const [isRotated, setIsRotated] = useState(false);

//   const handleImageClick = () => {
//     setIsRotated(!isRotated);
//   };

//   return (
//     <div className="relative border border-gray-300 h-[400px] w-[300px] shadow-lg flex flex-col justify-between items-center rounded-3xl bg-white 
//     hover:scale-105 hover:shadow-2xl hover:transition-transform">
      
//       {/* Clickable Image with Rotation Effect */}
//       <img
//         src={image}
//         className={`h-[200px] w-[200px] absolute top-[-40px] transition-transform duration-500 ${isRotated ? "rotate-180" : ""}`}
//         alt={name}
//         onClick={handleImageClick}
//       />
      
//       {/* Card Content */}
//       <div className="text-center mt-14 p-4">
//         <p className="text-lg font-bold text-red-500">₹{price}</p>
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default Card;
// import React from "react";

// const Card = ({ image, name, price, description }) => {
//   return (
//     <div className="relative border border-gray-300 h-[400px] w-[300px] shadow-lg flex flex-col justify-between items-center rounded-3xl bg-white 
//     hover:scale-105 hover:shadow-2xl hover:transition-transform">
      
//       {/* Image with Hover Rotation Effect */}
//       <img
//         src={image}
//         className="h-[200px] w-[200px] absolute top-[-40px] transition-transform duration-500 hover:rotate-[360deg]"
//         alt={name}
//       />
      
//       {/* Card Content */}
//       <div className="text-center mt-14 p-4">
//         <p className="text-lg font-bold text-red-500">₹{price}</p>
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default Card;
// import React from "react";

// const Card = ({ image, name, price, description }) => {
//   return (
//     <div className="relative border border-gray-300 h-[400px] w-[300px] shadow-lg flex flex-col justify-between items-center rounded-3xl bg-white 
//     hover:scale-105 hover:shadow-2xl hover:transition-transform">
      
//       {/* Image with 3D Rotation Effect on Hover */}
//       <img
//         src={image}
//         className="h-[200px] w-[200px] absolute top-[-40px] transition-transform duration-500 hover:rotate-y-180"
//         alt={name}
//       />
      
//       {/* Card Content */}
//       <div className="text-center mt-14 p-4">
//         <p className="text-lg font-bold text-red-500">₹{price}</p>
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default Card;
// import React from "react";

// const Card = ({ image, name, price, description }) => {
//   return (
//     <div className="relative border border-gray-300 h-[500px] w-[400px] shadow-lg flex flex-col justify-between items-center rounded-3xl bg-white 
//     hover:scale-105 hover:shadow-2xl hover:transition-transform">
      
      
//       <img
//         src={image}
//         className="h-[250px] w-[250px] absolute rounded-full  top-[-40px] transition-transform duration-500 ease-in-out hover:translate-x-4 hover:-translate-x-4 hover:rotate-360"
//         alt={name}
//       />
      
      
//       <div className="text-center mt-56 p-2 space-y-4">
//         <p className="text-4xl font-bold text-red-500 ">₹{price}</p>
//         <h2 className="text-2xl font-bold">{name}</h2>
//         <p className="text-gray-600 text-xl">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default Card;


import React, { useState } from "react";
import { Check } from "lucide-react"; // Lucide icon (or use any tick icon)

const Card = ({ image, name, price, description }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="relative border border-gray-300  h-[650px] w-[550px] shadow-lg flex flex-col justify-between items-center rounded-3xl  
      hover:scale-105 hover:shadow-2xl hover:transition-transform">
      
      {/* Select Box in Top Right */}
      <div
        className="absolute top-4 right-4 h-8 w-8 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-green-500"
        onClick={() => setSelected(!selected)}
      >
        {selected && <Check className="text-green-500 w-5 h-5" />}
      </div>

      {/* Food Image */}
      <img
        src={image}
        className="h-[280px] w-[320px] absolute rounded-full top-[-40px] transition-transform duration-500 ease-in-out hover:translate-x-4 hover:-translate-x-4 hover:rotate-360"
        alt={name}
      />

      {/* Content */}
      <div className="text-center mt-68 p-2 space-y-4">
        <p className="text-4xl  lg:text-5xl font-bold text-red-500">₹{price}</p>
        <h2 className="text-2xl lg:text-5xl font-bold">{name}</h2>
        <p className="text-gray-600 text-xl lg:text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
