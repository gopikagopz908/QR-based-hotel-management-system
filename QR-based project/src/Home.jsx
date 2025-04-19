
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="w-full h-full bg-[url('/img.png')]  bg-cover  rounded-lg shadow-lg">
     
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center font-primary font-light  sm:px-6 md:px-12 mt-40  sm:mt-48 md:mt-30 lg:gap-8">
          {/* first section */}
          <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-6xl  lg:leading-none sm:leading-tight ">
            Best Food for
            <br /> your taste
          </h1>
           {/* second section */}
           <div>
           <p className=" text-base sm:text-lg lg:text-2xl md:text-2xl  ">
            "Savor exquisite flavors and create lasting memories in our warm,
            culinary retreat." 🍽️✨
          </p>
          <Link
            to="/menu"
            className="inline-block text-center lg:px-5 lg:py-3 sm:px-4 py-2 sm:py-3 mt-6 text-black border rounded-full shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 font-bold font-sans lg:text-xl"
          >
            Explore Menu
          </Link>
           </div>

          
 
        </div>
      </div>
    </div>
  );
}

export default Home;
