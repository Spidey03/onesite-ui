import React from 'react'
import './logo.css';
import logo from '../../assets/1site.svg'; 

const Logo = () => {
  return (
    <div className='onesite__navbar-links_logo'>
        <img src={logo} alt='logo'/>
    </div>
  )
}

export default Logo