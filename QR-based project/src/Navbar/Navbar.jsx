// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <header className="bg-gray-600  p-1 text-white fixed top-0 left-0 w-full z-20 flex items-center justify-between">
//         <p className="ml-8">phone: (+23) 787655349</p>
//       </header>

//       <nav className="bg-white   border-x-orange-500 p-2 py-6 fixed top-8 w-full z-20 shadow-lg">
//         <div className="w-full bg-red-500 mx-auto flex justify-between items-center ml-60">

//           <div className="flex w-1/4 bg-amber-300  ">
//             <a
//               href="#"
//               className="inline-block w-15 h-12  mb-1 bg-red-200 rounded-full overflow-hidden"
//             >
//               <img
//                 src="2.jpg"
//                 alt="icon"
//                 className="w-full h-full object-cover"
//               />
//             </a>

//             <h1>
//               <Link
//                 to="/"
//                 className="ml-1 text-red-800 text-5xl font-semibold font-primary"
//               >
//                 Flavor Bliss
//               </Link>
//             </h1>
//           </div>

//           <div className="w-full flex items-center justify-between bg-green-600 h-14 px-4">
//   {/* Menu section */}
//   <div className="bg-violet-600">
//     <ul className="hidden md:flex space-x-8 items-center">
//       <li>
//         <Link
//           to="/"
//           className="inline-block text-white bg-gray-100 hover:bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2 text-center transition duration-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
//         >
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/menu"
//           className="text-black hover:text-red-400 font-bold text-2xl"
//         >
//           Menu
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/about"
//           className="text-black hover:text-gray-200 font-bold text-2xl"
//         >
//           About
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/contact"
//           className="text-black hover:text-gray-200 font-bold text-2xl"
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   </div>

//   {/* Search bar section */}
//   <div className="p-2 rounded-full bg-gradient-to-br from-red-200 to-red-300 flex items-center">
//     <div className="relative w-full p-1 rounded-full bg-white shadow-md flex items-center">
//       <input
//         type="text"
//         className="w-full p-2 text-lg text-gray-500 bg-white border-none rounded-full outline-none focus:ring-2 focus:ring-red-300"
//         placeholder="Search..."
//       />
//       <div className="p-2 rounded-full border-l-2 border-gray-300">
//         <svg viewBox="0 0 24 24" className="w-6 h-6 fill-grey-500">
//           <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//         </svg>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>
//       </nav>

//       {/* Add spacing so content doesn't get hidden behind the fixed header */}
//       {/* Increased to accommodate both the phone header and the nav */}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Phone Bar */}
      <header className="bg-gray-600 p-3 text-white fixed top-0 left-0 w-full z-30 text-sm flex justify-center">
        <p>Phone: (+23) 787655349</p>
      </header>

      {/* Main Nav */}
      <nav className="bg-white md:py-10 fixed top-6 w-full z-20 shadow-md">
        <div className="w-full mx-auto flex justify-between items-center md:px-40 px-4 py-3">
          {/* Left - Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="rounded-full overflow-hidden">
              <img
                src="2.jpg"
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-28 object-cover"
              />
            </Link>
            <h1 className="mt-2 sm:mt-0">
              <Link
                to="/"
                className="text-red-800 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold font-primary"
              >
                Flavor Bliss
              </Link>
            </h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-32 items-center">
            {/* <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-500 font-bold text-5xl transition"
              >
                Home
              </Link>
            </li> */}
            <li>
              <Link
                to="/"
                className="bg-gray-400 text-gray-800 hover:bg-red-800 hover:text-white font-bold text-5xl px-6 py-2 rounded-full transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="text-gray-700 hover:text-red-500 font-bold text-5xl transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-500 font-bold text-5xl transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-500 font-bold text-5xl transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center w-[500px] p-7 rounded-full shadow-inner relative border border-gray-300 focus-within:border-black bg-white transition-all duration-300 ease-in-out">
            <input
              type="text"
              className="bg-transparent outline-none text-gray-800 placeholder-gray-500 px-4 pr-10 w-full text-sm focus:placeholder-gray-400"
              placeholder="Search..."
            />
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="currentColor"
            >
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-6 bg-white shadow-lg rounded-b-lg">
            {/* Search Bar */}
            <div className="flex items-center w-full mt-4 px-4 py-2 rounded-full shadow-inner border border-gray-300 bg-gray-100 relative">
              <input
                type="text"
                className="bg-transparent outline-none text-gray-800 placeholder-gray-500 px-3 pr-10 w-full text-base"
                placeholder="Search..."
              />
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="currentColor"
              >
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </svg>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 mt-6 text-center">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block text-gray-800 hover:text-red-800 font-semibold text-2xl transition duration-200 font-mono"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={toggleMenu}
                  className="block text-gray-800 hover:text-red-800 font-semibold text-2xl transition duration-200 font-mono"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="block text-gray-800 hover:text-red-800 font-semibold text-2xl transition duration-200 font-mono"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block text-gray-800 hover:text-red-800 font-semibold text-2xl transition duration-200 font-mono"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;
