import React from 'react'
import './Testimonials.css'
import avtr1 from '../../assests/lpu.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avtr1,
    name:'Lovely Professional University',
    review:'Bachelor Of Technology (Computer Science Enginerring)',
    year:'2019-2023'
  },
  {
    avatar: avtr1,
    name:'Modern Academy, Gaya',
    review:'Intermediate (Science)',
    year:'2017-2018'
  },
  {
    avatar: avtr1,
    name:'Army public School, Gaya',
    review:'Matriculation',
    year:'2015-2016'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
     <h2>Education</h2>
      
      <Swiper className='container testimonials_container'
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review,year},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client_avtar">
            <img src={avatar} alt="lpu"></img> </div>
            <h2>{name}</h2>
            <h5 className='client_review'>
              {review} <br></br> {year}
            </h5>
         
        </SwiperSlide>
            )
          })
        }

        
      </Swiper>

    </section>
  )
}

export default Testimonials