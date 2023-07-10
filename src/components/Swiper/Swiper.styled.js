import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styled from 'styled-components';

export const SwiperWrapper = styled(Swiper)`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .swiper-button-next {
    border-radius: 50%;
    background-color: #007bff;
    color: #111;

    &::after {
        color: orange;
        font-size: 16px;
    }
}

.swiper-button-prev {
    background-color: #007bff;
  color: #fff;
}

`;

export const Slide = styled(SwiperSlide)`
    background-position: center;
    background-size: cover;
    max-width: 300px;
    max-height: 300px;
    border-radius: 10px;
    overflow: hidden;

&.swiper-button-next,
&.swiper-button-prev {
  background-color: #007bff;
  color: #fff;
  /* Additional styles */
}

    img {
    display: block;
    width: 100%; 
    border-radius: 10px;
    overflow: hidden;
    }
`;

export const SwiperPagination = styled.div`
  .swiper-pagination-bullet {
    background-color: #111;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #999;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: orange;
  }
`;

