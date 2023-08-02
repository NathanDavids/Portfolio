import React from 'react'
import '../about/About.css'
import {FaGreaterThan} from 'react-icons/fa'
import AboutImg from '../../assets/AboutPicture.png'

function About() {
   return (
    <>
    <section className='about container section'>
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="aboutMe">
            <div className="aboutMeHeading">
            <h2>About Me</h2> <hr className='aboutLine'/>
            </div>
            <div className="aboutBlocks">
              <div className="aboutImg1">
                <img src={AboutImg} alt="" className='aboutPicture'/>
              </div>
              <div className="aboutText">
                <div className="aboutTextHeading">
                <h2>FULL-STACK DEVELOPER</h2>
                </div>
                <div className="subheading">
                Hi there, I'm Nathan Davids, a passionate software developer with a love for coding and creating elegant, efficient solutions.
                </div>
                <div className="topArrows">
                  <FaGreaterThan className='icon'/> Age: 23 <FaGreaterThan className='icon'/> City: Cape Town, South Africa 
                </div>
              </div>
            </div>
          </div>
          <div className="aboutInterests">
            <div className="interestsContainer">
              <h2>Interests</h2> <hr className='line'/>
              <div className="interestList">
                <div className="sports">
                  <h3 className='interestText'>Sports</h3>
                </div>
                <div className="gaming">
                  <h3 className='interestText'>Gaming</h3>
                </div>
                <div className="webDev">
                  <h3 className='interestText'>Web Development</h3>
                </div>
              </div>
              <div className="interestList">
                <div className="AppDev">
                  <h3 className='interestText'>App Development</h3>
                </div>
                <div className="Cyber">
                  <h3 className='interestText'>Cyber-Security</h3>
                </div>
                <div className="Ai">
                  <h3 className='interestText'>Artificial Intelligence</h3>
                </div>
              </div>
              <div className="workHeading">
              <hr className='line1'/> <h2 className='Work'>Work</h2> <hr className='line2'/>
              </div>
              <div className="workList">
                <div className="projects">
                  00 <br/> Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About