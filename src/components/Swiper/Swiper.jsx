import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Slide, SwiperWrapper, SwiperPagination } from './Swiper.styled';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Swiper = () => {
  return (
    <SwiperWrapper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      // className="mySwiper"
    >
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </Slide>
      <Slide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </Slide>
      <SwiperPagination className="swiper-pagination" />
    </SwiperWrapper>
  );
}


export default Swiper;