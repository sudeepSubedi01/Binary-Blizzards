import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Stats from '../../components/Stats'
import Footer from '../../components/Footer'
import Tasks from '../../components/Tasks'
import Activevolunteers from '../../components/Activevolunteers'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Tasks/>
      <Activevolunteers/>
      <Footer/>
    </>
  )
}

export default Homepage