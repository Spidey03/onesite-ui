import React from 'react'
import './header.css';
import header_img from '../../assets/home.png';

const Header = () => {
  return (
    <div className='onesite__header' id="home">
      <div className='onesite__header-content'>
        <h1>Easy way to find a <br />perfect property</h1>
        <p>We provide a complete service for the sale, <br />purchase or rental of real estate.</p>
      </div>
      <div className='onesite__header-image'>
        <img src={header_img} alt='header-img' />
      </div>
    </div>
  )
}

export default Header