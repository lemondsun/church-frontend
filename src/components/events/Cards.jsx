import React from "react";

export default function Cards(props) {
  return (
    
      
    <div class="card">
      <div class="card__side card__side--front">
        <img
          class="card__picture card__picture--1"
          src={require(`../../images/${props.highlights.eventImage}.jpg`)}
          alt="album highlight"
        />

        <h4 class="card__heading">
          <span class="card__heading-span card__heading-span--1">
            {props.highlights.eventTitle}
          </span>
        </h4>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__cta">
          <div class="card__price-box">
            <p class="card__price-only">{props.highlights.eventTitle}</p>
          </div>
          <a href="#" class="btn btn--white">
            See More
          </a>
        </div>
      </div>
  </div>
  );
}
