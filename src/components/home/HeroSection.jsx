import React from 'react'
import generic from '../../images/generic.png'
import { Link } from "react-router-dom";

import Pastorscropped from '../../images/Pastorscropped.jpeg';
import Logo from '../../images/Logo.png';


export default function HeroSection() {
  return (
    <div class="main-page-hero-section">
      
    <div class='second-level'>
    <div class='second-level__text-box'>
          <p class='heading-primary second-level__text-box--title'>Judah Tabernacle<br />of Praise</p>
          <img class='logo' src={Logo} alt=''/>
    </div>
  </div>
  <img class='main-page-hero-section__image' src={Pastorscropped} />
  <div class='main-page-hero-section__overlay'>
  </div>
  
      
      
     
     {/* <img class='logo' src={generic} alt=''/>
      <p
        class='heading-primary main-page-hero-section--main-text'
      >
       We strive to<br/>share the love<br/> of God around the world.
      </p>
      <Link to='/ourstory'>
      <p 
      class='heading-secondary main-page-hero-section--sub-text'
      >
        Click here to learn more about our ministry <text>&#8594;</text>
        </p>
  </Link>*/}
</div>
  )
}
