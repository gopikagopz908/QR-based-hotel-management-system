import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
     
      <header className="bg-gray-600 py-1 text-white fixed top-0 left-0 w-full z-30 text-sm flex justify-center">
        <p>Phone: (+23) 787655349</p>
      </header>

     
      <nav className="bg-white md:py-1   fixed top-5 w-full z-20 shadow-md  ">
        <div className="w-full flex justify-between items-center  px-4 py-1  ">
          
         {/* logo */}


          <div className="flex items-center space-x-4    ">
            <Link to="/" className="rounded-full overflow-hidden">
              <img
                src="2.jpg"
                alt="icon"
                className="w-10 h-10  md:w-12 md:h-12 object-cover"
              />
            </Link>
            <h1 className="mt-2 sm:mt-0">
              <Link
                to="/"
                className="text-red-800 text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold font-primary"
              >
                Flavor Bliss
              </Link>
            </h1>
          </div>

          
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
          <ul className="hidden md:flex space-x-15 items-center ">
            
            <li>
              <Link
                to="/"
                className=" text-gray-800 hover:bg-red-800 hover:text-white text-xl lg:font-semibold  md:text-xl  px-4 py-2 rounded-full transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="text-gray-700 hover:text-red-500 font-semibold text-3xl  md:text-xl  transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-500 font-semibold text-3xl  md:text-xl transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-500 font-semibold text-3xl  md:text-xl transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Search */}
          <div className="hidden md:flex  md:mt-1  items-center w-[200px] px-7 py-3 rounded-full shadow-inner relative border border-gray-300 focus-within:border-black bg-white transition-all duration-300 ease-in-out">
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
