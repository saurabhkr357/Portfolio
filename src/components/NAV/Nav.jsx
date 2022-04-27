import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GrProjects} from 'react-icons/gr'
import {GrCertificate} from 'react-icons/gr'
import {MdOutlineCastForEducation} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ' '}><AiOutlineHome></AiOutlineHome></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'active' : ' '}><AiOutlineUser></AiOutlineUser></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'?'active' : ' '}><BiBook></BiBook></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav==='#services'?'active' : ' '}><GrProjects></GrProjects></a>
       <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active' : ' '}><GrCertificate></GrCertificate></a>
        <a href='#testimonial' onClick={() => setActiveNav('#testimonial')} className={activeNav==='#testimonial'?'active' : ' '}><MdOutlineCastForEducation></MdOutlineCastForEducation></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'?'active' : ' '}><BiMessageSquareDetail></BiMessageSquareDetail></a>
    </nav>
  )
}

export default Nav