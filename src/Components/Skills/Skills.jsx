import React from 'react'
import './Skills.css'
import { assets } from '../../assets/assets'

const Skills = () => {
    return (
        <div className='skills'>
            <h2>My Skills</h2>
            <h4>Frontend Developer</h4>
            <div className="skills-container">
                <div className="skill-card">

                    <img src={assets.html} alt="" />


                    <p>HTML</p>
                    <p>Advanced</p>

                </div>
                <div className="skill-card">

                    <img src={assets.css} alt="" />


                    <p>CSS</p>
                    <p>Advanced</p>

                </div>
                <div className="skill-card">

                    <img src={assets.js} alt="" />


                    <p>JavaScript</p>
                    <p>Intermidiate</p>

                </div>
                <div className="skill-card">

                    <img src={assets.react} alt="" />


                    <p>React</p>
                    <p>Basic</p>

                </div>
            </div>
        </div>
    )
}

export default Skills