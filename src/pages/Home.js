import { useEffect } from 'react';
import {
  MainTitle,
  HeroDescription,
  HeroSection,
  HeroContainer,
  Item,
  List,
  Description,
  Container,
  ToastContainer,
} from './Home.styled.js';
import { Text, Title, Suptitle, Section } from 'components/CommonStyles';
import { CgClose } from 'react-icons/cg';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

import aboutMe from '../images/about-me-one.jpg';
import aboutMeTwo from '../images/about-me-two.jpg';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      toast(
        t => (
          <ToastContainer>
            <button
              onClick={() => {
                toast.dismiss(t.id);
              }}
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <CgClose />
            </button>
            <span>
              <b style={{ fontSize: '24px', color: 'rgba(255, 108, 0, 1)' }}>
                San Francisco!
              </b>
            </span>
            <p style={{ textAlign: 'center', marginBottom: '10px' }}>
              Book via <b>Instagram DMs</b> or <b>Email</b>!
            </p>
            <p
              style={{
                textAlign: 'justify',
                fontSize: '14px',
                marginBottom: '10px',
              }}
            >
              Our booking system is under maintenance. In the meantime, please
              send us a direct message on Instagram or Email to book your
              appointment.
            </p>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}
            >
              <a
                href="https://www.instagram.com/ivenko.alinaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Instagram</Button>
              </a>
              <a href="mailto:InkedbyAlina@gmail.com">
                <Button>Email</Button>
              </a>
            </div>
          </ToastContainer>
        ),
        { duration: 10000, position: 'bottom-center' }
      );
    }, 500);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Your favorite Tattoo and Permanent Makeup Artist in Toronto"
        />
        <meta
          name="keywords"
          content="tattoo, toronto, canada, permanent, makeup, alina ivenko, ivenko alina, ivenko, alina, booking, artist, fine line tattoo, small tattoo, large tattoo, tattoo faqs, aftercare, portfolio"
        />
        <meta name="author" content="Alina Ivenko" />
        <meta property="og:title" content="Alina Ivenko" />
        <meta
          property="og:description"
          content="Your favorite Tattoo and Permanent Makeup Artist in Toronto"
        />
        <title>Ivenko Alina</title>
      </Helmet>

      <HeroSection>
        <HeroContainer>
          <Suptitle>Your favorite tattoo artist</Suptitle>
          <MainTitle>Ivenko Alina</MainTitle>
          <HeroDescription>
            Embrace the art of transformation. Don't hesitate, schedule your
            tattoo appointment right now.
          </HeroDescription>
        </HeroContainer>
      </HeroSection>
      <Section primary={'primary'}>
        <Container>
          <List>
            <Item>
              <img src={aboutMe} alt="about-me-one" width={270} />
            </Item>
            <Item>
              <img src={aboutMeTwo} alt="about-me-two" width={270} />
            </Item>
          </List>

          <Description>
            <Suptitle primary={'primary'}>About me</Suptitle>
            <Title>Your favorite tattoo artist</Title>
            <Text primary={'primary'} main={'main'}>
              You have chosen a tattoo artist who goes beyond the ordinary. By
              coming here, you are stepping into a world of transformation and
              artistic magic. I am about energy, change and a new way. On this
              site you can explore my portfolio and schedule the most convenient
              time for our meeting. Welcome! With each step, you are drawing
              closer to embracing a new reality tailored specifically for you.
            </Text>
            <Button onClick={() => navigate('/booking/service')}>
              Online-Booking
            </Button>
          </Description>
        </Container>
      </Section>
    </>
  );
}
