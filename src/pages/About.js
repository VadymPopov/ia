import {  Item, List, Description } from "./About.styled";
import { Container, Text, Title, Suptitle, Section } from "components/CommonStyles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import aboutMe from '../images/about-me-one.jpg';
import aboutMeTwo from '../images/about-me-two.jpg'

export default function About() {
    const navigate = useNavigate();
    return (
        <Section primary>
    <Container>
       <List>
        <Item><img src={aboutMe} alt="about-me-one" width={270}/></Item>
        <Item><img src={aboutMeTwo} alt="about-me-two" width={270}/></Item>
       </List>

       <Description>
       <Suptitle primary>About me</Suptitle>
       <Title>Best tattoo artist in your city</Title>
       <Text primary main>You have chosen a tattoo artist who goes beyond the ordinary. By coming here, you are stepping into a world of transformation and artistic magic. I am about energy, change and a new way. On this site you can explore my portfolio and schedule the most convenient time for our meeting. Welcome! With each step, you are drawing closer to embracing a new reality tailored specifically for you.</Text>
       <Button onClick={()=>navigate('/booking/small-tattoo')}>Online-Booking</Button>
       </Description>
    </Container>
    </Section>
    );
}