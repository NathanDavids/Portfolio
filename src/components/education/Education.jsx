import React, { useRef } from 'react'
import '../education/Education.css'
import '../../App.css'
import LiIcon from '../education/LiIcon.jsx'
import { motion, useScroll } from "framer-motion"


const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);
    return (<li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between'>

        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href="www.google.com" target='_blank' className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
      <>
      <div className='my-64 bg-white'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-8 w-[4px] h-full bg-black origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Information Management " company="Damelin"
                time="2018 - 2021" address="mowbray, cape town"
                work="A Bachelor of Commerce in Information Management blends business knowledge with technical skills to manage data effectively. Graduates learn to design efficient information systems, make data-driven decisions, and ensure data security. Career options include data analysts, IT consultants, and information systems managers."
                />

                <Details
                position="Information Management " company="Damelin"
                time="2018 - 202" address="mowbray, cape town"
                work="A Bachelor of Commerce in Information Management blends business knowledge with technical skills to manage data effectively. Graduates learn to design efficient information systems, make data-driven decisions, and ensure data security. Career options include data analysts, IT consultants, and information systems managers."
                />

                <Details
                position="Information Management " company="Damelin"
                time="2018 - 202" address="mowbray, cape town"
                work="A Bachelor of Commerce in Information Management blends business knowledge with technical skills to manage data effectively. Graduates learn to design efficient information systems, make data-driven decisions, and ensure data security. Career options include data analysts, IT consultants, and information systems managers."
                />
            </ul>

        </div>
      </div>
      </>
    )
  }
  
  export default Education