import React from 'react'

import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/NAV/Nav'
import Services from './components/services/Services'
import Testimonials from './components/testiomonials/Testimonials'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header></Header>
      <Nav />
       <About />
       <Experience></Experience>
       <Services></Services>
       <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App