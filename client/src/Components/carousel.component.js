import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
      <div class="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay></Carousel>
      <Carousel>
          <div>
              <img src="client/src/screens/Carousel/CarouselImages/hfh hcl.jpeg" />
          </div>
          <div>
              <img src="client/src/screens/Carousel/CarouselImages/hfhtrio.jpeg" />
          </div>
          <div>
              <img src="client/src/screens/Carousel/CarouselImages/ladder.jpeg" />
          </div>
      </Carousel>
  </div>
    );
}