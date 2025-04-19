

import React, { useState } from "react";
import { Check } from "lucide-react";

const Card = ({ image, name, price, description }) => {
  const [selected, setSelected] = useState(false);

  return (


    <div
      className="relative border border-gray-300 shadow-lg rounded-3xl flex flex-col justify-between items-center 
        w-[90vw] sm:w-[400px] md:w-[200px] lg:w-64  
        h-[600px] sm:h-[620px] md:h-[630px] lg:h-72     
        hover:scale-105 hover:shadow-2xl hover:transition-transform bg-white"
    >
     
      <div
        className="absolute top-4 right-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-green-500"
        onClick={() => setSelected(!selected)}
      >
        {selected && <Check className="text-green-500 w-5 h-5 lg:h-12 lg:w-12" />}
      </div>
      <img
  src={image}
  alt={name}
  className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[150px] 
             w-[200px] sm:w-[260px] md:w-[280px] lg:w-[150px] 
             absolute rounded-full top-[-35] 
             transition-transform duration-500 ease-out 
             hover:scale-90"
/>


      {/* Content */}
      <div className="text-center mt-[260px] sm:mt-[280px] md:mt-[300px] lg:mt-[320px] xl:mt-[340px] sm:p-0.5 lg:p-12 space-y-6">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">₹{price}</p>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">{name}</h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">{description}</p>
      </div>
    </div>

);
};

export default Card;
        

      
     