function CarouselComponent2() {
  
  return (
    <Carousel showArrows={true}>
              <div>
                  <img src='https://i.imgur.com/ba4JPGZ.jpg?2' />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="https://i.imgur.com/ZAwKxe5.jpg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="https://www.luvinarms.org/wp-content/uploads/2019/08/Image-from-iOS-69.jpg" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  };
export default CarouselComponent2;