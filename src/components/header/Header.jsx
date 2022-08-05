import React from 'react'
import './Header.css'
import CTA from './CTA';
import Me from '../../assests/imageface.png';

import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hey there, I'm</h4>
        <h1>Saurabh Kumar</h1>
        <h5 className="text-light">A Software Developer and Security Analyst </h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        
        
        
        <a href='#contact' className='scroll_down'>Scroll Down</a>



      </div>
    </header>
  )
}

export default Header