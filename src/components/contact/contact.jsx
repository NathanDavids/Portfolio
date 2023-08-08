import React from 'react'
import '../contact/contact.css'
import location from '../../assets/location.png' 
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function Contact () {
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
    return (
      <>
      <section className='contact'>
        <div className="contactContainer">
            <div className="form1">
                <div className="contact-info">
                    <h3 className='title'>Let's get in touch</h3>
                    <p className='text'>
                    It would be amazing to chat, exchange ideas, and explore potential collaboration opportunities.
                    Let's schedule a call or grab a coffee sometime soon. Looking forward to hearing from you and embarking on an exciting journey of creativity together.
                    </p>
                    <div className="info">
                        <div className="information">
                            <img src={location}alt="" className='icon'/>
                            <p>Cape Town, South Africa</p>
                        </div>
                        <div className="information">
                            <img src={email}alt="" className='icon'/>
                            <p>nathandavids935@gmail.com</p>
                        </div>
                        <div className="information">
                            <img src={phone}alt="" className='icon'/>
                            <p>+27 61 679 2852</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <p>Socials:</p>
                        <div className="social-icons">
                            <a href="#">
                                <BsLinkedin classList='social-icon'/>
                            </a>
                            <a href="#">
                                <BsGithub classList='social-icon'/>
                            </a>
                            <a href="#">
                                <BsWhatsapp classList='social-icon'/>
                            </a>
                            <a href="#">
                                <BsInstagram classList='social-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="index.html" className='form'>
                        <h3 className='title'> Contact Me </h3>
                        <div className="input-container focus">
                            <input type="text" name='name' className='input' />
                            <label htmlFor="" className='label'> Name </label>
                            <span className='animationSpan'>Name</span>
                        </div>
                        <div className="input-container focus">
                            <input type="email" name='email' className='input' />
                            <label htmlFor="" className='label'> Email </label>
                            <span className='animationSpan'>Email</span>
                        </div>
                        <div className="input-container focus">
                            <input type="tel" name='phone' className='input' />
                            <label htmlFor="" className='label'> Phone Number </label>
                            <span className='animationSpan'>Phone Number</span>
                        </div>
                        <div className="input-container textarea">
                            <textarea name='message' className='textarea' />
                            <label htmlFor="" className='labelTextarea'> Message </label>
                            <span className='animationSpan'>Message</span>
                        </div>
                        <button type='submit' className='btn'> Send </button>
                    </form>
                </div>
            </div>

        </div>
      </section>
      </>
    )
  }
  
  export default Contact