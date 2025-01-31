import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Contect from './Components/Contect'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <Skills/>
     <Portfolio/>
     <Contect/>
     <Footer/>
    </div>
  )
}

export default App
