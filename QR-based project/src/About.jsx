import React from "react";

function About() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 min-h-screen">
        {/* <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg" 
            alt="Healthy Food" 
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div> */}
        <div className="w-full md:w-3/4 h-[1000px] flex justify-center items-center overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg"
            alt="Healthy Food"
            className="w-auto h-full object-cover scale-125 rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left mr-96">
          <h1 className="text-7xl font-bold text-gray-800 mb-4 font-primary">
            We serve wholesome, nutritious meals for your family.
          </h1>
          <p className="text-gray-600 text-lg">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 flex flex-col items-center">
        <h1 className="text-7xl font-bold text-center text-gray-800 mb-8 font-primary">
          What Our Customers Says
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                “The best restaurant”
              </h3>
              <p className="text-gray-600">
                Last night, we dined at this place and were simply blown away.
                From the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-60">
                <img
                  src="https://i.pravatar.cc/80?img=1"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-lg font-semibold text-gray-700 ml-3">
                  John Doe
                </h3>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                “Simply delicious”
              </h3>
              <p className="text-gray-600">
                This place exceeded my expectations on all fronts. The ambiance
                was cozy and relaxed, making it a perfect venue for our
                anniversary dinner. Each dish was prepared and beautifully
                presented.
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-60">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-700 ml-3">
                John Doe
              </h3>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                “One of a kind restaurant”
              </h3>
              <p className="text-gray-600">
                The culinary experience at this place is second to none. The
                atmosphere is vibrant, and the food is nothing short of
                extraordinary. The food was the highlight of our evening. Highly
                recommended.
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-3 w-60">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-700 ml-3">
                John Doe
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
