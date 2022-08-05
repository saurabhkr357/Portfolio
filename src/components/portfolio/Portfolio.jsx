import React from 'react'
import './Portfolio.css'

import IMG5 from '../../assests/aws.jpg'
import IMG9 from '../../assests/data.png'
import IMG8 from '../../assests/chatbot.png'
import IMG7 from '../../assests/python.png'
import IMG6 from '../../assests/java.png'



const data=[
  {
    id:1,
    image: IMG9,
    title: 'Data Encryption',
    verfiy:'https://www.coursera.org/account/accomplishments/verify/VA2G8WTZH74U',
  },
  {
    id:1,
    image: IMG7,
    title: 'Python programming',
    verfiy:'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bfb5af8b-bc4b-4b2a-a37b-cdfb5339d08e.pdf',
  },
  {
    id:1,
    image: IMG8,
    title: 'Chat Bot',
    verfiy:'https://www.coursera.org/account/accomplishments/verify/EHSFDUNTRBPA',
  },
  {
    id:1,
    image: IMG6,
    title: 'Java Programming',
    verfiy:'https://drive.google.com/file/d/1zGs_yabNP4HTClhBO4SF7Az8F_G5eqhk/view?usp=sharing',
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