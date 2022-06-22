import React from 'react'
import './cta.css';
import cta from '../../assets/cta.png';

const CTA = () => {
  return (
    <div className='onesite__cta'>
      <div className='onesite__cta-content'>
        <h1>Find your best Real Estate</h1>
        <p>We provide a complete service for the sale, purchase or rental of real estate</p>
        <button type='button'>Contact Us</button>
      </div>
      <div className='onesite__cta-image'>
        <img src={cta} alt="cta" />
      </div>
    </div>
  )
}

export default CTA