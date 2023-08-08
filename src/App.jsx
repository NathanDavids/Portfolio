import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/contact'

function App() {
   return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Experience/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
