import React from 'react';
import './MovieSearch.css';

const MovieSearch = () => {
  return (
    <section className='movieSearch hidden lg:block movieSearc bg-slate-100 -translate-y-[80%] h-20 w-[940px] my-0 mx-auto  rounded-md'>
      <form className='movieSearch__form flex items-center h-full text-sm'>
        <div className='movieSearch__group flex-1 h-full '>
          <select className='p-5 bg-slate-100 h-full w-full cursor-pointer'>
            <option disabled selected hidden>
              dsadsadas
            </option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
          </select>
        </div>

        <div className='movieSearch__group flex-1 h-full '>
          <select className='p-5 bg-slate-100 h-full w-full cursor-pointer'>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
          </select>
        </div>

        <div className='movieSearch__group flex-1 h-full '>
          <select className='p-5 bg-slate-100 h-full w-full cursor-pointer'>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
          </select>
        </div>

        <div className='movieSearch__group flex-1 h-full '>
          <select className='p-5 bg-slate-100 h-full w-full cursor-pointer :after:content-none'>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
            <option>dsadsadas</option>
          </select>
        </div>

        <div className='movieSearch__group movieSearch__button flex-1 flex justify-center '>
          <button className='p-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-bold text-white '>
            MUA VÉ NGAY
          </button>
        </div>
      </form>
    </section>
  );
};

export default MovieSearch;
