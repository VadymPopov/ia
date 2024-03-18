import { Section, Title, Image } from 'components/CommonStyles';
import Swiper from 'components/Swiper';
import { permanentArray } from 'images/permanent';
import { freshArray } from 'images/fresh';
import { healedArray } from 'images/healed';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore Alina's stunning tattoo portfolio featuring a diverse collection of inked masterpieces."
        />
        <meta
          name="keywords"
          content="fine line tattoo, toronto, canada, skin art, body art, tattoo gallery, tattoo ideas, custom designs "
        />
        <meta name="author" content="Alina Ivenko" />
        <meta property="og:title" content="Alina Ivenko Portfolio" />
        <meta
          property="og:description"
          content="Explore Alina's stunning tattoo portfolio featuring a diverse collection of inked masterpieces."
        />
        <title>Portfolio</title>
      </Helmet>
      <Section>
        <Title mobile={'mobile'}>Healed Permanent</Title>
        <Swiper>
          {permanentArray.map((item, index) => (
            <swiper-slide class="slide" lazy="true" key={index}>
              <Image src={item} loading="lazy" alt={`permanent-${index}`} />
            </swiper-slide>
          ))}
        </Swiper>
        <Title mobile={'mobile'}>Fresh Tattoos</Title>
        <Swiper>
          {freshArray.map((item, index) => (
            <swiper-slide class="slide" lazy="true" key={index}>
              <Image src={item} loading="lazy" alt={`fresh-${index}`} />
            </swiper-slide>
          ))}
        </Swiper>
        <Title mobile={'mobile'}>Healed Tattoos</Title>
        <Swiper>
          {healedArray.map((item, index) => (
            <swiper-slide class="slide" lazy="true" key={index}>
              <Image src={item} loading="lazy" alt={`healed-${index}`} />
            </swiper-slide>
          ))}
        </Swiper>
      </Section>
    </>
  );
}
