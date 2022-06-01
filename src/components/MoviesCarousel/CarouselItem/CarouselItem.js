import React, { useState } from 'react';
import playIcon from '../../../assets/images/play.png';
import './CarouselItem.css';
import Modal from '../../Modal/Modal';
const CarouselItem = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='carouselItem relative'>
        <div className='carouselItem__img'>
          <img src={props.imageSrc} alt='' width='100%' />
        </div>

        <div className='playBtn__overplay absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 '>
          <button onClick={() => setShow(true)}>
            <img src={playIcon} alt='playicon' className='h-20 w-20' />
          </button>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <iframe
          className='w-full '
          height={315}
          src='https://www.youtube.com/embed/mVsJXiI60a0'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Modal>
    </>
  );
};

export default React.memo(CarouselItem);
