import React from 'react';

const CarouselItem = (props) => {
  return (
    <div className='carousel__item'>
      <div className='carousel__img'>
        <img src={props.imageSrc} alt='' width='100%' />
      </div>
      <div className='playBtn__overplay'>
        <a>
          <img />
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
