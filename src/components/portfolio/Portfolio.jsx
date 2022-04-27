import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assests/gce.jpeg'
import IMG2 from '../../assests/ml.png'
import IMG3 from '../../assests/pyt.png'
import IMG4 from '../../assests/gwsoc.png'
import IMG5 from '../../assests/aws.jpg'
import IMG6 from '../../assests/web.png'


const data=[
  {
    id:1,
    image: IMG1,
    title: 'Architecting with Google Compute Engine',
    verfiy:'https://www.coursera.org/account/accomplishments/specialization/EJGK5J63AKX6',
  },
  {
    id:1,
    image: IMG2,
    title: 'Machine Learning',
    verfiy:'https://www.linkedin.com/posts/nikhilkumar2206_certificate-of-completion-activity-6819182319988027392-e0fB?utm_source=linkedin_share&utm_medium=member_desktop_web',
  },
  {
    id:1,
    image: IMG3,
    title: 'Machine Learning With Python',
    verfiy:'https://courses.cognitiveclass.ai/certificates/e0c2131784274f07a2718d3f502f9878',
  },
  {
    id:1,
    image: IMG4,
    title: 'GWSOC',
    verfiy:'https://www.linkedin.com/posts/nikhilkumar2206_certificate-activity-6885780838651330560-tqn5?utm_source=linkedin_share&utm_medium=member_desktop_web',
  },
  {
    id:1,
    image: IMG5,
    title: 'Amazon web Services',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG6,
    title: 'Full Stack and Front End',
    verfiy:'https://www.linkedin.com/learning/certificates/4c81a13f05c68b26930095748f432d4954289ddc8db23208aa0b02a415a24305?trk=share_certificate',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Certificates</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,verfiy}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
         <div className="portfolio_item-cta">
            <a href={verfiy} className='btn' target='_blank'>Verify</a>
          
         </div>
        </article>
            )
          })
        }

        

        
      </div>
      
      </section>
  )
}

export default Portfolio