import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'


import Layout from './layouts/Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Orders from './pages/orders'

function App() {

  return (
    <Router>
      <Routes>
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
