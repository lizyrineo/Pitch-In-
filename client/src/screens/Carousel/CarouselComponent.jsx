import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

function CarouselComponent() {
  
  return (
      <div className='carousel-container'>
      <Carousel showArrows={true}>
                <div>
                    <img src='https://i.imgur.com/cW3tMxL.jpg' />
                </div>
                <div>
                    <img src="https://i.imgur.com/9MrTtiv.jpg?1" />
                </div>
                <div>
                    <img src="https://i.imgur.com/Eglh1ND.jpg" />
                </div>
      </Carousel>
      </div>
        );
    };
export default CarouselComponent;