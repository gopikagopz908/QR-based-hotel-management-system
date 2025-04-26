import React from "react";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Navbar";


const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar />
      <div className="flex flex-1 bg-gray-100 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};



export default AdminLayout;