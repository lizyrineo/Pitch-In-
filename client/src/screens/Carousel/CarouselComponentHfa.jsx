import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

function CarouselComponentHfa() {
  
  return (
    <div className = 'carousel-images'>
      <Carousel
        
        autoPlay interval="4000"
        showArrows={false}
        autoPlay axis="horizontal"
        infiniteLoop
        showThumbs={false}
      >
          
        
          <img src='https://i.imgur.com/Eglh1ND.jpg?4' />
        
        <div>
          <img src="https://i.imgur.com/cW3tMxL.jpg?1" />
        </div>
        <div>
          <img src="https://i.imgur.com/9MrTtiv.jpg?2" />
        </div>
      </Carousel>
      </div>
       );
};
export default CarouselComponentHfa;