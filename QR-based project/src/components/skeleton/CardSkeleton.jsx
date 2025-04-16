import React from "react";

const CardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse relative border border-gray-200 shadow-lg rounded-3xl flex flex-col justify-between items-center 
            w-[90vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] 
            h-[600px] sm:h-[620px] md:h-[630px] lg:h-[640px] xl:h-[650px] 
            bg-white mb-8"
        >
          {/* Tick Circle Placeholder */}
          <div className="absolute top-4 right-4 h-8 w-8 lg:h-16 lg:w-16 rounded-full border-2 border-gray-300 bg-gray-200"></div>

          {/* Image Placeholder */}
          <div
            className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[420px] 
              w-[200px] sm:w-[260px] md:w-[280px] lg:w-[420px] 
              absolute rounded-full top-[-55px] bg-gray-200"
          ></div>

          {/* Content Placeholder */}
          <div className="text-center mt-[260px] sm:mt-[280px] md:mt-[300px] lg:mt-[320px] xl:mt-[340px] sm:p-0.5 lg:p-12 space-y-6 w-full">
            <div className="h-10 sm:h-12 lg:h-16 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-6 sm:h-8 lg:h-10 bg-gray-200 rounded w-2/3 mx-auto"></div>
            <div className="h-4 sm:h-6 lg:h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
