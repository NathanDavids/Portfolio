import React from 'react'
import '../home/home.css'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdLightMode} from 'react-icons/md' 
import homeImage from '../../assets/homeImage.png'

function Home() {
  return (
    <>
    <section className='home'>
      <div className="homeContent container">
        <div className="homeQuote grid">
          "Hard Work Beats Talent When Talent <span className='quoteRed'> Doesn't Work Hard" </span>
          </div>
          <div className='icons grid'>
            <BsLinkedin className="icon"/>
            <BsGithub className="icon"/>
            <IoLogoWhatsapp className="icon"/>
            <MdLightMode className="icon"/>
          </div>
          <div className='btn-container grid'>
            <button className='btn-cv'> Download CV </button>
          </div>
        <div className="textDiv grid">
          <h1 className='textName'><b>Nathan</b> <span className='textSurname'>Davids</span> Nathan <span 
          className='textSurname'>Davids</span>  Nathan <span 
          className='textSurname'>Davids</span>  Nathan <span 
          className='textSurname'>Davids</span>  Nathan <span 
          className='textSurname'>Davids</span>  Nathan <span 
          className='textSurname'>Davids</span>
          </h1>
        </div>
        <div className='mainPicture grid'>
            <img src={homeImage} alt="" className='mainImg' />
          </div>
      </div>
    </section>
    </>
  )
}

export default Home