import React from 'react'

export default function OurStory() {
  return (
    <div class='our-story-page'>
      {/*<div class='our-story-page__hero'>
        <img class='our-story-page__hero--image' src={require('../../src/images/PastorJohanandPastorArielcopy.jpg')}/>
        <p class='our-story-page__hero--header header'>
          <span>Our Story</span>
          <span>Our Song</span>
        </p>
        <div class='overlay'></div>
  </div>*/}
      <div class='story-hero-section'>
      <img class='story-hero-section--image' src={require('../../src/images/PastorJohanandPastorArielcopy.jpg')}/>
      <p class='story-hero-section__header'>
      <span class='story-hero-section__header--top heading-primary'>Our Story</span>
      <span class='story-hero-section__header--bottom heading-primary'>Our Song</span>
    </p>
    <div class='overlay'></div>
      </div>
      <div class='story-main-section'>
        <div class='story-main-section__info'>
          <p class='story-main-section__info--header body-header'>Our Story</p>
          <p  class='story-main-section__info--text body-text'>
          We endeavor to encourage individuals to wholly follow The Lord to promote independent, productive influential men and women of God who will, in turn, produce like-kind.<br/>
          We further endeavor to impact the unchurched in the community, nationally, and globally for Christ. We expect to see lives changed through prayer and personal appropriation of God's word in daily living. 
        </p>
        </div>
        <div class='story-main-section__directions'>
          <p class='story-main-section__directions--header body-header'>Come Hear Our Song</p>
        </div>
      </div>
      
    </div>
  )
}
