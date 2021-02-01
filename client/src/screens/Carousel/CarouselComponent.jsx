import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent() {
  
    return (
      <Carousel showArrows={true}>
                <div>
                    <img src='https://i.imgur.com/cW3tMxL.jpg' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/9MrTtiv.jpg?1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/Eglh1ND.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    };
export default CarouselComponent;