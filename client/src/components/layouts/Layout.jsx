import React from 'react'
import "./style.css"
import Navbar from './navbar/Navbar'

const Layout = () => {
  return (
    <div className='container-layout'>
        <div className='container-menu'>
            <Navbar />
        </div>
        <div className='container-contain'>
        Container
        </div>
    </div>
  )
}

export default Layout