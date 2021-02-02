import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

function CarouselComponentLa() {
  
  return (
    <div className = 'carousel-images'>
    <Carousel
        
        autoPlay interval="4000"
        showArrows={false}
        autoPlay axis="horizontal"
        infiniteLoop
        showThumbs={false}
      >
    <div>
      <img src='https://i.imgur.com/ba4JPGZ.jpg?2' />
    </div>
    <div>
      <img src="https://i.imgur.com/ZAwKxe5.jpg" />
    </div>
    <div>
      <img src="https://i.imgur.com/HI12yoZ.jpg?2" />
    </div>
    </Carousel>
    </div>
      );
  };
export default CarouselComponentLa;