// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import { SwiperWrapper, SwiperPagination } from './Swiper.styled';
// import { Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const Swiper = ({children}) => {
//   return (
//     <SwiperWrapper
//       effect={'coverflow'}
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={'auto'}
//       coverflowEffect={{
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       }}
//       pagination={{
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       navigation={true}
//       modules={[EffectCoverflow, Pagination, Navigation]}
//       // className="mySwiper"
//     >
//       {children}
//       <SwiperPagination className="swiper-pagination" />
//     </SwiperWrapper>
//   );
// }


// export default Swiper;


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;