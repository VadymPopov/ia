import { register } from 'swiper/element/bundle';
import './swiper.css';

register();

const Swiper = ({ children }) => {
  return (
    <swiper-container
      slides-per-view="auto"
      centered-slides="true"
      navigation="true"
      pagination="true"
      pagination-dynamic-bullets="true"
      grab-cursor="true"
      effect="coverflow"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
      class="wrapper"
    >
      {children}
    </swiper-container>
  );
};

export default Swiper;
