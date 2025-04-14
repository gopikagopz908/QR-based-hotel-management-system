import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'

function Layout(){
    return(
<div className="flex flex-col min-h-screen bg-white">
  {/* Fixed Navbar */}
  <div className="fixed top-0 left-0 w-full z-50">
    <Navbar />
  </div>

  {/* Scrollable Content */}
  <div className=" md:p-22 lg:pt-54 p-2 md:px-4 pt-10">
    <Outlet />
  </div>

  {/* Footer always at the bottom */}
  {/* <Footer /> */}
</div>


        
    )
}
export default Layout