import { Section, Title } from "components/CommonStyles";
import SwiperComponent from "components/Swiper/Swiper";
// import Swiper from "components/Swiper";
// import { Slide } from "components/Swiper/Swiper.styled";
import { permanentArray } from "images/permanent";
import { freshArray } from "images/fresh";
import { healedArray } from "images/healed";

export default function Portfolio() {
    return (
    <Section>
        <Title mobile={'mobile'}>Healed Permanent</Title>
          <SwiperComponent>{
            permanentArray.map((item,index)=><swiper-slide class='slide' lazy="true" key={index}>
                <img src={item} loading="lazy" alt={`permanent-${index}`} />
                </swiper-slide>
            )}</SwiperComponent>
        <Title mobile={'mobile'}>Fresh Tattoos</Title>
        <SwiperComponent>{
        freshArray.map((item,index) =><swiper-slide class='slide' lazy="true" key={index}>
        <img src={item} loading="lazy" alt={`fresh-${index}`} />
        </swiper-slide>)
        }</SwiperComponent>
        <Title mobile={'mobile'}>Healed Tattoos</Title>
        <SwiperComponent>
        {
        healedArray.map((item,index) =><swiper-slide class='slide' lazy="true" key={index}>
        <img src={item} loading="lazy" alt={`healed-${index}`} />
        </swiper-slide>)
        }
        </SwiperComponent>


        {/* <Swiper>{
            permanentArray.map((item,index)=><Slide key={index}>
                <img src={item} alt={`permanent-${index}`} />
                </Slide>
            )}</Swiper>
        <Title mobile={'mobile'}>Fresh Tattoos</Title>
        <Swiper>{
        freshArray.map((item,index) =><Slide key={index}>
        <img src={item} alt={`fresh-${index}`} />
        </Slide>)
        }</Swiper>
        <Title mobile={'mobile'}>Healed Tattoos</Title>
        <Swiper>
        {
        healedArray.map((item,index) =><Slide key={index}>
        <img src={item} alt={`healed-${index}`} />
        </Slide>)
        }
        </Swiper> */}
    </Section>
    );
}