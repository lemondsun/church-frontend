import React from "react";

export default function HomeMainSection() {
  return (
    <div data-test="main-section" class="main-section">
      <div data-test="main-section-info" class="main-section__info">
        <p class='body-header info-header'>our vision</p>
        <p class='body-text info-body-1'>
          We endeavor to encourage individuals to wholly follow the Lord in
          order to promote independent, productive influential men and women of
          God, who will in turn produce Like- Kind. <br /> We further endeavor
          to impact the unchurched in the community, nationally, and globally
          for Christ. We expect to see lives changed through prayer and personal
          appropriation of God’s word in daily living.
        </p>
        <p class='body-header'>His Word</p>
        <p class='body-text info-body-2'>
          <strong>
          For the preaching of the cross is to them that perish foolishness: but
          unto us which are saved it is the power of God.
          </strong>
        </p>
        <p class='body-text'>
          <strong>
            1 Corinthians 1:18
            </strong>
        </p>
      </div>
      <div data-test="main-section-schedule" class="main-section__schedule">
        <p class='body-header schedule-header'>daily schedule</p>
        <p class='body-text schedule-text'>
          <strong>
            Sun</strong> 10 a.m. / Sunday School <br />
                11 a.m. / Praise & Worship <br />
            <strong>Fri</strong> 6  p.m. / Choir Rehearsal <br />
                7:30 p.m. / Bible Study <br />
            <strong>Wed</strong> 7:30 p.m. / Prayer Meeting
          
        </p>
      </div>
    </div>
  );
}
