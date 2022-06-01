import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CarouselItem from './CarouselItem/CarouselItem';
import './index.css';
import { imagesCarousel } from '../../assets/images/imagesCarousel';

const MoviesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    centerPadding: '60px',

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='moviesCarousel mb-6'>
      <Slider {...settings}>
        {imagesCarousel.map((image, i) => (
          <CarouselItem key={image + i} imageSrc={image} />
        ))}
      </Slider>
    </section>
  );
};

export default React.memo(MoviesCarousel);
