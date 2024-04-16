import React, { useState } from 'react'
import images from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import "./navbar.css"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='nav__navbar'>
      <div className="gericht_logo">
         <img src={images.gericht} alt='Logo'/>
      </div>
      <ul className='nav__navbar__links'>
        <li className='p__text_navbar'><a href="#home">Home</a></li>
        <li className='p__text_navbar'><a href="#about">AboutUS</a></li>
        <li className='p__text_navbar'><a href="#menu">Menu</a></li>
        <li className='p__text_navbar'><a href="#awards">Awards</a></li>
        <li className='p__text_navbar'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar_login">
         <a href="#login"className='p__text_navbar'>Log In / Registration</a>
         <div/>
         <a href="#" className='p__text_navbar'>Book Table</a>
      </div>
      <div className="nav__navbar_smallScreen">
         <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggle(true)}/>
         {toggle && (
            <>
               <div className="nav__navbar-small-screen_menu">
                  <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggle(false)}/>
                  <ul className='nav__navbar__links-menu' style={{paddingTop:"12rem"}}>
                  <li><a href="#home"onClick={() => setToggle(false)}>Home</a></li>
                  <li><a href="#about"onClick={() => setToggle(false)}>AboutUS</a></li>
                  <li><a href="#menu"onClick={() => setToggle(false)}>Menu</a></li>
                  <li><a href="#awards"onClick={() => setToggle(false)}>Awards</a></li>
                  <li><a href="#contact"onClick={() => setToggle(false)}>Contact</a></li>
                </ul>
               </div>
            </>
         )}
      </div>
    </nav>
  )
}

export default Navbar
