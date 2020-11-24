import React from "react";

export default function HomeMainSection() {
  return (
    <div  class="main-section">
      <div class="main-section__left">
        <div class='main-section__left__stream-box'>
          <img class='main-section__left__stream-box--image' src={require('../../images/eventsOptionImage.jpeg')} />
          <p class='main-section__left__stream-box--text'>
            <span class='heading-secondary'>Live stream</span> <br/> <span class='heading-secondary'>our sermons and events.</span>
          </p>
        <div class='main-section__left__stream-box--overlay'></div>
        </div>
        <div class='main-section__left__photos-box'>
        <div class='main-section__left__photo-box--overlay'></div>
          <img class='main-section__left__photos-box--image' src={require('../../images/PastorJohanandPastorAriel.jpg')} />
          <p class='main-section__left__photos-box--header heading-primary'>
            See photos <br/> of members <br/> and events.
          </p>
          <p class='main-section__left__photos-box--text'>
            <span class='heading-secondary'>Click here to see</span><br /> <sapn class='heading-secondary'>more.</sapn>
          </p>
          
        </div>
        
       
      </div>
      <div class="main-section__right">
        <div class='main-section__right__info-section'>
        </div>
        {/*<p class='body-header schedule-header'>daily schedule</p>
        <p class='body-text schedule-text'>
          <strong>
            Sun</strong> 10 a.m. / Sunday School <br />
                11 a.m. / Praise & Worship <br />
            <strong>Fri</strong> 6  p.m. / Choir Rehearsal <br />
                7:30 p.m. / Bible Study <br />
            <strong>Wed</strong> 7:30 p.m. / Prayer Meeting
          
</p>*/}
      </div>
    </div>
  );
}
