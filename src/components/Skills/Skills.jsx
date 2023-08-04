import React from 'react'
import '../Skills/Skills.css'
import HTML from "../../assets/html.png"
import CSS from '../../assets/css.png'
import JS from '../../assets/javascript.png'
import LogoReact from '../../assets/reactSkills.png'
import Python from '../../assets/python.png'
import Java from '../../assets/java.png'
import VisualStudio from '../../assets/visualstudio.png'
import Github from '../../assets/Github.png'

function Skills () {
    return (
      <>
      <body>
      <div className="containers">
        <div className="symbol">
            <img src={HTML} alt="" className='imgBx1' style={{ '--i': 1 }}/>
        </div>
        <div className="symbol">
            <img src={CSS} alt="" className='imgBx' style={{ '--i': 2 }}/>
        </div>
        <div className="symbol">
            <img src={LogoReact} alt="" className='imgBx' style={{ '--i': 3 }}/>
        </div>
        <div className="symbol">
            <img src={Python} alt="" className='imgBx' style={{ '--i': 4 }}/>
        </div>
        <div className="symbol">
            <img src={Java} alt="" className='imgBx' style={{ '--i': 5 }}/>
        </div>
        <div className="symbol">
            <img src={VisualStudio} alt="" className='imgBx' style={{ '--i': 6 }}/>
        </div>
        <div className="symbol">
            <img src={Github} alt="" className='imgBx' style={{ '--i': 7 }}/>
        </div>
        <div className="symbol">
            <img src={JS} alt="" className='imgBx' style={{ '--i': 8 }}/>
        </div>
      </div>
      </body>
      </>
    )
  }
  
  export default Skills