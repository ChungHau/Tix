import React, { useState } from 'react';
import playIcon from '../../assets/images/play.png';
import Modal from '../Modal/Modal';

const SliderItem = ({ movie }) => {
  const [show, setShow] = useState(false);
  console.log('render');
  return (
    <div className='moviesItem px-3'>
      <div className='moviesItem__container'>
        <div className='moviesItem__img h-full relative'>
          <a
            href='#'
            className='moviesItem__img__link block h-full w-full pt-[120%]'
            style={{
              background:
                'url("https://movie0706.cybersoft.edu.vn/hinhanh/black-adam_gp09.jpeg") center center / cover no-repeat',
            }}
          />
          <div className='playBtn__overplay hidden md:block absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 '>
            <button onClick={() => setShow(true)}>
              <img src={playIcon} alt='playicon' className='h-14 w-14' />
            </button>
          </div>
          <div className='imgOverplay w-full h-full absolute top-0 left-0'></div>
        </div>
        <div className='moviesItem__footer mt-4 bg-slate-900 h-10 hidden md:block'>
          <div className='moviesItem__text flex'>
            <p className='text-white px-1 bg-indigo-700 rounded'>C13</p>
            <p className='text-white font-bold ml-4 flex-1'>Black Adam</p>
          </div>
          <div className='moviesItem__btn mt-4 py-2 w-full rounded text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700'>
            <a href='#'>CHI TIẾT</a>
          </div>
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
    </div>
  );
};

export default SliderItem;
