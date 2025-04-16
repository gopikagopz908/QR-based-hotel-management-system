// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AdminLoginModal from '../../components/loginPageModal';


const AdminNavbar = () => {
    // const[openModal,setOpenModal]=useState(false)

    // function openLogin(){
    //     setOpenModal(true)
    // }
    // function closeLogin(){
    //     setOpenModal(false)
    // }

    const navigate=useNavigate()
  return (
    <nav className="w-full px-4 py-3 bg-stone-300 shadow-md flex items-center justify-between border-b border-blue-100">
      {/* Left Side: Logo + Title */}
      <div className="flex items-center gap-2">
        <img src="2.jpg" alt="Logo" className="w-8 h-8 bg-stone-300 rounded-full" />
        <h1 className="text-xl lg:text-3xl font-primary text-red-800">Flavor Bliss</h1>
      </div>

      {/* Right Side: Login Button */}
      <button onClick={()=>navigate("/admin/login")} className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
        Login
      </button>
      {/* {openModal && <AdminLogin onClose={closeLogin}/>} */}
    </nav>
    
  );
};

export default AdminNavbar;
