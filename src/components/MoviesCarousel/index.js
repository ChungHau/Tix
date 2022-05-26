import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import CarouselItem from './CarouselItem/CarouselItem';
import './index.css';
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(
  require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
);

const MoviesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const numberImagesArr = [1, 2, 3, 4];

  return (
    <div className='moviesCarousel mt-24'>
      <Slider {...settings}>
        {images &&
          numberImagesArr.map((num) => (
            <CarouselItem
              key={Math.random()}
              imageSrc={images[`imageCarousel${num}.png`]}
            />
          ))}
      </Slider>
    </div>

    // <div className='bg-white'>
    //   <Slider {...settings}>
    //     <div>
    //       <h3>1</h3>
    //     </div>
    //     <div>
    //       <h3>2</h3>
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>
    // </div>
  );
};

export default MoviesCarousel;
