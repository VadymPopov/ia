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
       <Text>You chose not just an ordinary tattoo artist, if you came here, we will do the magic of transformation. I am about energy, change and a new way. On this site you can learn more about my work and book the most convenient time for our meeting. Welcome, you are one step closer to a new reality!</Text>
       <Button>Online-Booking</Button>
       </Description>
    </Container>
    </Section>
    );
}