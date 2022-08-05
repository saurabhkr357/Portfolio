import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiHackerrank} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/saurabh-kumar-468384195/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/saurabhkr357' target="_blank"><FaGithub></FaGithub></a>
        <a href='https://www.hackerrank.com/saurabhkr357' target="_blank"><SiHackerrank></SiHackerrank></a>
       
    </div>
  )

}

export default HeaderSocials