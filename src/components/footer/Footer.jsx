import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nikhil Kumar</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#services">Projects</a> </li>
        <li><a href="#portfolio">Certificates</a> </li>
        <li><a href="#testimonial">Education</a> </li>
        <li><a href="#contact">Contact Me</a> </li>

      </ul>
     <div className="footer_socials">
       <a href='https://www.facebook.com/profile.php?id=100009296887327' target='_blank'><BsFacebook></BsFacebook></a>
       <a href='#'><BsInstagram></BsInstagram></a>
       <a href='https://twitter.com/nikhiln2206' target='_blank'><IoLogoTwitter></IoLogoTwitter></a>
     </div>

     <div className="footer_copyright">
       <small>&copy; Nikhil Kumar. All right reserved</small>
     </div>
    </footer>
  )
}

export default Footer