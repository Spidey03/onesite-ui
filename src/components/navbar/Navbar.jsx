import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/1site.png'; 

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#properties">Properties</a></p>
  <p><a href="#agents">Agents</a></p>
  <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='onesite__navbar'>
      <div className='onesite__navbar-links'>
        <div className='onesite__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='onesite__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='onesite__navbar-login'>
        <button type='button'>Login</button>
      </div>
      <div className='onesite__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
        : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
      }
      {toggleMenu && (
        <div className='onesite__navbar-menu_container scale-up-center'>
          <div className='onesite__navbar-menu_container-links'>
            <Menu/>
            <div className='onesite__navbar-menu_container-links-login'>
              <button type='button'>Login</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar