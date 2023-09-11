import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

export const SwiperWrapper = styled(Swiper)`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 100px;

    &:last-child {
         margin-bottom: 0;
    }

    @media (max-width: 767px) {
      margin-bottom: 50px;
      &:last-child {
         margin-bottom: 0;
      }
    }

    .swiper-button-next,.swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #555555;
    
    display:flex;
    align-items: center;
    justify-content: center;

    &::after {
      color: #fff;
      font-size: 32px;
    }
}
`;

export const Slide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  max-width: 300px;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;

  img {
  display: block;
  width: 100%; 
  border-radius: 10px;
  overflow: hidden;
  }
`;

// export const SwiperPagination = styled.div`
//   .swiper-pagination-bullet {
//     background-color: #111;
//     width: 10px;
//     height: 10px;
//     margin: 0 5px;
//     border-radius: 50%;
//     cursor: pointer;

//     &:hover {
//       background-color: #999;
//     }
//   }

//   .swiper-pagination-bullet-active {
//     background-color: #007bff;
//   }
// `;

