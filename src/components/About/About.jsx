import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} className='about-img'></img>
        <img src={play_icon} className='play-icon' onClick={()=>{
          setplaystate(true)
        }}></img>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomrrow's Leaders Today</h2>
        <p>Our passionate faculty members are experts in their fields, committed to nurturing the next generation of leaders and thinkers. Through personalized attention and hands-on experiences, students at Edusity are equipped with the skills, knowledge, and confidence to succeed in a rapidly evolving global landscape.</p>
        <p>Whether you're pursuing undergraduate studies, graduate programs, or professional development courses, offers a diverse range of academic disciplines and extracurricular opportunities to explore your passions and expand your horizons.</p>
        <p>Located in the heart of , our state-of-the-art facilities provide a stimulating setting for learning, collaboration, and discovery. With access to cutting-edge resources and technology, students at  are empowered to push the boundaries of knowledge and make meaningful contributions to society.</p>
      </div>
    </div>
  )
}

export default About
