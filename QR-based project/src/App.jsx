import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import {BrowserRouter as Router,Routes,Route,Link, Navigate}from 'react-router-dom'


import Layout from './layouts/Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Orders from './pages/orders'
import AdminLayout from './pages/Admin/AdminLayout'
import DashBoard from './pages/Admin/DashBoard'
import Foods from './pages/Foods'
import Table from './pages/Admin/Table'
import { useAuthContext } from './context/authContext'
import AdminLoginPage from './pages/Admin/LoginPage'
// import AdminOrders from './pages/Admin/Orders'
function App() {
  const {role}=useAuthContext();

  return (
    <Router>
      <Routes>
      <Route path='/admin/login' element={<AdminLoginPage/>} />
{role ? (
 <Route path="/admin" element={<AdminLayout />}>
 <Route index element={<DashBoard/>}/>
 <Route path="foods" element={<Foods/>}/>
 <Route path="tables" element={<Table/>}/>
 {/* <Route path="orders" element={<AdminOrders/>}/> */}
</Route>
):(
  <Route path="/admin/*" element={<Navigate to="/" />} />
)}
       


        <Route element={<Layout />}>
          <Route   index  element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Route>
        <Route path="/orders" element={<Orders/>}/>

      </Routes>
    </Router>
  )
}

export default App
