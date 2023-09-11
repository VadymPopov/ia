import { EffectCoverflow, Pagination } from 'swiper/modules';
import { SwiperWrapper, SwiperPagination } from './Swiper.styled';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiper = ({children}) => {
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
      {children}
      <SwiperPagination className="swiper-pagination" />
    </SwiperWrapper>
  );
}


export default Swiper;