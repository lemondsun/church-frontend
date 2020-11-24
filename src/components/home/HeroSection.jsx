import React from 'react'

export default function HeroSection() {
  return (
    <div class="hero-section">
      <div class='hero-section__overlay'></div>
      <img
        data-test='hero-image'
      class='hero-section__hero-image'
      src={require("../../images/heroImage.JPG")}
      alt="The two founding pastors of the church"
      />
      <p
        data-test='hero-main-text'
        class='heading-primary hero-section__hero-image--main-text'
      >
       We strive to<br/>share the love<br/> of God around the world.
      </p>
      <p 
      class='heading-secondary hero-section__hero-image--sub-text'
      >
        Click here to learn more about our ministry <text>&#8594;</text>
      </p>
</div>
  )
}
