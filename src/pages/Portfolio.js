import { Section, Title } from "components/CommonStyles";

import Swiper from "components/Swiper/Swiper";
import { Slide } from "components/Swiper/Swiper.styled";
import { permanentArray } from "images/permanent";
import { freshArray } from "images/fresh";
import { healedArray } from "images/healed";


export default function Portfolio() {
    return (
    <Section>
        <Title>Healed Permanent</Title>
        <Swiper>{
            permanentArray.map((item,index)=><Slide>
                <img key={index} src={item} alt={`permanent-${index}`} />
                </Slide>
            )}</Swiper>
        <Title>Fresh Tattoo</Title>
        <Swiper>{
        freshArray.map((item,index) =><Slide>
        <img key={index} src={item} alt={`fresh-${index}`} />
        </Slide>)
        }</Swiper>
        <Title>Healed Tattoo</Title>
        <Swiper>
        {
        healedArray.map((item,index) =><Slide>
        <img key={index} src={item} alt={`healed-${index}`} />
        </Slide>)
        }
        </Swiper>
    </Section>
    );
}