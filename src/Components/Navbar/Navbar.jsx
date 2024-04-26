import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav_logo.png'
import navProfile from '../../assets/nav_profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={navlogo} alt="" />
        <p>Admin Panel</p>
        <img src={navProfile} className='nav-Profile' alt="" />
    </div>
  )
}

export default Navbar