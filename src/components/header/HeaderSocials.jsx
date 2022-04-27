import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/nikhilkumar2206/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/nikhil2222' target="_blank"><FaGithub></FaGithub></a>
        <a href='https://www.codechef.com/users/nikhil2209' target="_blank"><SiCodechef></SiCodechef></a>
        <a href='https://leetcode.com/Nikhil2209/' target="_blank"><SiLeetcode></SiLeetcode></a>
    </div>
  )

}

export default HeaderSocials