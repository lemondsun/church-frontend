import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";


export default function HomeBottomSection() {
  return (
    <div class='bottom-section'>
    <Carousel controls={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../../images/Jonielle.jpg")}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../../images/ChildandMan.jpg")}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../../images/Tamara.jpg")}
        alt="Third slide"
      />
    </Carousel.Item>
      </Carousel>
      <Link>
      <p class='heading-secondary bottom-section--sub-header'>
          See galleries of our events
      </p>
      </Link>
    </div>
  )
}
