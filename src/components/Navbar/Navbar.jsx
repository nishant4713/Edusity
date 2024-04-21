import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky,setsticky] = useState(false);
  useEffect(()=>{
  window.addEventListener('scroll',()=>{
       window.scrollY > 50 ? setsticky(true) : setsticky(false); 
  })
  },[])
  const [mobilemenu,setmobilemenu] = useState(false);
  const togglemenu = ()=>{
           mobilemenu?setmobilemenu(false) : setmobilemenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt='' className='logo'></img>
        <ul className={mobilemenu? '':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration = {500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-220} duration = {500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-120} duration = {500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-220} duration = {500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-220} duration = {500}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-220} duration = {500}>Contact Us</Link></button></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={togglemenu}></img>
    </nav>
  )
}

export default Navbar
