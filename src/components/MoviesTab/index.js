import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';
import TabPane1 from './TabPane1';
import TabPane2 from './TabPane2';

const MoviesTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [moviesList, setMoviesList] = useState([]);
  const tabHandler = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    axios
      .get(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09'
      )
      .then((res) => setMoviesList(res.data));
  }, []);

  const newMoviesList = [...moviesList];
  newMoviesList.reverse();

  return (
    <section className='moviesTab container my-0 mx-auto text-center w-full max-w-[940px]'>
      <div className='tabs text-slate-50 flex my-0 mx-auto w-2/4 text-2xl '>
        <div
          className={`${
            activeTab === 'tab1' ? 'active' : ''
          } tab-item cursor-pointer flex-1 font-bold`}
          onClick={() => tabHandler('tab1')}>
          <h1 className='transition-transform hover:scale-125 '>Đang chiếu</h1>
        </div>
        <div
          className={`${
            activeTab === 'tab2' ? 'active' : ''
          } tab-item cursor-pointer flex-1 font-bold`}
          onClick={() => tabHandler('tab2')}>
          <h1 className='transition-transform hover:scale-125'>Sắp chiếu</h1>
        </div>
      </div>

      <div className='tab-content mt-10'>
        {activeTab === 'tab1' ? (
          <TabPane1 moviesList={moviesList} />
        ) : (
          <TabPane2 moviesList={newMoviesList} />
        )}
        {/* <div className='tab-pane active'>
          <div className='moviesItem'>
            <div className='moviesItem__img h-full relative'>
              <a
                href='#'
                className='moviesItem__img__link block h-full w-full p-24'
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
            <div className='moviesItem__footer mt-4 bg-slate-900 h-10'>
              <div className='moviesItem__text flex'>
                <p className='text-white px-1 bg-indigo-700 rounded'>C13</p>
                <p className='text-white font-bold ml-4 flex-1'>Black Adam</p>
              </div>
              <button className='moviesItem__btn mt-4 py-2 w-full rounded text-white bg-gradient-to-r from-indigo-500 to-purple-500'>
                <a href='#'>MUA VÉ</a>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MoviesTab;
