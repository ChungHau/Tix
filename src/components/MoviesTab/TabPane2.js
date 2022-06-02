import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import playIcon from '../../assets/images/play.png';
import Modal from '../Modal/Modal';
import { motion } from 'framer-motion';

function RightArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className='slick-arrow'
      style={{ ...style, display: 'block' }}
      onClick={onClick}>
      <ChevronRightIcon className='w-12 h-12 absolute -right-16 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-700 transition-colors' />
    </button>
  );
}

function LeftArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className='slick-arrow'
      style={{ ...style, display: 'block' }}
      onClick={onClick}>
      <ChevronLeftIcon className='w-12 h-12 absolute -left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-700 transition-colors' />
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,

  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default class TabPane2 extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: [], show: false };
  }

  render() {
    return (
      <>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='tab-pane'>
          <Slider {...settings}>
            {(this.props.moviesList && this.props.moviesList.length) > 0 &&
              this.props.moviesList.map((movie) => (
                <div key={movie.maPhim} className='moviesItem px-3'>
                  <div className='moviesItem__container'>
                    <div className='moviesItem__img h-full relative'>
                      <a
                        href='#'
                        className='moviesItem__img__link block h-full w-full pt-[120%]'
                        style={{
                          background: `url(${movie.hinhAnh}) center center / cover no-repeat`,
                        }}
                      />
                      <div className='playBtn__overplay hidden md:block absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 '>
                        <button onClick={() => this.setState({ show: true })}>
                          <img
                            src={playIcon}
                            alt='playicon'
                            className='h-14 w-14'
                          />
                        </button>
                      </div>
                      <div className='imgOverplay w-full h-full absolute top-0 left-0'></div>
                    </div>
                    <div className='moviesItem__footer mt-4 bg-slate-900 h-10 hidden md:block'>
                      <div className='moviesItem__text text-white w-full h-full flex'>
                        <p className='mr-2 px-2 bg-indigo-700 rounded max-h-5'>
                          C13
                        </p>
                        <p>{movie.tenPhim}</p>
                      </div>
                      <div className='moviesItem__btn mt-4 py-2 w-full rounded text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700'>
                        <a href='#'>CHI TIẾT</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          <Modal
            show={this.state.show}
            onClose={() => this.setState({ show: false })}>
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
        </motion.div>
      </>
    );
  }
}

// const TabPane = () => {
//   const [moviesList, setMoviesList] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09'
//       )
//       .then((res) => {
//         const arr = [...res.data];
//         setMoviesList(arr);
//       });
//   }, []);
//   console.log(moviesList);
//   return (
//     <>
//       <div className='tab-pane active'>
//         {/* <Slider {...settings}>
//           {moviesList &&
//             moviesList.length > 0 &&
//             moviesList.map((movie) => <SliderItem key={movie.maPhim} />)}
//         </Slider> */}
//         <Slider {...settings}>
//           <SliderItem />
//           <SliderItem />
//           <SliderItem />
//           <SliderItem />
//           <SliderItem />
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default TabPane;
