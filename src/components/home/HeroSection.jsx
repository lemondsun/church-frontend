import React from 'react'

export default function HeroSection() {
  return (
    <div class="hero-section">
      <img
        data-test='hero-image'
      class='hero-section__hero-image'
      src={require("../../images/PastorJohanandPastorArielcopy.jpg")}
      alt="The two founding pastors of the church"
      />
      <p
        data-test='hero-main-text'
        class='heading-primary hero-section__hero-image--main-text'
      >
       Judah Tabernacle <br/>of Praise
      </p>
      <p data-test='hero-sub-text'
      class='heading-secondary hero-section__hero-image--sub-text'
      >
        Learn more about our ministries <text>&#8594;</text>
      </p>
</div>
  )
}
