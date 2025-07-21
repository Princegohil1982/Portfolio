import { useState } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import { Element } from 'react-scroll'




function App() {
  

  return (
    <>
    <Navbar />
    <Element name='hero'><Hero /></Element>
    <Element name='about'><About /></Element>
    <Element name='skills'><Skills /></Element>
    <Element name='project'><Project /></Element>
    <Element name='contact'><Contact /></Element>
    
    
    
    
    </>
  )
}

export default App
