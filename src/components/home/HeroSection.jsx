import React from 'react'
import generic from '../../images/generic.png'
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <div class="main-page-hero-section">
     
      <img class='logo' src={generic} alt=''/>
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
        </Link>
</div>
  )
}
