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

import { register } from 'swiper/element/bundle';
// import 'swiper/element/css/effect-coverflow';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../swiper.css';

register();

const SwiperComponent = ({children}) => {
  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  return (
    <swiper-container
      // ref={swiperElRef}
      slides-per-view="auto"
      centered-slides="true"
      navigation="true"
      pagination="true"
      pagination-dynamic-bullets="true"
      grab-cursor="true"
      effect='coverflow'
      coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
      coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true"
      class="wrapper"
    >
      {children}
    </swiper-container>
  );
};

export default SwiperComponent;