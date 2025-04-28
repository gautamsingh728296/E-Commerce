import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo_big.png'
import nav_profile from '../../assets/logo_big.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} className='nav_logo' alt="" />
      <img src={nav_profile} className='nav_profile' alt="" />
    </div>
  )
}

export default Navbar
