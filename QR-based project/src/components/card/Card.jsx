

import React, { useState } from "react";
import { Check } from "lucide-react";

const Card = ({ image, name, price, description }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="relative border border-gray-300 shadow-lg rounded-3xl flex flex-col justify-between items-center 
        w-[90vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] 
        h-[600px] sm:h-[620px] md:h-[630px] lg:h-[640px] xl:h-[650px] 
        hover:scale-105 hover:shadow-2xl hover:transition-transform bg-white"
    >
     
      <div
        className="absolute top-4 right-4 h-8 w-8 lg:h-16 lg:w-16 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-green-500"
        onClick={() => setSelected(!selected)}
      >
        {selected && <Check className="text-green-500 w-5 h-5 lg:h-12 lg:w-12" />}
      </div>

      
      <img
        src={image}
        alt={name}
        className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[420px] w-[200px] sm:w-[260px] md:w-[280px] lg:w-[420px] 
          absolute rounded-full top-[-55px] transition-transform duration-500 ease-in-out 
          hover:translate-x-4  hover:rotate-360"
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
// import React, { useState } from "react";
// import { Check, X } from "lucide-react";

// const Card = ({ image, name, price, description }) => {
//   const [selected, setSelected] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <>
//       {/* CARD */}
//       <div
//         className="relative border border-gray-300 shadow-lg rounded-3xl flex flex-col justify-between items-center 
//         w-[90vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] 
//         h-[600px] sm:h-[620px] md:h-[630px] lg:h-[640px] xl:h-[650px] 
//         hover:scale-105 hover:shadow-2xl hover:transition-transform bg-white cursor-pointer"
//         onClick={handleCardClick}
//       >
//         <div
//           className="absolute top-4 right-4 h-8 w-8 lg:h-16 lg:w-16 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-green-500"
//           onClick={(e) => {
//             e.stopPropagation(); // prevent modal opening
//             setSelected(!selected);
//           }}
//         >
//           {selected && <Check className="text-green-500 w-5 h-5 lg:h-12 lg:w-12" />}
//         </div>

//         <img
//           src={image}
//           alt={name}
//           className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[420px] w-[200px] sm:w-[260px] md:w-[280px] lg:w-[420px] 
//           absolute rounded-full top-[-55px] transition-transform duration-500 ease-in-out 
//           hover:translate-x-4  hover:rotate-360"
//         />

//         <div className="text-center mt-[260px] sm:mt-[280px] md:mt-[300px] lg:mt-[320px] xl:mt-[340px] sm:p-0.5 lg:p-12 space-y-6">
//           <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">₹{price}</p>
//           <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">{name}</h2>
//           <p className="text-gray-600 text-base sm:text-lg lg:text-xl">{description}</p>
//         </div>
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//           <div className="relative bg-white rounded-3xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
//             {/* Close button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//             >
//               <X size={28} />
//             </button>

//             {/* Card Content */}
//             <div className="flex flex-col items-center text-center space-y-6 mt-8">
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-[220px] h-[220px] rounded-full object-cover shadow-lg"
//               />
//               <h2 className="text-3xl font-bold">{name}</h2>
//               <p className="text-xl text-red-500 font-semibold">₹{price}</p>
//               <p className="text-gray-600 text-lg px-6">{description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;
