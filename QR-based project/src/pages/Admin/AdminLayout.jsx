import React from "react";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Navbar";


const AdminLayout = () => {
  return (
    <nav className="h-screen">
    <AdminNavbar/>
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet/>
      </main>
    </div>
    </nav>
  );
};



export default AdminLayout;