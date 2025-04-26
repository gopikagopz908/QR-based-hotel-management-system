import React from "react";

function About() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 min-h-screen">
       
        <div className="w-full md:w-1/2 h-[1500px] flex justify-center items-center overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg"
            alt="Healthy Food"
            className="w-auto h-full object-cover scale-125 rounded-lg shadow-lg"
          />
        </div>
       


        <div className="w-full md:w-1/2 text-center md:text-left mr-96">
          <h1 className="text-8xl font-bold text-gray-800 mb-4 font-primary">
            We serve wholesome, nutritious meals for your family.
          </h1>
          <p className="text-gray-600 text-lg">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-6 py-10 gap-8 bg-gray-100 min-h-screen">
 
  <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] lg:h-[400px] lg:w-[400px] flex justify-center items-center overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg"
      alt="Healthy Food"
      className="w-full h-full object-cover scale-125 rounded-lg shadow-lg"
    />
  </div>

 
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-4xl font-bold text-gray-800 mb-6 font-primary leading-tight">
      We serve wholesome, nutritious meals for your family.
    </h1>
    <p className="text-gray-600 text-base sm:text-lg  lg:text-base font-serif">
      "Our story began with a vision to create a unique dining experience
      that merges fine dining, exceptional service, and a vibrant
      ambiance. Rooted in the city's rich culinary culture, we aim to
      honor our local roots while infusing a global palate".
    </p>
  </div>
</div>


<div className="bg-gray-100 mt-12 pt-1 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-center text-gray-800 mb-6 font-primary leading-tight">
    What Our Customers Says
  </h1>

  <div className="w-full flex flex-wrap justify-center gap-6 px-4 lg:px-10 py-6">
 
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%]">
    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-red-700 mb-2">
      “The best restaurant”
    </h3>
    <p className="text-gray-600 text-sm sm:text-base lg:text-sm font-serif">
      Last night, we dined at this place and were simply blown away.
      From the moment we stepped in, we were enveloped in an inviting
      atmosphere and greeted with warm smiles.
    </p>
    <div className="flex justify-center items-center w-full mt-6">
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-full max-w-xs">
        <img
          src="https://i.pravatar.cc/80?img=1"
          alt="Customer"
          className="w-12 h-12 rounded-full"
        />
        <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-700 ml-3">
          John Doe
        </h3>
      </div>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%]">
    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-red-700 mb-2">
      “Simply delicious”
    </h3>
    <p className="text-gray-600 text-sm sm:text-base lg:text-sm font-serif">
      This place exceeded my expectations on all fronts. The ambiance
      was cozy and relaxed, making it a perfect venue for our
      anniversary dinner. Each dish was beautifully presented.
    </p>
    <div className="flex justify-center items-center w-full mt-6">
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-full max-w-xs">
        <img
          src="https://i.pravatar.cc/80?img=2"
          alt="Customer"
          className="w-12 h-12 rounded-full"
        />
        <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-700 ml-3">
          Jane Smith
        </h3>
      </div>
    </div>
  </div>

 
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%]">
    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-red-700 mb-2">
      “One of a kind restaurant”
    </h3>
    <p className="text-gray-600 text-sm sm:text-base lg:text-sm font-serif">
      The culinary experience at this place is second to none. The
      atmosphere is vibrant, and the food is nothing short of
      extraordinary. Highly recommended.
    </p>
    <div className="flex justify-center items-center w-full mt-6">
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-full max-w-xs">
        <img
          src="https://i.pravatar.cc/80?img=3"
          alt="Customer"
          className="w-12 h-12 rounded-full"
        />
        <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-700 ml-3">
          Alex Johnson
        </h3>
      </div>
    </div>
  </div>
</div>

</div>
</div>

  );
}

export default About;
