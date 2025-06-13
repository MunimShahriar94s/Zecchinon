import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperCarousel.css';

const SwiperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={2}
      loop={true}
      loopedSlides={2}
      navigation={true}
      className="fullscreen-swiper"
      style={{width: "auto"}}
    >
      <SwiperSlide className="slide"><img src="https://www.zecchinon.com/storage/download/10/L_catalogo-zecchinon-exploring-style-l.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://www.zecchinon.com/storage/download/1/P_catalogo-zecchinon-kitchen-collection-xl.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://www.zecchinon.com/storage/download/2/P_catalogo-zecchinon-young-collection-xl.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
