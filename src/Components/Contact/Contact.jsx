import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <h2>Contact Me</h2>
        <p>Let's connect! I'm open to internships, freelance work, and entry-level roles.</p>
        <div className="contact-btn">
            <button type="button" className="btn">Email</button>
            <button type="button" className="btn">LinkedIn</button>
            <button type="button" className="btn">Github</button>
        </div>
    </div>
  )
}

export default Contact