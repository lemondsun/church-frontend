import React from 'react'
import TestimonyArea from '../components/testimony/TestimonyArea'
import { Link } from "react-router-dom";

export default function Testimonies() {
  return (
    <div class='testimony-page'>
      <div class='hero-section'>
        <div class='overlay'></div>
      <img class='hero-section--image' src={require('./../images/testimonyHeroImage.JPG')}/>
        <p class='heading-primary hero-section--header'>Members Testimonies</p>
        <p class='hero-section--link'>
          <span class='heading-secondary'>Click here to join</span> <br /> <span class='heading-secondary'>or login to share your testimony.</span>
          </p>
      </div>
      <div class='main-area'>
    
      <TestimonyArea />
      </div>
    
    </div>
  )
}
