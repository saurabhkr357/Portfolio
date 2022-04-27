import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h4>HTML</h4>
                 <small className='text-light'>Experienced</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>CSS</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                <div>
                   <h4>JavaScript</h4>
                 <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>Bootstrap</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>React</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>
            </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
            <h3>Programming Languages</h3>
            <div className="experience_content">
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>C</h4>
                 <small className='text-light'>Experienced</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>C++</h4>
                 <small className='text-light'>Experienced</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>Java</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                <div>
                   <h4>Python</h4>
                 <small className='text-light'>Intermediate</small>
                </div>
              </article>

              
            </div>
        </div>

        {/* next */}
        <div className="Cloud Technologies">
            <h3>Cloud Technologies</h3>
            <div className="experience_content">
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>Amazon Web Services</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                <div> <h4>Google Cloud Platform</h4>
                 <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                <div>
                   <h4>Microsoft Azure</h4>
                 <small className='text-light'>Beginner</small>
                </div>
              </article>
              
            </div>
        </div> 

        {/* trchnolgy */}
        <div className="experience_backend">
            <h3>Technologies</h3>
            <div className="experience_content">
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>Machine Learning</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>Artificial Intelligence </h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                 <div>
                   <h4>MySql</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons'></BsPatchCheckFill>
                <div>
                   <h4>Tableau</h4>
                 <small className='text-light'>Intermediate</small>
                </div>
              </article>

              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience