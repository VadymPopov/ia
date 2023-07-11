import { Container, Item, List, Description, Title, Text, Section } from "./About.styled";
import { Suptitle } from "./Home.styled.js";
import Button from "components/Button/Button";

import aboutMe from '../images/about-me-one.jpg';
import aboutMeTwo from '../images/about-me-two.jpg'

export default function About() {
    return (
        <Section>
    <Container>
       <List>
        <Item><img src={aboutMe} alt="about-me-one" width={270}/></Item>
        <Item><img src={aboutMeTwo} alt="about-me-two" width={270}/></Item>
       </List>

       <Description>
       <Suptitle>About me</Suptitle>
       <Title>Best tattoo artist in your city</Title>
       <Text>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always "on the same wave" with clients. Therefore, we are always ready to improve everyone who comes to us!</Text>
       <Button>Online-Booking</Button>
       </Description>
    </Container>
    </Section>
    );
}