import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../src/layouts/Layout';
import Home from '../src/Home';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Orders from './pages/orders';
import DashBoard from './pages/Admin/DashBoard';
import StaffTable  from '../src/pages/Admin/Staff'
import Table from './pages/Admin/Table';
import { useAuthContext } from '../src/context/authContext';
import AdminLoginPage from './pages/Admin/LoginPage';
import UserLogin from './pages/UserLogin';
import AdminLayout from './pages/Admin/AdminLayout';
import ChefOrders from './pages/Admin/chefOrders';
import AdminOrdersPage from './pages/Admin/Orders';
import SupplierList from './pages/Admin/SupplierList';
import AdminProductList from './pages/Admin/AdminProductList';
import Foods from './pages/Admin/Foods';


const AppRoutes = () => {
  const { role } = useAuthContext();
console.log(role,"roleee")
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {role==="Admin" ? (
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="foods" element={<Foods/>} />
          <Route path="tables" element={<Table />} />
          <Route path="staffs" element={<StaffTable/>} />
         <Route path="list" element={<AdminProductList />} />
        </Route>
      ) : (
        <Route path="/admin/*" element={<Navigate to="/" />} />
      )}


{role==="cheff" ? (
        <Route path="/staff" element={<AdminLayout />}>
          <Route index element={<SupplierList />} />
          </Route>
      ) : (
        <Route path="/staff/*" element={<Navigate to="/" />} />
      )}  





      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<UserLogin />} />
      </Route>

      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default AppRoutes;
