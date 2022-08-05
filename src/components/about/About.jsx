import React from 'react'
import './About.css'

import {FaAward} from 'react-icons/fa'
import {BiGitRepoForked} from 'react-icons/bi'
import {VscFolderOpened} from 'react-icons/vsc'
import Me from '../../assests/imageface.png';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know more</h5>
      <h2 >About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={Me} alt="About Image"/>
          </div>
          </div>
        <div className="about_content">
         <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'></FaAward>
              <h5>Experience</h5>
              <small>Fresher</small>
               
              </article>
           <article className='about_card'>
             <BiGitRepoForked className='about_icon'></BiGitRepoForked>
              <h5>Certifications</h5>
              <small>4+</small>
               
           </article>
           <article className='about_card'>
             <VscFolderOpened className='about_icon'></VscFolderOpened>
              <h5>Projects</h5>
              <small>5+ personal Projects</small>
               
           </article>
         </div>
         <div className="para">
             <p >Enthusiastic developer and security analyst, eager to contribute to team success through hard work and excellent communication and interpersonal skills. Motivated to learn, adapt, grow and excel along with my organization towards fulfilment of the organizational vision.</p>

         </div>
         <div className="button">
             <a  href='#contact' className='btn btn-primary'>Lets Talk</a>
         </div>
         
         </div>

      </div>
    

    </section>
  )
}

export default About