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
      <p data-test='hero-main-text'>
      </p>
      <p data-test='hero-sub-text'>
      </p>
</div>
  )
}
