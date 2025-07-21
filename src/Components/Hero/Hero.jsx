import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    
    <div id='hero'>
      <div className="blob-bg" />
         <div className="left-hero">
            <h2>Prince</h2>
            <h2>Gohil</h2>
            <p className='hero-title'>I am a <span style={{ color: '#00BFFF', fontWeight: 'bold' }}>
          <Typewriter
            words={['Frontend Developer', 'React Enthusiast', 'UI Designer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></p>
            <p className='hero-description'>I  am a BCA student. I have enough amount of experience in front-end web development. I want to share my work with you and enhance my experience.</p>
            <button type='button'>Download CV</button>
         </div>
         <div className="middle-hero">
          <div className="hero-img">
            <img src={assets.image} alt="Profile-picture" />
          </div>
         </div>
         <div className="right-hero">
          <div className="insta-icon">
            <img src={assets.instagramIcon} alt="" />
          </div>
         </div>
         
    </div>
  )
}

export default Hero