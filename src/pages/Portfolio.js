import { Section, Title } from "components/CommonStyles";
import Swiper from "components/Swiper";
import { permanentArray } from "images/permanent";
import { freshArray } from "images/fresh";
import { healedArray } from "images/healed";

export default function Portfolio() {
    return (
    <Section>
        <Title mobile={'mobile'}>Healed Permanent</Title>
            <Swiper>{
            permanentArray.map((item,index)=><swiper-slide class='slide' lazy="true" key={index}>
                <img className="slide-image" src={item} loading="lazy" alt={`permanent-${index}`} />
                </swiper-slide>)}
            </Swiper>
        <Title mobile={'mobile'}>Fresh Tattoos</Title>
            <Swiper>{
            freshArray.map((item,index) =><swiper-slide class='slide' lazy="true" key={index}>
                <img className="slide-image" src={item} loading="lazy" alt={`fresh-${index}`} />
                </swiper-slide>)}</Swiper>
        <Title mobile={'mobile'}>Healed Tattoos</Title>
            <Swiper>
            {healedArray.map((item,index) =><swiper-slide class='slide' lazy="true" key={index}>
                <img className="slide-image" src={item} loading="lazy" alt={`healed-${index}`} />
                </swiper-slide>)}
            </Swiper>
    </Section>
    );
}