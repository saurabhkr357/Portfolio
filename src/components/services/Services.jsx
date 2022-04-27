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
            <h3>Alexa Skill</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Created Alexa Skill Game </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>It is basically Rock , Paper ,Scissor Game </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> Gives user to choose any one from Rock , Paper , Scissor and takes voice input and randomy picks any one by itself and matches according to rule. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>More than 2lakhs+ customer till date and still counting. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="https://www.amazon.in/nikhil-kumar-game/dp/B07W8CRPPJ/ref=sr_1_1?crid=GWM9YLYOOYU9&keywords=game+by+nikhil+kumar&qid=1650994477&s=digital-skills&sprefix=%2Calexa-skills%2C373&sr=1-1  " target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        {/* END OF ANOHTET */}
        <article className="services">
          <div className="service_head">
            <h3>Portfolio Website</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Created my portfolio website </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Technologies used :  HTML , CSS , JavaScript , React , Emailjs </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Viewers can view my portfolio at one place in a attractive way . They can also download my Resume from the website </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Users can connect and send email easily using connect me option and just writing the message in text box and send message option  </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href='#'>Demo</a> </p>
            </li>
          </ul>
        </article>
        {/* end of one UI */}
        <article className="services">
          <div className="service_head">
            <h3>Machine Learning Project</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Created project on HR CHURN PREDICTION </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Technology Used : Data Cleaning , Data collection, ML algorithms </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Created a Alogritm to predict whether a candidate Applying for the job will accept the job over after the recruitment process is over. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Used ETL process to clean the collected data and then used various ML algorithm to predict. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href='https://github.com/nikhil2222/-HR-CHURN-PREDICTION' target='_blank' > Code Link </a></p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services