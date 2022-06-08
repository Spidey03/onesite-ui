import React from 'react'
import './header.css';
import header_img from '../../assets/home.png';
import header_2 from '../../assets/header2.jpg';

const Header = () => {
  const description = "We provide a complete service for the sale, purchase or rental of real estate."
  return (
    <div className='onesite__header' id="home">

      <div className='onesite__header-content'>
        <h1>Easy way to find a perfect property</h1>
        <p>{description}</p>
      </div>
      <div className='onesite__header-image'>
        <img src={header_2} alt='header-img' />
      </div>
    </div>
  )
}

export default Header