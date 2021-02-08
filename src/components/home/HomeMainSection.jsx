import React from "react";

export default function HomeMainSection() {
  return (
    <div>
      
    <div class="main-section">
      <div class="main-section__left">
        <div class='main-section__left__stream-box'>
          <img class='main-section__left__stream-box--image' src={require('../../images/eventsOptionImage.jpeg')} />
          <p class='main-section__left__stream-box--text'>
            <span class='heading-secondary'>Live stream</span> <br/> <span class='heading-secondary'>our sermons and events.</span>
          </p>
        <div class='main-section__left__stream-box--overlay'></div>
        </div>
        <div class='main-section__left__photos-box'>
          <img class='main-section__left__photos-box--image' src={require('../../images/PastorJohanandPastorAriel.jpg')} />
          <p class='main-section__left__photos-box--header heading-primary'>
            Read our <br/>members testimonies.
          </p>
          <p class='main-section__left__photos-box--text'>
            <span class='heading-secondary'>Click here to see</span><br /> <sapn class='heading-secondary'>more.</sapn>
          </p>
          <div class='main-section__left__photos-box--overlay' ></div>
        </div>
      </div>

      <div class="main-section__right">
        <div class='main-section__right__calendar'>
          <p class='main-section__right__calendar--header heading-primary'>
            Our Calendar
            </p>
          <p class='main-section__right__calendar--body'>
          <span class='calendar-text body-text'>
              Sunday Service : 11 AM
          </span>
            <hr class="solid"></hr>
          <span class='calendar-text body-text'>
              Friday Service : 7 PM
          </span>
          <hr class="solid"></hr>
          <span class='calendar-text body-text'>
              Wednesday Prayer : 7 PM
          </span>
          <hr class="solid"></hr>
          </p>
        </div>
        
      </div>
      </div>
      </div>
  );
}
