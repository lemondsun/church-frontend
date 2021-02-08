import React from 'react'
import Logo from '../../images/Logo.png'

export default function HeroSection() {
  return (
    <div class="main-page-hero-section">
     
      <img class='logo' src={Logo} alt=''/>
      <p
        class='heading-primary main-page-hero-section--main-text'
      >
       We strive to<br/>share the love<br/> of God around the world.
      </p>
      <p 
      class='heading-secondary main-page-hero-section--sub-text'
      >
        Click here to learn more about our ministry <text>&#8594;</text>
      </p>
</div>
  )
}
