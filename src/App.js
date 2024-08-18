import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'
import Cantact from './Components/Cantact/Cantact'
import LeftProfile from './Components/LeftProfile/LeftProfile'

const App = () => {
  return (
    <div className='container-fluid my-portfolio'>
      <div className='row'>
        <div className='col-md-3'>
          <LeftProfile />
        </div>
        <div className='col-md-9'>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Cantact />
        </div>
      </div>
    </div>
  )
}

export default App
