import React from 'react'
import TestimonyArea from '../components/testimony/TestimonyArea'
import TestimonyBox from '../components/testimony/TestimonyBox'
import { Link } from "react-router-dom";

export default function Testimonies() {
  return (
    <div class='testimony-page'>
      <div class='hero-section'>
        <div class='overlay'></div>
      <img class='hero-section--image' src={require('./../images/testimonyHeroImage.JPG')}/>
        <p class='heading-primary hero-section--header'>Members Testimonies</p>
        <Link to="/contact">
        <p class='hero-section--link'>
          <span class='heading-secondary'>Click here to</span> <br /> <span class='heading-secondary'>share your own testimony.</span>
          </p>
          </Link>
      </div>
      <div class='main-area'>
    
        <TestimonyBox />
        <TestimonyBox />
        <TestimonyBox />
        
      </div>
    
    </div>
  )
}
