import React from 'react'
import './About.css'
import ME from '../../assests/aboutimage.jpg'
import {FaAward} from 'react-icons/fa'
import {BiGitRepoForked} from 'react-icons/bi'
import {VscFolderOpened} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2 >About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
          </div>
        <div className="about_content">
         <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'></FaAward>
              <h5>Experience</h5>
              <small>1+ years Working</small>
               
           </article>
           <article className='about_card'>
             <BiGitRepoForked className='about_icon'></BiGitRepoForked>
              <h5>Contributions</h5>
              <small>146+</small>
               
           </article>
           <article className='about_card'>
             <VscFolderOpened className='about_icon'></VscFolderOpened>
              <h5>Projects</h5>
              <small>10+ personal Projects</small>
               
           </article>
         </div>
         <div className="para">
             <p >Open Source Contributor in 10+ projects during hactoberfest , Contributor in GirlScript Winter of Contributing , Member of 3 Months Google
                  Cloud Readiness Programme . I've worked with various types of personal projects and have mastered multiple programming languages and coding as well as various cloud technologies like AWS, GCP. Enthusiast to learn, grow and excel .</p>

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