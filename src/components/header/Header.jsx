import React from 'react'
import './header.css'
import CTA from './CTA'
import SHAY5 from '../../assets/SHAY5.png'
import HeaderSocials from './HeaderSocials'



 const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shay Koren</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={SHAY5} alt="" id="imgHeader" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
    
  )
}
export default Header
