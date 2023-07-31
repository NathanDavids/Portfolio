import React from 'react'
import '../home/home.css'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdLightMode} from 'react-icons/md' 
import homeImage from '../../assets/homePicture1.png'

function Home() {
  return (
    <>
    <section className='home'>
      <div className="homeContent container">
        
        <div className="textDiv">
          <h1 className='homeTitle'>
            "Hard Work Beats Talent When Talent Doesn't Work Hard"
          </h1>
        </div>

        <div className="icons grid">
          <BsLinkedin className='icon'/>
          <BsGithub className='icon'/>
          <IoLogoWhatsapp className='icon'/>
          <MdLightMode className='icon'/>
        </div>

        <div className="btn-container">
          <button className='btn-cv'>Download CV</button>
        </div>

        <div className="cardDiv grid">
          <h1 className='nameText flex'> Nathan <span className='surnameText'> Davids</span> Nathan
          <span className='surnameText'> Davids </span> Nathan <span className='surnameText'>Davids</span>
          Nathan <span className='surnameText'>Davids</span> Nathan <span>Davids</span>Nathan <span>Davids</span>
          Nathan <span>Davids</span>
          </h1>
          <img src={homeImage} alt="" className='img' />
        </div>

      </div>
    </section>
    </>
  )
}

export default Home