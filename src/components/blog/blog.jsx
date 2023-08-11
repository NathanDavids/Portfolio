import React from 'react'
import '../blog/blog.css'
import '../../App.css'
import BlogHeader from '../../assets/BlogHeader.png'
import PostOne from '../../assets/One.png'
import PostTwo from '../../assets/Two.png'
import PostThree from '../../assets/Three.png'

const Blog = () => {
    return (
      <>
      <section className='blog'>
        <div className='blogContent'>
            <div className="blogImage">
                <h1 className='blogHeading'> BLOG </h1>
            </div>
            <div className="blogPostContainer">
                <div className="blogPost">
                  <div className="postOne">
                    <img src={PostOne} alt="" />
                    <h2 className='postHeading'>Working World</h2>
                    <p className='postText'> The start of my journey into becoming an adult... </p>
                    <br />
                    <button className='readMore'> Read More </button>               
                  </div>
                  <div className="postTwo">
                    <img src={PostTwo} alt="" />
                    <h2 className='postHeading'>New Beginnings</h2>
                    <p className='postText'> The opportunity I've been waiting for... </p>
                    <br />
                    <button className='readMore'> Read More </button> 
                  </div>
                  <div className="postThree">
                    <img src={PostThree} alt="" />
                    <h2 className='postHeading'>One Step Closer</h2>
                    <p className='postText'> 6 months later and phase 2 has begun... </p>
                    <br />
                    <button className='readMore'> Read More </button> 
                  </div>
                </div>
            </div>
        </div>
      </section>
      </>
    )
  }
  
  export default Blog