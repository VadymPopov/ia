import { Text, Suptitle, Title } from 'components/CommonStyles';
import { Helmet } from 'react-helmet-async';

import {
  ImageRight,
  ImageLeft,
  TattooContainer,
  FlexContainer,
  Container,
} from './Aftercare.styled';
import aftercareOne from '../images/aftercare-one.jpg';
import aftercareTwo from '../images/aftercare-two.jpg';
import aftercareThree from '../images/aftercare-three.jpg';

export default function Aftercare() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover essential tattoo aftercare tips and guidelines . Aftercare instructions will help you ensure the longevity and vibrancy of your new ink. Learn how to care for your tattoo properly and keep it looking its best for years to come."
        />
        <meta
          name="keywords"
          content="Tattoo aftercare, Tattoo healing,  Tattoo care instructions, Tattoo skincare,Tattoo hygiene,Tattoo healing process, Prevent tattoo fading, Tattoo protection"
        />
        <meta name="author" content="Alina Ivenko" />
        <meta property="og:title" content="Tattoo Aftercare" />
        <meta
          property="og:description"
          content="Discover essential tattoo aftercare tips and guidelines . Aftercare instructions will help you ensure the longevity and vibrancy of your new ink. Learn how to care for your tattoo properly and keep it looking its best for years to come."
        />
        <title>Tattoo Aftercare</title>
      </Helmet>
      <Container>
        <FlexContainer>
          <div>
            <Title>Aftercare: General information</Title>
            <Text primary={'primary'}>
              Proper aftercare is an essential part of the process. Once the
              session is complete, it becomes your utmost responsibility to
              ensure the lasting beauty and quality of the artwork. While it is
              not a complicated task, it is strongly recommended to follow the
              necessary guidelines to ensure the best possible outcome and a
              pleasant healing experience. It is not recommended to consume
              alcohol for a period of two days both before and after the
              procedure. This guideline is in place to minimize potential
              complications and promote proper healing. Alcohol can thin the
              blood, increase bleeding, and impair the body's natural healing
              mechanisms, which may adversely affect the final result of your
              tattoo. The healing time varies from individual to individual,
              typically ranging from 3 to 6 weeks.
            </Text>
          </div>
          <ImageRight src={aftercareOne} alt="aftercare-one" />
        </FlexContainer>
      </Container>

      <TattooContainer>
        <Title align={'align'}>Small & Large Tattoo</Title>

        <FlexContainer>
          <ImageLeft src={aftercareTwo} alt="aftercare-two" />
          <div>
            <Suptitle primary={'primary'}>Small Tattoo</Suptitle>
            <Text>
              After the procedure, a small tattoo is wrapped with a tattoo film,
              which should be worn for a period of 5-7 days. During this time,
              it is normal for clots, blood, and fluid to accumulate under the
              film. It is important not to panic, as this is a natural part of
              the healing process. However, it is essential to be aware of
              potential allergies or allergic reactions to the film. If you
              experience symptoms such as skin redness, rash, or severe itching,
              it is crucial to inform the tattoo artist immediately. In such
              cases, the film should be removed within the first day, and the
              tattoo should be washed with water. Instead of wearing the film, a
              moisturizing cream should be applied for the following week. If
              any complications arise, it is advisable to seek assistance from a
              specialist.
            </Text>
            <Text>
              {' '}
              If you are not allergic, it is recommended to wear the protective
              film for the full duration of 5-7 days. Afterward, carefully
              remove the film and begin applying a moisturizing cream for the
              next two weeks. It is strictly prohibited to scratch the tattooed
              area, touch it with dirty hands, damage the film, peel off any
              crusts, expose it to direct sunlight, or swim in open water bodies
              or pools during the healing process. Following these guidelines
              will contribute to a proper healing process and enhance the
              longevity of your tattoo.
            </Text>
          </div>
        </FlexContainer>

        <Suptitle primary={'primary'}>Large Tattoo</Suptitle>
        <Text>
          For larger tattoos, the freshly tattooed area is wrapped with a
          protective film. However, in the case of larger tattoos, it is
          typically advised to remove the film within one hour after returning
          home. Before removing the film, it is important to wash your hands
          thoroughly with soap. Afterward, gently clean the tattooed area with
          soap and water. Following the cleaning, it is recommended to apply a
          thin layer of moisturizing cream to the tattoo for a duration of two
          weeks. During the healing process, it is crucial to avoid engaging in
          active physical exercises that may cause excessive sweating.
          Additionally, swimming and sunbathing under direct sunlight should be
          strictly avoided. It is advisable to keep the tattooed area covered
          during this period to protect it from external factors that may hinder
          the healing process.{' '}
        </Text>
      </TattooContainer>

      <Container>
        <Title>Permanent Makeup</Title>
        <FlexContainer>
          <div>
            <Text>
              After getting a permanent tattoo, it is normal for the treated
              area to experience swelling for around three days. The complete
              healing process typically takes about a month. During this time,
              it is crucial to refrain from peeling off any crusts that may form
              and avoid touching the area with dirty hands. It is also
              recommended to avoid applying cosmetics to the freshly tattooed
              skin for a period of two weeks to allow for proper healing. It is
              highly advisable to schedule a correction appointment around one
              month after the procedure for a separate fee. To minimize the risk
              of adverse reactions, it is recommended to abstain from consuming
              peppery, spicy, salty, or sour foods for a period of three days.
            </Text>
            <Suptitle primary={'primary'}>Eyelash</Suptitle>
            <Text>
              For interciliary areas (between the eyebrows), it is recommended
              to apply a moisturizing cream for a duration of two weeks. This
              will help maintain proper hydration and support the healing
              process. Remember to use clean hands when applying the cream and
              be cautious to avoid contact with the eyes. It is important to
              note that individual skin reactions may vary, so if you experience
              any unexpected responses, it is advisable to consult a
              professional for guidance and additional recommendations.
            </Text>
          </div>
          <ImageRight src={aftercareThree} alt="aftercare-three" />
        </FlexContainer>
        <Suptitle primary={'primary'}>Lips</Suptitle>
        <Text>
          In some cases, a rash or herpes outbreak may occur on the lips after
          getting a tattoo. If you experience symptoms of herpes it is advisable
          to consult a specialist. They may recommend taking anti-herpes pills
          for a duration of five days to manage the outbreak effectively. It is
          crucial to refrain from peeling off any crusts or touching the
          affected area if herpes is present. The rash will typically subside on
          its own over time. To promote healing and prevent dryness, it is
          recommended to apply a moisturizing cream to the lips for a period of
          two weeks. By following these guidelines, you can support the healing
          process and minimize discomfort associated with a herpes outbreak on
          the lips.
        </Text>
        <Suptitle primary={'primary'}>Eyebrows</Suptitle>
        <Text>
          {' '}
          During the first two weeks, it is advised to cleanse the eyebrows
          gently using soap and water. However, it is important to avoid
          moisturizing or applying any moisturizing cream to the area during
          this time.{' '}
        </Text>
      </Container>
    </>
  );
}
