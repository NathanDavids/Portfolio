import React from 'react'
import '../about/About.css'
import {FaGreaterThan} from 'react-icons/fa'
import AboutImg from '../../assets/AboutPicture.png'

function About() {
   return (
    <>
     <section className='about h-screen'>
      <div className="aboutContent">
        <div className="imgContainer">
          <img src={AboutImg} alt="" className='aboutImg' />
        </div>
      </div>
    </section>
    </>
  )
}

export default About