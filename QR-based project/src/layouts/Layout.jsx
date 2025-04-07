import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout(){
    return(
<div className='w-full h-screen bg-white '>
<Navbar/>
<Outlet/>
<Footer/> 

        </div>
    )
}
export default Layout