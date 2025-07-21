import React from 'react'
import './Project.css'
import { assets } from '../../assets/assets'

const Project = () => {
  return (
    <div id='project'>
        <h2>Projects</h2>
        <p className='project-para'>A glimpse into what I've built</p>
        <div className="project-container">
            <div className="project-card">
                <div className="project-img">
                    <img src={assets.projectthumbnail} alt="" />
                </div>
                <div className="project-details">
                    <h6>Food Delivery App</h6>
                    <p>A modern food delivery web application built using ReactJS. It features dynamic routing, filter products, cart functionality and clean UI.</p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-details">
                    <h6>Next Project Coming Soon...</h6>
                    <p>Currently working on another React-based application. Stay tuned!</p>
                </div>
            </div>
        </div>
</div>
  )
}

export default Project