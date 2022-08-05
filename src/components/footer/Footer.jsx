import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Saurabh Kumar</a>
      
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
       <a href='https://www.facebook.com/omkaar.sharma.33' target='_blank'><BsFacebook></BsFacebook></a>
       <a href='https://www.instagram.com/omkaar357/'><BsInstagram></BsInstagram></a>
       <a href='' target='_blank'><FaTwitterSquare></FaTwitterSquare></a>
     </div>

     <div className="footer_copyright">
       <small>&copy; name</small>
     </div>
    </footer>
  )
}

export default Footer