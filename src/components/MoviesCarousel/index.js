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
  require.context('../../assets/images/', false, /.(png)$/)
);

const carouselImg = Object.keys(images)
  .filter((key) => key.includes('imageCarousel'))
  .reduce((obj, key) => {
    return Object.assign(obj, {
      [key]: images[key],
    });
  }, {});

console.log(carouselImg);

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
        {numberImagesArr.map((num) => (
          <CarouselItem
            key={Math.random()}
            imageSrc={carouselImg[`imageCarousel${num}.png`]}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
