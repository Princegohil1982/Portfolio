import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className="left-nav">
            <h1>Prince</h1>
         </div>
         <div className="right-nav">
            <ul>
                <li><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='project' smooth={true} duration={500}>Projects</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
         </div>
    </div>
  )
}

export default Navbar