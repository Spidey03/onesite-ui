import React from 'react'
import Logo from '../../components/logo/Logo';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <div className='onesite__footer'>
      <div className='onesite__footer-details'>
        <Logo />
        <p>India's property portal, deals with real estate industries consumer needs, in every aspect. It is a place where sellers and buyers can exchange valuable info about real estate properties effectively, without any charge.</p>
        <div className='onesite__footer-details_social-links'>
          <h3><FaFacebook /></h3>
          <h3><FaTwitter /></h3>
          <h3><FaLinkedin /></h3>
        </div>
        <p>© 2022 . All rights reserved.</p>
      </div>
      <div className='onesite__footer-tour'>
        <h4>Take a tour</h4>
        <p>Features</p>
        <p>Partners</p>
        <p>Pricing</p>
        <p>Product</p>
        <p>Support</p>
      </div>
      <div className='onesite__footer-about'>
        <h4>Our Company</h4>
        <p>About Us</p>
        <p>Agents</p>
        <p>Blog</p>
        <p>Media</p>
        <p>Contact Us</p>
      </div>
      <div className='onesite__footer-subscribe'>
        <h4>Subscribe</h4>
        <p>Subscribe to get latest property, blog, news from us</p>
        <input type="email" placeholder='Email Address'></input>
      </div>
    </div>
  )
}

export default Footer