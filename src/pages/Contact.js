import { Title, Section } from "components/CommonStyles";
import {FlexContainer, StyledIcon, Link, Flex,FlexItem, Label} from './Contact.styled';

import { FiMapPin, FiMail } from 'react-icons/fi';
import {TfiTime} from 'react-icons/tfi';

import EmbeddedMap from '../components/EmbeddedMap';

export default function Contact() {
    return (
  <Section primary={'primary'}>
  <Title>Contact me</Title>
    <FlexContainer>
    <FlexItem>
      <Flex>
      <StyledIcon as={FiMapPin}/>
      <Label>309 King St W 2rd floor, Toronto, ON M5V 1J5</Label> 
      </Flex>
      <Flex>
      <StyledIcon as={FiMail}/>
      <Link href="mailto:InkedbyAlina@gmail.com">Email me</Link>
      </Flex>
      <Flex>
      <StyledIcon as={TfiTime}/>
      <Label>Tue - Sun: 11PM - 8PM</Label>
      </Flex>
    </FlexItem>
    <FlexItem><EmbeddedMap/></FlexItem>
    
    </FlexContainer>
    </Section>
    );
}