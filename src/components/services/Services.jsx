import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
     <h5>My </h5>
      <h2>Projects</h2>
      <div className='cointainer service_container'>
        <article className="services">
          <div className="service_head">
            <h3>Python 3 Ethical Hacking</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Code pentesting tools. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Learnt to discover vulnerabilities. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Sniff on data.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Create a python keylogger. </p>
            </li>
            
          </ul>
        </article>
        {/* END OF ANOHTET */}
        <article className="services">
          <div className="service_head">
            <h3>Browsing Games</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>It's a project based on web development. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Fetching API and displaying the contents of various games. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>On this webpage, you can browse different games and their properties like platforms, genres etc.</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="https://saurabhkr357.github.io/Browsing-games/" target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        {/* end of one UI */}
        <article className="services">
          <div className="service_head">
            <h3>Personal Portfolio</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>My personal portfolio project where I built my own professional webpage using web developer tools.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Tools used--> Nodejs, ReactJs, HTML, CSS, JavaScript. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> Viewers can view my portfolio at one place in an attractive way, download my resume, connect with me on various platforms using the links provided on the site.</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="" target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services